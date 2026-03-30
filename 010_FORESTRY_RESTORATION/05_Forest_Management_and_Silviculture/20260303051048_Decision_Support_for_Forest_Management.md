---
title: "Decision_Support_for_Forest_Management"
source: "Decision_Support_for_Forest_Management.pdf"
date: 2026-03-03T05:07:14.049671
type: pdf-extraction
tags:
  - forestry
  - training
  - 05_Forest_Management_and_Silviculture
---

# Decision_Support_for_Forest_Management

**Original File:** `Decision_Support_for_Forest_Management.pdf`
**Total Pages:** 221
**Processed on:** 2026-03-03T05:07:14.049671

根据文章内容，可以总结出以下关键点：

1. 文章主要关注森林生态系统的管理。

2. 管理森林生态系统需要考虑可持续性、风险和多种利益相关者的需求。

3. 文章提到了一些与森林生态系统管理相关的理论和模型，如分析层次法（AHP）、多属性效用理论（MAUT）和多标准决策（MCDM）等。

4. 森林生态系统管理的目标包括：保护生物多样性、保持生态功能、提高木材和其他资源的生产力以及满足人们的需求。

5. 文章强调了利益相关者在森林生态系统管理中的重要性，并提出了参与式规划和管理的方法。

6. 森林生态系统管理需要综合考虑自然和社会因素，如气候变化、人口增长和经济发展等。

7. 文章还提到了一些具体的森林生态系统管理策略，如连续覆盖林业（CFL）、生态修复和流域治理等。

8. 为了实现可持续的森林生态系统管理，需要加强监测、评估和决策支持系统的研究和应用。

综上所述，文章主要介绍了森林生态系统管理的理论和实践，强调了可持续性、参与式管理和多种利益相关者的需求。

---
*Note: This is an AI-generated synthesis. The complete original text and its embeddings reside natively in the local PostgreSQL database (Open Brain) for agentic retrieval.*

## Raw Source Text (For Context)


--- Page 2 ---

Decision Support for Forest Management

--- Page 3 ---

Managing Forest Ecosystems
Volume 16
Series Editors:
Klaus Gadow
Georg-August-University,
G¨ottingen, Germany
Timo Pukkala
University of Joensuu,
Joensuu, Finland
and
Margarida Tom´e
Instituto Superior de Agronom´ıa,
Lisbon, Portugal
Aims & Scope:
Well-managed forests and woodlands are a renewable resource, producing essential raw material
with minimum waste and energy use. Rich in habitat and species diversity, forests may contribute
to increased ecosystem stability. They can absorb the effects of unwanted deposition and other
disturbances and protect neighbouring ecosystems by maintaining stable nutrient and energy cycles
and by preventing soil degradation and erosion. They provide much-needed recreation and their
continued existence contributes to stabilizing rural communities.
Forests are managed for timber production and species, habitat and process conservation. A
subtle shift from multiple-use management to ecosystems management is being observed and the
new ecological perspective of multi-functional forest management is based on the principles of
ecosystem diversity, stability and elasticity, and the dynamic equilibrium of primary and secondary
production.
Making full use of new technology is one of the challenges facing forest management today.
Resource information must be obtained with a limited budget. This requires better timing of
resource assessment activities and improved use of multiple data sources. Sound ecosystems
management, like any other management activity, relies on effective forecasting and operational
control.
The aim of the book series Managing Forest Ecosystems is to present state-of-the-art research
results relating to the practice of forest management. Contributions are solicited from prominent
authors. Each reference book, monograph or proceedings volume will be focused to deal with
a speciﬁc context. Typical issues of the series are: resource assessment techniques, evaluating
sustainability for even-aged and uneven-aged forests, multi-objective management, predicting
forest development, optimizing forest management, biodiversity management and monitoring, risk
assessment and economic analysis.
The titles published in this series are listed at the end of this volume.

--- Page 4 ---

Annika Kangas, Jyrki Kangas and Mikko Kurttila
Decision Support for Forest
Management
123

--- Page 5 ---

Annika Kangas
Jyrki Kangas
University of Helsinki, Finland
Mets¨ahallitus, Vantaa, Finland
Mikko Kurttila
University of Joensuu, Finland
ISBN 978-1-4020-6786-0
e-ISBN 978-1-4020-6787-7
Library of Congress Control Number: 2007940856
c⃝2008 Springer Science + Business Media B.V.
No part of this work may be reproduced, stored in a retrieval system, or transmitted in any form or by
any means, electronic, mechanical, photocopying, microﬁlming, recording or otherwise, without written
permission from the Publisher, with the exception of any material supplied speciﬁcally for the purpose
of being entered and executed on a computer system, for exclusive use by the purchaser of the work.
Printed on acid-free paper
9 8 7 6 5 4 3 2 1
springer.com

--- Page 6 ---

Preface
This book has been developed as a textbook of decision support methods for stu-
dents and can also serve as a handbook for practical foresters. It is based on the
research we have carried out and lectures we have given over the past years. We
have set out to present all the methods in enough details and examples that they can
be adopted from this book. For researchers who need more details, references are
given to more advanced scientiﬁc papers and books.
In this book, theories of decision making and the methods used for forestry de-
cision support are presented. The book covers basics of classical utility theory and
its fuzzy counterparts, exact and heuristic optimization method and modern multi-
criteria decision support tools such as AHP or ELECTRE. Possibilities of analyzing
and dealing with uncertainty are also brieﬂy presented. The use of each method is
illustrated with examples. In addition to decision aid methods, we present the basic
theory of participatory planning. Both hard and soft methods suitable for participa-
tory or group decision analysis are presented, such as problem structuring method
and voting. The criticism towards decision theory is also covered. Finally, some
real-life examples of the methods are presented.
Annika Kangas
Department of Forest Resource Management
University of Helsinki
Jyrki Kangas
Mets¨ahallitus
Mikko Kurttila
University of Joensuu
v

--- Page 7 ---

Acknowledgements
Many researchers and students have helped us by reviewing chapters, suggesting im-
provements and even checking our example calculations. We would like to acknowl-
edge these reviewers, Ms. Anu Hankala, M.Sc. Teppo Hujala, M.Sc. Annu Kaila, Dr.
Juha Lappi, Dr. Pekka Leskinen, Dr. Lauri Meht¨atalo and Mr. Mikael Wath´en for
their efforts to improve our work. The errors remaining are nevertheless attributable
entirely to the authors. We would also like to thank our co-authors in many research
articles, especially professor Juha Alho, Dr. Tero Heinonen, Dr. Joonas Hokkanen,
Dr. Eija Hurme, Dr. Miika Kajanus, Professor Osmo Kolehmainen, Professor Risto
Lahdelma, M.Sc. Sanna Laukkanen, Dr. Leena Leskinen, Dr. Pekka Leskinen, Dr.
Teppo Loikkanen, Dr. Jukka Matero, Dr. Lauri Meht¨atalo, Lic.Sc. Eero Muinonen,
Professor Mikko M¨onkk¨onen, Professor Teijo Palander, Dr. Mauno Pesonen, Pro-
fessor Timo Pukkala, Dr. Jouni Pyk¨al¨ainen, Professor Pekka Salminen, Lic.Sc. Ron
Store, and Dr. Jukka Tikkanen. Their co-operation has made this book possible.
vii

--- Page 8 ---

Contents
Preface . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
v
Acknowledgements . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . vii
1
Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
1
1.1
Planning and Decision Support . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
1
1.2
Forest Management Planning . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
4
1.3
History of Forest Planning . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
6
References . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
8
Part I Discrete Problems
2
Unidimensional Problems . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 13
2.1
Decisions Under Risk and Uncertainty . . . . . . . . . . . . . . . . . . . . . . . . . 13
2.2
Measuring Utility and Value . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 15
2.2.1
Estimating a Utility Function . . . . . . . . . . . . . . . . . . . . . . . . . . 15
2.2.2
Estimating a Value Function . . . . . . . . . . . . . . . . . . . . . . . . . . . 17
References . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 21
3
Multi-Criteria Decision Problems . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 23
3.1
Theoretical Aspects . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 23
3.2
Multi-Attribute Utility Functions. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 25
3.2.1
Function Forms . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 25
3.2.2
Basis for Estimating the Weights . . . . . . . . . . . . . . . . . . . . . . . 29
3.2.3
Smart . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 30
3.3
Even Swaps . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 34
3.4
Analytic Hierarchy Process . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 37
3.4.1
Decision Problem . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 37
3.4.2
Phases of AHP . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 39
ix

--- Page 9 ---

x
Contents
3.4.3
Uncertainty in AHP . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 44
3.4.4
ANP . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 47
3.5
A’WOT . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 48
References . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 50
4
Uncertainty in Multi-Criteria Decision Making . . . . . . . . . . . . . . . . . . . . 55
4.1
Nature of Uncertainty . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 55
4.2
Fuzzy Set Theory . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 56
4.2.1
Membership Functions and Fuzzy Numbers . . . . . . . . . . . . . . 56
4.2.2
Fuzzy Goals in Decision Making . . . . . . . . . . . . . . . . . . . . . . . 60
4.2.3
Fuzzy Additive Weighting . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 65
4.3
Possibility Theory in Decision Making. . . . . . . . . . . . . . . . . . . . . . . . . 65
4.4
Evidence Theory . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 68
4.5
Outranking Methods . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 70
4.5.1
Outline . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 70
4.5.2
PROMETHEE Method . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 72
4.5.3
ELECTRE Method . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 75
4.5.4
Other Outranking Methods . . . . . . . . . . . . . . . . . . . . . . . . . . . . 81
4.6
Probabilistic Uncertainty in Decision Analysis . . . . . . . . . . . . . . . . . . 81
4.6.1
Stochastic Multicriteria Acceptability Analysis (SMAA) . . . 81
4.6.2
SMAA-O . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 91
4.6.3
Pairwise Probabilities. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 91
References . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 94
Part II Continuous Problems
5
Optimization . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 101
5.1
Linear Programming . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 101
5.1.1
Primal Problem . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 101
5.1.2
Dual Problem . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 105
5.1.3
Forest Planning Problem with Several Stands . . . . . . . . . . . . . 109
5.1.4
JLP Software . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 110
5.2
Goal Programming . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 111
5.3
Integer Programming . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 115
5.4
Uncertainty in Optimization . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 118
5.5
Robust Portfolio Modelling . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 120
5.5.1
Principles of the Method . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 120
5.5.2
Use of RPM in Forest Planning . . . . . . . . . . . . . . . . . . . . . . . . 121
References . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 123
6
Heuristic Optimization . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 127
6.1
Principles . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 127
6.2
Objective Function Forms . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 129
6.3
Hero . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 130

--- Page 10 ---

Contents
xi
6.4
Simulated Annealing and Threshold Accepting . . . . . . . . . . . . . . . . . . 132
6.5
Tabu Search . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 133
6.6
Genetic Algorithms . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 135
6.7
Improving the Heuristic Search . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 136
6.7.1
Parameters of Heuristic Optimization Techniques . . . . . . . . . 136
6.7.2
Expanding the Neighbourhood . . . . . . . . . . . . . . . . . . . . . . . . . 137
6.7.3
Combining Optimization Techniques . . . . . . . . . . . . . . . . . . . . 138
References . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 139
Part III Cases with Several Decision Makers
7
Group Decision Making and Participatory Planning . . . . . . . . . . . . . . . 145
7.1
Decision Makers and Stakeholders . . . . . . . . . . . . . . . . . . . . . . . . . . . . 145
7.2
Public Participation Process . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 147
7.2.1
Types of Participation Process . . . . . . . . . . . . . . . . . . . . . . . . . 147
7.2.2
Success of the Participation Process . . . . . . . . . . . . . . . . . . . . . 148
7.2.3
Deﬁning the Appropriate Process . . . . . . . . . . . . . . . . . . . . . . . 150
7.3
Tools for Eliciting the Public Preferences. . . . . . . . . . . . . . . . . . . . . . . 153
7.3.1
Surveys . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 153
7.3.2
Public Hearings . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 154
7.4
Problem Structuring Methods . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 155
7.4.1
Background . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 155
7.4.2
Strategic Options Development and Analysis . . . . . . . . . . . . . 156
7.4.3
Soft Systems Methodology . . . . . . . . . . . . . . . . . . . . . . . . . . . . 159
7.5
Decision Support for Group Decision Making . . . . . . . . . . . . . . . . . . . 164
References . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 169
8
Voting Methods . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 173
8.1
Social Choice Theory . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 173
8.1.1
Outline . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 173
8.1.2
Evaluation Criteria for Voting Systems . . . . . . . . . . . . . . . . . . 174
8.2
Positional Voting Schemes . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 174
8.2.1
Plurality Voting . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 174
8.2.2
Approval Voting . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 175
8.2.3
Borda Count . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 176
8.3
Pairwise Voting . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 177
8.4
Fuzzy Voting . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 179
8.5
Probability Voting . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 180
8.6
Multicriteria Approval . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 181
8.6.1
Original Method . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 181
8.6.2
Fuzzy MA . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 183
8.6.3
Multicriteria Approval Voting . . . . . . . . . . . . . . . . . . . . . . . . . . 185
References . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 187

--- Page 11 ---

xii
Contents
Part IV Application Viewpoints
9
Behavioural Aspects . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 191
9.1
Criticism Towards Decision Theory . . . . . . . . . . . . . . . . . . . . . . . . . . . 191
9.1.1
Outline . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 191
9.1.2
Satisﬁcing or Maximizing? . . . . . . . . . . . . . . . . . . . . . . . . . . . . 192
9.1.3
Rules or Rational Behaviour? . . . . . . . . . . . . . . . . . . . . . . . . . . 193
9.2
Image Theory. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 194
9.3
Prospect Theory. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 197
References . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 200
10
Practical Examples of Using MCDS Methods . . . . . . . . . . . . . . . . . . . . . . 201
10.1 Landscape Ecological Planning . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 201
10.2 Participatory Planning. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 203
10.3 Spatial Objectives and Heuristic Optimization in Practical
Forest Planning . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 209
References . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 212
11
Final Remarks . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 213
References . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 216
Index . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 219

--- Page 12 ---

Chapter 1
Introduction
1.1 Planning and Decision Support
Decision means choosing from at least two distinct alternatives. Decision making,
on the other hand, can be deﬁned to include the whole process from problem struc-
turing to choosing the best alternative (e.g. Kangas 1992). Most decisions we face
every day are easy, like picking a meal from a restaurant menu. Sometimes the prob-
lems are so complex, however, that decision aid is needed.
Decision making can be considered from at least two points of view: it can be
analyzed, how the decisions should be made in order to obtain best results (pre-
scriptive approach), or, it can be analyzed, how people actually do decisions with-
out help (descriptive approach) (e.g. von Winterfeldt and Edwards 1986). The ﬁrst
approach is normative; it aims at methods that can be used to aid people in their deci-
sions. These decision-aid methods are usually based on an assumption that decisions
are made rationally. There is evidence that people are not necessarily rational (e.g.
Simon 1957). However, this is not a problem in decision aid: it can realistically be
assumed that decisions actually were better, if people were instructed to act ratio-
nally. Decision-aid methods aim at helping people to improve the decisions they
make, not mimicking human decision making.
The planning situation can be characterized with three dimensions: the mater-
ial world, the social world and the personal world (Mingers and Brocklesby 1997;
Fig. 1.1). The material world dictates what is possible in a planning situation, the
personal world what we wish for, and the social world what is acceptable to the
society surrounding us. All these elements are involved in decision making, with
different emphasis in different situations.
The decisions can be made either under certainty or uncertainty, and the problem
can be either unidimensional of multidimensional. In addition, the problem can be
either discrete (i.e. the number of possible alternatives is limited) or continuous (i.e.
there is an inﬁnite number of possible alternatives), and include either one or several
decision makers.
1

--- Page 13 ---

2
1 Introduction
Expresses
Appreciates
Constraints
Reproduces
Enables
& constraints
Emoting
Languaging
Acting
Moulds
The material world
My personal world
Subjectivity
We experience
Objectivity
We observe
Our social world
Intersubjectivity
We participate in
Fig. 1.1 Three dimensions of problem situation (Modiﬁed from Mingers and Brocklesby 1997)
If the problem is unidimensional problem with certainty, the problem is straight-
forward to solve. If the alternatives are discrete, the best is chosen. If the decision
has to be made under uncertainty, also the discrete unidimensional case is of inter-
est. Modern utility-theoretic studies can be considered to begin with the works of
Ramsey (1930) and von Neumann and Morgenstern (1944) dealing with the unidi-
mensional case under risk.
In a multidimensional case under certainty, the problem is to deﬁne the trade-
offs between the attributes or criteria. Such tradeoffs are subjective, i.e. there are
no correct tradeoff values that the decision makers should use (Keeney and Raiffa
1976). The most challenging problems are those with multiple dimensions includ-
ing uncertainty. There may be uncertainty in all parameters of decision analysis, for
instance, the future consequences of different actions or the preferences of the deci-
sion maker with respect to different criteria may be uncertain. There exist, therefore,
several applications of decision-support tools accounting for the uncertainty.
Another complication is that there may be several decision makers or other stake-
holders involved. In such cases the problems may be messy: it is not clear what are
the alternatives among which to choose from, or what are the criteria with respect to
which the alternatives should be compared. For such situations, there exist several
problem structuring methods (Mingers and Brocklesby 1997).
A rational decision maker chooses an alternative which in his opinion maximizes
the utility (Etzioni 1986; von Winterfeldt and Edwards 1986). For this, one has to
have perfect knowledge of the consequences of different decision alternatives, the

--- Page 14 ---

1.1 Planning and Decision Support
3
goals and objectives of the decision maker and their weights, in other words of the
preferences. Accordingly, the basis of decision making can be divided into three
elements: alternatives, information and preferences (Bradshaw and Boose 1990).
The basis has to be solid with respect to all elements so that one is able to choose
the best alternative. Keeney (1982) divided the decision analysis into four phases
which all are necessary parts of the modelling of decision making:
1. Structuring a decision problem
2. Deﬁning the consequences of decision alternatives
3. Eliciting out the preferences of the decision maker
4. Evaluating and comparing the decision alternatives
Generally, in decision-making processes, decision makers are assumed to rank a set
of decision alternatives and choose the best according to their preferences. To be
able to rank, they select the criteria that are relevant to the current problem and that
are of signiﬁcance in their choice (e.g. Bouyssou et al. 2000). The criteria used in
ranking are standards or measures that can be used in judging if one alternative is
more desirable than another (Belton and Stewart 2002). Each alternative needs to be
evaluated with respect to each criterion.
Belton and Stewart (2002) (Fig. 1.2), on the other hand, divided the decision-aid
process to three phases, namely problem structuring, model building and using the
model to inform and challenge thinking. This deﬁnition emphasises using decision
aid as a help in thinking, not as a method providing ready-made solutions. According
to Keeney (1992), decision-makers should focus on values, and on creating creative
Problem
structuring
Model
building
Using model
to inform and 
challenge thinking
Developing
an action plan
Identification
of the problem
Sensitivity
analysis
Robustness
analysis
Creating new 
alternatives
Challenging
intuition
Synthesis of 
information
Eliciting
values
Defining
criteria
Specifying
alternatives
Stakeholders
Alternatives
Uncertainties
Key issues
External
environment
Constraints
Goals
Values
Problem
structuring
Model
building
Using model
to inform and 
challenge thinking
Developing
an action plan
Identification
of the problem
Sensitivity
analysis
Robustness
analysis
Creating new 
alternatives
Challenging
intuition
Synthesis of 
information
Eliciting
values
Defining
criteria
Specifying
alternatives
Stakeholders
Alternatives
Uncertainties
Key issues
External
environment
Constraints
Goals
Values
Fig. 1.2 The process of MCDA (Belton and Stewart 2002)

--- Page 15 ---

4
1 Introduction
new alternatives based on their values, rather than ranking existing alternatives. He
argues that creating the alternatives is the most crucial phase of all in the decision-
making process, and it is not dealt with at all in the traditional decision science. Both
these perspectives reﬂect the current view of decision analysis. Some of the older
ideas and deﬁnitions have been strongly criticized for treating decision makers as
machines (e.g. French 1989, p. 143).
As the name suggests, Multiple Criteria Decision Support [MCDS, or MCDA
(MCD Aid), or MCDM (MCD Making)] methods have been developed to enable
analysis of multiple-criteria decision situations. They are typically used for dealing
with planning situations in which one needs to holistically evaluate different deci-
sion alternatives, and in which evaluation is hindered by the multiplicity of decision
criteria that are difﬁcult to compare, and by conﬂicting interests. For more fun-
damental descriptions of MCDS, readers are referred to Keeney and Raiffa (1976),
von Winterfeldt and Edwards (1986), French (1989), Bouyssou et al. (2000), Vincke
(1992) or Belton and Stewart (2002).
Decision problems can, however, be complex even if there is only one objective.
For instance, the case could be such that the decision-maker needs to allocate the
resources (e.g. money and land) to competing forms of production (e.g. what tree
species to plant) in order to get the best proﬁt. In such cases, the decision-aid meth-
ods typically used are mathematical optimization methods. These methods produce
exact optimal solutions to decision problems. The most commonly applied of these
methods is linear programming LP (see, e.g. Dantzig 1963; Dykstra 1984; Taha
1987; Hillier and Lieberman 2001). There are also many modiﬁcations of this basic
approach, such as integer programming and goal programming. Optimization meth-
ods can also be used in cases where there are an inﬁnite number of possible actions
and several criteria (Steuer 1986).
In many cases the real problems are too complicated for these exact methods.
Then, either the problem is simpliﬁed so that it can be solved with exact methods,
or the solution is searched using heuristic methods (e.g. Glover 1989; Glover et al.
1995; Reeves 1993). These methods can produce a good solution with fairly sim-
ple calculations, but they cannot guarantee an optimal solution. The beneﬁt in these
methods is that the true decision problems can be described better than with exact
methods, where the problems often have to be simpliﬁed in order to ﬁt to the require-
ments of the methods. It is more useful to get a good solution to a real problem, than
an exact solution to a misleadingly deﬁned one.
1.2 Forest Management Planning
Forest management planning is a tool of central importance in forestry-related deci-
sion making. The aim in forest planning is to provide support for forestry decision
making so that the mix of inputs and outputs is found that best fulﬁls the goals
set for the management of the forest planning area. The current use of forests is
typically multi-objective. Ecological, economic and social sustainability is aimed
for. Forests should produce reasonable incomes while at the same time promoting

--- Page 16 ---

1.2 Forest Management Planning
5
conservation and recreational considerations. In other words, forests are being used
simultaneously for multiple purposes (e.g. Kangas 1992; Davis et al. 2001).
Forestry decision making often includes numerous decision-makers or other
stakeholders. They could be owners of the forests, local inhabitants, people con-
nected with tourism and recreation services, private persons or ofﬁcials concerned
with nature conservation, or personnel of forestry enterprises. Each of them can have
different objectives concerning the use of forests or other natural resources, which
further complicates the evaluation.
Forest planning problems are typically described so that each stand in the forest
has several different treatment schedules that are possible alternatives for it. For
instance, harvests with two different rotation times produces two different schedules
for one stand. Each schedule may include several treatments with a different timing.
It may be that the schedule for one stand includes one or two thinnings before the
ﬁnal harvest, and planting after it. The development of the stand is then predicted,
with respect to all relevant criteria. The predictions are typically based on forest
simulators including growth and yield models for forest.
With different combinations of standwise treatment schedules, a huge number
of different production programmes for the whole area could be obtained. Among
these programmes, those that are efﬁcient with respect to the criteria involved are
worth further investigations. This means that programmes dominated by some other
programme should be excluded from the analysis. Normally, the end result of forest
planning is a management plan, which presents a recommended production pro-
gramme for the forest area, with predictions of the consequences of implementing
the plan.
Brieﬂy, the main phases in a forest planning process are:
(i) Forest data acquisition and assessing the present state of the forests
(ii) Clarifying the criteria and preferences of the decision maker(s) regarding the
use of forests and, in participatory planning, clarifying the criteria and prefer-
ences of other interested parties
(iii) Generating alternative treatment schedules for forest stands within the planning
area and predicting their consequences
(iv) Producing efﬁcient production programmes for the forest area
(v) Choosing the best production programme from among those deemed to be ef-
ﬁcient with respect to the criteria and preferences as clariﬁed in phase (ii)
These phases do not necessarily proceed in this order, and they can be applied iter-
atively, interactively, and/or simultaneously.
Forest planning can be either strategic, tactical or operational planning. In strate-
gic planning, the basic idea is to deﬁne what is wanted from forest, and in tactical
planning to deﬁne how these goals are obtained. In forest context, strategic planning
typically means time horizons from 20 years upwards. Long horizons are especially
needed when assessing the sustainability of alternative decisions. Strategic plans
are usually prepared to cover fairly large areas, from woodlot level in private forests
to regional level in the forestry of big organizations. For practical reasons, there
planning calculations are not very detailed.

--- Page 17 ---

6
1 Introduction
In tactical forest planning, on the other hand, the time horizon is typically 5–
20 years. The number of alternative forest plans, each consisting of a combination
of forest-stand treatment schedules, can be considerable, practically inﬁnite. It also
means that the resulting plans are detailed, typically including standwise recommen-
dations. In operational planning, carrying out these standwise recommendations is
planned in great detail. In practise, strategic and tactical planning are often inte-
grated so that both strategic and tactical solution are produced at the same time.
Planning is continuous work, and whenever the planning environment or needs of
decision maker(s) change, the plan is updated.
1.3 History of Forest Planning
The earliest forest management planning methods for large areas were based on the
concept of fully regulated even-aged forests (e.g. Kilkki 1987; Davis et al. 2001).
Fully regulated forest is an ideal state of forests. It means that a forest area has a
steady-state structure and conditions, and a stable ﬂow of outcomes. The growth is
equal to annual harvest, and harvest is the same each year. The area harvested each
year can be calculated simply by dividing the total area A by the selected rotation
time R. Thus, it ensures a sustainable yield, which has been an important objective
of forestry.
Real forests, however, do not fulﬁl the requirements of fully regulated forests.
Yet, it must be decided how large an area and how much volume to cut. Traditional
methods of forest planning provide two different types of methods: those based on
area control and those based on volume control (Recknagel 1917; Davis et al. 2001,
p. 528).
Area control method is the simplest way to regulate the harvests. If a constant
area A/R is harvested each year, the forests are fully regulated after R years. On
the other hand, the harvested volume may vary a lot between years. This method
assumes a constant site quality, but it is also possible to utilise different rotation
times for different sites.
The oldest volume control method is the Austrian formula, ﬁrst published already
in 1788 (Speidel 1972),
Ct = I +[(Vc −Vf )/a]
(1.1)
where Ct is the annual cut, I is the annual increment of forests, Vc is the current
volume of the growing stock, Vf is the volume of the desired state (i.e. fully regu-
lated forest) and a is the adjustment time. This means that the harvest is the growth
of the area, corrected so that the volume of fully regulated forests is achieved after
the adjustment period. This method ensures a constant harvest level in short term.
Yet, the method does not necessarily ensure the fully regulated condition on longer
term (Davis et al. 2001, p. 545). Later on, these methods were developed to more
advanced cutting budget methods, which enable controlling both area and volume
at the same time (e.g. Lihtonen 1959; Kuusela and Nyyss¨onen 1962; Davis 1966).

--- Page 18 ---

1.3 History of Forest Planning
7
In single stands, planning has been concentrated in deﬁning an optimal rotation
time (e.g. Gregory 1972; Johansson and L¨ofgren 1985). There are several criteria
for selecting the rotation time. The simplest of them is to select the rotation, which
maximizes the mean annual increment (MAI) of forests (rotation of maximum sus-
tained yield). This is achieved by harvesting the stand when MAI is equal to current
volume increment. The most famous of the rotation calculation methods is, how-
ever, the Faustmann formula (Faustmann 1849). In this formula, the value of land
is maximized over inﬁnite number of rotations (the rotation of maximum land rent).
In continuous form the formula is (Viitala 2002)
MaxL
{u}
=
∞
∑
i=0
(pV(u)e−ru −c)e−iru = pV(u)e−ru −c
1−e−ru
(1.2)
where p is the price of timber (no assortments assumed), V(u) is the volume at the
end of rotation time u (only clearcut assumed), r is the rent and c deﬁnes the costs
of regeneration (no other costs assumed). This rotation time is the economically
optimal rotation for any given stand. In continuous form, the optimization problem
can be analytically solved, and general results, i.e. cutting rules, can be produced. In
this form, however, thinnings cannot be included. In a discrete form, thinnings can
be included, but the problem can no more be analytically solved. The discrete form
is (Viitala 2002)
MaxL
{u}
=
u
∑
i=0
(Ri −Ci)(1+r)u−i
(1+r)t −1
(1.3)
where R denotes the revenues and C costs in year i.
The next phase for large area planning was the introduction of linear program-
ming and complex models that were developed to predict forest development un-
der different scenarios (e.g. Duerr et al. 1979; Clutter et al. 1983; Kilkki 1987;
Buongiorno and Gilles 2003). The ﬁrst applications of linear programming to forest
planning were published in the 1960s (e.g. Curtis 1962; Kilkki 1968). In the next
decades, forest planning models based on linear programming were developed in
many countries, for instance, the FORPLAN model in USA (Johnson 1986; John-
son et al. 1986; see also Iverson and Alston 1986), and MELA model in Finland
(Siitonen 1983, 1994). Also models based on simulation were generated in many
countries, i.e. models that were not used to ﬁnd an optimal solution but more to
make if-then calculations of different cutting scenarios. Such models were, for in-
stance, HUGIN in Sweden (H¨agglund 1981) and AVVIRK in Norway (e.g. Eid and
Hobbelstad 2000). Many of these models have been developed until recent years,
but new ones have also been published. These models have, however, also been crit-
icized. For instance, the approaches based on LP were not regarded as sufﬁcient with
respect to ecological considerations (e.g. Shugart and Gilbert 1987). There were also
problems due to the spatial dimensions of the problems, non-linearities and uncer-
tainty. To alleviate these problems, methods for spatial and heuristic optimization
were adopted to the forestry calculations (Pukkala 2002).

--- Page 19 ---

8
1 Introduction
Any optimization method, however, cannot answer the question of how to value
the different criteria in planning. This is because the values are inherently subjective.
The criteria are often contradictory, and need to be carefully weighted in order to
ﬁnd the best solution. To deal with the valuation problems, in the last 10 years multi-
criteria decision aid has also been adopted in forestry decision making (Pukkala
2002; Kangas and Kangas 2005). However, as optimization methods provide efﬁ-
cient solutions located in different parts of the production possibility frontier, and
MCDA methods can be used to analyse the values and preferences, these methods
complement rather than compensate each other.
Nowadays, numerous decision makers or other stakeholders are often involved
in forest planning. Each of them can have different objectives concerning the use of
forests or other natural resources, which further complicates the evaluation. Multi-
criteria decision-aid methods can often be used also in these situations (e.g. Kangas
1994). However, methods based on social choice theory have also been developed
for participatory planning and group decision making.
References
Belton, V. and Stewart, T.J. 2002. Multiple criteria decision analysis: an integrated approach.
Kluwer, Dordrecht, 372 pp.
Bouyssou, D., Jacquet-Lagrez, E., Perny, P., Slowinski, R., Vanderpooten, D., and Vincke Ph.
(Eds.), 2000. Aiding decisions with multiple criteria. Essays in honour of Bernard Roy. Kluwer,
Dordrecht, 274 pp.
Bradshaw, J.M. and Boose, J.H. 1990. Decision analysis techniques for knowledge acquisition:
combining information and preferences using Aquinas and Axotl. International Journal of Man-
Machine Studies 32: 121–186.
Buongiorno, J. and Gilles, J.K. 2003. Decision methods for forest resource management. Acad-
emic, New York, 439 pp.
Curtis, F.H. 1962. Linear programming of the management of a forest property. Journal of Forestry
60: 611–616.
Clutter, J.L., Fortson, J.C., Pienaar, L.V., Brister, G.H., and Bailey, R.L. 1983. Timber management:
a quantitative approach. Wiley, New York, 333 pp.
Dantzig, G.B. 1963. Linear programming and extensions. Princeton University Press, Princeton,
NJ, 630 pp.
Davis, K.P. 1966. Forest management: regulation and valuation. 2nd edn. McGraw-Hill, New York,
519 pp.
Davis, L.-S., Johnson, K.N., Bettinger, P.S., and Howard, T.E. 2001. Forest management – to sus-
tain ecological, economic and social values. 4th edn. McGraw-Hill, New York, 804 pp.
Duerr, W.A., Teeguarden, D.E., Christiansen, N.B., and Guttenberg, S. 1979. Forest resource man-
agement. W.B.Saunders, Philadelphia, 612 pp.
Dykstra, D.P. 1984. Mathematical programming for natural resource management. McGraw-Hill,
New York, 318 pp.
Eid, T. and Hobbelstad, K. 2000. AVVIRK-2000 – a large-scale forestry scenario model for long-
term investment, income and harvest analyses. Scandinadian Journal of Forest Research 15:
472–482.
Etzioni, A. 1986. The case for a multiple-utility conception. Economics and Philosophy 2: 159–
183.
Faustmann, M. 1849. Berechnung des Wertes welchen Waldboden, sowie noch nicht haubare
Holzbest¨ande f¨ur die Waldwirtschaft besitzen. Allgemeine Forst- und jagdzeitung 25: 441–455.

--- Page 20 ---

References
9
French, S. 1989. Readings in decision analysis. Chapman & Hall, London, 210 pp.
Glover, F. 1989. Tabu search – part I. ORSA Journal of computing 1: 190–206.
Glover, F., Kelly, P., and Laguna, M. 1995. Genetic algorithms and tabu search: hybrids for opti-
mization. Computers in Operations Research 22:111–134.
Gregory, G.R. 1972. Resource economics for foresters. Wiley, New York, 477 pp.
H¨agglund, B. 1981. Forecasting growth and yield in established forests – An outline and analysis of
the outcome of a subproject within the HUGIN project (Rep 31). Department of Forest Survey,
Swedish University of Agricultural Sciences, Sweden.
Hillier, F.S. and Lieberman, G.J. 2001. Introduction to operations research. 7th edn. McGraw-Hill,
New York, 1214 pp.
Iverson, D.C. and Alston, R.M. 1986. The genesis of FORPLAN: a historical and analytical review
of Forest Service planning models. General Technical Report. INT-214. USDA Forest Service,
Intermountain Forest and Range Experiment Station, Ogden, UT, 37 pp.
Johansson, P-O. and L¨ofgren K-G. 1985. The economics of forestry and natural resources. Basil
Blackwell, Oxford, 292 pp.
Johnson, K.N. 1986. FORPLAN version 1: an overview. USDA Forest Service, Land Management
Planning Section, Washington, DC, 85 pp.
Johnson, K.N., Stuart, T.W., and Crim, S.A. 1986. FORPLAN version 2: an overview. USDA
Forest Service, Land Management Planning Section, Washington, DC, 110 pp.
Kangas, J. 1992. Metsik¨on uudistamisketjun valinta – monitavoitteiseen hy¨otyteoriaan perustuva
p¨a¨at¨osanalyysimalli. Summary: choosing the regeneration chain in a forest stand, a decision-
model based on multi-attribute utility theory. Joensuun yliopiston luonnontieteellisi¨a julkaisuja
24, 230 pp.
Kangas, J. 1994. An approach to public participation in strategic forest management planning.
Forest Ecology and Management 70: 75–88.
Kangas, J. and Kangas, A. 2005. Multiple criteria decision support in forest management – Fun-
damentals of the approach, methods applied, and experiences gained. Forest Ecology and Man-
agement 207: 133–143.
Keeney, R.L. 1992. Value-focused thinking. A path to creative decision making. Harvard Univer-
sity Press, Cambridge, MA, 416 pp.
Keeney, R.L. 1982. Decision analysis: an overview. Operations Research 30: 803–838.
Keeney, R.L. and Raiffa, H. 1976. Decisions with multiple objectives: preferences and value trade-
offs. Wiley, New York, 569 pp.
Kilkki, P. 1968. Tulotavoitteeseen perustuva hakkuulaskelma. Acta Forestalia Fennica 91, 54 pp.
Kilkki, P. 1987. Timber management planning. Silva Carelica 5: 1–160. Joensuun yliopisto.
Mets¨atieteellinen tiedekunta.
Kuusela, K. and Nyyss¨onen, A. 1962. Tavoitehakkuulaskelma. Acta Forestalia Fennica 74, 34 pp.
Lihtonen, V. 1959. Mets¨atalouden suunnittelu ja j¨arjestely. WSOY, 355 pp.
Mingers, J. and Brocklesby, J. 1997. Multimethodology: towards a framework for mixing method-
ologies. Omega, International Journal of Management Science 5: 489–509.
von Neumann, J. and Morgestern, O. 1944. Theory of games and economic behaviour. Wiley, New
York, 641 pp.
Pukkala, T. (Ed.). 2002. Multi-objective forest planning. Managing Forest Ecosystems, Vol 6.
Kluwer, Dordrecht, 207 pp.
Ramsey, F.P. 1930. The foundations of maths and other logical essays. Humanities Press, New
York, 280 pp.
Recknagel, A.B. 1917. Theory and practise of working plans. 2nd edn. Wiley, New York.
Reeves, C.R. (Ed.) 1993. Modern heuristic techniques for combinatorial problems. Blackwell, Ox-
ford, 320 pp.
Shugart, H.H. and Gilbert, B.J. 1987. An ecological evaluation of FORPLAN in national forest
planning. In: Hoekstra, T.W., Dyer, A.A., LeMaster, D.C. (Eds.). FORPLAN: an evaluation of a
forest planning tool. General Technical Report RM-140. USDA Forest Service, Rocky Mountain
Forest and Range Experiment Station, Fort Collins, CO, pp 105–121.

--- Page 21 ---

10
1 Introduction
Siitonen, M. 1983. A long-term forestry planning system based on data from the Finnish national
forest inventory. Proceedings of the IUFRO subject group 4.02 meeting in Finland, September
5–9, 1983. University of Helsinki, Department of Forest Mensuration and Management, Re-
search Notes 17, pp 195–207.
Siitonen, M. 1994. The MELA system as a forestry modelling framework. Lestnictvi-Forestry 41:
173–178.
Simon, H.A. 1957. Models of man: social and national. Wiley, New York, 247 pp.
Speidel, G. 1972. Planung im Forstbetrieb. Verlag Paul Parey, Hamburg/Berlin, 267 pp.
Steuer, R.E. 1986. Multiple criteria optimization: theory, computation, and application. Wiley, New
York, 532 pp.
Taha, H.A. 1987. Operation research. Macmillan, New York, 876 pp.
Viitala, E.-J. 2002 Mets¨an optimaalinen kiertoaika: l¨ahestymistavat ja niiden talousteoreettinen
perusta. Research notes of Finnish Forest Research Institute. Report 848, 128 pp.
Vincke, Ph., 1992. Multi-Criteria decision aid. Wiley, New York.
von Winterfeldt, D. and Edwards, W. 1986. Decision analysis and behavioral research. Cambridge
University Press, Cambridge.

--- Page 22 ---

Chapter 2
Unidimensional Problems
2.1 Decisions Under Risk and Uncertainty
From the viewpoint of decision theory, the decision problems including uncertainty
can be presented according to a decision table
ω1
ω2
...
ωm
d1
d2
...
dn
⎡
⎢⎢⎢⎣
c11
c12
...
c1m
c21
c22
...
c2m
...
...
...
...
...
cn1
cn2
...
cnm
⎤
⎥⎥⎥⎦
(2.1)
The components of a decision table are the decision alternatives (di, i = 1,... n),
the states of nature (ωj, j = 1,...m), and the consequences (cij, i = 1,...n, j =
1,...m). The consequence of an action is determined by the action, and by a number
of external factors which are beyond the control of the decision maker. A state of
nature is a particular set of values that these external factors might assume.
If the state of nature that will actually occur and the consequences associated with
the decision alternatives are known, a decision is made under certainty. Under risk
and uncertainty, the state of nature that would prevail is not known with certainty.
Under risk, the probability of each state of nature occurring and, correspondingly,
the probability distribution of consequences are known; otherwise, the decision is
made under uncertainty.
The probabilities of the states of nature are rarely known, but it is often possible
to estimate these probabilities. If objective probabilities can not be determined, sub-
jective ones, based, for example, on expertise, may be used. This being the case, risk
management methods can be applied also to support decision making under uncer-
tainty. Therefore, the distinction between risk and uncertainty is not always clear. In
addition to the future states of nature, uncertainty may be related to other elements
of the decision making as well. These sources of uncertainty are dealt with in later
chapters.
13

--- Page 23 ---

14
2 Unidimensional Problems
Different decision-makers can take different attitudes towards risk and uncer-
tainty, which may lead to different priority orders among choice alternatives. People
can search for good proﬁts, although their probability is not great (risk-seeking per-
son), or settle with lower proﬁts that have great probability if there is risk of large
losses (risk-averse person). Decision maker can also be risk-neutral.
Maximization of expected utility is a risk-neutral decision strategy for supporting
risky choices (e.g. von Winterfeldt and Edwards 1986). Assume a problem where
there are m possible consequences of a decision di, ci1, ci2,..., cim that have prob-
abilities of realization p1, p2,..., pm. Then, the expected utility from decision di
is
E(u(di)) = p1u(ci1)+ p2u(ci2)+···+ pmu(cim) =
m
∑
j=1
pju(cij).
(2.2)
For decision support under uncertainty, several different decision strategies or rules
have been developed (see, e.g. Miller and Starr 1969; Lee and Moore 1975; Cook
and Russell 1981). For example, according to Maximin- or Wald-criterion, alterna-
tives are ranked according to the worst possible consequences (risk avoiding behav-
iour), and the alternative with the best worst-case consequence is chosen. According
to Maximax-criterion, alternatives are ranked according to the best possible conse-
quences (risk taking behaviour), and the alternative with the best best-case conse-
quence is chosen. Hurwicz-criterion is a combination of these two categorical rules;
the alternative with the greatest weighted mean of the worst and the best possible
outcomes is chosen. Here, the weights for the worst and the best possible outcomes
reﬂect the attitude towards risk; e.g. for a risk neutral decision maker the weights
are equal.
A more general criterion, which produces the above mentioned criteria as spe-
cial cases, has been developed by Kangas (1992, 1994). In this approach, the
decision-maker determines the importance of three priority measures in decision-
making: (i) the worst possible outcome, (ii) the expected outcome, and (iii) the
best possible outcome associated with the decision alternative. The alternatives
can then be ranked based on the weighted average of these three outcomes. Then,
if the weight of the worst outcome, bw, is one, one speaks of the maximin-
criterion. Correspondingly, if the weight of the best outcome, bb, is 1, alternative
is chosen according to the maximax-criterion. If the weight of the expected out-
come, be, is 1 alternative is selected from a risk neutral decision maker’s point of
view.
If bb > be > bw the decision maker can be classiﬁed as a risk seeker. In general, if
bb is greater than bw, one can speak about risk seeking behaviour. Correspondingly,
if bb < be < bw, or, more generally, if bb < bw, the decision maker can be classiﬁed
as a risk avoider. The decision strategy can be changed ﬂexibly by weighting the
coefﬁcients using different weighting schemes. Sensitivity analysis can be made,
for example, of the meaning of the attitude towards risk in the choice of the forest
plan.

--- Page 24 ---

2.2 Measuring Utility and Value
15
2.2 Measuring Utility and Value
2.2.1 Estimating a Utility Function
All methods for estimating the utility (or value) functions are based on certain ax-
ioms. Eilon (1982) presented three basic axioms that are needed in estimation:
2.2.1.1 Connectivity
The decision maker is able to say from two alternative outcomes A and B, if he/she
prefers A to B, B to A or if he/she is indifferent between these outcomes.
2.2.1.2 Transitivity
If the decision maker prefers outcome A to B and outcome B to C, then he/she also
prefers outcome A to C.
2.2.1.3 Comparability
If the decision maker has three outcomes, A, B and C, and he/she prefers A to B and
B to C, he/she can choose a coefﬁcient x such that utility of xA+(1−x)C = B.
The ﬁrst of these axioms may be violated, if the decision maker cannot make
his/her mind. In practical work, it has often been noted that axioms 2 and 3 may
not hold (e.g. Eilon 1982; Knowles 1984; Bell and Farquhar 1986). Furthermore,
the last axiom only makes sense if the outcomes that are compared are quantitative,
such as money.
Estimating the utility function at unidimensional scale is typically based on indif-
ference methods (von Winterfeldt and Edwards 1986, p. 217). In practise it means,
that decision maker needs to match two outcomes or pairs of outcomes to meet in-
difference relation. In essence, it means estimating the utility function based on the
comparability axiom above.
As the utility is relative, the utility of two consequences can be arbitrarily as-
signed, and the rest of the utilities are assessed relative to these (Keeney and Raiffa
1976, p. 140). It is assumed that the most preferred consequence is deﬁned as c∗
and the least preferred as c0. The utilities provided by these consequences can
be scaled to u(c∗) = 1 and u(c0) = 0, respectively. In the next stage, the conse-
quences ci are compared to lotteries, where the consequence is c∗with probability
π and c0 with probability (1 −π). Such lotteries are deﬁned with (c∗, π, c0). The
decision-maker is required to state, which is the probability π with which he/she
is indifferent between the certain consequence ci and the lottery. Because of the
indifference, the utility u(ci) must be equal to the expected utility of the lottery.

--- Page 25 ---

16
2 Unidimensional Problems
It follows that
u(ci) = πu(c∗)+(1−π)u(c0) = π1+(1−π)0 = π.
(2.3)
When several such comparisons are made, the utility function can be ﬁtted to the
expressed probabilities. This approach is called variable probability method (von
Winterfeldt and Edwards 1986).
The other possibility is to use a constant probability, say 0.5, and to change the
consequence ci to such amount that the utility it provides would be indifferent with
the lottery. This approach is called variable certainty equivalent method.
The well-known von Neumann–Morgestern utility function was already based
on such comparisons. In their approach, risk attitudes are dealt with implicitly;
form of the utility function describes the decision maker’s attitude towards risk
(von Neumann and Morgestern 1947). In many cases, the certainty equivalent
ci, which gives the same utility as the lottery, is actually larger or smaller than
the expected payoff of the lottery. For instance, the decision-maker may say that
80AC is the certainty equivalent for lottery (200, 0.5, 0). Then, the difference be-
tween the expected payoff and certainty equivalent, 100AC–80AC, is the risk-premium.
This is the amount a risk-avert decision maker is willing to “give up” in order to
avoid uncertain lottery. If the risk premium is negative, the decision maker is a
risk-seeker.
The utility function of risk-neutral person is according to this theory linear, and
that of risk-seeker convex. This result has, however, been criticized, since a con-
cave utility function can also be reasoned based on an assumption of decreasing
marginal utility (e.g. Sarin 1982; Sheng 1989; Kangas 1992). The estimation of
Neumann–Morgenstern type utility function is also considered to be too compli-
cated for practical decision-making processes (Leung 1978; Kirkwood and Sarin
1985; Butler and Loomes 1988). Therefore, risk is not accounted for in most real
applications.
Example 2.1. Certainty equivalent method
Assume a game with the best possible outcome being a gain of 10,000AC and
the worst outcome a loss of 10,000AC. The decision maker is asked what amount
of money obtained for certain is indifferent (i.e. giving the same utility) as game
Table 2.1 The obtained utility data
Income
Utility
−10,000
0
−8,400
0.125
−6,400
0.25
−4,400
0.375
−2,000
0.5
400
0.625
3,200
0.75
6,000
0.875
10,000
1

--- Page 26 ---

2.2 Measuring Utility and Value
17
0
0.2
0.4
0.6
0.8
1
−10000
−5000
0
5000
10000
income
utility
Fig. 2.1 Utility function
(10,000, 0.5, −10,000). If the DM answers −2,000, the risk premium is
(0 – −2,000)AC = 2,000AC, which means that the decision maker is risk – avoider.
The next question is, what certain outcome is indifferent to game (−10,000,
0.5, −2,000) and game (−2,000, 0.5, 10,000). If the answers were, for instance,
−6,400AC and 3,200AC, next games to be analyzed are (−10,000, 0.5, −6,400),
(−6,400, 0.5, −2,000), (−2,000, 0.5, 3,200) and (3,200, 0.5, 10,000). When the
answers to these games are obtained, and u(−10,000) = 0 and u(10,000) = 1, utility
of −2,000 is calculated with u(−2,000) = 0.5 · 0 + 0.5 · 1.0 = 0.5. The rest of the
utilities can be calculated in the same way. Finally, the utility function can be ﬁtted
to the obtained data (Table 2.1) and the utility of income can be drawn (Fig. 2.1).
The function in example 2.1 is concave, which describes a risk-avoider according to
theory of von Neumann and Morgestern (1947).
2.2.2 Estimating a Value Function
Unidimensional value functions – or utility functions for no-risk situations – are
formed based on comparisons between alternatives, but without lotteries. There exist
several methods for estimating value function, of which only a few are presented in
this book.
One possibility is to utilize the natural scale with which the performance of alter-
natives is measured, for instance, money, and scale it to range 0–1 (Keeney 1981).
The most popular scaling approach is the maximum score based approach
vi = ci/max(c),
(2.4)
That is, the criterion values ci are divided with the maximum value among alter-
natives. The best alternative is assumed to have value one. Rest of the alternatives
are relative to that and zero value is only given to an alternative also having zero
value in natural scale. Then, the values follow a ratio scale. Another possibility is to
scale the natural scale values with score range procedure
vi = (ci −min(c))/(max(c)−min(c))
(2.5)

--- Page 27 ---

18
2 Unidimensional Problems
The best alternative is assumed to have a value one also in this case, and the worst
the value zero. In this case, if min(c) > 0, the alternatives do not follow a ratio scale,
but an interval scale. In ratio scale, it is meaningful to compare the ratios between
values, in interval scale only the differences. In interval scale, ratio comparisons
simply do not make sense: all the alternatives are inﬁnitely better, when compared
to the worst alternative. Interval scale can be interpreted as local scale, the length of
which depends on the speciﬁc planning situation (e.g. Kainulainen et al. 2007). If
min(c) = 0, these cases are equal.
The scaled scores obtained with (2.4) and (2.5) are often interpreted as value
function. Such interpretation is quite common in practical decision support tools,
as it is not necessary to ask decision makers any questions to form this kind of
value function. Another interpretation is that the different variables and measure-
ment scales are just standardized to the same scale.
If the scaled values are interpreted as a value function, it means that the analy-
sis is based on an assumption of a linear value function. The value function may,
however, be assumed to follow a certain type of non-linear function. In such a case,
the decision-maker can choose the shape from a few predeﬁned ones (e.g. expo-
nential function). Then, a function of that type is ﬁtted to the values presented in
natural scale, but no more questions concerning the value function are asked from
the decision-maker.
A group of methods useful for estimating value function are the so-called direct
rating methods. In these methods, the decision maker is assumed to be able to rank
the alternatives from best to worst. The best alternative and/or the worst alternative
are given some arbitrary number of points, for instance 100 points for the best alter-
native and 0 for the worst alternative. Decision maker is then asked to give the rest
of the alternatives points, related to the best and worst alternatives (von Winterfeldt
and Edwards 1986, p. 229). These points are then scaled to 0–1 interval.
Example 2.2. Assume ﬁve alternatives, which all produce different amounts of
money. It is assumed that the natural scale is in linear relationship with the value
scale. The alternatives are scaled to value scale both utilising a ratio scale and an
interval scale. The alternatives and different versions of scaling are presented in
Table 2.2. In Fig. 2.2, the ratio scale value function is presented with diamonds and
the interval version with squares.
Example 2.3. The decision maker was ﬁrst asked to rank the alternatives from best
(1) to worst (5). After that, decision maker was asked to give points between
Table 2.2 Scaling from original scale to utility scale
Alternative
Money
Ratio scale
Interval scale
1
250
1
1
2
124
0.496
0.427
3
76
0.304
0.209
4
55
0.22
0.114
5
30
0.12
0

--- Page 28 ---

2.2 Measuring Utility and Value
19
Table 2.3 Points given to the alternatives
Alternative
Money
Order
Points
Value
1
250
1
100
1
2
124
2
60
0.6
3
76
3
35
0.35
4
55
4
20
0.2
5
30
5
0
0
0
0.2
0.4
0.6
0.8
1
1.2
0
50
100
150
200
250
300
Money
Value
Fig. 2.2 Scaled utilities
0
0.2
0.4
0.6
0.8
1
1.2
0
50
100
150
200
250
300
Money
Value
Fig. 2.3 Value function obtained from given points

--- Page 29 ---

20
2 Unidimensional Problems
Table 2.4 Indifferent changes
i
xi
xi+1
zi+1
Points
0
0
30
30
1
1
30
70
40
1
2
70
120
50
1
3
120
180
60
1
4
180
250
70
1
0 and 100 to the three middle alternatives of the example 2.2. The obtained data is
presented in Table 2.3 and the resulting value function is presented in Fig. 2.3.
Methods based on indifference are also used for estimating value functions, not
only utility functions. In the case of value functions, decision makers are not asked to
select a certain amount of money equal in utility to some lottery, but for selecting an
outcome or difference in outcome that is indifferent to another outcome or difference
in outcomes. One example of the indifference methods is the difference standard
sequence method. In this approach, ﬁrst a zero level x0 is deﬁned, i.e. the level
which is least preferred. Then, a small but meaningful improvement z1 from this
level x0 to a better level x1 = x0 +z1 is selected. Then, the decision maker is asked,
which improvement z2 from level x1 to level x2 = x1 + z2 is equally preferred to
the improvement z1 from level x0. After that, the decision-maker is asked which
improvement z3 from level x2 is equally preferred to the improvement z2 from level
x1 and so on. Thus, decision maker has to compare changes, the utility of which is
assumed to depend on the level achieved so far. Since all these improvements z1...zn
are equally preferred, they can all be given same amount of points, say 1. Then,
the points at each level can be calculated, so that v(x0) = 0, v(x1) = 1, v(xn) =
n, and the value function can be calculated by dividing the points at each level
by n.
If the change zi is smaller than the equally preferred change zi+1, the value
function is concave and shows marginally decreasing value (von Winterfeldt and
Edwards 1986, p. 233). Thus, a concave utility function can be due to decreasing
marginal value, not just the sign of risk-aversion.
Table 2.5 Resulting values
Money
Points
Value
0
0
0
30
1
0.20
70
2
0.40
120
3
0.60
180
4
0.80
250
5
1.00

--- Page 30 ---

References
21
0
0.2
0.4
0.6
0.8
1
1.2
0
50
100
150
200
250
300
Money
Value
Fig. 2.4 Utility function resulting from indifferent changes
Example 2.4. The situation is the same as in the above examples. In this case the
zero level x0 is set to 0AC, and the ﬁrst improvement step z1 is 30AC. Then the decision
maker evaluates that a change 0 →30 is equally preferred to a change 30 →70, and
a change 30 →70 is equally preferred to change 70 →120 and so on. All the equally
preferred changes are given in Table 2.4., the resulting values in Table 2.5., and the
obtained value function is presented in Fig. 2.4.
References
Bell, D.E. and Farquhar, P.H. 1986. Perspectives on utility theory. Operations Research 34: 179–
183.
Butler, D. and Loomes, G. 1988. Decision difﬁculty and imprecise preferences. Acta Psychologica
68: 183–196.
Cook, T.M. and Russell, R.A. 1981. Introduction to management science. Prentice-Hall, New
Jersey, 763 pp.
Eilon, S. 1982. Control and utility. Omega 10: 223–231.
Kainulainen, T., Leskinen, P., Korhonen, P., Haara, A. 2007. A statistical approach to assess interval
scale preferences in discrete choice problems. Manuscript.
Kangas, J. 1992. Metsik¨on uudistamisketjun valinta monitavoitteiseen hy¨otyteoriaan perustuva
p¨a¨at¨osanalyysimalli. Summary: choosing the regeneration chain in a forest stand: adecision
model based on multi-attribute utility theory. University of Joensuu. Finland.
Kangas, J. 1994. Incorporating risk attitude into comparison of reforestation alternatives. Scandi-
navian Journal of Forest Research 9: 297–304.
Keeney, R.L. 1981. Measurement scales for quantifying attributes. Behavioral Science 26:
29–36.
Keeney, R.L. and Raiffa, H. 1976. Decisions with multiple objectives: preferences and value trade-
offs. Wiley, New York, 569 pp.
Kirkwood, C.G. and Sarin, R.K. 1985. Ranking with partial information: a method and an applica-
tion. Operations Research 33: 38–48.
Knowles, G.J. 1984. Some econometric problems in the measurement of utility. American Journal
of Agricultural Economics 66: 505–510.

--- Page 31 ---

22
2 Unidimensional Problems
Lee, S.M. and Moore, L.J. 1975. Introduction to decision science. Petrocelli/Charter, New York,
589 pp.
Leung, P. 1978. Sensitivity analysis of the effect of variations in the form and parameters of a
multiattribute utility model: a survey. Behavioral Science 23: 478–485.
Miller, D.W. and Starr, M.K. 1969. Executive decisions and operations research. Prentice-Hall.
New Jersey, 607 pp.
von Neumann, J. and Morgestern, O. 1947. Theory of games and economic behaviour. Wiley, New
York, 641 pp.
Sarin, R.K. 1982. Strength of preference and risky choice. Operations Research 30: 982–
997.
Sheng, C.L. 1989. Some quantitative concepts of value and utility from a utilitarian point of view.
Theory and Decision 26: 175–195.
von Winterfeldt, D., Edwards, W. 1986. Decision analysis and behavioral research. Cambridge
University Press, Cambridge.

--- Page 32 ---

Chapter 3
Multi-Criteria Decision Problems
3.1 Theoretical Aspects
The basis for decision making is that given two objects, say A and B, people can
meaningfully say whether they prefer A to B, B to A or whether they are indifferent
(von Winterfeldt and Edwards 1986). Usually, it is assumed that people can also
state the strength of this preference. The strength could be expressed either in ordinal
terms, or in cardinal terms. If the decision maker can say that change from A to B
is preferable to change from B to C, then the judgment is ordinal. If the decision
maker can say by how much, the judgment is cardinal.
Multi-Attribute Utility Theory, where the utility of the decision maker is con-
sidered to consist of several attributes, is usually shortened with MAUT. In dif-
ferent contexts, concepts ‘objectives’ and ‘criteria’ are used instead of ‘attributes’.
Malczewski (1999, p. 85) deﬁnes multi-criteria decision making as a broader class,
which includes both multi-attribute decision making for discrete decision problems
and multi-objective decision making for continuous problems. He deﬁnes attributes
as measures of performance of an object, and objects as statements about the desired
state of a system. In this book, the attributes and criteria are used as synonyms, and
multi-objective is only used in the context of optimization.
In many cases also the term MAVT, Multi-Attribute Value Theory, is used. The
difference between MAUT and MAVT is that the value functions do not include the
risk preferences of the decision maker but the utility function does. von Winterfeldt
and Edwards (1986, p. 215) think this difference is spurious, however. A utility
function is also a value function, while a value function is not necessarily a utility
function.
The problem is formulated with a set of distinct alternatives di, i = 1,...,n and
a set of decision criteria cj, j = 1,...,m so that cij represents the performance of
alternative i with respect to criterion j. It is simply not possible to independently
maximize or minimize several criteria at the same time: you cannot maximize the
gross incomes while at the same time minimizing the costs, or maximize the yield
and minimize the risks (Keeney and Raiffa 1976, p. 66).
23

--- Page 33 ---

24
3 Multi-Criteria Decision Problems
Therefore, the big issue in multi-criteria decision making is that of tradeoffs:
how much is the decision maker willing to give up in one criterion, in order to
improve the performance with respect to another criterion by some ﬁxed amount.
For instance, the decision maker needs to decide, how much more risk of beetle
outbreak she/he will tolerate in order to improve net incomes by 100AC, or how
much incomes is she/he willing to give up in order to reduce the risk by 10%.
The tradeoffs decisions are about personal values, and thus, they require subjec-
tive judgment of the decision maker. This means that there are no correct or wrong
answers to the value questions; people may have very different preference struc-
tures. The tradeoffs problem can be solved in two ways: (1) the decision maker can
informally weigh the tradeoffs is his/her mind or (2) the decision maker can for-
malize his/her preferences to a multi-criteria utility function and use it to solve the
problem (Keeney and Raiffa 1976). Either way, the tradeoffs are inevitable in any
multiple-criteria decision.
There are a few choice procedures that do not require utility functions in order to
make choices. One of these is dominance. We can say that alternative i dominates
alternative i′, if
cij ≥ci′ j, ∀j = 1,...,m
cij > ci′ j, for some j = 1,...,m
It means that alternative i is at least as good as alternative i′ for all criteria j, and,
in addition, alternative i is strictly better than alternative i′ with respect to at least
one criterion j. If an alternative is dominated by some other alternative, it can be
left out from the analysis: it can never be chosen as the best alternative, whatever
the preference structure. If there is one alternative among the n alternatives that
dominates all other alternatives, the choice would then be easy. However, such is the
case only rarely. It may, however, be that some of the alternatives can be eliminated
before further analysis.
What is important in the non-dominated alternatives, is that they form the efﬁ-
cient frontier or the Pareto optimal set among the alternatives (Fig. 3.1).
One possible way of choosing among a set of alternatives, without considering
the tradeoffs, is to utilize a lexicographic ordering (Keeney and Raiffa 1976). In this
method, the decision maker ﬁrst ranks the criteria with respect to their importance.
Then, the most important criterion is c1 and the least important criterion is cm. Then,
alternative i is preferred to alternative i′, denoted by i ≻i′, if and only if
(a) ci1 > ci′1 or
(b) cij = ci′ j, j = 1,...,k
ci(k+1) > ci′(k+1), for some k = 1,...,m−1
It means that the choice is made only based on the most important criterion. If there
are several alternatives that are equal with respect to that criterion, then the second
most important criterion is considered and so on.

--- Page 34 ---

3.2 Multi-Attribute Utility Functions
25
0
40
80
120
160
0
50
100
150
200
Money
Wildlife
Fig. 3.1 Dominated alternatives are presented with squares, and non-dominated with diamonds.
The non-dominated alternatives form the efﬁcient frontier of the problem
3.2 Multi-Attribute Utility Functions
3.2.1 Function Forms
In a case of multi-attribute utility function, it is assumed that there are m criteria,
and a unidimensional utility (or value) function is evaluated or can be evaluated
for each of these criteria. The task is now to aggregate these utility functions to
describe the overall utility of the alternatives. This aggregation is done by weighting
the different criteria in the utility function with respect to their importances. The
relations between the weights of different criteria describe the tradeoffs between the
criteria.
The most applied multi-attribute utility function is the linear additive utility
function
Ui =
m
∑
j=1
ajcji
(3.1)
where Ui describes the overall utility of alternative i (or priority of alternative i)
and cij is the performance of the alternative i with respect to criterion j and aj is
the importance weight of criterion j. In this equation, it is assumed that the criteria
values cij are already in utility scale or are scaled to a utility scale with Formula
(2.4) or (2.5), for instance.
Typically, it is required that
m
∑
j=1
aj = 1,
(3.2)
otherwise the utility could always be increased by increasing the weights. The trade-
offs between criterion k and k′ can be calculated from the ratio of the weights ak/ak′.

--- Page 35 ---

26
3 Multi-Criteria Decision Problems
In general, the marginal rate of substitution between criteria k and k′ can be calcu-
lated as a ratio of partial derivatives of the utility function as
λ = U′k
U′k′ = ak
ak′
(3.3)
This means that the decision maker is willing to give up λ units of criterion k′ in
order to increase the value of criterion k by one.
Example 3.1. Assume a utility function with Uk = 0.67c1k + 0.33c2k, where c1 de-
notes units of money and c2 the number of animals in some wildlife species. Then,
the decision maker is willing to give up one animal in order to increase the incomes
with 0.67/0.33 = 2 units of money.
In the linear additive utility function, the tradeoff between the criteria is constant.
It means, that the willingness of the decision maker to change one unit of criterion
k′ to λ units of criterion k does not change, even if there is only a few units left of
criterion k′, or even if there is already plenty of criterion k. If a decreasing marginal
utility is assumed, this does not hold. In this case, a more general function, namely
the additive utility function needs to be used. It is of the form
Ui =
m
∑
j=1
ajuj(cij)
(3.4)
where uj(cij) is the partial utility due to criterion j. It is described with the unidi-
mensional utility function for this criterion. In this function, the marginal rate of
substitution is a function of the current values of criteria j.
The additive utility models are compensatory at nature. In this respect, this utility
function differs from other forms of utility functions. It means that even if some
criteria assume their lowest possible levels, this can be compensated if some other
criterion or criteria assume very good values. The compensation is dictated by the
marginal rate of substitution.
Example 3.2. Let us consider six non-dominant alternatives from Fig. 3.1. The over-
all utility function is assumed to be
Ui = a1 ·0.00506·ci1 +a2 ·1.55251·exp(−60.2556/ci2)
and the resulting utilities are presented in Table 3.1. The weights of these two criteria
are assumed to be equal, i.e. 0.5, and the greatest overall utility is observed for
alternative 2, with 164 units of money and 80 animals. If the number of wildlife were
1, this could be fully compensated with 309 units of money, i.e. such an alternative
would get the largest overall utility, 0.782. On the other hand, if the amount of
money were 10 units, this could be compensated with 2,100 animals, giving overall
utility 0.780. The marginal utility of additional animals is very small, when the
number of animals is high.
The partial derivatives of these functions are a1 ·0.00506 with respect to criterion
c1, money, and a2 1.55251·exp(−60.2556/ci2)(60.2556/c2
i2) with respect to crite-
rion c2, number of wildlife animals. Thus, the marginal rate of substitution does not

--- Page 36 ---

3.2 Multi-Attribute Utility Functions
27
Table 3.1 Overall utilities of the alternatives
Alternative
Money
Wildlife
Overall utility
1
197
18
0.526
2
164
80
0.780
5
30
137
0.576
8
186
34
0.603
9
182
38
0.619
10
93
121
0.707
depend on money, but it depends on the amount of animals. When the number of
wildlife animals varies from 30 to 530, the marginal rate of substitution varies from
0.36 to 17.02 animals: the more animals there are, the more the decision maker
is willing to give up for additional unit of money. The partial derivatives and the
resulting λ are presented in the Table 3.2.
In addition to these two utility functions, there exist a number of different func-
tions. One example is the multiplicative model (von Winterfeldt and Edwards 1986,
p. 291)
1+aUi =
m
∏
j=1
[1+aajuj(cij)]
(3.5)
which can also be presented in a form of an additive utility function with interac-
tion terms
Ui =
m
∑
j=1
ajuj(cij)+a
m
∑
j=1
m
∑
k>j
aiajui(cij)uk(cik)+···+am−1
m
∏
j=1
ajuj(cij).
(3.6)
In this function, the interaction between the partial utility of different criteria is
presented using products of each pair of alternatives, products of each group of
three criteria, and ﬁnally the product of all criteria. The interactions are dealt with
Table 3.2 Ratio of partial derivatives
Wildlife
Money
Wild
λ
30
0.00253
0.00697
0.3628
80
0.00253
0.00344
0.7352
130
0.00253
0.00174
1.4531
180
0.00253
0.00103
2.4493
230
0.00253
0.00068
3.7184
280
0.00253
0.00048
5.2589
330
0.00253
0.00036
7.0704
380
0.00253
0.00028
9.1527
430
0.00253
0.00022
11.5057
480
0.00253
0.00018
14.1293
530
0.00253
0.00015
17.0234

--- Page 37 ---

28
3 Multi-Criteria Decision Problems
using one parameter, a, with a power of p−1, where p is the number of terms in the
product. It means, that for two-term interactions p = 1, and for m-term interactions
p = m−1. This parameter a must lie between −1 and ∞. As the value of a increases,
the amount of interaction increases, for a = 0 this formula simpliﬁes to additive
utility function. In a two-dimensional case a can be calculated from (von Winterfeldt
and Edwards 1986)
a = 1−a1 −a2
a1a2
(3.7)
It means that if a1 +a2 = 1, a is 0, and if a1 = a2 = 0, a is inﬁnite.
Using this function, the degree of compensation cannot be calculated as neatly as
with the previous additive models. Furthermore, also the interpretation of the model
is more complicated, as the level of any one criterion affects to the utility obtained
from a ﬁxed level of another criterion.
Example 3.3. Assume the criteria in the example 3.2 have an interaction, i.e. the
level of money affects to the utility obtained from wildlife. Both criteria have
equal weight, 0.4, and thus the interaction term a = 1−0.4−0.4
0.4·0.4
= 1.25. The partial
utilities are calculated with the same functions as in example 3.2 and the result-
ing utilities are presented in Table 3.3. In this case, as the alternative 2 has the
most even distribution of the criteria, it is the best alternative also with this utility
model.
Since all the interactions are dealt with the same parameter, this function is fairly
inﬂexible. In principle, it would be possible to estimate separate interaction term for
each interaction pair of criteria, but this would require a lot of data from decision
makers: each parameter requires at least one observation in order to be estimated,
and the number of observations increases very fast as m increases.
Another common utility function form is the conjunctive function
Ui =
m
∏
j=1
(uj(cij))a j
(3.8)
This model is non-compensatory at nature. If the utility due to one of the criteria
assumes zero value, the overall utility is also zero. It favours alternatives having
fairly similar partial utility values for all criteria (e.g. Tell 1976).
Table 3.3 Overall utilities with interaction term
Alternative
Money
Wildlife
Overall utility
1
197
18
0.431
2
164
80
0.746
5
30
137
0.491
8
186
34
0.532
9
182
38
0.554
10
93
121
0.654

--- Page 38 ---

3.2 Multi-Attribute Utility Functions
29
One example of utility functions is also the distance function (Tell 1976; Tell and
Wallenius 1979)
Ui =
 m
∑
j=1
a2
j

copt
j
−cij
	2
(3.9)
where copt
j
deﬁnes the optimal state of each criterion. This model needs to be scaled
so that the optimal value of criterion is given value 1 and the least preferred value
of that criterion is given zero value.
The weights aj have throughout the chapter been interpreted as importances of
the different criteria. However, this approach has also been criticized. For instance,
Keeney and Raiffa (1976) consider the weights to be simple rescaling method which
is necessary to match the units of one unidimensional utility function with another.
Since it is possible to obtain very different value functions from the same data for
any one criterion (e.g. Formulas 2.4 and 2.5) this needs to be kept in mind. For
instance, when Formula 2.4 is used, the weights can be interpreted to describe the
importance of change from 0 level in natural scale to the maximum level, and when
Formula 2.5. is used, the same weights should describe the importance of change
from the minimum value at natural scale, i.e. 0 at utility scale, to the maximum value
at both natural and utility scale.
Example 3.4. In the data of the example 3.2, also a conjunctive utility function can
be used. The partial utilities are calculated with the same functions as in exam-
ple 3.2. The criteria are assumed to be equally important also in this example, and
the resulting utilities are presented in Table 3.4. In this case, as the alternative 2
has the most even distribution of the criteria, it is the best alternative also with this
utility model.
3.2.2 Basis for Estimating the Weights
There exist a large amount of methods that can be used for estimating the weights
in the utility function. Generally, they can be divided to two main categories: direct
and indirect methods. In indirect methods, the estimation may be based on the ear-
lier, true decisions. These revealed preferences are commonly utilised for evaluating
Table 3.4 Overall utility assuming a conjunctive utility function
Alternative
Money
Wildlife
Overall utility
1
197
18
0.233
2
164
80
0.779
5
30
137
0.390
8
186
34
0.498
9
182
38
0.541
10
93
121
0.666

--- Page 39 ---

30
3 Multi-Criteria Decision Problems
non-market values. In direct methods, the estimation is based on direct questions
concerning the importances of criteria in the decision situation at hand.
It has been claimed that the old decisions are the only reliable way to estimate
the true utility function. Such utility function is true only with respect to the old
decision, however. The preferences and situation of the decision maker may have
totally changed after that old decision was made, and thus, the model may not be at
all useful in a new decision situation. The estimated utility model may also be in-
correct for the old decision, if it was made based on imperfect information on the
alternatives. Therefore, studying the old decisions and the preferences implied by
these decisions are mainly useful in descriptive studies. When aiming at decision
support, direct methods can be assumed more useful.
Direct estimation methods can be further divided to two groups, statistical and
subjective methods (Schoemaker and Waid 1982). In statistical methods, the deci-
sion makers are asked to holistically evaluate some decision alternatives, and the
utility function is estimated based on these values. In subjective methods, the deci-
sion problem is divided to several criteria, and preferences are asked regarding these
criteria.
Different estimation method for utility functions, have been tested, for instance
by Eckenrode (1965), Fishburn (1967), Tell (1976), Tell and Wallenius (1979),
Eliashberg (1980), Jacquet-Lagreze and Siskos (1981), Schoemaker and Waid
(1982), Horsky and Rao (1984), and Laskey and Fischer (1987). In this sub-chapter,
only one group of subjective direct methods of estimation are presented, namely
SMART. Later in the chapter, some additional techniques like the pairwise com-
parisons of Analytic Hierarchy Process are presented. These can also be used for
estimating a utility function. However, these methods do not necessarily belong un-
der the MAUT, and therefore they are dealt with separately.
3.2.3 Smart
SMART (Simple Multi-Attribute Rating Technique) is a decision support method
developed at the close of the 1960s and early 1970s in the ﬁeld of multi-attribute
utility theory (von Winterfeldt and Edwards 1986). In fact, several methods based
on direct evaluation are involved in the family of SMART methods, of which vari-
ous researchers have developed new versions over the years. Generally, in SMART,
additive models are applied.
Direct rating in SMART means, for example, that criteria are directly assigned
numerical values depicting their importance. The least important criterion is ﬁrst
given 10 points and the points of other criteria are related to that. Then, the points are
summed, and the ﬁnal weights are the points of each criterion divided by the sum.
aj =
pj
m
∑
i=1
pi
(3.10)
The same principles can, of course, also be used for estimating the value function
with respect to each criterion (Chapter 2).

--- Page 40 ---

3.2 Multi-Attribute Utility Functions
31
When the importance of the individual criteria and the priorities of each of the
alternatives with respect to each of the criteria have been determined, the overall
utility of alternatives can be calculated. SMART methods have been applied in
natural resources management by Reynolds (2001) and Kajanus et al. (2004), for
instance.
Another version of SMART, namely SMARTS (SMART using Swings) also
exists. In SWING weighting, it is ﬁrst assumed that all criteria are their lowest pos-
sible values, e.g. at utility function value 0. Then it is asked, which criteria is most
important to change from its minimum level to its maximum level. This criterion is
given 100 points. After that, the rest of the criteria are evaluated relative to that crite-
rion. This approach has the advantage that the importance weights explicitly depend
on the range of criteria values on the problem at hand, while the former SMART
weighting does not necessarily do so.
Example 3.5. The case example presented next is applied throughout the book to
illustrate different MCDM tools. The data comes from a real-life case of strategic
planning in a 320.9 ha area in northern Finland, owned by state and managed by
the Finnish State Forest Enterprise Mets¨ahallitus. It has been used in many planning
studies. The data consists of three criteria and six alternatives (see Kangas et al.
1992). The problem was to assess the priority of the forest plans generated for the
area. The plans were
Continue natural growth with no cuttings (NAT)
Optimize scenic beauty index (SCEN)
Normal forestry guidelines (NORM)
Optimize game values (GAME)
Modest regeneration (MREG)
Maximize income (INC)
The decision criteria in this problem were timber production, scenic beauty, and
game management. Each of the criteria was further decomposed into several sub-
criteria. In order to keep the example as simple as possible, only timber production
and scenic beauty of the main criteria were used here. The timber production was
divided to two sub-criteria, namely net incomes during ﬁrst 10 years and stumpage
value after 20 years. The decision hierarchy is presented in Fig. 3.2.
Utility
Timber production
Net incomes
Scenic beauty
Future value of
timber
Fig. 3.2 The decision hierarchy in SMART example

--- Page 41 ---

32
3 Multi-Criteria Decision Problems
Table 3.5 Net incomes, stumpage values and scenic beauty index of the six alternative plans
Net incomes
Stumpage value
Scenic
1000AC
millionAC
beauty index
NAT
0.00
0.71
5.5
SCEN
79.6
0.28
5.7
NORM
38.0
0.60
5.4
GAME
33.0
0.61
5.5
MREG
102.3
0.51
5.2
INC
191.7
0.13
4.9
Table 3.6 Cutting schemes of the example alternatives
Regeneration
Per cent
Regeneration
Per cent
1st period (ha)
Clear-cut
2nd period (ha)
Clear-cut
NAT
0
0
0
0
SCEN
55.1
0
104.3
0
NORM
14.9
81
15.6
81
GAME
17.0
0
17.2
0
MREG
50.3
96
44.5
11
INC
109.6
68
87.2
29
Table 3.7 Sub-utility function values
Net incomes
Stumpage value
Scenic beauty
NAT
0.000
1.000
0.750
SCEN
0.631
0.546
1.000
NORM
0.360
0.954
0.625
GAME
0.319
0.959
0.750
MREG
0.740
0.893
0.375
INC
1.000
0.000
0.000
Table 3.8 Global and local utilities
Global utility
Timber production
Scenic beauty
NAT
0.350
0.200
0.150
SCEN
0.688
0.488
0.200
NORM
0.532
0.407
0.125
GAME
0.533
0.383
0.150
MREG
0.697
0.622
0.075
INC
0.600
0.600
0.000

--- Page 42 ---

3.2 Multi-Attribute Utility Functions
33
Table 3.9 Weights based on ranking
Rank Exponent
Rank reciprocal
Rank sum
with z = 1.6
ROC
Timber production
0.67
0.67
0.75
0.75
Scenic beauty
0.33
0.33
0.25
0.25
Net incomes describe the timber harvesting income during the ﬁrst half of the
20-year planning period, and stumpage value describes the monetary value of the
remaining trees at the end of the 20-year period. Scenic beauty is an index describ-
ing scenic beauty after 20 years, calculated with MONSU software (see Pukkala
2006). The data for the example is presented in Table 3.5. From the alterna-
tives, NAT means that there are no cuttings at all. In SCEN and GAMES alter-
natives, regeneration is carried out, but no clear-cuts are allowed. In INC alterna-
tive, the area of clear-cutting is largest: in MREG the regeneration area is only
half of that, although most of the regeneration is carried out with clear-cutting
(Table 3.6.).
In SMART analysis, an exponential utility function (of the form a · e−b/x) was
assumed for net incomes and stumpage value, and a linear utility function (For-
mula 2.5) for Scenic beauty. The utility functions were calculated with WebHIPRE
program (http://www.hipre.hut.ﬁ). The utility function values for each alternative
and each criterion are given in the Table 3.7.
The criteria were next weighted. Since the criteria form a decision hierarchy,
the lowest-level criteria were ﬁrst weighted. The least important criterion, stumpage
value, was given 10 points and the most important, net incomes, was given 30 points.
Then, the weight of net incomes becomes 0.75 and that of stumpage value 0.25. The
higher-level criteria were compared in the same way: the scenic beauty was given
10 points and the timber production was given 40 points, which gave weights 0.2 for
scenic beauty and 0.8 for timber production. Then, the global weights of net incomes
and stumpage value were calculated as 0.8 · 0.75 = 0.6 and 0.8 · 0.25 = 0.2. With
these weights, the priorities of the alternatives could be calculated. In Table 3.8. the
priorities of each alternative with respect to both higher-level criteria, and the global
priorities are shown.
It is also possible to use the importance ranks of the criteria to calculate the
weights aj for the alternatives. This approach is called SMARTER (Simple Multi-
Attribute Rating Technique Exploiting Ranks). One possible approach for calculat-
ing the weights from ranks are the so-called Rank Order Centroid or ROC weights
(Edwards and Barron 1994)
aj = (1/m)
m
∑
i=j
1/i,
(3.11)
where the criteria are assumed to be arranged from most important (j = 1) to
least important (j = m). von Winterfeldt and Edwards (1986; also Stillwell et al.
1981) presented three other formulas that can be used for calculating weights from

--- Page 43 ---

34
3 Multi-Criteria Decision Problems
Table 3.10 Global utilities with ROC weighting
Global utility
NAT
0.375
SCEN
0.707
NORM
0.538
GAME
0.547
MREG
0.677
INC
0.563
importance ranks of criteria, namely the rank reciprocal rule,
aj = 1/r j
∑
i
1/ri
(3.12)
the rank sum – rule
aj = (m+1−r j)

 m
∑
i=1
ri
(3.13)
and the rank exponent rule
aj = (m+1−r j)z
 m
∑
i=1
rz
i ,
(3.14)
where z is estimated with
aj
ai
= (m+1−r j)z
(m+1−ri)z
(3.15)
where r j is the rank of criterion j.
In the last formula, the decision maker needs to give a preference ratio (3.15)
for one pair of weights, in order to calculate the rest of them. This ratio could, for
instance, be the weight ratio of the most and least important criteria.
All three of the formulas can be considered ad hoc procedures (Stillwell et al.
1981; Edwards and Barron 1994). Yet, they could be useful if the decision maker
does not want to evaluate the magnitude of his/her preferences.
Example 3.6. In the example above, in the higher hierarchy level there are two crite-
ria. In this case, the weights for these two criteria, calculated with the formulas based
on ranks are in Table 3.9. Using ROC weighting, the global priorities of the alterna-
tives are presented in Table 3.10., SCEN alternative being the most preferred one.
3.3 Even Swaps
Even swaps, originally developed by Hammond et al. (1998a, b), is a method for
making tradeoffs among criteria across a range of alternatives. The method is based

--- Page 44 ---

3.3 Even Swaps
35
on direct comparison of the preferences of each pair of decision elements: one cri-
terion is valued in terms of another criterion. The criteria can be qualitative as well
as quantitative. The method goes on in four steps (Hammond et al. 1998a, b).
Step 1. The consequence matrix is created. Each row represents an alternative, and
each column a criterion. Each cell contains the consequence of the given
alternative with respect to the given criterion.
Step 2. Dominated alternatives are eliminated. For instance, if alternative A is bet-
ter than alternative B on one or more criteria, and no worse on all other
criteria, then alternative B can be eliminated. Also such alternatives that are
practically dominated (i.e. have only a slight advantage in one criterion and
are dominated in other criteria) can be removed.
Step 3. Criteria, which have equal rating for each alternative, can be ignored in
decision making. Therefore, the criteria are made equivalent by making
tradeoffs. This is carried out with the following steps (Kajanus et al.
2001):
• Determining the change necessary to eliminate one criterion
• Assessing what change in another objective would compensate for the needed
change
• Making the even swap in the consequence table by reducing the one objective
while increasing the other
• Cancelling out the now irrelevant objective
Step 4. Steps 2 and 3 are repeated until there is only one objective left. Then, the
dominant alternative is selected.
Example 3.7. The original table of consequences is the same as in example 3.5
Net
Stumpage
Scenic
incomes
value
beauty
1000AC
millionAC
index
NAT
0.00
0.71
5.5
SCEN
79.6
0.28
5.7
NORM
38.0
0.60
5.4
GAME
33.0
0.61
5.5
MREG
102.3
0.51
5.2
INC
191.7
0.13
4.9
From this table, the swaps are made in order to get either some alternatives dom-
inated, or either some criteria irrelevant. The example was carried out with the
SMART-SWAPS
program
(http://www.smart-swaps.hut.ﬁ,
Mustajoki
and
H¨am¨al¨ainen 2005; Mustajoki and H¨am¨al¨ainen 2006). The SMART-SWAP program
actively proposes swaps for the decision maker, to make the analysis easier.
The ﬁrst swap was to compensate a change 5.4 →5.5 in NORM’s scenic beauty
with a decrease of incomes 38 →33. The resulting table shows that NORM is now
dominated by GAME, and can be removed.

--- Page 45 ---

36
3 Multi-Criteria Decision Problems
Net
Stumpage
Scenic
incomes
value
beauty
1000AC
millionAC
index
NAT
0.00
0.71
5.5
SCEN
79.6
0.28
5.7
NORM
33.0
0.60
5.5
GAME
33.0
0.61
5.5
MREG
102.3
0.51
5.2
INC
191.7
0.13
4.9
The second swap was to compensate a change 4.9 →5.5 in INC’s scenic beauty
with a decrease of incomes 191.7 →170
Net
Stumpage
Scenic
incomes
value
beauty
1000AC
millionAC
index
NAT
0.00
0.71
5.5
SCEN
79.6
0.28
5.7
GAME
33.0
0.61
5.5
MREG
102.3
0.51
5.2
INC
170.0
0.13
5.5
The next swap was to compensate a change 5.2 →5.5 in MREG’s scenic beauty
with a decrease of incomes 102.3 →90
Net
Stumpage
Scenic
incomes
value
beauty
1000AC
millionAC
index
NAT
0.00
0.71
5.5
SCEN
79.6
0.28
5.7
GAME
33.0
0.61
5.5
MREG
90.0
0.51
5.5
INC
170.0
0.13
5.5
and the next swap was to compensate a change 5.7 →5.5 in SCEN’s scenic beauty
with a increase of stumpage value 0.28 →0.38. Now, SCEN alternative is dominated
and can be removed from the table. In addition, scenic beauty is irrelevant and can
be removed from the table.
Net
Stumpage
Scenic
incomes
value
beauty
1000AC
millionAC
index
NAT
0.00
0.71
5.5
SCEN
79.6
0.38
5.5
GAME
33.0
0.61
5.5
MREG
90.0
0.51
5.5
INC
170.0
0.13
5.5

--- Page 46 ---

3.4 Analytic Hierarchy Process
37
The next swap was to compensate a change 0.61 →0.71 in GAME’s stumpage value
with a decrease of incomes 33 →28, resulting NAT being a dominated alternative
that can be removed.
Net
Stumpage
incomes
value
1000AC
millionAC
NAT
0.0
0.71
GAME
28.0
0.71
MREG
90.0
0.51
INC
170.0
0.13
The next swap was to compensate a change 0.51 →0.71 in MREG’s stumpage value
with a decrease of incomes 90 →80, resulting GAME being a dominated alternative
that can be removed
Net
Stumpage
incomes
value
1000AC
millionAC
GAME
28.0
0.71
MREG
80.0
0.71
INC
170.0
0.13
Then, the ﬁnal swap was to compensate a change 0.13 →0.71 in INC’s stumpage
value with a decrease of incomes 170 →145, resulting MREG being a dominated
alternative, and INC the recommended one
Net
Stumpage
incomes
value
1000AC
millionAC
MREG
80.0
0.71
INC
145.0
0.71
3.4 Analytic Hierarchy Process
3.4.1 Decision Problem
The Analytic Hierarchy Process (AHP), originally developed by Saaty (1977, 1980),
is a widely used MCDS method and perhaps the most popular in many applica-
tion ﬁelds, including natural resource management. Mendoza and Sprouse (1989),

--- Page 47 ---

38
3 Multi-Criteria Decision Problems
Overall goal
Decision
objective 1
Decision
attribute 1
Decision
objective n
Decision
attribute n
Alternative 1
Alternative 2
Alternative 3
Alternative n
Decision
objective 2
Decision
attribute 1
Decision
attribute n
...
...
...
...
Fig. 3.3 The decision hierarchy
Murray and von Gadow (1991), and Kangas (1992), among others, have used AHP
in forestry applications, and the number of applications is continuously increasing
(e.g. Rauscher et al. 2000; Reynolds 2001; Vacik and Lexer 2001). AHP has also
gained interest among forestry practitioners. The Finnish State Forest Enterprise
Mets¨ahallitus, which governs the vast majority of state-owned lands in Finland, has
used AHP, or more precisely the HIPRE software, in practical natural resource plan-
ning (Pyk¨al¨ainen et al. 1999). For a review of AHP forestry applications, readers
are referred to Kangas (1999), and to Schmoldt et al. (2001) for extensions and for
AHP-related development.
Basically the AHP is a general theory of measurement based on some mathe-
matical and psychological principles. In the method, a hierarchical decision schema
is constructed by decomposing the decision problem in question into decision ele-
ments – goals, objectives, attributes and decision alternatives. The general goal is at
the top of a decision hierarchy, and decision alternatives constitute the lowest level
(Fig. 3.3).
The branches of the decision hierarchy are assumed to be independent of each
other. It means that the decision criteria are not supposed to measure the same values
from the decision maker’s point of view. For instance, if scenic beauty measures, for
instance, the recreational value of the forest estate, but has no intrinsic value besides
that, it should not be included as a criterion of its own, but as a sub-criterion for
recreational value. Deﬁning the decision hierarchy is important, as splitting the cri-
teria in different ways has been noted to affect their weight in the decision analysis
(e.g. P¨oyh¨onen and H¨am¨al¨ainen 1998; P¨oyh¨onen et al. 2001). This does not mean,
however, that the decision criteria should not be correlated. On the contrary, it often
happens that, for instance, criteria describing biodiversity and recreation value may
be correlated.

--- Page 48 ---

3.4 Analytic Hierarchy Process
39
On the other hand, the independency means that the criteria should not have
interactions. It is possible that the incomes in the different alternatives also affect
the importance of aesthetic or ecological values (e.g. Leskinen et al. 2003). In basic
AHP this is not allowed, but in regression AHP context (e.g. Leskinen and Kangas
2005a) and in ANP such interactions can be accounted for.
The importances or preferences of decision elements are compared in a pair-
wise manner with regard to each element above in the hierarchy. Based on these
comparisons, an additive model on a ratio scale describing the preferences of the
decision maker and priorities of decision alternatives with respect to the objectives
or attributes is estimated. The model is called a priority function. The decision alter-
native which produces the greatest global priority is considered the “best” and most
satisfactory.
Differences in measurement scales and units do not present any difﬁculty when
the AHP is used, because the method is based on straight comparison between the
signiﬁcance and preference of each pair of decision elements without using any
physical unit. Thus, AHP can deal with qualitative attributes as well as those which
are quantitative.
3.4.2 Phases of AHP
The four basic steps involved in using the AHP to address decision problems are:
1. The decision hierarchy is constructed by decomposing the original decision prob-
lem into a hierarchy of interrelated decision elements.
2. Pairwise comparisons are made at each level of the hierarchy. In making the
comparison, the question is, which of the two factors has a greater weight in
decision making, and how much greater, or which of the two decision alternatives
is more preferred with regard to a certain decision attribute.
3. Using the pairwise comparisons as input, the relative weights (importance/
preference) of elements at each level are computed using the eigenvalue method.
The resulting weights or priorities represent the decision maker’s perception
of the relative importance or preference of the elements at each level of the
hierarchy.
4. The ratings for the decision alternatives are calculated based on the relative
weights of the decision elements.
Pairwise comparisons give the decision maker a basis on which to reveal his/her
preferences by comparing two elements at a time. The importances or preferences
of decision elements are compared in a pairwise manner with regard to each ele-
ment above in the hierarchy. First, each of the alternatives from 1 to n is compared
to each other alternative with respect to decision attribute 1. These comparisons,
with respect to one decision element, form one comparison set. Then, each of the
alternatives is compared to each other alternative with respect to rest of the decision
attributes, one by one. After that, the decision attributes are compared pairwisely

--- Page 49 ---

40
3 Multi-Criteria Decision Problems
with respect to each decision objective above them, and ﬁnally, the decision objec-
tives are compared in a pairwise manner with respect to the goal.
In the standard method presented by Saaty (1977, 1980), the decision maker has
the option of expressing preferences between the two elements as:
(i) Equal importance or preference of both elements
(ii) Weak importance or preference of one element over another
(iii) Essential or strong importance or preference of one element over another
(iv) Demonstrated importance or preference of one element over another
(v) Absolute importance or preference of one element over another
These preferences are then translated into numerical values of 1, 3, 5, 7 and 9,
respectively, with 2, 4, 6 and 8 as intermediate values. Many other variations of
the scale have been presented (see Leskinen 2001). It is also possible to carry out
comparisons by using a continuous scale, e.g. by making use of graphical bars in
the computer interface (e.g. Pukkala and Kangas 1993).
For estimating the priorities, the matrix of pairwise comparisons A is constructed
for each set of comparisons. The elements of the matrix, aij, describe the comparison
of alternative (or attribute or objective) i to j. The matrix is required to be reciprocal,
i.e. in the matrix the element aij = 1/aji. It means that if alternative i is twice as good
as j, then j has to be half as good as i. Each alternative is then indifferent with itself,
i.e. when i = j, aij = 1.
If there were no inconsistencies in judgements, matrix A has unit rank since every
row is a constant multiple of the ﬁrst row, and all the eigenvalues of the matrix are
zero except one. (Rank of a matrix is the number of mutually independent rows in
it). Based on a consistent matrix A, relative weights can be determined by solving
the equation
Aw = λw,
(3.16)
where λ is the only nonzero eigenvalue of a consistent matrix A, and w is its right
eigenvector. The solution w of this problem is any column of A. These solutions dif-
fer only by a multiplicative constant. Thus, the same relative weights are got based
on any column of the matrix. In human decision making, some inconsistencies can
be expected: people’s feelings and preferences are not always consistent. Further-
more, as the largest value used in the comparison matrix is 9, and there are only
nine possible answers, in many cases it may be impossible to compare the decision
elements consistently using this scale.
Example 3.8. If the comparisons were such that decision maker considers alterna-
tive 1 to be twice as good as 2, alternative 2 three times as good as 3, and alter-
native 1 six (= 2 · 3) times as good as alternative 3, (i.e. a12 = 2, a23 = 3 and
a13 = 6), the decision matrix is considered to be consistent. The matrix A would
then be
⎡
⎣
1
1/2
1/6
2
1
1/3
6
3
1
⎤
⎦

--- Page 50 ---

3.4 Analytic Hierarchy Process
41
In this case, the weights can be obtained simply by dividing each column with the
sum of its cell values, giving weights
⎡
⎣
0.111
0.222
0.667
⎤
⎦
When A contains inconsistencies, the estimated weights can be obtained using the
eigenvector equation.
(A−λmaxI)q = 0
(3.17)
where λmax is the largest eigenvalue of matrix A, q its right eigenvector and I
the identity matrix. The right eigenvector, q, constitutes the estimation of relative
weights. It is the ﬁrst principal component of the matrix of pairwise comparisons.
The ﬁrst principal component of a matrix is a linear combination of the variables
(i.e. comparisons with respect to one alternative) that describes the largest part of
the variation in the matrix. It gives the relative weights to the compared elements,
which best ﬁt to the made comparisons. If the matrix does not include any inconsis-
tencies, i.e. the judgements made by a decision maker have been consistent, q is an
exact estimate of the priority vector.
Each eigenvector is scaled to sum to one to get the priorities. The form of pri-
ority functions is the same as the form of additive linear utility functions without
interaction terms.
Global priorities of decision elements are calculated downwards from the top of
the hierarchy by multiplying the local priorities by the priority of their correspond-
ing decision element at the level above. Global priority of an element is then used
to weight the local priorities of elements at the level below and so on down to the
bottom level. Global priorities at each level sum up to one.
It has been shown that λmax of a reciprocal matrix A is always greater or equal
to n (= number of rows = number of columns) (e.g. Saaty 1977). If the pairwise
comparisons do not include any inconsistencies, λmax = n. The more consistent the
comparisons are, the closer the value of computed λmax is to n. Based on this prop-
erty, a consistency index, CI, has been constructed
CI = (λmax −n)/(n−1).
(3.18)
CI estimates the level of consistency with respect to the entire comparison process.
A consistency ratio, CR, also measures the coherence of the pairwise compar-
isons. To estimate the CR, the average consistency index of randomly generated
comparisons, ACI, has to be calculated (CR = CI/ACI). ACI varies as a func-
tion of the size of matrix (e.g. Saaty 1980). As a rule of thumb, a CR value of
0.1 or less is considered to be acceptable. Otherwise, all or some of the compar-
isons must be repeated in order to resolve the inconsistencies of pairwise compar-
isons.

--- Page 51 ---

42
3 Multi-Criteria Decision Problems
Utility
Timber production
Net incomes
Scenic beauty
Future value of
timber
Alt 1
Alt 2
Alt 3
Alt 4
Alt 5
Alt 6
Fig. 3.4 The decision hierarchy of the AHP example
Example 3.9. The problem of example 3.5 is analysed using AHP. There are six de-
cision alternatives and three criteria. They form a decision hierarchy (Fig. 3.4). The
alternatives were compared pairwisely with respect to each criterion, namely net
incomes, value of timber and scenic value (Table 3.11). The obtained CR results
mean that the comparisons were a bit too inconsistent for a good analysis, and it
would be recommendable to make some of them again. After comparing the alter-
natives, the criteria were compared. First, the second-level criteria, net incomes and
value of timber, were compared to each others and then the higher level criteria were
compared (Table 3.12)
The priorities and the consistency rations were calculated with webHIPRE pro-
gram (http://www.hut.hipre.ﬁ/). The priorities were ﬁrst calculated at the level of
decision attributes and objectives (Table 3.13). Then, INC is the best alternative with
respect to net incomes, NAT with respect to stumpage value and SCEN with respect
to scenic beauty. The local weight of net incomes was 0.75 and that of stumpage
value 0.25, the local weights of scenic beauty was 0.2 and that of timber production
0.8. Thus, the global weight of net incomes was 0.8·0.75 = 0.6 and that of stumpage
value 0.25·0.8 = 0.2. The global priorities of the alternatives with respect to deci-
sion attributes were obtained by multiplying the priorities at the decision objective
level with the global weights (Table 3.14). Global priorities with respect to timber
production were obtained by adding together the global priorities with respect to net
incomes and stumpage value, and the overall priorities by adding the priorities of
timber production and scenic beauty together (Table 3.14). It can be noted that INC
is the best alternative with respect to timber production as a whole, since the weight
of stumpage value is quite low, and also its overall priority was the best.
To illustrate the notion of inconsistency, the priorities of the alternatives were
calculated from each column in matrix 3.11 (Table 3.15). It means that six

--- Page 52 ---

3.4 Analytic Hierarchy Process
43
Table 3.11 Pairwise comparisons
NAT
SCEN
NORM
GAME
MREG
INC
(a) with respect to net incomes
NAT
1/1
1/4
1/2
1/2
1/7
1/9
SCEN
4/1
1/1
2/1
2/1
1/3
1/5
NORM
2/1
1/2
1/1
1/1
1/4
1/7
GAME
2/1
1/2
1/1
1/1
1/5
1/7
MREG
7/1
3/1
4/1
5/1
1/1
1/2
INC
9/1
5/1
7/1
7/1
2/1
1/1
CR = 0.099
(b) with respect to value of timber
NAT
1/1
6/1
3/1
3/1
4/1
8/1
SCEN
1/6
1/1
1/4
1/4
1/3
3/1
NORM
1/3
4/1
1/1
1/1
2/1
6/1
GAME
1/3
4/1
1/1
1/1
2/1
6/1
MREG
1/4
3/1
1/2
1/2
1/1
4/1
INC
1/8
1/3
1/6
1/6
1/4
1/1
CR = 0.159
(c) with respect to scenic beauty
NAT
1/1
1/2
1/1
1/1
3/1
5/1
SCEN
2/1
1/1
3/1
5/1
5/1
6/1
NORM
1/1
1/3
1/1
1/1
2/1
4/1
GAME
1/1
1/5
1/1
1/1
2/1
4/1
MREG
1/3
1/5
1/2
1/2
1/1
3/1
INC
1/5
1/6
1/4
1/4
1/3
1/1
CR = 0.146
Table 3.12 Pairwise comparisons between the criteria
Net incomes
Value of timber
Net incomes
1/1
3/1
Value of timber
1/3
1/1
CR = 0.000
Timber production
Scenic beauty
Timber production
1/1
4/1
Scenic beauty
1/4
1/1
CR = 0.000.
Table 3.13 Local utilities with respect to different criteria
Net incomes
Stumpage value
Scenic beauty
NAT
0.036
0.421
0.186
SCEN
0.113
0.057
0.382
NORM
0.064
0.188
0.155
GAME
0.061
0.188
0.155
MREG
0.272
0.114
0.081
INC
0.455
0.031
0.04

--- Page 53 ---

44
3 Multi-Criteria Decision Problems
Table 3.14 Overall utility and global utility with respect to timber production criterion and scenic
beauty
Overall utility
Timber production
Scenic beauty
NAT
0.143
0.106
0.037
SCEN
0.156
0.079
0.076
NORM
0.107
0.076
0.031
GAME
0.105
0.074
0.031
MREG
0.202
0.186
0.016
INC
0.287
0.279
0.008
different priority estimates were obtained. It can be noted that these priority esti-
mates have a lot of variation among them, for instance, the priority of INC with
respect to net incomes varies from 0.360 to 0.509 (0.455 in eigenvalue analysis,
Table 3.13), and that of NAT from 0.024 to 0.053 (0.036 in eigenvalue
analysis).
3.4.3 Uncertainty in AHP
Many decision scientists have criticized the AHP method. Perhaps the two foremost
problems with the application of AHP have been that the original comparison scale
does not allow for the expression of any hesitation regarding a single comparison,
and that the AHP itself does not provide tools for in-depth analyses of the com-
parisons, particularly of the uncertainty inherent in the data (e.g. De Jong 1984;
Crawford and Williams 1985; Alho et al. 1996). The only means to analyse the
uncertainty in AHP is to calculate the inconsistencies. Moreover, part of the incon-
sistencies in the pairwise analysis may be due to the scale, not the answers given by
the people (Leskinen 2001).
In basic AHP the number of comparisons increases rapidly as the number of
alternatives and criteria increases. Large numbers of comparisons may be too costly
Table 3.15 Priorities calculated by scaling each column of pairwise comparisons matrix
separately
1
2
3
4
5
6
NAT
0.040
0.024
0.032
0.030
0.036
0.053
SCEN
0.160
0.098
0.129
0.121
0.085
0.095
NORM
0.080
0.049
0.065
0.061
0.064
0.068
GAME
0.080
0.049
0.065
0.061
0.051
0.068
MREG
0.280
0.293
0.258
0.303
0.255
0.238
INC
0.360
0.488
0.452
0.424
0.509
0.477

--- Page 54 ---

3.4 Analytic Hierarchy Process
45
and tedious, especially for participatory planning problems. However, eigenvalue
technique requires a full comparison matrix in order to be carried out.
Finally, rank reversal occurring when using the AHP may cause problems (e.g.
Belton and Gear 1983). This means that if new alternative is included in the analy-
sis, it is possible that the rank of the previously considered alternatives changes,
although the preferences do not change. For instance, if the preferences originally
are so that A is preferred to B, and B to C, after including a new alternative D the
situation may change so that B is preferred to A. The rank reversal may be partly
due to the arithmetic aggregation rule applied in the basic AHP, and partly due to
inconsistencies in the pairwise comparisons (Leskinen and Kangas 2005b). Accord-
ing to, rank reversal is acceptable if it is due to inconsistencies (i.e. new alternatives
give new information concerning the preferences), but not acceptable if it is due to
the method itself. Using geometric aggregation rule, the rank reversal problem can
be avoided (Barzilai and Golany 1994; Leskinen and Kangas 2005b). The problem
of rank reversal does not only apply to AHP, but also, for instance, SMART, if the
sub-utility functions are calculated using interval scale.
To alleviate these problems, different modiﬁcations of AHP have been devel-
oped. In these, the concept of decision hierarchy and the pairwise comparisons may
be similar to the basic AHP, but the techniques are different. The number of compar-
isons can be reduced by the use of regression techniques for estimating preferences
instead of the eigenvalue technique (Alho et al. 1996, 2001; Leskinen 2001). The
pairwise comparisons are denoted with rij = vi

vj exp(εij), where exp(εij) describes
the uncertainty in each pairwise comparison. Since all the values of items i, vi are
positive, with no loss of generality, it can be expressed as
vi = exp(µ +αi)
(3.19)
where µ and αi are parameters. Then, the ratio can, in turn, be expressed as
vi/vj = exp(αi −αj)
(3.20)
and the model can be expressed as
log(rij) = yij = αi −αj +εij
(3.21)
Thus, expressing the values vi as exponents and using a logarithmic transforma-
tion enables using a linear model. The parameters αi, i = 1,..., n −1 are then
estimated using standard regression tools, for instance SAS program. The para-
meter αn related to the item n is assumed to be zero for deﬁniteness, i.e. oth-
erwise there would be an inﬁnite number of solutions to this model. The mini-
mum number of observations in regression analysis is the number of parameters
to be estimated, i.e. it would be enough to include only one row or column from
the pairwise matrix in the analysis. In that case, however, it would not be pos-
sible to estimate the inconsistency involved. For that, additional observations are
needed.

--- Page 55 ---

46
3 Multi-Criteria Decision Problems
In this model, the distribution of the error term, εij, describes the uncertainty of
the analysis. With this formulation, the error variance describes the inconsistency of
the comparisons: if the variance is 0, the comparisons are consistent and the higher
the variance, the more inconsistency there is.
The priorities of the alternatives that sum up to one are ﬁnally calculated as
qi =
exp(αi)
n
∑
i=1
exp(αi)
(3.22)
With this formula, the scale is transformed from logarithmic scale back to original
one (value scale). The division by the sum of transformed values scales the sum
of priorities to one. Finally, if the weight for each criterion j is denoted by aj, the
utility of each alternative i can be calculated with geometric aggregation rule as
Ui = ∏j q
a j
ij /∑i∏j q
a j
ij .
(3.23)
Example 3.10. The pairwise comparisons of example 3.9 with respect to net in-
comes were analyzed with regression AHP. In Table 3.16 are the data used in the
analysis. The explanatory variables are just zeros and ones. They describe, which al-
ternative has been compared to which, according to model 3.21. Since the parameter
for the last alternative is set to 0, INC is not included in the data. The parameters
were calculated using SAS, and the priorities of the alternatives with respect to net
incomes could be calculated (Table 3.17).
The standard error of the model is 0.19 and R2 is 0.9863. They indicate that the
pairwise comparisons are not quite consistent, but the consistency is fairly high.
These comparisons were consistent enough also with respect to CR criterion.
Table 3.16 Pairwise comparison data for a model
NAT
SCEN
NORM
GAME
MREG
r
y
1
−1
0
0
0
0.25
−1.38629
1
0
−1
0
0
0.5
−0.69315
1
0
0
−1
0
0.5
−0.69315
1
0
0
0
−1
0.143
−1.94491
1
0
0
0
0
0.111
−2.19823
0
1
−1
0
0
2.0
0.693147
0
1
0
−1
0
2.0
0.693147
0
1
0
0
−1
0.33
−1.10866
0
1
0
0
0
0.2
−1.60944
0
0
1
−1
0
1.0
0
0
0
1
0
−1
0.25
−1.38629
0
0
1
0
0
0.143
−1.94491
0
0
0
1
−1
0.2
−1.60944
0
0
0
1
0
0.143
−1.94491
0
0
0
0
1
0.5
−0.69315

--- Page 56 ---

3.4 Analytic Hierarchy Process
47
Table 3.17 Estimated priorities of alternatives
α
Exp(α)
q
NAT
−2.55106
0.077999
0.035316
SCEN
−1.38936
0.249235
0.112846
NORM
−1.95364
0.141757
0.064183
GAME
−1.99083
0.136582
0.06184
MREG
−0.50575
0.603053
0.273044
INC
0
1
0.45277
Sum
2.208626
1
Another example of accounting for uncertain preferences in AHP framework is
interval AHP (Leskinen and Kangas 1998; see also Arbel 1989; Salo and H¨am¨al¨ainen
1992). In interval AHP, the decision makers are asked the probability that the
preference lies in a certain interval, or the interval the preference lies in with a
certain probability.
The regression approach to AHP can also be reformulated to Bayesian frame-
work (e.g. Alho and Kangas 1997; Basak 1998). Bayes theorem is then used to
derive the conditional distributions of the parameters. Then, it is easy to calculate
the probabilities that one plan is better than all the others, for example.
Yet another example of accounting for uncertainty in AHP context is the fuzzy
AHP. In fuzzy AHP, preference ratios of criteria or alternatives are described by
membership functions (e.g. Mendoza and Prabhu 2001).
3.4.4 ANP
The Analytic Network Process (ANP) is an extension of the AHP (Saaty 2001) that
answers some of the development challenges of the basic AHP methodology. Basi-
cally, the ANP is a general theory of ratio scale measurement of inﬂuence, with a
methodology that deals with dependence and feedback. The comparisons are made
using pairwise comparisons like in original AHP, but the relations between the cri-
teria are included in the comparisons. The main idea is to avoid the assumption of
independence among criteria of the standard AHP.
ANP model can be designed either using a so-called control hierarchy (i.e. a hi-
erarchy of subsystems with inner dependencies) or as a non-hierarchical network,
which includes both decision criteria and alternatives as clusters (e.g. Wolfslehner
et al. 2005). The clusters are connected with arrows that describe the ﬂow of in-
ﬂuence. Thus, each criterion can have an interaction with other criteria (outer de-
pendence), and each sub-criterion can have interaction with other sub-criteria in the
same cluster (inner dependence).
A hypothetical example of ANP network is presented in Fig. 3.5. In the exam-
ple, decision objective 1 inﬂuences to objectives 2, 3 and 6, and objective 3 is also
inﬂuencing objective 1. In addition, there is a feedback loop back to the objective

--- Page 57 ---

48
3 Multi-Criteria Decision Problems
Decision
objective 1
Attributes 1-n
Decision
alternatives
1-n
Decision
objective 3
Attributes 1-q
Decision
objective 2
Attributes 1-m
Decision
objective 4
Attributes 1-t
Decision
objective 5
Attributes 1-r
Decision
objective 6
Attributes 1-s
Fig. 3.5 An example of ANP network
itself. The inﬂuence means that instead of comparing decision attributes of objective
2 in pairwise manner, the inﬂuence is accounted for. Thus it is asked, for instance,
“With regard to decision objective 1, decision attribute 1 is how many times more
important than decision attribute 2?”. For a forestry example concerning criteria
and indicators of sustainable management, readers are referred to Wolfslehner et al.
(2005).
The ANP utilises a so-called supermatrix calculation in order to deal with inter-
actions among the network of criteria and decision alternatives. Saaty (2001) stated
that, generally taken, the ANP is more objective and more likely to capture what
happens in the real world than the AHP. However, applying the ANP is much more
laborious and time-consuming. Obviously the ANP has potential application in for-
est management, where different kinds of interdependencies between decision ele-
ments are usual.
3.5 A’WOT
In the so called A’WOT method (Kurttila et al. 2000; Pesonen et al. 2001a) the
Analytic Hierarchy Process (AHP) and its eigenvalue calculation framework are
integrated with SWOT analysis. SWOT is a widely applied tool in strategic deci-
sion support. In SWOT, the internal and external factors most important for the
enterprise’s future are grouped into four categories: Strengths, Weaknesses, Oppor-
tunities, and Threats. By applying SWOT in a strategic planning process, the aim
usually is to develop and adopt a strategy resulting in a good ﬁt between these in-
ternal and external factors. When used properly, SWOT can provide a good basis
for strategy formulation. However, SWOT could be used more efﬁciently than nor-
mally has been the case in its applications. The most crucial problem with SWOT is

--- Page 58 ---

3.5 A’WOT
49
Operational
environment 
Strengths
 (S)
S 2
S n
Weaknesses
 (W)
Opportunities
(O)
Threats 
(T)
SWOT
group
SWOT
factors
Strategy
alternatives
. . .
S 1
Fig. 3.6 A’WOT framework (Kurttila et al. 2000)
that it includes no means of analytically determining the importance of factors or of
assessing the ﬁt between SWOT factors and decision alternatives.
The aim in applying the hybrid method is to improve the quantitative infor-
mation basis of strategic planning processes. AHP’s linking with SWOT yields
analytically–determined priorities for the factors included in SWOT analysis and
makes them commensurable (Fig. 3.6). In addition, decision alternatives can be eval-
uated with respect to each SWOT factor by applying the AHP. So, SWOT provides
the basic frame within which to perform an analysis of the decision situation, and the
AHP assists in carrying out SWOT more analytically and in elaborating the analysis
so that alternative strategic decisions can be prioritised.
The main phases of A’WOT are as follows:
1. The SWOT analysis is carried out. The relevant factors of the external and inter-
nal environment are identiﬁed and included in SWOT analysis.
2. Pairwise comparisons between the SWOT factors are carried out separately
within each SWOT group. When making the comparisons, the issue at stake is
which of the two factors compared is more important and how much more im-
portant. With these comparisons as the input, the mutual priorities of the factors
are computed.
3. The mutual importance of the SWOT groups is determined by applying pairwise
comparisons. There are several possibilities as how to do this. For instance, it
is possible to compare the groups as such or the most important factors in each
group pairwisely.
4. The strategy alternatives are evaluated with respect to each SWOT factor by using
pairwise comparisons and the eigenvalue technique.
5. Global priorities are calculated for the strategy alternatives.
In the earliest A’WOT applications (Kurttila et al. 2000; Pesonen et al. 2001a), only
steps (1)–(3), as listed above, were carried out in an early stage of a strategic plan-
ning process. A’WOT strengthens the decision basis also in the case where the result
is only the quantiﬁcation and commensuration of SWOT factors. However, the ﬁ-
nal goal of any strategic planning process as a whole is to develop and propose a

--- Page 59 ---

50
3 Multi-Criteria Decision Problems
strategy resulting in a good ﬁt between internal and external factors. When steps (4)
and (5) are included in the A’WOT process, the initial SWOT analysis might not
always be applicable as such (Pesonen et al. 2001b).
The reason for this is that the SWOT factors could have been formulated so that
strategy alternatives can not be evaluated with respect to them. This being the case,
SWOT factors need some value-focused modiﬁcation and ﬁne-tuning (e.g. Leskinen
et al. 2006). For A’WOT, SWOT factors should be determined by asking, which are
the internal and external factors of the operational environment that should be taken
into account in choosing the strategy for the enterprise. Then it is possible to com-
pare strategy alternatives with respect to strengths, weaknesses, opportunities, and
threats as listed in SWOT. To take an example of the pairwise comparisons: which
of the two strategy alternatives compared (when implemented) makes it possible to
better exploit a certain opportunity, and how much better? According to the experi-
ences of A’WOT applications and tests, the combined use of the AHP and SWOT
analysis is a promising approach in supporting strategic decision-making processes
(Kurttila et al. 2000; Pesonen et al. 2001a, b).
References
Alho, J. and Kangas, J. 1997. Analysing uncertainties in experts’ opinions of forest plan perfor-
mance. Forest Science 43: 521–528.
Alho, J., Kangas, J., and Kolehmainen, O. 1996. Uncertainty in the expert predictions of the eco-
logical consequences of forest plans. Applied Statistics 45: 1–14.
Alho, J.M., Kolehmainen, O., and Leskinen, P. 2001. Regression methods for pairwise comparisons
data. In: Schmoldt, D.L., Kangas, J., Mendoza, G.A., Pesonen, M. (Eds.). The analytic hierarchy
process in natural resource and environmental decision making. Kluwer, Dordrecht, pp. 235–
251.
Arbel, A. 1989. Approximate articulation of preference and priority derivation. European Journal
of Operational Research 43: 317–326.
Barzilai, J. and Golany, B. 1994. AHP rank reversal, normalization and aggregation rules. INFOR
32: 57–64.
Basak, I. 1998. Probabilistic judgments speciﬁed partially in the analytic hierarchy process. Euro-
pean Journal of Operational Research 108: 153–164.
Belton, V. and Gear, T. 1983. On a short-coming of Saaty’s method of analytic hierarchies. Omega
11: 228–230.
Crawford, G. and Williams, C. 1985. A note on the analysis of subjective judgment matrices.
Journal of Mathematical Psychology 29: 387–405.
De Jong, P. 1984. A statistical approach to Saaty’s scaling method for priorities. Journal of Math-
ematical Psychology 28: 467–478.
Eckenrode, R.T. 1965. Weighting multiple criteria. Management Science 12: 180–192.
Edwards, W. and Barron, F.H. 1994. SMARTS and SMARTER: Improved simple methods for
multiattribute utility measurement. Organizational Behaviour and Human Decision Process 60:
306–325.
Eliashberg, J. 1980. Consumer preference judgments: an exposition with empirical applications.
Management Science 26: 60–77.
Fishburn, P.C. 1967. Methods of estimating additive utilities. Management Science 13: 435–
453.

--- Page 60 ---

References
51
Hammond, J.S., Keeney, R.L., and Raiffa, H. 1998a. Even swaps: a rational method for making
trade-offs. Harvard Business Review, March–April, pp. 1–11.
Hammond, J.S., Keeney, R.L., and Raiffa, H. 1998b. Smart choices: a practical guide to making
better decisions, Harvard Business School Press. Boston. MA.
Horsky, D. and Rao, M. R. 1984. Estimation of attribute weights from preference comparisons.
Management Science 30: 801–821.
Jacquet-Lagreze, E. and Siskos, J. 1981. Assessing a set of additive utility functions for multicrite-
ria decision-making, the UTA method. European Journal of Operational Research 10: 151–164.
Kajanus, M., Ahola, J., Kurttila, M., and Pesonen, M. 2001. Application of even swaps for strategy
selection in a rural enterprise. Management Decision 39: 394–402.
Kajanus, M., Kangas, J., and Kurttila, M. 2004. The use of value focused thinking and the A′WOT
hybrid method in tourism management. Tourism Management 25: 499–506.
Kangas, J. 1992. Multiple-use planning of forest resources by using the analytic hierarchy process.
Scandinavian Journal of Forest Research 7: 259–268.
Kangas, J. 1999. The analytic hierarchy process (AHP): standard version, forestry application and
advances. In: Helles, F., Holten-Andersen, P., and Wichmann, L. (Eds.). Multiple use of forests
and other natural resources. Kluwer, Dordrecht. Forestry Sciences 61. pp. 96–105.
Kangas, J., Kangas, A., Leskinen, P., Pyk¨al¨ainen, J. 2001a. MCDM methods in strategic planning
of forestry on state-owned lands in Finland: applications and experiences. Journal of Multi-
Criteria Decision Analysis 10: 257–271.
Kangas, J., Matero, J., and Pukkala, T. 1992. Analyyttisen hierarkiaprosessin k¨aytt¨o met-
sien monik¨ayt¨on suunnitteluun – tapaustutkimus. Mets¨antutkimuslaitoksen tiedonantoja 412,
48 pp.
Kangas, J., Pesonen, M., Kurttila, M., and Kajanus, M. 2001b. A’WOT: Integrating the AHP with
SWOT analysis. In: Dellman, K. (Ed.). Proceedings of the Sixth International Symposium on the
Analytic Hierarchy Process ISAHP 2001, August 2–4, 2001, Kursaal Bern, Berne, Switzerland,
pp. 189–199.
Keeney, R.L. and Raiffa, H. 1976. Decisions with multiple objectives: preferences and value trade-
offs. Wiley, New York, 569 pp.
Kurttila, M., Pesonen, M., Kangas, J., and Kajanus, M. 2000. Utilizing the analytical hierarchy
process (AHP) in SWOT analysis – A hybrid method and its application to a forest – certiﬁcation
case. Forest Policy and Economics 1: 41–52.
Laskey, K.B. and Fischer, G.W. 1987. Estimating utility functions in the presence of response error.
Management Science 33: 965–980.
Leskinen, P. 2001. Statistical methods for measuring preferences. Publications in Social Sciences
48. University of Joensuu. Doctoral thesis.
Leskinen, P., Kangas, A., and Kangas, J. 2004. Rank-based modelling of preferences in multi-
criteria decision making. European Journal of Operational Research 158: 721–733.
Leskinen, P. and Kangas, J. 1998. Analysing uncertainties of interval judgement data in multiple-
criteria evaluation of forest plans. Silva Fennica 32: 363–372.
Leskinen, P. and Kangas, J. 2005a. Multi-criteria natural resource management with preferentially
dependent decision criteria. Journal of Environmental management 77: 244–251.
Leskinen, P. and Kangas, J. 2005b. Rank reversals in multi-criteria decision analysis with statistical
modelling of ratio scale pairwise comparisons. Journal of the Operational Research Society 56:
855–861.
Leskinen, P., Kangas, J., and Pasanen, A-M. 2003. Assessing ecological values with dependent
explanatory variables in multi-criteria forest ecosystem management. Ecological Modelling
170: 1–12.
Leskinen, L.A., Leskinen, P., Kurttila, M., Kangas, J., and Kajanus, M. 2006. Adapting modern
strategic decision support tools in the participatory strategy process – a case study of a forest
research station. Forest Policy and Economics 8: 267–278.
Malczewski, J. 1999. GIS and Multicriteria decision analysis. Wiley, New York, 392 pp.
Mendoza, G.A. and Prabhu, R. 2001. A fuzzy Analytic Hierarchy Process for assessing biodi-
versity conservation. In Schmoldt, D., Kangas, J., Mendoza, G.A., Pesonen, M. (Eds.). The

--- Page 61 ---

52
3 Multi-Criteria Decision Problems
Analytic Hierarchy Process in Natural Resource and Environmental Decision Making. Kluwer,
Dordrecht. Managing Forest Ecosystems 3, pp. 219–235.
Mendoza, G.A. and Sprouse, W. 1989. Multiobjective programming for generating alternatives.
Forest Science 33: 458–468.
Murray, D.M. and von Gadow, K. 1991. Prioritizing mountain catchment areas. Journal of Envi-
ronmental Management 32: 357–366.
Mustajoki, J. and H¨am¨al¨ainen, R. 2005. A preference programming approach to make the even
swaps method even easier. Decision Analysis 2: 110–123.
Mustajoki, J. and H¨am¨al¨ainen, R. 2006. Smart-swaps – decision support for the PrOACT process
with the even swaps method. Manuscript.
Pesonen, M., Ahola, J., Kurttila, M., Kajanus, M., Kangas, J. 2001a. Applying A′WOT to forest in-
dustry investment strategies: case study of a Finnish company in North America. In: Schmoldt,
D., Kangas, J., Mendoza, G.A., and Pesonen, M. (Eds.). The analytic hierarchy process in nat-
ural resource and environmental decision making. Kluwer, Dordrecht, pp. 131–148.
Pesonen, M., Kurttila, M., Kangas, J., Kajanus, M., Heinonen, P. 2001b. Assessing priorities us-
ing A′WOT among resource management strategies at Finnish forest and park service. Forest
Science 47: 534–541.
P¨oyh¨onen, M. and H¨am¨al¨ainen, R.P. 1998. Notes on the weighting biases in value trees. Journal of
Behavioral Decision Making 11: 139–150.
P¨oyh¨onen, M., Vrolijk, H., and H¨am¨al¨ainen, R.P. 2001. Behavioral and procedural consequences
of structural variation in value trees. European Journal of Operational Research 134: 216–227.
Pukkala, T. 2006. Monsu-mets¨asuunnitteluohjelmisto. Versio 5. Ohjelmiston toiminta ja k¨aytt¨o.
Mimeograph, 53 pp.
Pukkala, T. and Kangas J. 1993. A heuristic optimization method for forest planning and decision
making. Scandinavian Journal of Forest Research 8: 560–570.
Pyk¨al¨ainen, J., Kangas, J., and Loikkanen, T. 1999. Interactive decision analysis in participatory
strategic forest planning: experiences from State owned boreal forests. Journal of Forest Eco-
nomics 5: 341–364.
Rauscher, H.M., Lloyd, F.T., Loftis, D.L., and Twery, M.J. 2000. A practical decision-analysis
process for forest ecosystem management. Computers and Electronics in Agriculture 27: 195–
226.
Reynolds, K.M., 2001. Prioritizing salmon habitat restoration with the AHP, SMART, and un-
certain data. In: Schmoldt, D., Kangas, J., Mendoza, G.M., Pesonen, M. (Eds.). The analytic
hierarchy process in natural resources and environmental decision making. Kluwer, Dordrecht,
pp 199–218.
Saaty, T.L. 1977. A scaling method for priorities in hierarchical structures. Journal of Mathematical
Psychology 15: 234–281.
Saaty, T.L. 1980. The Analytic hierarchy process. McGraw-Hill, New York.
Saaty, T.L. 2001. Decision making with dependance and feedback. The analytic network process.
2nd ed. RWS Publications, Pittsburgh.
Salo, A.A. and H¨am¨al¨ainen, R.P. 1992. Preference assessment by imprecise ratio statements. Op-
erations Research 40: 1053–1061.
Schoemaker, P.J. and Waid, C.C. 1982. An experimental comparison of different approaches to
determining weights in additive utility models. Management Science 28: 182–196.
Schmoldt, D., Kangas, J., Mendoza, G.A., Pesonen, M. (Eds.), 2001. The analytic hierarchy
process in natural resource and environmental decision making. Kluwer, Dordrecht.
Stillwell, W.G., Seaver, D.A., Edwards, D. 1981. A comparison of weight approximation tech-
niques in multiattribute utility decision making. Organizational Behavior and Human Perfor-
mance 28: 62–77.
Tell, B. 1976. A comparative study of some multiple-criteria methods. The Economic Research
Institute at the Stockholm School of Economics, 203 pp.
Tell, B. and Wallenius, J. 1979. A survey of multiple-criteria decision methods and applications:
utility theory and mathematical programming. Liiketaloudellinen aikakauskirja 28: 3–22.

--- Page 62 ---

References
53
Vacik, H. and Lexer, M.J., 2001. Application of a spatial decision support system in managing
the protection forests of Vienna for sustained yield of water resources. Forest Ecology and
Management 143: 65–76.
von Winterfeldt, D. and Edwards, W. 1986. Decision analysis and behavioral research. Cambridge
University Press, Cambridge.
Wolfslehner, B., Vacik, H., and Lexer, M.J. 2005. Application of the analytic network process in
multi-criteria analysis of sustainable forest management. Forest Ecology and Management 207:
157–170.

--- Page 63 ---

Chapter 4
Uncertainty in Multi-Criteria Decision Making
4.1 Nature of Uncertainty
Often, word uncertainty has been equated with random variability (Ferson and
Ginzburg 1996). In decision making, the uncertainty is traditionally connected to
the unknown or uncertain future states of nature: the consequences of alternative
actions are not known, which makes choices risky.
Probability theory demands that probabilities should fulﬁl the Kolmogorov ax-
ioms. It means that the probability of each event has to be greater than or equal to
zero (i.e. negative probabilities are not allowed), the probability of the entire set of
events has to be one (i.e. some event in the whole set of events will occur with prob-
ability 1) and that the probability of a union of disjoint events is the sum of their
individual probabilities (e.g. Williams 1991). It also means that the probability of a
union of an event and its negation must add up to one.
Probabilities can be either objective or subjective. Objective probabilities can
be calculated for events that can be repeated inﬁnitely many times; for instance, the
probabilities of obtaining heads or tails when tossing a coin. Subjective probabilities
describe beliefs of persons; for instance, someone may believe that a certain sports
team will win with 0.7 probability. The Bayesian probability theory may be the best
known example of utilising subjective probabilities.
Additivity requirement in probability theory means that if the decision maker has
no idea of the probability of some event, like whether there is life on Mars of not,
both alternatives (there is and there is not) need to be assigned a 0.5 probability. As-
signing so high a probability to either option may seem counterintuitive in the case
of complete ignorance. There exist theories, in which also non-additive subjective
beliefs can be dealt with, for example the possibility theory (Dubois and Prade 1988)
and the evidence theory (Schafer 1976; Klir and Harmanec 1997). These theories
were developed to deal with situations, where the classical or Bayesian probability
theory was deemed too normative. They are argued to be suitable especially in cases
where human opinions, judgement and decisions are involved (Zimmermann 1985;
Dubois and Prade 1988).
55

--- Page 64 ---

56
4 Uncertainty in Multi-Criteria Decision Making
In decision analysis, people may be uncertain about their preferences. People
do not know, for instance, which alternative they prefer with respect to a certain
criterion, or they do not know exactly how much they prefer a certain alternative.
Furthermore, there may be uncertainty concerning the performances of the alterna-
tives with respect to the criteria. One way to reﬂect such uncertainty is to present
the uncertain preferences and/or performances using linguistic scales. For instance,
the criterion values with respect to some characteristics, like the recreational value
of a certain area may be evaluated as “low”, “medium” or “high”. In another occa-
sion, one alternative may be “slightly preferred”, “strongly preferred” or “extremely
preferred” when compared to another alternative.
In decision analysis, all judgments, numerical or linguistic, need to be trans-
formed to numbers in order to make a recommendation. In different decision sup-
port tools, different approaches have been developed to deal with these uncer-
tainties (for a review see Kangas and Kangas 2004). One commonly used ap-
proach for dealing with linguistic uncertainty is to use the fuzzy set approach
(Zimmermann 1985).
4.2 Fuzzy Set Theory
4.2.1 Membership Functions and Fuzzy Numbers
Fuzzy set theory was ﬁrst presented by Zadeh (1965). The basis of the fuzzy set
theory is a membership function µ(x), which describes the degree by which a certain
statement is true (Zimmermann 1985). For example, a statement ‘a tree is defoliated’
can be more or less true. If we had a crisp deﬁnition, like ‘a tree is defoliated if it
has lost at least 50% of its needles or leaves’, the membership function would only
have values 0 and 1, and fuzzy sets would not be needed.
Otherwise, a membership function (Fig. 4.1) for a fuzzy set ˜A could be
µ ˜A(x) =
⎧
⎪
⎨
⎪
⎩
0,
x < 20%
x−20
60−20,
20% ≤x ≤60%
1,
x ≥60%
(4.1)
where x is the percentage of needles lost (in this case), and µ ˜A(x) ∈[0,1]. The mem-
bership function needs not to be linear. Then, the fuzzy set ˜A is deﬁned as
˜A = {(x,µ ˜A(x))|x ∈X }, where X is the set of possible values of x (0–100% in
this case) (e.g. Niskanen 2003).
Fuzzy numbers can also be deﬁned. Fuzzy numbers are such membership func-
tions, which are convex (Chen and Hwang 1992; Cox 1994; Malczewski 1999).
The membership function should be piecewisely continuous, and given four real

--- Page 65 ---

4.2 Fuzzy Set Theory
57
−0.2
0
0.2
0.4
0.6
0.8
1
1.2
0
10
20
30
40
50
60
70
80
90
100
needle loss
membership
Fig. 4.1 Example of a membership function
numbers, a ≤b ≤c ≤d,
µM(x) = 0,
∀x ≤a
µM(x) is increasing in [a, b], decreasing in [c, d]
µM(x) = 1,
x ∈[b,c]
µM(x) = 0,
∀x ≥d
The fuzzy numbers can be, for instance, triangular or trapezoidal in shape (Fig. 4.2).
The triangular and trapezoidal fuzzy numbers are presented based on the numbers
a, b, c, and d above, i.e. fuzzy number M = (a, b, c, d). In triangular form b = c.
These fuzzy numbers can also be presented as so-called L–R fuzzy numbers M′ =
(b, c, (b−a), (d −c)) = (b, c, α,β), i.e. α and β describe the deviation from the
peak values b and c to left and right, respectively (e.g. Chen and Hwang p. 89).
0
0.2
0.4
0.6
0.8
1
1.2
0
0.1
0.2
0.3
0.4
0.5
0.6
0.7
0.8
0.9
1
x
membership
Fig. 4.2 Two examples of fuzzy numbers, triangular and trapezoidal

--- Page 66 ---

58
4 Uncertainty in Multi-Criteria Decision Making
In order to utilize fuzzy numbers, they require arithmetic rules. For instance, the
sum of two trapezoidal fuzzy numbers M and N is (e.g. Chen and Hwang 1992,
p. 93; Mattila 2002)
M +N = (a,b,c,d)+(e, f,g,h) = (a+e,b+ f,c+g,d +h)
(4.2)
and their product is
M ·N = (a,b,c,d)·(e, f,g,h) = (a·e,b· f,c·g,d ·h).
(4.3)
A subtraction of two fuzzy numbers is
M −N = (a,b,c,d)−(e, f,g,h) = (a−h,b−g,c−f,d −e)
(4.4)
and their division is
M/N = (a,b,c,d)/(e, f,g,h) = (a/h,b/g,c/f,d/e).
(4.5)
In products and divisions these formulas apply only if both fuzzy numbers are pos-
itive, i.e. µM(x) = 0,∀x < 0. Otherwise, different formulas need to be applied.
Furthermore, rules based on which the fuzzy numbers can be ranked are needed.
Usually the ﬁrst and foremost method for ranking fuzzy numbers is just to look at
the drawn curves and use intuition (Cheng 1999). If this fails, different rules can be
used. A number of such rules have been presented in the literature (see, e.g. Chen
and Hwang 1992; Chang et al. 2006). Since the fuzzy numbers can have overlapping
areas, their ranking is not self-evident, and different rules may give different answers
(Fig. 4.3). Moreover, one rule may not produce a clear ranking, and therefore several
rules may be needed.
Utility
Membership value
Utility
Membership value
Utility
Membership value
Utility
Membership value
Fig. 4.3 In the upper left ﬁgure, ranking of the fuzzy numbers is obvious, but in the later three
examples it is not

--- Page 67 ---

4.2 Fuzzy Set Theory
59
-0.1
0.1
0.3
0.5
0.7
0.9
1.1
0
0.1
0.2
0.3
0.4
0.5
0.6
0.7
0.8
0.9
1
Utility
Membership value
M2
M1
Fig. 4.4 Ranking of fuzzy numbers M1 and M2 with α-cut level 0.7
One possible solution is to rank the numbers based on so-called α-cut (Adamo
1980; Chen and Hwang 1992). It means that the decision maker deﬁnes an accep-
tance threshold α for the fuzzy number. Then, a line is drawn on the ﬁgure on
that level of membership value (Fig. 4.4), and the fuzzy number having greater
maximum value at that level is deemed better. In Fig. 4.4, number M2 is bet-
ter at the α-cut level 0.7. If the α-cut level were smaller than 0.5, e.g. 0, M1
would be deemed better. Thus, this rule may produce controversial results in some
cases.
Many rules for ranking fuzzy numbers are based on so-called defuzziﬁcation, i.e.
calculating crisp measures from the fuzzy numbers. Many methods have been pro-
posed for defuzziﬁcation, but the most commonly used methods are (e.g.
Hellendoorn and Thomas 1993; Yager 1996; Rondeau et al. 1997)
mean of maximum (MOM)
m1 = b+c
2
(4.6)
and center of area/gravity (COA)
m2 =
d
a
xµ(x)dx
d
a
µ(x)dx
.
(4.7)
The MOM criterion can be criticized because it does not take into account the diver-
gence of the fuzzy number. The COA criterion is better in the sense that it accounts
for all the possible solutions, but it does not necessarily choose a solution having the
maximum membership value (Rondeau et al. 1997). They produce similar results,
however, in the case of symmetric fuzzy numbers. The difference is notable only if
the fuzzy numbers are more complicated.
It may be that neither of these criteria can produce a ranking for two fuzzy num-
bers. Then, the divergence or spread (d −a) of the fuzzy numbers can be used in

--- Page 68 ---

60
4 Uncertainty in Multi-Criteria Decision Making
ranking. From two fuzzy numbers otherwise similar, the fuzzy number with smaller
spread is considered better.
Example 4.1. The MOM criterion in the fuzzy numbers of Fig. 4.4 are 0.4 for M1
and 0.5 for M2. Thus, based on MOM, M2 is easily seen to be better. The COA
criterion for M2 is calculated as
0.4

0.3
x x−0.3
0.1 dx+
0.7

0.4
x 0.7−x
0.3 dx
0.4

0.3
x−0.3
0.1 dx+
0.7

0.4
0.7−x
0.3 dx
= 0.018+0.075
0.05+0.15
= 0.093
0.2
= 0.465
and for M1 as
0.5

0.2
x x−0.2
0.3 dx+
0.6

0.5
x 0.6−x
0.1 dx
0.5

0.2
x−0.2
0.3 dx+
0.6

0.5
0.6−x
0.1 dx
= 0.059+0.026
0.15+0.05
= 0.085
0.2
= 0.425
which would also give M2 as better.
4.2.2 Fuzzy Goals in Decision Making
In decision making, the membership function may describe degree of satisfaction
with respect to some goal (or some constraint). It can be given, for instance, with a
function
µ ˜A(x) = µi j(x) =
⎧
⎪
⎨
⎪
⎩
0,
x < a
x−a
b−a,
a < x < b
1,
x ≥b
(4.8)
where a is the lower border and b is the upper border for the satisfaction, i.e. the
satisfaction is zero when x < a and it reaches its maximum when x ≥b. The borders
a and b, deﬁning the membership function, can be given by the decision maker.
For decision making, the different goals need ﬁrst to be aggregated describing the
overall desirability of each alternative, and second, the alternatives need to be ranked
according to these aggregated values (Bellman and Zadeh 1970; Zimmermann
1985). In a traditional way of fuzzy decision making (e.g. Bellman and Zadeh 1970;
Malczewski 1999; Ducey and Larson 1999; Kangas et al. 2006b), a logical ‘and’
operator would be used to make a combination. An intersection of two fuzzy sets,
˜A∩˜B, is then deﬁned as a minimum of their membership functions as
µ ˜A(x)∧µ ˜B(x) = Min(µ ˜A(x),µ ˜B(x))
(4.9)
Then, the recommendation would be the alternative, for which the minimum sat-
isfaction value is the largest (Bellman and Zadeh 1970). However, this procedure

--- Page 69 ---

4.2 Fuzzy Set Theory
61
allows for no compensation or tradeoffs between the criteria in the sense of utility
theory (e.g. Dubois et al. 1996). A bad degree of satisfaction with respect to one
criterion cannot be compensated by a good satisfaction level on another. In fact, it
models soft constraints more than soft goals (Dubois et al. 1994).
The ‘min’ aggregation is one example of the so-called t-norms, which all are non-
compensatory in nature (e.g. Eastman and Jiang 1996; Choi and Oh 2000). Another
example of t-norms is the product aggregation, ˜A· ˜B, which is simply the product of
the membership functions µ ˜A(x)· µ ˜B(x) (Zimmermann 1985, p. 29).
Another possibility for aggregating is the logical ‘or’ procedure (from the family
of t-conorms). In this procedure, the union of two sets is described with the maxi-
mum of their membership functions as
µ ˜A(x)∨µ ˜B(x) = Max(µ ˜A(x),µ ˜B(x)).
(4.10)
This approach, on the other hand, could be too liberally compensating (e.g. Eastman
and Jiang 1996; Malczewski 1999). When at least one of the criteria reaches the
maximum level 1, the aggregation also gets value 1. Another aggregation method of
the same family is the algebraic sum ˜A+ ˜B with aggregation
µ ˜A(x)+ µ ˜B(x) = 1−(1−µ ˜A(x))(1−µ ˜B(x)).
(4.11)
Unfortunately, neither ‘and’ nor ‘or’ type aggregations behave in a way needed
in decision analysis. Therefore, aggregations that are in the middle of these ex-
tremes have been searched for. One group of these is formed by different mean
operators, such as arithmetic average. In ordered weighted average (OWA), the
membership functions are weighted based on their ranks (Yager 1988). For in-
stance, largest membership function value gets the largest weight and smallest
the smallest weight and so on. This is used to deﬁne the degree of compensation
among the criteria, the so-called ‘andness’ and ‘orness’ of the aggregation (see,
e.g. Eastman and Jiang 1996; Despic and Simonovich 2000). The larger weight is
given to the largest membership function value, the greater the ‘orness’, and the
larger weight is given to the smallest membership function value, the greater the
‘andness’.
Another important aggregation method is the γ-norm (Zimmermann and Zysno
1980; Zimmermann 1985), in which the algebraic sum and product aggregation
methods are combined. The aggregation is
µ ˜θ =
∏µi
1−γ 
1−∏(1−µi)
γ
(4.12)
where γ is a parameter [0, 1] deﬁned by the decision maker deﬁning the degree of
‘andness’ and ‘orness’. The larger this parameter, the greater the degree of ‘and-
ness’ is.
None of these aggregation methods acknowledges the possible differences in the
importances of the criteria, which is one of the basic concepts in decision analy-
sis and Multi-Attribute Utility Theory (MAUT). However, weighting the criteria
is quite possible also in fuzzy decision analysis. For instance, Bellman and Zadeh

--- Page 70 ---

62
4 Uncertainty in Multi-Criteria Decision Making
Table 4.1 Data from example 3.5
Alternative
Net income 1,000AC
Stumpage value (million
euros)
Scenic beauty
(index)
NAT
0
0.71
5.5
SCEN
79.6
0.28
5.7
NORM
38
0.6
5.4
GAME
33
0.61
5.5
MREG
102.3
0.51
5.2
INC
191.7
0.13
4.9
(1970) proposed a weighted mean aggregation method
µθ = ∑αiµi
(4.13)
with weights similar to traditional utility functions and scaling to one as ∑αi = 1.
In addition to this mean operator, weights can be applied also in other aggregation
methods. For instance, Yager (1978) proposed using exponential weight in ‘min’
operator, so that important criteria would have weight greater than zero, making the
membership grade smaller, and less important criteria would have weights smaller
that zero, making the membership grade larger. Then, the minimum of membership
grades is more likely to be deﬁned by the important objectives. The γ-norm can also
be weighted, giving (e.g. Despic and Simonovich 2000)
µ ˜θ =
∏µαi
i
1−γ 
1−∏(1−µi)αiγ
(4.14)
In the following examples, the weights have been assumed to be non-fuzzy.
Example 4.2. The data used in the example is from example 3.5. (Table 4.1). It is
assumed, that for each criterion the full satisfaction is obtained, if the criterion value
is at least 95% of the maximum value (parameter b in Eq. 4.8). The lower border for
satisfaction (parameter a in Eq. 4.8) was set to 20% (38.34), 50% (0.355) and 80%
(4.56) of the maximum criterion value for net incomes, stumpage value and scenic
beauty, respectively. Then, the degrees of satisfaction for each alternative and each
criterion are in Table 4.2. With different aggregation rules, the results are presented
in Table 4.3.
Table 4.2 Degrees of satisfaction
Alternative
Net income 1,000AC
Stumpage value
Scenic beauty
NAT
0
1
1
SCEN
0.29
0
1
NORM
0
0.77
0.98
GAME
0
0.8
1
MREG
0.44
0.49
0.75
INC
1
0
0.4

--- Page 71 ---

4.2 Fuzzy Set Theory
63
Table 4.3 Results with different aggregation rules
Mean
γ-norm
Alternative
Min
Product
Max
Sum
Mean
weighted
γ = 0.5
NAT
0
0.000
1
1
0.667
0.400
1.000
SCEN
0
0.000
1
1
0.430
0.374
1.000
NORM
0
0.000
0.98
1
0.583
0.350
0.998
GAME
0
0.000
1
1
0.600
0.360
1.000
MREG
0.44
0.162
0.75
0.93
0.560
0.512
1.366
INC
0
0.000
1
1
0.467
0.680
1.000
The mean rule selected the NAT alternative. In example 3.5, incomes were
assumed to be the most important criterion, but when weights were not used,
its bad degree could be compensated by the good degrees of two other crite-
ria. If similar weights were used also in this example, namely incomes 0.6, and
stumpage value and scenic beauty weight 0.2 each, INC would be the choice,
when the original choice was MREG. This is because the satisfaction level of
net incomes is quite low for alternatives other than INC. It means that the de-
ﬁned satisfaction level also emphasises the importance of the most important cri-
terion. The t-conorms Max and Sum could not select one best alternative. The
non-compensative t-norms ‘Min’ and product selected clearly a compromise value,
MREG.
Example 4.3. The same problem was then solved using the OWA analysis. For this,
the satisfaction levels were ordered from largest to smallest. Weight 0.1 was then
given to the largest value, 0.3 to the middle one, and 0.6 to the smallest value.
It means that the ‘andness’ level in this analysis is great, i.e. the minimum levels
of satisfaction are emphasised in the analysis. Then, again, MREG is the selected
alternative, as it is the only alternative having satisfaction level greater than zero for
all criteria (Table 4.4).
When the degree of satisfaction is expressed as one number, it can be argued
that the information is no fuzzier than in classical MCDM methods (Hannan 1983).
Only the form of scaling the original scale to utility (or satisfaction) scale is dif-
ferent. Otherwise, the satisfaction levels could as well be interpreted as sub-utility
function values.
Table 4.4 Results with OWA aggregation
Alternative
Largest
Middle
Smallest
OWA
NAT
1
1
0
0.400
SCEN
1
0.29
0
0.187
NORM
0.98
0.77
0
0.329
GAME
1
0.8
0
0.340
MREG
0.75
0.49
0.44
0.486
INC
1
0.4
0
0.220

--- Page 72 ---

64
4 Uncertainty in Multi-Criteria Decision Making
Table 4.5 The example 3.5 with linguistic performance expressions
Alternative
Net income
Stumpage value
Scenic beauty
Importance
High
Moderate
Low
NAT
VL
VH
M
SCEN
M
L
H
NORM
L
H
M
GAME
L
H
M
MREG
H
M
L
INC
VH
VL
VL
Table 4.6 Performance values as fuzzy numbers
Criteria values
VL
(0.05, 0.2, 0.2, 0.35)
L
(0.2, 0.35, 0.35, 0.5)
M
(0.35, 0.5, 0.5, 0.65)
H
(0.5, 0.65, 0.65, 0.8)
VH
(0.65, 0.8, 0.8, 0.95)
Table 4.7 Importances as fuzzy numbers
Importances
Low
(0.1, 0.25, 0.25, 0.4)
Moderate
(0.35, 0.5, 0.5, 0.65)
High
(0.6, 0.75, 0.75, 0.9)
Table 4.8 Fuzzy criteria numbers multiplied by criterion weights
Alternative
Net incomes
Stumpage value
Scenic beauty
NAT
0.03, 0.15, 0.15, 0.32
0.23, 0.40,0.40, 0.62
0.04, 0.13, 0.13, 0.26
SCEN
0.21, 0.38, 0.38, 0.59
0.07, 0.18, 0.18, 0.33
0.05. 0.16, 0.16, 0.32
NORM
0.12, 0.26, 0.26, 0.45
0.18, 0.33, 0.33, 0.52
0.04, 0.13, 0.13, 0.26
GAME
0.12, 0.26, 0.26, 0.45
0.18, 0.33, 0.33, 0.52
0.04, 0.13, 0.13, 0.26
MREG
0.3, 0.49, 0.49, 0.72
0.12, 0.25, 0.25, 0.42
0.02, 0.09, 0.09, 0.20
INC
0.39, 0.6, 0.6, 0.86
0.02, 0.10, 0.10, 0.23
0.01, 0.05, 0.05, 0.14
Table 4.9 Overall fuzzy utility
Alternative
Overall utility
m1
NAT
0.29, 0.68, 0.68, 1.19
0.68
SCEN
0.33, 0.71, 0.71, 1.23
0.71
NORM
0.33, 0.71, 0.71, 1.23
0.71
GAME
0.33, 0.71, 0.71, 1.23
0.71
MREG
0.44, 0.83, 0.83, 1.34
0.83
INC
0.41, 0.75, 0.75,1.22
0.75

--- Page 73 ---

4.3 Possibility Theory in Decision Making
65
4.2.3 Fuzzy Additive Weighting
Fuzzy decision analysis can also be based on linguistic criterion values and fuzzy
weights. For such a situation, fuzzy additive weighting method has been proposed
(Bonissone 1982; Chen and Hwang 1992; Malczewski 1999, p. 230; Kangas et al.
2007). The fuzzy utility is of form
Fi =
m
∑
j=1
a−
j c−
i j
(4.15)
where a−denote the fuzzy weight and c−the fuzzy criterion value. In this method,
both the weights and the criteria can be linguistic variables, i.e. variables that are
evaluated with vague terms, which are then presented using fuzzy numbers. For
instance, the criteria could be “slightly important” or “highly important” and one
criterion, for instance the risks caused to environment, could be presented with “low
risk”, “medium risk” and “high risk”. Many other procedures have also been pre-
sented for utilising fuzzy numbers in decision analysis, but this method is the sim-
plest.
Example 4.4. In the data of the previous example, the criteria are assumed to be lin-
guistic variables having ﬁve levels, very low, low, medium, high, and very high with
respect to each criterion (Table 4.5). The criteria, on the other hand, were having
importance evaluated using scale low, moderate, and high. Then, if the linguistic
variables were given values as in Table 4.6 and the importances as in Table 4.7,
the fuzzy criteria values times the fuzzy importance weights can be calculated
as fuzzy numbers (Table 4.8). The fuzzy numbers representing the overall utility
are obtained as a fuzzy number calculated from the sum of these fuzzy numbers
(Table 4.9). The recommended alternative is selected based on the mean of maxi-
mum m1. In this case, the selected alternative is the MREG alternative. The resulting
fuzzy numbers are also presented in the Fig. 4.5.
4.3 Possibility Theory in Decision Making
Fuzzy sets form the basis also for the possibility theory. The possibility theory was
ﬁrst presented by Zadeh (1978). It is also related to the evidence theory and to
degrees of belief and plausibility. Possibility theory utilises two measures attached
to one event, namely ‘necessity measure’ and ‘possibility measure’. Both of them
are membership functions, which can take values between zero and one. If an event
is completely possible, then its possibility is 1. If it is completely impossible, then
its possibility is 0. Similarly, if an event is certain, then its necessity measure is 1, if
it is not at all certain, then its necessity measure is 0.
These two measures are related to each others. If an event A is certain, i.e. com-
pletely necessary (N(A) = 1), then its complement event is impossible, and its
possibility is Π( ¯A) = 0. Similarly, if an event is completely possible (Π(A) = 1)

--- Page 74 ---

66
4 Uncertainty in Multi-Criteria Decision Making
−0.2
0
0.2
0.4
0.6
0.8
1
1.2
0
0.2
0.4
0.6
0.8
1
1.2
1.4
1.6
Utility
Membership value
NAT
SCEN
NORM
GAME
MREG
INC
Fig. 4.5 The fuzzy numbers that describe the membership in relation to utility values
then its complement event’s necessity measure is zero (N( ¯A) = 0). Generally,
N(A) = 1 −Π( ¯A). In all cases, an event’s possibility measure needs to be larger
than its necessity measure.
For example, if an expert thinks it is absolutely sure that abundance of game
birds will decrease in the future, then the possibility of increasing abundance is
zero. Similarly, if decreasing abundance is completely possible, then the necessity of
increasing abundance is zero. However, also the possibility of increasing abundance
in this situation may well be larger than zero.
Unlike in probability theory, the sum of necessity measure or possibility measure
of an event and its complement needs not equal one, i.e.

N(A)+N( ¯A) ≤1
Π(A)+Π( ¯A) ≥1
(4.16)
However, if an event is at least a bit certain N(A) > 0, then it has to be completely
possible, and if it is not at all certain N(A) = 0, then it can only be relatively possible.
Therefore, to characterize uncertainty of an event A, both these measures are
needed. Necessity degree describes the indications supporting the event, and one
minus the possibility degree describes the indications weighting against it (i.e. its
complement event’s necessity) (Dubois and Prade 1988).
The classical decision rules, such as Wald criterion, can be redeﬁned for a case
of qualitative expressions of uncertainty (Dubois et al. 2001). For this purpose, the
possibilities π(ω) of the states of nature ω and the utilities u(x) = u(d(ω)) from
consequence x of decision d in state ω (normalised to range [0, 1]) need to be
combined as
v∗(d) = inf
ω∈Ωmax(n(π(ω)),u(ω))
(4.17)
where n is an order-reversing mapping from possibility to utility scale. This order re-
versing mapping n can be, for instance, the necessity of an opposite event, 1−π(ω).

--- Page 75 ---

4.3 Possibility Theory in Decision Making
67
Thus, utility value of any decision is compared to the necessity of not achieving it,
and the larger of these two values is a decisive characteristic for that decision. For
instance, if the possibility of the considered state of nature (e.g. 0.4) is smaller than
the utility (e.g. 0.5), the order-reversed value 1 −π(ω) is larger (0.6). In this case,
the possibility of achieving the utility is so low that it is considered more important
in the decision than the utility. Thus, if the possibilities are low compared to util-
ity, decisions are based on the possibility rather than utility. Similarly, if the event’s
possibility is high compared to the utility, then the decision is based on utility rather
than possibility.
The ﬁnal rating for each alternative is the inﬁnum (the lower bound) among all
the possible states of nature. Then, a decision is rated low if there is a highly pos-
sible consequence that has low utility value (Dubois et al. 2001). In contrast to
typical Maximin criterion, highly unlikely unwanted consequences are neglected.
This decision rule expresses an aversion for a lack of information. An impor-
tant assumption in this rule is the assumption of commensurability of the utili-
ties and the degrees of certainty. Also the counterpart to usual Maximax-criterion
can be deﬁned using order-preserving mapping m instead of n (Dubois et al.
2001).
Example 4.5. Assume a case with two possible states of nature, ω1 “the prices will
increase in future” and ω2 “the prices will decrease in the future” and two possible
decisions, namely d1 “sell now” and d2 “sell later”. The utilities produced by these
two options in the two states are presented in Table 4.10. If possibility of the state ω1
were 0.6, then necessity of state ω2 would be 0.4, and if possibility of state ω2 were
1.0, necessity of state ω1 would be 0.0. Thus, the possibility of decreasing prices as
well as the necessity of it is larger. Then,
v∗(d1) = min(max(0.4,0.6),max(0.0,1.0)) = min(0.6,1.0) = 0.6
v∗(d2) = min(max(0.4,0.8),max(0.0,0.2)) = min(0.8,0.2) = 0.2
and we would choose action one, to sell now. As the order-reversing mapping (ne-
cessity of the opposite event) was used, the resulting strategy is for a risk-averse
person. The same decision would have resulted also from classical Maximin cri-
terion: the utility of decision 1 in the worst case is higher. In this case, the ne-
cessities of the opposite events were so low that they were not decisive in the
analysis.
Table 4.10 The data for possibility theory example
ω1
ω2
u(d1)
0.6
1.0
u(d2)
0.8
0.2
π(ω)
0.6
1.0
1−π(ω)
0.4
0.0

--- Page 76 ---

68
4 Uncertainty in Multi-Criteria Decision Making
4.4 Evidence Theory
The evidence theory was ﬁrst developed by Dempster in the1960s (1967a, b). His
work was later extended and reﬁned by Schafer in the 1970s (Schafer 1976). There-
fore, this theory is also called the Dempster–Schafer theory (Klir and Harmanec
1997). The theory also deals with subjective beliefs.
In the evidence theory, a number between zero and one is used to describe degree
of support a certain source of evidence provides for a certain proposition, i.e. the
degree of belief (Schafer 1976). This is called a belief function (Bel). However, the
degrees of belief are not probabilities. For example, they do not necessarily add up
to one. It is possible to give low degree of support both to a proposition (e.g. price of
timber will increase) and its negation (price of timber will decrease). This situation
represents ignorance about the subject issue.
If m(A) is deﬁned as the basic probability assignment of a set A in T, a set of all
possible outcomes, and if it is deﬁned that
m(Ø) = 0
∑
A⊂T
m(A) = 1
(4.18)
where m(A) measures the belief assigned exactly to A, total belief assigned to A is
deﬁned as a sum of beliefs assigned to subsets of A as (e.g. Ducey 2001)
Bel(A) = ∑
B⊂A
m(B)
(4.19)
To fully describe the beliefs concerning proposition A, doubt concerning it also
needs to be known. The degree of doubt, Dou(A), is deﬁned as the degree of belief
to the negation of A, Bel( ¯A). Since Dou(A) and Bel(A) need not add up to one,
Pl(A) = 1−Dou(A), the so-called upper probability of proposition A, is larger than
or equal to Bel(A). It describes plausibility of A. The plausibility can also be deﬁned
as the total probability assigned to outcomes that do not exclude A as (e.g. Ducey
2001)
Pl(A) = ∑
B∩A̸=Ø
m(B)
(4.20)
The difference between the belief and the plausibility of a set A describes the igno-
rance about the issue (Schafer 1976).
Using a Bayesian decision rule (e.g. Ducey 2001), decision making is based on
a number of decision alternatives di ∈D, and a number of possible states of nature
ωj ∈Ω. The value of a pair (di,ωj) to a decision maker is expressed as a loss
function L(di,ωj). Uncertainty concerning the states of nature is expressed as a
probability distribution for ω. Since the decisions may affect the probabilities, a
conditional probability distribution p(ωj|di) is used (e.g. Ducey 2001). The decision
that minimizes the expected loss
L(P)i = ∑
j
p(ωj|di)L(ωi,s j)
(4.21)
given the observed data is selected.

--- Page 77 ---

4.4 Evidence Theory
69
The Bayesian decision rules can be extended to the context of the evidence the-
ory. For example, Dempster and Kong (1987) have suggested a so-called mini-upper
decision criterion. Assume the probability of the states of nature ωj given the deci-
sion di can be deﬁned as any p satisfying
Bel(ωj | di) ≤p(ωj | di) ≤Pl(ωj | di)
∑
j
p(ωj | di) = 1
(4.22)
This set is called Pbel. Then, the upper expected loss would be
L∗
i = supL(P)i
P∈Pbel
(4.23)
That is the greatest loss that is possible given the plausible probability range. The
mini-upper decision rule then chooses the decision that minimizes the upper ex-
pected loss (Dempster and Kong 1987; Ducey 2001). This rule is similar to the
classical Minimax rule, which minimizes the maximum loss, and it converges to the
Bayesian decision rule, when Pbel becomes more precise (Ducey 2001; Caselton and
Luo 1992).
Example 4.6. Assume a planting decision to a site with a risk of disease caused
by snow blight. There are two alternatives, to plant pine or spruce. If no damages
occur, planting pine is more proﬁtable. If damages occur, planting spruce is more
proﬁtable. There are two possible states of nature (1 = damages occur, 2 = damages
do not occur), and two possible decisions (1 = pine and 2 = spruce), and the losses
obtained from each decision are presented in the Table 4.11. The losses are negative,
i.e. the utilities are positive. The probability of damage occurring is assumed to be
0.1 < pdamage < 0.7.
In this case, the upper expected loss is the loss occurring using the greatest pos-
sible probability for damages
L∗(d1) = 0.7·−200+0.3·−600 = −320
L∗(d2) = 0.7·−400+0.3·−450 = −415
and spruce should be planted. However, if the plausibility of snow blight damage
were 0.4, then the upper expected loss would be
L∗(d1) = 0.4·−200+0.6·−600 = −440
L∗(d2) = 0.4·−400+0.6·−450 = −430
Table 4.11 The data for evidence theory example
ω1 damages
ω2 damages do
occur
not occur
L(d1) pine
−200
−600
L(d2) spruce
−400
−450

--- Page 78 ---

70
4 Uncertainty in Multi-Criteria Decision Making
−600
−500
−400
−300
−200
−100
0
0.1
0.2
0.3
0.4
0.5
0.6
0.7
Probability of damage
Expected loss
Pine
Spruce
Fig. 4.6 The expected loss as a function of damage probability
and pine should be planted. The dependence of the loss on the probability is pre-
sented in Fig. 4.6.
4.5 Outranking Methods
4.5.1 Outline
Outranking methods serve as one alternative for approaching complex choice prob-
lems with multiple criteria (e.g. Bouyssou et al. 2001). Outranking indicates the de-
gree of dominance of one alternative over another (e.g. Rogers and Bruen 1998b).
The outranking methods enable the utilisation of incomplete value information
and, for example, judgments on ordinal measurement scale (e.g. Rogers and Bruen
1998b). They provide the (partial) preference ranking of the alternatives, not a car-
dinal measure of the preference relations.
In outranking methods, strong assumptions concerning the “true” preference
structure of the decision maker are avoided. It is not necessary to assume that a
utility function exists, or that it can be described with some certain function form.
The question is, whether there is enough information to state that one alternative is
at least as good as another. The outranking approach, consequently, concentrates on
comparing the alternatives in a pairwise manner.
In each case, the problem is formulated with a set of distinct alternatives ai, i =
1,..., n and a set of decision criteria gj, j = 1, ..., p so that gj(ai) represents the
performance of alternative i with respect to criteria j. These criteria may be ordi-
nal or even descriptive, on the contrary to most decision-aid methods. The decision
problem is assumed not to be hierarchical like in AHP, for example. This, how-
ever, is not a problem since all hierarchical problems can also be presented as “ﬂat”
ones, i.e. use only the lowest level criteria. Thus, similar decision problems can be

--- Page 79 ---

4.5 Outranking Methods
71
analysed using either AHP or outranking, the hierarchical presentation in the former
serves as a tool for designing the problem.
The outranking methods have been used, for example, for choosing the solid
waste management system (Hokkanen and Salminen 1997a, c), for locating the
waste treatment facility (Hokkanen and Salminen 1997b), for nuclear waste man-
agement (Briggs et al. 1990), for irrigation system evaluation (Raju and Pillai 1999)
and other Environmental Impact Analysis (EIA) projects. In forestry, outranking has
been tested in a few cases (e.g. Kangas et al. 2001a, b).
The families of ELECTRE and PROMETHEE are the most widely known
outranking methods. The ELECTRE methods have originally been developed by
Bernard Roy (1968). Several versions of the ELECTRE method have been presented
for different situations: ELECTRE I and IS are designed for selection problems,
ELECTRE TRI for sorting problems and ELECTRE II, III and IV for ranking prob-
lems (see Roy 1991; Yu 1992; Rogers et al. 2000). In this book, only the ELECTRE
III method of this family is presented. The PROMETHEE methods were developed
in the 1980s (see Brans et al. 1986).
In PROMETHEE I and II and ELECTRE III outranking methods, the criteria
are treated as so-called pseudo-criteria (Brans et al. 1986; see, e.g. Hokkanen and
Salminen 1997c). This means that a threshold model is applied to the original crite-
ria value. If the criteria values are sufﬁciently close to each other, they are indifferent
to the decision maker, and if the difference between the criteria values is sufﬁciently
large, there is no doubt which alternative is better according to that criterion. In be-
tween, there is an area, in which the decision maker is assumed to hesitate between
indifference and strict preference.
The uncertainty is dealt using pseudo-criteria (e.g. Vincke 1992). This means
that two thresholds, namely indifference and preference thresholds, are deﬁned. The
indifference threshold for criterion j, qj, is a difference beneath which the decision
maker is indifferent between two management alternatives ak and al, i.e.
akIal ⇔
gj(ak)−gj(al)
 ≤qj,
(4.24)
where I denotes indifference and gj(ak) −gj(al) denotes the difference between
alternatives k and l with respect to criterion j. The preference threshold for criterion
j, pj, is a difference above which the decision maker strongly prefers management
alternative ak over al, i.e.
akPal ⇔gj(ak)−gj(al) > pj,
(4.25)
where P denotes preference. Between these two thresholds there is a zone where the
decision maker hesitates between indifference and strong preference, i.e. the zone
of weak preference.
akQal ⇔qj < gj(ak)−gj(al) ≤pj.
(4.26)
However, the zone of weak preference does not make sense if the criteria are ordinal
or descriptive. In such a case, the preference and indifference thresholds could be

--- Page 80 ---

72
4 Uncertainty in Multi-Criteria Decision Making
set to zero. This means that if one alternative is considered better in ordinal scale,
this alternative is strictly preferred.
The indifference threshold can be deﬁned either with respect to the uncertainty
of the criteria values or as a threshold at which the differences become perceptible
to decision makers (Rogers and Bruen 1998b). Maystre et al. (1994) deﬁned the
indifference threshold as the minimum margin of uncertainty and the preference
threshold as the maximum margin of uncertainty with respect to different criteria.
Thus, the preference threshold implies that there is no doubt that a certain alternative
is better than the other. However, there are no right values for the thresholds or a
right way to deﬁne them.
4.5.2 PROMETHEE Method
In PROMETHEE I and II, the outranking degree Π(ak, al), describing the credibil-
ity of the outranking relation that ‘alternative ak is better than alternative a′, for each
pair of alternatives (ak, al) is calculated as
Π(ak,al) =
p
∑
j=1
wjFj(ak,al),
(4.27)
where Fj(ak, al) is the preference function and wj are the weights of the crite-
ria. In (4.27), it is assumed that the weights are scaled to add up to one. In out-
ranking, the weights are not interpreted as importances of the criteria in the same
sense as in MAUT or AHP, but more like votes given to different criteria. The
weights can be obtained, for example, by giving scores from 1 to 7 to the criteria,
with 1 given to the least important criteria (Hokkanen and Salminen 1994). How-
ever, the weights could also be obtained from pairwise comparisons as in the AHP
method.
In PROMETHEE outranking method, the threshold values are assumed to be
constant (see Salminen et al. 1998). The value of preference function Fj(ak, al)
for a pair of alternatives ak and al with respect to criteria j are calculated using
thresholds pj and qj as
Fj(ak,al) =
⎧
⎪
⎪
⎪
⎪
⎨
⎪
⎪
⎪
⎪
⎩
1, if gj(ak)−gj(al) ≥pj
0, if gj(ak)−gj(al) ≤qj
(gj(ak)−gj(al))−qj
pj −qj
,
otherwise
.
(4.28)
This formula can be interpreted to give a fuzzy degree of preference of one alterna-
tive over another.
In this formula, the linear threshold function is utilised (Fig. 4.7). Six differ-
ent forms of the threshold function can be applied. Three of them can be derived

--- Page 81 ---

4.5 Outranking Methods
73
1
F(d)
d
−q
−p
q
p
F(d)
d
1
−p
p
1
F(d)
d
q
−q
1
F(d)
d
1/2
p
−p
q
F(d)
1
d
δ
−δ
Fig. 4.7 The preference F as a function of difference (d = gj(ak) −gj(al)) between alternatives
with respect to some criterion with different options
from the linear threshold function, by setting q = 0, q = p, or q = p = 0. The
two other forms are the step function and the non-linear or Gaussian function
(Fig. 4.7, see Brans et al. 1986). These, however, have a slightly different inter-
pretation than the others. The criteria and threshold values together constitute the
pseudo-criteria.
The outranking degrees Π are used to calculate for each alternative the leaving
ﬂow
Φ+(ak) = ∑
l̸=k
Π(ak,al)/(n−1),
(4.29)
the entering ﬂow
Φ−(ak) = ∑
l̸=k
Π(al,ak)/(n−1),
(4.30)
and the net ﬂow
Φ(ak) = Φ+(ak)−Φ−(ak).
(4.31)

--- Page 82 ---

74
4 Uncertainty in Multi-Criteria Decision Making
Table 4.12 Weights and threshold values
w
q
p
Net incomes (1,000AC)
0.6
5
20
Future timber value
0.2
0.05
0.2
(million eurosAC)
Scenic value (index)
0.2
0.1
0.2
In PROMETHEE I the alternatives are ranked based on both the leaving and
entering ﬂow. These rankings are then used to calculate a partial preorder, where
certain alternatives may remain incomparable. If one alternative is better than
another with respect to both negative and positive ﬂow, then it is determined
better. In a case where one alternative is better according to positive ﬂow and
another with respect to negative ﬂow, these two alternatives are interpreted as
incomparable.
In PROMETHEE II the net ﬂow is used, which leads to complete ranking
(Hokkanen and Salminen 1997a, b). This ranking method utilises the ‘cardinal’
properties of the valuations, while PROMETHEE I utilised the ‘ordinal’ properties
(Bouyssou and Perny 1992; Bouyssou 1992).
Example 4.7. The data is the same as in example 3.5 (see also Table 4.1). The val-
ues used for the weights, and preference and indifference thresholds are given in
Table 4.12. It means that alternatives differing less than by 5,000AC are considered
as indifferent, but 20,000AC means a clear preference difference. Then, a matrix con-
taining the preference function (F) values for each pair of alternatives k and j, for
the ﬁrst criterion, namely the net incomes is calculated (Table 4.13a). In this case,
the differences between the alternatives were clear so that INC is clearly better than
any other alternative, and MREG is better than all the others except INC. Alterna-
tives NORM and GAME are indifferent.
The same analysis is then done with respect to the future timber value (4.13b)
and with respect to scenic beauty (4.13c). With respect to scenic beauty, the dif-
ferences are again clear, but for stumpage value some of the differences are in
the weak preference zone. For instance, SCEN is weakly preferred to INC. In
that case, d = 0.28 −0.13, giving F = (0.28 −0.13 −0.05)/(0.2 −0.05) = 0.67.
The credibility matrix Π is calculated as their weighted average (Table 4.14).
For instance, credibility for statement that INC outranks NAT is calculated with
0.6 · 1.0 + 0.2 · 0.0 + 0.2 · 0.0 = 0.600. Finally, the positive and negative ﬂows are
calculated from the credibility matrix (Table 4.15). The alternatives are ranked here
both according to Net ﬂows, Negative ﬂows and Positive ﬂows into decreasing or-
der. MREG alternative is best with respect to net ﬂow. Since INC and MREG can-
not be separated based on the positive ﬂow, their rank is indetermined according
to PROMETHEE I. In this case, the ranking is fairly clear, but this is not the case
generally.

--- Page 83 ---

4.5 Outranking Methods
75
Table 4.13 Preference function values
NAT
SCEN
NORM
GAME
MREG
INC
(a) with respect to net incomes
NAT
0.0
0.0
0.0
0.0
0.0
0.0
SCEN
1.0
0.0
1.0
1.0
0.0
0.0
NORM
1.0
0.0
0.0
0.0
0.0
0.0
GAME
1.0
0.0
0.0
0.0
0.0
0.0
MREG
1.0
1.0
1.0
1.0
0.0
0.0
INC
1.0
1.0
1.0
1.0
1.0
0.0
(b) with respect to future timber value
NAT
0.0
1.0
0.39
0.33
0.99
1.0
SCEN
0.0
0.0
0.0
0.0
0.0
0.67
NORM
0.0
1.0
0.0
0.0
0.27
1.0
GAME
0.0
1.0
0.0
0.0
0.33
1.0
MREG
0.0
1.0
0.0
0.0
0.0
1.0
INC
0.0
0.0
0.0
0.0
0.0
0.0
(c) with respect to scenic beauty
NAT
0.0
0.0
1.0
0.0
1.0
1.0
SCEN
1.0
0.0
1.0
1.0
1.0
1.0
NORM
0.0
0.0
0.0
0.0
0.0
1.0
GAME
0.0
0.0
1.0
0.0
1.0
1.0
MREG
0.0
0.0
0.0
0.0
0.0
1.0
INC
0.0
0.0
0.0
0.0
0.0
0.0
4.5.3 ELECTRE Method
The ELECTRE III method, can be considered as a non-compensatory model (Rogers
and Bruen 1998a). It means, that a really bad score of any alternative with respect
to any one criterion cannot necessarily be compensated for by good scores in other
criteria.
In ELECTRE III method, a concordance index C(ak, al) for each pair of al-
ternatives is computed, describing the strength of a claim that alternative ak is at
least as good as alternative al, utilising pseudo-criteria in a similar fashion as in
Table 4.14 Credibility matrix
NAT
SCEN
NORM
GAME
MREG
INC
NAT
0.000
0.200
0.280
0.067
0.400
0.400
SCEN
0.800
0.000
0.800
0.800
0.200
0.333
NORM
0.600
0.200
0.000
0.000
0.053
0.400
GAME
0.600
0.200
0.200
0.000
0.267
0.400
MREG
0.600
0.800
0.600
0.600
0.000
0.400
INC
0.600
0.600
0.600
0.600
0.600
0.000

--- Page 84 ---

76
4 Uncertainty in Multi-Criteria Decision Making
Table 4.15 Positive and negative and net ﬂows
Positive ﬂow
Negative ﬂow
Net ﬂow
MREG
0.600
0.304
0.296
INC
0.600
0.387
0.213
SCEN
0.587
0.400
0.187
GAME
0.333
0.413
−0.080
NORM
0.251
0.496
−0.245
NAT
0.269
0.640
−0.371
PROMETHEE method. The concordance index is calculated as
C(ak,al) =
p
∑
j=1
wjcj(ak,al),
(4.32)
where wj are the relative importance of the different criteria (scaled to add up to one
in the formula) and cj(ak, al) is the local concordance index, deﬁned as
cj(ak,al) =
⎧
⎪
⎪
⎪
⎨
⎪
⎪
⎪
⎩
0, if gj(al)−gj(ak) ≥pj
1, if gj(al)−gj(ak) ≤qj
pj −(gj(al)−gj(ak))
pj −qj
, otherwise.
(4.33)
In Formula (4.33), constant threshold values are applied. However, in ELECTRE
III, the thresholds may be either constant, proportional to the criterion value, or they
could be expressed with a linear model as a function of the criterion value (e.g.
Rogers and Bruen 1998b).
The concordance index is interpreted a bit differently than the preference rela-
tions F in PROMETHEE. Here, it is analysed if there is evidence against the claim
that alternative ak is at least as good as al, and if al is clearly preferred to ak, no such
evidence can be found. If the alternatives are indifferent, or gj(al)−gj(ak) < 0, then
such evidence can be found (Fig. 4.8). In PROMETHEE, the evidence supporting
the claim that ak is better than al is searched for.
0
0,2
0,4
0,6
0,8
1
1,2
g(b)-g(a)
c(a,b)
b clearly prefererred to a
b not prefererred to a
b weakly prefererred to a
Fig. 4.8 Support of the local concordance index for claim that a is at least as good as b

--- Page 85 ---

4.5 Outranking Methods
77
If the decision were based on the concordance indices of alternatives, weighted
with the importance of different criteria, the approach would basically be based on
an additive utility function similarly as in PROMETHEE method given suitable val-
ues for gi and pi (see Salminen et al. 1998). Then, the ratios of weights of different
criteria would represent the substitution rates between the different criteria. How-
ever, in ELECTRE III there is also a so-called veto threshold vj, which is used to
compute the discordance index for the alternatives. The discordance index is used to
model the degree of incompensation between the criteria. This means, that an alter-
native with a very poor value of any one criterion cannot be chosen irrespective of
the values of the other criteria. It also means that the weights of the criteria cannot be
interpreted as substitution rates, but they represent votes for the criteria (Miettinen
and Salminen 1999). The discordance index is deﬁned for each criterion as
dj(ak,al) =
⎧
⎪
⎪
⎪
⎨
⎪
⎪
⎪
⎩
0, if gj(al)−gj(ak) ≤pj
1, if gj(al)−gj(ak) ≥vj
(gj(al)−gj(ak))−pj
vj −pj
,
otherwise.
(4.34)
The discordance indices of different criteria are not aggregated using the weights,
since one discordant criterion is sufﬁcient to discard outranking. In environmental
planning the veto threshold is appropriate in a sense that some alternatives may not
be found acceptable at all with respect to some criteria (Rogers and Bruen 1998b).
The closer the veto threshold vj is to the preference threshold pj, the more important
the criterion j can be considered (Roy 1991).
Finally, the degree of outranking is deﬁned by S(ak, al) as
S(ak,al) =
⎧
⎪
⎨
⎪
⎩
C(ak,al), if J(ak,al) = Ø
C(ak,al)
∏
j∈J(ak,al)
1−dj(ak,al)
1−C(ak,al) ,
otherwise,
(4.35)
where J(ak, al) is a set of criteria for which dj(ak, al) > C(ak, al) (Miettinen and
Salminen 1999).
In basic ELECTRE III method, a descending (Z1) and ascending (Z2) preorder
is constructed using the outranking degrees S. The ﬁnal partial order Z = Z1 ∩Z2
is constructed based on these two complete orders. The preorders Z1 and Z2 are
constructed using a descending and ascending distillation.
In descending distillation procedure, ﬁrst the maximum credibility value is
searched for, λmax = maxS(ak,al). Then, a quality matrix is formed such that only
values that are sufﬁciently close to that are considered. Sufﬁciently close means
here S(ak,al) values that are greater than λmax −s(λ), where s(λ) = 0.3−0.15λmax
(Belton and Stewart 2002, p. 246). The quality matrix T(ak,al) is deﬁned as
T(ak,al) =

1, if S(ak,al) > λ −s(λ)
0,
otherwise
(4.36)
Ranking is then based on the number of alternatives outranked by each alternative
minus the number of alternatives which outrank it, i.e. row sum minus the column

--- Page 86 ---

78
4 Uncertainty in Multi-Criteria Decision Making
sum for each alternative. The set of alternatives having the largest qualiﬁcation is
the ﬁrst distillate D1. If this distillate contains only one alternative, the procedure is
continued in the set of alternatives A, excluding that one alternative, i.e. in group
A\D1. If there are more alternatives in D1, the distillation procedure is applied to
alternatives inside it. When the whole group of alternatives is distillated this way,
the ﬁrst preorder Z1 is ready. Ascending distillation is carried out in the same way,
except the alternatives with smallest qualiﬁcation are searched for ﬁrst (for details,
see, e.g. Maystre et al. 1994; Buchanan et al. 1999; Rogers et al.2000; Belton and
Stewart 2002).
The two distillations are then combined to form a partial preorder. This is carried
out so that an alternative is ranked higher in the ﬁnal order, if it is ranked higher in
both these distillations. If the alternatives are indifferent in both distillations, they
are deemed indifferent. In the obtained partial preorder some alternatives may be
incomparable, i.e. their performance order cannot be determined. This is the case,
if one alternative is better with respect to one distillation but worse with respect to
another.
This possibility of incomparability was, at ﬁrst, deemed an important quality of
ELECTRE method. However, it is quite inconvenient in practical decision aid situa-
tions. A complete ranking may be obtained using, for example, the ‘min’ procedure
(see Pirlot 1995). In the ‘min’ procedure, the alternatives are ranked according to the
minimum outranking degree of each alternative. The alternative having the highest
minimum is ranked ﬁrst, and so on (see Miettinen and Salminen 1999). The ‘min’
procedure utilises the ordinal properties of the valuations (Pirlot 1995). Another
possibility is to utilize the so-called median ranking (Roy et al. 1986), where the
incomparabilities are removed by comparing the ranks of the two alternatives in the
two distillations.
The PROMETHEE II method includes an indifference threshold and a preference
threshold, but not a veto threshold as ELECTRE III. Also the method by which the
alternatives are ranked differs, and, thus, these methods may not always produce
similar results.
The outranking methods are often used for group decision making situations.
In group decision making, the analyst typically chooses the values for the thresh-
olds, and the decision makers only choose the weights of the criteria. Usually,
each decision maker gives his/her own weights, and in the analysis the median
or mean values for the weights are used (Roy 1991). However, it is also im-
portant to study the effect of the extreme values to the weights in a sensitivity
analysis.
Example 4.8. The example 4.7 is analyzed again with ELECTRE III, using the ‘min’
approach for ranking the alternatives. In this example, the same weights and pref-
erence and indifference thresholds are used as above. In addition, however, a veto
threshold for each criterion is added. The values for these parameters are presented
in the Table 4.16.
As the concordance index matrices c for each criterion are almost similar to
those of PROMETHEE (except that alternatives at least as good are searched for,

--- Page 87 ---

4.5 Outranking Methods
79
Table 4.16 Weights and the threshold values
w
q
p
v
Net incomes
0.6
5
20
200
Future timber value
0.2
0.05
0.2
2
Scenic beauty
0.2
0.1
0.2
2
Table 4.17 Resulting concordance matrix
NAT
SCEN
NORM
GAME
MREG
INC
NAT
1.000
0.200
0.400
0.400
0.400
0.400
SCEN
0.800
1.000
0.800
0.800
0.200
0.400
NORM
0.720
0.200
1.000
0.800
0.400
0.400
GAME
0.933
0.200
1.000
1.000
0.400
0.400
MREG
0.600
0.800
0.947
0.733
1.000
0.400
INC
0.600
0.667
0.600
0.600
0.600
1.000
Table 4.18 Discordances with respect to
NAT
SCEN
NORM
GAME
MREG
INC
(a) net incomes
NAT
0.000
0.331
0.100
0.072
0.457
0.954
SCEN
0.000
0.000
0.000
0.000
0.015
0.512
NORM
0.000
0.120
0.000
0.000
0.246
0.743
GAME
0.000
0.148
0.000
0.000
0.274
0.771
MREG
0.000
0.000
0.000
0.000
0.000
0.386
INC
0.000
0.000
0.000
0.000
0.000
0.000
(b) the future timber value
NAT
0.000
0.000
0.000
0.000
0.000
0.000
SCEN
0.128
0.000
0.067
0.072
0.017
0.000
NORM
0.000
0.000
0.000
0.000
0.000
0.000
GAME
0.000
0.000
0.000
0.000
0.000
0.000
MREG
0.000
0.000
0.000
0.000
0.000
0.000
INC
0.211
0.000
0.150
0.156
0.100
0.000
(c) the scenic beauty
NAT
0.000
0.000
0.000
0.000
0.000
0.000
SCEN
0.000
0.000
0.000
0.000
0.000
0.000
NORM
0.000
0.111
0.000
0.000
0.000
0.000
GAME
0.000
0.000
0.000
0.000
0.000
0.000
MREG
0.056
0.167
0.000
0.056
0.000
0.000
INC
0.222
0.333
0.111
0.222
0.056
0.000

--- Page 88 ---

80
4 Uncertainty in Multi-Criteria Decision Making
Table 4.19 Final outranking matrix
NAT
SCEN
NORM
GAME
MREG
INC
NAT
1.000
0.167
0.400
0.400
0.362
0.031
SCEN
0.800
1.000
0.800
0.800
0.200
0.326
NORM
0.720
0.200
1.000
0.800
0.400
0.171
GAME
0.933
0.200
1.000
1.000
0.400
0.153
MREG
0.600
0.800
0.947
0.733
1.000
0.400
INC
0.600
0.667
0.600
0.600
0.600
1.000
indicating that each alternative is at least as good as itself), only the resulting con-
cordance matrix C is presented (Table 4.17).
The discordance matrices are next calculated (Table 4.18). For instance, the dis-
cordance of the claim that NAT is at least as good as INC with respect to net in-
comes is (191.7 −0 −20)/(200 −20) = 0.954, i.e. fairly high (Table 4.18a). The
other alternatives all have fairly high discordance with the claim that they are at
least as good as INC alternative with respect to net incomes. When calculating
the ﬁnal degree of outranking for NAT over INC, the concordance is reduced be-
cause of the discordance with respect to net incomes, so that the ﬁnal outrank-
ing degree is 0.4 · (1 −0.954)/(1 −0.4) = 0.4 · 0.046/0.6 = 0.031. INC alterna-
tive also has some discordance with respect to claims that it is at least as good
as other alternatives with respect to future timber value and scenic beauty. Since
these discordances are smaller than the concordances of the same claims, they
do not affect. The ﬁnal outranking degree matrix S is presented in Table 4.19.
When these outranking degrees for each alternative are ranked from smallest to
largest, it is clear that the minimum outranking degree is the highest for INC
alternative.
If the qualiﬁcation matrix T is calculated from S, with the largest outranking
degree being 1, then s = 0.15 so that only outranking degrees greater than 0.85 are
counted. The resulting T matrix is presented in Table 4.20, and the row and column
sums, as well as qualiﬁcations in Table 4.21. In the qualiﬁcations, GAME alternative
has the best qualiﬁcation, and it would be the ﬁrst alternative in the descending
preorder. The rest of the alternatives would be included in a similar analysis for
deﬁning the rest of the preorder.
Table 4.20 Qualiﬁcation matrix T
NAT
SCEN
NORM
GAME
MREG
INC
NAT
1
0
0
0
0
0
SCEN
0
1
0
0
0
0
NORM
0
0
1
0
0
0
GAME
1
0
1
1
0
0
MREG
0
0
1
0
1
0
INC
0
0
0
0
0
1

--- Page 89 ---

4.6 Probabilistic Uncertainty in Decision Analysis
81
Table 4.21 Row and column sums and qualiﬁcations Q for each alternative
Row sum
Column sum
Q
NAT
1
2
−1
SCEN
1
1
0
NORM
1
3
−2
GAME
3
1
2
MREG
2
1
1
INC
1
1
0
4.5.4 Other Outranking Methods
There are a wide range of related methods, but those do not have as wide interna-
tional usage as the presented methods. For example, fuzzy PROMETHEE utilises
fuzzy numbers in describing the performance of the alternatives with respect to cer-
tain criteria in addition to fuzzy relations (Goumas and Lygerou 2000). There are
also attempts to include the uncertainty in the performance values using probability
distributions (d’Avignon and Vincke 1988).
4.6 Probabilistic Uncertainty in Decision Analysis
4.6.1 Stochastic Multicriteria Acceptability Analysis (SMAA)
It is also possible to account for uncertainty in a probabilistic framework. The ef-
fect in both the weights of the criteria and the performance of the alternatives with
respect to these criteria can be assumed stochastic. Then, it can be analysed with a
Monte Carlo analysis what is the probability that a certain alternative beats all the
other alternatives, or that a certain alternative beats another alternative. The distri-
bution of utilities for each alternative with respect to all decision criteria simulta-
neously can be calculated by sampling the distribution of weights and the criteria
values, and by calculating the utility obtained from each realization (e.g. Alho and
Kangas 1997; Kangas et al. 2000, 2007). In these studies, the uncertainty involved
in criteria weights was estimated using regression AHP.
Even in a case the decision makers cannot or do not wish to express their pref-
erences concerning different criteria, or even provide a preference order, it is still
possible to utilise some MCDS tools in decision support. In acceptability analy-
sis, instead of considering which alternative is preferred using certain weights, the
weights that support a certain alternative are considered. Charnetski and Soland
(1978) presented the comparative hypervolume criterion for cases where only par-
tial preference information is available. Bana e Costa (1986, 1988) presented an
acceptability index, which was computed as the proportion of volume of the weight
space that supports a certain alternative. Butler et al. (1997) simulated the effect of

--- Page 90 ---

82
4 Uncertainty in Multi-Criteria Decision Making
different weights on the results of the utility analysis and Lahdelma et al. (1998)
introduced a stochastic version of acceptability analysis (SMAA), where both the
weights and the criterion values were assumed stochastic.
In the original SMAA method by Lahdelma et al. (1998) the weight space analy-
sis is performed based on an additive utility or value function. The SMAA-2 method
by Lahdelma and Salminen (2001) generalized the analysis to a general utility or
value function. The SMAA-O method by Lahdelma et al. (2003) extends SMAA-2
for treating mixed ordinal and cardinal criteria in a comparable manner. In addi-
tion, the SMAA family includes, among others, the methods ref-SMAA, SMAA-3
and SMAA-III. In ref-SMAA the analysis is based on ideal or reference points in-
stead of utility function (Lahdelma et al. 2005). The SMAA-3 method (Lahdelma
and Salminen 2002) is based on pseudo-criteria as in the ELECTRE III decision-aid
and SMAA-III is a full SMAA version of ELECTRE III (Tervonen et al. 2007).
The SMAA analysis has been used for several real-life problems. Among them
are, for instance, planning the development of Helsinki harbour (Hokkanen et al.
1999), searching for technology for cleaning polluted soil (Hokkanen et al. 2000)
and for locating a waste treatment facility (Lahdelma et al. 2002).
The SMAA-2 method (Lahdelma and Salminen 2001) has been developed for
discrete stochastic multicriteria decision making problems with multiple decision
makers. SMAA-2 applies inverse weight space analysis to describe for each alter-
native what kind of preferences make it the most preferred one, or place it on any
particular rank.
The decision problem is represented as a set of n alternatives {x1, x2,. . . , xn}
to be evaluated in terms of m criteria. The decision makers’ preference structure is
represented by a real-valued utility or value function u(xi, w)
Ui =
m
∑
j=1
wjuj(xi j).
(4.37)
The criterion values xi j are usually scaled to value scale using (2.5), i.e.
uj(xi j) =
xi j −min(xi)
max(xi)−min(xi)
(4.38)
The value function maps the different alternatives to real values by using a weight
vector w to quantify decision makers’ subjective preferences. SMAA-2 has been
developed for situations where neither criteria measurements nor weights are pre-
cisely known.
Uncertain or imprecise criteria are represented by a matrix of stochastic variables
ξi j with joint density function f(ξ) in the space X ⊆Rn×m. The observed criterion
values xi j are thus assumed to be realized values of a stochastic variable having
a probability distribution. It is assumed that the observed values xi j represent the
expected value of this distribution, and the uncertainty involved in the criterion value
is described with the variance of the distribution. The distribution could be, for
instance, a uniform distribution, giving all values within range [xi j −∆j,xi j + ∆j]
equally probable. More likely, the distribution could be a normal distribution so that
small deviations from the expected value are more probable than large ones.

--- Page 91 ---

4.6 Probabilistic Uncertainty in Decision Analysis
83
If the variation in each variable is described with a uniform or normal distribution
this way, it is assumed that the uncertainty in any one variable is not related to the
uncertainty in another variable. If the criterion values are based on same causal
factors, the uncertainties may be dependent (e.g. Lahdelma et al. 2006). However,
explanatory variables in production models are often the same: for example, the site
index, volume of the growing stock, and age of the forest can be used to predict other
forest products such as berry yields. The predicted berry crop might, for instance,
be the bigger the larger the volume of the stand. Therefore, the errors in basic forest
variables affect them, and there may be dependencies in the errors between different
criteria measurements as well. In this case, a multivariate normal distribution could
be used (Kangas et al. 2006a).
The decision makers’ unknown or partially known preferences are represented by
a weight distribution with joint density function f(w) in the feasible weight space
W. This facilitates very ﬂexible modelling of different kinds of preference infor-
mation. For example, the decision makers can specify precise weights, a priority
order for the criteria, weight intervals, intervals for weight ratios, or arbitrary linear
or non-linear constraints for weights. Total lack of preference information is rep-
resented in ‘Bayesian’ spirit by a uniform weight distribution in W, i.e. for each
criterion j each weight from range [0, 1] is equally probable. This can be expressed
with a joint distribution function for the weights
f(w) = 1/vol(W)
(4.39)
where vol(W) is the volume of the weight space. The weight space can be deﬁned
according to needs, but typically, the weights are non-negative and normalized, i.e.
W = {w ∈Rm|wj ≥0 and ∑
m
j=1 wj = 1}.
(4.40)
The feasible weight space is an n−1 dimensional simplex in n dimensional space.
For instance with three criteria, the weight space is a plane and with two criteria a
line (Fig. 4.9, Tervonen and Lahdelma 2007).
The value function is then used to map the stochastic criteria and weight distri-
butions into value distributions u(ξi, w). In practice, it means that the joint distrib-
utions of criteria values and weights are sampled for a large number of times, say
K. From these, K different realizations of the problem are obtained. From the vari-
ation between the K realizations, the value distribution is obtained. The distribution
is thus obtained numerically, an analytic solution would not be easy to calculate, as
the weights need to be normalized.
Obtaining m weights adding up to one may seem a difﬁcult task. It is not possible
to sample m weights and scale them to one by dividing with the sum of obtained
weights, since then it would never be possible to obtain high weight for any criterion.
The task is, however, easy (see also Lahdelma and Salminen 1998). For obtaining
the weights, m −1 random numbers r are sampled from the uniform distribution.
These numbers are then ordered from smallest to largest and values 0 and 1 are
included in the numbers as 0 < r1 < ··· < rm−1 < 1. Then, m numbers summing up
to one are obtained from differences r1 −0, r2 −r1, ...,1−rm−1.

--- Page 92 ---

84
4 Uncertainty in Multi-Criteria Decision Making
w1
w3
w2
W
Fig. 4.9 The feasible weight space in a case of no information on weights, presented as a shaded
triangle with corner points (1, 0, 0), (0, 1, 0) and (0, 0, 1)
If there is information concerning the priority order of weights, for instance, this
can be used to order the obtained weights accordingly (Fig. 4.10). The decision
maker may be able to deﬁne a complete importance order, or only the importance
order of two groups of criteria, etc.
Example 4.9. Assume three criteria, from which the ﬁrst one is known to be the most
important, and the importance order of the two other criteria is undetermined. This
can be denoted with C1 > C2?C3. To obtain weights for these, two random numbers
w1
w3
w2
w2>w1
W
w1>w3
Fig. 4.10 The feasible weight space, when the importance order of criteria is C2 > C1 > C3

--- Page 93 ---

4.6 Probabilistic Uncertainty in Decision Analysis
85
Table 4.22 An example realization from the simulation
Net income
Stumpage value
Scenic beauty
∆
±10
±0.2
±0.1
NAT
−2.360
0.550
5.519
SCEN
87.582
0.434
5.792
NORM
28.290
0.563
5.473
GAME
25.772
0.508
5.409
MREG
92.948
0.376
5.144
INC
182.042
0.044
4.868
from a uniform distribution are sampled. These values were 0.112 and 0.308. From
these, the weights are 0.112, 0.308 −0.112 = 0.196 and 1 −0.308 = 0.692. Since
the ﬁrst criterion was the most important, it was given the largest weight, 0.692 and
since the priority of the others was undetermined, they were given values in the
order of observation, 0.112 for C2 and 0.196 for C3.
Example 4.10. Assume the data set of example 3.5. It is assumed that all criteria val-
ues have a uniform distribution so that net incomes variate ± 10(1,000AC), stumpage
value ±0.2 (million euros) and scenic beauty ±0.1 units around the expected values
(observed values). Random values for each variable are sampled from the uniform
distributions with the given assumptions. These variables form one realization in the
simulation. An example realization is presented in the Table 4.22 and the resulting
sub-utilities are presented in Table 4.23.
Based on the value distributions, the rank of each alternative is deﬁned as an in-
teger from the best rank (=1) to the worst rank (=n) by means of a ranking function
rank(i,ξ,w) = 1+∑
n
k=1 ρ(u(ξk,w) > u(ξi,w)),
(4.41)
where ρ(true) = 1 and ρ(false) = 0. With a given realization of weights w and
criteria value matrix ξ, this formula computes the rank of alternative xi, as one plus
the number of alternatives xk that are strictly better than xi. SMAA-2 is based on
analyzing the stochastic sets of favourable rank weights
Wr
i(ξ) = {w ∈W|rank(i,ξ,w) = r}.
(4.42)
Table 4.23 Sub-utilities resulting from simulated criterion values
Net income
Stumpage value
Scenic beauty
NAT
−0.012
0.725
0.774
SCEN
0.457
0.524
1.115
NORM
0.148
0.746
0.716
GAME
0.134
0.652
0.636
MREG
0.485
0.424
0.305
INC
0.950
−0.148
−0.040

--- Page 94 ---

86
4 Uncertainty in Multi-Criteria Decision Making
Any weight vector w ∈Wr
i(ξ) results in such values for different alternatives that
alternative xi obtains rank r.
The ﬁrst descriptive measure of SMAA-2 is the rank acceptability index br
i ,
which measures the variety of different preferences that grant alternative xi rank
r. It is the share of all feasible weights Wr
i(ξ) that make the alternative acceptable
for a particular rank, and it is most conveniently expressed in percent. Then, its ac-
ceptability is calculated as the expected volume of Wr
i, proportional to total weight
space volume as (Lahdelma et al. 1998; Lahdelma and Salminen 2001; Miettinen
et al. 1999)
br
i = vol(Wr
i )/vol(W)
(4.43)
Generally br
i is computed numerically as a multidimensional integral over the crite-
ria distributions and the favourable rank weights using
br
i =

X f(ξ)

Wr
i (ξ) f(w)dw dξ.
(4.44)
The most acceptable (best) alternatives are those with high acceptabilities for the
best ranks. Evidently, the rank acceptability indices are in the range [0, 1] where
0 indicates that the alternative will never obtain a given rank and 1 indicates that
it will obtain the given rank always with any choice of weights (with the given in-
formation concerning weights). For comparing how different varieties of weights
support each rank for each alternative, graphical examination of the rank accept-
ability indices is useful. Alternatives with high acceptabilities for the best ranks are
taken as candidates for the most acceptable solution. On the other hand, alternatives
with large acceptabilities for the worst ranks should be avoided when searching for
compromises – even if they would have high acceptabilities also for fair ranks.
The ﬁrst rank acceptability index is called the acceptability index ai. The accept-
ability index is particularly interesting, because it can be used for classifying the
alternatives into stochastically efﬁcient ones (ai > 0) and inefﬁcient or “weakly ef-
ﬁcient” ones (ai zero or near-zero). The acceptability index not only identiﬁes the
efﬁcient alternatives, but also measures the strength of the efﬁciency considering the
uncertainty in criteria and decision makers’ preferences.
If the applied weight distribution is assumed to represent accurately the distri-
bution of multiple decision makers’ (or other stakeholders’) preferences, then the
acceptability index is the share of votes that an alternative would receive in a voting
situation. An alternative obtaining over 50% acceptability (or some other qualiﬁed
majority) could then be chosen directly. In the general case, when the applied weight
distribution cannot be assumed to represent the different preferences accurately, the
acceptability indices should not be used for absolute ranking of the alternatives. This
is due to the fact that an alternative with low support for ﬁrst rank may well be the
preferred one with suitable preferences.
If there is information available concerning the preferences, but it is not used
in the analysis, the results may be highly misleading. For instance, in a simulation
study where true preferences were assumed to exist but not used in decision analysis
at all, the SMAA analysis did recommend the best alternative only in less than 50%
of cases (Kangas 2006). If no information of the preferences is used, the SMAA

--- Page 95 ---

4.6 Probabilistic Uncertainty in Decision Analysis
87
analysis implicitly makes the recommendations as if the criteria had equal impor-
tance to the decision maker.
Often, it can be useful to calculate also cumulative acceptability of some alterna-
tives. Instead of analyzing the acceptability for one given rank, it is analyzed what
is the acceptability for at least a given rank k (k-best acceptability). For instance, the
probability that alternative i is at least third, i.e. among the three most acceptable
alternatives, can be analysed.
The holistic acceptability index can be computed for each alternative as a
weighted sum of the rank acceptabilities
ah
i =
n
∑
r=1
αrbr
i,
(4.45)
where suitable meta-weights (or rank weights) 1 = α1 ≥α2 ≥... ≥αn ≥0 are
used to emphasize the best ranks. The holistic acceptability index is thus in the
interval [0, 1] and aims to provide a rough measure of the overall acceptability of
the alternatives. The meta-weights can be, for instance, centroid weights
αr =
n−1
∑
i=r
1
i

n−1
∑
i=1
1
i
(4.46)
Different meta-weights produce slightly different results, however, and the choice
of the meta-weights is subjective. Different ways to choose the meta-weights are
discussed in Lahdelma and Salminen (2001). The holistic acceptability indices have
an important practical use: sorting the alternatives by their holistic acceptability
index brings similar alternatives close to each other and makes the rank acceptability
index graph and table much more descriptive.
The central weight vector wc
i is the expected centre of gravity (centroid) of the
favourable ﬁrst rank weights of an alternative. wc
i is computed numerically as a
multidimensional integral over the criteria distributions and the favourable ﬁrst rank
weights using
wc
i =

X f(ξ)

W 1
i (ξ) f(w) w dw dξ/ai.
(4.47)
In practise it means that a mean of weights is calculated from those realisations that
give a certain alternative the ﬁrst rank. The central weight vector represents the pref-
erences of a hypothetical decision maker supporting this alternative. Of course, the
actual preferences of the decision makers may be more or less incompatible with the
central weight vectors. Still, presenting the central weights of different alternatives
to the decision makers may help them to understand how different weights corre-
spond to different choices with the assumed preference model. This information
may also aid the decision makers to elicit their preferences in terms of weights.
The conﬁdence factor pc
i is the probability for an alternative to obtain the ﬁrst
rank when the central weight vector is chosen. The conﬁdence factor is computed
as a multidimensional integral over the criteria distributions using
pc
i =

ξ∈X:wc
i ∈W1
i (ξ) f(ξ)dξ.
(4.48)

--- Page 96 ---

88
4 Uncertainty in Multi-Criteria Decision Making
Conﬁdence factors can similarly be calculated for any given weight vectors. The
conﬁdence factors measure whether the criteria data are accurate enough to discern
the efﬁcient alternatives. The conﬁdence factor can also be used together with the
acceptability index for eliminating weakly efﬁcient alternatives. If the acceptability
index is very low (near-zero, ≪1/n) and the conﬁdence factor is low (less than,
say, 5%), we can argue that such an alternative is very unlikely the most preferred
by any decision maker. In contrast, a very high conﬁdence factor (over 95%) in-
dicates that with suitable preferences, the alternative is almost certainly the most
preferred one.
The correlation among errors may considerably affect the results in the SMAA
analysis. Generally, if there are positive correlations across the alternatives, within
each criterion, the risks are less profound than in the case of independent errors (see
Kangas et al. 2006). This is because high correlations retain the performance order
of alternatives with respect to each criterion in the realizations. On the other hand,
high positive correlations of criteria within alternatives may increase the risks in-
volved in SMAA analysis. This is because the performance order of the alternatives
is likely to change in the realizations, if the errors are to same direction with respect
to several criteria, but to different directions across alternatives. These arguments
can also be proven mathematically (see Lahdelma et al. 2006).
Example 4.11. The problem analyzed in Example 3.5 is analyzed again using
SMAA-2. In the ﬁrst analysis, it was assumed that the importance order or crite-
ria is not known, denoted by C1 ? C2 ? C3. The criteria values were assumed to be
certain. Then, the rank acceptabilities are presented in Table 4.24. The rank proba-
bilities are very similar for three alternatives, NAT, SCEN and INC, but NAT could
be selected as most probable alternative. INC has also 65.8% probability of being
the worst alternative.
The central weight vectors of alternatives describe what kind of preferences sup-
port these alternatives (Table 4.25). The results show that if large weight were given
to incomes, INC would be the preferred alternative, if large weight were given to
scenery SCEN would be the preferred alternative, and if large weight were given
to stumpage value, NAT would be the preferred alternative. If all criteria had quite
Table 4.24 Rank acceptabilities and conﬁdence factors assuming no information from criteria
importances
1st
2nd
3rd
4th
5th
6th
pc
i
NAT
42.1
10.3
18.0
1.3
7.8
20.6
100
SCEN
32.2
8.7
20.6
12.3
19.9
6.3
100
NORM
0.0
0.2
34.3
37.4
20.9
7.3
100
GAME
3.9
60.5
13.4
17.8
4.3
0.0
100
MREG
0.1
15.5
12.4
30.2
41.7
0.0
100
INC
21.6
4.8
1.4
1.0
5.3
65.8
100

--- Page 97 ---

4.6 Probabilistic Uncertainty in Decision Analysis
89
Table 4.25 Central weight vector assuming no information from alternatives
Net incomes
Stumpage value
Scenic beauty
NAT
0.176
0.558
0.265
SCEN
0.290
0.138
0.571
NORM
0.491
0.502
0.007
GAME
0.427
0.369
0.204
MREG
0.499
0.465
0.036
INC
0.687
0.180
0.133
similar weights, GAME could be the best alternative. The conﬁdence factors are
100% for each alternative, since the criteria values were assumed to be certain.
In the second analysis, it was assumed that the ﬁrst criterion, net incomes, was
the most important, and the priority order of stumpage value and scenic beauty is
not known, denoted by C1 > C2 ? C3. The rank acceptabilities for given ranks are
presented in Table 4.26. It means that alternatives NAT and NORM are dominated
and alternative MREG nearly dominated when it comes to the ﬁrst rank. If the al-
ternative were chosen based on the ﬁrst rank probability ai, INC would be the most
preferred alternative.
The holistic acceptability index ah
i for the alternatives are presented in Table 4.27.
INC would be the most preferred one also with this score. The cumulative rank ac-
ceptability indices for the alternatives are presented in Table 4.28 and Fig. 4.11. The
INC alternative is better than the others in the ﬁrst two ranks, but if the alternative
is required to get at least third rank, SCEN is slightly better.
The central weight vectors for the alternatives are given in Table 4.29. Since NAT
alternative was dominated, it has no central weight vector, i.e. it cannot be the best if
the net incomes are the most important criterion. Instead, MREG and NORM have
central weight vectors. It means that also NORM has probability above zero being
the best alternative, even though the probability is less than 0.1%. It can be seen that
if scenic beauty is given fairly large weight (although net incomes as most important
has larger), SCEN may be the best alternative, and NORM or MREG if stumpage
values are given much weight.
Table 4.26 Rank acceptabilities and conﬁdence factors assuming net incomes the most important
criterion
1st
2nd
3rd
4th
5th
6th
pc
i
NAT
0.0
4.9
8.8
2.6
21.9
61.8
0
SCEN
31.8
26.3
29.4
2.0
3.4
7.2
100
NORM
0.0
0.0
4.5
19.2
55.8
20.5
100
GAME
7.3
14.1
10.2
58.3
10.2
0.0
100
MREG
0.3
36.4
43.8
15.5
4.0
0.0
100
INC
60.6
18.3
3.4
2.4
4.8
10.5
100

--- Page 98 ---

90
4 Uncertainty in Multi-Criteria Decision Making
Table 4.27 Holistic acceptability
NAT
SCEN
NORM
GAME
MREG
INC
ah
i
10.2
59.8
14.9
35.8
43.3
74.0
Table 4.28 Cumulative rank acceptability indices
1
2
3
4
5
6
NAT
0.0
4.9
13.7
16.3
38.2
100.0
SCEN
31.8
58.1
87.5
89.5
92.8
100.0
NORM
0.0
0.0
4.5
23.7
79.5
100.0
GAME
7.3
21.4
31.5
89.8
100.0
100.0
MREG
0.3
36.7
80.5
96.0
100.0
100.0
INC
60.6
78.9
82.3
84.7
89.5
100.0
Table 4.29 Central weight vectors assuming net incomes the most important criterion
Net incomes
Stumpage value
Scenic beauty
NAT
0.000
0.000
0.000
SCEN
0.492
0.149
0.359
NORM
0.493
0.492
0.015
GAME
0.431
0.365
0.204
MREG
0.499
0.463
0.038
INC
0.696
0.151
0.154
0
20
40
60
80
100
120
1
2
3
4
5
6
Rank
Probability, %
NAT
SCEN
NORM
GAME
MREG
INC
Fig. 4.11 The cumulative acceptabilities (k-best acceptability)

--- Page 99 ---

4.6 Probabilistic Uncertainty in Decision Analysis
91
4.6.2 SMAA-O
SMAA-O is a version of SMAA, which can utilise also ordinal information con-
cerning the performance of alternatives with respect to some criteria. Ordinal data
are converted into stochastic cardinal data by simulating such values (in the [0, 1] in-
terval) to the ordinal criteria that preserve the given rankings (Miettinen et al. 1999).
It is assumed that the cardinal (ratio scale) utility values for a given criterion exist,
but only their order is known. Similar ideas have been earlier presented by Rietveld
and Ouwersloot (1992).
In practice, m−2 random numbers are sampled from a uniform distribution, and
ordered together with zero and one, in order to obtain one realisation of the possi-
ble underlying cardinal criterion values. Although all values are random numbers
sampled from uniform distribution, the method includes implicit assumptions con-
cerning the distribution of ordinal values (see Leskinen et al. 2004). In this method,
the order is assumed to be correct, but using a statistical approach deviations from
the given order can be accepted with a certain probability.
Example 4.12. Assume that in the previous example the performance with respect
to the last criterion, scenic beauty, is expressed as ordinal value. The ranks are in Ta-
ble 4.30. It is also assumed that there is 10% standard deviation in the values of net
incomes and stumpage value. In this case, the rank acceptabilities and conﬁdence
factors are presented in Table 4.31. When there is uncertainty in the criterion val-
ues, normally distributed for the ﬁrst two criteria, and about the underlying cardinal
criterion values of the ordinal criterion, the rank acceptabilities among the alterna-
tives are somewhat more even: none of the alternatives is dominated any more. The
conﬁdence factors, on the other hand, are smaller. The INC alternative would be
selected with 99.4% conﬁdence using the central weight vector for it, but NORM
and GAME would only occasionally be best even with these favourable weights.
4.6.3 Pairwise Probabilities
Another possibility to analyse the SMAA calculations is to calculate pairwise win-
ning probability for all pairs of alternatives k and l (Leskinen et al. 2006). It
Table 4.30 Rank values for scenic beauty criterion
Scenic beauty
NAT
2.
SCEN
1.
NORM
4.
GAME
3.
MREG
5.
INC
6.

--- Page 100 ---

92
4 Uncertainty in Multi-Criteria Decision Making
Table 4.31 Rank probabilities and conﬁdence factors
1st
2nd
3rd
4th
5th
6th
pc
i
NAT
5.3
8.5
11.0
13.8
15.6
45.8
48.4
SCEN
30.2
33.5
23.6
3.8
3.6
5.3
95.4
NORM
1.1
2.4
6.4
27.5
33.9
28.7
11.1
GAME
2.8
7.2
15.7
38.5
29.9
5.8
22.7
MREG
2.2
28.6
37.3
11.3
12.3
8.2
12.2
INC
58.3
19.9
5.9
5.1
4.7
6.1
99.4
describes the probability of alternative k beating another alternative l. It can be cal-
culated as the proportion of realizations where one alternative is better than another,
using the same realizations of the stochastic processes as for the original rank ac-
ceptabilities. Then, if a certain alternative has 100% winning probability against
another, it is dominant, and 50% probability might indicate either a tie between the
alternatives or conﬂicting criterion values for equally important criteria.
For analysing the pairwise winning probabilities, a rule that is widely accepted
within social choice theory can be found, namely the Condorcet criterion (e.g.
Bouyssou et al. 2000). The Condorcet winner is the candidate that in pairwise elec-
tion gets the majority of votes against all other candidates. In the SMAA analogy,
the Condorcet winner is the alternative which has more than 50% probability of
winning against all other alternatives. Condorcet loser, on the other hand, has less
than 50% probability of winning against all alternatives.
A measure obtained from voting theory which may give good insight into the
problem is the Copeland score (e.g. Bouyssou et al. 2000). The Copeland score is
calculated so that an alternative that gets a majority in a pairwise election, scores
one point, and the alternative that loses the pairwise election loses one point
Copelandk =
n
∑
l=1
k̸=l
rkl,rkl =

1, if p(ak,al) ≥0.5
−1,
otherwise
(4.49)
where p(ak, al) is the probability of alternative k beating alternative l and n is the
number of alternatives. Then, the maximum score is (n−1) for a Condorcet winner
and minimum score is −(n −1) for a Condorcet loser. This rule always ﬁnds the
Condorcet winner, if it exists.
In some cases the elections may result in a situation where there is no Condorcet
winner. For instance, there may be ties. In this case, another rule called Simpson
score is useful (e.g. Martin et al. 1996). Simpson score is the minimum number of
votes in pairwise elections a certain alternative gets against all other alternatives. In
the SMAA context, it would be the minimum of pairwise winning probabilities for
one alternative
Simpsonk = min(p(ak,al)),
l = 1, ...,n k ̸= l.
(4.50)

--- Page 101 ---

4.6 Probabilistic Uncertainty in Decision Analysis
93
Table 4.32 Pairwise winning probabilities
NAT
SCEN
NORM
GAME
MREG
INC
NAT
10.8
33.6
0.0
13.2
15.5
SCEN
89.2
89.2
84.2
60.5
36.7
NORM
66.4
10.8
12.7
5.5
12.2
GAME
100.0
15.8
87.3
25.7
21.3
MREG
86.8
39.5
94.5
74.3
18.4
INC
84.5
63.3
87.8
78.7
81.6
If a Condorcet winner exists, Simpson’s score is larger than 50%. If no alternative
wins against all others in pairwise competitions, Simpson’s score chooses an alter-
native against which there is not a large majority.
From pairwise probabilities it is also possible to calculate a holistic index. The
Positive Outranking Index (POI) is calculated as the mean of the observed pairwise
probabilities of alternative k beating each of the other alternatives l
POIk =
1
n−1
n
∑
l=1
k̸=l
p(ak,al).
(4.51)
This index has a clear interpretation: indices more than 50% indicate alternative
above average, and less than 50% indicate an alternative below average. It also does
not require arbitrary weights and the score only improves if an alternative has posi-
tive probability to win. In this approach, losing to some alternatives can be compen-
sated, if the alternative beats the others by large enough an amount. This approach
resembles the positive ﬂow in PROMETHEE method (e.g. Vincke 1992).
The positive outranking index could also be calculated by counting only those
probabilities that are over 50%, giving a second version of positive outranking index
(POI II)
POI IIk =
1
n−1
n
∑
l=1
k̸=l
rkl p(ak,al), rkl =

1, if p(ak,al) ≥0.5
0,
otherwise.
(4.52)
Then, the index would both penalize losing to another alternative quite hard (but not
as much as Copeland score), and also take into account the amount by which it wins.
Table 4.33 Performance indices based on pairwise probabilities
NAT
SCEN
NORM
GAME
MREG
INC
ah
i
10.2
59.8
14.9
35.8
43.3
74.0
POI
14.6
71.9
21.5
50.0
62.7
79.2
POI II
0.0
64.6
13.3
37.5
51.1
79.2
Copeland
−5.0
3.0
−3.0
−1.0
1.0
5.0
Simpson
0.0
36.7
5.5
15.8
18.4
63.3

--- Page 102 ---

94
4 Uncertainty in Multi-Criteria Decision Making
Example 4.13. In the problem above assuming net incomes as most important crite-
rion (Example 4.11), the pairwise probabilities of each alternative beating the others
are presented in Table 4.32 and the resulting scores in Table 4.33. The probability
of an alternative beating itself is not considered. In this example, INC beats each
alternative with probability greater than 50%, and it is best with all the indices.
References
Adamo, J.M. 1980. Fuzzy decision trees. Fuzzy Sets and Systems 4: 207–220.
Alho, J.M. and Kangas, J. 1997. Analyzing uncertainties in experts’ opinions of forest plan perfor-
mance. Forest Science 43: 521–528.
Bana e Costa, C. 1986. A multicriteria decision-aid methodology to deal with conﬂicting situations
on the weights. European Journal of Operational Research 26: 22–34.
Bana e Costa, C.A. 1988. A methodology for sensitivity analysis in three criteria problems: a case
study in municipal management. European Journal of Operational Research 33: 159–173.
Bellman, R. and Zadeh, L.A. 1970. Decision making in fuzzy environment. Management Science
17: B141–B164.
Belton, V. and Stewart T.J. 2002. Multiple criteria decision analysis: an integrated approach.
Kluwer, Dordrecht, The Netherlands.
Bonissone, P.P. 1982. A fuzzy sets based linguistic approach: theory and applications. In: Gupta,
M.M. and Sanchez, E. (Eds.). Approximate reasoning in decision analysis. North-Holland, Am-
sterdam, pp. 329–339.
Bouyssou, D. and Perny, P. 1992. Ranking methods for valued preference relations: a characteriza-
tion of a method based on leaving and entering ﬂows. European Journal of Operational Research
61: 186–194.
Bouyssou, D., Marchant, T., Pirlot, M., Perny, P., Tsouki`as, A., and Vincke, P. 2000. Evaluation
and decision models – A critical perspective. Kluwer, Dordrecht, The Netherlands.
Bouyssou, D., Jacquet-Lagrez, E., Perny, P., Slowinski, R., Vanderpooten, D., and Vincke Ph.
(Eds), 2001. Aiding decisions with multiple criteria. Essays in honor of Bernard Roy. Kluwer
Academic Publishers. Dordrecht, The Netherlands.
Brans, J.P., Vincke, Ph., and Mareschal, B. 1986. How to select and how to rank projects: the
PROMETHEE method. European Journal of Operational Research 24: 228–238.
Briggs, Th., Kunsch, P.L., and Mareschal, B. 1990. Nuclear waste management: an application of
the multicriteria PROMETHEE methods. European Journal of Operational Research 44: 1–10.
Buchanan, J., Sheppard, P., and Vanderpoorten, D. 1999. Project ranking using ELECTRE III.
Research report 99-01, University of Waikato, Dept. of management systems, New Zealand.
Butler, J., Jia, J., and Dyer, J. 1997. Simulation techniques for the sensitivity analysis of multi-
criteria decision models. European Journal of Operational Research 103: 531–546.
Caselton, W.F. and Luo, W. 1992. Decision making with imprecise probabilities: Dempster-Schafer
theory and application. Water Resources Research 28: 3071–3083.
Chang, J-R., Cheng, C-H., and Kuo, C-Y. 2006. Conceptual procedure for ranking fuzzy numbers
based on adaptive two-dimension dominance. Soft Computing 10: 94–103.
Charnetski, J.R. and Soland R.M. 1978. Multiple-attribute decision making with partial informa-
tion: the comparative hypervolume criterion. Naval Research Logistics Quarterly 25: 279–288.
Chen, S-J. and Hwang, C-L. 1992. Fuzzy multiple attribute decision making. Methods and applica-
tions. Lecture notes in economics and mathematical systems 375. Springer, New York, 536 pp.
Cheng, C-H. 1999. Evaluating weapon systems using raking fuzzy numbers. Fuzzy Sets and Sys-
tems 107: 25–35.
Choi, D-Y. and Oh, K-W. 2000. ASA and its application to multi-criteria decision making. Fuzzy
Sets and Systems 114: 89–102.

--- Page 103 ---

References
95
Cox, E. 1994. The fuzzy systems handbook. Academic, Cambridge.
d’Avignon, G.R. and Vincke, Ph. 1988. An outranking method under uncertainty. European Journal
of Operational Research 36: 311–321.
Dempster, A.P. 1967a. Upper and lower probabilities induced by a multivalued mapping. Annales
of Mathematical Statistics 38: 325–339.
Dempster, A.P. 1967b. Upper and lower probability inference based on a sample from a ﬁnite
univariate population. Biometrika 54: 515–528.
Dempster, A.P. and Kong, A. 1987. Probabilistic expert systems in medicine: practical issues in
handling uncertainty – comment. Statistical Science 2: 32–36.
Despic, O. and Simonovich, S.P. 2000. Aggregation operators for soft decision making in water
resources. Fuzzy Sets and Systems 115: 11–33.
Dubois, D. and Prade, H. 1988. Possibility theory. An approach to computerized processing of
uncertainty. Plenum Press, New York, 263 pp.
Dubois, D., Fargier, H., and Prade, H. 1994. Propagation and Satisfaction of ﬂexible constraints
In: Yager, R.R. and Zadeh, L.A. (Eds.). Fuzzy Sets, Neural Networks and Soft Computing. Van
Nostrand Reinnold, New York pp. 166–187.
Dubois, D., Fargier, H., and Prade, H. 1996. Reﬁnements of the maximin approach to decision
making in a fuzzy environment. Fuzzy Sets and Systems 81: 103–122.
Dubois, D., Prade, H., and Sabbadin, R. 2001. Decision theoretic foundations of qualitative possi-
bility theory. European Journal of Operational Research 128: 459–478.
Ducey, M.J. 2001. Representing uncertainty in silvicultural decisions: an application of the
Dempster-Schafer theory of evidence. Forest Ecology and Management 150: 199–211.
Ducey, M.J. and Larson, B.C. 1999. A fuzzy set approach to the problem of sustainability. Forest
Ecology and Management 115: 29–40.
Eastman, J.R. and Jiang 1996. Fuzzy measures in multi-criteria evaluation. In: Proceedings of
the 2nd International Symposium on Spatial Accuracy Assessment in Natural Resources and
Environmental Studies. Fort Collins, CO, May 21–23, pp. 527–534.
Ferson, S. and Ginzburg, L.R. 1996. Different methods are needed to propagate ignorance and
variability. Reliability Engineering and System Safety 54: 133–144.
Goumas, M. and Lygerou, V. 2000. An extension of the PROMETHEE method for decision making
in fuzzy environment: ranking of alternative energy exploitation projects. European Journal of
Operational Research 123: 606–613.
Hannan, E.L. 1983. Fuzzy decision making with multiple objectives and discrete membership func-
tions. International Journal of Man-Machine Studies 18: 49–54.
Hellendoorn, H. and Thomas, C. 1993. Defuzziﬁcation in fuzzy controllers. Journal of Intelligent
and Fuzzy Systems 1: 109–123.
Hokkanen, J. and Salminen, P. 1997a. Choosing a solid waste management system using multicri-
teria decision analysis. European Journal of Operational Research 98: 19–36.
Hokkanen, J. and Salminen, P. 1997b. Locating a waste treatment facility by multicriteria analysis.
Journal of Multi-Criteria Decision Analysis 6: 175–184.
Hokkanen, J. and Salminen, P. 1997c. ELECTRE III and IV decision aids in an environmental
problem. Journal of Multi-Criteria Decision Analysis 6: 215–226.
Hokkanen J., Lahdelma, R., and P. Salminen. 1999. A multiple criteria decision model for an-
alyzing and choosing among different development patterns for the Helsinki cargo harbour.
Socio-Economic Planning Sciences 33: 1–23.
Hokkanen, J., Lahdelma, R., and Salminen, P. 2000. Multicriteria decision support in a technology
competition for cleaning polluted soil in Helsinki. Journal of Environmental Management 60:
339–348.
Kangas, A. 2006. The risk of decision making with incomplete criteria weight information.
Canadian Journal of Forest Research 36: 195–205.
Kangas, A. and Kangas, J. 2004. Probability, possibility and evidence: approaches to consider risk
and uncertainty in forestry decision analysis. Forest Policy and Economics 6: 169–188.
Kangas, A., Kangas, J., and Pyk¨al¨ainen, J. 2001a. Outranking methods as tools in strategic natural
resources planning. Silva Fennica 35: 215–227.

--- Page 104 ---

96
4 Uncertainty in Multi-Criteria Decision Making
Kangas, A., Kangas, J., Lahdelma, R., and Salminen, P. 2006a. Using SMAA methods with depen-
dent uncertainties for strategic forest planning. Forest Policy and Economics 9: 113–125.
Kangas, A., Kangas, J., and Laukkanen, S. 2006b. Fuzzy multicriteria approval method and its
application to two forest planning problems. Forest Science 52: 232–242.
Kangas, A, Leskinen, P., and Kangas, J. 2007. Comparison of fuzzy and statistical approaches in
multi-criteria decision making. Forest Science 53: 37–44.
Kangas, J. and Kangas, A. 2004. Multicriteria approval and SMAA-O in natural resources decision
analysis with both ordinal and cardinal criteria. Journal of Multi-Criteria Decision Analysis
12: 3–15.
Kangas, J., Store, R., Leskinen, P., and Meht¨atalo, L. 2000. Improving the quality of landscape
ecological forest planning by utilizing advanced decision-support tools. Forest Ecology and
Management 132: 157–171.
Kangas, J., Kangas, A., Leskinen, P., and Pyk¨al¨ainen, J. 2001b. MCDM methods in strategic plan-
ning of forestry on state-owned lands in Finland: applications and experiences. Journal of Multi-
Criteria Decision Analysis 10: 257–271.
Kangas, J., Hokkanen, J., Kangas, A., Lahdelma, R., and Salminen, P. 2003. Applying stochas-
tic multicriteria acceptability analysis to forest ecosystem management with both cardinal and
ordinal criteria. Forest Science 49: 928–937.
Klir, G.J. and Harmanec, D. 1997. Types and measures of uncertainty. In: Kacprzyk, J., Nurmi, H.,
Fedrizzi, M. (Eds) Consensus under fuzziness. International series in intelligent technologies.
Kluwer, Dordrecht, The Netherlands.
Lahdelma R. and Salminen, P. 2001. SMAA-2: stochastic multicriteria acceptability analysis for
group decision making. Operations Research 49: 444–454.
Lahdelma, R. and Salminen, P. 2002. Pseudo-criteria versus linear utility function in stochastic
multi-criteria acceptability analysis. European Journal of Operational Research 141: 454–469.
Lahdelma, R., Hokkanen, J., and Salminen, P. 1998. SMAA – Stochastic multiobjective accept-
ability analysis. European Journal of Operational Research 106: 137–143.
Lahdelma, R., Miettinen, K., and Salminen, P. 2003. Ordinal criteria in stochastic multicriteria
acceptability analysis (SMAA). European Journal of Operational Research 147: 117–127.
Lahdelma, R., Miettinen, K., and Salminen, P. 2005. Reference point approach for multiple deci-
sion makers. European Journal of Operational Research 164: 785–791.
Lahdelma, R., Makkonen, S., and Salminen, P. 2006. Two ways to handle dependent uncertainties
in multi-criteria decision problems. Omega (in press).
Leskinen, P., Kangas, A., and Kangas, J. 2004. Rank-based modelling of preferences in multi-
criteria decision making. European Journal of Operational Research 158: 721–733.
Leskinen, P., Viitanen, J., Kangas, A., and Kangas, J. 2006. Alternatives to incorporate uncertainty
and risk attitude into multi-criteria evaluation of forest plans. Forest Science 52: 304–312.
Malczewski, J. 1999. GIS and multicriteria decision analysis. Wiley, New York, 392 pp.
Martin, W.E., Schields, D.J., Tolwinski, B., and Kent, B. 1996. An application of social choice
theory to U.S.D.A. Forest Service decision making. Journal of Policy Modelling 18: 603–621.
Mattila, J. 2002. Sumean logiikan oppikirja. Art House, Kustantaja, 289 pp.
Maystre, L.Y., Pictet, J., and Simos, J. 1994. M´ethodes multicrit`eres ELECTRE. Presses Polytech-
niques et Universitaires Romandes, Lausanne.
Miettinen, K. and Salminen, P. 1999. Decision-aid for discrete multiple criteria decision making
problems with imprecise data. European Journal of Operational Research 119: 50–60.
Miettinen, K., Lahdelma, R., Salminen, P. 1999. SMAA-O – Stochastic multicriteria acceptability
analysis with ordinal criteria. Reports of the Department of Mathematical Information Technol-
ogy Series B, Scientiﬁc Computing B5. University of Jyv¨askyl¨a, Finland.
Niskanen, V. 2003. Software computing methods in human sciences. Studies in fuzziness and soft
computing. Springer. Heidelberg, Germany, 280 pp.
Pirlot, M. 1995. A characterization of ‘Min’ as a procedure for exploiting valued preference rela-
tions and related results. Journal of Multi-Criteria Decision Analysis 4: 37–56.
Raju, K.S. and Pillai, L.R.S. 1999. Multicriteria decision making in performance evaluation of an
irrigation system. European Journal of Operational Research 112: 479–488.

--- Page 105 ---

References
97
Rietveld, P. and Ouwersloot, H. 1992. Ordinal data in multicriteria decision making, a stochastic
dominance approach to siting nuclear power plants. European Journal of Operational Research
56: 249–262.
Rogers, M. and Bruen, M. 1998a. A new system for weighting environmental criteria for use within
ELECTRE III. European Journal of Operational Research 107: 552–563.
Rogers, M. and Bruen, M. 1998b. Choosing realistic values of indifference, preference and veto
thresholds for use with environmental criteria within ELECTRE. European Journal of Opera-
tional Research 107: 542–551.
Rogers, M., Bruen, M., and Maystre, L.-Y. 2000. ELECTRE and decision support: methods and
applications in engineering and infrastructure investment. Kluwer, Dordrecht, The Netherlands.
Rondeau, L., Ruelas, R., Levrat, L., and Lamotte, M. 1997. A defuzziﬁcation method respecting
the fuzziﬁcation. Fuzzy Sets and Systems 86: 311–320.
Roy, B. 1968. Classement et choix en pr´esence de points de vue multiples (la m´ethode ELECTRE).
Revue Franc¸aise d’Informatique et de Recherche Op´erationnelle 8: 57–75.
Roy, B. 1991. The outranking approach and the foundations of Electre methods. Theory and Deci-
sion 31: 49–73.
Roy, B., Pr´esent, M., and Silhol, D. 1986. A programming method for determining which Paris
metro stations should be renovated. European Journal of Operational Research 24: 318–334.
Salminen, P., Hokkanen, J., and Lahdelma, R. 1998. Comparing multicriteria methods in the con-
text of environmental problems. European Journal of Operational Research 104: 485–496.
Schafer, G. 1976. A mathematical theory of evidence. Princeton University Press, Princeton, NJ,
297 pp.
Tervonen, T. and Lahdelma, R. 2007. Implementing stochastic multicriteria acceptability analysis.
European Journal of Operational Research 178: 500–513.
Tervonen, T., Figueira, J.R., Lahdelma, R., and Salminen, P. 2007. Towards robust ELECTRE III
with simulation: theory and software of SMAA-III. Submitted manuscript.
Williams, D. 1991. Probability with Martingales. Cambridge Mathematical Textbooks. Cambridge
University Press, Cambridge, 251 pp.
Vincke, Ph. 1992. Multi-criteria decision aid. Wiley, New York, 154 pp.
Yager, R.R. 1978. Fuzzy decision making including unequal objectives. Fuzzy Sets and Systems
1: 87–95.
Yager, R.R. 1988. On ordered weigh averaging aggregating operators in multi-criteria decision
making. IEEE Transactions on Systems, Man and Cybernetics 18: 183–190.
Yager, R.R. 1996. Knowledge-based defuzziﬁcation. Fuzzy Sets and Systems 80: 177–185.
Yu, W. 1992. Aide multicrit`ere `a la d´ecision dans le cadre de la probl´ematique du tri: m´ethodes et
applications. Ph.D. thesis, LAMSADE, Universit´e Paris-Dauphine, Paris.
Zadeh, L.A. 1965. Fuzzy sets. Information and Control 8: 338–353.
Zadeh, L.A. 1978. Fuzzy sets as a basis for theory of possibility. Fuzzy Sets and Systems 1: 3–28.
Zimmermann, H.-J. 1985. Fuzzy set theory – and its applications. Kluwer, Dordrecht, The Nether-
lands, 355 pp.
Zimmermann, H.-J. and Zysno, P. 1980. Latest connectives in human decision making. Fuzzy Sets
and Systems 4: 37–51.

--- Page 106 ---

Chapter 5
Optimization
5.1 Linear Programming
5.1.1 Primal Problem
Linear Programming (LP) is the most common optimization method used in forest
management planning (e.g. Davis et al. 2001; Buongiorno and Gilles 2003). The
idea in LP is to allocate the limited resources optimally. In LP method the plan-
ning problem is described with an objective function which is to be maximized (or
minimized)
max z =
n
∑
j=1
cjxj
(5.1)
subject to some constraints. The constraints can be either output constraints
n
∑
j=1
aijxj ≥bi,
i = 1,...,q
(5.2)
or input constraints
n
∑
j=1
aijxj ≤bi,
i = q+1,..., p.
(5.3)
Constraints are usually expressed as inequalities, but equality constraints (i.e. con-
straints with = instead of ≤or ≥) can also be used. In addition, LP formulation
includes non-negativity constraints
xj ≥0,
∀j = 1,...,n.
(5.4)
In this formulation, each xj is a decision variable to be solved. In forest planning
problems decision variable xj is usually area (ha) or the proportion of area treated
with alternative (activity) j. The coefﬁcients cj tell how much this area produces or
consumes the objective variable when treated with alternative j. For instance, if the
101

--- Page 107 ---

102
5 Optimization
objective is to maximize the revenues, and treatment alternatives are to harvest by
clear-cutting or thinning, the coefﬁcient cj is the revenue per hectare (AC/ha) from
clear-cutting and thinning, respectively. If the decision variable is proportion, then
cij is presented as euros per area available (AC).
An LP problem usually also involves constraints, either output constraints (5.2)
or input constraints (5.3). The right hand sides (RHS, bi) of output constraints tell
how much at least the decision maker requires some commodity i. An example of
output constraints is a requirement that the volume of growing stock should be at
least a certain amount (m3). The RHS’s of input constraints, on the other hand, tell
how much at most the decision maker is able or willing to use a certain input. An
example of the input constraints is the number of working hours the decision maker
is willing to use on forest management. The coefﬁcients aij tells how much the area
treated with treatment j produces or uses commodity i.
The most obvious input constraint in forest management planning problems is
the area available: the total area treated with different alternatives must not exceed
the area available (or the sum of proportions can not exceed one). In the case of area
constraints, the aij coefﬁcients are ones, and bi is the area in hectares (or one in the
case of proportions). In this case, equality constraint is used instead of inequalities.
Finally, all the decision variables are required to be non-negative. This means, how-
ever, no loss of generality of the method, as variables having negative values can be
reformulated using, e.g., the difference between two non-negative variables.
Any solution that satisﬁes all the constraints is called a feasible solution. The
feasible solutions are in a region restricted by constraints, a so-called feasible region.
The best solution among the feasible solutions is the optimum. In LP, if there is a
unique optimal solution, it always is a corner-point in the feasible region.
The following properties of the problem are assumed:
• Linearity
◦The objective function and all constraints need to be formulated so that the
value of objective function (or constraint) is directly proportional to the value
of decision variable.
◦It means, for instance, that the revenue and cost AC/m3 has to be the same
irrespective of the level of the harvests.
• Additivity
◦The value of objective function has to be such that it can be calculated directly
as a sum of the contributions of each individual decision variable.
◦It also means that the decision variables need to be independent of each others.
For instance, an increase in the revenues of one treatment should not affect the
revenues of other treatments.
• Divisibility
◦In LP, the constraints and the objective function need to be such that all the
decision variables are continuous variables. This means, that if there are sev-
eral treatment options for a single forest area, the solution may divide the area

--- Page 108 ---

5.1 Linear Programming
103
to two or more parts with different treatment. The number of such parts is
at most equal to the number of binding input and output constraints. If this
cannot be allowed, integer programming needs to be used.
• Determinism
◦It is assumed that all coefﬁcients a, b and c are known with certainty, for
instance the future growth of the forests and future prices of timber. Thus, it
may be useful to calculate the optimal solution with several assumptions of
prices etc., i.e. to do sensitivity analysis.
The problem is usually solved with a Simplex algorithm (for a method description
see, e.g. Dantzig 1951; Taha 1997; Hillier and Lieberman 2001). In this book, the
examples are solved using the Solver in Excel. For details of using Solver in forestry
problems the readers are referred to Buongiorno and Gilles (2003).
The possible results are:
1. No feasible solution is found
• The constraints are too tight
2. One optimal solution
3. Inﬁnite number of optimal solutions
• The objective function is parallel to a constraint function, and the same objec-
tive function value can be obtained in all points between two corner-points
4. The optimum is inﬁnite
• The problem should be reformulated
Example 5.1. Assume a factory that produces two products, say toy trains and toy
cars. Each train gives a revenue of 3AC, and each car 2AC. Both products require two
kinds of material, say birch and spruce wood. Each train consumes 2dm3 of birch
and 1dm3 of spruce, and each car 1dm3 of birch and 2dm3 of spruce. There is 6dm3
of each species available. The decision variables are the number of produced trains
(x1) and cars (x2).
The problem is to maximize the proﬁts
max z = 3x1 +2x2
subject to
2x1 +x2 ≤6 (birch wood consumption)
x1 +2x2 ≤6 (spruce wood consumption)
x1, x2 ≥0
This simple problem can be solved graphically (Fig. 5.1). The constraints are drawn
to a ﬁgure to be able to see the feasible region. Then, the objective function is drawn
though the origin (0, 0) and moved further and further away from origin. The fur-
thest point where the objective function still is inside the feasible region is the opti-
mal point.

--- Page 109 ---

104
5 Optimization
constraint 2x1+x2≤6
constraint x1+2x2≤6
x1
x2
optimal point
objective function z = 3x1+2x2
feasible
region
Fig. 5.1 Constraints as a function of decision variables deﬁne the feasible region
Example 5.2. Assume a pine forest area of 60 ha. The initial volume per hectare is
180m3/ha, i.e. the total volume in the area is 10,800m3. The harvest revenue is
30AC/m3. The problem is to maximize harvest revenues in a 30-year period so that
the volume in the end would be at least the same as in the beginning, the harvest rev-
enues in the ﬁrst 10-year period would be at least 50,000, and that it would increase
by 5,000AC in each of the later 10-year periods.
The decision variables in this problem are the areas (ha) of the four treatment
alternatives, x1, x2, x3 and x4. The alternative treatments are: to harvest at the ﬁrst
period, harvest at the second period, harvest at the last period and not to harvest
at all. The volume development in these four alternative treatments is presented in
Table 5.1
Then, the objective function is
max z = 5,250x1 +6,600x2 +7,950x3 +0x4,
Table 5.1 Expected volume (m3/ha) of the forest area treated with each of the alternatives in
different periods
Alternative
Initial
2016
2026
2036
Harvest 1
180
5
17.5
52.5
Harvest 2
180
225
5
17.5
Harvest 3
180
225
270
5
No harvest
180
225
270
297

--- Page 110 ---

5.1 Linear Programming
105
Table 5.2 Harvest revenues at each period in these four alternatives
Alternative
2016
2026
2036
Harvest 1
5,250
0
0
Harvest 2
0
6,600
0
Harvest 3
0
0
7,950
No harvest
0
0
0
describing the total harvest revenues over all periods in the area. The area con-
straint is
x1 +x2 +x3 +x4 = 60
the revenue constraints for the three periods are
5250x1 +0x2 +0x3 +0x4 ≥50,000
0x1 +6600x2 +0x3 +0x4 ≥55,000
0x1 +0x2 +7950x3 +0x4 ≥60,000
and the constraint for the volume in the end of the period is
52.5x1 +17.5x2 +5x3 +297x4 ≥10,800.
The non-negativity constraints can be either given implicitly or selected as an option.
The result obtained with Solver is presented in Table 5.3. The resulting level of the
constraints is exactly the given constraint for the area (60 ha), the ﬁrst and second
10-year periods (50,000AC and 55,000AC), and the ﬁnal volume (10,800 m3). Instead,
in the last 10-year period the harvest revenue is greater (64,315AC) than required
(60,000AC). Thus, this constraint was not binding, but there is a 4315AC slack. The
rest of the constraints were binding. The resulting optimal total harvest revenues
were then 169,315AC.
5.1.2 Dual Problem
For each primal problem there is an analogous dual problem. If the primal problem is
a maximization problem, then dual problem is a minimization problem. Vice versa,
if the primal is a minimization problem, dual is a maximization problem. If the
Table 5.3 The solution
Alternative
Area (ha)
Harvest 1
9.52
Harvest 2
8.33
Harvest 3
8.09
No harvest
34.05

--- Page 111 ---

106
5 Optimization
primal problem has a unique solution, so does the dual problem, and the solution to
the dual problem is the same as to the primal problem. If the primal has no feasible
solution (i.e. solution that would satisfy all the constraints), the solution of dual is
inﬁnite, and vice versa. The primal and dual problems are so tightly related that
solving primal automatically produces the solution for dual and vice versa.
The objective function of dual problem is formulated from RHS’s of the primal
problem constraints and so-called shadow prices vi. In the dual problem, the shadow
prices are the decision variables, and objective function and all constraints are
expressed as a function of them. Thus, the number of decision variables in the dual
problem is the same as number of constraints in the primal problem.
In the dual problem, the constraints are formed from the original decision vari-
ables, i.e. there are as many constraints as there were decision variables in the pri-
mal. The right hand sides of the dual constraints are obtained from the coefﬁcients
of the primal objective function. For the problem presented in Formulas (5.1–5.4),
the corresponding dual problem is
min w =
p
∑
i=1
bivi
(5.5)
subject to
p
∑
i=1
aijvi ≥cj,
j = 1,...,n
(5.6)
Thus, if the primal is a maximization problem, the constraints of dual problem are
always ≥type constraints. If the primal is a minimization problem, then the dual
constraints are of ≤type, i.e. (Taha 1997, p. 113)
p
∑
i=1
ai jvi ≤cj,
j = 1,...,n.
(5.7)
The shadow prices, vi i = 1, ..., p, for output constraints are always non-positive
and for the input constraints the shadow prices are always non-negative. For area
constraints (i.e. equality constraints), the shadow prices are unrestricted, meaning
that they can be either positive or negative. For constraints that are not binding, the
shadow prices are zero.
The shadow prices measure, how much the objective function value changes, if
the RHS of one constraint is changed by one unit, and all other things remain equal.
Then, the shadow price for area, for instance, measures the value of one unit of land
in the production. The properties can be derived from the equality
z =
n
∑
j=1
cjxj =
p
∑
i=1
bivi = w
(5.8)
if z is revenue, and bi is the area available, then vi must be the worth of unit area. In
a non-optimal solution ∑n
j=1 cjxj < ∑p
i=1 bivi, i.e. the revenues are less than worth
of the land. Thus, optimal solution is obtained when all resources are completely

--- Page 112 ---

5.1 Linear Programming
107
exploited. The shadow prices can also be used to calculate the reduced cost of an
activity. The reduced costs are calculated as
rcj = cj −
p
∑
i=1
aijvi
(5.9)
The reduced cost can be calculated to all activities that are included in the solution
and those that are not in the solution and also for new activities that have not been
considered at all. If the activity is in fact in the solution, the reduced cost is always
zero. If the activity is not in the solution, the reduced cost is negative: the costs
(calculated using shadow prices) of the alternative are higher than the proﬁts. If
the reduced cost of the new activity is positive, it can proﬁtably be included in the
solution.
Example 5.3. In the example 5.2 the problem was
max z = 175x1 +220x2 +265x3 +0x4
subject to
x1 +x2 +x3 +x4 = 60
5250x1 +0x2 +0x3 +0x4 ≥50,000
0x1 +6600x2 +0x3 +0x4 ≥55,000
0x1 +0x2 +7950x3 +0x4 ≥60,000
52.5x1 +17.5x2 +5x3 +297x4 ≥10,800.
The dual problem for this is
minw = 60 v1 +50,000 v2 +55,000v3 +60,000v4 +10,800v5
subject to
v1 +5250v2 +0v3 +0v4 +52.5v5 ≥175
v1 +0v2 +6600v3 +0v4 +17.5v5 ≥220
v1 +0v2 +0v3 +7950v4 +5v5 ≥265
v1 +0v2 +0v3 +0v4 +297v5 ≥0
Thus, the objective is to minimize the shadow price over the ﬁve constraints. Each
shadow price refers to one constraint. For all constraints except for the area con-
straint, the shadow prices need to be non-positive, as the constraints are output
constraints. For the area constraint (i.e. an equality constraint), the shadow price
is unrestricted. The solver result for this is presented in Table 5.4. For the harvests
in period 3, the shadow price is 0, as the constraint is not binding. For the area con-
straint, the shadow price is 8086.13AC/ha. It means that the optimal harvest revenues
could be increased with this amount, if there were one more unit of land, i.e. it is

--- Page 113 ---

108
5 Optimization
Table 5.4 The solver solution for the dual problem
Constraint
Value
Shadow price
Area
60
8086.13
Period 1
50,000
−0.27
Period 2
55,000
−0.15
Period 3
64315,00734
0
End
10,800
−27.23
the value of one additional hectare of land. The shadow prices for the harvests in
the ﬁrst two periods are negative. It means that the optimal harvest level could be
increased by 0.27 or 0.15m3 if the RHS of these constraints were reduced by 1m3,
or, how much decision maker would need to give up in the optimal harvest level, if
the constraint were increased by 1m3. The shadow price of the last constraint, the
ﬁnal volume, is −27.23. It means that the optimal harvest level could be increased
by 27.23AC, if the constraint were reduced by one m3. In this example the reduced
costs for all the activities are zero, as all the activities are in the ﬁnal solution, i.e.
all treatments have an area. If a new alternative, thinning at second period, were
considered with harvest revenues 4050AC/ha, and volume in each period as
Alternative
Initial
2016
2026
2036
Thinning
180
225
135
202
the reduced cost for this alternative would be
4050−(1·8086.13+0·−0.27+4050·−0.15+0·0+202·−27.23) = 2071.83,
meaning that this new alternative would be included in the optimal solution, if it
were included in the analysis. When it was included in the analysis, the result would
be such that harvesting with clear-cut in second period is no more in the solution
(Table 5.5). Now, its reduced cost is also negative meaning that it is not proﬁtable.
Also the optimal value is better, 216,613AC. The shadow prices for the new con-
straints are presented in Table 5.6. With the new treatment included, the shadow
price of the land has increased. Thus, it relates to the value of land in the produc-
tion, not necessarily to the market value of land.
Table 5.5 The new solution and the reduced costs
Alternative
Area (ha)
Reduced cost
Period 1
9.52
0.00
Period 2
0.00
−5378.57
Period 3
7.55
0.00
No harvest
16.60
0.00
Thinning
26.32
0.00

--- Page 114 ---

5.1 Linear Programming
109
Table 5.6 The new shadow prices
Constraint
Value
Shadow price
Area
60.00
12728.57
Period 1
50,000
−0.99
Period 2
106613.78
0
Period 3
60,000
−0.57
End
10,800
−42.86
5.1.3 Forest Planning Problem with Several Stands
When there are m stands, with nk alternatives for each stand, the problem can be
formulated with
max z =
m
∑
k=1
nk
∑
j=1
ck jxk j
(5.10)
subject to
m
∑
k=1
nk
∑
j=1
ak jixk j ≥bi,
i = 1,...,q
(5.11)
and
m
∑
k=1
nk
∑
j=1
ak jixk j ≤bi,
i = q+1,..., p
(5.12)
nk
∑
j=1
xk j = 1, k = 1,...,m
(5.13)
and
xjk ≥0
∀k = 1,...,m,
j = 1,...,nk
(5.14)
where nk is the number of treatment alternatives, p is the number of constraints, bi
is the RHS value of constraint for criterion variable i, and xk j is the proportion of the
area of stand k on which treatment alternative j is applied. In this case, a separate
area constraint is required for each m stands.
The formulation above is not, however, the only possibility for forestry problems.
A frequently referred classiﬁcation of forestry LP approaches is the one presented
by Johnson and Scheurman (1977). They divided the various LP problem formula-
tions applied to harvest scheduling into two basic types. With Model I, each activity
variable is associated with a particular treatment schedule alternative that covers the
whole planning horizon. The example above follows this Model I formulation. In
Model II, instead, each individual treatment option forms a separate activity vari-
able. It means, for instance that all stands that are clear-cut at the same time, can
be combined into one calculation unit. This means, generally taken, that optimiza-
tion problems formulated according to the Model II typically are greater, and, thus,

--- Page 115 ---

110
5 Optimization
need more calculation capacity to be solved in the same time as the same prob-
lem formulated by Model I. Nevertheless, according to Clutter et al. (1983), some
harvest-scheduling problems might be handled more efﬁciently through a Model II
formulation.
For example, the FORPLAN harvest-scheduling system, applied by the USDA
Forest Service, enables both model types (e.g. Johnson 1977). Instead, in the Nordic
Countries, for instance, LP problems applied in widely used forest planning pack-
ages MELA in Finland and GAYA in Norway can be classiﬁed as belonging to the
Model I type approach.
5.1.4 JLP Software
In MELA and GAYA, an LP technique specially tailored for large Model I type
optimization problems is used. The program is called JLP (Lappi 1992) and its
later version J (http://www.metla.ﬁ/products/J/index.htm). It uses so-called gener-
alized upper bound technique rather than basic SIMPLEX algorithm in solving the
problem. Both in the problem formulation and in solving the problem, the special
features of a forest planning problem are applied.
In JLP it is assumed that a plan is made simultaneously for several treatment
units, e.g. stands. For each stand, one or more treatment schedules are generated.
The model is presented as
max z =
p
∑
k=1
a0k xk +
q
∑
k=1
b0kzk
(5.15)
subject to
ct ≤
p
∑
k=1
atkxk +
q
∑
k=1
btkzk ≤Ct,
t = 1,...,r
(5.16)
xk −
m
∑
i=1
ni
∑
j=1
xij
kwij = 0,
k = 1,..., p
(5.17)
ni
∑
j=1
wij = 1,
i = 1,...,m
(5.18)
wij ≥0,
∀i, j
(5.19)
zk ≥0,
∀k
(5.20)
The objective function is a sum of p interesting input and output variables xk and
q other decision variables zk. Thus, this formulation allows for maximizing with
respect to several criteria at the same time, using ﬁxed constants a0k that can be
given by the decision maker. The other decision variables in the objective function
include, for instance, slack variables used for goal programming (see Section 5.2).
The objective function (5.15) and constraints (5.16) are formulated so that ex-
plicit summation across the separate stands is not needed. The output and input

--- Page 116 ---

5.2 Goal Programming
111
variables are directly presented at forest estate level variables xk, which should be
fairly intuitive to the decision makers. Instead, the summation is carried out auto-
matically by the system in the constraint (5.17). There, it is set that the aggregated
value of xk is the sum of xij
k, (i.e. the amount of variable k produced or consumed by
unit i if schedule j is applied) over m treatment units and the ni treatment schedules
in these treatment units, weighted with the proportion of area in each unit i treated
according to schedule j, wij. It should be noted that xij
k is expressed in a stand level,
not per hectare (RHS of 5.18 is 1).
The coefﬁcients c and C denote the lower and upper bounds given to the utility
constraints. In usual LP formulation, these kinds of constraints need to be presented
using two separate constraints for the upper and lower bound. In JLP, these are dealt
with the knowledge that only one of the bounds can be binding at a time.
The constraint that the proportions of the treatment schedules in each stand must
equal one is also made automatically. The constraint is embedded to constraints of
the form (5.17) using the generalized upper bound technique (Lappi 1992, p. 108)
so that the number of active constraints in the problem can be effectively reduced.
This formulation can be used for exactly the same problems as the earlier for-
mulation, and it produces identical solutions. However, this formulation is more
general than the one presented earlier. For instance, it is possible to formulate a
constraint that the harvesting level at period 2 must be greater than that in the ﬁrst
period, and the difference can be set to greater or equal than zero using constants
a and b in the constraint (5.16). In the earlier formulation, the difference variable
needs to be explicitly formulated.
5.2 Goal Programming
Goal programming (GP) is a special case of linear programming. It was ﬁrst de-
scribed by Charnes and Cooper (1961). A forestry application of GP was ﬁrst
presented by Field (1973). After that, several applications of GP to forest manage-
ment planning have been presented (e.g. D´ıaz-Balteiro and Romero 2001, 2003).
Mendoza (1987) provided an overview of GP formulations and extensions with
special reference to forest planning. Tamiz et al. (1998) provided a more general
overview of GP elaborations and applications. By using goal programming, some
crucial problems of standard linear programming (LP) can be avoided. However, the
GP problem is solved similarly as in standard linear programming.
In standard linear programming, a single overriding management goal is as-
sumed, which is represented by the objective function. For interpretational purposes,
it is recommendable to use a single-valued objective function, the variables of which
are commensurable and compatible. Other objectives are taken into account through
constraints. The description of management goals by standard LP constraints may
be unsatisfactory for several reasons. The selection of the goal to be handled as the
objective function is arbitrary. The objective function is optimized within the fea-
sible region deﬁned by the rigid LP constraints; thus, the constraints may, in fact,

--- Page 117 ---

112
5 Optimization
receive a greater weight than the objective. Rigid constraints may also cause infea-
sibility problems.
In comparison to standard LP, GP facilitates the incorporation of decision maker’s
preferences into optimization problems. In addition, GP formulations may better re-
ﬂect the multicriteria nature of forest management. However, GP does not solve all
the problems related to LP. For example, proportionality, divisibility and additivity
assumptions of LP also hold with GP and may be problems.
In GP, all the objectives are handled in the same manner: they are expressed by
goal constraints. A goal constraint includes goal variables that measure the amount
by which the contribution of all activities to the goal in question falls short or ex-
ceeds the goal level (i.e. the right hand side of the constraint). The objective function
of a GP problem is to minimize the sum of the (weighted) deviations from all target
levels associated with the management goals. When goal variables are included in a
constraint, the problem of infeasibility linked to the constraint is avoided.
The general formulation of a GP problem is
min
p
∑
i=1
w−
i D−
i +w+
i D+
i
(5.21)
subject to
n
∑
j=1
aijxj +D−
i −D+
i = Gi,
i = 1,..., p
(5.22)
n
∑
j=1
aijxj ≤(or = or ≥)bi,
i = p+1,...,P
(5.23)
xj, D−
i , D+
i ≥0∀i, j
(5.24)
where (5.21) is the goal programming objective function, (5.22) is a goal constraint,
(5.23) is an ordinary LP constraint, p is the number of goals represented by goal
constraints and P is the total number of constraints.
In the objective function and in the goal constraints D−
i is the underachievement
deviation variable and D+
i is the overachievement deviation variable. Both of the de-
viation variables are required to be non-negative (5.24). Minimizing the differences
ensures that one of these deviation variables is always zero, and the other can de-
viate from zero. If the underachievement variable is greater than zero, then amount
D−
i needs to be added to ∑n
j=1 ai jxj in order to achieve the target level Gi for goal i,
and if D+
i is greater than zero, this amount needs to be subtracted from it to achieve
the goal.
The deviations can be weighted according to their importance, in the objective
function w−
i is the weight given to each unit of underachievement deviation; w+
i
is the weight given to each unit of overachievement deviation. The weights can be
interpreted to have two separate roles in the problem. As scaling factors, weights w+
i
and w−
i reduce deviations expressed in different measurement units to a common
unit of measurement. As importance weights, they describe the relative importances
of the goal variables. Because of these intermingling roles, the interpretation of
weights as relative importances of goals, respectively, is not unambiguous.

--- Page 118 ---

5.2 Goal Programming
113
Other deﬁnitions are the same as before, xj is the jth activity variable; aij is the
contribution to goal i made by each unit of activity j and n is the number of activity
variables. Standard LP constraint may be used if any deviation from a goal target
level is unacceptable. Also, constraint with only one deviation variable, either D+
i
or D−
i , can be applied.
Crucial issues when utilizing GP include: (i) specifying the target levels of the
goals, (ii) determining the weights used in the objective function, and (iii) making
goals measured with different units commensurable. Any mathematical program-
ming problem has to be formulated so that the solution is as well as possible in line
with the preferences of the decision maker. Prior information on the preferences of
the decision maker is needed to formulate the problem appropriately.
Specifying a set of a priori relative weights for the goals is often found to be
difﬁcult. Several methods for estimating the weights through an interactive process
have been presented. Unfortunately, for most decision makers it is difﬁcult to supply
the right information concerning his preferences, required to determine the search
direction and the step-size in this direction. The better the ﬁrst problem formulation,
the faster the optimal solution can be found. In the very ﬁrst problem formulation,
some a priori weights are always required.
Kangas and Pukkala (1992) presented a decision theoretic approach to formu-
lating a forestry goal programming problem. It differs from normal GP procedures
with respect to the determination of the goal target levels and weights of deviations
from these desired achievement levels. In their application it was assumed that the
greatest possible sub-utility with respect to each objective included in the objective
function is obtained at its maximum or minimum level.
First, the greatest or smallest attainable target level of each goal constraint was
solved. This target level (Gu−max i) was considered to represent the greatest pos-
sible sub-utility, referring to the objective in question. The goal objective was to
minimize the weighted sum of relative deviations from the maximum or minimum
attainable target levels, referred to as aspiration levels. Weights were determined
using the Analytic Hierarchy Process (Saaty 1980).
Thus, the formulation of the GP model was
min
p
∑
i=1
wiDi
Gu−max i
(5.25)
subject to
n
∑
j=1
aijxj +D−
i = Gu−max i,
i = 1,...,k
(5.26)
n
∑
j=1
aijxj−D+
i = Gu−max i,
i = k +1,..., p
(5.27)
n
∑
j=1
aijxj ≤(or ≥)bi,
i = p+1,...,P
(5.28)
xj, D−
i , D+
i ≥0∀i, j
(5.29)

--- Page 119 ---

114
5 Optimization
Table 5.7 The forest development
Alternative
Initial
Period 1
Period 2
Period 3
Thinning 1
180
90
153
229.5
Thinning 2
180
225
135
216
Harvest 3
180
225
292.5
5
No harvest
180
225
292.5
351
where Di = D−
i when it is a question of an objective producing the greatest sub-
utility at its maximum level; Di = D+
i when it is a question of an objective producing
the greatest sub-utility at its minimum level; k is the number of objectives producing
the greatest sub-utility at their maximum levels; p −k is the number of objectives
producing the greatest sub-utility at their minimum levels; Gu−max i, i = 1, ..., k
is the maximum attainable value of a goal variable; Gu−max i, i = k, ..., p is the
minimum attainable value of a goal variable.
Example 5.4. Assume again a forest area of 60 ha with initial volume 180m3/ha.
The planning horizon is 30 years, and divided to three 10-year periods. Four treat-
ment options are considered for this area, thinning at the ﬁrst period, thinning at
second period, clear-cut at third period and no harvests. The forest is assumed to
develop according to Table 5.7 and the resulting incomes according to Table 5.8.
The decision maker has set goals for the incomes from the three periods, as well
as for the volume at the third period. The goals are, 60,000AC for each period and
14,000 m3 for the ﬁnal volume. The problem is formulated as
Minz = D−
1 +D+
1 +D−
2 +D+
2 +D−
3 +D+
3 +D−
e +D+
e ,
describing the deviations from the four goals. The area constraint is the same as in
earlier example,
x1 +x2 +x3 +x4 = 60
the revenue constraints for the three periods are now
2,700x1 +0x2 +0x3 +0x4 +D−
1 −D+
1 = 60,000
0x1 +4,050x2 +0x3 +0x4 +D−
2 −D+
2 = 60,000
0x1 +0x2 +8,625x3 +0x4 +D−
3 −D+
3 = 60,000
Table 5.8 The incomes from these alternatives
Alternative
Period 1
Period 2
Period 3
Thinning 1
2,700
0
0
Thinning 2
0
4050
0
Harvest 3
0
0
8,625
No harvest
0
0
0

--- Page 120 ---

5.3 Integer Programming
115
and the constraint for the volume in the end of the period is
5x1 +351x2 +229.5x3 +216x4 +D−
e −D+
e = 14,000.
The result is to thin 6.96 ha in the ﬁrst period, 16.01 in the second period, clear-cut
22.22 ha in the third period and leave 14.81 ha not harvested.
All the income goals for three periods are achieved, so that corresponding de-
viation variables are zero. The only deviation variable not at a zero level is that of
underachievement of end volume, which has value 46.96. Thus, the end volume is
13953.04m3. This is mostly due to the fact that the goals are in different units, and
thus goals with larger numbers are given implicitly more value. If a weight 30 is
given to the deviations of the end volume, i.e. minimizing
Minz = D−
1 +D+
1 +D−
2 +D+
2 +D−
3 +D+
3 +30D−
e +30D+
e ,
the results would be a bit different. Then, the optimal solution would be to thin
6.96 ha in the 1st period, 16.39 in the 2nd period, clear-cut 21.84 ha in 3rd period
and to leave 14.81 ha not harvested. It can be interpreted that 30 is then the price
given to the standing volume, which is the same as the price of harvested volume. In
this case, the deviation D−
1 from the goal would be nonzero, namely 1043.47AC for
the 1st period. Thus, if the goals cannot be expressed in the same units, they should
be weighted appropriately (e.g. Kangas and Pukkala 1992).
5.3 Integer Programming
In some cases the decision variables can only have integer values, for instance the
number of employees in an enterprise is an integer variable. Such problems can be
solved using Integer Programming (IP). In some cases part of the variables can have
integer values while the rest of them are continuous. Such problems call for Mixed
Integer programming (MIP). A special case of integer variables is a case, where only
binary values (0 and 1) are allowed. Examples of binary variables are, for instance,
transportation routes. It is not possible to take a part of any one route, but one needs
to follow one route from beginning to end. The problems caused by divisibility (e.g.
division of calculation units for different treatment options) may also be avoided by
applying Integer Programming IP.
Example 5.5. In example 5.1, the problem is clearly an integer problem: one can
only produce whole toys. The solution to problem 5.1 was an integer solution, but if
the other constraint were slightly changed, so that there is 7dm3 of spruce available,
the optimal solution would not be an integer solution anymore. In this problem, the
optimal integer solution can also be found graphically. In Fig. 5.2 all the possible
integer solutions are presented with dots. In the example, the optimal solution is to
produce 1.67 trains and 2.67 cars, with revenue 10.33AC. The optimal integer solution
is to produce two pieces of both trains and cars, with revenue 10AC, i.e. less than the
optimal revenue in the original problem.

--- Page 121 ---

116
5 Optimization
constraint 2x1+x2≤6
constraint x1 + 2x2≤7
x1
x2
optimal point
objective function z = 3x1+2x2
Fig. 5.2 The possible integer solutions
The optimum of the integer problem can at best be as good as the solution of the
ordinary LP problem. Thus, the IP solution is always bounded by the original LP
solution. This can be used when solving the IP problems.
There are two popular ways of solving the integer problems, namely the branch-
and-bound algorithm and cutting plane method (Taha 1997). These algorithms ex-
ploit normal Simplex algorithm and computing power. The strategy includes three
steps (Taha 1997, p. 384):
1. Relax the solution space of the ILP by replacing any binary value y with the
continuous range 0 ≤y ≤1, and deleting the integer restrictions on all the integer
variables. The result of the relaxation is a regular LP.
2. Solve the LP problem, and identify its continuous optimum.
3. Starting from the continuous optimum point, add special constraints that iter-
atively modify the LP solution space in a manner that will eventually give an
optimum point that satisﬁes the integer requirements.
In branch-and-bound, the special constraints are two additional constraints. They
are such that if an optimal solution to integer variable x1 was 0.5 in the solution, it is
in the next phase required to be either x1 ≤0 or x1 ≥1. As both of these constraints
cannot be satisﬁed at the same time, two new LP problems are formed from the
original one, with one additional constraint in both of them. Then, both these new
problems are solved, i.e. the problem is branched to two. If needed, the problem is
branched further and further, and the best solution found this way is ﬁnally selected.
Thus, integer problems can be much harder to solve than ordinary LP problems.
However, the optimal solution to the original problem can only be the solution of
one of these new problems. In some cases it is possible to determine that the search

--- Page 122 ---

5.3 Integer Programming
117
Table 5.9 The problem data
Variable
No harvest
Thinning
Clear-cut
Stand 1
Harvest volume
0
559
1,260
End volume
1,281
798
21
Stand 2
Harvest volume
0
762
1770
End volume
1,800
1,098
18
Stand 3
Harvest volume
0
585
1,170
End volume
1,170
702
8
needs not to be continued in one of the branches, since better results can be obtained
from other branches. Then it is possible to intelligently reduce the work needed.
Example 5.6. In the example 5.5, the optimal solution to the original problem was to
produce 1.67 trains and 2.67 cars with revenue 10.33. As the problem is an integer
problem, in the ﬁrst branching of branch-and-bound technique x1 is required to be
either x1 ≤1 or x1 ≥2. The resulting two solutions are:
LP1: x1 = 1, x2 = 3 and objective function value is 9.
LP2: x1 = 2, x2 = 2 and objective function value is 10.
As both of these branches produced an integer solution, no further branching is
needed. Then, the better of these solutions is selected, namely the solution LP2.
Example 5.7. Assume a forest area with three different stands and three manage-
ment options for each of them; not harvesting, thinning and clear-cutting. The prob-
lem is to maximize the harvested volume while the growing stock volume needs to
be at least 2,300m3. The harvesting volumes and remaining growing stock volumes
for the three stands and three alternatives are presented in Table 5.9. Note that in this
example both these volumes are given in m3 per whole stand area, not per hectare.
As a normal LP problem, this problem can be presented as
Max z = 0x11 +559x12 +1260x13 +0x21 +762x22
+1770x23 +0x31 +585x32 +1170x33,
where xi j is the proportion of stand i managed with treatment alternative j subject
to
x11 +x12 +x13 = 1
x21 +x22 +x23 = 1
x31 +x32 +x33 = 1
indicating that in each stand, the sum of proportions must be equal to one and
1281x11 +798x12 +21x13 +1800x21 +1098x22
+18x23 +1170x31 +702x32 +8x33 ≥2,300

--- Page 123 ---

118
5 Optimization
Table 5.10 Proportions of treatment alternatives
No harvest
Thinning
Clear-cut
Stand 1
0
1
0
Stand 2
0
0.72
0.28
Stand 3
0
1
0
is the constraint for end volume. The resulting harvest volume is 2184.3m3, and the
proportions of the treatments in each stand are presented in Table 5.10. The solution
is an integer solution in stands 1 and 3, but stand 2 is divided. If an integer solution
is made by rounding this solution, i.e. thinning the stand 2, the resulting harvest
volume is 1,906m3, and the corresponding end volume is 2,598m3. Thus, the end
volume is much larger than required and the harvesting volume is clearly worse than
in LP result.
If the decision variables x11–x33 are required to have binary values, the resulting
harvest volume is 1,932 m3, and the corresponding end volume is 2,387 m3. The
MIP result is clearly more efﬁcient than the solution obtained from rounding. The
resulting treatment recommendations are also different: in MIP solution stand 1 is
not harvested, stand 2 is thinned and stand 3 is clear-cut.
5.4 Uncertainty in Optimization
Mathematical programming, especially linear programming (LP), is still perhaps
the most often applied approach to optimisation calculations of forest management
planning at forest area level. When numerical optimisation is applied in forest plan-
ning, however, uncertainty about forest development is often ignored and the opti-
mization is done as if under certainty. This can lead to two kinds of results. First,
a nonoptimal alternative may be chosen. This being the case the realised objective
function value is less than the optimal objective function value. This loss is called
“regret” (Bell 1982). Second, the true worth of the optimal solution may be overes-
timated. This kind of loss is called “disappointment” (Bell 1985).
Effect of uncertainty on forest planning has been studied rather widely in the con-
text of LP (e.g. Thompson and Haynes 1971; Hoganson and Rose 1987;
Pickens and Dress 1988; Pickens et al. 1991; Gove and Fairweather 1992; Hof
et al. 1992, 1996; Weintraub and Abramovich 1995; Boyschuk and Martell 1996;
Forboseh et al. 1996). In an LP problem, there may be uncertainty concerning the
objective function, the values of the right hand sides of the constraints and in the
technical coefﬁcients (coefﬁcients describing how the actions affect the objectives).
It has been noted that uncertainty about coefﬁcients of the objective function
causes optimization to be optimistically biased. It means that the gains of the opti-
mal solution will be overestimated, if there are errors in the objective function co-
efﬁcients (Hobbs and Hepenstal 1989). Errors in the right hand sides of constraints
have the opposite effect (Itami 1974). Uncertainty about the production coefﬁcients

--- Page 124 ---

5.4 Uncertainty in Optimization
119
causes exaggeration of the gains of the optimal solution. The obtained solutions
may even be infeasible due to the uncertainty (Pickens and Dress 1988). The above
mentioned problems concern also other optimization methods than LP, for instance
heuristic methods or non-linear programming (e.g. Kangas and Kangas 1999).
The usual LP method does not consider the underlying uncertainty. Then, the
obtained solutions may not be feasible. The decision maker may, for example, give
a constraint that the population size should be at least the minimum viable popula-
tion size. However, it is possible that the population size in the chosen solution is
not viable due to the uncertainty concerning the value of the constraint. This can
be prevented, if the uncertainty is taken into account using chance-constrained opti-
mization, by formulating the constraint ∑n
j=1 aijxj ≥bi as (Hof and Pickens 1991)
P =
 n
∑
j=1
aijxj ≥bi

≥ϕi
(5.30)
In this formula the probability of the solution to be feasible is set to φi, which may
be, for instance, 95%. This problem can be solved with the usual LP method, by
taking a new constraint level ˜bi from the 95% percentage point of the cumulative
distribution of bi. Thus, the value of the constraint is increased in order to choose a
solution that is on the safe side despite the uncertainty. If a critical population size
is used as a constraint, the actual population size needs to be the larger the more
uncertainty there is about the critical value (Haight and Travis 1997).
Uncertainty about the parameters a, i.e. in how the population reacts to the treat-
ment, can also be considered using chance-constrained optimization. If the coefﬁ-
cients a are assumed to be normally distributed, constraint ∑n
j=1 aijxj ≥bi can be
presented as (Hof et al. 1992)
n
∑
j=1
αijxj +δi
 n
∑
j=1
n
∑
h=1
xjxhσ2
i jh ≥bi
(5.31)
where αij is the mean of aij and σ2
i jh is the covariance of aij and aih, and δi is the
standard normal deviate corresponding to the required probability. This formulation
follows from ∑n
j=1 aijxj being normally distributed with mean ∑n
j=1 αijxj and vari-
ance ∑n
h=1 ∑n
j=1 xj xh σ2
ijh. If the constraints are assumed to be mutually independent,
any number of this type of constraints can be included in the problem formulation.
The problem is a non-linear optimization problem, which can be solved, for exam-
ple, with simulation (Pickens et al. 1991) or with a so-called cutting plane algorithm
(Weintraub and Abramovich 1995).
It can be required that not only each constraint is met with a given probability,
but that a set of constraints is met with a given probability (joint probability chance
constraint). Also, it is possible to maximize the probability for meeting the con-
straints instead of using a constant probability (Hof and Pickens 1991; Hof et al.
1992).
The above mentioned formulation is suitable, if the uncertainty involved is ran-
dom variation. If the uncertainty is due to ignorance or ambiguity, this formulation

--- Page 125 ---

120
5 Optimization
does not apply. If the value of critical threshold, for example, is an expert opinion,
the threshold may be given as an interval value. Then, fuzzy linear programming
may be utilised (e.g. Mendoza and Sprouse 1989; Bare and Mendoza 1992; Men-
doza et al. 1993). The applications based on fuzzy linear programming and fuzzy
goal programming are also numerous (e.g. Duckstein et al. 1988; Mendoza and
Sprouse 1989; Pickens et al 1991; Bare and Mendoza 1992; Mendoza et al. 1993;
Tecle et al. 1994; Hof et al. 1995; Ells et al. 1997). Even one LP application involv-
ing possibility theory has been published (Krcmar et al. 2001).
5.5 Robust Portfolio Modelling
5.5.1 Principles of the Method
Robust Portfolio Modelling (RPM) is a decision support methodology for analyzing
large-scale project portfolio problems (Liesi¨o et al. 2007a). Portfolio problems refer
to decision situations, where only a subset of possible projects can be implemented
with available resources in recognition of multiple criteria. Examples of these kinds
of situations are different funding decisions and, in forestry context, selection of the
cutting areas among the forest stands that can be cut during the speciﬁc time period
subject to, e.g., sustainable cutting level and labour constraints.
The RPM method includes the following phases (see also Fig. 5.3):
(i) Weight information, i.e. loose statements concerning the importances of the
decision criteria is produced
(ii) Project performances and possible uncertainties related to them are deﬁned
(iii) Constraints are deﬁned
(iv) Efﬁcient (non-dominated) portfolios are generated
(v) The performance measures for projects and portfolios that help to analyze their
robustness are calculated
Core projects
(treatment
alternatives)
-> SELECT
Borderline
projects
-> FOCUS ON
Exterior
projects
-> DISCARD
 Large set of 
 projects 
 Multiple criteria
Resource
constraints
Incomplete
information
Compute
non-
dominated
portfolios
Selected
Core
projects
Discarded
exterior
projects
Additional
information
Loose
statements
on e.g.
weights
Preceding
exter.
Add. exter.
Borderline
Add.core
Preceding
core
Updated
N-d-
portfolios
Decision
rules,
heuristics
Negotiation,
iteration
Fig. 5.3 RPM-decision support process (Liesi¨o et al. 2007a)

--- Page 126 ---

5.5 Robust Portfolio Modelling
121
In phase (i) the decision makers’ uncertain preferences are included in the speciﬁed
additive weighting function (see Chapter 3). Incomplete information about criterion
weights can be captured through linear inequalities (e.g. Salo and Punkka 2005) and
also by statistical models that measure the uncertainties of the preference informa-
tion (Alho et al. 2001; Leskinen 2001). For example, the decision maker may be
able to deﬁne only that criterion i is the most important one, but she is not able to
deﬁne the importance order of other criteria. In phase (ii) the uncertain project per-
formances are deﬁned, e.g., through intervals (Liesi¨o et al. 2007a). Both uncertainty
sources affect the overall values of the individual projects and therefore the contents
of the efﬁcient portfolio. If the prevailing uncertainties increase, also the number of
potentially efﬁcient portfolios increases. In addition, also the deﬁned constraints or
project costs (iii) may be uncertain (Liesi¨o et al. 2007b).
The above listed uncertainties may result in extremely large number of potential
non-dominated portfolios. Liesi¨o et al. (2007a, b) present dynamic programming
based formulations for determining all potential non-dominated portfolios. The al-
gorithms are supported by examinations concerning the efﬁcient use of resources
and whether the portfolio belongs to the non-dominated set.
Difﬁculties in obtaining complete and correct preference and project perfor-
mance information suggest that robust solutions that perform reasonably well across
the full range of different parameter values should be found and examined more
carefully. For this purpose, RPM includes a calculation of a core index (Liesi¨o
et al. 2007a). If the core index of a project is 1, the project is included in all non-
dominated solutions and it is called as a core project. If the value of the core index
is 0, the project has not been included in any non-dominated solution and it is
called as an exterior project. If the value of the core index is between 0 and
1, the project has been included in some portfolios and it is called a borderline
project. In this phase, the decision maker should concentrate on examining these
borderline projects aiming to decrease their number. If the decision maker is able
to express her preferences or project performance measures more accurately af-
ter she has inspected the results, and if the made changes only narrow the ini-
tial variation, the number of non-dominated portfolios and borderline projects de-
creases and the amount of core and exterior projects increases. This is one way
to proceed towards more robust solution in phase (v). In addition, the decision
maker may apply different project and portfolio level decision rules, interactive
decision support and subjective elicitation in ﬁnal selection phase (Liesi¨o et al.
2007a).
5.5.2 Use of RPM in Forest Planning
The effects of uncertainties in, e.g., forest owner’s preferences or stand inventory
data from the viewpoint of the resulting forest plans may be twofold. Firstly, the
stand-level and planning-area level outcomes (e.g. harvestable timber volume) are
incorrect, but the treatment recommendations for the stands are correct. As a result,
the “correct” outcome from the stand will be realized when the treatment is carried

--- Page 127 ---

122
5 Optimization
0
0.2
0.4
0.6
0.8
1
min
a
b
max
Value of objective variable
Priority
0.9
Fig. 5.4 An example of three different aspiration levels between values a and b that were deﬁned
by the forest owner (Muinonen et al. 2007)
out. Secondly, the stand-level and planning area level outcomes are incorrect and
also the treatment recommendations for some stands (e.g. timing of thinning) are
incorrect.
RPM like approaches that utilize optimisation, Monte Carlo simulations and cal-
culations of the robustness measures can be rather directly adopted to many kinds
of forest management related decision problems. Muinonen et al. (2007) examined
the effects of forest owner’s preference uncertainties in a way that has similarities
with the RPM. Their analysis included uncertainties that were generated from the
inconsistent pairwise comparison data and uncertain aspiration level that concerned
the amount of cuttings during the ﬁrst planning period.
Example 5.8. Uncertainties in the cutting amount goal
Forest owner may not be able to deﬁne exactly e.g., the cutting amount she wants
to achieve during certain time-period. One possibility to overcome this problem
is to use multi-attribute utility function and sub-utility functions as the objective
function. The uncertainty related to the aspired amount of certain objective variable
can be taken into account by varying the point where the sub-utility reaches the
value of 0.9 or 1.0. In the Fig. 5.4, these points have been drawn randomly from
a uniform distribution between the values a and b, which describes the decision
maker’s uncertain aspiration zone. Thousand realizations were derived between the
deﬁned values and they were included in the objective function that was optimized.
Note however, that reaching the aspiration point depends, e.g. on the relative weights
of the used objective variables. In addition, exceeding the aspiration point is in this
example not penalized, only the marginal utility is smaller.
After the preference uncertainties have been included in the objective function,
optimization calculations are carried out and efﬁcient forest plans can be produced
by utilizing techniques described earlier in this chapter and Chapter 6.

--- Page 128 ---

References
123
40%
50%
60%
70%
80%
90%
100%
4
5
6
15
22
28
30
36
40
44
47
48
56
stand number
proportion
2/8
2/8
2/5
3/6
2/7
2/5
2/10
2/8
2/6
2/8
2/5
2/8
2/4
Fig. 5.5 The stand-level result from optimisation calculations for 13 uncertain stands. At the right
side of the ﬁgure, e.g. the number 2/4 means that four treatment alternatives were simulated for the
stand and only two of them became selected in the created forest plans. The proportion refers to
the core index of the selected treatment alternative
In addition to the described example, the RPM based approach can be utilized in
several other forestry related decision problems. For example, it is suitable for op-
erational harvest scheduling problems, funding decisions concerning voluntary bio-
diversity protection (e.g. Punkka 2006) and many other selection problems where,
e.g. budget constraints cause that all projects can not be carried out at the same time.
Example 5.9. The result of recognizing the uncertainties in the owner’s aspira-
tion level
The 1,000 uncertain aspiration levels were included in the objective function and
1,000 efﬁcient forest plans were produced by utilizing simulated annealing heuris-
tic technique (Chapter 6) in the optimization. The result was that the uncertainties
affected only 13 stands (the total amount of stands was 62). In addition, only two or
three treatment alternatives became selected for these stands (Fig. 5.5).
References
Alho, J.M., Kolehmainen, O., and Leskinen, P. 2001. Regression methods for pairwise comparisons
data. In: Schmoldt, D.L., Kangas, J., Mendoza, G.A., and Pesonen, M. (Eds.). The analytic
hierarchy process in natural resource and environmental decision making, Kluwer, Dordrecht,
pp. 235–251.
Bare, B.B. and Mendoza, G.A. 1992. Timber harvest scheduling in a fuzzy decision environment.
Canadian Journal of Forest Research 22: 423–428.
Bell, D.E. 1982. Regret in decision making under uncertainty. Operations Research 30: 961–981.
Bell, D.E. 1985. Disappointment in decision making under uncertainty. Operations Research 33: 1–
27.
Boychuk, D. and Martell, D.L. 1996. A multistage stochastic programming model for the analysis
of risks in forest management and silvicultural investments. Forest Science 42: 10–26.

--- Page 129 ---

124
5 Optimization
Buongiorno, J. and Gilles, J.K. 2003. Decision methods for forest resource management. Acad-
emic, San Diego, CA, 439 pp.
Charnes, A. and Cooper, W.W. 1961. Management models and industrial applications of linear
programming, Vol 1. Wiley, New York.
Clutter, J.L., Fortson, J.C., Pienaar, L.V., Brister, G.H., and Bailey, R.L. 1983. Timber management.
A quantitative approach. Wiley, New York.
Dantzig, G.B. 1951. Maximization of a linear function of variables subject to linear inequalities.
In: Koopmans, T.C. (Ed.). Activity analysis of production and allocation. Wiley, New York.
Davis, L.-S., Johnson, K.N., Bettinger, P.S., and Howard, T.E. 2001. Forest management – to sus-
tain ecological, economic and social values. 4th edn. McGraw-Hill, New York, 804 pp.
D´ıaz-Balteiro, L. and Romero, C. 2001. Combined use of goal programming and the analytic hier-
archy process in forest management. In: Schmoldt, D.L., Kangas, J., Mendoza, G., and Pesonen,
M. (Eds.). The analytic hierarchy process (AHP) for natural resource and environmental deci-
sion making. Managing Forest Ecosystems, Vol. 2. Kluwer, Dordrecht, pp. 81–95.
D´ıaz-Balteiro, L. and Romero, C. 2003. Forest management optimization models when carbon
captured is considered. A goal programming approach. Forest Ecology and Management 174:
447–457.
Duckstein, L., Korhonen, P., and Tecle, A. 1988. Multiobjective forest management: a visual, in-
teractive, and fuzzy approach. In. Kent, B.M. and Davis, L.S. (Eds.). The 1988 Symposium on
Systems Analysis in Forest Resources. USDA Forest Service. General Technical Report RM-
161, pp. 68–74.
Ells, A., Bulte, E., and van Kooten, G.C. 1997. Uncertainty and forest land use allocation in British
Columbia: Vague priorities and imprecise coefﬁcients. Forest Science 43: 509–520.
Field, D.B. 1973. Goal programming for forest management. Forest Science 19: 125–135.
Forboseh, P.F., Bragee, R.J., and Pickens, J.B. 1996. A strategy for multiproduct stand management
with uncertain prices. Forest Science 42: 58–66.
Gove, J.H. and Fairweather, S.E. 1992. Optimizing the management of uneven-aged forest stands:
a stochastic approach. Forest Science 38: 623–640.
Haight, R.G. and Travis, L.E. 1997. Wildlife conservation planning using stochastic optimization
and importance sampling. Forest Science 43: 129–139.
Hillier, F.S. and Lieberman, G.J. 2001. Introduction to operations research. 7th edn. McGraw-Hill,
New York, 1214 pp.
Hobbs,
B.F.
and
Hepenstal,
A.
1989.
Is
optimization
optimistically
biased?
Water
Resources Research 25: 152–160.
Hof, J.G., Kent, B.M., and Pickens, J.B. 1992. Chance constraints and chance maximization with
random yield coefﬁcients in renewable resource optimization. Forest Science 38: 305–323.
Hof, J.G. and Pickens, J.B. 1999. Chance-constrained and chance-maximizing mathematical pro-
grams in renewable resource management. Forest Science 37: 308–325.
Hof, J.G., Pickens, J.B., and Bartlett, E.T. 1995. Pragmatic approaches to optimization with random
yield coefﬁcients. Forest Science 41: 501–512.
Hof, J.G., Bevers, M., and Pickens, J. 1996. Chance-constrained optimization with spatially auto-
correlated forest yields. Forest Science 42: 118–123.
Hoganson, H.M. and Rose, D.W. 1987. A model for recognizing forestwide risk in timber man-
agement scheduling. Forest Science 33: 268–282.
Itami, H. 1974. Expected objective value of a stochastic linear program and the degree of uncer-
tainty of parameters. Management Science 21: 291–301.
Johnson, K.N. and Scheurman, H.L. 1977. Techniques for prescribing optimal timber harvest
and investment under different objectives – discussion and synthesis. Forest Science Mono-
graphs 18.
Kangas, A. and Kangas, J. 1999. Optimization bias in forest management planning solutions due
to errors in forest variables. Silva Fennica 33: 303–315.
Kangas, J. and Pukkala, T. 1992. A decision theoretic approach applied to goal programming of
forest management. Silva Fennica 26: 169–176.

--- Page 130 ---

References
125
Krcmar, E., Stennes, B., van Kooten, G.C., Vertinsky, I. 2001. Carbon sequestration and land man-
agement under uncertainty. European Journal of Operational Research 135: 616–629.
Lappi, J. 1992. JLP: A linear programming package for management planning. Finnish Forest
Research Institute. Research Notes 414.
Leskinen, P. 2001. Statistical methods for measuring preferences. University of Joensuu, Publica-
tions in Social Sciences 48.
Liesi¨o, J., Mild, P., Salo, A. 2007a. Preference programming for robust portfolio modeling and
project selection. European Journal of Operational Research 181: 1488–1505.
Liesi¨o, J., Mild, P., Salo, A. 2007b. Robust portfolio modelling with incomplete cost information
and project interdependencies. European Journal of Operational Research (in press).
Mendoza, G.A. 1987. Goal programming formulations and extensions: An overview and analysis.
Canadian Journal of Forest Research 17: 575–581.
Mendoza G.A. and Sprouse, W. 1989. Forest planning and decision making under fuzzy environ-
ments: An overview and illustration. Forest Science 33: 458–468.
Mendoza, G.A., Bare, B.B., and Zhou, Z. 1993. A fuzzy multiple objective linear programming
approach to forest planning under uncertainty. Agricultural Systems 41: 257–274.
Muinonen, E., Kurttila, M., Leskinen, P., Kilpel¨ainen, H., and Pyk¨al¨ainen, J. 2007. Examining the
stand-level effects of preferential uncertainty in forest management planning. Manuscript.
Pickens, J.B. and Dress, P.E. 1988. Use of stochastic production coefﬁcients in linear programming
models: objective function distribution, feasibility, and dual activities. Forest Science 34: 574–
591.
Pickens, J.B. Hof, J.G., and Kent, B.M. 1991. Use of chance-constrained programming to account
for stochastic variation in the A-matrix of large-scale linear programs. A forestry application.
Annales of Operations Research 31: 511–526.
Punkka, A. 2006. Luonnonarvokaupan tukeminen monikriteerisill¨a p¨a¨at¨osmalleilla. Systems
Analysis Laboratory, Helsinki University of Technology (in Finnish).
Saaty, T.L. 1980. The analytic hierarchy process. McGraw Hill. New York. 287 pp.
Salo, A. and Punkka, A. 2005. Rank inclusion in criteria hierarchies. European Journal of Opera-
tional Research 163: 338–356.
Taha, H.A. 1997. Operation research. An introduction 6th edition. PrenticeHall 915 p.
Tamiz, M., Jones, D., and Romero, C. 1998. Goal programming for decision making: an overview
of the current state-of-the-art. European Journal of Operational Research 111: 569–581.
Tecle, A., Duckstein, L., and Korhonen, P. 1994. Interactive multiobjective programming for forest
resources management. Applied Mathematics and Computing 63: 75–93.
Thompson, E.F. and Haynes, R.W. 1971. A linear programming-probabilistic approach to decision-
making under uncertainty. Forest Science 17: 224–229.
Weintraub, A. and Abramovich, A. 1995. Analysis of uncertainty of future timber yields in forest
management. Forest Science 41: 217–234.

--- Page 131 ---

Chapter 6
Heuristic Optimization
6.1 Principles
“A heuristic is a technique which seeks good (i.e. near-optimal) solutions at a rea-
sonable computational cost without being able to guarantee either feasibility or op-
timality, or even in many cases to state how close to optimality a particular feasible
solution is” (Reeves 1993). In the context of forest planning, the used heuristic tech-
niques iteratively search for optimal combination of treatments for compartments.
Thus, the treatments of compartments are the actual decision variables in the search
process and the quality of the solution is usually measured by the value of the plan-
ning area level objective function.
Forest planning problems often have an integer nature, i.e. the compartments
should not be split into parts. In addition, management activities in certain compart-
ment may inﬂuence adjacent compartments through, e.g., increased wind damage
or drainage risks. In addition, too large open areas certainly change the far-view
scenery. These are reasons for adding spatial constraints upon harvesting activities
of adjacent compartments to forest planning problems (Brumelle et al. 1997; Tarp
and Helles 1997; Baskent and Keles 2005). These kinds of problems are called dis-
persion problems ( ¨Ohman 2002). On the other hand, clustering of certain types of
compartments has been found beneﬁcial from the viewpoint of species viabilities
(e.g. Harrison and Fahrig 1995; Kurttila 2001; ¨Ohman 2002; Nalle et al. 2004). In
addition, sometimes it is beneﬁcial to cluster harvesting areas, at least when the
size of the compartments is small (Lu and Eriksson 2000; Heinonen et al. 2007).
These clustering problems that prevent fragmentation of, e.g., old forest have be-
come more common during the last decade. In forest planning, the above described
planning problems where the solution is a set of integers are hard, even impossi-
ble, to solve using mathematical programming based techniques. Instead, heuristic
techniques can solve these kinds of problems (see Kurttila 2001; Borges et al. 2002;
Baskent and Keles 2005 for reviews on the use of spatial objectives and heuristic
techniques in forest planning). The integer nature of planning problems and the use
of spatial objectives are the most important reasons for the increased popularity of
heuristics in forest planning.
127

--- Page 132 ---

128
6 Heuristic Optimization
Local optima
Global optima
Current solution
Fig. 6.1 Concepts of global and local optima (Adopted from Burke and Kendall 2005)
The operational principles of heuristic techniques are usually rather easy to un-
derstand and there can be an interaction between the optimization model and the de-
cision maker, or planner. Furthermore, heuristics do not set very strict rules for the
planning problem formulation, i.e. they typically enable the formulation of the op-
timization problem better in line with the multiple objectives and preferences of the
decision maker (e.g. Kangas 1999). Although they do not necessarily ﬁnd the tech-
nical global optimum of the given complicated problem, solutions nearer to the real-
life optimum might be found by using them than by LP, for instance, if the prefer-
ences of the decision maker can be described more realistically (e.g. Kangas 1999).
Some heuristic techniques are deterministic, i.e. from the same initial solution
they return always the same ﬁnal solution (e.g. direct search phase of HERO, see the
description below) (Burke and Kendall 2005). Some other techniques are stochas-
tic (e.g. simulated annealing, threshold accepting, tabu search, genetic algorithms),
which means that from the same initial solution they return different ﬁnal solutions
due to the random characteristics of their search processes. These random charac-
teristics allow, e.g., the techniques to perform moves that decrease the objective
function value or, the techniques utilize some other mechanism that enable them to
move to a new location in a solution space. As a result, they have an ability to escape
from the local optima (Fig. 6.1).
Particularly in the case of deterministic methods, a large number of different
initial solutions should be examined to increase the probability for ﬁnding good so-
lutions. Of course it could be possible to carry out exhaustive search, i.e. explore the
whole solution space. However, the solution space in forest planning is usually enor-
mous. Even for a very small forest of 20 compartments each having four treatment
alternatives the total amount of alternatives is already 420 = 1.099×1012.
One difference between different heuristic techniques is also the number of so-
lution candidates the techniques simultaneously process. While many techniques
process only one solution at the time, genetic algorithms, for example, maintain
and process a population of solutions. In this chapter, after presenting the typical

--- Page 133 ---

6.2 Objective Function Forms
129
objective function forms, the above mentioned and commonly used heuristic tech-
niques are presented. This is followed by a brief discussion on possibilities to im-
prove the heuristic search processes.
6.2 Objective Function Forms
Heuristic optimization techniques do not demand any speciﬁc objective function
form, which means that the design of the objective function can be case-speciﬁc.
According to Pukkala (2002), there are four basic alternatives to formulate the ob-
jective function for a multi-objective forest planning situation:
1. One objective is minimized or maximized via the objective function and the other
goals are expressed as strict constraints.
2. The objective function measures the deviations of several objective variables
from their target levels. These levels are given in other equations of the problem
formulation. Strict constraint can also be included in the problem formulation.
3. A single objective is included in an objective function which is augmented with a
penalty function. The penalty function measures how much additional objective
variables deviate from their target values. The penalty function has the same unit
as the single objective variable.
4. A multi-attribute utility function is developed and used as the objective function.
Although the formulation 1 (in linear case) corresponds to the typical LP problem,
and formulation 2 to the GP formulation, all four formulations can be solved with
heuristic optimization techniques.
The penalty function tries to minimize the deviations from the target values that
have been speciﬁed for certain objective variables, usually at planning area level.
For example, the maximization of NPV cutting income from the whole planning
area may be augmented with a certain core-area demand (e.g. 10% of the forests
of the planning area should be old-forest core-areas, i.e. old-forest area that has at
least a pre-deﬁned distance to the edge of the forest) for each sub-period through a
penalty function (e.g. ¨Ohman and Eriksson 1998)). Alternatively, the whole objec-
tive function includes only penalty functions, e.g. costs from deviating from plan-
ning area level harvest volume target, costs from harvested area with low volume per
compartment area ratio, cost of violated adjacency constraints, or costs of harvest
blocks violating the harvest block size constraint (Lockwood and Moore 1993).
In the former case, the total amount of core area is evaluated for each of the
tested solutions and if the core area target is not met, the penalty decreases the
maximized NPV so much that the probability for accepting such solution is low. In
the latter case, the value of the objective function is minimized, and the function
corresponds to the GP formulation. The penalty functions can be also designed so
that small deviations from the target values are penalized relatively less than values
more distant from the targets.
In the case of a multi-attribute utility function, different function forms can
be used. The use of additive utility function enables the presentation of objective

--- Page 134 ---

130
6 Heuristic Optimization
variables in a hierarchical manner (see Chapters 2 and 3). In an additive utility func-
tion, total utility U is calculated so that the weights, i.e. relative importance ai, of
the objective variables are scaled to sum equal to one
U =
p
∑
i=1
aiui(qi)
(6.1)
where U is the total utility; p is the number of objectives; ui is the sub-utility func-
tion of objective variable i getting values between 0 and 1; qi is the quantity that
the current solution produces or consumes objective variable i at the planning area
level. Objectives are either forest products and values, such as timber, amenity and
biodiversity, or resources, such as costs and labour requirement.
The sub-utility function depicts the change in the utility as the value of the ob-
jective variable changes (for more details see Section 3.2). The sub-utility function
is estimated separately for each objective variable. When estimating the sub-utility
function, ﬁrst the maximum and minimum values that can be achieved for the ob-
jective variable from the planning area are computed (as single objective optima).
The minimum value of the objective variable gets sub-utility zero and the maximum
value of the objective variable gets a sub-utility of one (i.e. utilities in interval scale
are used). The desirability of the intermediate values is estimated and the values are
given relative priorities, which deﬁne the sub-utility function. A sub-utility function
can be linear, non-linear, or piece-wisely linear. Estimation can be based equally
well on subjective preference evaluations, expertise, objective measurements or in-
formation produced by empirical research. One advantage of the method is that it
operates with case-speciﬁc production possibilities.
Also multiplicative parts or interactive terms can be added to the utility model.
Multiplicative parts are useful when the objective variables are not interchangeable;
i.e. if a good gain in one variable can not compensate for an inferior result in another.
The general form of the utility model that includes multiplicative parts is:
U =
 p
∑
i=1
aiui(qi)

P
∏
j=p+1
uj(qj)
(6.2)
The latter part of the function includes the objectives that are not interchangeable
with the other objectives. It would also be possible to apply a purely multiplicative
utility model.
6.3 Hero
The HERO heuristic optimization method is a direct ascent method. It has been espe-
cially developed for tactical forest planning mainly at area of non-industrial private
forest holding level (Pukkala and Kangas 1993; Kangas et al. 2001). The optimiza-
tion phase of HERO may be divided into two stages: random search for creating
initial solutions and direct search phase for improving the best initial solution.

--- Page 135 ---

6.3 Hero
131
In the beginning of the optimization process, the random search phase assigns
one treatment schedule for each compartment. The values and the sub-priorities of
the objectives are computed, as well as the total utility. Several initial candidate
solutions are usually produced and the best of them is used in the second phase.
In this direct search phase, one compartment at a time is examined to see whether
some other of its treatment schedules, which is not in the current solution, would
increase the total utility. If the utility increases, the current treatment alternative is
replaced by the one that increases the total utility. Once all the treatment schedules
of all the compartments have been studied in this way, the process is repeated again
until no more schedules increasing the utility can be found. In order to improve the
probability for ﬁnding a good-quality solution, the whole process is repeated several
times (say, 100–1,000 times), and the solution with the greatest utility value is taken
as the optimal solution. In this way, the optimization phase of HERO combines
random and systematic search components.
Example 6.1. Altogether 191 treatment alternatives were simulated for a 70 ha forest
holding that had been divided into 75 compartments. The planning period included
two 10-year sub-periods. MONSU forest planning software was used in the planning
calculations (Pukkala 2006). The objective function was an additive utility function
and it included the following objectives (and relative weights): cutting income dur-
ing the 1st sub-period (0.4), cutting income during the 2nd sub-period (0.3) and
standing timber volume at the end of the whole planning period (0.3). For standing
timber-volume at the end of the planning period, the sub-utility reached a value 1.0
when the initial standing timber volume of the holding (10,500m3) was reached.
The sub-utility function of cutting-income from the ﬁrst period was linear between
its minimum and maximum value, and the sub-utility of cutting income from the
2nd planning period was formulated so that it reached the value of 0.9 at the point,
where the cutting income was the same as the initial value growth per year in the
holding multiplied by the number of years (10×18,000AC). Three different parame-
ter deﬁnitions were deﬁned for the HERO and the achieved results are presented in
Table 6.1.
The total utility measures directly the technical quality of the solution. As the
number of random solutions and number of optimisation increases, also the total
utility increases. Note that the aspiration level concerning standing timber level is
always met, but the aspiration level for cutting income during the 2nd period is not
reached.
Table 6.1 The results from three different heuristic searches
Number
of
initial
random
solutions
Number
of optimi-
sations
Total
utility U
Cutting
income
1st period
Cutting
income
2nd
period
Standing
timber
volume
1
1
0.63119
83,401
115,685
10,508
1,000
5
0.64833
64,315
150,765
10,518
1,000
500
0.65344
78,305
137,004
10,509

--- Page 136 ---

132
6 Heuristic Optimization
6.4 Simulated Annealing and Threshold Accepting
Simulated annealing (SA) is a variant local optimization method and it attempts to
avoid getting trapped in local optima by allowing random deteriorations in the ob-
jective function value (e.g. Dowsland 1993). SA is originally based on the cooling
process of liquid material, and the terminology of the method follows the terms of
the physical cooling process (Kirkpatrick et al. 1983). Thus, the starting temperature
deﬁnes the starting conditions of the process. The speed of the cooling process (de-
ﬁned through the cooling multiplier) affects the temperature and change the stage
of the material so that as the material cools and becomes more solid the random
elements can not change the solution as easily any more. The cooling process con-
tinues until the freezing temperature is reached and the material is solid. The search
process of SA can continue until the current solution, i.e. the combination of treat-
ments, can not be improved any more, and if the user-speciﬁed stop-rule has not
been met earlier.
SA starts its search process from a randomly selected initial solution. In the
search process, randomly assigned neighbouring solutions are evaluated. In forest-
planning context, the neighbourhood usually means that the treatment schedule of
one randomly selected management unit is changed at a time (Bettinger et al. 2002).
In SA the moves that improve the value of the objective function are always ac-
cepted. To avoid being trapped to a local optimum, the method accepts moves that
do not improve the objective function value with a probability that decreases as the
temperature gets cooler. The probability for accepting the non-improving moves is
calculated as follows
p = exp((UNew −UOld)T −1
i
)
(6.3)
where Ti is the current temperature, and UOld is the current objective function
value and UNew is the new smaller objective function value. During the optimiza-
tion process, the temperature cools, according to a user-speciﬁed cooling sched-
ule. At high temperatures the probability for accepting inferior moves is high (the
melted metal moves easily), but as the temperature decreases (the metal solidiﬁes),
the probability decreases. Parameters that the user has to specify when using SA are
starting and stopping temperature, cooling schedule and the number of iterations at
each temperature. The number of iterations can change during the cooling process,
for example it can increase when the temperature cools. This is also a user-speciﬁed
characteristic.
Threshold accepting (TA) (Dueck and Scheuer 1990) is a deterministic version
of SA. TA has shown to be able to produce solutions as good, or even better, than
SA (Dueck and Scheuer 1990; Bettinger et al. 2002; Pukkala and Heinonen 2004).
In TA, moves that improve the solution are always accepted. Moves not improving
the current solution are accepted when they result in an objective function value
greater than the current value minus the threshold. In the beginning of the search
the threshold value can be large, which enables wider movements in the solution
space. The threshold is gradually decreased and ﬁnally only improvements are ac-
cepted. The search is stopped when the threshold becomes very small (freezing

--- Page 137 ---

6.5 Tabu Search
133
0.5
0.52
0.54
0.56 
0.58 
0.6
0.62
0.64 
0.66 
0.68 
SA
TA
U
Fig. 6.2 Development of the total utility in SA and in TA during the ﬁrst 150 moves
threshold) or when several consecutive thresholds are tested without any change in
the solution.
Example 6.2. The planning data are the same as in example 6.1. In this example
SA and TA were the used optimization techniques. For both techniques, the num-
ber of initial iterations, iteration multiplier and number of initial random solutions
had same values. For SA, the initial temperature was 0.0013, the cooling multiplier
which is used to reduce the temperature after the speciﬁed number of iterations was
0.9, and the stopping temperature was 0.000065. For TA, the initial threshold value
was 0.0013, the threshold value multiplier was 0.9 and the stopping threshold was
0.0001.
Figure 6.2 illustrates the basic difference between SA and TA. The total utili-
ties develop slightly differently in SA and in TA. SA allows some quite big dete-
riorations in the utility value, whereas they are smaller than the deﬁned threshold
in TA.
6.5 Tabu Search
Search memory in the form of tabu lists is the key characteristics of tabu search
(TS). The lists direct and diversify the search process for instance by prohibiting the
repetition of recent moves. The user-speciﬁed tabu tenure determines the number of
iterations during which the treatment schedules that participated in a move may not
be included in or removed from the solution.
As in previous techniques, the search process of TS starts from a random initial
solution. Then, several candidate moves are produced. The user should deﬁne the
number of candidate moves (at minimum one and at maximum all the neighbouring
solutions) and how they are produced. The candidates may be produced by selecting

--- Page 138 ---

134
6 Heuristic Optimization
randomly both the compartment and one of its treatment schedules that is not in the
current solution. Alternatively the candidate moves can be produced systematically.
Among these candidate moves, the move that produces an elite solution (the best
solution so far) is always accepted even if it is tabu. Among the non-tabu moves,
the move that produces the largest improvement (or the smallest deterioration) to
the objective function is made. If non-tabu moves are not available, the move with
smallest tabu-tenure (the treatment alternative that would next become non-tabu) is
made. The duration of tabu tenure can be longer for moves that have entered the
solution than for moves that have been removed from the solution (for more details,
see, e.g. Glover and Laguna 1993; Richards and Gunn 2003).
Since the TS may concentrate in a small area in the solution space, the search can
be further diversiﬁed by purposefully selecting rarely considered treatments options.
For example, Boston and Bettinger (1999) diversiﬁed the search by using the long-
term memory (frequency that each treatment alternative has been entered in the
solution) so that after 3,000 repetitions, the algorithm developed a new solution
using the least selected treatment alternatives. The TS routine was started again
from this new solution, and the best solution so far was saved.
Example 6.3. This example illustrates the functioning of the short term tabu tenure.
The example data consists of nine compartments, which have a varying number of
simulated treatment alternatives as follows:
Compartment
1
2
3
4
5
6
7
8
9
Number of simulated treatment alternatives
4
5
2
3
4
5
4
5
4
In the optimization, the ﬁrst move changes the solution in compartment 2. The tabu
tenure for the alternative that has been removed from the solution is 10 and for the
alternative that entered solution the tabu tenure is 2.
Compartment
1
2
3
4
5
6
7
8
9
The treatment alternative that is in the initial solution
1
2
1
3
4
4
1
2
3
Solution 2
1
5
1
3
4
4
1
2
3
Treatment alternative/Tabu Tenure
2/10
5/2
The second move changes the solution in compartment 9. The tabu tenures of the
previously changed treatment alternatives as well as the treatment alternatives that
were changed during the current move are updated.
Compartment
1
2
3
4
5
6
7
8
9
The treatment alternative number that is in the
current solution
1
5
1
3
4
4
1
2
3
Solution 3
1
5
1
3
4
4
1
2
1
Treatment alternative/Tabu Tenure
2/9
3/10
5/1
1/2

--- Page 139 ---

6.6 Genetic Algorithms
135
6.6 Genetic Algorithms
Unlike the heuristic optimization techniques described above, genetic algorithms
(GA) process simultaneously certain population of solution alternatives. This pop-
ulation is then evaluated and bred in the search process. The terminology of GA
has correspondence to natural selection and genetics (Table 6.2). The alternative
solutions are called chromosomes, which are processed by crossing over and by
mutation and evaluated through ﬁtness function. These operations result in new gen-
eration of chromosomes.
The GA starts from the initial population that can be created through random
processes or by utilizing other heuristic optimization techniques. In the following
step, the initial population is bred. It is possible to replace the whole initial popula-
tion (i.e. change all forest plans in the population) or it can be replaced incremen-
tally so that only part of the initial population is replaced by new chromosomes. New
chromosomes can be created by using crossover or mutation. The selection of parent
chromosomes for these operations can be random or the selection probability can
depend on the chromosomes’ ﬁtness values. For example, the selection of the other
parent can be based on the probability proportional to its ranking, and the other par-
ent can be selected randomly. Also the mechanisms concerning the breeding process
(number of crossovers, the length and location of crossovers, number and generation
principles of mutations) must be deﬁned. In addition, the user must also deﬁne the
principles concerning the removal of chromosomes. It can be based on the ﬁtness
value so that the probability of removal is the highest for chromosomes that have a
low ﬁtness value. The new chromosomes form the new generation of chromosomes
and the GA process ends when a certain number of generations have been produced
or when a certain amount of generations have been produced without improvement
(for more details, see, e.g. Reeves 1993 and Sastry et al. 2005).
Example 6.4. By using the data from example 6.3, different crossover methods
(e.g. Sastry et al. 2005) are illustrated. Crossovers are performed to two parent
chromosomes by applying one point crossover, two point crossover and uniform
crossover, which can be considered as generic crossover techniques. In one point
Table 6.2 Terminology of GA with respect forest planning terminology
GA term
Forest planning term
Population
User deﬁned number of forest plan alternatives
Chromosome
Forest plan
Gene
Forest stand/compartment
Allele
Treatment alternative
Crossover
An exchange of parts between two parent forest plan alternatives
Mutation
Random change in the stand’s treatment alternative
Fitness value
Objective function value
Offspring
New generation of forest plan alternatives from breeding

--- Page 140 ---

136
6 Heuristic Optimization
crossover, one crossover point is randomly selected and the alleles on one side of
the point are exchanged between the parents. In two point crossover, two points
are randomly selected. In uniform crossover, every allele is exchanged between
randomly selected two chromosomes with a certain probability, pe. known as the
swapping probability (which is usually taken to be 0.5).
One-point crossover
Parent 1
1
2
1
3
4
4
1
2
3
Parent 2
2
2
2
4
3
6
4
2
3
New chromosome 1
1
2
1
3
3
6
4
2
3
New chromosome 2
2
2
2
4
4
4
1
2
3
Two-point crossover
Parent 1
1
2
1
3
4
4
1
2
3
Parent 2
2
2
2
4
3
6
4
2
3
New chromosome 1
1
2
2
4
3
6
1
2
3
New chromosome 2
2
2
1
3
4
4
4
2
3
Uniform crossover
Parent 1
1
2
1
3
4
4
1
2
3
Parent 2
2
2
2
4
3
6
4
2
3
New chromosome 1
2
2
1
4
3
4
1
2
3
New chromosome 2
1
2
2
3
4
6
4
2
3
The principle of mutation is also illustrated below. The mutation probability has
been deﬁned to be 0.3, which means that at the treatment alternative changes at
maximum in 30% of forest stands. In this example, the mutation takes place in the
New chromosome 1 that was created through two point crossover. The mutation
occurs in two alleles as follows:
New chromosome 1
1
2
2
4
3
6
1
2
3
After mutation
2
2
2
1
3
6
1
2
3
6.7 Improving the Heuristic Search
6.7.1 Parameters of Heuristic Optimization Techniques
The problem with heuristic optimization techniques is that although they can pro-
duce feasible solutions within a relatively short time, the quality of the solution
remains unknown, especially in complex or large problems. The selected technique
has an effect both on the time needed to ﬁnd the solution as well as on the objective
function value (Bettinger et al. 2002; Pukkala and Kurttila 2005). However, even

--- Page 141 ---

6.7 Improving the Heuristic Search
137
if the technique would be suitable for the planning problem at hand, the user has
to deﬁne several technique-speciﬁc parameter values, which also affect the perfor-
mance (Baskent and Jordan 2002). In addition, the user has to decide how the initial
solution(s) is produced. In practice, it is impossible to determine the single optimal
set of parameters for a certain technique, because the planning situations vary much
(Pukkala and Heinonen 2006).
Pukkala and Heinonen (2006) presented a method for optimizing the search
process of three heuristic techniques (SA, TA and TS). The method optimizes the
values of parameters that the applied heuristic optimization techniques need for
quick and slow convergence requirement. In addition, the obtained solution with
the best parameter set is simultaneously produced and displayed to the user. How-
ever, due to long computing times the everyday use of the method is impractical,
but it is a valuable technique when heuristic techniques are developed and com-
pared with each others. For improved practical usability, the method could be used
to develop some practical rules concerning good technique-speciﬁc parameter val-
ues. It would be logical to try to relate these rules on the number of compartments,
number of treatment schedules or on the size of the neighbourhood (Park and Kim
1998; Pukkala and Heinonen 2006).
6.7.2 Expanding the Neighbourhood
In forest planning and particularly in situations where spatial objectives are em-
ployed, it may be beneﬁcial to examine two or more simultaneous treatment alter-
native changes (e.g. Bettinger et al. 1999). For example, if the treatment alternatives
are changed simultaneously in two compartments, the values of non-spatial objec-
tive variables may remain practically unchanged but the spatial objective may be
improved signiﬁcantly. For this reason, so called two compartment neighbourhood
moves may allow wider exploration of the solution space and more reﬁnements to
the solution (e.g. Bettinger et al. 2002; Heinonen and Pukkala 2004). In the study
of Bettinger et al. (1999) TS with 2-opt moves gave good results when applied to
a forest planning problem with even-ﬂow and adjacency constraints. Also Bettinger
et al. (2002) found out that the same technique performed very well in three dif-
ferent forest planning problems. More recently, the study of Heinonen and Pukkala
(2004) compared one and two compartment neighbourhoods in local neighbourhood
search based heuristics (SA, TS, HERO and random ascent). The two compartment
neighbourhood was found to be clearly better than one compartment neighbourhood
(Heinonen and Pukkala 2004). In addition to two compartment neighbourhood, it is
possible to further develop the neighbourhood structure for example by using three
compartment neighbourhoods and also by taking into account the relative locations
of the compartments in neighbourhood deﬁnition.
Another possibility to enlarge the local search neighbourhood is the use of strate-
gic oscillation (SO) in TS (Glover and Laguna 1993). SO is suitable for forest
planning problems that include different constraints concerning, e.g. even-ﬂow and

--- Page 142 ---

138
6 Heuristic Optimization
adjacent cuttings. The constraints create barriers in the search space, i.e. they make
it disjoint, which (see also Bettinger and Zhu 2006) reduces the search possibilities.
For example, suppose that a 10 ha compartment, j, is adjacent to 45 ha area consist-
ing or one or more compartments that would be cut during the period 2. The 10 ha
compartment’s ideal harvest time is also period 2. However, scheduling the cutting
of this compartment to period 2 would increase the opening size greater than 50 ha,
which in this case is the maximum allowed opening size. Therefore, some other
compartments must be removed from the 45 ha opening before compartment j can
be harvested in period 2. However, if the current volume harvested in period 2 is
near the minimum constrained level, then removing other compartments from this
opening will violate the harvest ﬂow constraint. Thus, ﬁnding a sequence of feasi-
ble moves that add compartment j to harvest period 2 is difﬁcult or impossible if
constraints are constantly enforced (Richards and Gunn 2003). The basic idea of SO
is to enlarge and smooth the constrained search neighbourhood by allowing infeasi-
ble moves. The search is carried out near constraint boundaries so that the solution
visits both feasible and infeasible regions. The solution is forced back to feasible re-
gion by using penalty terms that increasingly penalize the objective function as the
violations of the constraints increase. In the study of Richards and Gunn (2003) SO
was found to be the most important design factor for constrained planning problem
that was solved by different TS versions.
6.7.3 Combining Optimization Techniques
In order to improve the performance of the heuristic search processes, combining
heuristic techniques with other heuristic technique or with LP has been examined
also in forest planning context. Examples of combining heuristics include the study
of Kurttila and Pukkala (2003). They combined SA and HERO so that the idea of
cooling and that of accepting inferior solutions were applied in the same way as in
SA, whereas the neighbourhood was searched in the same way as in the Hero, i.e. se-
quentially. All moves that improved the objective function value were accepted. At
every temperature, all schedules for all compartments were inspected once and se-
quentially after which the temperature was changed and the same process was re-
peated until a stopping temperature was reached. Thus, also some inferior moves
were accepted during the direct search phase of HERO, but as the temperature de-
creased, the probability of accepting these moves was decreased.
In the study that compared the performance of six heuristic techniques (Pukkala
and Kurttila 2005) the performance of this technique was rather good. It was always
faster than TS, SA and GA. In spatial planning problems only GA gave clearly
better objective function values than the combination of SA and HERO. In another
study (Hurme et al. 2007) SA and HERO were combined so that after the search
process of SA terminated the direct search phase of the HERO was ran through once,
which guaranteed that the current local optimum was certainly found. In addition,
simple and fast technique like HERO can be used to produce initial solutions for

--- Page 143 ---

References
139
GA and for other heuristics as well (Pukkala and Heinonen 2006). Also Falc˜ao
and Borges (2002) combined two heuristics so that other of them applied systematic
search and other random search. The developed sequential quenching and tempering
technique ﬁrst applies systematic search rather similarly as HERO to all stands in the
forest. After all stands have been inspected and local optimum has been found, the
technique makes a random perturbation. This means that a new treatment alternative
is randomly assigned for a certain number of stands. After this, the systematic search
phase is resumed.
In the study of ¨Ohman and Eriksson (2001) LP was integrated with SA. SA was
used for solving the spatial dimension of the planning problem, whereas LP was
used for solving the non-spatial dimension. Two alternatives to combine these tech-
niques were tested. In the ﬁrst alternative, SA was used ﬁrst to solve the spatial
part of the planning problem, where the aim was to cluster old forests by applying
two different measures related to core-area, namely the amount of core-area and the
amount of edge habitat. The SA solution was used to prohibit such stand-level treat-
ment schedules from the LP problem that did not produce old forest areas to same
extent as the treatment schedule that had been selected for the optimal SA solution.
In the second alternative, the procedure began with LP problem formulation. From
the LP solution, the shadow prices were utilized in the SA problem. The results indi-
cated that the combination of these two techniques produced more effective results
than the approach that used SA alone.
Bettinger et al. (2002) in their study tested a hybrid of TS and GA. The hybrid
utilized 1-opt and 2-opt moves and the diversiﬁcation routine of the TS. After these
phases, the two best solutions (one from the 1-opt process and one from the 2-opt
process) were used as parent chromosomes and a crossover routine of GA was per-
formed so that two new chromosomes were created. The new chromosome with the
highest objective function value was then taken as a starting solution of the new TS
process. This hybrid together with seven other heuristic techniques were compared
in three different forest planning problems (one non-spatial and two spatial planning
problems). In the comparison, this algorithm was classiﬁed according to its perfor-
mance to a group “very good” as were also SA, TA, great deluge and TS with 1-opt
and 2-opt moves.
References
Baskent, E.Z and Jordan, G.A. 2002. Forest landscape management modelling using simulated
annealing. Forest Ecology and Management 165: 29–45.
Baskent, E.Z. and Keles, S. 2005. Spatial forest planning: a review. Ecological Modelling 188:
145–173.
Bettinger, P. and Zhu, J. 2006. A new heuristic method for solving spatially constrained forest
planning problems based on mitigation of infeasibilities radiating outward from a forced choice.
Silva Fennica 40: 315–333.
Bettinger, P., Boston, K., and Sessions, J. 1999. Intensifying a heuristic forest harvest scheduling
search procedure with 2-opt decision choices. Canadian Journal of Forest Research 29: 1784–
1792.

--- Page 144 ---

140
6 Heuristic Optimization
Bettinger, P., Graetz, D., Boston, K., Sessions, J., and Woodam C. 2002. Eight heuristic planning
techniques applied to three increasingly difﬁcult wildlife planning problem. Silva Fennica 36:
561–584.
Borges, J.G., Hoganson, H.M., and Falc˜ao, A.O. 2002. Heuristics in multi-objective forest plan-
ning. In: Pukkala, T. (Ed.). Multi-objective forest planning, Kluwer, Dordrecht, pp. 119–151.
Boston, K. and Bettinger, P. 1999. An analysis of Monte Carlo integer programming, simulated
annealing, and tabu search heuristics for solving spatial harvest scheduling problems. Forest
Science 45: 292–301.
Brumelle, S., Granot, D., Halme, M., and Vertinsky, I. 1997. A tabu search algorithm for ﬁnding
good forest harvest schedules satisfying green-up constraints. European Journal of Operational
Research 106: 408–424.
Burke, E.G. and Kendall, G. 2005. Search methodologies. Introductory tutorials in optimization
and decision support techniques. Springer Science + Business Media, New York, USA. 620 pp.
Dowsland, K.A. 1993. Simulated annealing. In: Reeves, C.R. (Ed.). Modern heuristic techniques
for combinatorial problems. Blackwell, Oxford, pp. 20–69.
Dueck G. and Scheuer T. 1990. Threshold accepting: a general purpose optimization algorithm
appearing superior to simulated annealing. Journal of Computer Physics 90: 161–175.
Falc˜ao, A. and Borges, J.G. 2002. Combining random and systematic search heuristic procedures
for solving spatially constrained forest management scheduling models. Forest Science 48: 608–
621.
Glover, F. and Laguna, M. 1993. Tabu search. In: Reeves, C.R. (Ed.). Modern heuristic techniques
for combinatorial problems. Blackwell, Oxford, pp. 70–150.
Harrison, S. and Fahrig, L. 1995. Landscape pattern and population conservation. In: Hansson,
L., Fahrig, L., and Merriam, G. (Eds.). Mosaic landscapes and ecological processes. IALE Stud-
ies in Landscape Ecology, Vol. 2, Chapman & Hall, London, pp. 293–308.
Heinonen, T. and Pukkala, T. 2004. A comparison of one- and two-compartment neighbourhoods
in heuristic search with spatial forest management goals. Silva Fennica 38: 319–332.
Heinonen, T., Kurttila, M., and Pukkala, T. 2007. Possibilities to aggregate raster cells through
spatial objectives in forest planning. Silva Fennica 41: 89–103.
Hurme, E., Kurttila, M., M¨onkk¨onen, M., Heinonen, T., and Pukkala, T. 2007. Maintenance of
ﬂying squirrel habitat and timber harvest: a site-speciﬁc spatial model in forest planning calcu-
lations. Landscape Ecology 22: 243–256.
Kangas, J. 1999. The analytic hierarchy process (AHP): standard version, forestry application and
advances. In: Helles, F., Holten-Andersen, P., and Wichmann, L. (Eds.). Multiple use of forests
and other natural resources. Kluwer, Dordrecht, Forestry Sciences 61, pp. 96–105.
Kangas, J., Pukkala, T., and Kangas, A.S. 2001. HERO: Heuristic optimization for multi-criteria
forestry decision analysis. In: Schmoldt, D., Kangas, J., Mendoza, G.A., Pesonen, M. (Eds.).
The analytic hierarchy process in natural resource and environmental decision making, Kluwer
Academic Publishers. Dordrecht. Managing Forest Ecosystems 3. pp. 51–65.
Kirkpatrick, S. Gelatt, C.D, Jr., and Vecchi, M.P. 1983. Optimization by simulated annealing. Sci-
ence 220: 671–680.
Kurttila, M. 2001. The spatial structure of forests in the optimization calculations of forest planning
- a landscape ecological perspective. Forest Ecology and Management 142: 129–142.
Kurttila, M. and Pukkala, T. 2003. Combining holding-level economic goals with spatial
landscape-level goals in the planning of multiple ownership forestry. Landscape Ecology 18:
529–541.
Lockwood, C. and Moore, T. 1993. Harvest scheduling with spatial constraints: a simulated an-
nealing approach. Canadian Journal of Forest Research 23: 468–478.
Lu, F. and Eriksson, L. O. 2000. Formation of harvest units with genetic algorithms. Forest Ecology
and Management 130: 57–67.
Nalle, D.J., Montgomery, C.A., Arthur, J.L., Polasky, S., and Schumaker, N.H. 2004. Modeling
joint production of wildlife and timber. Journal of Environmental Economics and Management
48: 997–1017.

--- Page 145 ---

References
141
¨Ohman, K. 2001. Forest planning with consideration to spatial relationships. Doctoral dissertation.
Department.of Forest Resource Management and Geomatics, SLU. Acta Universitatis Agricul-
turae Sueciae, Silvestria, Vol. 198, 32 pp.
¨Ohman, K. and Eriksson, L.O. 1998. The core area concept in forming contiguous areas for long
term forest planning. Canadian Journal of Forest Research 28: 1032–1039.
¨Ohman, K. and Eriksson, L.O. 2002. Allowing for spatial consideration in long term forest plan-
ning by linking linear programming and simulated annealing. Forest Ecology and Management
161: 221–230.
Park, M.-W. and Kim, Y.-D. 1998. A systematic procedure for setting parameters in simulated
annealing algorithms. Computers and Operations Research 25: 207–217.
Pukkala, T. 2002. Introduction to multi-objective forest planning. In: Pukkala, T. (Ed.). Multi-
objective forest planning. Kluwer, Dordrecht, pp. 1–20.
Pukkala, T. 2004. Monik¨ayt¨on suunnitteluohjelma Monsu. Ohjelmiston toiminta ja k¨aytt¨o.
University of Joensuu Faculty of Forestry, 72 pp (in Finnish).
Pukkala, T. and Heinonen, T. 2006. Optimizing heuristic search in forest planning. Nonlinear
Analysis: Real World Applications 7: 1284–1297.
Pukkala, T. and Kangas, J. 1993. A heuristic optimization method for forest planning and decision-
making. Scandinavian Journal of Forest Research 8: 560–570.
Pukkala, T. and Kurttila, M. 2005. Examining the performance of six heuristic search techniques
in different forest planning problems. Silva Fennica 39: 67–80.
Reeves, C.R. 1993. Genetic algorithms. In: Reeves, C.R. (Ed.). Modern heuristic techniques for
combinatorial problems. Blackwell, Oxford, pp. 151–196.
Reeves, C.R. 1993. Modern heuristic techniques for combinatorial problems. Blackwell, Oxford,
320 pp.
Richards, E.W. and Gunn, E.A. 2003. Tabu search design for difﬁcult forest management optimiza-
tion problems. Canadian Journal of Forest Research 33: 1126–1133.
Sastry, K, Goldberg, D., and Kendall, G. 2005. Genetic algorithms. In: Burke, E.G. and Kendall,
G. (Eds.). Search methodologies. Introductory tutorials in optimization and decision support
techniques, Springer Science + Business Media, New York, USA, pp. 97–125.
Tarp, P. and Helles, F. 1997. Spatial optimization by simulated annealing and linear programming.
Scandinavian Journal of Forest Research 12: 390–402.

--- Page 146 ---

Chapter 7
Group Decision Making and
Participatory Planning
7.1 Decision Makers and Stakeholders
Environmental problems are typically messy and complex. There may be high risks
involved and/or lack of scientiﬁc agreement on the cause of problems. The problems
may be ill deﬁned, and the goals may not be clear. In addition, numerous decision
makers or other stakeholders are often involved in environmental planning.
The stakeholders are deﬁned to be “any group or individual who can affect, or
is affected by, the achievement of a corporation’s purpose” (Freeman 1984). They
could be persons like forest owners, farmers, forest workers or local inhabitants,
or stakeholder groups such as tourism and recreation services, organizations con-
cerned with nature conservation, rural communities, hunters associations, sporting
and recreation associations or wood and forest industry (International Labour Of-
ﬁce (ILO) 2000). Each of them can have different objectives concerning the use of
forests or other natural resources, which further complicates the evaluation.
Group decision making is inevitable, for example, when dealing with forest plan-
ning of forest holdings owned by several people. In addition, group decision making
is commonly used in business decision making, for instance wood procurement or-
ganizations. In group decision making, the total utility to be maximised can be taken
as a combination of utilities of the persons belonging to the group. In group decision
making typically at least some agreement among participants can be found, due to
the organizational culture (Hjortsø 2004).
Public participation means that citizens are involved in the environmental or nat-
ural resource decision making that has an effect on them. Public participation is also
seen as part of sustainable development. This is further underlined by the UNECE
(1998) convention on access to information and access to justice in environmental
matters. In the case of public participation, the views of participants are often fun-
damentally different and even conﬂicting (Hjortsø 2004). In such situations people
often focus on protecting their own interests so that conﬂicts are an inherent part of
public participation (Susskind and Cruishank 1987; Hellstr¨om 1997).
145

--- Page 147 ---

146
7 Group Decision Making and Participatory Planning
The most distinct difference between these two cases is the actual power to make
the decisions. The group typically withholds all the power to make the actual de-
cisions, but in participatory planning this is not the case, but usually the managing
agency holds all the power. Thus, the level of participation may vary from mere
informing the public to total control of public, depending on how much power the
managing organization is willing to give up.
In most cases, organizing a participatory planning process is voluntary for the
managing organization. In some cases, however, the use of participatory planning is
required by law. Such is the case in many Environmental Impact Assessment (EIA)
processes. In Finnish forestry, participatory planning has been used for instance
in the decision making of Mets¨ahallitus (formerly Forest and Park Service, e.g.
Wallenius 2001) and municipalities owning forest, such as Raahe, Helsinki and
Tampere (e.g. Tikkanen 1996; Sipil¨a and Tyrv¨ainen 2005). Participatory approach
has also been used for many policy programmes, like the National Forestry Pro-
gramme and its regional counterparts (e.g. Tikkanen 2003; Primmer and Kyll¨onen
2006). In addition, participation has been used in deﬁning nature conservation pro-
grammes, such as NATURA 2000 (Metsien suojelun ... 2006).
There are several reasons for promoting public participation. The speciﬁc pur-
poses may depend on the issues involved, the perspectives and interests of par-
ticipants, and the existing cultural, political and organizational contexts. It can
be assumed that the ﬁnal decisions are made with more competence, when local
knowledge is included and expert knowledge is scrutinized by the public (Webler
et al. 1995). Furthermore, the legitimacy of the ﬁnal decision may be better, when
the citizens whose interests the project has an effect on are involved in the decision
making.
In relation to forestry, ILO (2000; see also Hjortsø 2004) has identiﬁed seven
purposes:
1. Increase awareness of forestry issues and mutual recognition of interests
2. Gather information and enhance knowledge on forests and their use
3. Improve provision of multiple forest goods and services
4. Stimulate involvement in decision making and/or implementation process
5. Enhance acceptance of forest policies, plans and operations
6. Increase transparency and accountability of decision making
7. Identify and manage conﬂicts and problems together, in a fair and equitable way
According to Heberlein (1976), the reason why people want to participate in the de-
cision making is that people feel there is a discrepancy between the values held by
agency personnel and the public. This may be the case especially in decision mak-
ing concerning the environment, as the values in the society have been fast evolving.
Public participation is not, however, the only way to involve public opinion in de-
cision making regarding natural resources. The public views and values probably
have their inﬂuence on the missions of the agencies doing the planning. Similarly,
the views of public affect through the agency personnel. Moreover, public opinion
also affects the democratic decision making system, which supervises the work of
agencies making the actual decision.

--- Page 148 ---

7.2 Public Participation Process
147
Group decision making can often be aided with the same kind of methods as
the decision making of one decision maker. In addition, group decision making
might beneﬁt from problem structuring methodology, if the process is ill-deﬁned.
The same methodology can also often be used in a public participation process
(e.g. Kangas 1994; Pyk¨al¨ainen et al. 1999; Kangas and Store 2003). However,
there are many other aspects that also need to be accounted for, such as equity and
equality.
7.2 Public Participation Process
7.2.1 Types of Participation Process
The public participation process can be divided in many ways. First, it can be seen
either as a method, a mean to an end; or as an approach or ideology (Buchy and
Hoverman 2000). It can vary from passive participation organized by an agency to
self mobilization of local people at the face of some decision of interest to them.
Participation processes can also be divided to open (every interested citizen can
attend the process) and closed (only people invited by the managing organization
can attend); or to combined (all interest groups participate at the same time) and
separated (each interest group have their own process) (Tikkanen 2003).
One important division is division with respect to power given to the participat-
ing people (e.g. Arnstein 1969; Tikkanen 2003). Germain et al. (2001) divide the
process to six levels:
1. Informing
2. Manipulation
3. Consultation
4. Collaborative decision making
5. Delegated power
6. Total control by participants
In the ﬁrst case the managing agency informs the public about their future plans,
but there is no public avenue for feedback or negotiation. The process may aim at
educating people and/or changing their attitudes. It may be that the managing agency
truly believes that if the public knew what the professionals know, they would think
the same way (Daniels and Walker 1996). Such thinking can, however, also apply
to the participants (Webler et al. 2001).
In the second case, participation is organized but it is illusory in the sense that
public has no true power on the outcome. The purpose of the process may be to
engineer support for the project (Germain et al. 2001). This kind of participation
process may have a co-optation function, meaning that people can complain about
the project, although the agency is not responding; or, the process can have a ritual-
istic function, meaning that the participation is required by law, but there is no direct
need for the participation (Heberlein 1976).

--- Page 149 ---

148
7 Group Decision Making and Participatory Planning
In the third case, people can also express their own opinions about the project,
but the managing agency retains the power to make the decisions (Germain et al.
2001). In this case, public cannot be sure if their opinions are accounted for or
not (Heberlein 1976). It often places the public to a situation where they only can
react to the decision the agency has made (Germain et al. 2001). Thus, although
majority of studies have found that the public meeting inﬂuence the decisions of
the managing agencies (Chess and Purcell 1999), people may feel that they are not
adequately heard. And, at the same time, the personnel of the managing agency
may feel that the public is never satisﬁed, whatever they do (Buchy and Hoverman
2000). In this level, public participation is usually carried out using public hearings,
conferences and formation of advisory groups (Hjortsø 2004).
In the fourth case, the public is partly responsible for the resulting plan (Hyt¨onen
2000). The aim in this level is to build consensus through collaborative problem
solving, negotiation, conciliation and mediation, and joint decision making (Hjortsø
2004).
In the last two levels, the public has a dominant role in the decision making.
It has often been noted that a problem in public participation is the resistance of
the managing agencies (e.g. Garcia P´erez and Groome 2000). On the other hand, it
has also been noted that people usually avoid participating in the decision making
(Riedel 1972). Even if the people want to participate, it may be that they are only
interested in one or two issues. The silent majority may be satisﬁed with the work of
the managing organizations, so that those participating have the most extreme views.
7.2.2 Success of the Participation Process
The success of public participation can be viewed from two different viewpoints:
outcome and process (Chess and Purcell 1999). They also relate to speciﬁc concepts
of justice, namely distributive justice and procedural justice (Smith and McDonough
2001).
Some people may evaluate the public participation only with respect to the out-
come of the process. The criteria for the outcome include better accepted decisions,
consensus, education, and improved quality of decisions (e.g. English et al. 1993).
It may, however, be difﬁcult to say whether the outcome is favourable or not: people
may use the participation process to delay difﬁcult decisions or to block unwanted
proposals. It is also not easy to say how much the outcome is due to the participation
process and how much due to some other factors (Chess and Purcell 1999).
The process also has an effect to the success. It has been noted that a fair pro-
cedure make people react less negatively to unfair outcome (Brockner and Siegel
1996) and that fair outcome could make people think more positively about the
process (Van den Bos 1997). On the other hand, people may raise questions con-
cerning the process if the outcome is not to their liking (Webler and Tuler 2001).
Although researchers and practitioners agree on the importance of the process,
there still is no agreement on what the process should be like (Tuler and Webler

--- Page 150 ---

7.2 Public Participation Process
149
1999). There exist several criteria given to the participation process. Some of them
may be theoretical, such as ‘fairness’, ‘competence’ and ‘reasonableness’, some
may be based on participants’ goals and satisfaction (Chess and Purcell 1999). The
participants’ goals, on the other hand, may vary according to culture, environmental
problem, historical context, etc.
Tuler and Webler (1999) studied the opinions of participants concerning a good
process. They found seven normative principles that emerged from the interviews.
1. Access to the process
2. Power to inﬂuence process and outcomes
3. Structural characteristics to promote constructive interactions
4. Facilitation of constructive personal behaviours
5. Access to information
6. Adequate analysis
7. Enabling of social conditions necessary for future processes
Access to the process means getting people present and involved in the participation
process. It also means that in order to succeed, organization have to actively reach
out to people (Chess and Purcell 1999).
Structural characteristics to promote constructive interactions emphasise the
structure of social interaction: the time, location, availability and structure (e.g.
seatings) of the meetings. The time and location needs to be such that not only
experts who work on the case can attend (Heberlein 1976). Facilitation of construc-
tive personal behaviour, on the other hand, emphasises the behaviour of the people
involved. Respect, openness, understanding and listening are required. For instance,
the process may be good in every other respect, but if people feel they have not been
treated with dignity, the process does not feel fair (Smith and McDonough 2001).
With respect to access to information, people feel that both the knowledge and
experiences of layman and experts should be heard. Adequate analysis means that
people want to be able to understand the scientiﬁc reasoning behind the plans (Tuler
and Webler 1999).
Finally, enabling the social conditions necessary for future processes emphasises
that participatory process should not fuel the conﬂicts. On the contrary, it should
build better relationships between the interest groups in the region.
One task of planning is to uncover common needs and understanding (Webler
et al. 1995). According to McCool and Guthrie (2001), especially managers stress
learning as an important aspect of successful participatory planning process. In the
review made by Chess and Purcell (1999), the managing agencies could enhance
the success of the participatory process also by (i) holding public meetings in ad-
dition to other forms of participation, (ii) providing signiﬁcant technical assistance
to participants, (iii) conducting vigorous outreach, (iv) discussing social issues, and
(v) ﬁelding questions adequately. On the other hand, the unsuccessful participa-
tion in their review was characterized by (i) poor outreach to potential participants,
(ii) limited provisions of technical information, (iii) procedures that disempower
citizens, (iv) unwillingness to discuss social issues, and (v) timing of hearings af-
ter the decisions have been made or otherwise late in the decision-making process.

--- Page 151 ---

150
7 Group Decision Making and Participatory Planning
Good examples of unsuccessful planning processes are presented by Garcia P´erez
and Groome (2000).
While these general criteria for successful participatory process were clear, dif-
ferent people emphasise different issues. For instance, Webler et al. (2001) found
ﬁve different perspectives emphasising different issues and Webler and Tuler (2001)
found four differing perspectives in two different participatory processes. The per-
spectives in the latter were (a) a good process is credible and legitimate, (b) a good
process is competent and information-driven, (c) a good process fosters fair demo-
cratic deliberation, and (d) a good process emphasises constructive dialogue and ed-
ucation. In the former case, the perspectives were a bit different: (a) a good process
should be legitimate, (b) a good process should promote a search for common val-
ues, (c) a good process should realize democratic principles of fairness and equality,
(d) a good process should promote equal power among all participants and view-
points, and (e) a good process should foster responsible leadership.
Thus, some people emphasise discussion among the participants, some high qual-
ity information, some emphasise fairness and some leaders taking the responsibility.
The differences may be due to both participation situations, and the participating
people, and their occupation and previous experiences in participatory processes
(Webler and Tuler 2001; Webler et al. 2001). For instance, being a politician or a
proponent of property rights had a signiﬁcant effect on the preferred way of partic-
ipation. The good process also depends on the planning context (Webler and Tuler
2001).
7.2.3 Deﬁning the Appropriate Process
In participatory planning, the problem setting phase includes: (i) analyzing the plan-
ning situation, (ii) identifying the people affected by the decisions, (iii) assessing if
there is a conﬂict and the severity of the possible conﬂicts, (iv) deﬁning the level of
power given to the participants, and (v) gaining internal commitment in the manag-
ing agency for the participatory process (Kangas et al. 1996).
There exist several handbooks and guides for planning a participatory process
(e.g. Bleiker and Bleiker 1995; ERM 1995; English et al. 1993; ILO 2000; see also
Webler 1997). In more detail, the participatory planning process can be planned, for
instance, using the list of questions presented by English et al. (1993):
– What is the goal of the participation process?
– Who counts as affected party?
– Who should participate in the process?
– Where should participation occur in the decision making process?
– What should be the roles and responsibilities of the participants?
– How to handle ethical principles?
– How to balance technical and value issues?
– How much inﬂuence on the decision should the process have?
– How long should the process last?
– How should the process relate to other decision making activities?

--- Page 152 ---

7.2 Public Participation Process
151
1. Does the problem
possess a quality
requirement?
2. Do you have
sufficient information
to make a high quality
decision?  
3. Is the problem
structured?
4. Is acceptance of 
decision by subordinates
important for effective
implementation?
5. If you were to make 
the decision by yourself,
is it reasonably certain 
that it would be accepted
by subordinates?
6. Do subordinates share 
the organizational goals
to be attained in solving
the problem?
7. Is conflict among
subordinates over the 
preferred solutions likely?
C11
G11
C11
A11
C1
C11
G11
G11
A1
A1
YES
NO
YES
NO
YES
NO
NO
YES
NO
YES
YES
NO
YES
NO
NO
YES
NO
YES
NO
YES
NO
YES
NO
YES
NO
YES
NO
YES
NO
YES
NO
YES
NO
YES
Fig. 7.1 Original Vroom–Yetton model (Vroom and Yetton 1973; Lawrence and Deagen 2001)
A1: The manager solves the problem alone using information presently available to the manager
A11: The manager obtains any necessary information from subordinates and then decides on a
solution alone
C1: The manager shares the problem with relevant subordinates individually without bringing them
together as a group, gets their ideas and suggestions, and then makes decision alone
C11: The manager shares the problem with subordinates in a group meeting, getting their ideas and
suggestions, and then makes a decision that might or might not reﬂect the subordinates’ inﬂuence
G11: The manager shares the problem with subordinates as a group, and together manager and the
subordinates attempt to reach agreement on a solution
One possibility to analyze the level of participation is to use the so-called Vroom–
Yetton approach (see Vroom and Jago 1988). The Vroom–Yetton model is a set of
questions that lead to the different levels of participation in a decision making of an
organization (Fig. 7.1) It has been later developed to better suit a public participation
situation (Lawrence and Deagen 2001; Tikkanen 2003).
This approach may, however, be too simple, as there is evidence that only a few
people are willing to commit themselves to very intensive planning (e.g. Riedel
1972). Instead, they would like to have many different channels for participation,
varying from low to high intensity: some people will only want to have information
concerning the project, some would like to be consulted in the projects and some
would also like to participate in the decision making (ERM 1995). People would
also like to be able to choose the level of participation suitable for them. The ERM
(1995) manual advises planners to provide possibilities for participating at all these
levels.
Participation includes many phases, and in each of these phases several different
tools can be used. Janse and Konijnendijk (2007) present a set of tools for urban

--- Page 153 ---

152
7 Group Decision Making and Participatory Planning
Table 7.1 Categorization of individual tools (Janse and Konijnendijk 2007)
Tool categories
Tool sub-categories
Tools
Information
Information
• Newsletter
Provision
Distribution
• Website
• Contact and information
ofﬁce
Public events
• Information meetings
• Public exhibitions
• Information stands
• Public sensitization/
awareness raising events
• Events dedicated to the
presentation of project Vision
documents
Information collection
Social surveys/interviews
• Social surveys
• Interviews while walking
through the forest
Other surveys/inventories
• Land-use surveys
• Botanical surveys
• Forest inventory
Involvement of experts and
Involvement of the public
at large/interest groups
• “Sounding board” group
the public at large
• Public workshops
• Thinking days with the public
Expert analysis/connoisseur
approach
• Connoisseur approach –
“future managers meeting
local connoisseurs”
• Expert analysis of urban
woodland design
• Expert interviews
• Thinking days with experts
Involvement of children
• Youth work-play happening
and youths
• Design of a play-forest with
children
• Education activities
• Communication with children
and teenagers though
participation in practice
• Youth round table
Processing and use of
Assessment and analysis of
• Working group sessions
information
information GIS tools
• Visioning processes
• Multi-Criteria analysis
• Thematic maps/GIS mapping
• Mapping of social values and
meanings of urban green areas
• Assessing the recreational
potential of urban forest areas
by means of GIS

--- Page 154 ---

7.3 Tools for Eliciting the Public Preferences
153
forest planning, but this set of tools can be used also for other types of participa-
tory processes (Table 7.1). For instance, the information required for participatory
planning can be obtained with several different ways, for instance using public hear-
ings, surveys, or different group decision support methods (see also Heberlein 1976;
Hyt¨onen 2000). Each of these methods has its own drawbacks and beneﬁts. Glass
(1979) states that none of the methods used for participatory planning is able to
satisfy all the objectives of participation. Thus, the best technique depends on the
planning situation. Moreover, it also means that using several different methods may
be advisable.
There exist also several methodologies that are intended to cover the whole par-
ticipatory planning process. The readers interested are referred to a thorough review
by Tippett et al. (2007).
7.3 Tools for Eliciting the Public Preferences
7.3.1 Surveys
Surveys provide representative information on the population. A random sample of
people is selected and their opinions are asked using a questionnaire. The sample
can also be quite large, so that it is possible to investigate the opinions of larger
number of people than with any other method. In surveys, the questions are usually
structured and therefore easy to analyze quantitatively. On the other hand, this also
means that the questionnaires are rigid.
The response rates in questionnaires are usually quite low (around 40–58%,
Hyt¨onen 2000), and the high rate of non-response may cause bias to the results.
This may happen, if some groups respond more than others (e.g. Janse and Konij-
nendijk 2007). There may also be a trade-off between the length of the questionnaire
and the response rate.
One potential problem with surveys is that the public responding may be unin-
terested and uninformed so that their preferences may be based on false (or nonex-
istent) information of the consequences of the alternative actions (e.g. Lauber and
Knuth 1998). Thus, the preferences might be different if people had more informa-
tion on the subject.
Another potential problem is that the questions asked in surveys may be too gen-
eral to provide information that is directly useful for decision making in a particular
case (e.g. Satterﬁeld and Gregory 1998). For instance, the general environmental
values may seem quite similar among people, but the reactions of people to an ac-
tual planning situation may still vary a lot. Therefore, the results of surveys can best
be used as background information in a certain decision situation (Hyt¨onen 2000).
On the other hand, it is often possible to form the survey speciﬁcally for a certain
planning situation (e.g. McDaniels and Thomas 1999).
The data presented and the questions used for preference gathering in the deci-
sion support methods may, however, be too difﬁcult for the public to understand

--- Page 155 ---

154
7 Group Decision Making and Participatory Planning
(e.g. Heberlein 1976). Moreover, small differences in the wordings may produce
different results.
One promising method for public participation surveys is the social values map-
ping (Tyrv¨ainen et al. 2007). In this method, the participants are provided a map,
and they assign (pre-deﬁned) areas with values according to their preferences. The
values may include beautiful sceneries, space and freedom, or peace and tranquillity.
This approach is easily comprehended by the public and also provides the planners
spatially located information on the preferences of public. The participants could
also themselves delineate the areas they value, but this approach is by far more la-
borious to the planners (Kangas et al. 2007).
The information provided along the questions may also inﬂuence the public opin-
ion (e.g. McComas and Scherer 1999). It is possible that those who carry out the
survey may manipulate the information to serve their needs. On the other hand, it
may be that ‘overly’ positive information may not seem credible to participants. It
has been noted that one-sided positive information had the most persuasive inﬂu-
ence on those people, who already had positive assertions to the plan, and two-sided
balanced information for those persons, who initially opposed the plan (Hovland
et al. 1965). Furthermore, one-sided information had greatest effect on uneducated
people, and two-sided to educated people. All in all, information has least effect
when people already have well-formed opinions about the subject (e.g. McComas
and Scherer 1999).
Due to all these problems, Heberlein (1976) argues that opinions of public gath-
ered through survey may be poor indicators of the true preferences of public.
7.3.2 Public Hearings
In public hearings it is possible to consider the opinions of smaller groups. In hear-
ings people typically can express their opinions in a non-structured way, so that the
questions asked do not affect to the result. This way, they can also provide informa-
tion that the organizers have not thought of asking. However, the problem is that the
unstructured responses are much harder to analyze than structured surveys (for an
example see Hyt¨onen et al. 2002). They need to be analyzed using qualitative proce-
dures, usually by classifying the answers in some way. It may also be that much of
the information received is not useful in the planning process. For instance, people
may state facts concerning the area rather than their preferences.
As the hearings are not based on sampling, there is no guarantee on how well
the attending group represents the society at large. It may be that the hearing only
reﬂects the well-known views of well-identiﬁed interest groups, or that only oppo-
nents of the propositions attend to the meetings (Heberlein 1976). In the worst case,
the public hearings may represent the opinions of those dominating the discussion,
not even the persons in the meeting (Hyt¨onen 2000). However, there is also evidence
that the opinions gathered with public hearings have been “in most respects” similar
to the results of survey (O’Riordan 1976).

--- Page 156 ---

7.4 Problem Structuring Methods
155
On the other hand, people attending the hearings are likely to have more infor-
mation on the issues than people at large (e.g. Lauber and Knuth 1998). They may
also be more interested on the issues at stake. The difﬁcult question is how much
the opinion of persons, who do not have adequate information and who are even not
interested on it, should be accounted for in the planning.
It may also be that although ordinary people attend to the meeting, they do not
actually participate. It may be very intimidating to present ones opinion at public, so
that the opinions shared in the meetings are those of experts, people most severely
affected by the decisions or people who are not intimidated by behavioural norms
of the meetings (Heberlein 1976).
7.4 Problem Structuring Methods
7.4.1 Background
Problem structuring is an unavoidable phase of any decision support process. The
MCDM methods presented so far do not provide enough tools for efﬁcient problem
structuring. Therefore, speciﬁc problem structuring techniques or so-called “Soft
OR” have been developed. They may be useful for exploring the situation in such
a way that formal MCDM methods can be successfully applied in later phases.
Problem structuring methods are useful especially when the problem is complex
and/or ill-deﬁned (see Rosenhead 1989; Belton and Stewart 2002). Ill-deﬁned prob-
lem means that people are attempting to take some purposeful action that will im-
prove the current situation, but the possible actions to improve it are unknown, and
the goals undetermined. Problem structuring methods are intended to (Mingers and
Rosenhead 2004)
– Pay attention to multiple objectives and perspectives
– Be cognitively accessible to a broad range of participants
– Operate iteratively so that the problem representation adjusts to reﬂect the discus-
sions among the participants
– Permit partial or local improvement to be identiﬁed
The problem structuring approaches vary in their scope and complexity, but they all
aim at supporting problem structuring and problem solving. They all require a lot
of time and commitment from participants, when compared to public participation
using, for instance, public hearings. These methods are suitable when workshops
are used as a form of participation. Usually also a facilitator (i.e. person guiding the
decision makers in the use of analysis method) is needed to aid the work in groups.
One simple and popular way in problem structuring is to ask the participants to
write their ideas and views on Post-It notes, and then distribute them to the walls.
This way, a lot of detailed ideas can be generated by individuals; they are directly
recorded; and also easily seen by other participants (e.g. Belton and Stewart 2002,
p. 41). In the beginning, the ideas appear in an unstructured format, but as it is easy

--- Page 157 ---

156
7 Group Decision Making and Participatory Planning
to move the Post-Its around, structure can eventually emerge, when similar ideas are
clustered together. Clustering of the ideas together will further stimulate discussion
and improve mutual understanding.
According to Belton and Stewart (2002) the main beneﬁts of this approach is
that all people have an equal chance to contribute with their ideas, there is a degree
of anonymity involved and the process cannot be dominated by more powerful or
eloquent persons.
Many researchers have developed speciﬁc, more formal methods for problem
structuring (for a review see Mingers and Rosenhead 2004). In this book, two of
these are presented, namely Strategic Options Development and Analysis (SODA,
e.g. Eden and Simpson 1989) and Soft Systems Methodology (SSM, e.g. Checkland
1981, 1989). In its further developed form SODA is also called JOURNEY making
(JOintly Understanding, Reﬂecting, and NEgotiation strategy, Eden and Ackermann
2001).
7.4.2 Strategic Options Development and Analysis
SODA is based on cognitive mapping (Eden 1988). It was developed as a way to
represent individuals’ ‘construct systems’ based on Kelly’s personal construct the-
ory (Kelly 1955). SODA aims at presenting the problem as the decision maker sees
it, as a network of means and ends, or options and outcomes. The concepts linked
to the network are action-oriented, which makes it a suitable approach for strategy
development (e.g. Belton and Stewart 2002, p. 49). The cognitive maps can be done
in paper, but there exists also software for doing them, for instance Decision Ex-
plorer (Eden and Ackermann 1998). Using computer enables a thorough analysis of
the maps.
In the map, alternatives or contrasting ideas can be expressed as pairs or words
connected with dots like ‘saw mill ... paper mill’. Concepts are linked with ar-
rows to other concepts that they imply like ‘employment’ or ‘deterioration of water
quality’. The arrows can also be marked with minus signs to imply counter-effects,
like ‘loss of agriculture’ may imply negative effects on ‘quality of life’ (Fig. 7.2).
The (desired) outcomes or ends are concepts where the arrows lead (‘e.g. quality of
life’) and strategic options or means are the concepts from which the arrows lead to
outcomes (e.g. ‘pulp mill . . . saw mill’).
One cognitive map typically presents the cognition of one individual. In order to
utilise cognitive mapping in group work, these individual maps need to be merged.
This is what the SODA method is about. The idea is to structure multiple conﬂicting
aspects and put the individual views into context. Giving the individual views anony-
mously, through software, may help in reducing conﬂicts, as people can concentrate
on ideas rather than on persons (Ackermann and Eden 1994). It is, however, also
possible to make a group map from the start (Ackermann and Eden 2001).
According to Eden (1989, 1990), SODA includes the following phases (all of
which do not have to be included in the process):
1. Initial individual interviews and cognitive mapping
2. Feedback interview where the initial maps are veriﬁed

--- Page 158 ---

7.4 Problem Structuring Methods
157
increase forestry...
status quo
reduced flow in rivers...
maintained flow of rivers
loss of agriculture
viability of forestry...
collapse of forestry
deterioration in
water quality...
preservation of
water quality
controlled forestry...
uncontrolled
forestry
loss of afro-montane
ecosystems...
preservation of
afro-montane
ecosystems
quality of
life-
pulp mill... saw mill
secondary industry
employment
-
-
-
-
-
Fig. 7.2 An example of cognitive map for a problem of allocating land to exotic forest plantations
(Modiﬁed from Belton and Stewart 2002)
3. Analysis for key issues
4. Reﬁnement of issues
5. A workshop focusing on awareness
6. A workshop focusing on orientation
7. A workshop focusing on action portfolios
In the initial interview, participants express their view of the problem situation, and
the facilitator or consultant aims at capturing the ideas on the map. In the second
phase, the facilitator goes through the map with the participant, either exploring the
goals and then working gradually down to the options, or exploring the options and
then gradually working up to the goals. The idea is to make sure the map really
expresses the view of that participant.
In phase three, the individual maps are ﬁrst merged. This group map contains all
the concepts of each member of the group, but in the group map they can be seen
in the context of all other ideas (Eden 1990). Then, the key issues are identiﬁed
with formal research. First, clusters of material that are closely linked to each others
are searched for. Each cluster represents a problem within which there are problem-
related goals and strategic options (Eden and Ackermann 2001). The clusters are
re-arranged so that the goals are at the head of the cluster, and options in the tail of
the cluster (Fig. 7.3). The clusters are linked to other clusters so that goals of one
cluster lead to options of another, and options of one problem are consequences of
a sub-ordinate problem. The issues best describing each cluster are the key issues.
In phase four the resulting model is further reﬁned, using interviews with experts.
It means that issues missing are searched for, or orphan issues are included to the

--- Page 159 ---

158
7 Group Decision Making and Participatory Planning
Goals or
disastrous outcomes
Issues or 
possible strategies
More detailed options
Fig. 7.3 A cluster rearranged as a ‘tear-drop’ (Modiﬁed from Ackermann and Eden 2001)
groups and so on. In phases from ﬁve to seven, it is used as a device facilitating
negotiations within the group.
The cognitive map resulting from merging can be analysed using concepts such
as domain, centrality and criticality (Eden and Ackermann 1998; see also Mendoza
and Prabhu 2003). The idea is that these concepts help in ﬁnding important items
from the maps.
Domain reﬂects the number of items linked to a particular item, irrespective of
the causal directions (direction of the arrows). High domain values indicate a large
number of items directly affecting or affected by this particular item. In Fig. 7.2,
item pulp mill ... saw mill has fairly high domain with four connections, and loss
of agriculture fairly low with two connections.
Centrality reﬂects not only the direct impacts of an item to other items, but also
the indirect impacts, through indirect connections to other items downstream the
impact chains. The central score can be calculated as
Ci = S1
1 + S2
2 +...+ Sn
n
(7.1)
where Sj describes the j-level connections and n is the number of connections con-
sidered. The contribution of direct connections (S1) is higher than that of the con-
nections further away. In Fig. 7.2, loss of agriculture has two direct connections,
four second-level connections thus its central score with n = 2 would be four.
Criticality reﬂects the number of critical items linked to a particular item, where
the critical items are deﬁned by the decision makers. It can be calculated how many
critical items affect a particular item, and how many items are affected by it. The
former is related to the number of different paths to a particular item and the latter is
related to the number of paths from it. For calculating the criticality of an item, all
paths to it or from it are counted, and the critical items in these paths are summed.
For instance, in Fig. 7.2 there is a path from increase forestry . . . status quo to
quality of life either through loss of agriculture or through loss of afro-montane
ecosystems ... preservation of ecosystems. If employment is a critical factor, it is
in two backward paths from quality of life, and respectively in two forward paths

--- Page 160 ---

7.4 Problem Structuring Methods
159
Enter situation
considered
problematical 1.
Compare models
with real-world
actions 5.
SYSTEMS THINKING ABOUT THE REAL WORLD
THE REAL WORLD
Express the 
problem situation 2.
Formulate root definitions
of relevant systems of
purposeful activity 3.
Build conceptual models of
the systems named in
the root definitions 4.
Take action in to
improve the
problem situation 7.
Define possible
changes which are
both desirable and
feasible 6.
Fig. 7.4 The 7-stage representation of soft systems methodology (Modiﬁed from Checkland 2001)
from pulp mill . . . saw mill. For a more detailed example, see Mendoza and Prabhu
(2003).
7.4.3 Soft Systems Methodology
Soft Systems Methodology (SSM) is a learning system that is developed to aid a
system redesign. It is assumed that in any ‘human activity system’, i.e. in a sys-
tem of people making decisions and taking actions, each person have their own
way of thinking about the problematic situation (Checkland 2001). This is called
‘Weltanschaung’ or world view. For instance, the people who from one perspective
are declared as terrorists, from another perspective are seen as freedom ﬁghters. The
SSM in its original form consists of seven stages (Fig. 7.4). These stages, however,
need not to be rigidly followed and can be used more or less as an aid in the learning
process.
In stages 1 and 2, the participants are supposed to ﬁnd out what the problem
is and express it. In the ﬁrst versions of SSM the ﬁnding out was carried out with
so-called ‘rich pictures’ (e.g. Khisty 1995). In the rich pictures, the participants are
supposed to represent important relationships (e.g. between the citizens and city
administration) and problem issues related to them (e.g. how can citizen impact the
city to improve the recreation possibilities) as pictures.
In the later versions this ﬁnding out process was carried out with so-called analy-
ses 1, 2 and 3 (Checkland 2001). In the ﬁrst analysis the actors who have interest
in the situation or could be affected by it are identiﬁed. In the second analysis it is

--- Page 161 ---

160
7 Group Decision Making and Participatory Planning
analyzed what social roles are signiﬁcant in the situation, what norms of behaviour
are expected from role holders and what values are used to judge the role holders’
behaviour, i.e. the culture of the social system. In the third analysis the situation is
examined politically, by asking questions about the disposition of power. Thus, the
method has also evolved in time (Checkland 1999).
The third stage is carried out by naming relevant systems for carrying out pur-
poseful activity. Term ‘relevant’ here means that the system described is thought to
help in exploring the problem situation. The system is analysed using the so-called
CATWOE elements (Checkland 1985):
C ‘customers’
Who would be victims or beneﬁciaries of this system were
it to exist?
A ‘actors’
Who would carry out the activities of this system?
T ‘transformations’
What input is transformed into what output by this system?
W ‘world view’
What image of the world makes this system meaningful?
O ‘owner’
Who could abolish this system?
E ‘environmental
What external constraints does this system take as given?
constraints’
These questions are used to deﬁne the so-called ‘root deﬁnitions’ of the system. A
different root deﬁnition is needed for each perspective. Examples of root deﬁnitions
can be found, e.g. in Khisty (1995).
Example 7.1. A hypothetical example of root deﬁnition for a situation where citizen
of a city would like to create a recreation area from a forested area could be as
follows:
C
Citizen of the city
A
Committee chosen from among the citizen
T
Transforming the forest area to a recreation area
W
Improved recreation possibilities improve the well-being of all residents
O
Committee chosen from among the citizen
E
Budget constraints
From the city point of view the situation could be seen as a possibility to engage the
citizen in the administration:
C
City council members
A
City staff
T
Engaging the citizen more tightly to the city administration
W
Improving the citizen activity would improve the mutual understanding and
prevent conﬂicts
O
The city council
E
Time, staff and expertise
In the fourth stage, conceptual models (CM) of systems are built by participants
using these root deﬁnitions as a basis. A different system is built for each relevant
world view. Conceptual modelling of the system means assembling the verbs de-
scribing the activities that should be in the system named in the root deﬁnitions,

--- Page 162 ---

7.4 Problem Structuring Methods
161
Organize a
citizen committee
Collect available
GIS information
of the area
Select alternative
Make a plan
for skiing, riding
and cycling routes
Investigate the different
uses of the area and
using intensity
Check costs of the
alternative route
plans
Monitor
operational
activities
Define criteria for
effectiveness, efficacy,
efficinecy
Take control
action
Inquire
user preferences
for routes
Fig. 7.5 A hypothetical example of a CM for creating a recreation area with facilities for differ-
ent users
and structuring the verbs according to logical dependencies (Checkland 2001). For
each system, also a sub-system for monitoring and controlling the system is added.
It means deﬁning criteria for effectiveness (is the proposed action the right thing to
do), efﬁcacy (do the selected means produce intended results) and efﬁciency (the
ability to do the task without wasting resources) of the system.
The process is carried out in four steps (Checkland 1999):
1. Using verbs in imperative, write down the activities necessary to carry out T in
CATWOE. Aim for 7±2 activities.
2. Select activities which could be done at once.
3. Write those out on a line, then those dependent on these on line below, continue
in this fashion until all activities are accounted for. Indicate the dependencies by
arrows.
4. Redraw to avoid overlapping arrows where possible. Add monitoring and control.
In Fig. 7.5, a hypothetical example of a CM from citizen perspective for Example 7.1
is presented.
Then, the participants compare the real-world system with these ideal systems,
and debate about the changes that are feasible and/or desirable, and the actions that

--- Page 163 ---

162
7 Group Decision Making and Participatory Planning
need to be done (Fig. 7.4). The comparison is supposed to reveal the norms, stan-
dards and values among the participants. The idea is that when people compare the
ideal models deﬁned from different perspectives, their own way of perceiving the
world also changes (Checkland 1989). Thus, they are supposed to learn from each
others.
In example 7.2 a hypothetical example of the SSM methodology for improving
a regional participation process is presented.
Example 7.2. by Teppo Hujala
Background: In Finland, forestry centres are statutory county-wide organisa-
tions, the duties of which include promoting sustainable forestry by means of law-
enforcement, counselling of private forest owners and participating the development
of regional forest-based economies.
Step 1: Problem deﬁnition
Problem: The Forestry Centre of “Deep Finland” (pseudonym) is claimed to have
an inefﬁcient impact on forestry sector’s success and people’s well-being in its
region.
History: The Regional Forest Programme of Deep Finland, coordinated by the
forestry centre, has been created in cooperation with regional forest council for
period 2006–2010. The process gathered representatives of relevant interest par-
ties to form a comprehensive strategic plan for forest-related issues. The plan
is currently being implemented and monitored, and the new programme process
will begin in 2009.
The owners: The development director of the forest centre (programme responsi-
ble), Secretary General of the National Forest Programme.
The actors: Members of the regional forest council (nominated by the Ministry
of Agriculture and Forestry), decision-makers and employees of regional insti-
tutions related to forests, forest-related companies and entrepreneurs as well as
forest owners in the region, researchers who act as consultants in the transforma-
tion process.
Internal need and pressure for change: Strategic objective of the forestry cen-
tre to achieve and strengthen the role as an acknowledged expert organisation
which facilitates the sustainable success of the forest sector in Deep Finland
Region.
External need and pressure for change: Societal needs for legitimacy and political
pressures for more inﬂuential regional development and cost-effective activity.
Diversiﬁed values of citizens. Agenda for following all-inclusively the National
Forest Programme: “Sustainable welfare from diversiﬁed forests”.
Step 2: Envisioning
What and where are we now? CATWOE
C = client/customer: Citizenry of the region in general, forest owners and people
working within the forest-based sector in particular
A = actors: Members of the regional forest council

--- Page 164 ---

7.4 Problem Structuring Methods
163
T = transformation process: A series of meetings where alternative futures are
discussed and ﬁnally a suitable action strategy is agreed after.
W = world view: A constructive and collaborative planning process results in an
outcome which is both desirable and feasible.
O = owners: The development director of the forest centre (programme responsi-
ble), Board of the forestry centre, Ministry of Agriculture and Forestry (Unit for
Forestry Promotion), NGOs that were not invited for participation.
E = environmental constraints: Conﬂicting values, attitudes and interests among
the participants, limited time resource for in-depth discussions, lack of informa-
tion on which to base the decisions.
Core concept is formulated in the following form: The regional forest programme
has been formulated through a participative process. However, the process has
failed in reaching true collaboration, and thus, commitment to the plan is only
partial. The decisions have been based on inadequate information on people’s
(citizens and stakeholders) perspectives. Additionally, the forestry centre lacks
tools and money needed for monitoring and affecting the fulﬁlment of the plan.
Core vision: What do we want to be year 2012?: The Forestry Centre of Deep
Finland administrates a comprehensive repertoire of tools for collaborative plan-
ning, which contributes to a constructive formulation of the forest programme,
which is desirable and feasible. The programme process includes a monitoring
system, with which the development actions can be adaptively modiﬁed. Thus,
both the controllability and transparency of the programme have been improved,
and the forestry centre is publicly regarded as an effective expert organisation for
regional development.
Step 3: Analysis of the present and comparison with the vision
There seems to be a need for experimenting with different alternative collaboration
methods, studying possible conﬂicting values regarding desirable participation me-
thods, and most importantly, establishing a more thorough programme monitoring
system.
The analysis of a subsystem: Programme monitoring system:
C = client/customer: The employees of the forest centre, members of the regional
forest council.
A = actors: The same as above, as well as companies and entrepreneurs in the
forest sector in the region, relevant public institutions providing statistics (e.g.
municipalities, environment centre).
T = transformation process: Gathering relevant accumulative information ﬂow
into a special knowledge management system and deciding how to utilise the
system in the meetings of the regional forest council.
W = world view: Statistics on activities in forest sector can be monitored in (al-
most) real time, and that will help the council to manoeuvre the developmental
activities of the region.
O = owners: Companies or entrepreneurs not willing to join the information ex-
change scheme, employees of the forest centre who might not be ready for the
change in working culture.

--- Page 165 ---

164
7 Group Decision Making and Participatory Planning
E = environmental constraints: Inﬂexibility of public agencies, incompatibility of
information systems in different organisations, time schedule and functionality
of national forest resource data system.
Core concept of the sub-system year 2006: The information needed in monitoring
has been discussed in the meetings of the regional forest council.
Core vision of the sub-system year 2009: The requested information ﬂow has been
piloted and proven successful for contributing the council meetings.
Year 2012: The adaptive monitoring and management scheme is fully functioning
as an essential part of the work of the regional forest council.
Analysis of the social system: Members of the current regional forest council are
very interested in the new forms of participating the processes in forest sector,
and they are a bit frustrated because of the slow progress of the project; the em-
ployees of forest centre possess some resistance for change, which brings some
tension to the meetings: some consultancy to talk the issues through is needed
Analysis of the political system: The ministry pushes strongly to get the new up-
to-date national forest resource data system work: along with new monitoring-
based methods for acquiring and distributing money the forestry centre has to
overcome its resistance as well as the doubts of losing power with allowing more
open collaborating methods. Simultaneously, the forest programme is becoming
a more legitimate tool for promoting regional economy among the public.
Step 4: Mission, i.e. changing the situation towards the direction stated in the
core vision
Next Step 1: The regional forest council establishes a project for enhancing the
process of composing and monitoring the regional forest programme.
Next Step 2: Decision-support researchers study the possible conﬂicting values re-
garding the desirable participation schemes.
Next Step 3: In the light of the study results, the researchers and the council jointly
experiment with different alternative methods for collaborative planning (e.g. in-
teractive utility analysis).
Next Step 4: Based on the experiences and the feedback of the experiments, guide-
lines for applying alternative collaboration approaches and methods in regional
forest programme process are formulated.
Next Step 5: The enhanced programme process with guidelines, knowledge of val-
ues, and monitoring system is mobilised. The legitimacy and efﬁciency of the
process increases, and the forest centre reaches the targeted reputation.
7.5 Decision Support for Group Decision Making
Decision analysis methods are often useful in a group decision making or participa-
tory planning context. They force all the decision makers to systematically discuss
all the important issues. Without a systematic analysis, it could be that some issues
are addressed several times while other issues are not covered at all. It may be that

--- Page 166 ---

7.5 Decision Support for Group Decision Making
165
people have already made their minds, and rather than learning from each other, the
pros or favoured alternatives and cons of competing alternatives are repeated over
and over again (Dyer and Forman 1992). Decision analysis methods are usually
considered as most useful in fairly small groups.
There are two basic possibilities in using MCDS methodology in group decision
making: (1) to do a combined analysis for all decision makers at the same time or
(2) to do separate decision analyses for all decision makers and then either combine
them to obtain priorities of the group, or use them as a basis for negotiation.
Combined decision analysis means that only one analysis is carried out, and it
is supposed to capture the preferences of the group as a whole. In principle, for a
combined analysis the group should have a consensus on every parameter needed in
the analysis, in order to produce meaningful results. Decision makers should have,
for instance, basically similar objectives.
In AHP, combined analysis means that each pairwise comparison should be made
as a group. If a consensus cannot be reached, a good compromise is required. In
such a case the individual pairwise judgments can be combined using a geometric
mean of the pairwise comparisons to form one compromise value (Dyer and For-
man 1992). A geometric mean is used instead of arithmetic mean to preserve the
reciprocal property of the pairwise comparisons matrix (Aczel and Saaty 1983).
In other MCDS methods the group can, for example, vote to ﬁnd the appropri-
ate judgment. This kind of analysis is possible with any other MCDS method be-
sides AHP, for instance with any of the outranking methods or multicriteria approval
method.
The problem with the combined approach is that it is not possible to show the
effect of each individual in the group on the analysis. It makes it easy for dominating
participants to manipulate the results to their liking. Furthermore, the compromise
value obtained by geometric mean or voting may not describe the preferences of any
of the participants. On the other hand, it is possible that decision makers commit
themselves more readily to a plan made together.
When the analyses are made separately for each decision maker in a group,
it is possible to explicitly take each decision makers’ preferences into account.
If the separate analyses are combined, it is possible to show explicitly the ef-
fect each member has on the ﬁnal result. For instance, the correlations between
the result with and without one decision maker can be analysed (e.g. Vainikainen
et al. 2008). Moreover, even if the analyses were not combined at all, learning
more about the other participants’ preferences might in itself help in building
consensus.
One possibility for doing separate analyses for different decision makers is
to calculate the mean of priorities (e.g. Forman and Peniwati 1998). This ap-
proach is possible for all decision analysis methods that provide global priorities
for the alternatives. Such methods are, for instance SMART and AHP. Instead,
methods such as outranking cannot be used this way. In a separate analysis, the
decision models need not to be the same for all decision makers. For instance,
each decision maker can include criteria that the other DMs do not consider as
important.

--- Page 167 ---

166
7 Group Decision Making and Participatory Planning
Overall goal
Player 1
Decision
goal 1
Player n
Decision
goal n
Alternative 1
Alternative 2
Alternative 3
Alternative n
Player 2
Decision
goal 1
Decision
goal n
...
...
...
Decision
goal 1
...
Fig. 7.6 AHP hierarchy including player level
Another way to make separate analyses is to include a separate player level to
the analysis (Fig. 7.6). Then, the decision makers are included as one level in the
decision hierarchy. Each decision maker can also in this case have his/her own
decision model. Then, the players can also have different weights in the analysis,
with respect to the size of the group they represent or years of experience on the
matters handled or so on. If all the players have equal weights, the results of the
player-level aggregation and mean of DMs’ priorities are also equal. If the players
have varying weights, a weighted mean of the priorities would produce the same
results. Thus, the choice between these approaches is basically a matter of conve-
nience. The selection of weights for the groups is, by no means, self-evident. There-
fore, doing separate analyses for each group and using them as basis of negotiation
may be a good option.
The use of MCDS methods can also be combined to a more general participatory
planning context. The outline for such a situation using AHP is given by Kangas
et al. (2001). The outline (slightly modiﬁed) is as follows:
(i) Description of the planning situation.
Preliminary identiﬁcation of the relevant actors, interests, interested parties
and institutions.
(ii) Detailed identiﬁcation of the planning problem.
Starting an open participation process with traditional participation means and
information gathering channels. Organising the ﬁrst open meeting. Agreement
on the need for the planning process with the public. Reproduction of problem
images as stated by different actors and interested parties. Agreeing upon the
rules to be followed if no compromise could be gained in the process.
(iii) General formulation of the problem
Explaining how the decision making process is intended to be carried out in
the preliminary stage, and gaining commitment for the approach; modifying

--- Page 168 ---

7.5 Decision Support for Group Decision Making
167
the approach if necessary. Forming a planning group. The planning group
might include a professional planner, representatives of interested parties, and
other individuals. The tasks of the group include working as a link between all
the interests and the organisation responsible of planning, taking part in the
planning work on a voluntary basis, and controlling the process.
(iv) Creating decision models.
Each interest within the planning group creates its own decision model with
AHP together with planners. The planner would help to analyse how the dif-
ferent objectives can be integrated or are in conﬂict with another. The plan-
ner together with the members or representatives of the interest parties can
form an optimal solution from their point of view. Planning calculations are
performed for each interest. As background information on the planning prob-
lem, calculations on the area’s production possibilities as well as conventional
cost-beneﬁt analyses are presented to the participants. All the other informa-
tion gained through the participatory process so far is analysed, too, especially
that of qualitative nature. If found appropriate, the decision models are also
derived representing that information mass.
(v) The planning group tries to negotiate a solution.
The planner’s duty is to present possible compromise solutions and conduct
the negotiations. Planning calculations and their results are interpreted, justi-
ﬁed, and applied as background information in the negotiation process. New
calculations, if necessary, are carried out interactively. AHP calculations are
made using their multi-party options with differing weights of the partici-
pants so that participants can see the effects of different weighting schemes.
Assessments are made on how well each interest’s concerns are addressed in
alternative solutions, and holistic evaluations and conditional conclusions are
carried out. Especially those activities and goals, and their combinations, are
carefully considered, which could not be included in the AHP calculations.
(vi) Presenting the results of the working group.
The results are presented in an open meeting and in different participation
channels (such as newspapers, internet, open houses). Gaining feedback from
the public. Also, alternative solutions with probable consequences might be
presented to the public, especially if no initial consensus has been gained in
(v). If a general agreement is achieved, proceed to the next phase. Otherwise,
return to phase (v).
(vii) The planning group agrees on the follow-up procedure.
The planner writes a report including conclusions about the standpoints of
every interest party. The plan is presented widely for the public.
(viii) Control of the actual implementation of the chosen plan, as agreed upon
in (vii).
Assessing the need for continuous planning procedures according to princi-
ples of adaptive planning. Assessing the need for new planning processes.
Example 7.3. Assume three decision makers who have given their preferences with
respect to net incomes (Example 3.5) using pairwise comparisons. The comparisons

--- Page 169 ---

168
7 Group Decision Making and Participatory Planning
Table 7.2 Preferences of the three DM with respect to net incomes
NAT
SCEN
NORM
GAME
MREG
INC
(a)
NAT
1
0.25
0.5
0.5
0.143
0.111
SCEN
4
1
2
2
0.333
0.2
NORM
2
0.5
1
1
0.25
0.143
GAME
2
0.5
1
1
0.2
0.143
MREG
7
3
4
5
1
0.5
INC
9
5
7
7
2
1
(b)
NAT
1
0.5
1
1
0.333
0.25
SCEN
2
1
2
2
0.333
0.25
NORM
1
0.5
1
1
0.25
0.333
GAME
1
0.5
1
1
0.25
0.333
MREG
3
3
4
4
1
0.5
INC
4
4
3
3
2
1
(c)
NAT
1
2
3
3
0.333
0.25
SCEN
0.5
1
2
2
0.333
0.2
NORM
0.333
0.5
1
1
0.25
0.2
GAME
0.333
0.5
1
1
0.2
0.2
MREG
3
3
4
5
1
0.5
INC
4
5
5
5
2
1
Table 7.3 Aggregate preferences
NAT
SCEN
NORM
GAME
MREG
INC
NAT
1
0.630
1.145
1.145
0.251
0.191
SCEN
1.587
1
2
2
0.333
0.215
NORM
0.874
0.5
1
1
0.25
0.212
GAME
0.874
0.5
1
1
0.215
0.212
MREG
3.979
3
4
4.642
1
0.5
INC
5.241
4.642
4.718
4.718
2
1
Table 7.4 Priorities of the three decision makers, the arithmetic mean of them and the priorities
based on the aggregate preferences
DM 1
DM 2
DM 3
Mean priority
Aggregate priority
NAT
0.036
0.076
0.135
0.082
0.071
SCEN
0.113
0.126
0.088
0.109
0.11
NORM
0.064
0.077
0.056
0.066
0.067
GAME
0.061
0.079
0.054
0.065
0.066
MREG
0.272
0.279
0.265
0.272
0.276
INC
0.455
0.363
0.402
0.407
0.41

--- Page 170 ---

References
169
are presented in Tables 7.2a–c. The single preferences were combined at the level
of single comparisons using the geometric mean (Table 7.3). Then, the aggregate
preferences were used to calculate the aggregate priorities (Table 7.4). For com-
parison, the priorities of the single decision makers were also calculated from the
preferences in Table 7.2 and their arithmetic mean was calculated. The obtained
combined priorities from these two cases are almost identical, the difference being
due to rounding.
References
Ackermann, F. and Eden, C. 1994. Issues in computer and non-computer supported GDSSs. Deci-
sion Support Systems 12: 381–390.
Ackermann, F. and Eden, C. 2001. SODA – Journey making and mapping in practice. In: Rosen-
head, J. and Mingers, J. (Eds.). Rational analysis for problematic world revisited., Wiley, Chich-
ester, pp. 43–60.
Aczel, J. and Saaty, T.L. 1983. Procedures for synthesizing ratio judgments. Journal of mathemat-
ical Psychology 27: 93–102.
Arnstein, S. 1969. A ladder of citizen participation. Journal of American Institute Planners 35:
216–224.
Belton, V. and Stewart T.J. 2002. Multiple criteria decision analysis: an integrated approach.
Kluwer, Dordrecht.
Bleiker and Bleiker, H. 1995. Public participation handbook for ofﬁcials and other professionals
serving the public. 9th edn. Institute for participatory management and planning, Monterey, CA.
Brockner, J. and Siegel, P. 1996. Understanding the interaction between procedural and distribu-
tive justice: The role of trust. In: Kramer, R.M. and Tyler, T.R. (Eds.). Trust in organizations:
frontiers of theory and research, Sage, Thousand Oaks, CA, pp. 390–413.
Buchy, M. and Hoverman, S. 2000. Understanding public participation in forest planning: a review.
Forest Policy and Economics 1: 15–25.
Checkland, P. 1981. Systems thinking, systems practice. Wiley, Chichester.
Checkland, P. 1999. Soft systems methodology: a 30-year retrospective. In: Checkland, P. (Ed.).
Systems thinking, systems practice. Wiley, Chichester.
Checkland, P. 1985. From optimizing to learning: a development of systems thinking for the 1990s.
Journal of Operations Research Society 36: 757–767.
Checkland, P. 1989. Soft systems methodology. In: Rosenhead, J. (Ed.). Rational analysis for prob-
lematic world. Wiley, Chichester.
Checkland, P. 2001. Soft systems methodology. In: Rosenhead, J. and Mingers, J. (Eds.). Rational
analysis for problematic world revisited. Wiley, Chichester, pp. 61–90.
Chess, C. and Purcell, K. 1999. Public participation and the environment: do we know what works?
Environmental Science and Technology 33: 2685–2692.
Daniels, S.E. and Walker, G.B. 1996. Collaborative learning: improving public deliberation in
ecosystem-based management. Environmental Impact Assessment Review 16: 71–102.
Dyer, R.F. and Forman, E.H. 1992. Group decision support with the analytic hierarchy process.
Decision Support Systems 8: 99–124.
Eden, C. 1988. Cognitive mapping. European Journal of Operational Research 36: 35–43.
Eden, C. 1989. Using cognitive mapping for strategic options analysis (SODA). In: Rosenhead, J.
(Ed.). Rational analysis for problematic world. Wiley, Chichester.
Eden, C. 1990. Strategic thinking with computers. Long Range Planning 23: 35–43.
Eden, C. and Ackermann, F. 1998. Making strategy: the journey of strategic management. Sage,
Thousand Oaks, CA.

--- Page 171 ---

170
7 Group Decision Making and Participatory Planning
Eden, C. and Ackermann, F. 2001. SODA – The principles. In: Rosenhead, J. and Mingers, J.
(Eds.). Rational analysis for problematic world revisited. Wiley, Chichester, pp. 21–42.
Eden, C. and Simpson, P. 1989. SODA and cognitive mapping in practise. In: Rosenhead, J. (Ed.).
Rational analysis for problematic world. Wiley, Chichester.
English, M., Gibson, A., Feldman, D., and Tonn, B. 1993. Stakeholder involvement: open process
for reaching decisions about future uses of contaminated sites. Final Report to the US Depart-
ment of Energy. Waste management Research and Education Institute, University of Tennessee,
Knoxville.
Environmental Resources Management (ERM) 1995. Manual on public participation for investors
in Central and Eastern Europe and the Former Soviet Union. Final report to the European Bank
for Reconstruction and Development. Environmental Resources Management, London.
Forman, E. and Peniwati, K. 1998. Aggregating individual judgments and priorities with the ana-
lytic hierarchy process. European Journal of Operational Research 108: 165–169.
Freeman, R.E. 1984. Strategic management: A stakeholder approach. Pitman, Boston, MA.
Garcia P´erez, J.D. and Groome, H. 2000. Spanish forestry planning dilemmas: technocracy and
participation. Journal of Rural Studies 16: 485–496.
Germain, R.H., Floyd, D.W., and Stehman, S.V. 2001. Public perceptions of the USDA forest
service public participation process. Forest Policy and Economics 3: 113–124.
Glass, J.J. 1979. Citizen participation in planning: the relationship between objectives and tech-
niques. Journal of the American Planning Association 45: 180–189.
Heberlein, T.A. 1976. Some observations on alternative mechanisms for public involvement: the
hearing, public opinion poll, the workshop and the quasi-experiment. Natural Resources Journal
16: 197–212.
Hellstr¨om, E. 1997. Environmental forest conﬂicts from a international comparative point of view.
In Solberg, B. and Miina, M. (Eds.). Conﬂict management and public participation in land
management. EFI Proceedings No. 14. European Forest Institute, Joensuu.
Hjortsø, N.C. 2004. Enhancing public participation in natural resource management using Soft
OR – an application of strategic option development and analysis in tactical forest planning.
European Journal of operational research 152: 667–683.
Hovland, C.I., Lumsdaine, A.A., and Shefﬁeld, F.D. 1965. Experiences on mass communication.
Wiley, New York.
Hyt¨onen, L.A. 2000. Osallistamismenetelm¨at mets¨atalouden p¨a¨at¨oksenteossa. Mets¨atieteen
aikakauskirja 3/2000: 443–456.
Hyt¨onen, L.A., Leskinen, P., and Store, R. 2002. A spatial approach to participatory planning in
forestry decision making. Scandinavian Journal of Forest Research 17: 62–71.
International Labour Ofﬁce 2000. Public participation in forestry in Europe and North America.
Report of the FAO/ECE/ILO Joint Committee Team of Specialists on participation in Forestry.
International Labour Ofﬁce, Geneva.
Janse, G. and Konijnendijk, C.C. 2007. Communication between science, policy and citizens in
public participation in urban forestry – experiences from the neighborwoods project. Urban
Forestry and Urban Greening 6: 23–40.
Kangas, A., Haapakoski, R., and Tyrv¨ainen, L. 2007. Integrating place-speciﬁc social values into
forest planning – Case of UPM-Kymmene forests in Hyrynsalmi, Finland. Submitted manu-
script.
Kangas, J. 1994. An approach to public participation in strategic forest management planning.
Forest Ecology and Management 70: 75–88.
Kangas, J. and Store, R. 2003. Internet and teledemocracy in participatory planning of natural
resource management. Landscape and Urban Planning 62: 89–101.
Kangas, J., Hyt¨onen, L., and Loikkanen, T. 2001. Integrating the AHP and HERO into the process
of participatory natural resources planning. In: Schmoldt, D., Kangas, J., Mendoza, G.A. and
Pesonen, M. (Eds.). The analytic hierarchy process in natural resource and environmental deci-
sion making. Kluwer, Dordrecht, Managing Forest Ecosystems 3, pp. 187–197.
Kangas, J., Loikkanen, T., Pukkala, T., and Pyk¨al¨ainen, J. 1996. A participatory approach to tactical
forest planning. Acta Forestalia Fennica 251:24.

--- Page 172 ---

References
171
Kelly, G.A. 1955. The psychology of personal constructs. vol 1 and 2. Norton, New York.
Khisty, J. 1995. Soft systems methodology as learning and management tool. Journal of Urban
Planning and Development 121: 91–107.
Lauber, B.T. and Knuth, B.A. 1998. Reﬁning our vision of citizen participation: lessons from a
moose reintroduction project. Society and Natural Resources 11: 411–424.
Lawrence, R.L. and Deagen, D.A. 2001. Choosing public participation methods for natural re-
sources: a context-speciﬁc guide. Society and natural Resources 14: 857–872.
McCool, S.F. and Guthrie, K. 2001. Mapping the dimensions of successful public participation in
messy natural resources management situation. Society and Natural Resources 14: 309–323.
McComas, K.A. and Scherer, C.W. 1999. Providing balanced risk information in surveys used as
citizen participation mechanisms. Society and Natural Resources 12: 107–119.
McDaniels, T.L. and Thomas, K. 1999. Eliciting preferences for land use alternatives: a structured
value referendum with approval voting. Journal of Policy Analysis and Management 18: 264–
280.
Mendoza, G.A. and Prabhu, R. 2003. Qualitative multi-criteria approaches to assessing indicators
of sustainable forest resource management. Forest Ecology and Management 174: 329–343.
Metsien suojelun osallistavat prosessit Suomessa. Sidosryhmien osallistuminen prosesseihin.
2006. Maa- ja mets¨atalousministeri¨on raportteja, 50 pp.
Mingers, J. and Rosenhead, J. 2004. Problem structuring methods in action. European Journal of
Operational Research 152: 530–554.
O’Riordan, J. 1976. The public involvement program in the Okangan basin study. Utton, A.E.,
Sewell, W.R.D., and O’Riordan, T. Natural resources for a democratic society: public participa-
tion in decision-making. Westview, Boulder, CO.
Primmer, E. and Kyll¨onen, S. 2006. Goals for public participation implied by sustainable develop-
ment, and the preparatory process of the Finnish National Forest Programme. Forest Policy and
Economics 8: 838–853.
Pyk¨al¨ainen, J., Kangas, J., and Loikkanen, T. 1999. Interactive decision analysis in participatory
strategic forest planning: experiences from state owned boreal forests. Journal of Forest Eco-
nomics 5: 341–364.
Riedel, J.A. 1972. Citizen participation: myths and realities. Public Administration Review 32:
211–220.
Rosenhead, J. (Ed.) 1989. Rational analysis for problematic world. Wiley, Chichester.
Satterﬁeld, T. and Gregory, R. 1998. Reconciling environmental values and pragmatic choices.
Society and Natural Resources 11: 629–647.
Sipil¨a, M. and Tyrv¨ainen, L. 2005. Evaluation of collaborative urban forest planning in Helsinki,
Finland. Urban Forestry and Urban Greening 4: 1–12.
Smith, P.D. and McDonough, M.H. 2001. Beyond public participation: fairness in natural resource
decision making. Society and Natural Resources 14: 239–249.
Susskind, L. and Cruishank, J. 1987. Breaking the impasse: consensual approaches to resolving
public disputes. Basic Books, New York.
Tikkanen,
J.
1996.
Taajametsien
osallistava
suunnittelu.
Kokemuksia
Mets¨aRaahe–
suunnitteluprojektista. Mets¨antutkimuslaitoksen tiedonantoja, 603.
Tikkanen,
J.
2003.
Alueellisen
mets¨aohjelmaty¨on
osallistamismenettely
Pohjois-Suomen
mets¨akeskuksissa vuosina 1997–1998 ja 2000–2001. Mets¨atieteen aikakauskirja 3/2003: 321–
344.
Tikkanen, J., Isok¨a¨ant¨a, T., Pyk¨al¨ainen, J., and Leskinen, P. 2006. Applying cognitive mapping
approach to explore the objective structure of forest owners in a Northern Finnish case area.
Forest Policy and Economics 9: 139–152.
Tippett, J., Handley, J.F., and Ravetz, J. 2007. Meeting the challenges of sustainable development –
a conceptual appraisal of a new methodology for participatory ecological planning. Progress in
Planning 67: 9–98.
Tuler, S. and Weber, T. 1999. Voices from the forest: what participants expect of a public partici-
pation process. Society and Natural Resources 12: 437–453.

--- Page 173 ---

172
7 Group Decision Making and Participatory Planning
Tyrv¨ainen, L., M¨akinen, K., and Schipperijn, J. 2007. Tools for mapping social values of urban
woodlands and other green areas. Landscape and Urban Planning.79: 5–19.
UNECE 1998. Convention on access to information, public participation in decision-making and
access to justice in environmental matters. United Nations Economic Commission for Europe.
Vainikainen, N., Kangas, A., and Kangas, J. 2008. Empirical study on voting power in participatory
forest planning. Forthcoming in Journal of Environmental Management.
Van den Bos, K. Lind, K.E.A., Vermunt, R., and Wilke, A.M. 1997. How do I judge my outcome
when I do not know the outcome of others? The psychology of the fair process effect. Journal
of Personality Social Psychology 72: 1034–1046.
Wallenius, P. 2001. Osallistava strateginen suunnittelu julkisten luonnonvarojen hoidossa.
Mets¨ahallituksen mets¨atalouden julkaisuja, 41.
Webler, T. 1997. Organizing public participation: a critical review of three handbooks. Human
Ecology Review 3: 245–254.
Webler, T., Kastenholz, H., and Renn, O. 1995. Public participation in impact assessment: a social
learning perspective. Environmental Impact assessment Review 15: 443–463.
Webler, T. and Tuler, S. 2001. Public participation in watershed management planning: views on
process from people in the ﬁeld. Human Ecology Review 8: 29–39.
Webler, T., Tuler, S., and Krueger, R. 2001. What is a good public participation process? Five
perspectives from the public. Environmental Management 27: 435–450.
Vroom, V.H. and Yetton, P.W. 1973. Leadership and decision-making. University of Pittsburgh
Press, Pittsburgh.
Vroom, V. and Jago, A. 1988. Managing participation in organizations. Prentice Hall, New Jersey,
239 pp.

--- Page 174 ---

Chapter 8
Voting Methods
8.1 Social Choice Theory
8.1.1 Outline
The basic task of social choice is to combine individual preferences into a collec-
tive choice. When individual utility functions are combined, the aggregation could
be interpreted as a social welfare function (Martin et al. 1996). Social welfare can
be interpreted to include monetary terms such as commodity consumption as well
as other values such as collective activities, resource distribution, equity of gen-
erations, quality of life etc. (Arrow 1951). Sustainable forest management can be
seen as maximizing the social welfare obtainable from the forests (Kant and Lee
2004).
The social choice situation can be described with four components or parts:
Voters or players
Choice alternatives
The information of voters’ preferences over the alternatives
An aggregation device (voting model, voting procedure or voting method)
Throughout the history of democracy, voting has proved to be an efﬁcient tool for
making choices among decision alternatives, e.g. in different kinds of elections. It
is also, in one form or another, known to everybody. It means that voting is also a
reasonable approach for forest planning when multiple decision makers are involved
(e.g. Kangas et al. 2006a).
In the voting theory, special attention has been paid to systems that are neu-
tral and difﬁcult to manipulate, although it can be shown that any non-dictatorial
voting scheme is subject to manipulation (Gibbard 1973; Satterthwaite 1975). How-
ever, some methods require more information to manipulate an election than others
(Nurmi 1987).
173

--- Page 175 ---

174
8 Voting Methods
8.1.2 Evaluation Criteria for Voting Systems
There are several properties that are assumed to be reasonable requirements of a
voting system (e.g. Martin et al. 1996; Bouyssou et al. 2000). These include:
– Unrestricted domain or universality: the preferences are not constrained and the
system should be able to produce a deﬁnite result with all possible sets of prefer-
ences
– Non-dictatorship: no one person can dictate the result
– Non-imposition or citizen sovereignty: it should be possible to select any of the
candidates with some preferences
– Monotonicity: if the relative rating of the other candidates does not change, vot-
ing a candidate higher should never lower the candidate in resulting ordering, nor
should voting a candidate lower raise a candidate in the ordering
– Independence from irrelevant alternatives: the ranking of two candidates, x and y,
should only depend on the ranking of x and y, and not on some other alternatives
It has been shown that there is no (deterministic) method of aggregating individual
preferences over three or more alternatives that would satisfy these conditions for
fairness and always produce a logical result (Arrow 1951). One of these require-
ments, monotonicity, can also be replaced by
– Unanimity (Pareto efﬁciency): if all voters prefer x to y, y should not be chosen.
Often at least one of the Arrow’s conditions may be irrelevant (Kant and Lee 2004).
Therefore, a suitable method can probably be found for most problems. In all, voting
theory can be seen as a credible alternative in group decision making and partici-
patory planning. However, it is not suitable to all problems: for instance, problems
involving distribution of resources need to be solved with other methods (Sen 1997).
In addition to these requirements, many others have been set to voting systems.
Among others, these include
– Consistency: if the voters in two arbitrary groups in separate elections select the
same candidate, the result should not change if the groups are combined.
– Neutrality: the system itself does not promote any alternative. The rules in the
case of ties, however, may violate this rule.
– Anonymity: the voter’s name does not affect.
For a complete list of requirements, the readers are referred to Cranor (1996).
8.2 Positional Voting Schemes
8.2.1 Plurality Voting
Many voting systems have a lot to do with the utility theory. The most common
of these, plurality voting (also called as ﬁrst-past-the-post), takes into account the

--- Page 176 ---

8.2 Positional Voting Schemes
175
preference ordering of the voters, albeit only with respect to the best candidate. A
major drawback of this method is that it is generally considered to be very easy to
manipulate. It is often worthwhile for a voter to vote for some other alternative than
the best choice, for instance, in order to avoid the worst choice.
The Block vote is the most common extension of the plurality to multi-seat elec-
tions (Reynolds and Reilly 1997). The voter must vote for the number of the candi-
dates as to be elected, giving one vote to each. Majority voting is similar to plurality
voting, except that the winning candidate must receive more than 50% of the votes.
Plurality voting satisﬁes the monotonicity criterion.
Example 8.1. Assume 21 voters and three candidates, a, b and c. The preference
orders of the voters are
– Ten voters has a preference order a > b > c
– Six voters has a preference order b > c > a
– Five voters has a preference order c > b > a
Thus, in plurality voting a has ten votes and wins the election. Yet, majority of
voters, 11, thinks that candidate a is the worst possible selection.
8.2.2 Approval Voting
The approval voting method was independently proposed by several people in the
1970s (Brams and Fishburn 1983). It is a voting procedure in which each voter votes
for as many candidates as she/he wishes. In other words, the voter votes for all can-
didates of whom she/he “approves”. Each candidate approved by the voter receives
one vote. The candidate receiving the greatest total number of votes is declared to
be the winner.
This method is harder to manipulate by any one voter than plurality voting (Niemi
1984). This is because it requires information about the distribution of approvals of
the alternatives in order to be manipulated (Nurmi 1987). Usually it is, however, a
good strategy to vote sincerely. It can be shown that the optimal strategy in approval
voting is to vote for all candidates that are better than average (e.g. Kim and Roush
1980). One drawback in approval voting is that it tends to promote moderate candi-
dates, or candidates that no one has ranked to the last places. This voting system is
also monotonic.
The approval voting is argued to be the best voting system, provided that the real
preferences of voters are dichotomous (i.e. candidates are either approved or dis-
approved, Yilmaz 1999). This might not be the case except occasionally. Trichoto-
mous or multichotomous preferences can, however, also be applied in modiﬁed vot-
ing schemes. For example, Yilmaz (1999) proposed a system where voters classify
the candidates in three classes: Favourite, Acceptable and Disapproved. Then, the
candidates are compared pairwisely so that a candidate scores a vote whenever it
is ranked higher than the pair. It means that a favourite scores a point against ac-
ceptable and disapproved, while acceptable only scores a point against disapproved

--- Page 177 ---

176
8 Voting Methods
candidates. If one candidate has a majority against all others, it is chosen. Other-
wise, the candidate with most disapproval votes is eliminated and the procedure is
applied again until the winner can be found. Felsenthal (1989), on the other hand,
proposed a method where voters can approve a candidate, disapprove it or abstain
from voting.
Example 8.2. Assume the same 21 voters and three candidates, a, b and c as in ex-
ample 8.1. The preference orders of the voters are also the same as above,
– Ten voters has a preference order a > b > c
– Six voters has a preference order b > c > a
– Five voters has a preference order c > b > a
Now, the result depends on how many candidates each voter approves. If each voter
approves only the best alternative, candidate a wins, similarly as in plurality voting.
If all voters approve the two best alternatives, a gets 10 votes, b gets 21 votes and c
11 votes. In this case, b wins. If only those preferring c vote approve also the second
best candidate, b gets 11 votes and wins.
8.2.3 Borda Count
The Borda count, originally introduced by de Borda (l78l) takes into account the
whole preference ordering: given n candidates, each voter casts n votes for the most
preferred candidate, n −1 votes for the second most preferred one and ﬁnally 1
vote for the least preferred candidate (e.g. Saari 1994). Equivalent results can be
obtained by giving n−1 votes for the preferred, n−2 for the second most preferred
and ﬁnally 0 for the least preferred alternative. The winner is the candidate getting
the most votes. It has been proved, among others by ? (?), that the Borda count
chooses the alternative which, on average, stands highest in the voters’ preference
orderings.
The problem with this method is that the result may be a function of the number
of candidates (Riker 1982). The Borda count also fails to satisfy the independence
of irrelevant alternatives criterion. This method has also been criticised because of
its susceptibility to manipulation. The method can be manipulated, for example, by
including irrelevant alternatives or by altering the preference ordering. However,
it is more difﬁcult to manipulate than many other methods: the voters would need
to know the other voters’ Borda scores before the voting in order to manipulate it
(Nurmi 1987; Mueller 1989). Like other positional voting systems, Borda count is
monotonic.
Also truncated forms of Borda count have been presented. Truncation means
that not all alternatives need to be given a score: only the top set of the alterna-
tives is given a score while the rest of the alternatives score zero points (Saari and
van Newnhizen 1988). Such an approach may seem tempting, especially if there
are many alternatives to be considered. However, this approach may give different
results depending on how the ranking is truncated, although the preferences of the

--- Page 178 ---

8.3 Pairwise Voting
177
voters remain the same. It means that given three candidates, for example, any one
of them can be elected, depending on whether only the best, the best two or all
candidates are ranked. The same problem, however, applies to approval voting: the
result depends on how many of the best alternatives are approved (Saari and van
Newnhizen 1988).
Example 8.3. Assume the same 21 voters and three candidates, a, b and c as in
example 8.1. The preference orders of the voters are also the same as above,
– Ten voters has a preference order a > b > c
– Six voters has a preference order b > c > a
– Five voters has a preference order c > b > a
In this case, the candidates get votes as
– A: 10·2+6·0+5·0 = 20
– B: 10·1+6·2+5·1 = 27
– C: 10·0+6·1+5·2 = 16
In this case, candidate b wins.
8.3 Pairwise Voting
Any voting system which chooses the Condorcet winner when it exists is known as a
Condorcet method (Condorcet 1785). In this method, each voter ranks all candidates
in order of preference. Candidates are then paired and compared in turn with each
of the other candidates. The vote counting procedure then takes into account each
preference of each voter for one candidate over another. The Condorcet winner is
a choice which obtains a majority of votes against any other alternative in pairwise
elections. The Condorcet winner does not always exist, but if it does, it can be found
using Copeland rule or Simpson rule. Condorcet’s method is said to eliminate the
need for strategic voting.
Copeland’s method is a variant of the Condorcet method in which the candidates
are ranked on the basis of the pairwise victories (Copeland 1951). This method
belongs to majoritarian procedures. Pairwise victories, defeats and ties are counted
for each candidate, alternative a scores +1 points if a majority of voters prefers it
to some other alternative b, and −1 if majority of voters prefer b to a. Sum of these
scores gives the Copeland score and the candidate with the largest score is declared
the winner. This method often leads to many ties.
In Simpson’s voting rule, the number of voters preferring a to b, N(a, b), is
counted over all b distinct from a (Simpson 1969). The Simpson’s score is the min-
imum of these values. Then, to win with Copeland score, an alternative must defeat
all the other alternatives at least by a tiny marginal, but for winning with Simp-
son’s rule it may be enough if any other alternative does not have a large majority
against it.

--- Page 179 ---

178
8 Voting Methods
Selecting the Condorcet winner is often perceived as an important property of
the voting methods. The Condorcet criterion is, in fact, regarded as so important
that voting schemes are evaluated with respect to how probable it is that the Con-
dorcet winner is elected with the schemes if one exists. This probability is called the
Condorcet efﬁciency (e.g. Gehrlein and Lepelley 2001). For example, neither plu-
rality voting nor approval voting nor Borda count always chooses Condorcet winner.
Except for Borda count, they even can choose the Condorcet loser, i.e. the alterna-
tive that loses to all the other alternatives in pairwise voting. However, Borda count
is the most likely method to choose the Condorcet winner, when the number of al-
ternatives is large (Mueller 1989). On the other hand, Condorcet criterion is also
criticized, since it does not note the differences in the pairwise votes, i.e. preference
intensities (Heckelman 2003).
Example 8.4. Assume the same 21 voters and three candidates, a, b and c as in ex-
ample 8.1. The preference orders of the voters are also the same as above,
– Ten voters has a preference order a > b > c
– Six voters has a preference order b > c > a
– Five voters has a preference order c > b > a
The preferences of voters can be presented as a matrix giving the number of voters
preferring row alternative to column alternative, i.e. the pairwise votes
a
b
c
a
10
10
b 11
16
c 11
5
In this case, b gets the majority against both a (11 votes) and c (16 votes) and it
wins. With Copeland criterion, the results are
a
b
c
a
–1
–1
b 1
1
c 1
–1
With this criterion, a has a score −2, b 2 and c 0, and candidate b is the winner also
with this criterion.
Example 8.5. If three new voters are included in the example above, with prefer-
ences c > a > b, and the preferences are otherwise similar than above, the pairwise
votes would be
a
b
c
a
13
10
b 11
16
c 14
8

--- Page 180 ---

8.4 Fuzzy Voting
179
which means that a majority of voters think that a > b (13 voters), c > a (14 voters)
and that b > c (16 voters). Thus, the preferences of majority are not transitive. In this
case, Condorcet winner does not exist. With Simpson’s score, however, alternative
b is chosen, since it loses to a only by two votes.
8.4 Fuzzy Voting
The voting schemes can also be formed using fuzzy set theory. In fuzzy voting
systems the preference relations of the alternatives are assumed fuzzy (Kacprzyk
et al. 1992; Nurmi 1996; Garc´ıa-Lapresta and Mart´ınez-Panero 2002). The simplest
example of fuzzy voting is the fuzzy approval voting. The classic approval voting
can be formalized to a formula
rk
i =

1, ifalternativexi isapprovedbyvoterk
0, otherwise,
(8.1)
and then, the ﬁnal vote for alternative i is
r(xi) =
m
∑
k=1
rk
i ,
(8.2)
where m is the number of voters. A fuzzy version of approval voting is obtained
simply by deﬁning the approval of the alternatives rk
i ∈[0,1], i.e. the degree of
approval may vary from 0 to 1 (Garc´ıa-Lapresta and Mart´ınez-Panero 2002). The
ﬁnal vote is achieved by summing the approvals of the alternatives i over voters k in
a similar fashion as in classic approval voting.
The fuzzy approach can also be used for other voting schemes. For instance, the
classic Borda Count voting can be formalized as a pairwise voting using a preference
matrix R for each voter k as (Garc´ıa-Lapresta and Mart´ınez-Panero 2002)
Rk =
⎛
⎜
⎜
⎝
rk
11
rk
12
. . .
rk
1n
rk
21
rk
22
. . .
rk
2n
. . .
. . .
. . .
. . .
rk
n1
rk
n2
. . .
rk
nn
⎞
⎟
⎟
⎠
(8.3)
where n is the number of alternatives and
rk
ij =

1, ifalternativexi ispreferredtoalternativexj byvoterk
0, otherwise,
(8.4)
Then, voter k gives alternative xi score
rk(xi) =
n
∑
j=1
rk
ij
(8.5)

--- Page 181 ---

180
8 Voting Methods
which equals the number of alternatives that are worse than alternative xi. The ﬁnal
vote is obtained by summing the individual votes as
r(xi) =
m
∑
k=1
rk(xi)
(8.6)
The fuzzy relations can be deﬁned, e.g., so that relation rij = 0.5 means that alterna-
tives i and j are equally good, rij = 0.0 means that j is strictly preferred and rij = 1.0
means that i is strictly preferred to j. Values between 0.5 and 1.0 represent slight
preference of i, values between 0.0 and 0.5 slight preference of j. Typically, a recip-
rocal property is assumed, giving rij + r ji = 1. Furthermore, it is assumed that the
preference relation of alternative i with itself is 0.5 (Garc´ıa-Lapresta and Mart´ınez-
Panero 2002). The fuzzy relation can also be deﬁned so as to describe the certainty
of the preference, not only the intensity of preference.
The vote of individual k for alternative xi can be deﬁned as the sum of preference
intensities among the alternative and those worse than it as (Garc´ıa-Lapresta and
Mart´ınez-Panero 2002)
rk(xi) =
n
∑
j=1
rk
ij >0.5
rk
ij
(8.7)
The ﬁnal vote is calculated similarly as in classic Borda. It would, however, be
possible also to use other borderline than 0.5 for preference intensity.
The fuzzy approach gives more freedom to voters to give scores according to their
real preferences. However, the greatest value of fuzzy voting schemes may be the
fact that many of the famous results of voting theory, namely Arrow’s impossibility
theorem and the results of Gibbard and Satterthwaite can be done away (Nurmi et al.
1996). It means that by modifying the assumptions, it is possible to form aggregating
rules that satisfy the Arrow’s conditions. Another example of modiﬁed assumptions
is the probability voting.
8.5 Probability Voting
In probability voting, the voters are asked to give the probabilities for voting any one
candidate instead of strict preference relations. In probabilistic approval voting, on
the other hand, the probability for approving any one candidate is required. These
probabilities play the same role as the individual preference relations. They are to be
interpreted so that the more likely an individual is to vote for a certain alternative, the
more desirable that alternative is (Nurmi et al. 1996). The individual probabilities
pji of individual j voting for alternative i can be aggregated to the probability of a
group pi simply by calculating the mean probability for alternative i among all the
members of group. Even this simple voting scheme fulﬁls all the Arrow’s conditions,
but the results may be harder to interpret than in normal votes.
The actual decisions could even be calculated with a lottery. For instance, a prob-
abilistic version of Borda count was presented by Heckelman (2003). In this system,

--- Page 182 ---

8.6 Multicriteria Approval
181
a classic Borda count vote is ﬁrst taken. However, the ﬁnal decision is obtained by a
lottery, where the probability of each alternative to win is its Borda score relative to
the sum of all Borda points. In unique decision situations this might be a bit peculiar
system (Nurmi et al. 1996). However, when a series of decisions is made, probabil-
ity voting may give also a small interest group an inﬂuence which is in proportion
to its size (Heckelman 2003).
8.6 Multicriteria Approval
8.6.1 Original Method
Fraser and Hauge (1998) presented an application of approval voting, called multi-
criteria approval (MA), which can be used in multicriteria decision making. Tech-
nically taken, in multicriteria approval the voters of social choice theory are substi-
tuted with multiple criteria. The standard version of MA has been developed for one
decision maker, but if the decision makers can agree upon the importance order of
the criteria and the border for approval for each criterion, the standard version suits
also for group decision making.
Multicriteria approval method begins with the determination of the alternatives
and the criteria. The criteria are ranked by their importance. The next step is to de-
termine which of the alternatives will be approved for each criterion. Fraser and
Hauge (1998) deﬁned the border as the average evaluation of the alternatives with
respect to the criterion considered. In other words, in maximization problems each
alternative i, with respect to each criterion j, is approved if the criterion value is
above average, and disapproved if otherwise. (in minimization problems, the direc-
tion is changed or the values are ﬁrst multiplied by −1). With numerical criterion
values cj(ai), the border is the mean criterion value ¯c j = ∑m
i=1
c j(ai)
m
of the m alter-
natives, with respect to each criterion j. This approval border is justiﬁed by the fact
that according to approval voting theory, the optimal strategy for a voter is to vote
for all the candidates that are above average (e.g. Kim and Roush 1980). When the
criterion is evaluated in an ordinal scale, a middle rank has been used for approval
(e.g. Laukkanen et al. 2002). The approval border could, however, be deﬁned also
in other ways.
There are ﬁve possible classes of voting results: unanimous, majority, ordinally
dominant, deadlocked and indeterminate (Fig. 8.1). The voting result is Unanimous
if one alternative has been approved with respect to all criteria while the other al-
ternatives have not. Majority result occurs when one alternative has been approved
with respect to the majority of criteria, in the importance order, starting with the
most important one. If there are, for example, ﬁve criteria, for a majority result one
alternative needs to be approved by at least the three most important of them.
If one alternative has been deﬁned to be superior on the grounds of the order
of criteria, the result is Ordinally Dominant. For instance, if two alternatives are
approved by the same number of criteria, the one which is approved by the more

--- Page 183 ---

182
8 Voting Methods
Unanimous
c1
c2
c3
a1
+
+
+
a2
+
+
−
a3
+
−
+
Majority
c1
c2
c3
a1
+
−
+
a2
+
+
-
a3
−
+
+
Ordinally
dominant
c1
c2
c3
a1
−
+
+
a2
−
+
−
a3
+
-
+
Indeterminate
c1
c2
c3
a1
−
−
+
a2
+
−
−
a3
−
+
+
Fig. 8.1 The possible voting outcomes
important criteria, is better. Alternative k is classiﬁed to be ordinally dominant if
(Fraser and Hauge 1998)
f (n∗)ki ≥0 ∀n∗, 1 ≤n∗≤n, ∀i ̸= k
(8.8)
where
f (n∗)ki =
n∗
∑
j=1
gijk
and
gijk =
⎧
⎪
⎪
⎪
⎨
⎪
⎪
⎪
⎩
1,
if c j(ak) > ¯cj ∧cj(ai) ≤¯cj
0,
if c j(ak) > ¯cj ∧cj(ai) > ¯cj
0,
if c j(ak) ≤¯cj ∧cj(ai) ≤¯cj
−1,
if c j(ak) ≤¯cj ∧cj(ai) > ¯cj
(8.9)
The process is based on the idea that approval with respect to a more important
criterion can completely compensate disapproval with respect to a less important
criterion (Fraser and Hauge 1998). However, approval with one more important
criterion does not compensate disapproval with respect to two less important criteria.
The result is Deadlocked if there are two or more alternatives that are deﬁned
to belong to the above mentioned classes. These alternatives are approved and dis-
approved with respect to the same criteria, and so it is not possible to determine
one single superior alternative. The result is Indeterminate if there is not enough
information to determine one superior alternative. This is the case, for instance, if
alternative A is approved by more criteria than B, but on the other hand, B is ap-
proved by more important criteria than A. In this case, more information is needed
in order to make the recommendation.

--- Page 184 ---

8.6 Multicriteria Approval
183
Table 8.1 Original values
Alternative
Net income
1,000AC
Stumpage value
(million eurosAC)
Scenic beauty
index
NAT
0
0.71
5.5
SCEN
79.6
0.28
5.7
NORM
38
0.6
5.4
GAME
33
0.61
5.5
MREG
102.3
0.51
5.2
INC
191.7
0.13
4.9
Example 8.6. The problem 3.5 was analysed with MA, using the average criterion
value as the approval border. The approval borders for the criteria were 74.1 for net
incomes, 0.47 for stumpage value and 5.36 for scenic beauty. The original values
are presented in Table 8.1, and the alternatives that are approved and disapproved
in Table 8.2. Net incomes are assumed to be the most important criterion, stumpage
value the second and scenic beauty the least important one.
In all, three alternatives were approved with respect to net incomes, and four
with respect to other criteria. None of the alternatives was approved with respect to
all three criteria, but ﬁve of them were approved with respect to two criteria. Thus
INC cannot be selected, since it is only approved by one criterion. Since MREG and
SCEN were approved with respect to the most important criterion, they are better
than NAT, NORM and GAME (the last three lose to ﬁrst two in the comparison
with n∗= 1 and f(n∗) = −1). Of the last two alternatives, MREG is approved with
respect to stumpage value, and SCEN is not, so that SCEN has f(n∗) = −1 with
n∗= 2. MREG alternative is the winner with a majority result.
8.6.2 Fuzzy MA
Fuzzy MA is based on a concept of fuzzy approval. In this case, the approval border
with respect to each criterion is deﬁned with a membership function µ(cij) for a
Table 8.2 Approvals and disapprovals of the alternatives with respect to each criterion
Alternative
Net income
1,000AC
Stumpage value
(million euros)
Scenic beauty
index
NAT
−
+
+
SCEN
+
−
+
NORM
−
+
+
GAME
−
+
+
MREG
+
+
−
INC
+
−
−

--- Page 185 ---

184
8 Voting Methods
Table 8.3 Fuzzy approvals
Alternative
Net income
1,000AC
Stumpage value
(million euros)
Scenic beauty
index
NAT
0
1
0.92
SCEN
0.36
0.1
1
NORM
0
1
0.71
GAME
0
1
0.92
MREG
0.56
0.76
0.29
INC
1
0
0
statement ˜A ‘alternative i with criterion value cij is approved with respect to criterion
j’. Thus, it describes a degree of approval.
The results of fuzzy MA can be calculated in the same way as the results of
basic MA (Kangas et al. 2006b). In (8.8) it is required that f(n∗)ki always remains
positive. However, as the values of gijk only have values −1, 0 and 1, the smallest
negative value possible is in fact −1. Therefore, in fuzzy MA, the condition is given
as
f (n∗)ki > −1 ∀n∗, 1 ≤n∗≤n, ∀i ̸= k
(8.10)
where
f(n∗)ki =
n∗
∑
j=1
gijk
and
gijk = µ(ckj)−µ(cij).
(8.11)
If the condition were not relaxed from (8.8), it would mean that all alternatives
that are even slightly less approved than the best alternatives with respect to the
most important criteria are immediately out of question. This is not in line with the
concept of fuzzy approval. However, the relaxation does not affect to the results:
given a crisp approval border, fuzzy MA gives the same recommendation as basic
MA. Thus, basic MA is a special case of the fuzzy MA. In the fuzzy case, it is
possible that there are several alternatives that have f(n∗)ki > −1. Then, the one
with greatest value is chosen. It also means that the possibility of ties is lower than
in basic analysis.
Example 8.7. The approval borders in the problem above are deﬁned to be fuzzy
so that the minimum approval border is min +0.2 · (max−min) and the maxi-
mum approval border min +0.8(max−min) for each criterion variable. Thus, to
be at all approved, the alternative must have net incomes above 20% of the range
of variation, and to be fully approved, above 80% of range of variation. In be-
tween, the alternatives are more or less approved. The fuzzy approvals are given in
Table 8.3.
Then, the alternatives are compared pairwisely with respect to each criterion in
turn, i.e. with n∗= 1, 2, 3. In the ﬁrst comparison with respect to net incomes,

--- Page 186 ---

8.6 Multicriteria Approval
185
Table 8.4 Comparisons with respect to net incomes
NAT
SCEN
NORM
GAME
MREG
INC
NAT
−0.36
0
0
−0.56
−1
SCEN
0.36
0.36
0.36
−0.2
−0.64
NORM
0
−0.36
0
−0.56
−1
GAME
0
−0.36
0
−0.56
−1
MREG
0.56
0.2
0.56
0.56
−0.44
INC
1
0.64
1
1
0.44
(Table 8.4) alternatives NAT, NORM and GAME already obtain f(n∗) = −1, since
they are not at all approved with respect to net incomes and INC is fully approved.
Thus, these alternatives are out of question. In the next comparison, the comparisons
based on stumpage value are added to these values (Table 8.5). In this time, no alter-
natives were excluded. However, the comparison between NAT and SCEN turned
in favour of NAT. Thus, if INC alternative were not among the alternatives, NAT
could be a good choice. When the ﬁnal comparison with respect to scenic beauty is
added, MREG is the winner (Table 8.6). Its worst value, −0.31, is better than the
other alternatives left, SCEN (−0.46) and INC (−0.92).
The same information can be obtained from a cumulative approval sum. When-
ever one alternative loses in cumulative approval at least 1 unit, this alternative is
dropped from the analysis. In Fig. 8.2, the cumulative approval of NAT, GAME and
NORM is 0 with respect to the ﬁrst criterion, and they all lose 1 unit to the INC
alternative. Thus, from the remaining alternatives, MREG has the best cumulative
approval in the end.
8.6.3 Multicriteria Approval Voting
There exists also another version of MA, namely the Multicriteria Approval Voting
MAV (Pasanen et al. 2005). In this approach, it is assumed that the importance
order of criteria can be implicitly accounted for in MA. An implicit importance
ordering can be assumed if the approval of alternatives is not dependent on the mean
Table 8.5 Comparisons with respect to stumpage value added
NAT
SCEN
NORM
GAME
MREG
INC
NAT
0.54
0
0
−0.32
SCEN
−0.54
−0.54
−0.54
−0.86
−0.54
NORM
0
0.54
0
−0.32
GAME
0
0.54
0
−0.32
MREG
0.32
0.86
0.32
0.32
0.32
INC
0
0.54
0
0
−0.32

--- Page 187 ---

186
8 Voting Methods
Table 8.6 Comparison with respect to scenic beauty added
NAT
SCEN
NORM
GAME
MREG
INC
NAT
0.46
0.21
0
0.31
SCEN
−0.46
−0.25
−0.46
−0.15
0.46
NORM
−0.21
0.25
−0.21
0.1
GAME
0
0.46
0.21
0.31
MREG
−0.31
0.15
−0.1
−0.31
0.61
INC
−0.92
−0.46
−0.71
−0.92
−0.61
value of the criterion, but chosen by the decision makers (Pasanen et al. 2005). It
is assumed that the chosen approval border carries all the information concerning
the importance differences of criteria: the more important criterion, the higher the
approval border. Thus, an importance order of criteria is not required.
The recommendation is based on the decision maker adjusting the approval bor-
ders until only one alternative is approved with respect to all criteria, and that is the
recommended alternative. Another possibility would be to count, which of the al-
ternatives is accepted with respect to largest number of criteria. In both cases, the
approval borders really need to reﬂect the approval of the alternatives, so that the
recommendation is not made based on the approval with respect to several criteria
that are not important.
This approach has also been utilized in a real-life strategic planning case at
Hets¨ahallitus (Hiltunen et al. 2007).
Example 8.8. In example 8.6, no alternative is approved with respect to all criteria.
In order to have one alternative approved with respect to all criteria, the approval
border of at least one criterion need to be lower. For instance, if the approval
0
0.5
1
1.5
2
Net income
Stumpage price
Criterion
Scenic beauty
Cumulative approval
NAT
SCEN
NORM
GAME
MREG
INC
Fig. 8.2 Cumulative approvals of the alternatives

--- Page 188 ---

References
187
border of scenic beauty is reduced to 5.2, MREG is approved with respect to all
criteria. If the approval border of stumpage value is reduced to 0.28, SCEN is ap-
proved with respect to all criteria, and it the approval border of net incomes is re-
duced to 38, NORM is approved with respect to all criteria. The choice, which
approval border to reduce, depends on the importances of the criteria to the decision
maker.
References
Arrow, K. 1951. Social choice and individual values. Wiley, New York.
de Borda, J-C. l78l. Mathematical derivation of an election system. Isis 44:42–51. English transla-
tion by A. de Grazia 1953.
Bouyssou, D., Marchant, T., Pirlot, M., Perny, P., Tsouki`as, A., and Vincke, P. 2000. Evaluation
and decision models – a critical perspective. Kluwer, Dordrecht.
Brams, S.T. and Fishburn, P. 1983. Approval voting. Birkhauser, Boston, MA.
Condorcet, M. de. 1785. Essai sur l’application de l’analyse `a la probabilit´e des d´ecisions rendues
`a la pluralit´e des voix (Essay on the Application of the Analysis to the Probability of Majority
Decisions), Paris.
Copeland, A.H. 1951. A ‘reasonable ’ social welfare function, mimeographed, University of Michi-
gan, Seminar on Applications of Mathematics to the Social Sciences, 1951.
Cranor, L.F. 1996. Declared-strategy voting: an instrument for group decision making. Academic
dissertation. http://www.research.att.com/∼lorrie/pubs/diss/diss.html
Felsenthal, D.S. 1989. On combining approval with disapproval voting. Behavioral Science 34:
53–60.
Fraser, N.M. and Hauge, J.W. 1998. Multicriteria approval: application of approval voting concepts
to MCDM problems. Journal of Multi-Criteria Decision Analysis 7: 263–272.
Garc´ıa-Lapresta, J.L. and Mart´ınez-Panero, M. 2002. Borda count versus approval voting: a fuzzy
approach. Public Choice 112: 167–184.
Gehrlein, W.V. and Lepelley, D. 2001. The condorcet efﬁciency of Borda rule with anonymous
voters. Mathematical Social Sciences 41: 39–50.
Gibbard, A. 1973. Manipulation of voting schemes: a general result. Econometrica 41: 587–601.
Heckelman, J.C. 2003. Probabilistic Borda rule voting. Social Choice and Welfare 21: 455–468.
Hiltunen, V., Kurttila, M., Leskinen, P., Pasanen, K., and Pyk¨al¨ainen, J. 2007. Mesta – Inter-
net application for supporting discrete choice situations in strategic level participatory natural
resources planning. Forthcoming.
Kangas, A., Laukkanen, S., and Kangas, J. 2006a. Social choice theory and its applications in
sustainable forest management – a review. Forest Policy and Economics 9: 77–92.
Kangas, A., Kangas, J., and Laukkanen, S. 2006b. Fuzzy multicriteria approval method and its
application to two forest planning problems. Forest Science 52: 232–242.
Kacprzyk, J., Fedrizzi, M., and Nurmi, H. 1992. Group decision making and consensus under fuzzy
preferences and fuzzy majority. Fuzzy Sets and Systems 49: 21–31.
Kant, S. and Lee, S. 2004. A social choice approach to sustainable forest management: an analy-
sis of multiple forest values in Northwestern Ontario. Forest Policy and Economics 6: 215–
227.
Kim, K.H. and Roush, R.W. 1980. Introduction to mathematical consensus theory. Marcel Dekker,
New York.
Laukkanen, S., Kangas, A., and Kangas, J. 2002. Applying voting theory in natural resource man-
agement: a case of multiple-criteria group decision support. Journal of Environmental Manage-
ment 64: 127–137.

--- Page 189 ---

188
8 Voting Methods
Laukkanen, S., Palander, T., and Kangas, J. 2004. Applying voting theory in participatory deci-
sion support for sustainable timber-harvesting. Canadian Journal of Forest Research 34: 1511–
1524.
Laukkanen, S., Palander, T., Kangas, J., and Kangas, A. 2005. Evaluation of the multicriteria ap-
proval method for timber-harvesting group decision support. Silva Fennica 39: 249–264.
Martin, W.E., Schields, D.J., Tolwinski, B., and Kent, B. 1996. An application of social choice
theory to U.S.D.A. Forest Service decision making. Journal of Policy Modelling 18: 603–621.
Mueller, D.C. 1989. Public choice II. Cambridge University Press, New York.
Niemi, R.G. 1984. Strategic behaviour under approval voting. American Political Science Review
78: 952–958.
Nurmi, H. 1987. Comparing voting systems. Reidel, Dordrecht.
Nurmi, H., Kacprzyk, J., and Fedrizzi, M. 1996. Probabilistic, fuzzy and rough concepts in social
choice. European Journal of Operational Research 95: 264–277.
Pasanen, K., Kurttila, M., Pyk¨al¨ainen, J., Kangas, J., and Leskinen, P. 2005. Mesta – Non-industrial
private forest landowners’ decision support for the evaluation of alternative forest plans over the
Internet. International Journal of Information technology and Decision Making 4: 601–620.
Reynolds, A. and Reilly, B. 1997. The International IDEA Handbook of Electoral System Design.
International Institute for Democracy and Electoral Assistance, Stockholm.
Riker, W.H. 1982. Liberalism against populism. Waweland Press, Inc, Prospect Heights.
Saari, D.G. 1994. Geometry of voting. Volume 3 of Studies in Economic Theory. Springer,
New York.
Saari, D.G. and van Newnhizen, J. 1988. The problem of indeterminacy in approval, multiple and
truncated voting systems. Public Choice 59: 101–120.
Satterthwaite, M.A. 1975. Strategy-proofness and Arrow’s conditions: existence and correspon-
dence theorems for voting procedures and social welfare functions. Journal of Economic Theory
10: 187–217.
Sen, A.K. 1997. On economic inequality. Oxford University Press, Oxford.
Simpson, P. 1969. On deﬁning areas of voter choice: Professor Tullock on stable voting. Quarterly
Journal of Economics 83: 478–490.
Yilmaz, M.R. 1999. Can we improve upon approval voting? European Journal of Political Econ-
omy 15: 89–100.

--- Page 190 ---

Chapter 9
Behavioural Aspects
9.1 Criticism Towards Decision Theory
9.1.1 Outline
Ever since the ﬁrst publications of decision theory based on maximizing utility,
there have also been researchers criticizing the theory. There have been arguments
whether people actually do maximize utility in decision making, or are they simply
aiming at satisfactory decisions. Similarly, there have been arguments concerning
whether people just follow heuristic rules in their decision making, or do they be-
have rationally (e.g. Janis and Mann 1977; March 1994).
Furthermore, the decision makers having modern planning tools available have
not always found them useful in real problems (Kasanen et al. 2000). This may
partly be due to problems with interpretation of the results from MCDS. Partly the
problem may be that not enough emphasis has been put in decision aid on important
aspects such as structuring the problem and creating choice alternatives. Partly the
problem may be the decision cost: making calculations and using planning proce-
dures costs money, time and energy (Pingle and Day 1996). Even when planning
procedures produce better decisions, the improvement also has to be large enough
to cover this cost in order to make planning calculations worthwhile.
Partly the criticism may be due to misunderstandings concerning the aims of
decision theory. For instance French (1989) says:
How often have I heard decision analysis berated because it supposedly applies simplistic
ideas to complex problems, usurping decision makers and prescribing choice!
Yet I believe it does nothing of the sort. I believe that decision analysis is very delicate,
subtle tool that helps decision makers explore and come to understand their beliefs and
preferences in the context of the particular problem that faces them. Moreover, the language
and formalism of decision analysis facilitates communication between decision makers.
Through their greater understanding of the problem and the other’s view of the problem,
the decision makers are able to make a better informed choice. There is no prescription:
only the provision of a framework in which to think and communicate.
191

--- Page 191 ---

192
9 Behavioural Aspects
Although part of the criticism may be unjustiﬁed, there still are problems that
should be tackled when decision analysis is further developed. The decisions people
actually do are often choices between two alternatives: status quo or a change of
some sort. For instance, people decide to harvest a stand or not to harvest a stand.
The decisions are also sequential: one small decision after another small decision
is made, rather than solving big complex problems and so on (Beach and Mitchell
1987; Beach and Mitchell 1990). Lindblom (1959), for instance, discusses incre-
mental decisions.
All this indicates that decision aid methods need to be developed also from be-
havioural point of view. Decision analysis has developed from the early days, often
due to the justiﬁed criticism. For instance, the problem structuring methods are more
often involved in the planning process (e.g. Belton and Stewart 2002). However,
there is still more to do.
9.1.2 Satisﬁcing or Maximizing?
When it is studied how people really make their decisions without the help of deci-
sion aid, it can be noted that the decisions have characteristics of satisﬁcing rather
than maximizing (e.g. March 1994). For instance, when deciding about a new per-
son in an enterprise, the decision maker is said to be maximizing his utility, if he
wants to hire the best person likely to be found, and satisﬁcing, if he wants just to
hire a person that meets the standards given.
It is clear that in real decision making, it is hardly ever possible to go through
all the possible alternatives. In many everyday decisions it is not sensible to go
through even a few alternatives. It is also never possible to know for sure all the
consequences of the decisions made. From this respect, every decision is made in a
satisﬁcing fashion, as it can never be guaranteed that no better alternative is avail-
able.
On the other hand, it is hard to believe that people would be satisﬁcing in a sense
that they would select an alternative just fulﬁlling the given requirements, if they
know a better option is available. For instance, how many decision makers would
hire a person they know will do in a job, if they know that a superior alternative
exists. In this respect, every decision is made in a maximizing fashion, given the
knowledge available.
In experiments it has been noted that people actually tend to do better decisions
if they know what is possible to attain, which gives support to this claim (MacLeod
and Pingle 2005). On the other hand, this behaviour can also be explained from satis-
fying point of view: the level decision makers are satisﬁed with, the aspiration level,
rises based on what is attainable and what other people have attained (Oechssler
2002).
There has been a passionate debate concerning whether people satisfy or maxi-
mize in the last 50 years, starting from Simon’s famous papers (1955, 1957). How-
ever, the debate is pointless from the decision aid point of view. It is not important,

--- Page 192 ---

9.1 Criticism Towards Decision Theory
193
how the people do their decisions unaided, what is important is whether they can do
better when aided.
It is, however, possible that decision making has both satisﬁcing and maximizing
characteristics. According to March (1994), most decisions include some elements
of satisﬁcing, but it is rarely found in its pure form. It seems quite possible that a
person ﬁrst screens the alternatives available and leaves out every alternative that
does not fulﬁl the standards, and selects the best alternative from among those al-
ternatives that do. This is also what is assumed in the image theory (Beach and
Mitchell 1987; Beach and Mitchell 1990). If people really do make decisions this
way, it may be useful to acknowledge this also in developing decision aid.
9.1.3 Rules or Rational Behaviour?
When making decisions without aid, people often follow rules. The decision makers
can ask themselves (March 1994):
1. What kind of situation is this? (The question of recognition)
2. What kind of person am I? What kind of organization is this? (The question of
identity)
3. What does a person such as I, or an organization such as this, do in a situation
such as this? (The question of rules)
The identities and rules, on the other hand, are shaped by the social roles of the
decision makers, by culture and norms. The rules are also shaped by past expe-
riences: certain actions lead to certain outcomes, and these are used to formulate
decision rules and strategies (Einhorn 1982). When a certain strategy has yielded
good results in earlier decisions, the same strategy is also used in future decisions.
According to March (1994), rules formulate through several processes:
1. Analysis, through the anticipation and evaluation of future consequences by in-
tentional decision makers.
2. Bargaining, through negotiation, conﬂict and compromise among decision mak-
ers having inconsistent preferences and identities.
3. Imitation, though copying of rules practices and forms used by others.
4. Selection, through differential birth and survival rates of unchanging rules and
the decision making units using them.
5. Learning, through experience-based changes of routines and of the ways rou-
tines are used.
It has also been widely argued if people follow heuristic rules or if they make their
decisions rationally by maximizing utility. The decisions can be explained from
both perspectives. For those who favour the rule idea, maximizing utility is just one
learned rule among others. For those favouring the idea of rational behaviour, rules
are just constraints derived from rational action at a higher level (March 1994). In
each decision, both aspects can often be seen. From the decision aid point of view,

--- Page 193 ---

194
9 Behavioural Aspects
also this discussion is fruitless, unless understanding the rules people use somehow
helps to develop decision aid tools.
People’s experiences and perceptions of the world surrounding them may be bi-
ased in many ways. People for example interpret probabilities quite differently than
the laws of probability dictate (Tversky and Kahneman 1982). For instance, people
may think that when tossing a coin for heads and tails, a sequence H-T-H-T-T-H is
more likely than the sequence H-H-H-T-T-T (which does not appear random) or se-
quence H-H-H-H-T-H (in which the coin does not seem fair). Biases may be due to
availability of data (Tversky and Kahneman 1982). For instance, it may be that peo-
ple assess the risk of damages in forest based on how often it has happened in their
own or in their acquaintances’ forests. Biases may also be due to anchoring to initial
estimates (Tversky and Kahneman 1982). For instance, if people are given a number
and asked to adjust it upwards or downwards to assess some value (like the percent-
age of unemployed people), they give the higher values the higher the initial value is.
Such biases may affect the rules by which the decisions are made. They also may
have an effect on the results obtained from decision analysis. Such are the cases
analyzed in prospect theory (Kahneman and Tversky 1979).
9.2 Image Theory
Image theory is a descriptive theory on decision making, but it can also be used in
decision aid. Image theory is based on four types of images: self image, trajectory
image, action image and projected image.
The self image consists of the personal beliefs, basic values, morals and ethics
of a person (Beach and Mitchell 1987). The self image is shown in the principles a
person uses in his decision making, and in goals he adopts. It is also applied to audit
possible actions. When the decision maker is an organization, self-image consists
of the organization’s principles, which the individual decision maker’s may or may
not share, but which they usually regard as imperatives of the organization (Beach
and Mitchell 1990).
The trajectory image consists of goals the decision maker has set concerning the
future (Beach and Mitchell 1987). The goals may be concrete, such as obtaining
a certain job, or an abstract state, like improving one’s skills in languages. Action
images are plans that the decision maker has for achieving the goals. The plans form
a sequence that is meant to bring about progress towards a goal. The plan consists of
tactics, the concrete actions with which the plan can be implemented (Fig. 9.1). The
sequence of tactics may include clear actions, actions that have to be executed at the
same time (1 and 2) or tactics that are alternative ways (3 and 4). To be adopted, a
candidate plan must be compatible with the self image, and also provide means for
achieving the goals.
The projected image represents the anticipated future, if (1) the decision maker
adopts a certain plan or (2) if he continues with the plans that are currently being
implemented. This anticipated future is then compared to the trajectory image or the

--- Page 194 ---

9.2 Image Theory
195
T
T2
T1
T
T4
T3
T
and
or
Start
implementation
Goal
attainment
PLAN
Fig. 9.1 A hypothetical plan with its component tactics (Modiﬁed from Beach and Mitchell 1987)
goals of the decision maker. The projected image of the plan currently implemented
also enables the decision maker to evaluate the progress made so far.
According to image theory, there are two kinds of decisions: adoption decisions
and progress decisions (Beach and Mitchell 1987). In adoption decision, candidates
for
plans (or goals) are either adopted or rejected. An adoption decision requires that the
candidate plan is at least compatible with the images. Progress decisions are made
to decide whether to continue implementing a plan, if the compatibility of the pro-
jected image and trajectory image is not good. It means that if a plan does not seem
to help in achieving the goals, it is ﬁrst rejected and then a new plan is adopted.
The planning situation itself can be divided to two phases: screening and choice
(Beach and Mitchell 1987). In the screening phase, alternatives that violate the self
image are rejected, as well as such plans where the projection image violates the
trajectory image. This is done using a so-called compatibility test. In the choice
phase, the proﬁtability of the remaining candidate alternatives are compared and the
best alternative is chosen (Fig. 9.2).
Screening
Compatibility
test
Choice
Profitability
test
Decision
Several suitable
alternatives
One suitable
alternative
No suitable
alternatives
Alternatives
and
criteria
Search for new alternatives
Reduce the rejection threshold
Fig. 9.2 Decision making process with image theory (Turunen 2003)

--- Page 195 ---

196
9 Behavioural Aspects
Table 9.1 Results from the screening phase
Net incomes
Stumpage value
Scenic beauty
NAT
0.00
0.71
5.5
SCEN
79.6
0.28
5.7
NORM
38.0
0.60
5.4
GAME
33.0
0.61
5.5
MREG
102.3
0.51
5.2
INC
191.7
0.13
4.9
The screening phase is non-compensatory, i.e. alternatives that fail in one respect
may be rejected, even if they are very good in other respects. Screening may be
based on gut feeling: a certain alternative just does not feel right. The compatibil-
ity is measured with rejection thresholds (Beach and Mitchell 1987). Formally, the
rejection threshold can be expressed as a weighted index of violations
I =
n
∑
t=1
m
∑
p=1
WpVtp, Vtp ∈{0,1}
(9.1)
where Wp is the weight of principle p and Vtp is an indicator variable having value
1 if a certain tactics t in the plan violates the principle p and 0 otherwise. Then, a
threshold value for I needs to be decided. It may mean, for instance that all forest
plans that do not provide sufﬁcient incomes are rejected, if the incomes have a large
weight. Instead, a violation in the target number of game animals may not cause
rejection of the whole plan, if the weight is sufﬁciently low. Of course, if I = 0, no
violations at all are allowed. Thus, deciding the rejection threshold is very important,
but it may also be very difﬁcult for a decision maker. This phase represents the
satisﬁcing part of image theory.
The choice part, on the other hand is compensatory, so that good score in one
respect can compensate a not-so-good score in another. This part can be carried out
with usual decision support methods.
Example 9.1. Assume that in the example of 3.5, incomes should be at least 10,000AC
and the stumpage value of timber at the end of the period should be at least
200,000AC. Assume as well that the rejection threshold is 0 so that no violations
are allowed.
In this case, two alternatives are rejected in the screening phase: the NAT and
INC alternatives, due to violations from the targets. The rejected alternatives are
stroke through (Fig. 9.1).
In the choice phase, the remaining alternatives are compared using additive util-
ity function. The values in the natural scale are transformed to utility scale with
Eq. (2.4). The global priority is then calculated using equal weights (0.33) for each
criterion. The results are presented in Table 9.2. The best alternative in this case is
MREG alternative.

--- Page 196 ---

9.3 Prospect Theory
197
Table 9.2 Local and global priorities of the remaining alternatives
Net incomes
Stumpage value
Scenic beauty
Global priority
SCEN
0.78
0.46
1.00
0.74
NORM
0.37
0.98
0.95
0.76
GAME
0.32
1.00
0.96
0.75
MREG
1.00
0.84
0.91
0.91
9.3 Prospect Theory
It has been analyzed by experiments, how people make their decision when facing a
risky situation. Usually it has been assumed that people tend to maximize expected
utility, i.e. most of the people obey this norm most of the time. In the answers given,
however, several types of deviations from this theory have been noted. Kahneman
and Tversky (1979) presented three deviations, which they named to be certainty
effect, reﬂection effect and isolation effect.
The certainty effect means that people tend to overweight (compared to maxi-
mizing expected utility) such outcomes that are certain, compared to outcomes that
are merely probable (Kahneman and Tversky 1979). For example, if people have to
choose from two prospects, A and B, where A includes probable incomes and B cer-
tain incomes, 80% chose alternative B although the expected utility EU of A is 0.8·
4,000 = 3,200, i.e. greater than 3,000 in B. On the other hand, when people had to
choose from prospects C and D, in which the probability of winning was one fourth
of that in prospects A and B, the results were opposite. This result indicates that re-
ducing the winning probability from certain to probable (from 1 to 0.25) reduces the
utility more than reduction from probable to less probable (from 0.8 to 0.2). Over
half of the people participating in the experiment violated expected utility theory.
Prospect
A:
B:
4,000 with probability 0.8
3,000 with certainty
0 with probability 0.2
EU
3,200
3,000
Choice percentages
20
80
Prospect
C:
D:
4,000 with probability 0.20
3,000 with probability 0.25
0 with probability 0.80
0 with probability 0.75
EU
800
750
Choice percentages
65
35
If, instead of winnings, losses are considered, the situation is different. If the win-
nings in the example above are changed to losses, people choose prospect A in 92%
of cases, although the expected loss is greater than in prospect B, but prospect D

--- Page 197 ---

198
9 Behavioural Aspects
rather than C. It means that people tend to avoid certain losses, and are ready to
gamble with even bigger losses in order to avoid them (Kahneman and Tversky
1979). The result with negative prospects is the mirror image of those with positive
prospects. This effect is called reﬂection effect.
Prospect
A:
B:
−4,000 with probability 0.8
−3,000 with certainty
0 with probability 0.2
EU
−3,200
−3,000
Choice percentages
92
8
Prospect
C:
D:
−4,000 with probability 0.20
−3,000 with probability 0.25
0 with probability 0.80
0 with probability 0.75
EU
−800
−750
Choice percentages
42
58
Isolation effect means that if there are identical parts in prospects, they are dis-
carded from the analysis, and the focus is on the part that distinguish two prospects
(Kahneman and Tversky 1979). This may, however, lead to inconsistent preferences
because the problems can be decomposed in several ways.
Assume a two-stage game. In the ﬁrst stage, there is a 0.75 probability to end
the game without winning anything, and a 0.25 probability to move to second stage.
In the second stage, the choice is between winning 4,000 with probability 0.8 or
winning 3,000 with certainty. The choice has to be made before the ﬁrst stage. In
this game, the choice is really between 0.25 · 0.80 = 0.2 probability of winning
4,000 (EU 800) and 0.25 probability of winning 3,000 (EU 750). Yet, 78% of people
chose the second alternative with smaller EU. This is because the ﬁrst stage was not
considered in the choice.
These phenomena form the basis for prospect theory. In prospect theory, the
choice process is divided to two phases: editing and evaluating. In the editing phase,
the prospects are simpliﬁed. The editing can include several different operations.
First, as people react differently to gains and losses, the prospects are presented as
gains and losses with respect to a reference point (current assets). Prospects can
sometimes also be simpliﬁed by combining probabilities with identical outcomes. It
is also often possible to segregate the certain gains and losses from uncertain ones.
For instance, if prospect is such that decision maker obtains 300 with probability 0.8
and 200 with probability 0.2, it can be simpliﬁed so that decision maker gets 200
certainly and 100 more with probability 0.8. Similarly, in a prospect where decision
maker loses 400 with probability 0.6 and 100 with probability 0.4, the loss of 100 is
certain, and in addition, decision maker can lose 300 with probability 0.6. In editing
phase, also very unlikely outcomes are ignored and the probabilities are rounded
from 0.99 to 1, or from 0.51 to 0.50. This editing is not, however, without problems:
performing several editing tasks in different order may result in different prospects
(Kahneman and Tversky 1979).

--- Page 198 ---

9.3 Prospect Theory
199
In the choice phase, the decision making situation under risk in described so that
subjective weights π are added to the probabilities p of different outcomes, π(p). It
reﬂects the impact of p on the overall value of the prospect. The possible outcomes
x are also weighted according to their subjective values, v(x), measuring the value
of the outcomes compared to a reference point.
The prospects analyzed are simple prospects with at most two non-zero out-
comes. They are presented in the form (x, p;y,q), where p is probability of outcome
x and q is probability of y. If p+q < 1 probability of zero outcome is 1−p−q. The
prospects are divided to two groups that are dealt with in different ways.
(1) If either p + q < 1; or x is negative and y positive (x ≤0 ≤y); or y is negative
and x is positive (x ≥0 ≥y), the value of the prospect can be calculated as
V(x, p; y, q) = π(p) v(x)+π(q) v(y)
where π(0) = 0, v(0) = 0 and π(1) = 1.
(2) If p + q = 1; and both x and y are either positive (x > y > 0) or negative (x <
y < 0), the value of the prospect can be calculated as
V(x, p; y, q) = v(y)+π(p)[v(x)−v(y)]
In the ﬁrst formula, losses and gains are treated separately, and can have different
subjective values. In the second case, where the prospect is either strictly positive or
negative, the certain gain or loss v(y) is separated from the additional gain or loss
(v(x)−v(y)).
For instance, if one has to value prospect (400, 0.25; 100, 0.75), 100 is a certain
gain and 300 more is obtained with probability 0.25. Then, the value of the prospect
is V (400, 0.25; 100, 0.75) = v(100)+π(0.25)[v(400)−v(100)].
In prospect theory it is assumed, that with respect to losses, the utility function is
convex (i.e. utility function of a risk seeker) and with respect to gains the function
Gains
Losses
Value
Fig. 9.3 Utility function derived from prospect theory

--- Page 199 ---

200
9 Behavioural Aspects
is concave (i.e. utility function of a risk avoider) (Fig. 9.3). It is also typical that the
function is clearly steeper for losses than for gains (Kahneman and Tversky 1979).
However, the behaviour of a person may markedly change when the gains and losses
are very large when compared to the overall situation of the person. For instance,
the possibility to lose one’s apartment or the possibility to buy an apartment might
be such cases.
References
Beach, L.R. and Mitchell, T.R. 1987. Image theory: principles goals and plans in decision making.
Acta Psychologica 66: 201–220.
Beach, L.R. and Mitchell, T.R. 1990. Image theory: a behavioral theory of decisions in organiza-
tions. Research in Organizational Behavior 12: 1–41.
Belton, V. and Stewart T.J. 2002. Multiple criteria decision analysis: an integrated approach.
Kluwer, Dordrecht.
Einhorn, H.J. 1982. Learning from experience and suboptimal rules in decision making. In: Kahne-
man, D., Slovic, P., and Tversky, A. (Eds.). Judgment under uncertainty: heuristics and biases,
Cambridge University Press, Cambridge, pp. 268–286.
French, S. 1989. Readings in decision analysis. Chapman & Hall, London, 210 pp.
Janis, I.L. and Mann, L. 1977. Decision making. A psychological analysis of conﬂict, choice and
commitment. Free Press, New York, 488 pp.
Kahneman, D. and Tversky, A.1979. Prospect theory: an analysis of decision under risk. Econo-
metrica 47: 263–291.
Kasanen, E., Wallenius, H., Wallenius, J., and Zionts, S. 2000. A study of high-level managerial
decision processes, with implications for MCDS research. European Journal of Operational
Research 120: 496–510.
Lindblom, C. 1959. The science of “Muddling through”. Public Administrative Review. pp. 79–88.
March, J. 1994. A primer on decision making – How decisions happen. Free Press, New York,
289 pp.
MacLeod, W.P. and Pingle, M. 2005. Aspiration uncertainty: its impact on decision performance
and process. Journal of Economic Behaviour and Organization 56: 617–629.
Oechssler, J. 2002. Cooperation as a result of learning with aspiration levels. Journal of Economic
Behaviour and Organization 49: 405–409.
Pingle, M. and Day, R.H. 1996. Models of economizing behavior: Experimental evidence. Journal
of Economic Behaviour and Organization 29: 191–209.
Simon, H.A. 1957. Models of man: social and national. Wiley, New York, 247 pp.
Turunen, M. 2003. Mielikuvateoria s¨a¨ann¨ostelyn kehitt¨amisess¨a. Diploma thesis. Helsinki Univer-
sity of Technology, Department of Water Resources Engineering.
Tversky, A. and Kahneman, D. 1982. Judgement under uncertainty. In: Kahneman, D., Slovic, P.,
Tversky, A. (Eds.). Judgment under uncertainty: heuristics and biases. Cambridge University
Press, New York, pp. 3–20.

--- Page 200 ---

Chapter 10
Practical Examples of Using MCDS Methods
The examples given so far in this book are simple examples in the sense that in each
case one MCDS tool is applied for a well-deﬁned setting. In real life, using MCDS
tools is not that simple. The whole planning process involves several phases, from
creating the alternatives among which the recommendation is selected to selecting
the possible participants to the MCDS approach used. In this chapter, we present
three real-life cases in order to illustrate how the whole planning process is carried
out, and what possible uses MCDS tools have. All these cases have been published
before.
10.1 Landscape Ecological Planning
Kangas et al. 2000 For. Ecol. Manage. 132:157–171, Kangas et al. 2003 For. Sci.
49:928–937
The importance of landscape ecological planning in boreal forestry has been widely
noted. It is necessary to examine forestry not only from the viewpoint of individual
forest stands, but also to take into consideration area-level population dynamics and
ecological considerations. From the ecological viewpoint, the greatest shortcomings
of landscape ecological forest planning include lack of basic knowledge on popula-
tion ecology and other ecological aspects. However, there may be expert knowledge
available concerning the priority of treatment schedules in a forest area, and that
can be used for landscape ecological planning. The example study presents an ap-
proach to landscape level forest planning applying regression AHP and SMAA for
decision support. The focus is on multicriteria evaluation of alternative forest plans
at area level.
The aim of the planning process was to support the choice of a tactical forest
plan for the case study area, Kivalo forest estate of 2024 ha, owned by the State and
administered by the Finnish Forest Research Institute METLA (now managed by
Mets¨ahallitus). The planning horizon was 10 years (1998–2007). The Kivalo forest
estate is located in the Rural Commune of Rovaniemi, Finnish Lapland.
201

--- Page 201 ---

202
10 Practical Examples of Using MCDS Methods
The process started by creating ecological networks of important areas for further
comparison. The process of producing alternative ecological networks was assisted
by employing GIS in two ways. First, different kinds of search operations were
carried out utilizing the existing spatial and attribute data on the forest stands within
the study area in order to ﬁnd the ecologically important areas and to rank them (e.g.
Store and Kangas 2001). Secondly, ecological corridors were generated among the
ecologically important habitat patches, and buffer zones with differing widths were
generated along and around habitat patches and other areas of special ecological
values. With an eye to generating ecological networks, the original division of the
area into compartments was reﬁned on the basis of the information produced by
spatial operations, e.g. by forming new compartments along brooks. New forest
compartment maps could be produced by overlaying the corridors and buffer zones
with the original compartment map.
Five different ecological networks were produced for the area as a starting point
for elaborating alternative area-level plans. Ecological network 1 contained only
those areas which should be conserved according to the Forest Act, and some other
ecologically valuable compartments, namely, fertile tree stands along brooks, fragile
summit areas, and two old-growth forest stands. In addition to the areas belonging to
ecological network 1, ecological network 2 included more forest stands possessing
ecological values, and some ecological corridors connecting key biotopes. Wider
buffer zones were formed along brooks in network 2 than in network 1. Network 3
was formed by selecting areas next in the order of priority with respect to ecological
considerations while taking into account the negative effects on revenues from wood
production. In the case of network 3, also buffer zones along the forestry road in
the southernmost part of the area were included. The reason for this was that the
road area and its immediate surroundings were important habitat for northern bats
living within the area. According to the same principle of including more areas of
environmental value in the ecological solution, networks 4 and 5 were produced. In
network 5, about half of the area belonged to the network (Fig. 10.1).
The MONSU forest simulation and optimisation software (Pukkala 1993) was
applied in producing alternative forest plans for further evaluation. For each of
the ﬁve ecological networks, two different forest plans were formed. These were
generated by applying different objective functions. No treatments were recom-
mended during the ﬁrst 10 years for the forest stands belonging to the ecologi-
cal network. Finally, there were ten different plans that were evaluated. Values for
timber-production oriented criteria, such as ‘net incomes from timber production’
and ‘volume of the forest after the planning period outside the landscape ecological
spots’ were calculated using MONSU. The ecological criteria were obtained using
expert opinion.
With respect to timber production, there were three criteria, namely net income
from timber cuttings, and volume of the growing stock outside conserved areas in
the end of the period, and the area outside the ecological networks (Table 10.1). In
the ﬁrst study, there was only one ecological criterion based on expert judgment. The
priorities of the plans with respect to ecological values were obtained from pairwise
comparisons between the plans (Table 10.2). The decision hierarchy is presented in
Fig. 10.2.

--- Page 202 ---

10.2 Participatory Planning
203
Fig. 10.1 Example of an ecological network (Kangas et al. 2000)
The relative weights of the elements in the decision hierarchy were assessed us-
ing a graphical comparison mode of pairwise comparisons. The weight for timber
wood production was 0.6, and that for ecological considerations 0.4; weight of net
revenues was assumed to be 0.62 and that of sustainability of wood production 0.38,
respectively; and the total area of forest stands not belonging to an ecological net-
work and the volume of the growing stock at the end of the planning period were
0.71 and 0.29, respectively. The resulting total and global priorities are presented in
Table 10.3.
According to this analysis, alternative IX would be the best. In the second study,
three socioecological criteria were considered, namely recreation, viability of rare
species and risks to watercourse (Table 10.1). All of the socioecological criteria
were measured in ordinal scale and thus, SMAA-O was used in analyzing the plans.
In addition, the ﬁrst two of the timber production criteria from the ﬁrst study were
used. Hierarchical structure was not assumed.
The importance order of the criteria was assumed to be Viability > Net incomes?
Volume of growing stock > Recreation > Risks, the plan having the greatest overall
acceptability was plan VIII (Table 10.4), but plan X was very close to it.
10.2 Participatory Planning
Pyk¨al¨ainen et al. (1999) J. For. Econ. 5:341–364.
In this example, ideas of the HIPRE program developed by H¨am¨al¨ainen and Lauri
(1995) were used in an application of interactive decision analysis (IDA) on strategic

--- Page 203 ---

204
10 Practical Examples of Using MCDS Methods
Table 10.1 Criterion values for each plan
Plan
number
Net income from
timber cuttings
(106 euro)
Volume of the
growing stock
outside conserved
areas in the end of
the period
(1,000m3)
Area
belonging to
ecological
network (ha)
Recreation
Viability
of rare
species
Risks to
watercourse
I
0.675
100
105
2
3
0
II
0.438
132
105
1
4
0
III
0.238
118
248
1
1
0
IV
0.546
143
248
2
5
0
V
0.361
125
369
1
2
0
VI
0.980
123
369
3
9
1
VII
0.806
106
469
2
6
1
VIII
1.126
133
469
3
10
1
IX
0.931
109
550
2
7
1
X
0.681
154
550
2
8
1

--- Page 204 ---

10.2 Participatory Planning
205
Table 10.2 Pairwise comparisons concerning the ecological value of the plans
Plan number
I
II
III
IV
V
VI
VII
VIII
IX
X
I
1
1/3
1/3
1/4
1/3
1/3
1/2
1/4
1/3
1/4
II
1
1
1/2
1/2
1/3
1/2
1/4
1/3
1/3
III
1
1/3
1/3
1/4
1/2
1/4
1/6
1/3
IV
1
1
1/2
1
1/3
1/2
1/3
V
1
1/3
1/2
1/5
1/4
1/4
VI
1
2
1/2
2
1/2
VII
1
1/2
1/2
1/3
VIII
1
1/2
1
IX
1
1/3
X
1
planning of state-owned natural resources. HIPRE allows the use of a modiﬁed ver-
sion of AHP, utilizing sub-utility functions in the evaluation of choice alternatives.
HIPRE program was chosen to be used by Mets¨ahallitus (previously the Finnish
Forest and Park Service FPS) governing the case study area.
The IDA application was part of a wider participatory planning project initi-
ated by Mets¨ahallitus in Kainuu, eastern Finland. The function of the IDA was to
produce decision support for the formulation and selection of a forest strategy. Ini-
tially, four strategies following different scenarios were formulated in the planning
project of Kainuu. The feasibility of land use allocations in general and their im-
plications on producing forest outputs was mapped out by doing this. The impacts
of the strategies were measured by numeric criterion variables and they were esti-
mated through planning calculations. So called “Basic strategy” included the current
Overall priority
Timber production
Net incomes
during first 10
year
Ecological considerations
Economical
sustainability
Alternative forest plans
Area subject to
no treatment
restrictions
Volume of the
growing stock
after 10 years
Fig. 10.2 The decision hierarchy (Modiﬁed from Kangas et al. 2000)

--- Page 205 ---

206
10 Practical Examples of Using MCDS Methods
Table 10.3 Local and global priorities of the alternative plans
Plan number
Net revenues
Area not subject to treat-
ment restrictions
Volume of the growing
stock at the end of the
period
Global
priority
I
0.167
0.120
0.088
0.099
II
0.101
0.120
0.101
0.082
III
0.145
0.108
0.092
0.095
IV
0.081
0.108
0.104
0.085
V
0.137
0.098
0.093
0.097
VI
0.064
0.098
0.106
0.103
VII
0.119
0.090
0.097
0.095
VIII
0.053
0.090
0.108
0.108
IX
0.099
0.083
0.100
0.119
X
0.035
0.083
0.111
0.115
principles of land use allocation. The “Business strategy” emphasized the economic
goals of Mets¨ahallitus in Kainuu, and the “Forest recreation” and “Nature conser-
vation” strategies emphasized the related goals.
The IDA was started with a decision hierarchy formulation (Fig. 10.3). The hier-
archy consisted of six levels: the total utility, the parties (Mets¨ahallitus by its former
abbreviation FPS), the four main criteria for forest management, the sub-criteria,
the criterion variables, and the alternative forest strategies.
The preferences of the parties involved (Mets¨ahallitus, one regional and four
local working groups including 10–12 interest groups each, and the public) were
deﬁned and included into planning in a form of an additive utility function
Utot =
n
∑
j=1
wjUj
(10.1)
where, Utot is the total utility, wj is the weight of party j, Uj is the utility of party
j, and n is the number of parties involved. The utility of an individual party was
Table 10.4 Resulting rank acceptabilities and overall acceptability
Plan number
ah
r1
r2
r3
r4
r5
r6
r7
r8
r9
r10
VIII
57
27
23
15
11
9
6
4
3
1
0
X
56
27
21
15
11
9
7
5
3
2
1
VI
44
14
15
15
16
13
9
7
5
3
1
IV
42
15
13
13
13
15
10
9
6
4
2
IX
35
6
11
18
17
14
11
9
7
5
2
II
27
7
8
8
8
9
10
12
15
13
9
VII
17
1
2
4
7
10
17
16
16
14
11
V
17
1
3
5
7
9
13
17
18
16
12
I
14
2
3
4
5
6
8
10
13
19
29
III
11
1
1
3
4
6
8
10
14
23
31

--- Page 206 ---

10.2 Participatory Planning
207
OVERALL
UTILITY
Forest and
Park Service
Regional
work group
Local work 
groups (4)
Public
FPS´s business
revenues
regional
socioeconomic
values
forest
recreation
values
nature
conservation
values
effects on
employment 
effects on the
GNP
area of commercial forest, ha
FPS´s financial surplus in Kainuu, FIM/year
d timber volume in commercial forests, m3
indirect effects, working years
FPS´s supply of work, working years
FPS´s turnover, FIM/year
recreation forests, ha
commercial forests, recreational values, ha
recreation value index
water quality index
conserved area, ha
commercial forests, conservation values, ha
d dead wood volume, m3
d area of old forests, ha
d volume of hardwood, m3
PARTIES
CRITERIA
SUB-CRITERIA
CRITERION VARIABLES
STRATEGIES
d stands for ”a change in” during the planning period 
Fig. 10.3 The decision hierarchy (Pyk¨al¨ainen et al. 1999)
calculated as follows:
Uj =
mj
∑
i=1
aijuij(qij)
(10.2)
where mj is the number of criteria of party j, aij is the relative importance of cri-
terion i, uij is the sub-utility function of criterion i, and qij is the quantity that the
plan produces or consumes the criterion variable i of party j. Each sub-utility func-
tion was deﬁned with respect to one upper level criterion or sub-criterion. By using
the sub-utility functions, the values of criterion variables were converted to relative
sub-utilities which were scaled on a ﬁxed interval between 0 and 1. The differences
between the worst and the best values of the variables were taken into account when
deﬁning the weights aij. The sub-utility functions and the weights of the criterion
variables were deﬁned by experts.
The problem included four main criteria, Mets¨ahallitus’s business revenues, re-
gional socioeconomic values, forest recreation values and nature conservation val-
ues. Beneﬁts related to Mets¨ahallitus’s business revenues were measured by using
the area of commercial forests, Mets¨ahallitus’s ﬁnancial surplus in Kainuu and the
change in timber volume in commercial forests. The regional socioeconomic values
were measured by the effect on employment (direct and indirect) and Mets¨ahallitus’s
turnover. Forest recreation values were measured by the area of recreational forests,
the area of commercial forests with recreational values, the recreation value index
and the water quality index. The water quality index, in turn, was measured by the
area of clearcut forest stands, the area of fertilised forests and the area of ditch
network maintenance. The fourth main criterion was the nature conservation value,
measured by the conserved area, the area of commercial forests with conservation

--- Page 207 ---

208
10 Practical Examples of Using MCDS Methods
Table 10.5 Weights of main criteria given by the regional working groups
Working ﬁeld
Mets¨ahallitus’s
business revenues
in Kainuu
Socioeconomic
values
Forest recreation
values
Nature
Conservation
values
Agriculture and
forestry
0.261
0.372
0.213
0.154
Provincial
Aadministration
0.205
0.470
0.218
0.107
Tourism
0.223
0.266
0.335
0.176
Forest industry
0.500
0.300
0.100
0.100
Small enterprises
0.268
0.357
0.217
0.158
Game husbandry
0.180
0.220
0.330
0.270
Research
0.192
0.301
0.235
0.272
Nature
conservation
0.060
0.120
0.218
0.601
Mean
0.236
0.301
0.233
0.230
values, the change in dead wood volume, the change in the area of old forests and
the change in the volume of hardwood.
The weights of the main criteria were deﬁned interactively by the parties
(Mets¨ahallitus and regional working groups). With the interactive computer inter-
face, the participants saw immediately how the current set of weights affected the
strategy selection. For example, more weight could be given to the criterion not
meeting the requirements of the party, and the consequences of this change could be
Table 10.6 Global priorities of the sub-criteria
Criterion variable
Global priority
Area of commercial forests
0.076
Mets¨ahallitus’s ﬁnancial surplus in Kainuu
0.186
Change in timber volume in commercial forests
0.048
Effect on employment (direct)
0.084
Effect on employment (indirect)
0.084
Mets¨ahallitus’s turnover
0.072
Area of recreational forests
0.100
Area of commercial forests with recreational values
0.076
Recreation value index
0.043
Area of clearcut forest stands
0.014
Area of fertilised forests
0.003
Area of ditch network maintenance
0.008
Conserved area
0.103
Area of commercial forests with conservation values
0.031
Change in dead wood volume
0.010
Change in the area of old forests
0.052
Change in the volume of hardwood
0.010

--- Page 208 ---

10.3 Spatial Objectives and Heuristic Optimization in PracticalForest Planning
209
Table 10.7 Global priorities of the alternatives
Strategy
Priority
Business
0.520
Basic
0.462
Forest recreation
0.440
Mixed 2
0.417
Mixed 1
0.376
Nature conservation
0.331
seen immediately. Interactive deﬁning of the weights was continued until the partic-
ipant accepted the plan. Each group had their own sessions. The weights given by
the regional groups are given in Table 10.5.
The weights of the parties were deﬁned by Mets¨ahallitus (weights in brackets):
Mets¨ahallitus (0.5), regional work group (0.250), local work groups (0.125), and the
public (0.125). By using these weights, the global weights (priorities) were calcu-
lated for the other decision elements in respect to the upper level elements related
to them. The global weights of the criteria were: Mets¨ahallitus’s business revenues
(0.310), regional socioeconomic values (0.239), forest recreation values (0.244) and
nature conservation values (0.206). The global priorities of the lower level criteria
are presented in Table 10.6.
Each strategy was considered to be a feasible one in the beginning of the planning
process. However, the Finnish conservation program of old forests was constructed
simultaneously with the natural resources strategy of Kainuu. In the conservation
program of old forests, the area of conserved forests was to be increased from 28,000
to 62,000 ha. Also the landscape ecological planning in Mets¨ahallitus called for re-
strictions in wood production on certain areas (92,000 ha). As a consequence of this,
all the initial strategies were not feasible any more. That is why two new strategies
were constructed: “Mixed 1” strategy and “Mixed 2” strategy. “Mixed 1” was the
“Basic” strategy including the new nature conservation criteria. The “Mixed 2” strat-
egy was a modiﬁed version of the “Business” strategy. The priorities of the initial
and the mixed strategies are presented in Table 10.7.
10.3 Spatial Objectives and Heuristic Optimization in Practical
Forest Planning
Hurme et al. (2007) Landscape Ecology 22: 243–256
This example shows how species-speciﬁc habitat suitability index, spatial objec-
tives and heuristic optimisation were used in practical planning situation, where
the land manager needed information from the production possibilities of the plan-
ning area’s forests. Ecological and economic perspectives were included in these
long-term forest planning calculations. Economic objectives referred to timber
production (growing stock volume, cutting amounts and net present value of cutting

--- Page 209 ---

210
10 Practical Examples of Using MCDS Methods
3000
3500
4000
4500
5000
5500
6000
6500
20
25
30
35
Max FSH
Forest service
FSH & timber
Less limits
Max NPV
Optimization results
The fitted production
possibility frontier
Proportion of flying squirrel habitat (%)
NPV (1000  )
Fig. 10.4 Fitted production possibility frontier with respect proportion of FSH at the end of the
planning period and the net present value of cutting income (Hurme et al. 2007)
income), whereas ecological objectives were based on suitable habitats for arboreal
Siberian ﬂying squirrel (Pteromys volans).
In the ﬁrst phase, forest stands that were considered suitable for ﬂying squirrel
were deﬁned using an empirical site-speciﬁc ﬂying squirrel habitat (FSH) model.
The model predicts the probability for the occurrence of the ﬂying squirrel within
a stand, and includes a spatial variable that describes the availability of suitable
habitat within an activity area of an individual ﬂying squirrel. The model building
was based on existing knowledge of habitat preferences for the ﬂying squirrel in NE
Finland and on a total of 91 spruce-dominated stands that were surveyed. Thirty-
ﬁve of them were found occupied by the ﬂying squirrel. The explanatory variables
in the model were area of a stand (ha) and growing stock volumes (m3/ha) of spruce
and birch. In addition, the area of a good quality habitat in the surrounding (500 m
radius) of the stand was used as an explanatory variable of the model. Stands that
had a probability of occurrence over 50% were assumed to be suitable for ﬂying
squirrel.
In the second phase, the estimated FSH-model was integrated into the MONSU
forest planning system (Pukkala 2006), where it was then used as an objective vari-
able in planning calculations. Due to the complexity of the planning calculations,
heuristic technique based on simulated annealing with a two compartment neigh-
bourhood (see Chapter 6; Heinonen and Pukkala 2004) was the used optimization
technique. The length of the planning period was 60 years and it was divided into
three 20-year periods. The planning area covered 10,215 ha of which 7,025 ha is
productive forest land. The area was divided into 976 separate forest stands. How-
ever, 3,469 ha of the planning area included some restrictions on their use, based on
protection of old forests, claimed areas or other limitations. At present, most of the
areas suitable for ﬂying squirrel were located in restricted areas.

--- Page 210 ---

10.3 Spatial Objectives and Heuristic Optimization in PracticalForest Planning
211
In the third phase, ﬁve alternative forest plans were worked out with different ob-
jectives for ﬂying squirrel habitat and timber production. In addition, the production
possibility frontier was also worked out to deﬁne the interrelationship between net
present value and ﬂying squirrel habitat. The alternative plans were compared with
respect to values of objective variables at the end of the planning period of 60 years
and against a production possibility frontier (Fig. 10.4). In the “Max FSH” plan, the
value of the FSH was maximized and in the “Max NPV” the net present value of
cutting income was maximized, subject to growing stock volume constraint. In the
“Forest service” plan, the cutting volumes during three sub-periods, growing stock
at the end of the planning period, area of old forests and the volume of broad-leaved
trees were the objective variables that were included in the additive utility function,
which was the used objective function form. The resulting plan was intended to
mimic the principles of the landscape ecological plan that had been created earlier
for the area’s state owned forests. In plan “FSH & timber” the objective variables
were FSH habitat, cutting volumes during the sub-periods and the growing stock
volume at the end of the planning period. In “Less limits” plan, the used objec-
tive variables were exactly same as in the “FSH & timber” plan. However, in this
plan, the production possibilities of the planning area were increased by releas-
ing 2,024 ha of the forest area that was in restricted use in all other plans. These
descriptions of plans are also visible from results presented in Fig. 10.4 where the
“FSH & timber” is located reasonably close to the production possibility frontier,
although NPV was not used as an objective variable in this plan. Plans “Max FSH”
and “Less limits” are producing the maximal amount of FSH (approximately 34%)
0
4000
2000
Meters
0
4000
2000
Meters
”FOREST SERVICE”
”FSH & timber”
Fig. 10.5 Locations of ﬂying squirrel habitats (gray) at the end of the planning period in plans
“Forest service”, and “FSH & timber”. Striped areas have restrictions for use

--- Page 211 ---

212
10 Practical Examples of Using MCDS Methods
although in both plans some cuttings also take place. In “Less limits” plan, released
restrictions produce also about the same level of NPV as the plans “Max NPV” and
“Forest service”. The use of FSH objective results in larger amount of ﬂying squirrel
habitat and a more clustered pattern of these habitats compared to the plan where
this objective was not used (Fig. 10.5). The habitats are located near the areas that
have restrictions for use.
References
Heinonen, T. and Pukkala, T. 2004. A comparison of one- and two-compartment neighbourhoods
in heuristic search with spatial forest management goals. Silva Fennica 38: 319–332.
Hurme, E., Kurttila, M., M¨onkk¨onen, M., Heinonen, T., and Pukkala, T. 2007. Maintenance of
ﬂying squirrel habitat and timber harvest: a site-speciﬁc spatial model in forest planning calcu-
lations. Landscape Ecology 22: 243–256.
H¨am¨al¨ainen, R. and Lauri, H. 1995. Hipre3+ Users Guide. Helsinki University of Technology.
Systems analysis Laboratory.
Kangas, J., Hokkanen, J., Kangas, A., Lahdelma, R., and Salminen, P. 2003. Applying stochas-
tic multicriteria acceptability analysis to forest ecosystem management with both cardinal and
ordinal criteria. Forest Science 49: 928–937.
Kangas, J., Store, R., Leskinen, P., and Meht¨atalo, L. 2000. Improving the quality of landscape
ecological forest planning by utilizing advanced decision-support tools. Forest Ecology and
Management 132: 157–171.
Pukkala, T. 1993. Monik¨ayt¨on suunnitteluohjelmisto MONSU. (Multiple-use planning package
MONSU. In Finnish). Mimeograph. University of Joensuu, 45 pp.
Pukkala, T. 2006. Monsu mets¨asuunnitteluohjelma. Versio 5. Ohjelmiston toiminta ja k¨aytt¨o.
Mimeograph.
Pyk¨al¨ainen, J., Kangas, J., and Loikkanen, T. 1999. Interactive decision analysis in participatory
strategic forest planning: experiences from State owned boreal forests. Journal of Forest Eco-
nomics 5: 341–364.
Store, R. and Kangas, J. 2001. Integrating spatial multi-criteria evaluation and expert knowledge
for GIS-based habitat suitability modelling. Landscape and Urban Planning 55: 73–93.

--- Page 212 ---

Chapter 11
Final Remarks
Planning situations and planning needs vary greatly case by case. Acquiring deci-
sion support for tactical planning is different from acquiring it for strategic planning;
for non-industrial private forest planning compared to public or industrial forestry;
for an individual decision maker compared to a consortium; for planning solely for
wood production in comparison to ecosystem management planning; or when using
quantitative criteria in comparison to qualitative criteria; etc. The decision support
methods presented above have demonstrated that their properties vary greatly. It is
therefore obvious that the different methods are at their best in different planning
situations.
There is no method that is universally best or even applicable for all situations.
On the other hand, every method can be used in forest planning for tasks for which it
is especially suitable. The choice of best or simply suitable decision support method
requires knowledge of many methods, consideration of case-speciﬁc requirements,
and acquainting oneself with the planning situation – i.e. “planning of planning”
(e.g. Kangas et al. 2001a; Kangas and Kangas 2002, 2005).
It may not be enough to select the one best planning method for one situation:
the best option could be to select a combination of methods (Mingers and Brock-
lesby 1997). It could be wise to combine optimisation and MCDS, several MCDS
methods, MCDS with problem structuring methods, or several different problem
structuring methods. Some recent studies indicate that it would be useful to utilise
more than just one MCDS method or hybrid approach in many planning situations,
especially for behavioural reasons (e.g. Bell et al. 2001; Kangas et al. 2001a; Belton
and Stewart 2002). One possible way is to think about the three worlds: material,
personal and social, and select the method related to what components are empha-
sised in the planning situation (Fig. 11.1).
It is especially important to take into consideration what kinds of people are
participating in the planning process. People differ in their knowledge and skills,
and they are differently equipped for participating in decision analyses. Different
methods, as well as applications of different measurement scales (i.e. ordinal ver-
sus cardinal, interval versus ratio) suit people differently when enquiring about their
213

--- Page 213 ---

214
11 Final Remarks
Social
Personal
Material
Appreciation
of
Analysis
of
Assessment
of
Action
to
social practices,
power
relations
distortions,
conflicts
interests
ways of
altering
existing
structures
generate
empowerment
and
enlightenment
individual
beliefs
meanings
emotions
differing
perceptions and
personal
rationality
alternative
conceptualizations
and constructions
generate
accomodation
and
consensus
select and
implement
best alternatives
alternative
physical
and structural
arrangements
underlying
causal
structure
physical
circumstances
Fig. 11.1 A framework for mapping methods (Mingers and Brocklesby 1997)
preferences. On the other hand, the choice of the best MCDS method is also depen-
dant on the quality of information that is available on preferences.
An important consideration for the selection of MCDS method is also the quality
of the information available for evaluating the decision alternatives with respect to
the decision criteria. A multiple criteria decision support method should be chosen
so that all information that is available through a reasonable effort could be utilised
as fully as possible. Exact information is used for criteria with exact values, and
ordinal or dichotomous information is used for criteria with low quality data.
However, compromises must often be made when choosing the methods. Meth-
ods that enable deep analyses and complete exploitation of the available data are
typically hard to use and understand. Conversely, very easy and simple methods,
such as basic multicriteria approval, often lead to loss of information.
The behavioural viewpoint is important not only in choosing the method to be
applied, but also when applying any decision support method. The planning process
should be understandable and pedagogical, so that all the participants can fully un-
derstand the reasoning and results. Unfortunately, practical MCDS applications are
often too technically oriented, and either simplify reality too much or are too difﬁ-
cult to use, understand, and interpret (e.g. Corner and Buchanan 1997).
A recommended approach, particularly in participatory or any other planning
where ordinary people are involved, would be to use simple and straightforward
MCDS methods. This is the case especially in planning via information networks
(Kangas and Store 2003).

--- Page 214 ---

11 Final Remarks
215
Another option would be to apply an easily understandable decision support
method, or a method the participants have used before, in order to become familiar
with the planning task and to understand the very nature of the decision problem.
Using decision analysis tools might also be easier, if people have familiarized them-
selves with the situation using problem structuring methods such as SWOT, SODA
or SSM. Voting methods may be a suitable starting point, when the problem has
been clariﬁed. After that, people may be ready to answer more demanding inquiries
and, thus, to give higher-quality preference information. Then, detailed and in-depth
analyses by more complicated methods would be possible.
However, in some cases, moving from an easily understood method to an in-
depth analysis by more complicated methods might lead to a problem. Namely,
people may be willing to produce similar results even with more complicated meth-
ods, after ﬁrst obtaining results from the easily understood method. This being the
case, it might be difﬁcult to argue why there is a change in ranks (and in recommen-
dations) when evaluating alternatives if uncertainties or probabilities are included,
for instance. This puts additional requirements on the interpretation of the results.
In any planning process, it is also useful to perform as comprehensive a decision
analysis as the data allows. Although complicated methods and calculations may
not enhance people’s involvement in planning processes, the methods often produce
enlightening detailed results for the analysts and decision makers. Moreover, it often
makes sense to invest in acquiring higher quality and more accurate information on
both evaluation data and preferences, and to apply corresponding analysis methods
(Kangas et al. 2001b). This is particularly the case in conﬂict management situations
(Shields et al. 1999).
In real-life planning, it is typical that some criteria can be measured on cardinal
scale, but it is difﬁcult and sometimes even impossible to express all criteria in
ratio or even in interval scale. As a consequence, there often are both ordinal and
cardinal information in decision-making processes. Consequently, there is a need
for decision support methods that can make use of ordinal and interval information.
Another challenge is that in many decision support methods, the required inquiries
are difﬁcult for decision makers. It would often be easier to express ordinal than
cardinal preferences for many decision makers, and for stakeholders in participatory
approaches.
Forcing people to make priority comparisons in cardinal scales could, in some
cases, lead to more biased estimates of true preferences than applying ordinal in-
quiries. Ordinal preferences can be taken as implicitly uncertain, as is often the case
with stated preferences in actual decision processes. As a result, ordinal statements
may reﬂect the true preferences better than exact cardinal values (e.g. Larichev
1992; Shepetukha and Olson 2001). This might sometimes also be the case with
the evaluations of alternative decisions with respect to a single criterion, especially
concerning forest functions evaluated on subjective preferences, such as the scenic
beauty of forest landscape (Sugimura 1993).
In many forest and environmental planning processes, we have to contend with
more or less incomplete information bases, with mixed data and sometimes even
purely descriptive data that might allow only ordinal rankings. Thus, it can be

--- Page 215 ---

216
11 Final Remarks
concluded, that methods like Multicriteria Approval and SMAA-O have poten-
tial for wide application in today’s forest and other natural resource manage-
ment, and that their application potential will most probably increase in the fu-
ture. However, applying cardinal information and ratio-scale methods allows for
tradeoffs analyses. For that reason, it is always reasonable to employ such in-
formation and methods, if they are available. A further conclusion has been that
whatever the planning task and the MCDS method, interactive use of the method
greatly improve the efﬁciency of the process, as well as education and learning (e.g.
Pyk¨al¨ainen 2000).
MCDS methods need to be complemented with numeric simulation and opti-
mization tools. Such tools especially contribute to the examination of future produc-
tion possibilities and to the generation of alternative efﬁcient forest plans, although
they may fail to satisfactorily cover whole complex decision problems of multiple-
purpose forestry. Simulation and optimization results can then be utilised together
with other information sources, such as GIS analyses, expert judgments, subjective
preferences and descriptive data, in an MCDS framework.
Research focusing on MCDS has been active in recent years in general, and in-
creasingly so within the ﬁeld of natural resource management. In addition, MCDS
methods have gained interest not only of researchers in different disciplines, but also
of decision makers and planners outside the scientiﬁc community. In the forestry
practice, MCDS methods have been applied to better meet the many challenges
of today’s forest management. These challenges include providing decision sup-
port for multiple-purpose forestry and participatory planning, but also for managing
risks and uncertainty and for making comprehensive use of different kinds of infor-
mation from various sources. It is evident that the need and demand for MCDS
applications in forestry and environmental planning will further increase in the
future.
References
Bell, M.L., Hobbs, B.F., Elliott, E.M., Ellis, H., and Robinson, Z. 2001. An evaluation of multi-
criteria methods in integrated assessment of climate policy. Journal of Multi-Criteria Decision
Analysis 10: 229–256.
Belton, V. and Stewart, T.J. 2002. Multiple criteria decision analysis: an integrated approach.
Kluwer, Dordrecht.
Corner, J. and Buchanan, J. 1997. Capturing decision maker preference: experimental comparison
of decision analysis and MCDM techniques. European Journal of Operational Research 98:
85–97.
Kangas, J. and Kangas, A. 2002. Multiple criteria decision support methods in forest management:
an overview and comparative analyses. In: Pukkala, T. (Ed.). Multi-objective forest planning,
Kluwer, Dordrecht, pp. 37–70.
Kangas, J. and Kangas, A. 2005. Multiple criteria decision support in forest management – Fun-
damentals of the approach, methods applied, and experiences gained. Forest Ecology and
Management 207: 133–143.
Kangas, J. and Store, R. 2003. Internet and teledemocracy in participatory planning of natural
resource management. Landscape and Urban Planning 62: 89–101.

--- Page 216 ---

References
217
Kangas, J., Kangas, A., Leskinen, P., Pyk¨al¨ainen, J. 2001a. MCDM methods in strategic planning
of forestry on state-owned lands in Finland: applications and experiences. Journal of Multi-
Criteria Decision Analysis 10: 257–271.
Kangas, J., Pesonen, M., Kurttila, M., and Kajanus, M. 2001b. A’WOT: Integrating the AHP
with SWOT analysis. In: Dellman, K.S (Ed.). Proceedings of the Sixth International Sympo-
sium on the Analytic Hierarchy Process ISAHP 2001, August 2–4, 2001, Kursaal Bern, Berne-
Switzerland. Bern. pp. 189–199.
Larichev, O.I. 1992. Cognitive validity in design of decision-aiding techniques. Journal of Multi-
Criteria Decision Analysis 1: 127–138.
Mingers, J. and Brocklesby, J. 1997. Multimethodology: towards a framework for mixing method-
ologies. Omega, International Journal of Management Science 5: 489–509.
Pyk¨al¨ainen, J. 2000. Interactive use of multi-criteria decision analysis in forest planning. University
of Joensuu, Faculty of Forestry, Joensuu. Doctoral thesis.
Shepetukha, Y. and Olson, D.L. 2001. Comparative analysis of multiattribute techniques based on
cardinal and ordinal inputs. Mathematical and Computer Modelling 34: 229–241.
Shields, D.J., Tolwinski, B., and Keny, B.M. 1999. Models for conﬂict resolution in ecosystem
management. Socio-Economic Planning Sciences 33: 61–84.
Sugimura, K. 1993. Evaluation of forest functions by local people: development of a research
method. Proceedings of the IUFRO Conference, Seoul, Korea, September 20–25, 1993. Forestry
Research Insitute of the Republic of Korea.

--- Page 217 ---

Index
A
acceptability index, 87
action image, 194
additive utility function, 26
additive utility function with interaction
terms, 27
AHP, 37
allele, 135
Analytic Hierarchy Process, 37
Analytic Network Process, 47
andness, 61
anonymity, 174
ANP, 47
approval border, 181
approval voting, 175
area control, 6
Austrian formula, 6
B
belief, 55
belief function, 68
Borda count, 176
borderline project, 121
branch-and-bound, 116
C
CATWOE, 160
center of area/gravity, 59
central weight vector, 87
certainty effect, 197
certainty equivalent method, 16
chromosome, 135
clustering problem, 127
cognitive mapping, 156
collaborative decision making, 147
comparability, 15
comparative hypervolume criterion, 81
compensation, 26
conceptual model, 160
concordance index, 75
Condorcet efﬁciency, 178
Condorcet loser, 178
Condorcet winner, 177
conﬁdence factor, 87
conjunctive function, 28
connectivity, 15
consistency, 174
consistency index, 41
consistency ratio, 41
constraint, 101
cooling multiplier, 132
Copeland score, 177
core index, 121
core project, 121
crossover, 135
D
deadlocked, 182
decision criteria, 4
decision hierarchy, 38
decision table, 13
decision variable, 101
degree of outranking, 77
degree of satisfaction, 60
Dempster–Schafer theory, 68
descriptive approach, 1
difference standard sequence method, 20
direct ascent method, 130
Direct rating, 30
direct search, 130
discordance index, 77
dispersion problem, 127
distance function, 29
distillation, 77
distributive justice, 148
219

--- Page 218 ---

220
Index
divergence, 59
divisibility, 102
dominance, 24
dual problem, 105
E
eigenvalue method, 39
ELECTRE, 75
elite solution, 134
entering ﬂow, 73
Even swaps, 34
evidence theory, 68
expected utility, 14
exterior project, 121
F
Faustmann formula, 7
feasible solution, 102
Fitness value, 135
freezing temperature, 132
fully regulated even-aged forests, 6
Fully regulated forest, 6
Fuzzy additive weighting, 65
fuzzy approval, 184
fuzzy approval voting, 179
Fuzzy number, 56
Fuzzy set theory, 56
fuzzy utility, 65
Fuzzy voting, 179
G
GA, 135
Gene, 135
generalized upper bound technique, 110
genetic algorithm, 135
goal constraint, 112
goal programming, 4, 111
Group decision making, 145
H
HERO, 130
heuristic methods, 4, 120
heuristic rule, 193
Hurwicz-criterion, 14
I
image theory, 194
importance order, 84, 181
incomparability, 78
independence from irrelevant alternatives, 174
indifference method, 15, 20
indifference threshold, 71
infeasibility, 112
initial solution, 128
integer programming, 4, 115
interest group, 147
interval AHP, 47
interview, 156
inverse weight space analysis, 82
isolation effect, 197
J
JLP, 110
joint distribution, 83
JOURNEY, 156
L
leaving ﬂow, 73
lexicographic ordering, 24
linear additive utility function, 25
linear programming, 4, 101
linguistic variables, 65
local optima, 128
local optimisation method, 132
logical ‘and’, 60
logical ‘or’, 61
long-term memory, 134
M
MA, 181
manipulation, 147, 173
Mapping of social values, 152
marginal rate of substitution, 26
MAUT, 23
MAV, 185
MAVT, 23
Maximax, 14
Maximin, 14
maximizing utility, 193
maximum land rent, 7
maximum sustained yield, 7
MCDA, 4
MCDM, 4
MCDS, 4
mean of maximum, 59
median ranking, 78
membership function, 47
meta-weights, 87
min aggregation, 61
Mixed Integer programming, 115
Model I, 109
Model II, 109
monotonicity, 174
Monte Carlo analysis, 81
Multi-Attribute Utility Theory, 9
Multi-Attribute Value Theory, 23
multicriteria approval, 181
multicriteria approval voting, 185
multidimensional, 1
multiplicative model, 27
mutation, 164

--- Page 219 ---

Index
221
N
necessity measure, 65
neighbourhood, 132
net ﬂow, 73
neutrality, 174
non-imposition, 174
normative, 1
O
objective function, 101
Offspring, 135
operational planning, 6
optimal rotation time, 7
optimization methods, 4, 101, 127
ordered weighted average, 61
ordinally dominant, 181
orness, 61
Outranking, 70
outranking degree, 73
OWA, 61
P
Pairwise comparison, 39
Pairwise voting, 177
Parent, 135
Pareto efﬁciency, 174
Pareto optimal set, 24
partial utility, 26
penalty function, 129
plausibility, 68
player level, 166
plurality voting, 174
population, 135
positional voting schemes, 174
possibility measure, 65
possibility theory, 65
preference function, 72
preference threshold, 72
preorder, 74, 77
prescriptive approach, 1
primal problem, 105
priority, 25
probability voting, 180
Problem structuring, 155
procedural justice, 148
product aggregation, 61
production programme, 5
progress decision, 195
projected image, 194
PROMETHEE, 72
Prospect theory, 197
pseudo-criteria, 71
Public hearings, 154
Public participation, 145
Q
quality matrix, 80
R
Rank Order Centroid, 33
rank reversal, 45
ratio scale, 17
rational, 1
reduced cost, 107
reﬂection effect, 197
regression AHP, 45
RHS, 102
rich picture, 159
risk, 13
risk avoider, 14
risk seeker, 14
risk-neutral, 14
risk-premium, 16
Robust Portfolio Modelling, 121
root deﬁnition, 160
S
SA, 132
satisfactory decisions, 191
scaling, 17
screening phase, 195
self image, 194
shadow price, 106
Simple Multi-Attribute Rating Technique, 30
Simple Multi-Attribute Rating Technique
Exploiting Ranks, 33
Simplex algorithm, 103
Simpson score, 177
simulated annealing, 132
SMAA-2, 82
SMAA-O, 91
SMART, 30
SMARTER, 33
SMART-SWAPS, 35
Social choice theory, 173
Soft Systems Methodology, 159
Solver, 103
spread, 59
stakeholder, 145
starting temperature, 132
state of nature, 13
stochastic multi-criteria acceptability analysis,
81
stop-rule, 132
Strategic Options Development and Analysis,
156
strategic planning, 5
structured surveys, 153
sub-utility, 32, 130
supermatrix, 48

--- Page 220 ---

222
Index
survey, 153
sustainability, 5
SWING, 31
SWOT, 48
T
tabu list, 133
tabu search, 133
tabu tenure, 133
tactical planning, 6
t-conorm, 61
t-norms, 61
tradeoffs, 2, 24
trajectory image, 194
Transitivity, 15
trapezoidal fuzzy number, 57
treatment schedule, 5
triangular fuzzy number, 57
TS, 133
U
unanimity, 181
uncertainty, 13
unidimensional, 2, 13
universality, 174
unrestricted domain, 174
unstructured responses, 154
upper probability, 68
utility, 2, 14
utility function, 15
V
value, 3
value function, 17
veto threshold, 77
volume control, 6
von Neumann-Morgestern utility function, 16
voting procedure, 173
Vroom–Yetton model, 151
W
Wald-criterion, 14
weak preference, 71
WebHIPRE, 42
weight, 25
world view, 159
α-cut, 59
γ-norm, 62

--- Page 221 ---

Managing Forest Ecosystems
1.
K. von Gadow, T. Pukkala and M. Tom´e (eds.): Sustainable Forest
Management. 2000
ISBN 0-7923-6356-6
2.
K. von Gadow (ed.): Risk Analysis in Forest Management. 2001
ISBN 0-7923-6900-9
3.
D.L. Schmoldt, J. Kangas, G.A. Mendoza and M. Pesonen (eds.): The Analytic
Hierarchy Process in Natural Resource and Environmental Decision Making.
2001
ISBN 0-7923-7076-7
4.
K. von Gadow, J. Nagel and J. Saborowski (eds.): Continuous Cover Forestry.
Assessment, Analysis, Scenarios. 2002
ISBN 1-4020-0659-4
5.
H. Sverdrup and I. Stjernquist (eds.): Developing Principles and Models for
Sustainable Forestry in Sweden. 2002
ISBN 1-4020-0999-2
6.
T. Paukkala (ed.): Multi-objective Forest Planning. 2002
ISBN 1-4020-1097-4
7.
G.J. Arthaud and T.M. Barrett (eds.): Systems Analysis in Forest Resources.
Proceedings of the Eighth Symposium, held September 20–27, 2000, Snow-
mass Village, Colorado, USA. 2003
ISBN 1-4020-1256-X
8.
R.A. Monserud, R.W. Haynes and A.C. Johnson (eds.): Compatible Forest
Management. 2003
ISBN 1-4020-1536-4
9.
C.G. Williams (ed.): Landscapes, Genomics and Transgenic Conifers. 2006
ISBN 1-4020-3868-2
10.
A. Kangas and M. Maltamo (eds.): Forest Inventory. Methodology and Appli-
cations. 2006
ISBN 1-4020-4379-1
11.
G. Shao and K.M. Reynolds (eds.): Computer Applications in Sustainable
Forest Management. Including Perspectives on Collaboration and Integration.
2006
ISBN 1-4020-4305-8
12.
D. R¨oser, A. Asikainen, K. Rauland-Rasmussen and I. Stupak (eds.):
Sustainable Use of Forest Biomass for Energy. A Synthesis with Focus on
the Baltic and Nordic Region. 2007
ISBN 978-1-4020-5053-4
13.
A. Van Laar and A. Akc¸a: Forest Mensuration. 2007
ISBN 978-1-4020-5990-2
14.
D.M. Adams and R.W. Haynes (eds.): Resource and Market Projections for
Forest Policy Development. Twenty-ﬁve Years of Experience with the US RPA
Timber Assessment. 2007
ISBN 978-1-4020-6308-4
15.
K. von Gadow and T. Pukkala (eds.): Designing Green Landscapes. 2008
ISBN 978-1-4020-6758-7
16.
A. Kangas, J. Kangas and M. Kurttila: Decision Support for Forest Manage-
ment. 2008
ISBN 978-1-4020-6786-0
springer.com
