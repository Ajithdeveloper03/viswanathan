<?php
/**
 * Secure SMTP Mail Sender Backend for Viswanathan R Associates
 * Powered by PHPMailer or Native PHP Socket SSL/TLS SMTP
 */

// 1. CORS & Response Headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Ensure POST request
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Method Not Allowed. Only POST is accepted."]);
    exit();
}

// 2. SMTP Configuration
define('SMTP_HOST', 'smtp.gmail.com');
define('SMTP_PORT', 465); // SSL
define('SMTP_USER', 'inymart@gmail.com');
define('SMTP_PASS', 'ismlvwgsqquisscz'); // Google App Password (spaces removed)
define('RECIPIENT_EMAILS', [
    'viswanathanrassociates@gmail.com',
    'vishu@viswanathanrassociates.com'
]);
define('RECIPIENT_NAME', 'Viswanathan R Associates');

// 3. Parse and Sanitize Input Data
$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput, true);

if (!$data) {
    $data = $_POST;
}

$name    = isset($data['name']) ? trim(strip_tags($data['name'])) : '';
$email   = isset($data['email']) ? trim(filter_var($data['email'], FILTER_SANITIZE_EMAIL)) : '';
$phone   = isset($data['phone']) ? trim(strip_tags($data['phone'])) : '';
$service = isset($data['service']) ? trim(strip_tags($data['service'])) : 'General Consultation';
$comment = isset($data['comment']) ? trim(strip_tags($data['comment'])) : '';

// Basic Validation
if (empty($name) || empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Please provide a valid Name and Email address."]);
    exit();
}

// 4. Construct Email Content
$subject = "New Inquiry from {$name} - Viswanathan R Associates";

$htmlBody = "
<!DOCTYPE html>
<html>
<head>
    <meta charset='UTF-8'>
    <style>
        body { font-family: 'Segoe UI', Arial, sans-serif; background-color: #f4f6f8; margin: 0; padding: 20px; }
        .card { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.08); border: 1px solid #e2e8f0; }
        .header { background: #1F2C50; padding: 25px; text-align: center; color: #ffffff; }
        .header h2 { margin: 0; font-size: 22px; color: #ffffff; letter-spacing: 0.5px; }
        .header p { margin: 5px 0 0; color: #C59E5E; font-size: 14px; font-weight: 600; text-transform: uppercase; }
        .content { padding: 30px; color: #334155; line-height: 1.6; }
        .field { margin-bottom: 18px; }
        .label { font-weight: 700; color: #1F2C50; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px; }
        .value { background: #f8fafc; padding: 12px 15px; border-radius: 8px; border: 1px solid #e2e8f0; font-size: 15px; color: #0f172a; }
        .message-box { background: #f8fafc; padding: 15px; border-radius: 8px; border-left: 4px solid #C59E5E; font-size: 15px; white-space: pre-line; }
        .footer { background: #f1f5f9; padding: 15px; text-align: center; font-size: 12px; color: #64748b; border-top: 1px solid #e2e8f0; }
    </style>
</head>
<body>
    <div class='card'>
        <div class='header'>
            <h2>Viswanathan R Associates</h2>
            <p>New Website Consultation Inquiry</p>
        </div>
        <div class='content'>
            <div class='field'>
                <div class='label'>Full Name</div>
                <div class='value'>" . htmlspecialchars($name) . "</div>
            </div>
            <div class='field'>
                <div class='label'>Email Address</div>
                <div class='value'><a href='mailto:" . htmlspecialchars($email) . "'>" . htmlspecialchars($email) . "</a></div>
            </div>
            <div class='field'>
                <div class='label'>Phone Number</div>
                <div class='value'>" . htmlspecialchars($phone ?: 'Not provided') . "</div>
            </div>
            <div class='field'>
                <div class='label'>Selected Service / Requirement</div>
                <div class='value'>" . htmlspecialchars($service) . "</div>
            </div>
            <div class='field'>
                <div class='label'>Message / Comments</div>
                <div class='message-box'>" . nl2br(htmlspecialchars($comment ?: 'No message provided')) . "</div>
            </div>
        </div>
        <div class='footer'>
            This email was securely delivered via the Viswanathan R Associates website consultation form.
        </div>
    </div>
</body>
</html>
";

$plainText = "New Consultation Inquiry\n\nName: {$name}\nEmail: {$email}\nPhone: {$phone}\nService: {$service}\n\nMessage:\n{$comment}\n";

// 5. Lightweight Pure PHP SMTP Client over TLS/SSL Socket
class SimpleSMTP {
    private $socket;
    private $host;
    private $port;
    private $user;
    private $pass;
    private $timeout = 15;

    public function __construct($host, $port, $user, $pass) {
        $this->host = $host;
        $this->port = $port;
        $this->user = $user;
        $this->pass = $pass;
    }

    private function getResponse() {
        $response = "";
        while ($str = fgets($this->socket, 515)) {
            $response .= $str;
            if (substr($str, 3, 1) === " ") {
                break;
            }
        }
        return $response;
    }

    private function sendCommand($cmd, $expectedCode) {
        fputs($this->socket, $cmd . "\r\n");
        $response = $this->getResponse();
        $code = substr($response, 0, 3);
        if ($code != $expectedCode) {
            throw new Exception("SMTP Error: command '{$cmd}' failed with response: {$response}");
        }
        return $response;
    }

    public function send($fromEmail, $fromName, $toEmails, $toName, $replyTo, $subject, $htmlBody, $plainBody) {
        $context = stream_context_create([
            'ssl' => [
                'verify_peer' => false,
                'verify_peer_name' => false,
                'allow_self_signed' => true
            ]
        ]);

        $this->socket = stream_socket_client(
            "ssl://{$this->host}:{$this->port}",
            $errno,
            $errstr,
            $this->timeout,
            STREAM_CLIENT_CONNECT,
            $context
        );

        if (!$this->socket) {
            throw new Exception("Could not connect to SMTP server: {$errstr} ({$errno})");
        }

        $this->getResponse(); // Read greeting banner

        $this->sendCommand("EHLO " . gethostname(), 250);
        $this->sendCommand("AUTH LOGIN", 334);
        $this->sendCommand(base64_encode($this->user), 334);
        $this->sendCommand(base64_encode($this->pass), 235);

        $this->sendCommand("MAIL FROM: <{$this->user}>", 250);
        
        $recipientList = is_array($toEmails) ? $toEmails : [$toEmails];
        foreach ($recipientList as $recEmail) {
            $this->sendCommand("RCPT TO: <{$recEmail}>", 250);
        }

        $this->sendCommand("DATA", 354);

        $boundary = "----=_Part_" . md5(uniqid(time()));

        $toHeader = implode(", ", array_map(function($em) use ($toName) {
            return "=?UTF-8?B?" . base64_encode($toName) . "?= <{$em}>";
        }, $recipientList));

        $headers = [
            "MIME-Version: 1.0",
            "From: =?UTF-8?B?" . base64_encode($fromName) . "?= <{$this->user}>",
            "To: {$toHeader}",
            "Reply-To: <{$replyTo}>",
            "Date: " . date("r"),
            "Subject: =?UTF-8?B?" . base64_encode($subject) . "?=",
            "Content-Type: multipart/alternative; boundary=\"{$boundary}\""
        ];

        $message = implode("\r\n", $headers) . "\r\n\r\n";
        
        // Plain text section
        $message .= "--{$boundary}\r\n";
        $message .= "Content-Type: text/plain; charset=UTF-8\r\n";
        $message .= "Content-Transfer-Encoding: base64\r\n\r\n";
        $message .= chunk_split(base64_encode($plainBody)) . "\r\n";

        // HTML section
        $message .= "--{$boundary}\r\n";
        $message .= "Content-Type: text/html; charset=UTF-8\r\n";
        $message .= "Content-Transfer-Encoding: base64\r\n\r\n";
        $message .= chunk_split(base64_encode($htmlBody)) . "\r\n";

        $message .= "--{$boundary}--\r\n";
        $message .= ".";

        fputs($this->socket, $message . "\r\n");
        $dataResponse = $this->getResponse();
        if (substr($dataResponse, 0, 3) != 250) {
            throw new Exception("Failed to send DATA content: {$dataResponse}");
        }

        $this->sendCommand("QUIT", 221);
        fclose($this->socket);
        return true;
    }
}

// 6. Execute Send
try {
    $smtp = new SimpleSMTP(SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS);
    $smtp->send(
        SMTP_USER,
        "Viswanathan R Associates Website",
        RECIPIENT_EMAILS,
        RECIPIENT_NAME,
        $email,
        $subject,
        $htmlBody,
        $plainText
    );

    http_response_code(200);
    echo json_encode([
        "success" => true,
        "message" => "Your message has been sent successfully! Our team will contact you shortly."
    ]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        "success" => false,
        "message" => "Failed to deliver message. Error: " . $e->getMessage()
    ]);
}
?>
