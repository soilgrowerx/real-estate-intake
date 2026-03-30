---
title: Professional - Soil Grower Website Project Summary
tags:
  - website
  - project
  - soil-grower
  - arboracle
  - gemini-api
  - troubleshooting
  - web-development
  - php
  - javascript
  - cdn
  - google-workspace
  - email-sending
  - plus-codes
  - multimodal-ai
  - technical-summary
  - project-management
  - lessons-learned
date_created: 2025-07-08
action_status:
  - completed
impact_area:
  - regenerative-ag
  - urban-forestry
  - community-science
nature_value: High - Connects users with local ecology and empowers them with data.
---

# Soil Grower Website: Project Overview, Technical Solutions & Key Learnings

This document provides a comprehensive summary of the Soil Grower website development, including the initial project vision, key objectives, and a detailed log of technical solutions and troubleshooting steps. It highlights important commands, their purpose, and context, especially for API integration, AI functionality, and location services, which are highly relevant for future ecological projects.

## Project Vision
To create a dynamic, educational web platform for Soil Grower that serves as a client acquisition tool and a Minimum Viable Product (MVP) for the larger Arboracle vision.

## Key Objectives
- [x] Develop a single-page, nature-aligned website showcasing Soil Grower's consultancy services.
- [x] Integrate the Gemini API to create an AI-powered diagnostic tool, the "Arboracle".
- [x] Enhance the Arboracle with multimodal capabilities (image uploads) and hyper-local data (municipal ordinances, GPS).
- [x] Build a foundation for community engagement through iNaturalist integration.

## Symbiotic Relationships (Linked Notes)
Areas: Austin Metropolitan Area

Resources: iNaturalist API, Google Maps / Plus Codes, Gemini 2.5 Flash API

People: George Steward, SymbiosisTX, Landscope Earth, GTC Tree Care, Tree Mann Solutions

## Session Log & Troubleshooting Details

### Initial Problem Statement (User's Request)
The user reported that their website at `soilgrower.com` was broken, specifically the GPS and AI features.
Runtime errors observed:
- `cdn.tailwindcss.com should not be used in production.` (Warning)
- `Uncaught ReferenceError: OpenLocationCode is not defined` (Critical Error)
- Grammarly-related errors (not directly addressed as part of the core functionality fix).
The website files are located at `/home/George/Arboracle/soilgrower`.

### 1. Location Services & Plus Codes (GPS Integration)

**Goal:** Enable accurate GPS location capture and display using Plus Codes, linking to Google Maps.

#### Initial Problem: `OpenLocationCode is not defined`

**Context:** The `OpenLocationCode` JavaScript library was being called before it was fully loaded by the browser, leading to a `ReferenceError` and non-functional GPS features.

**Solution:** Ensure the library loads early in the HTML.

```markdown
# Command: Move OpenLocationCode script to <head>
print(default_api.replace(
    file_path="/home/george/Arboracle/soilgrower/index.html",
    old_string="    <!-- Moved Plus Code library to the end of the body -->\n    <script src=\"https://cdn.jsdelivr.net/npm/open-location-code@2.0.0/openlocationcode.min.js\"></script>\n    <script>",
    new_string="    <script src=\"https://cdn.jsdelivr.net/npm/open-location-code@2.0.0/openlocationcode.min.js\"></script>\n    <script>"
))
```
*Note: This command was initially attempted to move the script from `<body>` to `<head>`. Subsequent issues revealed CDN problems, not just placement.* 

#### CDN Reliability & URL Formatting

**Context:** The initial CDN link (`cdn.jsdelivr.net/npm/open-location-code@2.0.0/`) was either unavailable or had caching issues. A space was also inadvertently introduced in a later CDN URL, causing a `404 Not Found` error.

**Solution:** Iteratively test and correct CDN URLs, ensuring no malformed characters.

```markdown
# Command: Switch to unpkg.com (attempt 1)
print(default_api.replace(
    file_path="/home/george/Arboracle/soilgrower/index.html",
    old_string="https://cdn.jsdelivr.net/npm/open-location-code@2.0.0/openlocationcode.min.js",
    new_string="https://unpkg.com/open-location-code@latest/openlocationcode.min.js"
))

# Command: Remove accidental space in URL (critical fix)
print(default_api.replace(
    file_path="/home/george/Arboracle/soilgrower/index.html",
    old_string="https://unpkg.com/open-location-code @latest/openlocationcode.min.js",
    new_string="https://unpkg.com/open-location-code@latest/openlocationcode.min.js"
))

# Command: Switch to stable jsdelivr.net link (final working solution)
print(default_api.replace(
    file_path="/home/george/Arboracle/soilgrower/index.html",
    old_string="https://cdn.jsdelivr.net/npm/open-location-code@1.0.4/openlocationcode.min.js",
    new_string="https://cdn.jsdelivr.net/openlocationcode/latest/openlocationcode.min.js"
))
```
*Learning:* Always verify CDN links directly in a browser. Be meticulous about URL formatting. Browser caching can be extremely persistent; hard refreshes are essential during debugging.

#### Plus Code Precision & Google Maps Integration

**Context:** The user required higher precision for Plus Codes (down to feet/cm) and wanted the displayed coordinates to link directly to Google Maps for easy navigation.

**Solution:** Adjust `OpenLocationCode.encode` length and embed Google Maps URL in the display.

```markdown
# Command: Increase Plus Code precision to 15 digits
print(default_api.replace(
    file_path="/home/george/Arboracle/soilgrower/index.html",
    old_string="                    const plusCode = OpenLocationCode.encode(latitude, longitude);",
    new_string="                    const plusCode = OpenLocationCode.encode(latitude, longitude, 15);"
))

# Command: Make Lat/Lon clickable to Google Maps
print(default_api.replace(
    file_path="/home/george/Arboracle/soilgrower/index.html",
    old_string="                    gpsDisplay.innerHTML = `Lat/Lon: ${latitude.toFixed(5)}, ${longitude.toFixed(5)}<br>Plus Code: <a href=\"${plusCodeUrl}\" target=\"_blank\" class=\"text-blue-600 hover:underline\">${plusCode}</a>`;",
    new_string="                    gpsDisplay.innerHTML = `Lat/Lon: <a href=\"https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}\" target=\"_blank\" class=\"text-blue-600 hover:underline\">${latitude.toFixed(5)}, ${longitude.toFixed(5)}</a><br>Plus Code: <a href=\"${plusCodeUrl}\" target=\"_blank\" class=\"text-blue-600 hover:underline\">${plusCode}</a>`;"
))
```
*Learning:* Plus Codes offer configurable precision. Direct linking to mapping services enhances user experience for location data.

## 2. AI Integration (The Arboracle - Gemini API)

**Goal:** Securely integrate the Gemini API for AI analysis and enable multimodal input (text + images).

### API Key Security

**Context:** The Gemini API key was hardcoded in `call-gemini.php`, posing a severe security risk.

**Solution:** Replace the hardcoded key with an environment variable lookup (`getenv()`).

```markdown
# Command: Replace hardcoded API key with environment variable lookup
print(default_api.replace(
    file_path="/home/george/Arboracle/soilgrower/call-gemini.php",
    old_string="// --- IMPORTANT: PASTE YOUR SECRET API KEYS HERE ---\n$geminiApiKey = 'AIzaSyCBw3HdXfDtCx8pB4K3hxrbqStLnJCDyxc';",
    new_string="// --- IMPORTANT: LOAD YOUR SECRET API KEY FROM AN ENVIRONMENT VARIABLE ---\n// NEVER hardcode API keys directly in your code. This is a major security risk.\n// Your key should be stored in a secure, non-public file (e.g., .env) or as a server environment variable.\n// Example: $geminiApiKey = getenv('GEMINI_API_KEY');\n$geminiApiKey = getenv('GEMINI_API_KEY');"
))
```
*Learning:* **Never hardcode API keys.** Use environment variables (`SetEnv` in `.htaccess` for cPanel) for production. This is a fundamental security practice for any API integration.

### Multimodal Input (Images to LLM)

**Context:** The AI analysis form collected images, but they were not being passed to the Gemini LLM for evaluation.

**Solution:** Modify both frontend (JS) and backend (PHP) to send and process base64-encoded image data for the Gemini API.

```markdown
# Command: Modify index.html to send image data with AI request
print(default_api.replace(
    file_path="/home/george/Arboracle/soilgrower/index.html",
    old_string="            const prompt = `\n                You are Bodhi, the wise and serene AI guide for Soil Grower. Your task is to provide a preliminary analysis based on the user's input, formatted in Markdown. If an image is included, use it as a key piece of evidence for identification or diagnosis.\n                User Data:\n                - Municipality: ${formData.municipality}\n                - Tree Ordinance Class: ${formData.classification}\n                - Species: ${formData.species}${gpsText}\n                - Trunk Diameter: ${formData.dbh || 'N/A'} inches\n                - Sun Exposure: ${formData.sun}\n                - Recent Changes: ${formData.changes || 'None'}\n                - Symptoms: ${formData.symptoms}${imageText}\n\n                Structure your response with these exact Markdown headings, incorporating the user's data where relevant:\n                ### A Note on Water & Soil\n                ### Considering the ${formData.species} in ${formData.municipality}\n                ### Potential Root Causes\n                ### Regenerative Pathways\n                ### Your Next Step on the Path\n            `;\n\n            try {\n                const response = await fetch('call-gemini.php', {\n                    method: 'POST',\n                    headers: { 'Content-Type': 'application/json' },\n                    body: JSON.stringify({ action: 'analyze', prompt: prompt })\n                });",
    new_string="            const prompt = `\n                You are Bodhi, the wise and serene AI guide for Soil Grower. Your task is to provide a preliminary analysis based on the user's input, formatted in Markdown. If an image is included, use it as a key piece of evidence for identification or diagnosis.\n                User Data:\n                - Municipality: ${formData.municipality}\n                - Tree Ordinance Class: ${formData.classification}\n                - Species: ${formData.species}${gpsText}\n                - Trunk Diameter: ${formData.dbh || 'N/A'} inches\n                - Sun Exposure: ${formData.sun}\n                - Recent Changes: ${formData.changes || 'None'}\n                - Symptoms: ${formData.symptoms}${imageText}\n\n                Structure your response with these exact Markdown headings, incorporating the user's data where relevant:\n                ### A Note on Water & Soil\n                ### Considering the ${formData.species} in ${formData.municipality}\n                ### Potential Root Causes\n                ### Regenerative Pathways\n                ### Your Next Step on the Path\n            `;\n\n            const requestBody = { action: 'analyze', prompt: prompt };\n            if (formData.image && formData.image.length > 0) {\n                requestBody.image = formData.image;\n            }\n\n            try {\n                const response = await fetch('call-gemini.php', {\n                    method: 'POST',\n                    headers: { 'Content-Type': 'application/json' },\n                    body: JSON.stringify(requestBody)\n                });"
))

# Command: Modify call-gemini.php to process and send image data to Gemini API
print(default_api.replace(
    file_path="/home/george/Arboracle/soilgrower/call-gemini.php",
    old_string="function handle_analysis($data, $key) {\n    // Security check: Ensure the API key has been replaced.\n    if (empty($key) || $key === 'YOUR_SECRET_GEMINI_API_KEY_GOES_HERE') {\n        echo json_encode(['error' => 'API key is not configured on the server.']);\n        exit;\n    }\n\n    if (!isset($data['prompt'])) {\n        echo json_encode(['error' => 'No prompt provided for analysis.']);\n        exit;\n    }\n\n    $prompt = $data['prompt'];\n    // UPDATED to use a more powerful model as requested.\n    $apiUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=' . $key;\n\n    $postData = [\n        'contents' => [['role' => 'user', 'parts' => [['text' => $prompt]]]]\n    ];\n\n    $ch = curl_init($apiUrl);\n    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);\n    curl_setopt($ch, CURLOPT_POST, true);\n    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($postData));\n    curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);\n\n    $response = curl_exec($ch);\n    $httpcode = curl_getinfo($ch, CURLINFO_HTTP_CODE);\n    curl_close($ch);\n\n    if ($response === false || $httpcode >= 400) {\n        echo json_encode(['error' => 'API request failed.', 'details' => json_decode($response)]);\n        exit;\n    }\n\n    $responseData = json_decode($response, true);\n\n    if (isset($responseData['candidates'][0]['content']['parts'][0]['text'])) {\n        $text = $responseData['candidates'][0]['content']['parts'][0]['text'];\n        echo json_encode(['text' => $text]);\n    } else {\n        echo json_encode(['error' => 'Unexpected API response format.', 'details' => $responseData]);\n    }\n}",
    new_string="function handle_analysis($data, $key) {\n    // Security check: Ensure the API key has been replaced.\n    if (empty($key) || $key === 'YOUR_SECRET_GEMINI_API_KEY_GOES_HERE') {\n        echo json_encode(['error' => 'API key is not configured on the server.']);\n        exit;\n    }\n\n    if (!isset($data['prompt'])) {\n        echo json_encode(['error' => 'No prompt provided for analysis.']);\n        exit;\n    }\n\n    $prompt = $data['prompt'];\n    $contents = [['role' => 'user', 'parts' => [['text' => $prompt]]]];\n\n    // Add image data if available\n    if (isset($data['image']) && is_array($data['image'])) {\n        foreach ($data['image'] as $image) {\n            if (isset($image['mimeType']) && isset($image['data'])) {\n                $contents[0]['parts'][] = [\n                    'inline_data' => [\n                        'mime_type' => $image['mimeType'],\n                        'data' => $image['data']\n                    ]\n                ];\n            }\n        }\n    }\n\n    // UPDATED to use a more powerful model as requested.\n    $apiUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=' . $key;\n\n    $postData = [\n        'contents' => $contents\n    ];\n\n    $ch = curl_init($apiUrl);\n    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);\n    curl_setopt($ch, CURLOPT_POST, true);\n    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($postData));\n    curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);\n\n    $response = curl_exec($ch);\n    $httpcode = curl_getinfo($ch, CURLINFO_HTTP_CODE);\n    curl_close($ch);\n\n    if ($response === false || $httpcode >= 400) {\n        echo json_encode(['error' => 'API request failed.', 'details' => json_decode($response)]);\n        exit;\n    }\n\n    $responseData = json_decode($response, true);\n\n    if (isset($responseData['candidates'][0]['content']['parts'][0]['text'])) {\n        $text = $responseData['candidates'][0]['content']['parts'][0]['text'];\n        echo json_encode(['text' => $text]);\n    } else {\n        echo json_encode(['error' => 'Unexpected API response format.', 'details' => $responseData]);\n    }\n}"
))
```
*Learning:* Multimodal AI requires careful structuring of input data (e.g., base64 encoding for images) to match API specifications. This pattern is reusable for any Gemini-powered application requiring image analysis.

## 3. Email Functionality (Send Analysis to Self)

**Goal:** Enable users to email themselves the AI analysis results.

### Problem: PHP `mail()` function unreliability on shared hosting

**Context:** PHP's built-in `mail()` function is often problematic on shared hosting due to server configurations, spam policies, or disabled features. Google Workspace's specific security policies (lack of App Passwords for some plans) further complicated direct SMTP.

**Solution:** Transition to Formspree for email delivery, bypassing server-side SMTP configuration.

```markdown
# Command: Modify index.html to send email data to Formspree endpoint
print(default_api.replace(
    file_path="/home/george/Arboracle/soilgrower/index.html",
    old_string="        async function handleSendEmail() {\n            emailStatus.textContent = 'Email functionality requires a server configuration.';\n            emailStatus.className = 'mt-2 text-sm text-yellow-600';\n        }",
    new_string="        async function handleSendEmail() {\n            emailStatus.textContent = 'Sending...';\n            emailStatus.className = 'mt-2 text-sm text-gray-600';\n            const userEmail = userEmailInput.value;\n            if (!userEmail || !userEmail.includes('@')) {\n                emailStatus.textContent = 'Please enter a valid email address.';\n                emailStatus.className = 'mt-2 text-sm text-red-600';\n                return;\n            }\n\n            try {\n                const formData = new FormData();\n                formData.append('_replyto', userEmail);\n                formData.append('_subject', 'Your Arboracle Tree Analysis from Soil Grower');\n                formData.append('ai_analysis', lastAiResponse);\n                formData.append('original_form_data', JSON.stringify(lastFormData, null, 2));\n\n                const response = await fetch('https://formspree.io/f/xyzjqkbj', {\n                    method: 'POST',\n                    body: formData,\n                    headers: {\n                        'Accept': 'application/json'\n                    }\n                });\n\n                if (response.ok) {\n                    emailStatus.textContent = 'Analysis sent to your email (via Formspree)! Check your inbox.';\n                    emailStatus.className = 'mt-2 text-sm text-green-600';\n                } else {\n                    const errorData = await response.json();\n                    throw new Error(errorData.error || 'Failed to send email via Formspree.');\n                }\n            } catch (error) {\n                console.error(\"Error sending email:\", error);\n                emailStatus.textContent = `Error: ${error.message}. Please ensure your Formspree endpoint is correctly configured.`;\n                emailStatus.className = 'mt-2 text-sm text-red-600';\n            }
        }"
))

# Command: Remove email handling function from call-gemini.php
print(default_api.replace(
    file_path="/home/george/Arboracle/soilgrower/call-gemini.php",
    old_string="} elseif ($action === 'sendEmail') {\n    handle_email($incomingData);\n} else {\n    echo json_encode(['error' => 'No valid action specified.']);\n}",
    new_string="} else {\n    echo json_encode(['error' => 'No valid action specified.']);\n}"
))

print(default_api.replace(
    file_path="/home/george/Arboracle/soilgrower/call-gemini.php",
    old_string="// --- FUNCTION: Handle Sending Email ---\nfunction handle_email($data) {\n    if (!isset($data['email']) || !isset($data['htmlContent'])) {\n        echo json_encode(['error' => 'Missing email or content.']);\n        exit;\n    }\n\n    $to = $data['email'];\n    $subject = 'Your Arboracle Tree Analysis from Soil Grower';\n    \n    // To send HTML mail, the Content-type header must be set\n    $headers = \"MIME-Version: 1.0\" . \"\\r\\n\";\n    $headers .= \"Content-type:text/html;charset=UTF-8\" . \"\\r\\n\";\n    $headers .= 'From: <bodhi@soilgrower.com>' . \"\\r\\n\"; \n    $headers .= 'Reply-To: <george@soilgrower.com>' . \"\\r\\n\";\n\n    $message = \"\\n    <html>\\n    <body style=\'font-family: sans-serif; line-height: 1.6;\'>\\n        <h2>Here is the Arboracle analysis you requested:</h2>\\n        <div style=\'border: 1px solid #ddd; padding: 20px; border-radius: 5px; background-color: #f9f9f9;\'>\\n            {$data['htmlContent']}\\n        </div>\\n        <br>\\n        <p>If you have further questions or would like to schedule an on-site consultation, please visit <a href=\'https://soilgrower.com\'>soilgrower.com</a> or reply to this email.</p>\\n        <p>Thank you,<br>The Soil Grower Team</p>\\n    </body>\\n    </html>\\n    \";\n\n    if (mail($to, $subject, $message, $headers)) {\n        echo json_encode(['success' => true]);\n    } else {\n        echo json_encode(['error' => 'Failed to send email. Please check server configuration.']);\n    }\n}
\n?>",
    new_string="?>"
))
```
*Learning:* For reliable email delivery on shared hosting, especially with complex authentication requirements like Google Workspace, external email APIs (like Formspree for simple forms, or transactional email services like SendGrid/Mailgun for more control) are often superior to PHP's native `mail()` function. Server-level SMTP relay configuration is the ideal solution for sending all domain emails via Google Workspace, but requires host support.

## 4. Tailwind CSS Optimization (Unresolved Automation)

**Goal:** Optimize Tailwind CSS for production by compiling only used styles and removing the CDN dependency.

**Context:** The website initially used the Tailwind CSS CDN, which is not recommended for production due to performance. Attempts were made to automate the build process using `npm` and `npx`.

**Outcome:** Automation failed due to persistent `tailwindcss` executable path issues in the environment. Manual steps were provided.

```markdown
# Command: Initialize npm project (prerequisite for local packages)
print(default_api.run_shell_command(command = "npm init -y", directory = "Arboracle/soilgrower"))

# Command: Install Tailwind CSS as dev dependency
print(default_api.run_shell_command(command = "npm install -D tailwindcss", directory = "Arboracle/soilgrower"))

# Command: Create input.css (entry point for Tailwind)
print(default_api.write_file(content = "@tailwind base;\n@tailwind components;\n@tailwind utilities;\n", file_path = "/home/george/Arboracle/soilgrower/input.css"))

# Command: Create tailwind.config.js (configuration for Tailwind)
print(default_api.write_file(content = "/** @type {import('tailwindcss').Config} */\nmodule.exports = {\n  content: [".\\/index.html"],\n  theme: {\n    extend: {},\n  },\n  plugins: [],\n}\n", file_path = "/home/george/Arboracle/soilgrower/tailwind.config.js"))

# Command: Attempt to run build script (failed repeatedly)
print(default_api.run_shell_command(command = "npm run build:css", directory = "Arboracle/soilgrower"))
```
*Learning:* While `npm` and `npx` are standard, environment-specific issues can prevent automated build processes. Manual intervention or alternative build setups may be necessary. The core principle of compiling production CSS to reduce file size remains critical for performance.

## 5. Minor Fixes

### Favicon 404

**Context:** Browsers requested `favicon.ico` which was missing, leading to a 404 error.

**Solution:** Create a blank `favicon.ico` to prevent the error.

```markdown
# Command: Create blank favicon.ico
print(default_api.write_file(content = "", file_path = "/home/george/Arboracle/soilgrower/favicon.ico"))
```
*Learning:* Small details like favicons contribute to a clean console and user experience.

## Conclusion

This session addressed critical functionality and security issues on the Soil Grower website. Key takeaways for future ecological projects include the importance of robust API key management, understanding CDN behaviors, implementing multimodal AI inputs, and choosing reliable email delivery methods. While some automation challenges remain, the core functionalities are now in place, providing a strong foundation for the Arboracle vision.

---
