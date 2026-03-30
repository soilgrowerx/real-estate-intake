# Inference Explained Simply

**Source ID:** 1WGfRrcE5BXV_7TCLtYSES_Q7yHzQWIjz

```json
{
  "runSettings": {
    "temperature": 1.0,
    "model": "models/learnlm-1.5-pro-experimental",
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
        "text": "Explain inference as cerebras.ai would describe and make it understandable to someone who uses English as a second language or a 5th grader, whichever makes the most sense in this instance",
        "role": "user",
        "tokenCount": 38
      },
      {
        "text": "Imagine you have a really smart dog. You've trained it to recognize pictures of cats and dogs.  \n\n**Training:** You show it many, many pictures. When it sees a cat, you say \"cat!\" When it sees a dog, you say \"dog!\"  The dog learns the patterns in the pictures that make up a cat or a dog.\n\n**Inference:** Now, you show the dog a picture it has *never seen before*. If the picture is of a cat, the smart dog will say (or maybe bark in a special way) \"cat!\" because it remembers the patterns it learned.  If it's a dog, it will say \"dog!\"\n\nThat's inference! **Using what you already know to figure out something new.**\n\nCerebras makes giant computer chips, like super brains for computers. These chips help computers do inference *very fast*.  They can look at new information, like pictures, sounds, or words, and quickly figure out what they are based on what they already learned.  \n\nThink of it like giving your smart dog a superpower to recognize thousands of different animals, objects, and even people instantly! That's what Cerebras helps computers do with inference.\n",
        "role": "model",
        "finishReason": "STOP",
        "tokenCount": 252
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
