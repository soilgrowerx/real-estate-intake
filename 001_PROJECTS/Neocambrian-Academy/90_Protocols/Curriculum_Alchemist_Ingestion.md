# Curriculum Alchemist Ingestion Flow

This document outlines the process for ingesting new curriculum materials into the Neocambrian Academy system.

## High-Level Overview

The Curriculum Alchemist is a system that takes raw educational materials and transforms them into a structured format that can be used by the Neocambrian Academy's planning and delivery systems. The ingestion flow is as follows:

1.  **Input:** Raw curriculum materials are placed in a designated "ingestion" directory.
2.  **Processing:** The Curriculum Alchemist processes the raw materials, extracting key information such as learning objectives, activities, and resources.
3.  **Output:** The processed materials are saved in a structured format (e.g., JSON or YAML) in a "processed" directory.

## Input Format

The raw curriculum materials can be in a variety of formats, including:

*   Markdown files (.md)
*   Text files (.txt)
*   PDF documents (.pdf)

The content of the files should be structured in a way that is easy to parse. For example, using headings to denote different sections of the curriculum.

## Output Format

The processed curriculum materials are saved in a structured format, such as JSON. An example of the output format is as follows:

```json
{
  "title": "Introduction to Photosynthesis",
  "learning_objectives": [
    "Students will be able to define photosynthesis.",
    "Students will be able to identify the inputs and outputs of photosynthesis."
  ],
  "activities": [
    {
      "title": "Leaf Rubbing Art",
      "description": "Students will create art using leaf rubbings.",
      "materials": [
        "Leaves",
        "Crayons",
        "Paper"
      ]
    }
  ],
  "resources": [
    {
      "title": "Photosynthesis for Kids (video)",
      "url": "https://www.youtube.com/watch?v=..."
    }
  ]
}
```
