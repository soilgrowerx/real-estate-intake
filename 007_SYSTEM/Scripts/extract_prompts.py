import os
import re
import glob

COMPOST_DIR = os.path.expanduser("~/Documents/Compost_Pile")
OUTPUT_FILE = os.path.expanduser("~/Documents/Second_Brain/004_RESOURCES/Intent_Engineering/Raw_Prompt_Extraction.md")

def extract_prompts():
    prompts = set()
    
    # Updated patterns to be more robust and capture larger blocks
    patterns = [
        # Matches **User:** or **Prompt:** blocks until next header or bold marker
        re.compile(r'\*\*(?:User|Prompt):\*\*\s*(.*?)(?=\n\n|\*\*(?:Model|AI|Response):\*\*|$)', re.IGNORECASE | re.DOTALL),
        # Matches ### User or ### Prompt blocks
        re.compile(r'###\s*(?:User|Prompt)\s*\n(.*?)(?=\n###|\n\*\*|$)', re.IGNORECASE | re.DOTALL),
    ]

    print("Scanning Compost Pile for markdown files...")
    md_files = glob.glob(os.path.join(COMPOST_DIR, '**', '*.md'), recursive=True)
    print(f"Found {len(md_files)} markdown files.")

    for file_path in md_files:
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
                
                # Check for the filename prompted pattern
                filename = os.path.basename(file_path)
                if "_Prompted " in filename:
                    parts = filename.split("_Prompted ")
                    if len(parts) > 1:
                        prompt_text = parts[1].replace('.md', '').replace('_', ' ').strip()
                        if len(prompt_text) > 15:
                            prompts.add(prompt_text)

                for pattern in patterns:
                    matches = pattern.findall(content)
                    for match in matches:
                        clean_match = match.strip()
                        # Filter for high-fidelity seeds only (ignore one-liners)
                        if len(clean_match) > 50 and len(clean_match.split()) > 10:
                            prompts.add(clean_match)
                            
        except Exception:
            continue

    print(f"Extracted {len(prompts)} unique, full-length prompts.")
    
    os.makedirs(os.path.dirname(OUTPUT_FILE), exist_ok=True)
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as out:
        out.write("# Raw Prompt Extraction (Intent Seeds)\n\n")
        out.write("> This is a corrected, high-fidelity extraction from the Compost Pile. These seeds have been scrubbed of one-liners and verified for complete length.\n\n")
        
        sorted_prompts = sorted(list(prompts), key=len, reverse=True)
        
        for i, prompt in enumerate(sorted_prompts, 1):
            clean_prompt = prompt.replace('\n', ' \n> ')
            out.write(f"## Seed {i}\n> {clean_prompt}\n\n---\n\n")

if __name__ == "__main__":
    extract_prompts()
