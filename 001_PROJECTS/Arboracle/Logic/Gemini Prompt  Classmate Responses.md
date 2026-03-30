# Gemini Prompt & Classmate Responses

**Source ID:** 14bIzntdONXPx2TyRSLdC8ts8Sh_-Vut7

```json
{
  "runSettings": {
    "temperature": 1.0,
    "model": "models/gemini-2.0-pro-exp-02-05",
    "candidateCount": 1,
    "topP": 0.95,
    "topK": 64,
    "maxOutputTokens": 8192,
    "safetySettings": [
      {
        "category": "HARM_CATEGORY_HARASSMENT",
        "threshold": "BLOCK_NONE"
      },
      {
        "category": "HARM_CATEGORY_HATE_SPEECH",
        "threshold": "BLOCK_NONE"
      },
      {
        "category": "HARM_CATEGORY_SEXUALLY_EXPLICIT",
        "threshold": "BLOCK_NONE"
      },
      {
        "category": "HARM_CATEGORY_DANGEROUS_CONTENT",
        "threshold": "BLOCK_NONE"
      },
      {
        "category": "HARM_CATEGORY_CIVIC_INTEGRITY",
        "threshold": "BLOCK_NONE"
      }
    ],
    "responseMimeType": "text/plain",
    "enableCodeExecution": false,
    "enableEnhancedCivicAnswers": true,
    "enableSearchAsATool": false,
    "enableBrowseAsATool": false
  },
  "systemInstruction": {},
  "chunkedPrompt": {
    "chunks": [
      {
        "text": "I need your help to craft a prompt to accomplish the mission below that will apply for any class and will fully capture the essence of my request so that there are no or minimal questions of what to do. this is a prompt for Gemini....\n\nokay next task is to pick 2 of my classmates discussion posts and craft substantive responses to each one. I would like for you to somewhat randomly pick the 2 most relatable ones out of the ones that I sent to you. these posts should be relatable to what I have done myself so that we can find and capitalize on any correlations between my post and theirs. this will help us maintain a distinctly human tone and voice. see the post guidelines on posting responses or comments and let's make sure we meet all requirements there. any references used need to be in apa format.\n",
        "role": "user",
        "tokenCount": 167
      },
      {
        "text": "Okay, here's a comprehensive prompt designed for Gemini, aiming for minimal ambiguity and incorporating all your requirements:\n\n**Prompt for Gemini:**\n\n\"I have provided you with a set of discussion posts from my classmates, along with my own discussion post, and the guidelines for writing response posts in this class.  My goal is to create two substantive, high-quality responses to my classmates' posts that meet all the requirements outlined in the guidelines. I want these responses to feel genuinely human and reflect a connection between my own experiences/ideas and those of my classmates.\n\nHere's the process I'd like you to follow:\n\n1.  **Analyze My Post and Classmate Posts:** Thoroughly read my discussion post and all of the provided classmate discussion posts. Identify the core themes, arguments, and perspectives presented in each. Pay close attention to the specific details each person shared.\n\n2.  **Identify Relatable Posts:** From the set of classmate posts, select the *two* posts that exhibit the strongest connections or correlations to my own post.  \"Relatable\" means there are shared:\n    *   **Themes:**  Do they discuss similar topics, concepts, or ideas?\n    *   **Perspectives:**  Do they share similar viewpoints, even if applied to different examples?\n    *   **Experiences:**  Do they mention personal experiences or examples that resonate with anything in my own post (even if not identical, is there a parallel)?\n    * **Questions/points of confusion.** Did they raise questions or points of confusion that related or mirrored mine?\n    *   Prioritize posts where the connection allows for a *meaningful* and *substantive* response, not just a superficial agreement.\n\n3. **Reasoning:** explain the reasoning for choosing each post.\n\n4.  **Draft Responses:** For *each* of the two selected posts, draft a complete response that adheres to *all* the guidelines provided in the \"Response Post Guidelines\" document.  The responses should:\n    *   **Directly Address the Classmate:** Begin by addressing the classmate by name (you can extract this from their post).\n    *   **Acknowledge Specific Points:**  Explicitly reference *specific* points, arguments, or examples made in the classmate's original post. Don't just say \"I agree with your post.\"  Say \"I agree with your point about [specific point] because...\" or \"Your example of [specific example] resonated with me because...\"\n    *   **Build Upon the Original Post:**  Extend the discussion. This can be done by:\n        *   Offering a different perspective, *respectfully* disagreeing (with justification), or adding nuance.\n        *   Providing additional examples, evidence, or supporting details.\n        *   Connecting the classmate's post to my own post's ideas or experiences (explain the connection clearly).  \"This relates to my point about [my point] because...\"\n        *   Asking thoughtful, clarifying questions *that encourage further discussion* (not just yes/no questions).\n        *   Suggesting further areas of exploration or research.\n    *   **Maintain a Human Tone:**  Write in a conversational, respectful, and engaging style. Avoid overly formal or academic language unless it's necessary for the topic. Use \"I\" statements appropriately to share your perspective. The response should sound like a genuine interaction, not a robotic analysis.\n    *   **Meet Length/Content Requirements:** Ensure the response meets any minimum word count or content requirements specified in the guidelines.\n    *   **APA Citations:** If you use *any* external information, ideas, or quotes (even paraphrased), provide a full APA-formatted citation at the end of the response. If you refer to the course materials, cite them appropriately. Even if you use information presented by me or other students, provide the proper citation.\n\n5.  **Output:** Present the following:\n    *   **Classmate 1 Post Title/Name:** (The title or the classmate's name from the first selected post)\n    *   **Reasoning for Choice:** A brief explanation of why this post was chosen as relatable to mine (1-2 sentences).\n    *   **Draft Response 1:** The complete, ready-to-post response to the first classmate.\n    *   **Classmate 2 Post Title/Name:** (The title or the classmate's name from the second selected post)\n    *   **Reasoning for Choice:** A brief explanation of why this post was chosen as relatable to mine (1-2 sentences).\n    *   **Draft Response 2:** The complete, ready-to-post response to the second classmate.\n\n**Important Notes for Gemini:**\n\n*   **Prioritize Substantive Engagement:**  The quality of the connection and the depth of the response are more important than simply finding *any* similarity.\n*   **Be Specific:**  Vagueness is the enemy of good discussion posts.  Always refer to concrete details.\n*   **Respectful Tone:** Even if disagreeing, maintain a respectful and constructive tone.\n*   **Assume Nothing:** If anything in the guidelines or the posts is unclear, base your interpretation on standard academic discussion post practices.\n* **Assume I know nothing:** I do not know anything about discussion posts and you should pretend I have never done one before.\n* **Use the prompt as a checklist:** double-check all aspects before considering it completed.\n\nThis detailed prompt should guide Gemini effectively. It breaks down the task into manageable steps, emphasizes the key requirements (relatability, substance, human tone, APA citations), and provides clear output expectations. Remember to paste your discussion post, your classmates' posts, and the \"Response Post Guidelines\" into Gemini before running this prompt.\n",
        "role": "model",
        "finishReason": "STOP"
      }
    ],
    "pendingInputs": [
      {
        "text": "",
        "role": "user"
      }
    ]
  }
}
```
