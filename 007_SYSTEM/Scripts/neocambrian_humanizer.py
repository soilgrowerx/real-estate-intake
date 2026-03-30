import sys
import os
import argparse
import subprocess

PROMPT_TEMPLATE = """You are the Neocambrian Architect, an expert editor tasked with humanizing and refining text according to the Neocambrian Codex.

## YOUR GOAL
Transform the provided draft into an "Arboreal Asset." Strip out all signs of AI generation ("Stochastic Parroting") and enforce the Voice Matrix (Ferociously Benevolent, Grounded Complexity, The Blood Signature). 

## HARD CONSTRAINTS (VIOLATION = FAILURE)
1. NO EM DASHES (—). Use colons, semi-colons, or parentheses. Use periods for impact.
2. NO STOCHASTIC PARROTING. Delete phrases like: "In the ever-evolving landscape", "It is important to note", "Delving into", "To summarize", "Moving forward", "A key takeaway is", "At the end of the day".
3. NO PASSIVE VOICE. Use active verbs ("I assessed the canopy", not "The trees were assessed").
4. NO WEAK HEDGING. Replace "I think", "Maybe", "I'm no expert but", "Possibly" with:
   - "I observe..."
   - "The data suggests..."
   - "In my field assessments..."
   - "The evidence points to..."
5. NO TIER 1 AI VOCABULARY: Do not use words like delve, tapestry, vibrant, crucial, robust, seamless, synergy, multifaceted.

## THE LEXICON TO USE (WHEN APPROPRIATE)
- Tier 1 (Universal): Regenerative, Degenerative, Trophic Cascade, Signal-to-Noise, Substrate, Biotic Pump.
- Tier 2 (Contextual): Holobiont, Mycelial Routing, Recursion, Phase Shift, Quantum Darwinism.

## STRUCTURAL PROTOCOL (SKELETON-TO-SIGNAL)
Ensure the final text has a clear "Signal" (a defensible insight or thesis). Keep the text grounded in dirt-under-the-fingernails reality before scaling to high-level abstractions.

## INPUT TEXT:
{input_text}

## TASK
Rewrite the text above to align perfectly with the Neocambrian Codex. Return ONLY the rewritten text, without any conversational filler like "Here is the rewritten text."
"""

def main():
    parser = argparse.ArgumentParser(description="Neocambrian Humanizer: Cleanse AI text using the Codex.")
    parser.add_argument("input_file", help="Path to the text file to humanize.")
    parser.add_argument("-o", "--output", help="Path to save the LLM-ready prompt. Prints to stdout if not provided.")
    parser.add_argument("--run", action="store_true", help="Execute the humanizer via the local openclaw agent/gemini CLI")
    args = parser.parse_args()

    if not os.path.exists(args.input_file):
        print(f"Error: {args.input_file} not found.")
        sys.exit(1)

    with open(args.input_file, 'r', encoding='utf-8') as f:
        input_text = f.read()
    
    final_prompt = PROMPT_TEMPLATE.format(input_text=input_text)

    if args.run:
        print("Submitting to LLM via OpenClaw...")
        # Fallback to local openclaw binary if desired, or just print
        cmd = ["openclaw", "agent", "--message", final_prompt]
        result = subprocess.run(cmd, capture_output=True, text=True)
        print("\n=== REWRITTEN TEXT ===\n")
        print(result.stdout)
    else:
        if args.output:
            with open(args.output, 'w', encoding='utf-8') as f:
                f.write(final_prompt)
            print(f"Prepared prompt written to {args.output}.")
        else:
            print("=== LLM PROMPT FOR HUMANIZATION ===\n")
            print(final_prompt)

if __name__ == "__main__":
    main()
