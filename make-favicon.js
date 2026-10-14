const fs = require('fs');

const img = fs.readFileSync('public/vr-logo.png');
const base64 = img.toString('base64');

// Create standard square favicon with white rounded background focused on the emblem & logo
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <filter id="cardShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="4" stdDeviation="8" flood-color="#000000" flood-opacity="0.12"/>
    </filter>
  </defs>
  <!-- Pure White Background with modern smooth rounded corners (squircle / iOS style) -->
  <rect x="8" y="8" width="496" height="496" rx="108" ry="108" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="4"/>
  
  <!-- Exactly the header logo rendered with comfortable padding inside the white rounded box -->
  <image href="data:image/png;base64,${base64}" x="32" y="32" width="448" height="448" preserveAspectRatio="xMidYMid meet" />
</svg>
`;

fs.writeFileSync('public/favicon.svg', svgContent);
if (fs.existsSync('out')) {
  fs.writeFileSync('out/favicon.svg', svgContent);
}

console.log('Successfully created public/favicon.svg and out/favicon.svg with white background and rounded corners.');
