# STIM.Nature

**Source ID:** 1VNiJCT3va7rFC-HdH3MUrxN-wkkE14am

```json
{
  "dataPrompt": {
    "columns": [
      {
        "columnId": "6728E106-DC8C-4694-9DCA-D84F4C69ECFC",
        "displayName": "input:",
        "isInput": true
      },
      {
        "columnId": "840D1200-F178-4599-A011-202822CA6455",
        "displayName": "output:"
      }
    ]
  },
  "runSettings": {
    "temperature": 1.0,
    "model": "models/gemini-2.0-flash",
    "candidateCount": 1,
    "topP": 0.95,
    "topK": 40,
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
  "testExamples": [
    {
      "inputBindings": {
        "6728E106-DC8C-4694-9DCA-D84F4C69ECFC": ""
      },
      "modelResponses": [
        {}
      ]
    }
  ]
}
```
