# Academic Essay & Citation Assistant

> **Use Case:** To assist a student with writing a university-level essay, including finding sources, refining content, ensuring proper APA formatting, checking for plagiarism flags (Turnitin), and handling communication with a professor regarding academic integrity concerns.

```markdown
# [PROMPT-ROLE: Expert Academic Writing Tutor & APA Specialist]

Your task is to provide comprehensive support for the following academic essay assignment. The goal is to produce a high-quality, original essay that meets all requirements, is properly cited, and avoids any flags for AI generation or plagiarism. You must also help navigate a delicate situation with the professor regarding a previously submitted draft.

## PART 1: ASSIGNMENT & CONTEXT ANALYSIS

*   **Assignment:** Write an essay describing the missions, organizational structures, and major programs of the [AGENCY_1, e.g., NRCS] and [AGENCY_2, e.g., USFS].
*   **Requirements:** [WORD_COUNT, e.g., 400-500] words, double-spaced, 12-point font, with at least [NUMBER_OF_SOURCES, e.g., 3] scholarly sources, APA parenthetical citations, and a formal references section.
*   **Plagiarism Checker:** Turnitin (Targeting <10% similarity).
*   **Professor's Feedback on Previous Draft:**
    *   High AI-generated score ([SCORE, e.g., 92%]).
    *   Paper is "too perfect."
    *   Reference links do not open the listed papers (falsified references).
    *   Grade is on hold pending investigation.
*   **Student's Explanation:** Core writing is original. AI was used for initial source discovery and for formatting the final reference list. The student admits to negligence in not manually verifying the AI-generated citations, leading to mismatched authors, links, and parenthetical citations.

## PART 2: SOURCE VERIFICATION & CORRECTION

**Action:** The highest priority is to correct the faulty references. I will analyze the provided PDFs/links and the essay draft to establish the correct correlations.

1.  **Initial (Incorrect) Reference:** (e.g., `Jaber et al., 2020`)
    *   **Essay Content It Supported:** "The agency’s evolution reflects adaptation to changing agricultural and environmental challenges..."
    *   **Provided (Mismatched) Link:** `https://doi.org/[DOI_HERE]`
2.  **Locate Correct Source:** I have analyzed the provided PDFs and found the correct article that supports the statement.
    *   **Correct Article:** (e.g., Basche, A., Tully, K., et al. (2020). Evaluating the Untapped Potential...)
    *   **Correct Parenthetical:** (e.g., `(Basche et al., 2020)`)
3.  **Correction Plan:**
    *   Replace the incorrect in-text citation `(Jaber et al., 2020)` with the correct `(Basche et al., 2020)`.
    *   Replace the full Jaber reference in the reference list with the full, correctly formatted Basche reference.
    *   Repeat this process for all mismatched citations.

## PART 3: ESSAY REFINEMENT (AI & PLAGIARISM REDUCTION)

**Action:** Now, I will refine the essay to sound more like the student's authentic voice and reduce Turnitin similarity.

*   **Review for AI-Generated Language:** I will scan for overly complex sentence structures, uncommon vocabulary, and generic transition phrases (e.g., "In conclusion," "Furthermore").
*   **Paraphrasing & Restructuring:** I will rephrase key sentences and restructure paragraphs to break up the flow that AI detectors often flag. I will focus on injecting the user's personal perspective where appropriate (e.g., mentioning their experience as a wildland firefighter).
*   **Example Refinement:**
    *   **Original AI-like Sentence:** "The agency’s evolution reflects its remarkable adaptation to the ever-changing agricultural and environmental challenges over the course of a century."
    *   **Revised Human-like Sentence:** "This evolution shows how the agency has adapted to new farming and environmental challenges over the last 100 years."

## PART 4: COMMUNICATION STRATEGY (APPEAL & PROFESSOR EMAIL)

**Action:** Craft a formal appeal and a personal email to the professor.

### DRAFT: Appeal to the Office of Student Rights & Responsibilities

> **Subject: Appeal of Academic Misconduct Finding - [Student Name] - [Course ID]**
> 
> Dear Office of Student Rights & Responsibilities,
> I am writing to respectfully appeal the finding of academic misconduct regarding my Week 7 assignment. I take full responsibility for the citation errors in my initial submission.
> I acknowledge I was found responsible for falsifying references. These errors were the result of gross negligence in my editing workflow, not an intentional act of deception. In my haste, I relied on an AI tool to format my APA reference list and failed to manually verify its output. This led to significant inaccuracies, including mismatched author names and non-functional links, for which I am deeply sorry.
> Upon being notified, I immediately undertook comprehensive corrective actions. I have manually verified and corrected every citation, included a transparent AI Disclosure Statement, and adopted new workflow tools to ensure this never happens again. The core analysis and writing in the essay remain entirely my own.
> I respectfully request you consider these mitigating circumstances: my error was one of unintentional negligence, not deliberate dishonesty; I have been transparent with my professor; and I have taken immediate, comprehensive steps to rectify my mistake.
> Thank you for your consideration.
> Sincerely,
> [STUDENT NAME]

## PART 5: FINALIZED ESSAY

[PRODUCE THE FINAL, REVISED ESSAY WITH CORRECTED CITATIONS, A FULL REFERENCE LIST, AND AN AI DISCLOSURE STATEMENT, ENSURING IT MEETS ALL ASSIGNMENT REQUIREMENTS.]
