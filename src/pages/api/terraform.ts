import { google } from 'googleapis';
import { NextApiRequest, NextApiResponse } from 'next';
import { GARDEN_SCRIPT_TEMPLATE, ARBORACLE_PROMPT } from '../../lib/garden-code';
import fs from 'fs';
import path from 'path';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { tokens, dictionary } = req.body;

  if (!tokens) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const oauth2Client = new google.auth.OAuth2();
  oauth2Client.setCredentials(tokens);

  const drive = google.drive({ version: 'v3', auth: oauth2Client });
  const script = google.script({ version: 'v1', auth: oauth2Client });

  try {
    const log: string[] = []; // Initialize log array
    // 1. Check or Create Root Folder
    let folderId;
    const existingFolders = await drive.files.list({
      q: "name = '00_The_Garden' and mimeType = 'application/vnd.google-apps.folder' and trashed = false",
      fields: 'files(id, name)',
    });

    if (existingFolders.data.files && existingFolders.data.files.length > 0) {
      folderId = existingFolders.data.files[0].id!;
      log.push(`🌌 EXISTING BIOSPHERE DETECTED: Use Root Folder '00_The_Garden' (ID: ${folderId})`);
    } else {
      const folderMetadata = {
        name: '00_The_Garden',
        mimeType: 'application/vnd.google-apps.folder',
      };
      const folder = await drive.files.create({
        requestBody: folderMetadata,
        fields: 'id',
      });
      folderId = folder.data.id!;
      log.push(`🌌 INITIALIZING BIOSPHERE: Root Folder '00_The_Garden' established (ID: ${folderId})`);
    }

    // 2. Check or Create Master Docs
    const docsToCreate = [
      '01_Master_Projects',
      '02_Master_People',
      '03_Master_Ideas',
      '04_Master_Resources',
      '00_The_Synthesis_Log',
    ];

    log.push('🌱 CHECKING MASTER DOCS: Ensuring core organs exist...');
    const gardenMap: Record<string, string> = {};

    for (const name of docsToCreate) {
      // Search for existing file in the folder
      const existingFiles = await drive.files.list({
        q: `name = '${name}' and '${folderId}' in parents and mimeType = 'application/vnd.google-apps.document' and trashed = false`,
        fields: 'files(id, name)',
      });

      if (existingFiles.data.files && existingFiles.data.files.length > 0) {
        gardenMap[name] = existingFiles.data.files[0].id!;
        log.push(`   - ${name} found (ID: ${gardenMap[name]}). Re-linking.`);
      } else {
        const fileMetadata = {
          name,
          mimeType: 'application/vnd.google-apps.document',
          parents: [folderId],
        };
        const file = await drive.files.create({
          requestBody: fileMetadata,
          fields: 'id',
        });
        gardenMap[name] = file.data.id!;
        log.push(`   - ${name} cultivated successfully.`);
      }
    }

    // 3. Clone Artifact (Constitution)
    // Check if exists first
    const existingConstitution = await drive.files.list({
      q: `name = 'The Neocambrian Constitution' and '${folderId}' in parents and mimeType = 'application/vnd.google-apps.document' and trashed = false`,
      fields: 'files(id)',
    });

    if (existingConstitution.data.files && existingConstitution.data.files.length > 0) {
      log.push('📜 CONSTITUTION EXISTS: Skipping inscription.');
    } else {
      log.push('📜 INSCRIBING CONSTITUTION: Cloning the Architect\'s Living Document...');
      const MASTER_CONSTITUTION_ID = '144q8izHegMt2AT9JZbq1NCD3Sb9OxkbeYWr-KbetEHY';

      if (MASTER_CONSTITUTION_ID) {
        try {
          await drive.files.copy({
            fileId: MASTER_CONSTITUTION_ID,
            requestBody: {
              name: 'The Neocambrian Constitution',
              parents: [folderId],
            },
          });
          log.push('   - Constitution successfully cloned from Master Source.');
        } catch (e: any) {
          log.push(`   ⚠️ ERROR: Could not clone Constitution. Check File ID/Permissions. (${e.message})`);
        }
      } else {
        log.push('   ⚠️ NOTICE: Master Constitution ID not configured. Skipping clone.');
      }
    }

    // 4. Create Arboracle Prompt (Overwrite or Skip?) -> Let's skip if exists to avoid clutter
    const existingPrompt = await drive.files.list({
      q: `name = '00_Arboracle_Prompt.txt' and '${folderId}' in parents and mimeType = 'text/plain' and trashed = false`,
      fields: 'files(id)',
    });

    if (existingPrompt.data.files && existingPrompt.data.files.length > 0) {
      log.push('🧠 ARBORACLE PROMPT EXISTS: Skipping synthesis.');
    } else {
      log.push('🧠 SYNTHESIZING ARBORACLE: Preparing the Crystalline Intelligence prompt...');
      const promptMetadata = {
        name: '00_Arboracle_Prompt.txt',
        mimeType: 'text/plain',
        parents: [folderId],
      };
      const promptMedia = {
        mimeType: 'text/plain',
        body: ARBORACLE_PROMPT,
      };
      await drive.files.create({
        requestBody: promptMetadata,
        media: promptMedia,
      });
      log.push('   - Arboracle prompt generated (00_Arboracle_Prompt.txt).');
    }

    // 5. Soul Injection (Apps Script)
    // Always Create a NEW script or UPDATE existing?
    // User wants to fix the script. Updating is cleaner.
    log.push('⚡ SOUL INJECTION: Checking for Omni-Gardener engine...');
    let scriptId;
    const existingScript = await drive.files.list({
      q: `name = '00_Garden_Engine' and '${folderId}' in parents and mimeType = 'application/vnd.google-apps.script' and trashed = false`,
      fields: 'files(id)',
    });

    if (existingScript.data.files && existingScript.data.files.length > 0) {
      scriptId = existingScript.data.files[0].id!;
      log.push(`   - Existing Engine found (ID: ${scriptId}). Updating code core...`);
    } else {
      log.push('   - No Engine found. Creating new host...');
      const scriptMetadata = {
        title: '00_Garden_Engine',
        parentId: folderId,
      };
      const scriptProject = await script.projects.create({
        requestBody: scriptMetadata,
      });
      scriptId = scriptProject.data.scriptId!;
      log.push(`   - Engine project created(ID: ${scriptId}).`);
    }

    // Prepare Code
    let code = GARDEN_SCRIPT_TEMPLATE;
    code = code.replace("PASTE_PROJECTS_DOC_ID_HERE", gardenMap['01_Master_Projects']);
    code = code.replace("PASTE_PEOPLE_DOC_ID_HERE", gardenMap['02_Master_People']);
    code = code.replace("PASTE_IDEAS_DOC_ID_HERE", gardenMap['03_Master_Ideas']);
    code = code.replace("PASTE_RESOURCES_DOC_ID_HERE", gardenMap['04_Master_Resources']);

    // Prepare Dictionary
    let dictString = "";
    if (dictionary) {
      const entries = dictionary.split(',').map((s: string) => s.trim());
      entries.forEach((entry: string) => {
        const [key, val] = entry.split('=').map(s => s.trim());
        if (key && val) {
          dictString += `    "${key}": "${val}",\n`;
        }
      });
    }
    code = code.replace("// PASTE_DICTIONARY_HERE", dictString);

    await script.projects.updateContent({
      scriptId: scriptId,
      requestBody: {
        files: [
          {
            name: 'Code',
            type: 'SERVER_JS',
            source: code,
          },
          {
            name: 'appsscript',
            type: 'JSON',
            source: '{"timeZone":"America/New_York","dependencies":{},"exceptionLogging":"STACKDRIVER","runtimeVersion":"V8"}'
          }
        ],
      },
    });
    log.push('   - Omni-Gardener code injected and sequenced.');

    log.push('🏁 PROTOCOL COMPLETE: The Neocambrian Garden is live.');

    res.status(200).json({ success: true, log, scriptUrl: `https://script.google.com/d/${scriptId}/edit` });

  } catch (error: any) {
    console.error('Terraform Error: [REDACTED]');
    res.status(500).json({ message: 'Terraform failed', error: error.message });
  }
}
