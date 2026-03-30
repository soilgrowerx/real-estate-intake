import os
import re
import glob

COMPOST_DIR = os.path.expanduser("~/Documents/Compost_Pile")
OUTPUT_FILE = os.path.expanduser("~/Documents/Second_Brain/004_RESOURCES/Intent_Engineering/Raw_Prompt_Extraction.md")

def extract_prompts():
    prompts = set()
    
    # regex to find the user prompt within the file content
    # Look for **User:** followed by everything until the next **Model:**, **AI:**, or double newline
    patterns = [
        re.compile(r'\*\*(?:User|Prompt):\*\*\s*(.*?)(?=\n\*\*(?:Model|AI|Response|Gemini):\*\*|$)', re.IGNORECASE | re.DOTALL),
        re.compile(r'###\s*(?:User|Prompt)\s*\n(.*?)(?=\n###|\n\*\*|$)', re.IGNORECASE | re.DOTALL),
    ]

    print("Scanning Compost Pile for markdown files...")
    md_files = glob.glob(os.path.join(COMPOST_DIR, '**', '*.md'), recursive=True)
    print(f"Found {len(md_files)} markdown files.")

    for file_path in md_files:
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
                
                # Check for in-file prompts first (the gold standard)
                found_in_file = False
                for pattern in patterns:
                    matches = pattern.findall(content)
                    for match in matches:
                        clean_match = match.strip()
                        # Only add if it's substantial
                        if len(clean_match) > 40:
                            prompts.add(clean_match)
                            found_in_file = True
                
                # ONLY if we didn't find a prompt in the file, look at the filename
                # (Filenames are often truncated by the OS/exporter)
                if not found_in_file:
                    filename = os.path.basename(file_path)
                    if "_Prompted " in filename:
                        parts = filename.split("_Prompted ")
                        if len(parts) > 1:
                            # This is likely truncated, but it's better than nothing if the file is empty
                            prompt_text = parts[1].replace('.md', '').replace('_', ' ').strip()
                            # We only take filename prompts if they are at least somewhat descriptive
                            if len(prompt_text) > 60:
                                prompts.add(prompt_text + " [Truncated from filename]")

        except Exception as e:
            continue

    # Final Filter: remove the short "one-liners" and fragmented thoughts
    # and remove the specific fragments the user pointed out
    bad_fragments = [
        "wants who wants a sweet treat",
        "look like any of those things",
        "it is not showing as complete",
        "can you help me with my trees",
        "can you finish this table now",
        "Got it Farmer John mushroom",
        "Now do the same for acyclovir"
    ]
    
    clean_prompts = []
    for p in prompts:
        is_bad = False
        for frag in bad_fragments:
            if frag.lower() in p.lower():
                is_bad = True
                break
        
        # Scrub if it's too short or marked as bad
        if not is_bad and len(p.split()) > 8:
            clean_prompts.append(p)

    print(f"Extracted {len(clean_prompts)} unique, full-length prompts.")
    
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as out:
        out.write("# Raw Prompt Extraction (High-Fidelity Intent Seeds)\n\n")
        out.write("> This extraction was re-run to fix truncation issues. It prioritizes full-body text over filenames and filters out low-value fragments.\n\n")
        
        # Sort by length (longest first)
        sorted_prompts = sorted(clean_prompts, key=len, reverse=True)
        
        for i, prompt in enumerate(sorted_prompts, 1):
            # Format nicely
            out.write(f"## Seed {i}\n> {prompt}\n\n---\n\n")

if __name__ == "__main__":
    extract_prompts()
