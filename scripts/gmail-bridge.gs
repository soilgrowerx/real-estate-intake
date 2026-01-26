/**
 * GMAIL BRIDGE - GARDEN ENGINE v1.0
 * 
 * This script runs within your Google Apps Script environment (The Garden Engine).
 * It watches for emails with specific labels and pushes them to your Sovereign Garden.
 * 
 * SETUP:
 * 1. Add this file to your GAS project.
 * 2. Set API_TOKEN and TARGET_URL in Project Settings > Script Properties
 *    OR hardcode them below (be careful with security).
 * 3. Create a trigger: `checkInbox` -> Time-driven -> Every 10 minutes.
 */

const CONFIG = {
  //Label to search for. Create this in Gmail.
  TRIGGER_LABEL: 'Garden/Harvest', 
  
  // Your Cloud Run URL (e.g., https://neocambrian-garden-xyz.run.app)
  // Ensure /api/ingest is appended
  TARGET_URL: 'https://spore.arboracle.app/api/ingest', 
  
  // Must match the token in your Next.js .env (GARDEN_HARVEST_TOKEN)
  API_TOKEN: 'GARDEN_HARVEST_TOKEN_2026' 
};

function checkInbox() {
  const label = GmailApp.getUserLabelByName(CONFIG.TRIGGER_LABEL);
  
  if (!label) {
    Logger.log(`Label '${CONFIG.TRIGGER_LABEL}' not found. Please create it in Gmail.`);
    return;
  }

  const threads = label.getThreads();
  if (threads.length === 0) {
    Logger.log('No threads found to harvest.');
    return;
  }

  Logger.log(`Found ${threads.length} threads to harvest.`);

  threads.forEach(thread => {
    const messages = thread.getMessages();
    const lastMessage = messages[messages.length - 1]; // Get the latest message
    const subject = thread.getFirstMessageSubject();
    const body = lastMessage.getPlainBody();
    const date = lastMessage.getDate();
    const from = lastMessage.getFrom();
    const permalink = thread.getPermalink();

    const payload = {
      source: 'email',
      type: 'text',
      content: `Subject: ${subject}\nFrom: ${from}\n\n${body.substring(0, 2000)}${body.length > 2000 ? '...' : ''}`,
      tags: ['#Email', '#Harvest'],
      sourceUrl: permalink,
      createdAt: date.getTime()
    };

    if (sendToGarden(payload)) {
      // Remove label only if successful to prevent loops
      thread.removeLabel(label);
      Logger.log(`Harvested: ${subject}`);
    }
  });
}

function sendToGarden(payload) {
  try {
    const options = {
      'method': 'post',
      'contentType': 'application/json',
      'headers': {
        'X-Garden-Token': CONFIG.API_TOKEN
      },
      'payload': JSON.stringify(payload)
    };

    const response = UrlFetchApp.fetch(CONFIG.TARGET_URL, options);
    const code = response.getResponseCode();
    
    if (code === 200) {
      return true;
    } else {
      Logger.log(`Failed to send. Response code: ${code}`);
      Logger.log(response.getContentText());
      return false;
    }
  } catch (e) {
    Logger.log(`Error sending to garden: ${e.message}`);
    return false;
  }
}
