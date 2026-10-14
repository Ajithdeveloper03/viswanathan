<?php
/**
 * Official PHPMailer SMTP Backend for Viswanathan R Associates
 * Delivers consultation form inquiries directly to vishu@viswanathanrassociates.com
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
    echo json_encode(["success" => false, "message" => "Method Not Allowed. Only POST requests are accepted."]);
    exit();
}

// 2. SMTP Credentials Configuration
define('SMTP_HOST', 'smtp.gmail.com');
define('SMTP_USER', 'inymart@gmail.com');
define('SMTP_PASS', 'ismlvwgsqquisscz'); // Google App Password
define('RECIPIENT_EMAIL', 'vishu@viswanathanrassociates.com');
define('RECIPIENT_NAME', 'Viswanathan R Associates');

// 3. Parse and Sanitize Input Data
$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput, true);

if (!is_array($data) || empty($data)) {
    $data = $_POST;
}

$name    = isset($data['name']) ? trim(strip_tags($data['name'])) : '';
$email   = isset($data['email']) ? trim(filter_var($data['email'], FILTER_SANITIZE_EMAIL)) : '';
$phone   = isset($data['phone']) ? trim(strip_tags($data['phone'])) : '';
$service = isset($data['service']) ? trim(strip_tags($data['service'])) : 'General Consultation';
$comment = isset($data['comment']) ? trim(strip_tags($data['comment'])) : '';

// Validation
if (empty($name) || empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Please provide a valid Name and Email address."]);
    exit();
}

// 4. Construct Email Templates
$subject = "New Inquiry: {$name} - Viswanathan R Associates";

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
        .header p { margin: 6px 0 0; color: #C59E5E; font-size: 13px; font-weight: 600; text-transform: uppercase; }
        .content { padding: 30px; color: #334155; line-height: 1.6; }
        .field { margin-bottom: 18px; }
        .label { font-weight: 700; color: #1F2C50; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px; }
        .value { background: #f8fafc; padding: 12px 15px; border-radius: 8px; border: 1px solid #e2e8f0; font-size: 15px; color: #0f172a; }
        .message-box { background: #f8fafc; padding: 15px; border-radius: 8px; border-left: 4px solid #C59E5E; font-size: 15px; white-space: pre-line; color: #0f172a; }
        .footer { background: #f1f5f9; padding: 16px; text-align: center; font-size: 12px; color: #64748b; border-top: 1px solid #e2e8f0; }
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
                <div class='label'>Client Name</div>
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
                <div class='label'>Requested Practice / Service</div>
                <div class='value'>" . htmlspecialchars($service) . "</div>
            </div>
            <div class='field'>
                <div class='label'>Message / Requirement Details</div>
                <div class='message-box'>" . nl2br(htmlspecialchars($comment ?: 'No additional notes provided.')) . "</div>
            </div>
        </div>
        <div class='footer'>
            Received securely from viswanathanrassociates.com inquiry portal.
        </div>
    </div>
</body>
</html>
";

$plainText = "New Consultation Inquiry - Viswanathan R Associates\n\n"
           . "Name: {$name}\n"
           . "Email: {$email}\n"
           . "Phone: " . ($phone ?: 'Not provided') . "\n"
           . "Service: {$service}\n\n"
           . "Message:\n" . ($comment ?: 'No additional notes provided.') . "\n";

// 5. Load PHPMailer
$phpmailerLoaded = false;
if (file_exists(__DIR__ . '/phpmailer/src/PHPMailer.php')) {
    require_once __DIR__ . '/phpmailer/src/Exception.php';
    require_once __DIR__ . '/phpmailer/src/PHPMailer.php';
    require_once __DIR__ . '/phpmailer/src/SMTP.php';
    $phpmailerLoaded = true;
} elseif (file_exists(__DIR__ . '/phpmailer/vendor/autoload.php')) {
    require_once __DIR__ . '/phpmailer/vendor/autoload.php';
    $phpmailerLoaded = true;
}

if ($phpmailerLoaded && class_exists('PHPMailer\PHPMailer\PHPMailer')) {
    $mail = new PHPMailer\PHPMailer\PHPMailer(true);

    try {
        // Primary Attempt: Port 465 SSL
        $mail->isSMTP();
        $mail->Host       = SMTP_HOST;
        $mail->SMTPAuth   = true;
        $mail->Username   = SMTP_USER;
        $mail->Password   = SMTP_PASS;
        $mail->SMTPSecure = PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_SMTPS;
        $mail->Port       = 465;
        $mail->Timeout    = 15;
        $mail->CharSet    = 'UTF-8';

        $mail->setFrom(SMTP_USER, 'Viswanathan R Associates Website');
        $mail->addAddress(RECIPIENT_EMAIL, RECIPIENT_NAME);
        $mail->addReplyTo($email, $name);

        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body    = $htmlBody;
        $mail->AltBody = $plainText;

        $mail->send();

        http_response_code(200);
        echo json_encode([
            "success" => true,
            "message" => "Your message has been sent successfully! Our advisory team will get in touch shortly."
        ]);
        exit();
    } catch (\Exception $e1) {
        // Fallback Attempt: Port 587 STARTTLS
        try {
            $mail->clearAllRecipients();
            $mail->clearReplyTos();

            $mail->Port       = 587;
            $mail->SMTPSecure = PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_STARTTLS;
            $mail->SMTPOptions = [
                'ssl' => [
                    'verify_peer' => false,
                    'verify_peer_name' => false,
                    'allow_self_signed' => true
                ]
            ];

            $mail->setFrom(SMTP_USER, 'Viswanathan R Associates Website');
            $mail->addAddress(RECIPIENT_EMAIL, RECIPIENT_NAME);
            $mail->addReplyTo($email, $name);

            $mail->isHTML(true);
            $mail->Subject = $subject;
            $mail->Body    = $htmlBody;
            $mail->AltBody = $plainText;

            $mail->send();

            http_response_code(200);
            echo json_encode([
                "success" => true,
                "message" => "Your message has been sent successfully! Our advisory team will get in touch shortly."
            ]);
            exit();
        } catch (\Exception $e2) {
            // Log error internally and attempt native mail()
            error_log("PHPMailer SMTP Error (SSL: {$e1->getMessage()}, TLS: {$e2->getMessage()})");
        }
    }
}

// 6. Native mail() fallback if PHPMailer had a network restriction
$headers  = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=UTF-8\r\n";
$headers .= "From: Viswanathan R Associates <" . SMTP_USER . ">\r\n";
$headers .= "Reply-To: {$name} <{$email}>\r\n";

if (@mail(RECIPIENT_EMAIL, $subject, $htmlBody, $headers)) {
    http_response_code(200);
    echo json_encode([
        "success" => true,
        "message" => "Your message has been sent successfully! Our advisory team will get in touch shortly."
    ]);
    exit();
}

http_response_code(500);
echo json_encode([
    "success" => false,
    "message" => "Unable to deliver inquiry via SMTP server. Please call us directly or retry in a few moments."
]);
?>
