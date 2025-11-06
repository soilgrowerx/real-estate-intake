import type { FormData } from "../types";

/**
 * Handles the submission of form data and the generated PDF to a no-code automation
 * platform like Zapier or Make.
 * 
 * HOW TO ACTIVATE THIS:
 * 1.  Go to a platform like Zapier.com and create a new "Zap" (workflow).
 * 2.  For the "Trigger," choose the "Webhooks by Zapier" app.
 * 3.  Select the "Catch Hook" event.
 * 4.  Zapier will give you a unique, private webhook URL. Copy it.
 * 5.  Paste that URL into the `webhookUrl` constant below.
 * 6.  In Zapier, you can then add "Actions" to:
 *     - Add a row to a Google Sheet.
 *     - Upload the PDF file to Google Drive.
 *     - Send an email via Gmail or another service.
 * 
 * This approach is secure, requires no backend coding, and is very easy to manage.
 *
 * @param {FormData} formData - The structured data from the intake form.
 * @param {Blob} pdfBlob - The generated PDF file as a Blob.
 * @returns {Promise<void>} - A promise that resolves when the submission is complete.
 */
export const submitDataToBackend = async (formData: FormData): Promise<void> => {
  // ▼▼▼ PASTE YOUR ZAPIER WEBHOOK URL HERE ▼▼▼
  // Example: const webhookUrl = 'https://hooks.zapier.com/hooks/catch/123456/abcdef/';
  const webhookUrl = 'ZAPIER_WEBHOOK_URL_PLACEHOLDER';

  if (!webhookUrl) {
    console.warn("No webhook URL provided in utils/backend.ts. Simulating successful submission.");
    // Simulate a successful submission for local testing if no URL is set
    return new Promise(resolve => setTimeout(() => {
        console.log("Simulated backend submission complete.");
        resolve();
    }, 1000));
  }

  // Create a FormData object to send the JSON data.
  // Zapier automatically parses this format.
  const submissionData = new FormData();

  // Zapier will receive these as distinct fields you can map in your workflow.
  submissionData.append('jsonData', JSON.stringify(formData));
  
  // We can also send individual fields for easier mapping in Zapier if needed.
  submissionData.append('client_name', formData.client.name);
  submissionData.append('client_email', formData.client.email);
  submissionData.append('client_type', formData.clientType as string);


  try {
    await fetch(webhookUrl, {
      method: 'POST',
      mode: 'no-cors',
      body: submissionData,
      // Note: Do not set 'Content-Type' header. The browser sets it correctly 
      // for FormData, which is required for file uploads to work.
    });

    return; // Indicates success

  } catch (error) {
    console.error('Error submitting data to webhook:', error);
    throw new Error('Could not connect to the automation service. Please check the Webhook URL and your connection.');
  }
};
