# APM Shopify resume tuning

**Source ID:** 1j0F8jEBab4FXmzgMRmk0K9qvp3jcB26C

```json
{
  "runSettings": {
    "temperature": 2.0,
    "model": "models/gemini-2.5-pro-exp-03-25",
    "topP": 0.95,
    "topK": 64,
    "maxOutputTokens": 65536,
    "safetySettings": [
      {
        "category": "HARM_CATEGORY_HARASSMENT",
        "threshold": "OFF"
      },
      {
        "category": "HARM_CATEGORY_HATE_SPEECH",
        "threshold": "OFF"
      },
      {
        "category": "HARM_CATEGORY_SEXUALLY_EXPLICIT",
        "threshold": "OFF"
      },
      {
        "category": "HARM_CATEGORY_DANGEROUS_CONTENT",
        "threshold": "OFF"
      }
    ],
    "responseMimeType": "text/plain",
    "enableCodeExecution": false,
    "enableEnhancedCivicAnswers": true,
    "enableSearchAsATool": false,
    "enableBrowseAsATool": false,
    "enableAutoFunctionResponse": false
  },
  "systemInstruction": {},
  "chunkedPrompt": {
    "chunks": [
      {
        "driveDocument": {
          "id": "1_SHWCaJkDOx6u9yJ9Q3p6GJxFEPWOUq8"
        },
        "role": "user",
        "tokenCount": 1033
      },
      {
        "driveDocument": {
          "id": "1_uStDodxQX1P_KJo31JxhdaqBiRaejtxdRIXKkkpP4M"
        },
        "role": "user",
        "tokenCount": 734
      },
      {
        "driveDocument": {
          "id": "1XunkmpqmcKTeXeXBAKomKN53lYTHYYtEW69NubFrAwA"
        },
        "role": "user",
        "tokenCount": 677
      },
      {
        "driveDocument": {
          "id": "1CIkxNqdJTMz46Lj0Y9CWoNPa4xS3hSR2"
        },
        "role": "user",
        "tokenCount": 517
      },
      {
        "driveDocument": {
          "id": "1NGzKhY79sh_F2AGGYHeqEK3rJC1xY3wM_LO4By18368"
        },
        "role": "user",
        "tokenCount": 1037
      },
      {
        "driveDocument": {
          "id": "1CI0m8ndmrSe7LiwGUjRo5I6UibKEF5D-"
        },
        "role": "user",
        "tokenCount": 517
      },
      {
        "driveDocument": {
          "id": "1IvsHBIlJNb0Jl5K-S5Vyu17PlUElaBPoMlz3-ptVGJ4"
        },
        "role": "user",
        "tokenCount": 873
      },
      {
        "driveDocument": {
          "id": "1EnaRvMqI8i7zzJWlOuVnIwArr8X6xRqXgwt5yEcL3KI"
        },
        "role": "user",
        "tokenCount": 1372
      },
      {
        "driveDocument": {
          "id": "1g88tKblqXLCSV5wavKhtoFmDtXK0k28NsKT_LEmFigY"
        },
        "role": "user",
        "tokenCount": 1817
      },
      {
        "driveDocument": {
          "id": "1xc4k0TabazDn6hRYzS46s4RgzxAfRnF_"
        },
        "role": "user",
        "tokenCount": 775
      },
      {
        "driveDocument": {
          "id": "1xbmAtD68y_sW9qCTioKCnOgtd9cuVklz"
        },
        "role": "user",
        "tokenCount": 259
      },
      {
        "driveDocument": {
          "id": "1xXHEd1dNRtEqnnEowztiKWEx48zR-tOZ"
        },
        "role": "user",
        "tokenCount": 775
      },
      {
        "driveDocument": {
          "id": "1hh49FB1nB71T0g5XAuFd_KmocR2vAm7Z"
        },
        "role": "user",
        "tokenCount": 1807
      },
      {
        "driveDocument": {
          "id": "1kXJO6mcLknXAl65hWPQyOzDMoGjrTyS9"
        },
        "role": "user",
        "tokenCount": 775
      },
      {
        "driveDocument": {
          "id": "1JYtKkFfzc0ph1Csz0Tjh_Mg2oMfcshX_"
        },
        "role": "user",
        "tokenCount": 259
      },
      {
        "driveDocument": {
          "id": "1FM00mxzSBaqX6AHP1Ppk8H5a1eQnuEef"
        },
        "role": "user",
        "tokenCount": 775
      },
      {
        "driveImage": {
          "id": "1xR1pnHdrFFLdU5faqAM5uLUMbUMLzNa8"
        },
        "role": "user",
        "tokenCount": 259
      },
      {
        "text": "Please analyze all included files and text below for the purpose of quickly crafting an application for the Shopify APM program. Please wait for my next prompt to proceed. \n\nThis is a bit of info on how I would like to proceed with this application. The last time that I was hired, my resume was only 1 page. We need that level of authentic audacity here. \nHey George,\n \nAfter reading 1000+ resumes, I discovered why even the most qualified candidates get rejected\u2026\n \nIt only takes hiring managers 5 seconds to scan your resume.. \n\n\n \nAnd if it\u2019s missing these 7 patterns, your perfect ChatGPT, keyword-stuffed resume may never be read.\n \nBefore you panic, I\u2019ll share those 7 patterns to triple your chances of landing an interview.\n \nPattern #1: 3-Second Headline\nSuccessful resumes ditch the \u201cProfessional Summary\u201d for a bold, results-focused, value-based headline.\n \nWRONG: \u201cExperienced Marketing Executive with 15+ years of leadership\u201d\nRIGHT: \u201cMarketing Leader Who Doubled Revenue for 3 Global Brands\u201d\n \nMuch sexier, right?\n \nPattern #2: Metrics First\nCreating bullets that include answers to the following questions:\n- How often?\n- How much?\n- How many?\n \nYou can quantify information about money, resources, time, people, projects, or times per day/week/month/quarter/year to stand out as a top candidate.\n \nPattern #3: Show, Don\u2019t Tell\nWinners don\u2019t just list what they did - they show why it mattered. \n \nWRONG: \u201cLed rebranding project across multiple divisions\u201d\nRIGHT: \u201cLed rebranding during company merger, unifying 5 divisions while maintaining 92% brand recognition\u201d\n \nPattern #4: Keyword Clusters\nGroup industry-specific keywords naturally in the first third of the resume.\n \nWRONG: Sprinkling technical terms randomly throughout \nRIGHT: Creating intentional clusters of 3-4 relevant keywords in your top accomplishments\n \nPattern #5: White-Space Principle\nResumes with strategic spacing makes your best information POP.\n \nWRONG: Dense paragraphs of text with minimal margins\nRIGHT: 40-60% white space with bullet points limited to 2 lines each\n \nPattern #6: The \"Problem-Solution-Result\" Formula\nEvery significant bullet point follows this structure.\n \nWRONG: \"Managed team of 12 developers on the customer portal project\"\nRIGHT: \"Resolved persistent customer login issues by leading 12-person development team, cutting support tickets by 62%\"\n \nPattern #7: The \"Subtle Authority Markers\"\nTop candidates include subtle signals that suggest internal knowledge.\n \nWRONG: Generic industry terms anyone could use\nRIGHT: Specific methodologies, tools, and company-specific language that signals you \"speak their language\"\n \nPlease, please, PLEASE remember not to spend too much time perfecting your resume. It just needs to be good enough. \n\n\n\n\n\nHey George, you know what sucks...\n \nSome kid half your age with an MBA and zero battle scars landing the role you've been prepping for your entire career.\n \nThe one who uses \"disruptive\" and \"leverage\" in the same sentence.\nThe one who's never managed through a real crisis but has opinions on \"leadership.\"\nThe one who just got your salary plus a signing bonus despite having the experience of a potted plant.\n \nBut it\u2019s not their fault. \n \nIt\u2019s your storytelling.\n \nWait, wait.. Before you throw hands, hear me out.\n \nI\u2019ll let you in on a secret that only successful execs know (and it beats out any Gen Z. Every. Time.)\n \nYou\u2019re strutting into interviews listing responsibilities and years of experience\u2026\nWhile the kids tell compelling, sexy, and intriguing STORIES that make hiring managers see stars.\n \nSure, the kids might not have your wisdom, but they beat out your narrative game. Hard. \n \nBecause modern interviews aren\u2019t about qualifications. \n \nThey\u2019re about storytelling. \n \nSpecifically SOAR storytelling.\n \nLet me give you an example of how to use SOAR:\n \n\"I managed a team of 30 people\" (yawn)\n \nSOAR Method:\n \n\"When I joined the team [Situation], we were facing declining engagement metrics [Obstacle]. I implemented a new feedback system [Action] that increased retention by 32% [Result].\"\n \nSee the difference?\n \nThe first puts hiring managers to sleep faster than a history documentary at midnight.\n \nThe second makes them lean forward and think, \"I need this person solving MY problems.\"\n \nHere's why you're losing out to the 20-somethings:\n \nYou think your experience speaks for itself (it doesn't)\nYou believe facts are more powerful than stories (they aren't)\nYou're assuming hiring managers understand the value of your experience (they don't)\nYou're answering questions literally instead of strategically (big mistake)\n \nYour experience actually gives you BETTER stories to tell (if done right).\n \nWant to learn how to craft SOAR stories that make your experience your greatest advantage?\n \nSo if you want to beat out the kids at your next interview\u2026\n\n\n\nHey George, \n \nRemember the lie you were told?\n \n\u201cSpecialize! Become the expert! That\u2019s how you\u2019ll secure your future.\u201d\n \nAnd like a good little professional, you listened. \n \nYou got the MBA (and the student loans to prove it). \nDeveloped that niche expertise. \nBecame the go-to [insert specialized title here] who could do that one thing better than anyone. \nPlayed by the rules.\n \nAnd for awhile, it worked beautifully, didn\u2019t it? Hired. Promoted. Built a solid career. \n \nUntil one day, your company announced a \u201cstrategic realignment of resources.\u201d\n(That\u2019s corporate saying for \u201cwe\u2019re firing people but want it to sound like a wellness retreat\u201d)\n \nSuddenly, the specialization that once made you valuable made you\u2026 expendable.\n \nIt\u2019s a cruel joke these days:\n \nThe very expertise that gets you in the door is often what gets you shown the door first. \n \nI\u2019ve watched it happen to executives who were rockstars in their field:\n \nA brilliant tax specialist whose entire department was \u201crelocated\u201d to a country you can\u2019t find on a map\n \nThe marketing wizard whose specialized skills were replaced by an AI that runs on fewer snack and bathroom breaks.\n \nThe operations expert who couldn\u2019t adapt when the company pivoted fast\n \nAll of them betrayed by the same system that promised security in exchange for becoming a specialist.\n \nWhen layoffs hit, you know who got to stay? The generalists. The most adaptable people. \n \nIf you want to survive today\u2019s job market, you need to become two things: \nAdaptable and resourceful. \n \nYou\u2019ve gotta become a \u201cT-Shaped Professional\u201d. \nDeep expertise in one area (the vertical line of the T) combined with the adaptability of a Swiiss Army Knife across multiple domains (the horizontal line).\n \nListen, you\u2019ve become vulnerable to an economy that promised you security in exchange for becoming the \u201cexpert.\u201d \n \nSo, I want to help you transform from \u201ceasily replaceable specialist\u201d to \u201chow the hell would we function without them\u201d professional. \n \nSure, it's easy to post on LinkedIn about how society sold you a fake promise; that you\u2019d always be safe. \n \nBut we have to accept that we can\u2019t change the system; however, we can certainly change how you play the game so you land your role (and keep it, too).\n\nBased on the information available in the sources, you can create a strong file for your Shopify APM program application by highlighting the following experiences and qualities:\n\n**Problem-Solving and Analytical Skills:**\n\n*   You demonstrated problem-solving skills by addressing a **malfunctioning HVAC system** and understanding the potential causes like mold growth due to poor air circulation [\"dirty sock syndrome\"]. You even researched chemical reactions before attempting a remedy.\n*   You displayed analytical thinking by **exploring various US federal environmental organizations**, such as USFS, BLM, USDA, and the Department of Interior. You also critically analyzed the impact of recent layoffs within one of these organizations on your job prospects.\n*   Your ability to **inject subtle critiques into academic papers** regarding the restructuring of environmental organizations shows an awareness of real-world issues and the capacity for nuanced communication.\n*   You are actively trying to **understand the digital transformation in the tech industry** and the impact of artificial intelligence on business models. You recognize the shift towards increased efficiency and a potentially reduced workforce.\n*   You are making efforts to **learn AI systems and platforms**, demonstrating a willingness to adapt to technological changes despite having a background in more analog systems.\n\n**Adaptability and Learning Agility:**\n\n*   You showcased adaptability by **managing an unexpectedly heavy academic course load**, including additional courses due to scheduling conflicts.\n*   Your pursuit of knowledge is described as a **\"perpetual quest\"** driven by a desire to understand both known and unknown aspects of existence, which is seen as essential for survival.\n*   You are **actively seeking to stay relevant in the tech space** and acquire skills that will make you attractive to employers in areas like AI solutions and machine learning. Your learning process in this field is described as exponential.\n\n**Goal-Oriented and Driven:**\n\n*   You are currently focused on **completing your environmental science studies and applying for jobs**, indicating a strong drive to achieve your professional goals.\n*   You have a clear goal to **become the primary financial provider** for your family, demonstrating responsibility and a strong work ethic.\n*   You are intentionally planning and **maintaining focus on long-term goals** despite current trade-offs and challenges.\n\n**Networking and Relationship Building:**\n\n*   You actively participated in a networking event, leading to **connections with various individuals**, including a CEO and founder of a company utilizing satellite imagery, a marketing professional, and two programmers.\n*   You established **two strong professional connections on LinkedIn** who expressed willingness to collaborate on future projects.\n*   You followed up with these connections and the CEO, resulting in **positive progress** in building relationships.\n\n**Entrepreneurial and Innovative Thinking:**\n\n*   You are considering a **personal side project** and exploring its potential to generate income, demonstrating entrepreneurial initiative.\n*   You discussed the possibility of creating a **minimum viable product** with the programmer connections from the networking event.\n*   You are developing a **\"self-discovery model\"** with an acronym STEM (Stasis Through Inevitable Mayhem) that has evolved into a system based on stasis, inferred memory, and imprinting memory, potentially applicable to digital systems with a foundation in the truths of nature.\n\n**Passion for Environment and Interest in Technology:**\n\n*   You are pursuing a degree in **environmental science**, showcasing a commitment to this field.\n*   You are interested in companies that have a focus on both **defense and conservation**, aligning your environmental interests with potential tech applications.\n\n**Reflection and Self-Awareness:**\n\n*   You engage in **introspection and self-reflection**, influenced by past experiences. You are aware of your tendency to make things complex.\n*   You recognize the importance of **balance in life** and are actively striving for it amidst various concerns and responsibilities.\n*   You are aware of your feelings of being \"left behind\" in terms of career progression and are working to address this. You understand the importance of individual timelines for achieving goals.\n\n**Communication and Interpersonal Skills:**\n\n*   The transcripts of your therapy sessions demonstrate your ability to **articulate your thoughts and feelings effectively**.\n*   You show a capacity for **building rapport and connecting with others**, as seen in your interactions during the networking event and the positive connection you felt with the former military AI pilot during the interview.\n\nWhen crafting your application, focus on these points and provide specific examples from the sources (even if you paraphrase them in your own strong narrative) to illustrate these skills and experiences. Emphasize your analytical abilities, your proactive approach to learning new technologies, your goal-oriented mindset, and your capacity to build meaningful connections. Highlight your unique background in environmental science combined with your growing interest and engagement in the tech industry, especially in areas like AI and GIS (Geographical Information Systems).\n\n\nBased on all the data available in the sources, here is a comprehensive file you can use to provide to a model for the purpose of applying to the Shopify APM program:\n\n```\n# George Steward - Application Data for Shopify APM Program\n\n## Summary\n\n**A highly adaptable and results-oriented individual with a unique background blending deep technical expertise in IT and cybersecurity with a strong passion for environmental sustainability and entrepreneurial drive.** Proven leadership capabilities honed through 14 years of military service, coupled with experience in delivering tailored technology solutions and founding an environmentally focused startup. Possesses a strong understanding of complex systems, a customer-centric approach, and a commitment to creating impactful and innovative solutions. Eager to leverage this diverse skillset to contribute to Shopify's mission of empowering entrepreneurs.\n\n## Contact Information\n\n(Please insert your actual contact information here)\n\n## Skills and Expertise\n\n### Technical Skills\n\n*   **Advanced knowledge of IT systems management, network security (CISCO CCNA, CompTIA Security+), and cybersecurity protocols.**\n*   **Proficient in cloud computing platforms (AWS, Azure, Google Cloud) and virtualization platforms (VMware, Nutanix).**\n*   **Experienced with enterprise software solutions, including ServiceNow (Certified System Administrator), and CRM tools (HubSpot, Salesforce).**\n*   **Skilled in data analysis, leveraging tools like Google Sheets and statistical modeling concepts.**\n*   **Familiar with emerging technologies such as AI and machine learning, with an interest in their applications.**\n*   **Understanding of software development methodologies, including Agile.**\n*   **Experience with e-commerce platforms and online business models (implied through the aspiration to join Shopify).**\n\n### Leadership and Project Management\n\n*   **Proven leadership capabilities developed through 14 years of military service as a Chief Information Systems Technician in the U.S. Army's 7th Special Forces Group.**\n*   **Experience leading cross-functional teams in high-pressure environments and managing complex projects with strict timelines and budgets (e.g., relocation of a 2,500-member military unit).**\n*   **Entrepreneurial experience as the Founder of Soil Grower, demonstrating initiative, strategic planning, and the ability to build a business from the ground up.**\n*   **Skilled in stakeholder engagement, resource allocation, and conflict resolution.**\n\n### Interpersonal and Communication Skills\n\n*   **Strong consultative and solution-oriented approach, honed through experience as a Solutions Consultant at ServiceNow, achieving a 110% quota attainment and a 98% customer retention rate.**\n*   **Exceptional presentation and storytelling abilities, effective in communicating complex technical concepts to diverse audiences, including C-level executives and senior military officers.**\n*   **Empathetic leader recognized for fostering inclusive, team-oriented environments.**\n*   **Proven ability to build strong client relationships and understand customer needs.**\n\n### Domain Knowledge (Relevant to Technology & Business)\n\n*   **Experience in delivering customized cloud solutions and improving operational efficiency for enterprise clients.**\n*   **Understanding of IT service management (ITSM) principles (ITIL Foundations certified).**\n*   **Familiarity with the software development lifecycle and deployment processes.**\n*   **Interest in the intersection of technology and various industries (demonstrated through experience in IT, environmental science, and entrepreneurship).**\n\n## Professional Experience\n\n*   **Founder | Soil Grower | 2024 \u2013 Present**\n    *   Spearheaded the development of a consulting business focused on regenerative land management, integrating AI and remote sensing.\n    *   Established strategic partnerships and focused on biodiversity-driven solutions to enhance soil health and carbon storage.\n*   **Solutions Consultant | ServiceNow | 2022 \u2013 2023**\n    *   Delivered customized cloud solutions to enterprise clients, focusing on improving workflows and platform adoption.\n    *   Achieved significant results in client adoption and retention through tailored engagements and demonstrations.\n*   **Chief Information Systems Technician | U.S. Army, 7th Special Forces Group | 2008 \u2013 2013**\n    *   Managed mission-critical communication systems and IT infrastructure for a large military unit in high-stakes environments.\n    *   Oversaw a significant IT budget and ensured seamless technology transitions during unit relocations, while also coordinating environmental impact assessments.\n\n(You can include other relevant professional experiences such as Contract Arborist and Volunteer roles if you feel they showcase transferable skills like problem-solving, customer interaction, and leadership in different contexts.)\n\n## Education\n\n*   **B.Sc. in Environmental Science** (In Progress, Expected June 2025) | American Military University\n*   **A.A.S. in Computer Information Systems** | Reid State Technical College\n\n## Certifications\n\n*   ServiceNow Certified System Administrator\n*   ITIL Foundations, AXELOS Global Best Practice\n*   CompTIA Security+\n*   CISCO CCNA\n\n## Personal Qualities and Values\n\n*   **Strong work ethic, adaptability, and resilience, honed through military service and entrepreneurial endeavors.**\n*   **Driven by a strong sense of purpose and a desire to make a positive impact.**\n*   **Creative and innovative problem-solver with a holistic mindset.**\n*   **Values integrity, community well-being, and ethical leadership.**\n*   **Passionate about continuous learning and leveraging technology for positive change.**\n\n## Aspirations (Alignment with Shopify APM Program)\n\n*   **Eager to apply a strong technical foundation and leadership skills to the challenges of product management within a leading e-commerce platform.**\n*   **Interested in leveraging a customer-centric approach to develop innovative solutions that empower Shopify merchants.**\n*   **Passionate about understanding user needs and translating them into impactful product features.**\n*   **Seeks to contribute to a dynamic and innovative team environment focused on building tools that drive entrepreneurial success.**\n*   **Inspired by Shopify's mission to make commerce better for everyone and believes that a background in diverse problem-solving and technology can contribute to this goal.**\n\n## Unique Perspectives\n\n*   **Brings a unique perspective bridging the gap between technical expertise and a deep understanding of sustainability and ecological principles, potentially valuable in considering the broader impact of e-commerce.**\n*   **Military background provides a structured and disciplined approach to problem-solving and project execution.**\n*   **Entrepreneurial experience demonstrates initiative, adaptability, and a results-oriented mindset.**\n\nThis file provides a comprehensive overview of your skills, experiences, and aspirations, highlighting aspects most relevant to a technology-focused role like an Associate Product Manager at Shopify. Remember to tailor specific aspects further based on the exact requirements and focus areas of the Shopify APM program. Good luck!\n```\n\n\n\nPlease wait for my next prompt to proceed.  I have further context to provide in a voice trascript.",
        "role": "user",
        "tokenCount": 4181
      },
      {
        "text": "",
        "role": "model"
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
