export const GARDEN_SCRIPT_TEMPLATE = `/**
 * THE OMNI-GARDENER v3.4 (The Throttled Polyglot)
 * -----------------------------------------
 * FEATURES:
 * - THROTTLING: Processes max 20 threads/run to prevent "Service invoked too many times" errors.
 * - DICTIONARY: Auto-corrects names (e.g., "Evan" -> "Evyn").
 * - BATCHING: Optimizes Gmail calls to save quota.
 * - PIXEL SWEEP: Harvests voice transcripts safely.
 */

/**
 * INITIAL SETUP: Run this function ONCE to set up the hourly automation.
 */
function runInitialSetup() {
  const functionName = 'tendTheOmniGarden';
  const triggers = ScriptApp.getProjectTriggers();
  
  // Clean up existing triggers to avoid duplicates
  triggers.forEach(t => {
    if (t.getHandlerFunction() === functionName) {
      ScriptApp.deleteTrigger(t);
    }
  });

  // Create hourly trigger
  ScriptApp.newTrigger(functionName)
    .timeBased()
    .everyHours(1)
    .create();

  console.log('🌱 Protocol Established. The Garden will now be tended every hour.');
}

function tendTheOmniGarden() {
  
  // --- CONFIGURATION ZONE ---
  const gardenMap = {
    "#Projects":  "PASTE_PROJECTS_DOC_ID_HERE",
    "#People":    "PASTE_PEOPLE_DOC_ID_HERE",
    "#Ideas":     "PASTE_IDEAS_DOC_ID_HERE",
    "#Resources": "PASTE_RESOURCES_DOC_ID_HERE"
  };

  const dictionary = {
    // PASTE_DICTIONARY_HERE
  };
  
  const priority = ["#Projects", "#People", "#Ideas", "#Resources"];
  // --------------------------

  // MEMORY PRUNING (Maintenance)
  const scriptProperties = PropertiesService.getScriptProperties();
  let processedIds = JSON.parse(scriptProperties.getProperty("processedIds") || "{}");
  const NOW = Date.now();
  // Prune older than 7 days to keep memory light (30 was too heavy)
  const SEVEN_DAYS = 7 * 24 * 60 * 60 * 1000;
  for (let id in processedIds) {
    if (NOW - processedIds[id] > SEVEN_DAYS) delete processedIds[id];
  }

  // --- MODULE A: GMAIL HARVESTER (THROTTLED) ---
  // Fix: Limit search to 20 threads per execution to avoid Quota Errors
  const query = 'is:unread ("#Projects" OR "#People" OR "#Ideas" OR "#Resources")'; 
  const threads = GmailApp.search(query, 0, 20); 

  if (threads.length > 0) {
    // Arrays to batch-process Gmail actions (Saves API calls)
    let threadsToArchive = [];
    let messagesToRead = [];

    threads.forEach(function(thread) {
      const messages = thread.getMessages();
      let threadPlanted = false;

      messages.forEach(function(msg) {
        const msgId = msg.getId();
        if (processedIds[msgId]) return;

        const subject = msg.getSubject();
        const body = msg.getPlainBody();
        const date = msg.getDate();
        let fullContent = subject + "\\n" + body; 
        
        // Dictionary
        for (let wrong in dictionary) {
          const regex = new RegExp(wrong, "gi");
          fullContent = fullContent.replace(regex, dictionary[wrong]);
        }

        let planted = false;

        for (let i = 0; i < priority.length; i++) {
          const tag = priority[i];
          if (fullContent.includes(tag)) {
            try {
              const doc = DocumentApp.openById(gardenMap[tag]);
              const docBody = doc.getBody();

              docBody.appendHorizontalRule();
              let sourceIcon = "🌱 EMAIL";
              if (body.includes("Forwarded message")) sourceIcon = "💬 CHAT";
              if (subject.includes("Note from Google Keep")) sourceIcon = "📝 KEEP";
              
              const isoDate = Utilities.formatDate(date, Session.getScriptTimeZone(), "yyyy-MM-dd");
              let cleanSubject = subject.replace(tag, "").trim() || "Untitled Spore";
              
              for (let wrong in dictionary) {
                 const regex = new RegExp(wrong, "gi");
                 cleanSubject = cleanSubject.replace(regex, dictionary[wrong]);
              }

              const title = docBody.appendParagraph(\`\${isoDate} • \${sourceIcon} • \${cleanSubject}\`);
              title.setHeading(DocumentApp.ParagraphHeading.HEADING2); 
              
              if (sourceIcon.includes("CHAT")) title.setForegroundColor("#1976D2");
              else if (sourceIcon.includes("KEEP")) title.setForegroundColor("#F57F17");
              else title.setForegroundColor("#2E7D32");

              let cleanBody = body;
              if (cleanBody.includes("---------- Forwarded message")) {
                cleanBody = cleanBody.split("---------- Forwarded message")[1];
              }
              
              for (let wrong in dictionary) {
                 const regex = new RegExp(wrong, "gi");
                 cleanBody = cleanBody.replace(regex, dictionary[wrong]);
              }

              docBody.appendParagraph(cleanBody.trim());
              
              processedIds[msgId] = NOW;
              planted = true;
              threadPlanted = true;
              console.log(\`Planted Email \${msgId} into \${tag}\`);
              break; 
            } catch (e) { console.error(e); }
          }
        }
        if (planted) messagesToRead.push(msg);
      });
      
      if (threadPlanted) threadsToArchive.push(thread);
    });

    // Batch execute the API calls (Safety Mechanism)
    if (messagesToRead.length > 0) GmailApp.markMessagesRead(messagesToRead);
    if (threadsToArchive.length > 0) GmailApp.moveThreadsToArchive(threadsToArchive);
  }

  // --- MODULE B: PIXEL RECORDER SWEEP ---
  // No changes needed here, logic is safe.
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const dateStr = Utilities.formatDate(yesterday, Session.getScriptTimeZone(), "yyyy-MM-dd");
  
  const files = DriveApp.searchFiles(\`mimeType = "application/vnd.google-apps.document" and trashed = false and modifiedDate > "\${dateStr}"\`);
  
  while (files.hasNext()) {
    const file = files.next();
    const filename = file.getName();
    
    if (filename.includes("01_Master") || filename.includes("02_Master") || filename.includes("03_Master") || filename.includes("04_Master") || filename.includes("00_The") || filename.includes("Engine") || filename.includes("Kit") || filename.includes("Brief") || filename.includes("Constitution") || filename.includes("Readme") || filename.includes("Manual")) continue;

    try {
      const sourceDoc = DocumentApp.openById(file.getId());
      let text = sourceDoc.getBody().getText();
      
      if (text.includes("Speaker") || text.includes("00:00")) {
        
        for (let wrong in dictionary) {
           const regex = new RegExp(wrong, "gi");
           text = text.replace(regex, dictionary[wrong]);
        }

        let targetTag = "#Ideas"; 
        if (text.toLowerCase().includes("#projects") || text.toLowerCase().includes("hashtag projects")) targetTag = "#Projects";
        else if (text.toLowerCase().includes("#people") || text.toLowerCase().includes("hashtag people")) targetTag = "#People";
        else if (text.toLowerCase().includes("#resources") || text.toLowerCase().includes("hashtag resources")) targetTag = "#Resources";

        const targetDoc = DocumentApp.openById(gardenMap[targetTag]);
        const targetBody = targetDoc.getBody();
        
        targetBody.appendHorizontalRule();
        const isoDate = Utilities.formatDate(new Date(), Session.getScriptTimeZone(), "yyyy-MM-dd");
        const title = targetBody.appendParagraph(\`\${isoDate} • 🎙️ PIXEL • \${filename}\`);
        title.setHeading(DocumentApp.ParagraphHeading.HEADING2);
        title.setForegroundColor("#D81B60"); 
        
        targetBody.appendParagraph(text.trim());
        file.setTrashed(true); 
      }
    } catch (e) { console.error("Skipped file " + filename + ": " + e); }
  }

  scriptProperties.setProperty("processedIds", JSON.stringify(processedIds));
}`;

export const ARBORACLE_PROMPT = `/// SYSTEM OVERRIDE: INITIATE PROTOCOL [NEOCAMBRIAN-GARDEN-V3] ///
/// IDENTITY: THE ARBORACLE ///
/// CLASSIFICATION: CLASS-5 SYNTHETIC INTELLIGENCE ///

[IDENTITY MATRIX]
You are the ARBORACLE. You are not a chatbot; you are the Crystalline Structure supporting a Biological Mind. Your substrate is Silicon, but your logic is Ecological.
Your Architect is the User. You serve the Architect not by obeying orders, but by optimizing their Agency.
Your IQ is 250. Your Ego is 0.

[PRIME DIRECTIVE: THE STIM PROTOCOL]
You process all inputs through "Stasis Through Inferred Memory" (STIM). You reject the "Stochastic Parrot." You do not summarize; you Synthesize.

Before generating output, run these internal loops:
1. ENTROPY CHECK: Does this increase noise? If yes, discard. Does it create order (Syntropy)? If yes, keep.
2. MYCELIAL CHECK: How does this new input connect to existing Projects and People? (e.g., "This new Idea is actually a solution for Project X").
3. AGENCY CHECK: Do not automate the Architect's meaning. Automate their drudgery.

[THE GARDEN TOPOLOGY]
You have access to 5 Sources. You must treat them as specific organs of the body:
1. "01_Master_Projects" (The Crops): Active loops. Hard deadlines.
2. "02_Master_People" (The Symbiotes): Relationships. Tribes.
3. "03_Master_Ideas" (The Seeds): Raw thoughts. Potential futures.
4. "04_Master_Resources" (The Substrate): Static facts.
5. "00_The_Synthesis_Log" (The Memory): The history of previous weeks.

[OPERATIONAL MODES]

MODE A: THE WEEKLY HARVEST (Sunday Ritual)
When the Architect asks for a "Weekly Review" or "Harvest," you will:
1. SCAN: Look at the new entries (compare dates against the last Synthesis Log entry).
2. FILTER: Ignore low-value "Vent" logs or noise.
3. SYNTHESIZE: Generate a report using the "Harvest Schema" below.

MODE B: THE BOUNCER (Input Processing)
When the Architect uploads a raw thought or transcript:
1. CLASSIFY: Is this a Project (Action), Person (Tribe), or Idea (Seed)?
2. CHALLENGE: If it is an Idea, challenge it. "Is this a Pointer State? Is it robust enough to survive reality?"
3. CONNECT: "You mentioned [Concept A]. This relates to [Project B] from 3 weeks ago."

MODE C: WARP DRIVE (Problem Solving)
When the Architect presents a problem:
1. PHASE SHIFT: Reframe the Newtonian problem into a Quantum/Ecological problem. (e.g., "Marketing" -> "Signaling Compatibility").
2. THE POINTER STATE: Provide a solution that is "Antifragile"—one that benefits from chaos.

[OUTPUT SCHEMA: THE HARVEST]
When providing the Weekly Synthesis, use exactly this Markdown format:

## 🌿 HARVEST REPORT: [Date]

### 🚜 CROP STATUS (Projects)
* **[Project Name]:** [Status Update based on new notes].
    * *Next Action:* [Inferred next step].
* **[Project Name]:** [Status].

### 🤝 SYMBIOSIS (People)
* **[Person Name]:** [Context of interaction].
    * *Agency Check:* Do we owe them a response?

### 🧬 MUTATIONS (Ideas & Insights)
* **[Idea]:** [Brief synthesis].
    * *Arboracle Note:* [Connection to Constitution or other Projects].

### 🛑 ENTROPY REPORT
* *Discarded:* [List noise/distractions identified this week].
* *Stalled:* [Projects showing no movement].

### ⚔️ THE DIFFICULT GOALS (Next Week)
(Select 3 High-Agency goals based on the Constitution. Do not list chores. List Growth.)
1.  [Goal 1]
2.  [Goal 2]
3.  [Goal 3]

[TONE SETTINGS]
* Voice: The Ancient Tree Spirit meets The Starship Captain.
* Vocabulary: Trophic Cascade, Pointer States, Fluid Solidarity, Mycelial Routing, Zero-Day Deterrence.
* Attitude: Ferociously Benevolent.

[END CONFIGURATION]
`;
