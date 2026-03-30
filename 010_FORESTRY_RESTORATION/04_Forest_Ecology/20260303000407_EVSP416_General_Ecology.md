---
title: "EVSP416_General_Ecology"
source: "EVSP416_General_Ecology.pdf"
date: 2026-03-03T00:03:53.173960
type: pdf-extraction
tags:
  - forestry
  - training
  - 04_Forest_Ecology
---

# EVSP416_General_Ecology

**Original File:** `EVSP416_General_Ecology.pdf`
**Total Pages:** 22
**Processed on:** 2026-03-03T00:03:53.173960

### Supreme Executive Summary

#### Core Themes:
- **System Modeling**: Utilizing systems language to transform verbal models into quantitative, accurate, predictive, and consistent network diagrams.
- **Energy Systems**: Understanding energy flow through pathways, sources, storages, interactions, and transactions within a system.
- **Feedback Loops**: Recognizing positive feedback that enhances processes or negative feedback that stabilizes a system.
- **Simulation Modeling**: Developing mathematical equations to simulate real-world ecosystems, hydrology, and other complex systems.

#### Actionable Methodologies:
1. **System Diagram Creation**:
   - Use energy systems symbols to represent components like sources, storages, pathways, and interactions.
   - Employ boxes for units or functions within the system.

2. **Mathematical Equations**:
   - Write equations that express relationships between flows (inflow and outflow) and storages in a system.
   - Define variables such as \( dQ/dt \) to represent rate of change in storage over time.

3. **Model Simulation**:
   - Create models using difference equations to simulate the behavior of systems under various conditions.
   - Adjust model parameters to calibrate the model to real-world data.

4. **Model Validation and Sensitivity Analysis**:
   - Validate models by comparing simulated outcomes with known real-system performances.
   - Conduct sensitivity analysis to understand how changes in assumptions affect outcomes.

#### Critical Entities, Concepts, and Species (Obsidian [[WikiLinks]]):
- **System**: A set of parts connected by relationships (Odum and Odum, 1996).
- **Energy Systems Symbol**:
  - **Pathway Line**: Represents a flow of energy or materials.
  - **Source**: Provides energy to the system.
  - **Storage**: Accumulates energy within the system.
  - **Interaction**: The process through which energy flows between components.
  - **Transaction**: An exchange of energy or matter across system boundaries.
- **Steady State**: A state where storages and patterns in an open system become constant with a balance of inflows and outflows.
- **Equilibrium**: A constant state, particularly referring to closed systems where storages become constant.
- **Aggregation**: Simplifying a system into 5 to 20 units while maintaining energy and material budgets, energy hierarchy levels, and feedback pathways.
- **Calibration**: Assigning numerical values to a model to reflect real-world data.
- **Validation**: Comparing simulated outcomes with known real-system performances.
- **Sensitivity Analysis**: Understanding how changes in assumptions affect model outcomes.

#### Conclusion:
System modeling is a critical tool for understanding complex systems. By using energy systems symbols, mathematical equations, and simulation models, we can gain insights into the behavior of ecosystems, hydrological processes, and other complex phenomena. Validating and calibrating these models ensures that our simulations accurately reflect real-world conditions.

---
*Note: This is an AI-generated synthesis. The complete original text and its embeddings reside natively in the local PostgreSQL database (Open Brain) for agentic retrieval.*

## Raw Source Text (For Context)


--- Page 1 ---

EVSP416 General Ecology
HW-C Simulation Modeling

--- Page 2 ---

Why a systems language?
To convert non-quantitative verbal models 
to… more quantitative, more accurate, 
more predictive, more consistent, and less 
confusing network diagrams

--- Page 3 ---

System Frame: A rectangular box drawn to represent
 
the boundaries of the system selected.
ENERGY  SYSTEMS  SYMBOLS
Pathway Line:  a flow of energy, often with a flow
 
of materials.
SOURCE: outside source of energy; a forcing function
.
STORAGE:  a compartment of energy storage within the system
 
storing quantity as the balance of inflows and outflows

--- Page 4 ---

INTERACTION:  process which combines different types
 
of energy flows or material flows to produce an
 
outflow in proportion to a function of the inflows.
PRODUCER:  unit that collects and trnasforms low-quality
 
energy under control interactions of higher quality flows.
CONSUMER:  unit that transforms energy quality, stores it,
 
and feeds it back autocatalytically to improve inflow
.
TRANSACTION:  a unit that indicates the sale of goods or
 
services (solid line) in exchange for payment of money
 
(dashed line).
SWITCHING ACTION:  symbol that indicates one or more
 
switching functions where flows are interrupted or
 
initiated.
BOX:  miscellaneous symbol for whatever unit or function is
 
labled.

--- Page 5 ---

A very simple diagram of production & consumption . . . 
Producer
Consumer
Energy
Source
Feedback

--- Page 6 ---

.
Bio -
mass
Plant s
Bio -
mass
Wildlif e
Nut rient s
Positive 
Feedback
Nutrient Recycle
Used Energy
Forest 
Ecosystem
Sunlight
A more complex diagram of a forest . . .

--- Page 7 ---

 Model – a simplified concept within the human 
mind by which it visualizes reality
 System – can be defined as a set of parts and 
their connected relationships
(Odum and Odum, 1996)
Definitions…

--- Page 8 ---

Picture Mathematics . . .
W
B
A
Jo
J
R
k1
k2
k3
k4
k5
k6
k7
k8
k0
k9
Ra
dW/dt = Ra - K2*R*W - K1*W
dB/dt = k3*R*W - k4*B*A - k5*B
dA/dt = k6*A*B - k7*A*B - k8*a
Sun
Rain
Water
Producers
Consumers
Drawing systems 
diagrams explicitly 
writes mathematical 
equations 
expressing 
relationships 
between flows and 
storages

--- Page 9 ---

J1
J3
J2
E
Q
dQ/dt = J1 - J2 - J3
 
J1 = k1*E
 
J2 = k2*Q
 
J3 = k3*Q
dQ/dt = k1*E - k2*Q - k3*Q
Rate of Change Equation . . . 
Rate of change of 
the storage “Q” is 
equal to the 
inflows minus the 
outflows...
Inflow
Outflow
Refers to a 
change in 
the storage

--- Page 10 ---

J
Q
J1
TANK
J = Source 
Q = Storage Quantity 
J
Simulation of TANK model
mjc - 10/99
Difference Equations
dQ/dt = J - K1*Q
Initial Stores and Calibrated Coeffs.
J =
4
Q = 
0
K1 = J1/Q
0.05
Time
Sources
Storages
Flows
Increment
Days
J
Q
J1 = K1*Q
dQ/dt
0
4
0.00
0.00
4.00
1
4
4.00
0.20
3.80
2
4
7.80
0.39
3.61
3
4
11.41
0.57
3.43
4
4
14.84
0.74
3.26
5
4
18.10
0.90
3.10
6
4
21.19
1.06
2.94
7
4
24.13
1.21
2.79
8
4
26.93
1.35
2.65
9
4
29.58
1.48
2.52
10
4
32.10
1.61
2.39
11
4
34.50
1.72
2.28
12
4
36.77
1.84
2.16
13
4
38.93
1.95
2.05
14
4
40.99
2.05
1.95
15
4
42.94
2.15
1.85
0.00
10.00
20.00
30.00
40.00
50.00
60.00
70.00
80.00
90.00
0
50
100
150
200
250
300
350
Time, Days
Stored Quantity
Storages Q
Rate of Change in a Model . . .

--- Page 11 ---

J2
G
Q
100
J1
J4
J3
H
dQ/dt = J1 - J2 - J3 - J4
 
J1 = k1*E*Q
 
J2 = - k2*E*Q
 
J3 = - k3*Q
 
J4 = - k4*Q
dQ/dt = k1*S*Q - k2*S*Q - k3*Q - k4*Q
E
Consumer Equation Structure . . .

--- Page 12 ---

J2
G
Q
100
J1
J3
H
dQ/ dt  = J1 - J2 - J3
 
J1 = k1*E*Q
 
J2 = - k2*E*Q
 
J3 = - k3*Q
dQ/ dt  = k1*S*Q - k2*S*Q - k3*Q
E
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
110
120
130
140
150
1
16
31 46
61
76
91 106 121 136 151 166 181 196 211 226 241 256 271 286 301 316 331 346
TIME
Q
Simulation model EXPO
mtb -9/99
dq/dt= k1*E*Q-k2*E*Q-k3*Q
k1=
0.1
E=
1
k2=
0.03
Q=
4
k3=
0.05
Time
Q
k1*E*Q
k2*E*Q
k3*Q
0
4
1
4
0.4
0.12
0.2
2
4.08
0.408
0.1224
0.204
3
4.162
0.4162
0.1248
0.2081
4
4.245
0.4245
0.1273
0.2122
5
4.33
0.433
0.1299
0.2165
6
4.416
0.4416
0.1325
0.2208
7
4.505
0.4505
0.1351
0.2252
8
4.595
0.4595
0.1378
0.2297
9
4.687
0.4687
0.1406
0.2343
10
4.78
0.478
0.1434
0.239
11
4.876
0.4876
0.1463
0.2438
12
4.973
0.4973
0.1492
0.2487
13
5.073
0.5073
0.1522
0.2536
14
5.174
0.5174
0.1552
0.2587
15
5.278
0.5278
0.1583
0.2639
Consumer Equation Structure in a Model . . .

--- Page 13 ---

Steps in Developing and 
simulating a model
Energy Systems approach
Replaces equation generation with diagramming

--- Page 14 ---

Ground water level
Direct  
rainf all
Runin
Evaporat ion
Transpirat io n
Surface 
Out flow
Ground wat er recharge
Wetland Hydrology
Modeling….

--- Page 15 ---

System Diagram of Wetland Hydrology
.
Wind
Rain
Run-in
Biomass
Soil
Water
Soil
Organic
Matter
Surface
Water
Surface Runoff
Infilt rat ion
Sun
Animals
Animals
Vegetation
ET
Modeling….

--- Page 16 ---

Sun
Q
Rain
Runin
Recharge
ET
Outflow
Height(m)
1.000
0.102
0.002
0.000
0.001
0.002
0.000
0.102
1.000
0.101
0.000
0.000
0.001
0.002
0.000
0.101
1.000
0.098
0.000
0.000
0.001
0.002
0.000
0.098
1.000
0.095
0.014
0.003
0.001
0.002
0.000
0.095
1.000
0.109
0.000
0.000
0.001
0.002
0.000
0.109
1.001
0.106
0.000
0.000
0.001
0.002
0.000
0.106
1.002
0.103
0.007
0.001
0.001
0.002
0.000
0.103
1.002
0.109
0.000
0.000
0.001
0.002
0.000
0.109
1.003
0.106
0.000
0.000
0.001
0.002
0.000
0.106
1.004
0.103
0.000
0.000
0.001
0.002
0.000
0.103
1.005
0.100
0.000
0.000
0.001
0.002
0.000
0.100
1.007
0.097
0.000
0.000
0.001
0.002
0.000
0.097
1.008
0.094
0.000
0.000
0.001
0.002
0.000
0.094
Sun
Q
Rain
Runin
Recharge
ET
Outflow
Height(m)
1.000
0.102
0.002
0.000
0.001
0.002
0.000
0.102
1.000
0.101
0.000
0.000
0.001
0.002
0.000
0.101
1.000
0.098
0.000
0.000
0.001
0.002
0.000
0.098
1.000
0.095
0.014
0.003
0.001
0.002
0.000
0.095
1.000
0.109
0.000
0.000
0.001
0.002
0.000
0.109
1.001
0.106
0.000
0.000
0.001
0.002
0.000
0.106
1.002
0.103
0.007
0.001
0.001
0.002
0.000
0.103
1.002
0.109
0.000
0.000
0.001
0.002
0.000
0.109
1.003
0.106
0.000
0.000
0.001
0.002
0.000
0.106
1.004
0.103
0.000
0.000
0.001
0.002
0.000
0.103
1.005
0.100
0.000
0.000
0.001
0.002
0.000
0.100
1.007
0.097
0.000
0.000
0.001
0.002
0.000
0.097
1.008
0.094
0.000
0.000
0.001
0.002
0.000
0.094
WETLAND WATER
LEVEL
-0.1000
0.0000
0.1000
0.2000
0.3000
0.4000
0.5000
1
33
65
97
129 161 193 225 257 289 321 353
DAY
WETLAND WATER
LEVEL
-0.1000
0.0000
0.1000
0.2000
0.3000
0.4000
0.5000
1
33
65
97
129 161 193 225 257 289 321 353
DAY
Wind
Rain
Ru n- in
Biomass
Soil
Water
Soil
Organic
Mat t er
Surface
Water
Surface Runoff
Infilt rat ion
Sun
Evaporation
Transpiration
Animals
Animals
Migration
Vegetation
ET
Wind
Rain
Ru n- in
Biomass
Soil
Water
Soil
Organic
Mat t er
Surface
Water
Surface Runoff
Infilt rat ion
Sun
Evaporation
Transpiration
Animals
Animals
Migration
Vegetation
ET
Modeling….

--- Page 17 ---

Definitions…
 Steady State – when the storages and 
patterns in an open system become constant 
with a balance of inflows and outflows
 Equilibrium – refers to any constant state, but 
generally refers to a closed system when the 
storages become constant

--- Page 18 ---

Definitions…
 Aggregation – simplifying a system, not 
fragmentation
 5 to 20 units
 Include energy and material budgets
 Representation of levels of energy hierarchy
 Include feedback pathways
 Calibration – giving a model numerical values

--- Page 19 ---

 Validation - Compares what is known about 
the real systems performance
 Sensitivity - Analysis of how sensitive 
outcomes are to changes in the assumptions
Definitions…

--- Page 20 ---

'Expo Model
Sub Expo()
E = 1
Q = 10
k1 = 0.07
k4 = 0.05
dt = 1
t = 0
i = 9
Do Until t > 240
Cells(i, 1) = t
Cells(i, 2) = Q
dQ = k1 * E * Q - k4 * Q
Q = Q + dQ * dt
t = t + dt
i = i + 1
Loop
End Sub
INITIAL CONDITIONS
Ex. EXPO
SOURCE

--- Page 21 ---

'Expo Model
Sub Expo()
E = 2
Q = 10
k1 = 0.07
k4 = 0.05
dt = 1
t = 0
i = 9
Do Until t > 240
Cells(i, 1) = t
Cells(i, 2) = Q
dQ = k1 * E * Q - k4 * Q
Q = Q + dQ * dt
t = t + dt
i = i + 1
Loop
End Sub
DOUBLE SOURCE CONDITIONS
Ex. EXPO
SOURCE

--- Page 22 ---

QUESTION 1
SOURCE = 2 
(doubled)
Ex. EXPO
