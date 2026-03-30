---
title: "2_Tree_Ecology_and_Preservation"
source: "2_Tree_Ecology_and_Preservation.pdf"
date: 2026-03-02T23:03:37.572560
type: pdf-extraction
tags:
  - forestry
  - training
  - 04_Forest_Ecology
---

# 2_Tree_Ecology_and_Preservation

**Original File:** `2_Tree_Ecology_and_Preservation.pdf`
**Total Pages:** 288
**Processed on:** 2026-03-02T23:03:37.572560

*Summary unavailable. OpenClaw CLI failed (Exit status 2): bash: -c: line 1: unexpected EOF while looking for matching `''
*

---
*Note: This is an AI-generated synthesis. The complete original text and its embeddings reside natively in the local PostgreSQL database (Open Brain) for agentic retrieval.*

## Raw Source Text (For Context)


--- Page 1 ---

OTHER TITLES IN THIS SERIES 
1. Plant Modification for More Efficient Water Use 
by J.F. Stone (Editor) 
1975 xii + 3 2 0 pp. 
2. Tree Ecology and Preservation 
by A. Bernatzky 
1978 viii + 3 5 8 pp. 
3. Cycling of Mineral Nutrients in Agricultural Ecosystems 
by M.J. Frissel (Editor) 
1 9 7 8 viii + 356 pp. 
4. Interactions between Non-Pathogenic 
Soil Microorganisms and Plants 
by Y.R. Dommergues and S.V. Krupa (Editors) 
1 9 7 8 xii + 4 7 6 pp. 
5. Ecology of Root Pathogens 
by S.V. Krupa and Y.R. Dommergues (Editors) 
1979 χ + 2 8 2 pp. 
6. Soil Disinfestation 
by D. Mulder (Editor) 
1979 xiv + 3 6 8 pp. 
7. Management of Semi-Arid Ecosystems 
by B.H. Walker (Editor) 
1979 χ + 398 pp. 
9. Comparison of Forest Water and Energy Exchange Models 
by S. Halldin (Editor) 
1980 xiv + 258 pp. 
10. Alternative Methods of Agriculture 
by R. Boeringa (Editor) 
1980 vi + 200 pp.

--- Page 2 ---

Developments in Agricultural and Managed-Forest Ecology, 8 
MANAGEMENT AND 
ANALYSIS OF 
BIOLOGICAL POPULATIONS 
by 
BEAN-SAN GOH 
Department 
of Mathematics, 
University of Western Australia, 
Nedlands, 
W.A. 6009, 
Australia 
ELSEVIER SCIENTIFIC PUBLISHING COMPANY 
Amsterdam — Oxford — New York 
1980

--- Page 3 ---

E L S E V I E R S C I E N T I F I C PUBLISHING COMPANY 
3 3 5 J a n van Galenstraat 
P.O. B o x 2 1 1 , 1 0 0 0 A E Amsterdam, T h e Netherlands 
Distributors 
for the United 
States and Canada: 
E L S E V I E R N O R T H - H O L L A N D INC. 
5 2 , Vanderbilt Avenue 
New Y o r k , N.Y. 1 0 0 1 7 
Library of Congress Cataloging in Publication Data 
Goh, Bean-San. 
Management and a n a l y s i s o f b i o l o g i c a l 
populations. 
(Developments i n a g r i c u l t u r a l and managed-forest 
ecology ; 8) 
Bibliography: p . 
Includes 
indexes. 
1. 
Population biology—Mathematical models. 
2. 
W i l d l i f e management—Mathematical models. 
I . 
T i t l e . 
I I . 
S e r i e s . 
QB352.G63 
57U.5'2U 
79-17239 
ISBN 0-UUU-U1793-1 
ISBN 0 - 4 4 4 - 4 1 7 9 3 - 1 (Vol. 8 ) 
ISBN 0 - 4 4 4 - 4 1 5 1 5 - 7 (Series) 
© Elsevier Scientific Publishing Company, 1 9 8 0 
All rights reserved. No part o f this publication may be reproduced, stored in a retrieval 
system or transmitted in any form or by any means, electronic, mechanical, photo­
copying, recording or otherwise, without the prior written permission o f the publisher, 
Elsevier Scientific 
Publishing Company, P.O. B o x 3 3 0 , 1 0 0 0 A H Amsterdam, T h e 
Netherlands 
Printed in The Netherlands

--- Page 4 ---

To 
ΑΙ-TU AN, STEVEN WERN-YI, and MICHAEL CHIEN-YI

--- Page 5 ---

ix 
PREFACE 
In the real world, an ecosystem is subjected to large perturbations of its 
initial state and continual disturbances on its dynamics. Therefore it is impor­
tant to establish that an ecosystem model is stable relative to finite pertur­
bations of its initial state and its dynamics. One object of this book is to 
demonstrate that Liapunov and Liapunov-like functions can be successfully 
used to establish, in a nonlinear population model, stability relative to realistic 
perturbations. 
It is shown that a complex ecosystem is stable relative to realistic pertur­
bations if it is a collection of self-regulating species such that the sum total 
of the stabilizing intraspecific interactions dominates the interspecific inter­
actions. A nontrivial criterion for a complex ecosystem model to have this 
property is given. For a complex ecosystem model to satisfy this criterion, it 
is desirable that it has many null interactions between pairs of species. 
Another object of this book is to demonstrate the usefulness of optimal 
control theory in the management of biological populations. Management 
policies should always be implemented in a feedback manner. This would 
reduce some of the adverse effects of uncertainties in an ecosystem in the 
real world. After all, Nature itself uses feedback to cope with uncertainties 
in many processes. 
Chapter 2 contains a brief survey of static optimization techniques and 
optimal control theory for systems which are modelled by differential and 
difference equations. Chapter 3 contains methods which use Liapunov and 
Liapunov-like functions to establish that a given population model is stable 
relative to finite perturbations of its initial state and that it is nonvulnerable 
relative to large continual disturbances. These methods are applied to single 
species and two-species populations which are modelled by differential and 
difference equations. Fisheries provide some of the best examples of the use­
fulness of mathematics in the management of biological populations. A few 
management problems in fisheries are examined in Chapter 4. They utilize 
stability and optimal control theories. Chapter 5 considers stability in an 
ecosystem model with complexities due to species richness, nonlinearities, 
time delays and spatial heterogeneity. The very interesting and important 
problem of pest management is considered in Chapter 6. 
I have greatly benefited from discussions with T.T. Agnew, C.W. Clark, 
M.E. Fisher, G.W. Harrison, A. Hastings, C S . Hsu, L.S. Jennings, G. Leitmann, 
D. Ludwig, T.L. Vincent and C.J. Walters. Many of the results in this book 
were obtained in collaboration with Tom Vincent. This book was completed 
during my sabbatical leave which was supported by NRC grant No. 3990. 
I thank Colin Clark and members of the Mathematics Department of the 
University of British Columbia for their hospitality.

--- Page 6 ---

1 
Chapter 1 
INTRODUCTION 
1.1. M O D E L S IN E C O L O G Y 
As in other areas of science and engineering, there exists a wide spectrum 
of models in ecology. At one end of the spectrum are relatively simple but 
general models which are used to analyse theoretical questions in ecology. 
These models are called strategic models by theoretical ecologists. At the 
other end of the spectrum are detailed computer simulation models; theoretical 
ecologists call these tactical models. However, some system analysts prefer to 
refer to simulation models as realistic models. Disclosed in this difference in 
terminology is the difference in the emphasis that each group places on the models. 
It is desirable to have a wide range of models in order to achieve different 
purposes. For example, consider the flight of a plane between two cities. For 
the average passenger on the plane, it would be adequate to model the flight 
of the plane by a particle moving at a constant speed in a straight line over a 
flat earth from one city to another. The pilot, however, needs a cluster of 
models which includes strategic models of the dynamics of the plane, and 
relatively detailed models of the control systems which operate the wings 
and tail of the plane, the engines, the wheels, the brakes and other subsystems. 
The pilot's understanding of these models, which are not necessarily specified 
in explicit mathematical terms, is obtained from introductory courses on 
aerodynamics and experiences on simulators and planes. Finally, the team 
of engineers who design the plane requires a deep understanding of the 
detailed (tactical) models of the aerodynamics of the plane, the engines, the 
control systems and other subsystems. This understanding of the behavior 
of the detailed conceptual and mathematical models is obtained from math­
ematical analyses, simulations on computers, simulations of physical models 
of the plane in wind tunnels and test flights of the prototype plane. 
In the field of ecology, a broad range of models serves different objectives. 
Strategic models are needed for isolating theoretical questions and studying 
them one at a time. They also serve as a means of communicating with 
colleagues, students of ecology and scientists in other fields, in a precise 
and objective manner the latest advances achieved in the understanding of 
the dynamical behavior of ecosystems.

--- Page 7 ---

2 
On the other hand, tactical models are required for formulating the appro­
priate control policies in the management of a particular renewable resource 
or a specific pest population. In this case, only the user of the model needs 
to have a good understanding of the behavior of the model. The solution of 
these applied problems is very important in order to maintain strong support 
for ecological studies. Moreover, simulation models pose many interesting 
and pertinent questions for the theoretical ecologist to study. 
The analyses of strategic models of an ecosystem may provide useful guide­
lines in the construction of a detailed simulation model. They can also pro­
vide suggestions on how to exercise a computer model of a community. For 
instance, the analysis of a simplified pest—predator system suggests that in the 
control of pest population, it is sometimes desirable to release pests. Without 
this result from the simplified model, it would sound absurd to consider the 
release of pests in a simulation model for managing a pest population. Ideally 
we should use a combination of strategic and tactical models in studying 
ecological problems. 
1.2. S T A B I L I T Y CONCEPTS IN E C O L O G Y 
The word "stability" is used for various purposes in ecology. It is used to 
describe a lack of change in population levels or population parameters; and 
to describe the persistence of an ecosystem. In mathematics there are many 
distinctly different concepts of stability (Kaiman and Bertram, 1960 a; 
Willems, 1970). Recently, several authors (Lewontin, 1969; Holling, 1973; 
May, 1974; Maynard Smith, 1974; Goh, 1 9 7 5 ) have attempted to reconcile 
the various concepts of stability which are used in ecology and mathematics. 
Each concept of stability in ecology could be made more precise by apply­
ing it to a mathematical model of an ecosystem. For a precise definition of a 
concept of stability it is necessary to specify explicitly: (i) the class of admis­
sible perturbations; (ii) the set of admissible initial states; (iii) a set of system 
responses which characterize desirable or undesirable behavior; and (iv) a 
time interval. Usually the infinite time horizon (0,
 0 0 ) is used. Each set of 
specifications of these components of stability leads to a particular concept 
of stability. 
Four types of perturbations on an ecosystem model are: (i) impulsive and 
infrequent perturbations of the initial states; (ii) continual disturbances on 
the system dynamics; (iii) impulsive and infrequent changes in the system 
parameters; and (iv) slow and continual changes in the system parameters. 
The effects of types (i) and (iii) perturbations can be examined together; and 
those of types (ii) and (iv) can be studied together. 
The most common method of studying stability in an ecosystem model is 
by an examination of the eigenvalues of a matrix at an equilibrium. This 
method establishes stability only relative to small perturbations of the initial 
state. Hence it is called local stability. It implies that if the initial state is

--- Page 8 ---

3 
displaced a small distance from an equilibrium and the system is thereafter 
left alone, then the natural dynamics will drive the state into a decreasing 
neighbourhood of the equilibrium. Clearly an eigenvalue analysis is only a small 
initial step in understanding the dynamical behavior of an ecosystem model. 
In the real world ecosystems are subjected to large perturbations of the 
initial state and system dynamics. The most powerful analytical method for 
studying stability relative to finite perturbations of the initial state of an 
ecosystem model is the direct method of Liapunov. This method was dis­
covered in 1892 by the Russian mathematician A.M. Liapunov (see Liapunov, 
1966). But the method was ignored by mathematicians for a long time. In 
the West, it was not till the nineteen-fifties that it became a popular tool for 
the analysis of nonlinear systems. 
The direct method of Liapunov requires the construction of certain 
functions called Liapunov functions. For physical systems the direct method 
of Liapunov generalizes the principle that a system, which continuously 
dissipates energy until it attains an equilibrium, is stable. 
The population of each species in a spatially homogenous and well mixed 
ecosystem must be nonnegative. This requires that the concept of global 
stability for engineering systems must be modified in ecological models. By 
definition an ecosystem model is globally stable if every trajectory of the 
model which begins at a positive state remains in the positive orthant for all 
finite values of the time variable £, and converges to a positive equilibrium as 
t
 
0 0 . The fact that the density of a viable population in a spatially homo­
geneous ecosystem must be positive requires that a two-sided energy principle 
should be used for constructing Liapunov functions for this class of models 
(Goh, 1977 a). A viable spatially homogeneous single-species population must 
have net energy absorption when its population level is low; and it must have 
net energy dissipation when its population level is high. In a spatially homo­
genous ecosystem the population of each species at extreme densities should 
have the behavior of a viable single species population. 
In an ecosystem model, let S(0) be a set of desirable initial states, Z(T) be 
a set of undesirable initial states, U be a set of admissible disturbances, and 
[0, T] be a given time interval. By definition, the ecosystem model is non-
vulnerable relative to the sets S(0), Z(T) and U during the time interval 
[0, Τ], if there is no admissible disturbance which drives the system from a 
state in S(0) to the set Z(T) during the time interval [0, T ] . Liapunov-like 
functions can be used in an effective manner to study nonvulnerability in the 
class of generalized Lotka— Volterra models, and in a class of nonlinear 
models. 
1.3. E C O L O G I C A L E N G I N E E R I N G 
Ecological engineering problems may be divided into two classes, namely, 
design problems and control problems. The question as to whether or not it

--- Page 9 ---

4 
is desirable to import and introduce a species into an ecosystem is a design 
problem. On the other hand the formulation of spraying programs for apply­
ing an insecticide in the management of a pest is a control problem. 
To obtain good and reliable solutions to a design problem, it is necessary 
to have a relatively accurate model (mathematical or conceptual) of the eco­
system which is being manipulated or created. A reason for this stringent 
requirement is that it may not be possible to reverse the effects of a decision 
in a design problem. 
In a control problem, there are usually some variables or parameters that 
can be easily manipulated between certain bounds. These variables may be 
used in a control program in two ways: (i) in an open-loop 
manner, e.g. the 
harvesting of a population under a constant quota (yield) policy; and (ii) in a 
feedback 
(closed-loop) manner, e.g. the harvesting of a population using a 
fixed effort policy. In the second example, the rate of harvesting is proportional 
to the product of the applied effort and the population. It is interesting to 
note that in this example, the state of the system need not be monitored at 
all, the reason being that the feedback nature of the impact of the control 
variable on the population dynamics is built-in. 
Let χ denote the state vector (xu # 2, . . . , # „ ) of a system, and u denote 
the control vector (ul9 u2, ... , um ). By definition, each function u(x) deter­
mines a control policy. A feedback control policy u(x) is usually determined 
from an analysis of a deterministic model of the system. In feedback control 
we must specify a target to which the state of the system must be driven. 
The target could be a point or a region in the state space. A control policy 
must be able to drive the system from every admissible (operating) initial 
state to the target. If otherwise, the system is not fully controllable. 
The way in which a feedback control policy is implemented 
is very impor­
tant. In feedback control the state of the system is continuously monitored, 
and the control variables are adjusted according to a prescribed control policy 
u(x). It is the updating of the control variables which enables a feedback 
control system to neutralize some of the adverse effects of uncertainties. 
In practice the state of the system is sampled only at discrete times 
t, t + At, t + 2Δί, . . . and the control variables are adjusted accordingly. The 
effectiveness of feedback control to neutralize the adverse effects of a given 
class of uncertainties decreases as At increases. It is usually very difficult to 
make good estimates of the population levels in an ecosystem. In many 
cases the interactions between species are not well understood. In spite of 
these difficulties, management control policies should always be implemented 
in a feedback manner using the best estimates of the state of the system. A 
management policy which is not in a feedback form is an improperly designed 
policy. 
Walters and Hilborn (1978) have suggested that generally stochastic 
optimal control policies which take into account random disturbances on the 
system dynamics and random observation errors are similar to feedback

--- Page 10 ---

5 
control policies which are formulated using deterministic models. This prob­
lem on the relative merits of using a stochastic optimal control policy and a 
feedback optimal control based on a deterministic model of a system is very 
important in the management of ecosystems. For the general linear regulator 
problem, Fleming and Rishel (1975, p.166) have rigorously proved that the 
optimal feedback control law is the same for the stochastic model as for the 
deterministic model. For nonlinear problems this question requires further 
studies (Reed, 1974; Walters, 1 9 7 5 ; Walters and Hilborn, 1976). 
It is possible to design an efficient feedback control policy using only a 
crude model of a system if we have available an independent control variable 
for each state equation. In this case the control variables can be used to 
enhance the desirable trends in the dynamics of a system and drive it to a 
prescribed target. This will be demonstrated in Section 6.3. 
1.4. L I A P U N O V 
F U N C T I O N S 
We shall discuss briefly the properties of a Liapunov function and a 
general method for constructing Liapunov functions. The applications of 
Liapunov functions are considered in subsequent chapters. 
Let us consider the properties of a Liapunov function for a model in 
which there are no sign restrictions on the state variables. Suppose the system 
Xi = ft(Xu 
* 2 , - · , *m)> 
i = 1, 2, . . . , m 
(1.4.1) 
has an equilibrium at χ = (0, 0, . . . , 0). We have 
/ i < 0 ) « 0 , 
i = l , 2 , . . . , m . 
(1.4.2) 
Let 
||JC|| be a norm of x. For example, 
||*|| = min { 1 ^ 1 , \ x 2 \ , . . -, l * m l } , 
(1.4.3) 
where \xt\ denotes the absolute value of xx. Let r = 
. Let G(r) be a strictly 
increasing function of r such that G(0) = 0, and G(r)->°° as r-**>. By defi­
nition, a continuous scalar function V(x) is radially unbounded if there exists 
a G function with the above properties such that 
V(x)>G(\\x\\) 
(1.4.4) 
for all χ in the state space R
m = {x I (xl9 x2,..., 
xm 
)}, 
Let R be an open region of the state space. Let V(x) be a continuously 
differentiate scalar function in R. By definition V(x) is a Liapunov function 
of model (1.4.1) if it has the following properties: 
(i) 
V(0) = 0; 
(1.4.5) 
(ii) 
V(x) is radially unbounded; 
(1.4.6) 
and

--- Page 11 ---

6 
(iii) 
V(x)= 
Ύ 
jr-ft(x)<0 
for all* G R . 
(1.4.7) 
i = ι
 
Ö
X
i 
Condition (i) is trivial. It can be replaced by the condition, V(0) = a, where a 
is a positive or a negative constant. Condition (ii) can be weakened consider­
ably. For example, LaSalle (1976, p.30) uses a definition of a Liapunov 
function which only requires that V(x) is a continuous function and that it 
satisfies condition (iii). However, if condition (ii) is weakened it is necessary 
to give additional conditions which ensure that every solution of (1.4.1) which 
begins in a given closed bounded subset of R remains in it for all positive 
values of t. This requirement will be demonstrated in Example 1.4.1. Condition 
(ii) ensures that the equations, V(x) = Kp, Κγ < K2 < K3 < · · , represent a 
set of nested closed hypersurfaces (Hahn, 1976, p.99). Condition (iii) can be 
weakened to handle the case when V(x) is not continuously differentiable, 
and when f(x) is not a continuous vector function (LaSalle, 1976, p.29). 
For population models, the V(x) function is often a separable function. 
This means that 
V(x) = clVl{xl 
) + c2V2(x2) 
+ - - - + cmVm(xm) 
(1.4.8) 
where c
u c 2 , . . . , cm are positive constants. In this case V(x) is radially 
unbounded if, for i = 1, 2, . . . , m, dVJdXi 
< 0 for all xt G (--<*>, 0 ) , dVyd*, 
> 0 for all 
G (0,«>), and V(Xi)-+°° as |*;!"•«>. This property of a separable 
function can be established by using the norm given in (1.4.3). 
Example 1.4.1. The following counter-example was constructed by Barbashin 
and Krasovskii (1952) (see also Hahn, 1967, p.109) to demonstrate that a 
Liapunov function for global asymptotic stability must be radially unbounded. 
Let u = 1 + x
2 and 
* = —6x/u
2 
+ 2y, 
y =-2(x 
+ y)/u
2. 
(1.4.9) 
Consider the function 
V(x,y) 
= (x
2/u)+ 
y
2. 
(1.4.10) 
We have V(x, 0) -» 1 as * 
«>. Hence for Κ > 1, the equation V(x, y) = Κ 
does not define a closed surface. It follows that V(x, y ) is not radially 
unbounded. 
Computing V along solutions (1.4.9) we get 
y = - 4 ( 3 *
2 +y
2u
2)/u\ 
(1.4.11) 
Clearly V(*, y ) < 0 for all (*, y ) Φ (0, 0 ) . But we shall show that (0, 0) is 
not globally asymptotically stable. 
The hyperbola

--- Page 12 ---

7 
y = 2 / ( * - V 2 ) , 
* > V 2 , 
(1.4.12) 
is a barrier to the trajectories of (1.4.9) which begin in the set {(#, y) \ x-
> \/2,y> 
2/(x — \J2)}. 
This is established by comparing the slope of the 
hyperbola of (1.4.12) and the slopes of the trajectories of (1.4.8). The slope 
of the hyperbola is 
ρ = dy/dx = - 2 / ( V 2 -x)
2. 
(1.4.13) 
The slope of the trajectory of (1.4.9) which passes through the same point 
on the hyperbola is 
q = y/x = - 1 / ( 1 + 2y/2x + 2x
2). 
(1.4.14) 
Eqs. (1.4.13) and (1.4.14) imply that q > ρ for all points on the hyperbola 
given in (1.4.12). Hence the solutions of (1.4.9) which begin in the set 
{(*, y) I x > V 2 , y > 2/(x — \/2)} 
do not intersect the hyperbola in (1.4.12), 
i.e. they do not converge to (0, 0) as f ° ° . Therefore (0, 0) is not globally 
asymptotically stable. 
The next theorem gives a simple set of conditions for global stability. 
Theorem 1.4.1. The equilibrium χ = 0 of (1.4.1) 
is globally 
asymptotically 
stable if there exists a Liapunov function in R
m such that 
V(x)< 
0 
(1.4.15) 
for all xe 
R
m and χ Φ 0. 
Proof. Let the solution of (1.4.1) which begins at the point x(0) = a converge 
to the point *(<») = b Φ 0. It follows that V(b) = L where L is a positive 
constant. 
The region A = {χ | L < V(x) < V(a)} is a closed bounded region. The. 
function V(x) is a continuous function. It follows that the minimum of V(x) 
for all Λ: G A exists. Let this be —M. The equations, V(x) = Kp,Ku< 
K2< 
K3-
< · · · , represent a set of nested closed hypersurfaces. The conditions, V< 0 
and lim Vftfii)] = V(b) as i-> °°, imply that x(t) remains in A for all t > 0. 
Along the solution which begins at x(0) = a, we have 
V[x(t)] 
- V[x(0)] 
= / Vdt< 
J -Mdt 
= -Mt. 
(1.4.16) 
ο 
ο 
It follows that V[x(i)] ^· ~ ° ° . As this is impossible, we conclude that the equi­
librium χ = 0 is globally asymptotically stable. 
We shall now consider the modifications which are necessary before a 
Liapunov function, as defined above, can be applied to a population model. 
Suppose a model of a spatially homogenous community is

--- Page 13 ---

8 
Nt = AT,F% (N,, N2, . . . , Nm 
) , 
f = 1, 2, . . . , m 
(1.4.17) 
where Nt is the population of the ith species. In this model the state variables 
must be nonnegative. For all the species to persist it is necessary for model 
(1.4.17) to have a positive equilibrium or a limit cycle. It is also necessary 
for all the species to be present initially. Thus a natural concept of global 
stability for a positive equilibrium of (1.4.17) at AT* is that every solution of 
the model which begins in the positive orthant R™ = {Ν | iVf > 0, i = 1, 2, 
. . . , m } must remain in R™ for all finite values of t and converge to N* as 
We can establish that N* is globally stable by transforming the positive 
orthant R+ into R
m = {χ \ (xu x2y ... , xm 
) } , and then using Theorem 1.4.1. 
For example, we could employ the transformation 
However, this preliminary transformation is unnecessary. It may also be 
undesirable because the transformed model could be more complex. 
The alternative and better approach is to translate the stability conditions 
so that they can be used directly for establishing global stability in the posi­
tive orthant. This is achieved by translating condition (ii) of (1.4.6) into an 
appropriate condition. 
Using (1.4.18) we deduce that a scalar function V(N) is "radially unbounded" 
in R™, if the function 
is radially unbounded in R
m . This implies that the equations, V(N) = Kp, 
Kx < K2 < K3 < - - · , represent a set of nested closed hypersurfaces, and that 
V(N) 
o° as Nti~>
 0 0 and as N( -> 0+ for i = 1, 2, ... , m. 
In brief, a continuously differentiable function V(N) is a Liapunov function 
of (1.4.17) in R£* if it has the following properties: 
(i) 
V(N*) = 0; 
(1.4.20) 
(ii) The equations, V(N) = Kp, Kx < K2 < K3 < · · · , represent a set of nested 
closed hypersurfaces, and V(N) ->
 0 0 as iV,
 
0 0 and as Nt -> 0 + for i = 1, 2, 
. . . , m ; a n d 
m 
λ ν 
(iii) 
V(N) = 2 
M
Ni
Fi(
N>)
< 
0 
for all iV Ε R™. 
(1.4.21) 
i = 1 
'* 
Theorem 1.4.2. The positive equilibrium of model (1.4Λ 7) at N* is globally 
stable in the positive orthant, if there exists a Liapunov function V(N) in 
R™, and 
V(
N= 
Σ 
MT
Ni
Fi(
N)
<0 
for all Ν e R? and Ν Φ N*. 
(1.4.22) 
xt =ln(Ar f/ty*), 
i = l , 2 , . . . , m . 
(1.4.18) 
W(x) = V(Ni exp xuN2 
exp x2, . . . , ΛΓ* exp xm ) 
(1.4.19)

--- Page 14 ---

9 
The proof of this theorem follows directly from that for Theorem 1.4.1, 
and the use of the properties of the Liapunov function V(N) in the positive 
orthant R™. 
Example 1.4.2. The function 
V(N) = (lnN)
2 
(1.4.23) 
is a Liapunov function for the logistic model 
N = N(1-N). 
(1.4.24) 
It can be used to establish that Ν = 1 is globally stable. 
The function (In N)
2 is none other than x
2 under the transformation in 
(1.4.18). Clearly the change of variables given in (1.4.18) may be used to 
convert a Liapunov function of model (1.4.1) into a Liapunov function for 
model (1.4.17). 
But for establishing global stability in the positive orthant, the quadratic 
function 
V(N) = (N-N*)
T 
P(N-N*) 
(1.4.25) 
where Ρ is a positive definite matrix, is not a Liapunov function according to 
the above definition. This is because V(N) does not tend to infinity as 
Nt 
0+ for i = 1, 2, . . . , m. Hence it cannot be used with Theorem 1.4.2 to 
establish global stability in the positive orthant without using additional 
conditions. This is a common shortcoming in proofs of global stability of a 
competitive equilibrium in economics (Arrow et al., 1959; Quirk and Saposnik, 
1968; Arrow and Hahn, 1971; Takayama, 1974). 
There is a large amount of literature on the construction of Liapunov 
functions (Schultz, 1 9 6 5 ; Hahn, 1967;Gurel and Lapidus, 1 9 6 8 , 1 9 6 9 ; 
Willems, 1970; Gilpin, 1974; Gatto and Rinaldi, 1977; Goh, 1977 a; Hsu, 
1978 a; Harrison, 1979 b). However, most of the Liapunov functions that 
have been used successfully in the analyses of biological populations can be 
generated by the variable gradient method. 
In the variable gradient method, we guess the gradient of V(N) instead of 
the function V(N). We choose a set of continuous functions, Gj(AT), 
G2(N)y 
... 
, Gm (iV), such that 
dGi 
dGj 
àNj
=dW.' 
ί, ; = 1, 2, ;.. , m 
(1.4.26) 
for all N G R™, and such that the function 
m
 
Ni 
V(N)= 
2 
j 
Gs(Nl,N2,...,Si9...,Nm)dSi, 
(1.4.27) 
is a Liapunov function for (1.4.17). In other words, the set of functions

--- Page 15 ---

10 
{Gi(N)} 
are chosen so that they satisfy the conditions: (i) the integrability 
conditions in (1.4.26); (ii) the function V(N) in (1.4.27 ) is "radially unbounded" 
in R™ ; and (iii) 
m 
V(N) = 2
 
Gi(
N)
 
N i
F i (
N)
 
<
0 
for all iV G R ™. 
(1.4.28) 
i = 1 
Example 1.4.3. Let c
u c 2 , . . . , c
m be a set of positive constants, and G, 
= Ci (Si — N*)/Si 
for i ~ 1 , 2 , . . . , /n. Clearly condition (1.4.26) is satisfied. 
Using (1.4.27) we get 
m 
V(N) = 2 
Ci[Ni 
—N* —Nf ln(Ni/N?)]. 
(1.4.29) 
This is a separable function, and V(N)
 
0 0 as iVf -> 0+ and as N(
 
0 0 for 
ι = 1, 2, . . . , m. It is "radially unbounded" in R™. 
If the constants c
u c 2 , . . . , cm 
are chosen so that 
m 
V(N) = 2 
Ci(Ni - Nt)Fi(N) 
< 0 
(1.4.30) 
i = 1 
for all N G R™, then V(iV) is a Liapunov function for (1.4.17). 
Example 1.4.4. The following general prey—predator model was considered 
by Harrison (1979 b): 
X 
=b(X)-f(X)a(Y), 
Ϋ = g{X)h{Y) 
+ d(Y). 
(1.4.31) 
We assume that it has a positive equilibrium at (X*, 
Y*). 
Consider the function 
Vix, y, - ] ea^föQ «χ + I 
„r. 
(1.4.32, 
Let the equilibrium (X*y Y*) belong to an open region R. Suppose V(X9 Y) 
> 0 for all (X, 7 ) G R and (Χ, Υ) Φ ( X * , Y*). We can show that the equations 
V(X, Y) = Kp, Ki < K2 < K3 < · · · , represent a set of nested closed hyper­
surfaces in a subregion of R. 
Computing V(X, Y) along the solutions of (1.4.31), we get 
V = [g(X) -g(X*)] 
[b(X)/f(X) 
- 
b(X*)/f(X*)] 
+ [a(Y)-a(Y*)][d(Y)/h{Y)-d(Y*)/h(Y*)]. 
(1.4.33)

--- Page 16 ---

11 
Hence V(X, Y) is a Liapunov function in a neighbourhood of (X*, Y*) if: 
(i) V(X, Y)>0 
for all (X, Y) GR and (X, 7 ) Φ ( Χ * , Y*); and (ii)-V (X, 7 ) 
< 0 for all (X, Y) G R. For a function to be a Liapunov function in a finite 
neighbourhood of an equilibrium, it need not be radially unbounded. 
Hsu ( 1 9 7 8 a) and Harrison ( 1 9 7 9 b) have shown that the Liapunov function 
(1.4.32) can be used to establish stability in a wide range of prey—predator 
models. 
1.5. D I F F E R E N T I A L E Q U A T I O N S AND D I F F E R E N C E E Q U A T I O N S 
IN E C O S Y S T E M M O D E L L I N G 
The application of nonlinear difference equations in ecosystem modelling 
is becoming popular. One reason for this is that nonlinear difference equations 
can be solved directly on a digital computer. However, in theoretical ecology 
a difference equation model is often constructed initially, and a limiting pro­
cess is used to convert it into a differential equation model. Since it is usually 
impossible to solve analytically a system of nonlinear differential equations, 
it is solved on a digital computer. In doing so, it is reconverted into a system 
of difference equations. Depending on the numerical algorithm for solving 
differential equations, the resulting system of difference equations may not 
be the same as in the initial model. 
This process is unnecessary. Moreover, sometimes incorrect conclusions 
are obtained when a difference equation is converted into a differential 
equation. An example of this occurs in the modelling of the adult population 
of a single-species population with nonoverlapping generations whose dynamics 
has a two-point limit cycle. The analogous differential equation would not 
have an oscillatory behavior. Thus it may be more natural to use difference 
equations to model ecosystems (Van der Vaart, 1973; Innis, 1 9 7 4 a). 
The present extensive use of differential equations in theoretical ecology 
may be attributed to the fact that analytical methods for studying them are 
better developed and are more widely taught than those for difference 
equations. For instance, optimal control theory for systems of differential 
equations is better developed than that for difference equations. Moreover 
differential equation models of two species interactions can be analysed 
graphically. 
For the management of a population with a discrete time delay, there is 
good reason to use a difference equation model rather than a delay-differential 
equation model. This is because the optimal control of a delay difference 
equation produces no more difficulties than that of a model without a delay. 
In contrast, the optimal control of a delay-differential equation generally 
leads to considerable mathematical difficulties. 
There are two other interesting differences between a differential equation 
model. It may be difficult to establish the existence of a solution to a non­
linear differential equation during a long period of time. On the other hand,

--- Page 17 ---

12 
the existence problem for a difference equation model can be established 
quite simply. Suppose a nonlinear differential equation has a solution which 
joins a pair of points (0, x(0)) and (T, x(T)). 
The solution can be computed 
in forward time as t increases from t = 0 to t = T, or in reverse time as t 
decreases from t = Τ to t = 0. In general a nonlinear difference equation has 
a unique solution only as t increases. We shall elaborate on these properties 
of a difference equation model. 
Consider the difference equation population model 
where a: is a vector with m components. Let the set of admissible initial 
states be denoted by X. In population biology the admissible set X is usually 
If f(X) ç X , then the forward time solution of (1.5.1) from any initial state 
x(0) G X exists. Similar comments apply if f is a function of t and x. There­
fore the existence problem for an initial value problem in a difference 
equation model is trivial if model (1.5.1) describes the biology correctly. 
However, it is sometimes convenient to use simplified expressions for the 
function f(x) when the set of admissible initial states is restricted to a subset 
X of the positive orthant. In this case the existence problem is not trivial. The 
modeller then should verify that f(X) Q X. For example, a stock recruitment 
function that is often used in the modelling of whale populations is 
R = aS — öS
2, where R denotes a recruitment, S denotes the breeding stock 
which produced the recruitment, and a and b are positive parameters. For 
large values of S, R < 0. This implies that the formula is valid only in a 
restricted range of values of S. 
Generally a nonlinear difference equation has a unique solution from a 
given point only in the forward time. Consider the scalar equation 
For x(0) GX={x\0<x<l}, 
this equation has a unique forward solution. 
But for a given admissible value of x(t + 1 ) , there are two possible values 
for x(t). In particular, if x(t + 1) = 1/4, we have x(t) = (1/2) ± ( l / 2 \ / 2 ) . This 
implies that it may not be possible to reconstruct the historical sequence of 
events which produced the present state of a system by using the current 
state if a dynamical system is adequately modelled by a set of nonlinear 
difference equations. Random disturbances make a determination of the past 
even more problematical. For such a nonlinear system the history of the 
system can be specified only in terms of a set of equilibria that may have 
existed in the past. This requires an examination of the range of values of 
the parameters of the model which would generate stable equilibria. 
Recently, important advances have been made in the theory of nonlinear 
difference equations. The phenomena of chaotic behavior for a single nonlinear 
x(t+ 
l ) = fl*(0], f = 0 , l , 2 , . . . 
(1.5.1) 
X= 
{x \x( > 0,i = l, 2, . . . , m } . 
(1.5.2) 
J t ( i + 1) = 2[x(t) - x
2 (t)], 
ί = 0 , 1 , 2 , . . . . 
(1.5.3)

--- Page 18 ---

13 
difference equation have been unravelled (see May, 1976 a). The applications 
of Liapunov functions to establish stability, region of ultimate confinement 
and nonvulnerability are examined in this book. In particular, fairly compre­
hensive conditions for a scalar nonlinear difference equation to have a global 
attractor will be established. 
C H A P T E R 1: S E L E C T E D R E F E R E N C E S 
Models in ecology 
Lotka ( 1 9 2 5 ) ; Volterra ( 1 9 3 1 ) ; Gause ( 1 9 3 4 ) ; Levins ( 1 9 6 6 , 1 9 6 8 ) ; Watt ( 1 9 6 8 ) ; Patten 
( 1 9 7 1 ) ; Williamson ( 1 9 7 2 ) ; Ludwig ( 1 9 7 4 ) ; May ( 1 9 7 4 , 1 9 7 6 b ) ; Maynard Smith 
( 1 9 7 4 ) ; Pianka ( 1 9 7 4 ) ; Banks ( 1 9 7 5 ) ; Gilpin ( 1 9 7 5 a ) ; Wiegert ( 1 9 7 5 ) ; Clark ( 1 9 7 6 a ) ; 
Hassell ( 1 9 7 6 ) ; Christiansen and Fenchel ( 1 9 7 7 ) ; Pielou ( 1 9 7 7 ) . 
Stability concepts in ecology 
Lewontin ( 1 9 6 9 ) ; Holling ( 1 9 7 3 ) ; Botkin and Sobel ( 1 9 7 4 ) ; Innis ( 1 9 7 4 b); May ( 1 9 7 4 ) ; 
Maynard Smith ( 1 9 7 4 ) ; Orians ( 1 9 7 4 ) ; Wu ( 1 9 7 4 ) ; Goh ( 1 9 7 5 , 1 9 7 6 a, 1 9 7 7 a). 
Ecological 
engineering 
Goh et al. ( 1 9 7 4 a, b ) ; Vincent et al. ( 1 9 7 5 , 1 9 7 7 ) ; Clark ( 1 9 7 6 a ) ; Conway ( 1 9 7 7 ) ; Shoe­
maker ( 1 9 7 7 ) ; Holling ( 1 9 7 8 ) ; Reed ( 1 9 7 9 ) ; Walters and Hilborn ( 1 9 7 8 ) . 
Liapunov 
functions 
Kaiman and Bertram ( 1 9 6 0 a ) ; Schultz ( 1 9 6 5 ) ; Liapunov ( 1 9 6 6 ) ; Hahn ( 1 9 6 7 ) ; Gurel and 
Lapidus ( 1 9 6 8 , 1 9 6 9 ) ; Willems ( 1 9 7 0 ) ; Kilmer ( 1 9 7 2 ) ; Gilpin ( 1 9 7 4 ) ; G a t t o and Rinaldi 
( 1 9 7 7 ) ; Goh ( 1 9 7 7 a, c ) ; Hastings ( 1 9 7 8 ) ; Hsu ( 1 9 7 8 a, b ) ; Takeuchi et al. 
( 1 9 7 8 ) ; Case and Casten ( 1 9 7 9 ) . 
Differential 
equations versus difference 
equations 
Kaiman ( 1 9 5 6 ) ; Van der Vaart ( 1 9 7 3 ) ; Innis ( 1 9 7 4 a ) ; May ( 1 9 7 6 a ) ; Goh ( 1 9 7 8 c ) ; 
LaSalle ( 1 9 7 9 ) .

--- Page 19 ---

15 
Chapter 2 
OPTIMIZATION TECHNIQUES 
2.1. INTRODUCTION 
The essence of management is to make optimal decisions subject to realistic 
constraints. This is none other than an optimization problem. However, in 
practice there are tremendous difficulties in quantifying the variables, the 
objectives and the constraints in a given decision problem. Here we shall 
focus our attention on the task of formulating an optimal policy when a 
decision problem has already been defined in a mathematical form. 
At present, one difficulty encountered in the application of an optimization 
technique in a decision problem is the numerical problem of computing the 
optimal solution. This difficulty is especially acute in problems with many 
state variables. For this reason, in this book we shall only apply optimization 
techniques to relatively simple problems. 
Ecosystems are dynamical systems. Hence the appropriate tool for for­
mulating optimal policies in the management of ecosystems is optimal con­
trol theory. However, the understanding of static optimization techniques is 
useful because a discrete time optimal control problem can be considered as 
a static optimization problem with a special structure. 
Most decision problems in the management of ecosystems involve multiple 
objectives. There are many difficulties in applying the theory of decision 
problems with multiple objectives. For this reason, we shall examine only 
very simple ideas from this theory. 
The need for optimization techniques goes back to the ancient Greeks: for 
example, they were interested in the largest area of land which could be 
enclosed in a boundary of given length. The solution of optimization prob­
lems was one of the main motivations for the creation of calculus. However, 
before the Second World War, optimization techniques were applied mainly 
to geometrical problems and problems in physical sciences. The use of opti­
mization techniques as a management tool is a recent development which 
took place only after the Second World War (Dantzig, 1963; Lawden, 1963; 
Leitmann, 1966; Bryson and Ho, 1969). 
The first modern optimization technique which achieved immediate 
success in management problems was linear programming. A notable feature

--- Page 20 ---

16 
of this technique is that it readily handles linear inequality constraints. Even 
more important is the fact that the simplex method in linear programming 
provides a very efficient method for computing the optimum solution. The 
success of linear programming led directly to the discovery and proof of the 
Kuhn—Tucker Theorem in nonlinear programming. Unfortunately, the 
Kuhn—Tucker Theorem does not provide a method to compute the optimal 
solution. 
For dynamic problems, Bellman (1957) formulated the principle of 
optimality which is the core of the theory of dynamic programming. This 
technique was applied to problems in automatic control. These applications 
of dynamic programming motivated Pontryagin to develop the Maximum 
Principle (Pontryagin et al., 1962). Independently of these developments, 
a small group of scientists was using the classical calculus of variations for 
finding an optimal thrust program for a rocket (Lawden, 1963; Leitmann, 
1966). It soon became clear that the Pontryagin Maximum Principle is 
simply a more lucid version of some of the necessary conditions of the 
classical calculus of variations (Berkovitz, 1961). It is unfortunate that most 
textbooks on optimal theory do not explain that the Pontryagin Maximum 
Principle does not include the focal point condition of the calculus of 
variations (Bliss, 1946). In some problems the focal point condition estab­
lishes when a sequence of short-term optimal policies fails to be a long-term 
optimal. Clearly this is of great importance in management. 
One important theoretical development in the nineteen-six ties was the 
derivation of necessary conditions for singular control (Goh, 1966 a, b, c, 
1973 a; Kelley et al., 1967; Bell and Jacobson, 1975). Singular control 
occurs in an optimal control problem in which one or more of the control 
variables appear linearly in the system dynamics and the objective function. 
Interesting problems of this kind first appeared in rocket problems. This is 
because the thrust control variable appears linearly in the system dynamics. 
Similarly in ecological problems, singular control is very important because 
control variables often occur linearly in the system dynamics. 
The first applications of optimal control theory to ecological problems 
appeared only in the late nineteen-sixties. It appears that several authors, 
independently of each other, began to publish their works in this area 
about the same time (Watt, 1968; Goh, 1 9 6 9 / 1 9 7 0 ; Becker, 1970; Clark, 
1971.) 
2.2. STATIC OPTIMIZATION P R O B L E M S 
In this section we shall examine (i) the minimization of a function of one 
variable; (ii) the minimization of a function of several variables; (iii) mini­
mization problems with equality constraints; and (iv) linear and nonlinear 
programming problems. 
Consider the problem of minimizing the function f(x) for all χ belonging

--- Page 21 ---

17 
to the admissible set, S = {χ \ a < χ < b} where a and b are constants. The 
function f(x) is said to have a local minimum at x* G S if f(x) > f(x*) for all 
x in an admissible neighbourhood of x*. It has a global minimum at x* if 
f(x)> 
f(x*) 
fornixes. 
Theorem 2.2.1. If a< x* < b9 necessary conditions 
for f(x*) to be a local 
minimum are f'(x*) 
= 0 and fix*) 
> 0. A necessary condition 
for f(a) to be 
a local minimum is f(a) > 0. Similarly a necessary condition 
for f(b) to be a 
local minimum is f'(b)< 
0. 
Proof. By Taylor's Theorem we have 
f(x* + Ax)-f(x*) 
= Axf'(x*) 
+ (l/2)(Ax)
2 
f"(x*)+ 
( 1 / 3 ! ) ( Δ * )
3 θ Ax) 
(2.2.1) 
where 0 < Θ < 1. Suppose x* is an interior point of S and fix*) 
Φ 0. When 
Ax is very small the dominant term on the right hand side of (2.2.1) is 
Axf (x*). We can choose Ax so that Ax fix*) 
< 0. This implies f(x* + Δ*) 
— f(x*) < 0. Hence f(x*) is not a local minimum. It follows that we must 
have f'(x*) 
= 0. If this condition is satisfied, f(x* + Ax) —f(x*) 
is approxi­
mately equal to (1/2)(Ax)
2 /"'(**) when Ax is small. Clearly we must have 
f"(x*) 
> 0. 
If Λ:* = a, we have 
f(a 4- Ax) - f(a) 
f(a)Ax. 
(2.2.2) 
In this case, Ax > 0. Hence for f(a)Ax 
to be nonnegative we must have 
f'(a)> 
0. Similarly a necessary condition for f(b) to be a local minimum is 
f(b)<0. 
Corollary 2.2.1. If a< x* < &, sufficient 
conditions 
for f(x*) to be a local 
minimum are f'(x*) 
= 0 and f"(x*) 
> 0. A sufficient 
condition 
for f(a) to be 
a local minimum is f (a) > 0. A sufficient 
condition 
for f(b) to be a local 
minimum is f'(b)< 
0. 
Corollary 2.2.2. Ifa<x*<by 
f(x*) is a global minimum iff(x) 
< 0 for 
a<x<x*9 
and f'(x) > 0 for b > χ > x*. Iff(x) 
> 0fora<x<b, 
then 
f(a) is the global minimum. If f(x) 
< 0 for α < χ < b, then f(b) is the global 
minimum. In all cases, f(x*) is a global minimum if f"(x) > 0 for all x G S. 
Example 2.2.1. Consider the function 
f(x) = χ — x* — 
x*\n(x/x*) 
where x* is a positive constant and the admissible set is S = {χ | χ > 0 } . We 
have 
f'(x) 
= 
l-x*/x.

--- Page 22 ---

18 
We have 
àf/àXi-Ciil-xÎ/Xi), 
(2.2.7) 
d
2f/dx
2 
= Cix*/xl 
(2.2.8) 
tfflbxàx, 
= 0, 
if i Φ j . 
(2.2.9) 
Clearly fix*) 
= 0, f'(x) < 0 for χ* > χ > 0, and f'(x) > 0 for χ > χ*. Hence 
f(x) 
has a global minimum at χ = χ*. 
Alternatively, as 
f (*) = I / *
2 > 0 
for all Λ; e S, / ( x ) has a global minimum at χ = χ*. 
We shall discuss only the theory of minimizing a function. This is because 
we can find the maximum of f(x) by minimizing —fix). We have the identity, 
max f(x) = —min [—/(*)]. 
(2.2.3) 
Let S be a region in the R
n-space. Let f(xl9 
x2> ·.. , xn) be defined on the 
set S. If the minimum of f(x) occurs at a boundary point of S, we have a non­
linear programming problem which will be discussed later. 
Theorem 2.2.2. If x* is an interior point of the admissible set S, necessary 
conditions for fix*) to be a local minimum are 
(i) 
3 nx*)ldxt 
= 0, 
i = l , 2 , . . . , n ; 
(2.2.4) 
and 
(ii) at x* the matrix 
(&f{x)l*Xi 
bXj) 
(2.2.5) 
must be positive 
semidefinite. 
This theorem can be proved by applying Taylor's Theorem. A necessary 
condition for a matrix to be positive semidefinite is that its leading principal 
minors are nonnegative. 
Let S be an open and convex region. If df(x*)/dxi 
= 0, for i = 1,2, . . . , η 
and (à
2f(x)lbxi'àXj) 
is positive definite at all points in S, then fix*) is the 
global minimum of fix) in the set S. 
Example 2.2.2. The following function plays an important role in establishing 
global stability in an ecosystem model. Let S = {χ \ xt{> 
0, i = 1, 2, . . . , η } 
and the objective function 
η 
Λ*)= 
Σ 
CilXf-x* 
-x*ln(xt/x*)], 
(2.2.6) 
ι = 1 
where c 1 ? c 2 , . . . , cn and x\, x*, ... , x* are positive constants. This function 
has a global minimum at ix*, x*9 ... , x*).

--- Page 23 ---

19 
Clearly χ* is a solution of (2.2.7) and the matrix (d
2f/dXi 
dXj) is positive 
definite in S. Hence f(x) has a global minimum at x*. 
Alternatively we note that the function is a linear combination of functions 
each of which is only a function of one variable. It follows that the optimal 
value of the function occurs at the point where each of the separate functions 
is optimal. This completes our analysis of the example. 
Theorem 2.2.2 is useful only in a very limited class of problems. This is 
because it characterizes an optimal solution but does not provide an effective 
method to compute the optimal solution. It is important because it provides 
the basis for further theoretical developments. In practice we have to use 
numerical algorithms to compute an optimal solution. The Davidon— 
Fletcher—Powell algorithm was a significant advance in numerical methods 
for solving optimization problems. Since then numerous algorithms have 
been developed. A new algorithm developed by Fletcher (1975) is one of the 
best available. Almost all algorithms have been developed for computing a 
local minimum. From experience, it is found that some of the best algorithms 
have failed to compute the global minimum in simple problems even when the 
starting point is near the global minimum. Hence if time and resources permit, 
it is wise to use at least two different algorithms in a given problem and a large 
number of starting points for each algorithm. 
Consider the constrained minimization problem: 
Minimize 
f(xi9 
x2, . . . , xn)> 
(2.2.10) 
subject to 
gi(X\, 
#2, ·.. 
> xn)
 
= 0» 
ι = 1, 2, . . . , m. 
(2.2.11) 
By definition, x* is an admissible point if it satisfies the constraints (2.2.11). 
Theorem 2.2.3. A necessary condition 
for fix*) to be a local minimum 
is that 
there exists a set of constants, 
X0 > 0, λί9 λ 2, . . . , X m such that at x*, 
bF(x9\)ldxj 
= 0, 
j = 1, 2, . . . , n, 
(2.2.12) 
*,(*) = 0, 
i = l , 2 , . . . , m 
(2.2.13) 
where 
F = X0f+ 
Σ 
(2.2.14) 
i = 1 
The constants, λ 0 , 
. . . , \
m , are called Lagrange multipliers. If λ 0 = 0, 
there may be more than one set of multipliers. Then x* is called an abnormal 
point (Vincent and Goh, 1972). In static optimization problems, abnormality 
is a mathematical curiosity. However, if we apply Theorem 2.2.3 to a discrete 
time optimal control problem, we find that the case when λ 0 = 0 is quite 
common. In this case abnormality represents a lack of controllability in a

--- Page 24 ---

20 
problem. For example, this occurs if the set of available options is sufficient 
for the control of a system because the time available in a management 
problem is too short. In truly static optimization problems, it is reasonable 
to assume normality and let λ 0 = 1. 
The proof of Theorem 2.2.3 can be found in the paper by Vincent and 
Goh (1972) or the book by Bliss (1946). The proof given in most textbooks 
on advanced calculus is not valid for the abnormal case. 
The usefulness of Theorem 2.2.3 is very limited because the theorem 
characterizes an optimal solution but does not provide an effective method 
to compute the optimal solution. 
Example 2.2.3. Find the shortest distance from the origin (0,0) to the straight 
line Χι 4- x2 = 1. Graphically it is clear that the shortest distance is given by 
the straight line joining the points (0,0) and ( 1 / 2 , 1 / 2 ) . 
In this problem, we minimize f= (x\ 4- x\)
v2 
subject to xx 4- x2 —1 = 0. 
By definition, 
F(x,\) 
= (x\ 4- x\)
vl 
+ \(Xl 
+ x2 - 1) => bF/bx, 
= xl/(x
2
1 
4- x\)
V2 
4- λ = 0, 
bF/bx2 
= x2 l{x\ 4- x\)
1'
2 
4- λ = 0. 
We can show that χ = ( 1 / 2 , 1 / 2 ) and λ = —l/y/2 satisfy these equations. This 
analysis illustrates the way Theorem 2.2.3 is often used. 
In realistic management problems, we have equality and inequality con­
straints. For example, the density of a population must be nonnegative. The 
simplest optimization problem with inequality constraints is a linear pro­
gramming problem. The standard linear programming problem is as follows: 
Minimize 
[cxxx 
4- c2x2 
4- · · · 4- cn xn ] 
(2.2.15) 
η 
subject to 
2 
<*is
xs
=biy 
i = 1, 2, . . . , m,(m < n), 
(2.2.16) 
s = ι 
Xi>0, 
i = l , 2 , . . . , n . 
(2.2.17) 
The simplex algorithm provides a very reliable method for computing the 
optimal solution of a linear programming problem (Dantzig, 1963). 
If the objective function or the constraints involve nonlinear functions, we 
have a nonlinear programming problem. The standard nonlinear programming 
problem is as follows: 
Minimize 
f{xx, 
x2, ... , xn) 
(2.2.18) 
subject to 
gs(xu 
x2,... 
, xn) = 0, 
s = 1, 2, . . . , ρ, 
(2.2.19) 
hr(xu 
x29 ... , xn ) > 0, 
r = 1, 2, . . . , m. 
(2.2.20) 
Let λ 0 , λ ι , λ 2 , . . . , λ ρ , μ ! ,μ 2, . . . ,M m be a nonzero set of constants. For 
convenience let

--- Page 25 ---

21 
Ρ 
m 
L(x,X,M) = Xo/
r+ 2
 
x*gs- 
2 
Vrhr. 
(2.2.21) 
s = 1 
r = 1 
By definition, JC* is an admissible point if it satisfies conditions (2.2.19) and 
(2.2.20). 
Theorem 2.2.4. A necessary condition 
for f(x) to be optimal at an admissible 
point x* is that there exists a nonzero set of multipliers, 
λ 0 > 0, λχ, λ 2, . . . , λρ, 
μ ι , Μ 2 , . . . , Um y such that at x*, 
μ
Γ > 0 , 
μ Λ Μ
 
= 0, 
r = 1 , 2 , . . . , m, 
(2.2.22) 
bL(xy\^)/bXi 
= 0, 
i = 1, 2, . . . , n. 
(2.2.23) 
In static problems, we usually assume JC* is a normal (regular) point and 
let λ 0 = 1. This theorem characterizes an optimal solution but it does not 
provide a constructive method for obtaining it. For a given problem we can 
use one of the numerous algorithms that are available. 
2 . 3 . R E L A X E D OPTIMIZATION P R O B L E M M E T H O D 
By definition, a model is a simplified representation of a real situation. In 
most decision problems we ignore many factors and constraints so that we 
have a model of the decision problem which is tractable to analysis. For 
example in a fishery, we often consider only the problem of harvesting for 
optimal biomass yield and ignore economic constraints. Similarly many 
economic decisions are often made without considering their impact on the 
environment. The act of ignoring constraints enlarges the admissible set of 
options. This may lead to a worse decision from the overall point of view 
because the costs in violating the ignored constraints are not taken into 
account. The purpose of this section is to formalize this process of simplifi­
cation from the optimization point of view. 
Consider the problem of minimizing f(x) for χ belonging to an admissible 
set S. It may be very difficult to compute the global minimum of f(x) when 
S has a very complicated structure. The relaxed optimization problem method 
considers tentatively the problem of minimizing f(x) for χ belonging to a 
simpler set Ζ which is a superset of S. If the global minimum f(x) for x G Ζ 
is at χ* and x* G S, then clearly the global minimum of f(x) for x G S is at 
χ*. In a decision problem, if x* does not belong to S, it would normally be 
acceptable if there exists a point x G S such that f(x) is not too different 
from f(x*). 
Note that f(x) need not be an optimal value in the mathematical 
sense. For future references we shall state these simple and useful results as 
theorems.

--- Page 26 ---

22 
Theorem 2.3.1. Let S C Ζ. If the global minimum of f(x) for x G Ζ is at χ* 
and x* G S, then 
min f(x) = min fix). 
xeS 
xeZ
 
{ Ζ '
ό 
Theorem 2.3.2. Let Sc. Ζ and e be a small positive number. If the global 
minimum of f(x) for x G Ζ is at χ* and there exists a point x G S such that 
f(x) = f(x*) + e, 
(2.3.2) 
then χ is a suboptimal 
solution in the problem of minimizing f(x) for x G S. 
The main difficulty in using Theorems 2.4.1 and 2.4.2 is to show that 
x* G S or that there exists x G S such that f(x) ^ 
fix*). 
Example 2.3.1. Let the set S consist of points which satisfy the equation 
x2 = *i sinil/jc!) 
if*! ^ 0, 
= 0 
if JCJ 
= 0. 
Clearly the set S has an intricate structure. Suppose the function to be main­
tained is 
f(x) ~ x\ 
x\. 
A superset of S with a simpler structure is the set of points, Ζ = {χ \ x\ 
< x\). On the set Z, f(x) > 0. We have f(0) = 0. Hence the global minimum 
of f(x) for Λ: G Ζ is f(0) = 0. The point (0,0) is a member of the set S. Hence 
f(0) is the global minimum of f(x) for x G S. 
Example 2.3.2. Let the s e t S = { ^ | l < Ä : < 2 } and f(x) = x. Mathematically 
this problem has no minimum but has an infimum. In decision problems this 
fine mathematical distinction is often of no consequence. Consider the super­
set, Ζ = {χ I 1 < χ < 2 } . The function f(x) has a minimum at x* = 1 . Let e 
be a small positive number. Clearly if χ = 1 + e, f(x) is approximately equal 
to f(x*). 
We say f(l + e) is a suboptimal solution. 
Example 2.3.3. The following result is needed to establish global stability in 
some population models. In this case a suboptimal solution is not acceptable. 
Let the set S = {χ \ x{ + ei > 0, i = 1, 2, . . . , η } where ex, e 2, . . . , en is a set 
of positive constants. Let Ρ be a constant negative definite symmetric matrix 
such that Pa < 0 for ι = 1, 2, . . . , η and P ö > 0 if i'Φ j . We want to show 
that the nondifferentiable function 
η 
η 
Q= Σ
 ρ»·*<
?+ Σ Λ>·ι*ίΐι*>ι 
(2.3.3) 
i = 1 
j Φ i 
is negative definite for all x G S.

--- Page 27 ---

23 
The problem is solved if we can show that Q = 0 at χ = 0 is the unique 
global maximum for χ Ε S. We have two difficulties in establishing this result 
directly. Firstly Q(x) is not a differentiable function at χ = 0. Secondly the 
set S is quite complex. 
From (2.3.3) we observe that Q(x) is a function of only the absolute values 
of xu x2j ... , xn. This implies that we only have to show that Q(x) is negative 
definite in the set W = {χ | xi > 0, / = 1, 2, . . . , η } . In the set W we can remove 
the absolute signs from the variables in the function Q(x). Let the function 
η 
η 
Σ Pux* + Σ PvXiXj. 
(2.3.4) 
i = l 
j Φ i 
We want to establish thatg(x) has a unique global minimum equal to zero on 
the set W. 
Let R" be the whole of ( x l 5 x2, . . . , x n)-space. Clearly R
n is a superset of 
W. From (2.3.4) g(x) = x
TPx. 
By assumption Ρ is negative definite. Hence 
g(x) has a unique maximum equal to zero at χ = 0 for all χ Ε R" . But χ = 0 is 
an element of the set W. Hence the unique maximum of g(x) for χ Ε W is 
equal to zero and occurs at χ = 0. This implies that Q(0) = 0 is the unique 
global maximum for χ Ε S. 
These examples illustrate some technical applications of Theorems 2.3.1 
and 2.3.2. These theorems can provide the basis for using simplified models 
in which some constraints and some processes in a problem are ignored. This 
is equivalent to minimizing an objective function in a superset of the admissible 
options. However, the difficult step, which is seldom carried out, is to demon­
strate that the solution in the relaxed optimization problem belongs to the 
original admissible set or that the solution in the relaxed optimization problem 
can be approximated by a solution which belongs to the original admissible 
set. In other words, it is unusual to find verification that the simplifying 
assumptions in a problem are indeed unimportant. 
2.4. M U L T I P L E O B J E C T I V E S DECISION P R O B L E M S 
In a decision problem we usually have several objectives in mind. For 
example the average driver would like to maximize his safety and minimize 
the time to get to his destination. The first and major difficulty in such a 
problem is to set scales for the objective functions so that we can compare 
the value of one objective with the value of another objective. Even if this 
basic difficulty has been overcome, there are conceptual difficulties in 
determining what is meant by one solution being better than another when 
there is more than one objective. 
Suppose we have an admissible set of options which is denoted by S. Let 
* be an element of S. For simplicity we shall examine the case when there

--- Page 28 ---

24 
are only two objective functions, Jx (x) and J2 (x). We note that J = (Jx ,J2 ) is 
a vector. Let J{x) 
= (Jx (#'), J 2 (*')) and J ( x * ) = (Jx (x*), J2 (x*)). 
We cannot 
say that J(x') < J(x*) or J(x') > J(x*) except in the case when J(x') andJ(x^) 
are parallel vectors. It follows that we need other criteria for stating thatJ(x') 
is better or worse than J{x* ) . 
There are three important ways for establishing that J(x) is better than 
J(x* ) or vice-versa. Firstly we can use the concept of non-inferior solution. 
Secondly we can use a single weighted objective to determine an optimal 
solution. Thirdly we can temporarily convert one objective into a constraint 
and minimize the other objective. If this leads to an unsatisfactory solution, 
we could adjust the constraint on the first objective function and repeat the 
process until a satisfactory solution is obtained. 
By definition, x* is a noninferior (Pareto optimal) solution if there does 
not exist another option χ from the admissible set S such that 
In other words, there does not exist another admissible option which gives 
a lower value to one objective function without increasing the value of the 
other. Denote the set of noninferior solutions by A. 
Let α χ and a2 be positive numbers such that α x + a2 = 1. If Jx(x) is more 
important than J2(x), 
then we choose ax and a2 so that a! > a 2 . Thus ai and 
a2 are weighting factors. In an auxiliary minimization problem, we minimize 
the objective function, 
for x G S. For each choice of (αϊ , a 2 ), we get one or more solutions in this 
minimization problem. Denote the set of solutions by this method for all 
admissible values of ax and a2 by W. We can show that W is a subset of A. 
In the third method, we convert Jx (x) or J2 (x) into a constraint. For 
example we can impose the condition, Jx (x) < ex, where ex is chosen tenta­
tively. We then minimize J2(x) subject to x G S and Jx (χ) < ex. If the solution 
of this auxiliary optimization problem is unsatisfactory, we could relax the 
constraint on Jx(x) by choosing a larger ex. This process is repeated until 
satisfactory solutions are obtained. As the value of ex is varied, we get a set of 
solutions which is denoted by E. This method may be the best approach for 
ecological decision problems with multiple objectives. This is because in 
ecological problems it is difficult to quantify the objectives so that they are 
comparable. For example, it is very difficult ot express in dollars and cents 
the value of a species which has no apparent economic value. And yet there 
is always a possibility that its extinction could lead to a considerable change 
in an ecosystem because of subtle and unknown interactions. In such a situation, 
it is prudent to impose tentatively the constraint that the density of the species 
should not be allowed to go below a danger level where the probability of 
extinction is very high. 
Jx(x)<Jx(x*), 
J2(x)<J2(x*) 
and 
J(x) Φ J{x* ) . 
(2.4.1) 
F{x,a) 
= axJx(x) 
4- 
a2J2(x) 
(2.4.2)

--- Page 29 ---

25 
Example 2.4.1. This example illustrates the difficulties which can be 
experienced in a very simple decision problem with multiple objectives. 
Let the admissible set be 
S = {{x,y,z) 
| l < x < 2 , 0 < y < l , 0 < z < l } . 
Suppose we wish to "minimize" simultaneously the functions 
Jx = x
2 + y, 
J2 = 3 — χ + z. 
After some effort we find that the set S is mapped into the hatched region 
in Fig. 2.4.1. 
The boundary set of points PQ is the set of noninferior solutions. If we 
minimize the functions, F = <xxJx + a2J2 
where ax and a2 are positive constants 
such that α ! + a 2 = l , w e generate the solutions PQ as ax and a2 are varied. 
If α ι or α 2 is allowed to be equal to zero, the solution set becomes VPQR. 
If we minimize J2(x) subject to the tentative constraint, Jx (x) < ex, we generate 
the optimal set PQR as ex is varied. Clearly the value of Jx(x) along QR is 
unsatisfactory but J2(x) attains its least value. 
1 
I 
. 
. 
r - > 
0 
1
2 
3 
Fig. 2 . 4 . 1 . The hatched region represents the set o f values o f the objectives Jx = x
2 + y and 
J2 = 3 — χ + z as (x, y, z) is varied in the admissible set.

--- Page 30 ---

26 
2.5. CONTINUOUS TIME OPTIMAL C O N T R O L 
Ecosystems are dynamical systems and the most popular way to model an 
ecosystem is by means of a set of differential equations. It follows that the 
appropriate tool for formulating optimal policies for ecosystems is continuous 
time optimal control theory (Goh, 1 9 7 8 c). 
Let χ be the state vector. In a managed ecosystem the components of χ 
could be population densities nutrient levels or money invested in the manage­
ment of the ecosystem. To manage an ecosystem we must be able to manipulate 
some variables which affect the dynamics of the ecosystem. These variables 
are called control variables. Let u = (uu u2, ... , um ) be the control vector. 
In most decision problems the components of u must satisfy certain inequality 
constraints. Usually we have u G U = {u \ ar < ur < b r, r = 1, 2, .. . , m } . 
The standard optimal control problem is as follows: 
System: 
xt = ft (t, x, u)y 
i = 1, 2, . . . , n. 
(2.5.1) 
Initially: 
* i ( 0 ) = x l O , 
i = 1 , 2 , . . . , n. 
(2.5.2) 
Terminally: 
φ
8[χ(Τ), 
T] = 0, 
s = l , 2 , . . . , f e . 
(2.5.3) 
Constraint: 
u G U. 
(2.5.4) 
τ 
Objective: 
ming[x(T), T] + / L(f, x, u)dt. 
(2.5.5) 
ο 
Condition (2.5.2) simply means that we can measure the state vector at 
time t = 0. Here (xi0) is a constant vector. Condition (2.5.3) represents the 
target in a decision problem. The specification of the target in an optimal 
control problem is itself a decision problem. In ecological problems much 
work remains to be done on how we should specify the target in an optimal 
control problem which arises in ecology. We shall return to this problem later. 
Here we assume that the target is specified in a given optimal control problem. 
The objective function consists of some desirable criterion at the end of the 
planning period plus a criterion which describes some desirable performance 
index during the planning period. 
In applications of optimal control theory, necessary conditions are more 
useful than sufficiency conditions. This is because it is extremely difficult 
to apply sufficiency conditions in a practical problem. There are several sets 
of necessary conditions in optimal control theory. This reflects the com­
plexity of a dynamical system. A useful set of necessary conditions is sum­
marized in the next theorem. 
Necessary conditions can be stated compactly in terms of the Hamiltonian 
function. By definition, the Hamiltonian function is 
η 
H(t9 x, u9 p) = p0 L(t9 xyu)+ 
2 
Pi fi (t9 x, u). 
(2.5.6)

--- Page 31 ---

27 
We have either p0 = 0 or p0 = 1 . The functions Pi(t), p2(t), 
... , pn (t) are 
called costate variables. If p0 = 0, the corresponding optimal set (x*, u*) is 
said to be abnormal (Vincent and Goh, 1972). It usually reflects a lack of 
control in a problem. If p0 = 1, the optimal set (x*, u*) is said to be normal. 
Note that many publications use a different Hamiltonian function in which 
Po
 = ~ I - This leads to a slightly different set of necessary conditions. 
Theorem 2.5.1. A necessary condition 
for an admissible set (x*, u*) to be 
optimal is that there existsp0, 
Pi(t),p2(t), 
. . . ,p n(0 such that 
(i) 
Pi = -M(t, 
jc, u, p)/dxi9 
i = 1, 2, . . . , n; 
(2.5.7) 
(ii) 
u* minimizes H(t, x*, u, p) 
for all u G U; 
(2.5.8) 
η 
(iii) 
HdT+ 
dg- 
£ 
p,(T)dxt{T) 
= 0 
(2.5.9a) 
ι = 1 
for all άΤ and dxt{T) 
which satisfy 
H ? d T + | ; 
J&Ldxt(T) 
= 0, 
s = l , 2 , . . . , f c ; 
(2.5.9b) 
and 
(iv) if a control variable switches at time t, then 
Pi(t~) = Pi{t+ ) , 
i = 1, 2, . . . , n, 
(2.5.10a) 
H[t— x(t)9 w(f—), p(t-)] 
= H[t+, x(t)9 u{t+ ) , p(t+ ) ] . 
(2.5.10b) 
Here p(t-) 
= lim p(t — e) as e -» 0. 
Corollary 2.5.1. If U = {u \ ar < ur < br}, condition 
(2.5.8) 
implies 
(i) 
u* = a r , 
only if bH(t, x\ u*9 p)/du* > 0; 
(2.5.11a) 
(ii) 
u* = br9 
only if dH(t, **, u\ p)/dut 
< 0; 
(2.5.11b) 
and 
(iii) ar < w*< br for r = 1, 2, . . . , m, only if at (x*,zi*) 
dH(t, x, u, p)/dur 
ξ 0 
(2.5.11c) 
and 
(b
2H(t, x, u, p)/dur 
dus) 
(2.5.11d) 
is a positive semidefinite 
matrix. 
If the matrix ( 2 . 5 . l i d ) is singular, we have what is known as singular 
control. This usually occurs when one or more control variables appear

--- Page 32 ---

28 
linearly in the system dynamics and the objective function. Singular control 
was first studied seriously because of its appearance in rocket problems 
(Lawden, 1963). It now appears frequently in ecological problems (Goh, 
1969/1970; Cliff and Vincent, 1973; Goh et al., 1974 a; Clark, 1 9 7 6 a; 
Wickwire, 1977; Clark et al., 1979). The most useful set of necessary con­
ditions for singular control consists of the generalized Legendre conditions. 
The most general form of these conditions was obtained by Goh (1966 a,b,c, 
1973 b). 
Let u = (v, w) and let w appear linearly in the Hamiltonian function 
H(x, v, w, p). We shall denote partial differentiations by subscripts. The 
symbols [.] w , [.] v etc. denote partial differentiations relative to the set 
(χ, ρ, v, w, v, ν, . . . ); and ( . ) w , (.)„ etc. denote partial differentiations relative 
to the set (x, p, v, w). Total differentiation with respect to time is denoted by 
a dot or D. Matrix transpose will be denoted by superscript T. The following 
theorems are not widely known but their importance will increase because of 
the frequent occurrence of singular control in ecological problems. By defi­
nition, the curve in the state space associated with a set (x*, u*) which 
satisfies Theorem 2.5.1 is called an extremal. 
Theorem 2.5.2. If along an extremal, Hww 
= 0 and Hwv 
= 0, then necessary 
conditions for optimality are 
(i) 
[DHW ]w 
=0 
for all ted,, 
t2) C [0, T] ; 
(2.5.12) 
and 
(ii) if (i) is satisfied, the matrix 
/Ηυυ 
—[DHW]1 
\ 
\-[DHw]O 
-[D*HW]J
 
(
A
5
1
d
) 
must be positive semidefinite 
for all t G 
(ti912). 
Theorem 2.5.2 is called a generalized Legendre condition. This form of the 
condition is convenient for testing whether or not an extremal is optimal. 
But it does not lead to conditions for the derivation of a singular extremal. 
To do so we need another form of the generalized Legendre condition (Goh, 
1966 c, 1973 b). Whenever ν appears it can be eliminated by means of the 
equation, 
DHV =Ηννύ 
+ HvxHp 
-HVPHX 
= 0. 
(2.5.14) 
=> ύ = φ(χ,ρ, ν, w), 
(2.5.15) 
where φ denotes a function of χ, ρ, ν and w. In computing partial derivatives 
with respect to (x, p, v, w), we must first eliminate ν whenever it appears 
before we can compute the partial derivatives.

--- Page 33 ---

29 
Theorem 2.5.3. If along an extremal, Hww 
= 0,HWV 
= 0, then 
necessary 
conditions 
for optimality are 
(i) 
(DHW)W 
=0foralltG(tut2)C 
(0, T); 
(2.5.16) 
and 
(ii) // (i) is satisfied, the matrix 
ίΗυυ 
i - ( D A . ) ? 
\ 
\-{DHw)v 
\ ~(Dmw)w 
+ (DHW)V 
(Hyu)'
1 (DHWYV) 
(t.ö.Ll) 
must be positive semidefinite 
for all t € ( f ι , t2 )• 
Corollary 2.5.3. If the matrix in (2.5.17) 
is positive definite, 
then the matrix 
{-(D>HW)V 
-7d*Hw)w)
 
( 2·
5·
1 8 ) 
is nonsingular 
This is so because Hvw 
= 0. If the matrix in (2.5.18) is nonsingular it 
implies that the equations, 
Hv = 0 
and 
D
2HW 
= 0, 
(2.5.19) 
can be solved for υ and w in terms of χ and p. This then leads to a two-point 
boundary value problem and the derivation of the extremal as in nonsingular 
problems. 
Theorem 2.5.4. If along a singular extremal 
we have 
Hww=0, 
Hwv=0, 
[D
rHw]v=0, 
r = l , 2 , . . . , f e - l , 
(2.5.20) 
[D°Hw)w=0, 
e = l , 2 , . . . , 2 f e - 2 , 
(2.5.21) 
then necessary conditions 
for optimality are 
(i) 
[D
2k~
 
1 Hw]w 
=0 
forallte(tut2)c(0,T)i 
(2.5.22) 
and 
(ii) if (i) is satisfied, the matrix 
(Ηυυ 
(
-
D
H
^
i
U
J 
\ 
i
2 
5
2
3
) 
must be positive semidefinite 
for all t G (tu 
t2). 
There is a similar theorem to Theorem 2.5.4 if we employ partial deriva­
tives with respect to (x, p, v, w) (see Goh, 1 9 7 3 b). It can be written down 
by comparing Theorem 2.5.2 with Theorem 2.5.3.

--- Page 34 ---

30 
Example 2.5.1. The exploitation of a renewable resource is in many ways 
similar to the manner in which a man spends a large sum of money which 
he has won in a lottery. Suppose he puts all his money into a bank. Let his 
bank balance at time t be x(t), the interest rate be r and his withdrawal rate 
be u(t). For simplicity we assume that the interest rate is constant at 10% 
per annum, i.e. r = 0.1. We assume that he does not receive any income from 
other sources. The dynamics of his bank balance are described by the 
differential equation χ = rx — u. At time t = 0, let x(0) = 200 000. If he is 
30 years old at time t =0, it is reasonable for him to choose a planning period 
of 60 years. This gives Τ = 60. He has to decide from other considerations 
what he likes to have at the end of the planning period. This will specify the 
terminal constraints and the terminal part in the objective. He might want to 
leave a large sum of money to his children. We assume that he wants to leave 
at least 3 000 dollars for his funeral expenses. Another side decision he has to 
make is some constraint on his withdrawal rate. Suppose he decides that his 
withdrawal rate per annum should satisfy the constraint 15 000 < u(t) 
< 40 000. Finally let us suppose that he wants to maximize the total yield 
which he can get from his money during the 60-year period. 
In brief the problem is as follows: 
System: 
x = 0.1x — u. 
(2.5.24) 
Initially: 
x(0) = 200 000. 
(2.5.25) 
Terminally: 
x(60) > 3000. 
(2.5.26) 
Constraint: 
15 000 < u(t) < 40 000. 
(2.5.27) 
60 
Objective: 
m a x / 
u at. 
(2.5.28) 
ο 
We have described in some detail the many considerations that affect the 
formulation of a realistic and simple optimal control problem. Clearly sub­
jective factors enter at several points in setting up the problem. Moreover 
multiple objectives considerations affect the formulation of the problem. 
The terminal constraint (2.5.26) is an inequality constraint. It is therefore 
not in a standard form. We convert it to standard form by considering 
separately two cases. Firstly we let x ( 6 0 ) > 3000; but otherwise, x ( 6 0 ) is 
unconstrained. In the second case we let x ( 6 0 ) = 3000. We can use Theorem 
2.5.1 directly if we minimize the objective function, 
60 
J(u) =f [-~u]dt. 
(2.5.29) 
ο 
We shall now discuss in some detail the solution of this simple problem in 
order to demonstrate how an optimal control problem may be solved. By 
definition the Hamiltonian function

--- Page 35 ---

31 
H = —u + p(rx — u). 
(2.5.30) 
The costate equation is 
ρ = -bH/bx 
= - r p , 
(2.5.31) 
=* p(t) = p(60) exp[r(60 - f)l · 
(2.5.32) 
The transversality condition is 
HdT -p(T) 
dx(T) = 0. 
(2.5.33) 
The terminal condition Τ — 60 = 0 implies that dT = 0. The condition, x(60) 
> 3000 (otherwise, x ( 6 0 ) is unconstrained), implies that dx(60) is arbitrary. 
In this case condition (2.5.33) implies that p(60) = 0. Condition (2.5.32) 
implies that p(t) = 0. If x(60) = 3000, we get djc(60) = 0. In this case (2.5.33) 
implies that ρ ( 6 0 ) is a constant of integration. 
We have 
bH/bu = - 1 -p(t). 
(2.5.34) 
The optimality condition (2.5.8) implies 
u* = 15 000 
only if bH/bu > 0 
(2.5.35a) 
and 
u* = 40 000 
only if bH/bu < 0. 
(2.5.35b) 
In this problem bH/bu does not vanish identically on a finite time interval 
and therefore there is no singular control. 
If p(t) — 0, bH/bu does not have any change in sign. In this case u* = 40 000 
for all t G (0, 6 0 ) . Condition (2.5.32) implies that p(t) > 0 if p(60) > 0. In 
this case u* = 40 000 for all t G (0, 60). If p(60) < 0, p(t) is negative for all 
i. This implies that bH/bu = —1 —p(t) may have one change in sign during time 
interval (0, 60). 
In the solution of an optimal control problem in ecology, it is desirable to 
develop an optimal feedback policy. This is obtained by solving the problem 
for all possible initial states. This is sometimes called the synthesis problem. 
The optimal feedback policy in our example is obtained by integrating 
numerically eq. (2.5.24) and (2.5.31) in reverse time and employing the 
optimality and transversality conditions. Firstly we integrate these equations 
in reverse time with p(60) = 0 and varying values of x ( 6 0 ) which are greater 
than 3000. Secondly we integrate these equations in reverse time with 
χ(60) 
= 3000 and varying values of p(60). This process generates a field of solutions 
which is displayed in Fig. 2.5.1. 
If we choose x ( 6 0 ) = 3000 and p ( 6 0 ) = —0.01216, we generate the optimal 
trajectory which passes through the point x(0) = 200 000. In this solution 
u* = 15 000 for 0 < t < 15.9, and u* = 40 000 for 15.9 < t < 60. The total 
yield from this strategy is 2 005 460. If we employ the steady state policy

--- Page 36 ---

32 
Ο 
3 0 
Fig. 2 . 5 . 1 . Optimal feedback spending policy for a lottery winner. 
denotes a u = 4 0 0 0 0 
trajectory, and -> denotes a u = 1 5 0 0 0 trajectory. 
u = 20 000 the total yield is 1 400 000. This completes our analysis of the 
example. 
In an optimal control problem it is possible for a control program to be 
optimal in the short term and non-optimal in the long term. Example 2.5.1 
illustrates this point. In this example u(t) = 40 000 is optimal in the short 
term, but if x(0) = 200 000, the control u(t) = 40 0 0 0 cannot be sustained. 
For long-term optimality there must be a switch in the control variable. 
Generally, in an optimal control problem with bounds on the control variables, 
long-term optimality is achieved by choosing an appropriate switching sequence 
in the control variables. 
If the optimal control variables belong to the interior of the admissible 
control set, conditions (2.5.10c) and (2.5.11) are tests for short-term opti­
mality. For establishing long-term optimality we have to examine the second 
variation and show that it is nonnegative (Bliss, 1946; Goh, 1966 a,c). This 
test is called the focal point condition. It determines when a sequence of 
short-term optimal policies fails to be a long-term optimal policy. The classic 
example of this type of dynamical behavior is given by the great circles on 
a sphere. An arc of a great circle is the shortest path between two points on 
a sphere provided it is not longer than half a great circle. The focal point 
condition should become an important condition in future studies of resource 
management. However, it has not yet been applied to specific problems in 
resource management. For this reason we shall not discuss it any further. 
The above discussion on long-term optimality is within the framework of 
a standard optimal control problem. But in practice the concept of long-
term optimality involves broader issues. In a standard optimal control

--- Page 37 ---

33 
problem the objective function, the terminal conditions (target), the initial 
state and the set of admissible control variables are specified. But in the for­
mulation of a long-term optimal policy for a practical problem these very 
components must be chosen judiciously so as to produce a genuine long-term 
optimal policy (Vincent et al., 1977). 
A major difficulty encountered is the problem of how to specify the 
terminal conditions. If the planning horizon is infinite some device must be 
used to prevent an integral objective function from becoming infinite. The 
standard practice in economics (Clark, 1 9 7 6 a) is to incorporate a discount 
factor in the integrand. Another approach is to consider the problem 
tentatively on a finite time horizon and then shift the terminal time to 
infinity (Goh, 1 9 6 9 / 1 9 7 0 ) . Recently Vincent et al. (1977) have developed 
a new approach for formulating long-term optimal policies. In their approach 
an average cost function is minimized. 
We shall now describe the theory of long-term optimal control for 
autonomous systems which was developed by Vincent et al. (1977). Suppose 
we have an autonomous system, xt = fi(x,u), 
i = 1, 2, . . . , n. Here χ is the 
state vector and u is the control vector. We minimize the average cost which 
by definition is 
Here Τ is finite and is unconstrained. We impose the boundary condition, 
x(0) = x(T), so that the average cost policy can be used repeatedly during 
an infinite time horizon. In this case, x(0) is not specified as in (2.5.2). Let 
us suppose the control variables must satisfy constraints of the form, ar 
< ur < &r, r = 1, 2, . . . , m. Denote the admissible set of control variables 
by U. 
In brief a long-term optimal control problem is as follows: 
System: 
Xi=fi(x,u), 
ι = 1 , 2 , 
(2.5.36) 
Constraints: 
x,(0) = x f ( T ) , 
(2.5.37) 
ο 
UE.U. 
(2.5.38) 
Objective: 
ο 
(2.5.39) 
By definition the Hamiltonian function is 
η 
H(x, u, p) = L(x, u) + 2 Pi ft (
χ' ")· 
(2.5.40) 
i = 1 
For convenience the necessary conditions for optimality are summarized in 
the next theorem. A proof of this theorem is given in the paper by Vincent 
et al. (1977).

--- Page 38 ---

34 
Theorem 2.5.4. A necessary condition 
for an admissible set (** w*, T*) to be 
optimal is that there exists pu p 2 , .. · , Pn
 
su°h 
that 
(i) 
Pi = -bH(x9 
u, p)/dxi9 
i = 1, 2, . . . , n; 
(2.5.41) 
(ii) 
u* minimizes H(x*> u, p) w.r.t. u G U; 
(2.5.42) 
and 
(iii) 
Pi(0) 
= Pi(T), 
(2.5.43) 
H[ac(T),M(T),p(T)] - ψ J* L(x9 u)dt = 0. 
(2.5.44) 
ο 
The numerical solution of the optimal control problem displayed in 
(2.5.36) to (2.5.39) is much harder than that for the standard optimal 
control problem which is displayed in (2.5.1) to (2.5.5). This is because the 
problem has mixed end conditions, namely, (2.5.37) and (2.5.43). For this 
reason we shall seek a special type of solution which satisfies the dynamical 
equation, the prescribed constraints and the necessary conditions for opti­
mality. The special solution which we shall determine is a steady state 
solution of (2.5.36) and (2.5.41). It has the added advantage of being easily 
implemented. To keep the state of the system at such an optimal steady 
state, we shall, if possible, employ a globally stable control policy whenever 
the state is displaced from the optimal steady state. We shall adopt the view 
that in the long run the added costs of such transient control programs are 
negligible. For this reason we shall not, in any given problem, attempt to 
evaluate quantitatively the added cost of a globally stable feedback control 
policy which is used to maintain the state at the optimal steady state solution. 
By definition an optimal steady state solution (x*, u*, p * ) satisfies the 
equations, 
fi(x,u) 
= 0, 
i = l , 2, . . . , n , 
(2.5.45) 
bH(x, u9 p)/dXi = 0, 
ι = 1, 2, . . . , n, 
(2.5.46) 
and 
dH(x, u, p)/dur 
= 0, 
r = 1, 2, . . . , m. 
(2.5.47) 
If the control variables, uu u2, ... , um, 
must satisfy the constraints, 
ar < ur < br for r = 1, 2, . . . , m, condition (2.5.47) must be replaced by the 
optimality conditions, 
u* = ar 
only if 3H(x*, u\ p*)/duî 
> 0. 
(2.5.48a) 
u* = br 
only if bH(x*, u\ ρ*)/9ιι? < 0. 
(2.5.48b) 
and 
ar<u*< 
br 
only if dH(x*, u*9 p*)/au? = 0. 
(2.5.48c) 
These conditions apply for r = l , 2 , . . . , m .

--- Page 39 ---

35 
Example 2.5.2. Let Ν be the density of a fish population and u be the rate of 
harvest. A model of an exploited fish population is 
Ν = r N(K - N)IK - u 
(2.5.49) 
where r and Κ are positive parameters. 
Let [0, T] be a finite but unconstrained time interval. We seek to maximize 
the average yield from the fishery during the period [0, T ] . It follows that 
we minimize 
j udt. 
(2.5.50) 
ο 
Let us assume that we can reset the initial state. This is possible because in 
the long run the yield from an initial transient period is insignificant. This 
means thatiV(O) is not specified as in a standard optimal control problem. In 
order that an average yield policy for a finite time period can be applied 
repeatedly in an infinite time period, we impose the periodic boundary con­
dition, 
N(0) = N(T). 
(2.5.51) 
From (2.5.40) the Hamiltonian function is 
H = -u + p[rN(K-N)/K-u]. 
(2.5.52) 
The necessary conditions for optimality are 
ρ = -p[r 
- 2rN/K], 
(2.5.53) 
dH/du=-l-p 
= 0, 
(2.5.54) 
p ( 0 ) = p ( T ) , 
(2.5.55) 
+ p[rN(K-N)/K-u] 
+ ± J u at = 0. 
(2.5.56) 
ο 
A steady state solution for these conditions is 
N*=K/2, 
p * = l , 
u*=rK/4. 
We shall show in Section 4.3 that this is the optimal solution if we derive 
the optimal policy for a finite time horizon and then shift the terminal time 
to infinity. This provides some assurance that Theorem 2.5.4 provides a 
valid method for formulating long-term optimal policies. 
2.6. D I S C R E T E TIME O P T I M A L C O N T R O L 
The use of difference equations for modelling interacting populations and 
ecosystems is becoming popular. One reason for this is the realization that

--- Page 40 ---

36 
difference equations can provide realistic models of interacting populations 
when differential equations fail to do so. For example, a single-species popu­
lation with discrete non-overlapping generations can be realistically described 
by a difference equation but it cannot be adequately described by a single 
differential equation. 
For the optimal control of a dynamic system with a time delay, there is a 
very important reason why we should use discrete time optimal control 
theory rather than continuous time optimal control theory. The optimal 
control of a difference equation model with a time delay is no more difficult 
than that for a model without a time delay. On the other hand the optimal 
control theory for systems described by differential equations with a time 
delay is extremely difficult to apply; therefore it is best to leave it alone for 
the time being. 
The realization that a discrete time optimal control problem is none other 
than a mathematical programming problem with a special structure occurred 
in the early nineteen-sixties. A good account of this approach is given in the 
books by Tabak and Kuo (1971) and Canon et al. (1970). This means that 
numerical algorithms developed for nonlinear programming can be used for 
discrete time optimal control problems. 
Let Ν be a given positive integer, and t = 0,1,2, . . . , Ν — 1. The standard 
discrete time optimal control problem is as follows: 
System: 
xt(t-h 
1) = ft[x(t)9 
u(t)], 
i = 1 , 2 , . . . ,n. 
(2.6.1) 
Initially: 
xi(0) 
= xi0, 
i = l, 2, . . . , n. 
(2.6.2) 
Terminally: 
Φ
8[χ(Ν), 
ν] = 0, 
s = 1, 2, . . . , k. 
(2.6.3) 
Constraints: 
ar<ur(t)<br, 
r = l , 2, . . . , m , 
(2.6.4) 
Ν — 1 
Objective: 
min g[x(N), 
v] + 
£ 
L[x(t), 
u(t)]. 
(2.6.5) 
t = ο 
In most problems {ar, br} is a set of constants. For convenience the set of 
control vectors which satisfy (2.6.4) is denoted by t/. The vector ν denotes 
the control parameters, vu v2, ... , vh . By definition the Hamiltonian function 
at time t is 
H[x(t),u{t),p(t+ 
1)] = L[x(t), 
u(t)] + 2 M* + l)fiW0,«(0], 
(2.6.6) 
i = 1 
where p(t 4- 1) is the costate vector. For convenience we shall use H{t] 
in 
place of H[x(t), 
u(t), p(t + 1 ) ] . The next theorem describes some necessary 
conditions for optimality. 
Theorem 2.6.1. If u(0), w(l), . . . , u(N — 1) is an optimal control 
sequence, 
ν is an optimal vector and x(0), x ( l ) , x ( 2 ) , . . . , x(N) is an optimal 
trajectory,

--- Page 41 ---

37 
bXi(t) 
dxt(t) 
p,(f) = 0, i = l , 2 , . . . , n , 
(2.1.12a) 
Γ - ^
β
Α - 7 ^
-
ρ ' ( ^
+ 
Σ
λ · Γ ^
 
= °·
 
ί
β
1 ·
2 
(2.6.12b) 
dXt(N) 
dx,(N) 
„iTi 
dxt(N) 
then there exist costate vectors p(0), p(l),p(2), 
... ,p(N) and 
multipliers 
λ ι, λ 2 , . · . , X f e such that 
(i) 
pt(t) = dH{t}ldXi(t), 
i = l , 2 , . . . , n ; 
(2.6.7) 
(ii) for r = 1 , 2 , . . . , m 
dff{f}/3u r (t) = 0, 
ifar < ur (t) < br, 
(2.6.8a) 
dH{t]lbur 
(f) > 0, if ur (t) = ar, 
(2.6.8b) 
Μ{t}ßur 
(t) < 0, if ur(t) = br; 
(2.6.8c) 
' μ - π μ + Χ * · » ! ^ ·
 
, -
1 ·
2 · · · · · " · 
<
2-
6-
9a) 
0=^f+ Σλ,|^, y = l , 2 , . . . , f c . 
(2.6.9b) 
οι;.· 
*-*Λ 
oV: 
J 
s = 1 
i 
Proof. If αΓ < ur (t) < br for r = 1, 2, . . . , m the above theorem can be estab­
lished by a simple application of Theorem 2.2.3. We form the augmented 
function 
Ν — 1 
k 
F = g[x(N),v] 
+ 2 [M*(f),«(*)} + Σ Α
(
ί
+ !) ίΜ*(0,"(01 
ί = Ο 
i = 1 
- χ , (ί + 1 ) } ] + 2
 
λ * 
[*(Λ0>
 υ1 · 
(2.6.10) 
s = 1 
Conditions (2.6.6) and (2.6.10) give 
Ν — 1 
Ν — 1 
η 
f = 0 
t = 1 
i = 1 
- 
Σ Pi ( * 0 χ, (Ν) + Σ λ.Ψ* [«(Ν), ν ] . 
(2.6.11) 
1 = 1 
s = 1 
Necessary conditions for optimality are 
dF 
dH{t]

--- Page 42 ---

38 
bF 
_bH{t} 
bur{t) 
3u r(i) 
= 0, r = 1, 2, . . . , m, 
(2.6.12c) 
— 
+ y 
xs 
bVj 
bVj 
s t - ! 
3Uy 
= 0, 
; = l , 2 , . . . , / i . 
(2.6.12d) 
If n r = a r instead of (2.6.12c), we have 
bF 
bH{t} 
= — — > 0. 
bur(t) 
bur(t) 
Similarly if ur = br, we have bH{t}/bur 
(t) < 0. 
The equations in (2.6.2) are called costate equations. The conditions in 
(2.6.8) are called optimality conditions and those in (2.6.9) are called trans-
versality conditions. 
Example 2.6.1. Let S(t) be the post-harvest density of a single-species 
population with discrete and non-overlapping generations. Let h (t + 1) be 
the number of animals or plants which is harvested at time t + 1. Assume 
that the harvesting is carried out during a short time interval and takes place 
before the time for reproduction. A model of this type of population is 
S ( t + 1) = S(t)F[S(t)] 
-h(t+ 
1). 
It is convenient to relabel h(t + 1) and call it u(t). Hence we have 
where t = 0 , 1 , 2, . . . , Ν — 1. 
If (2.6.13) represents an exploited fish population we usually have the 
constraint 
where b is a constant. At time t = 0, let us suppose that it is possible to 
measure the population density before and after the harvesting. The harves­
ting at time t = 0 is also a control variable and has the same status as υ in 
(2.6.5). We could easily adapt Theorem 2.6.1 to take this additional degree 
of freedom into account but for simplicity we shall ignore it. 
The objective in this problem is to maximize the total yield during the 
period [l,iV]. This means we want to maximize 
Ν 
Ν — 1 
S(t + 1) = S(t)F[S{t)] 
~ u(t) 
(2.6.13) 
0 < i/(0 < b 
(2.6.14) 
t = ι 
t = ο 
In order to utilize Theorem 2.6.1 directly, we shall minimize the function

--- Page 43 ---

39 
Ν — 1 
J=- Σ 
u{t). 
t = ο 
We shall impose the terminal condition 
S(N) > A 
(2.6.15) 
where A is a positive number. This means that the population does become 
extinct at time t = N. Condition (2.6.15) is not in the same form as (2.6.3). 
We have to decompose it into two cases, namely: (i) S(N) > A, but other­
wise S(N) is unconstrained; and (ii) S(N) = A. This completes the formulation 
of the problem. 
By definition the Hamiltonian function is 
H{t} 
= -u(t) 
+ p(t + 1) [S(t)F(S(t)) 
- u(t)]. 
(2.6.16) 
The costate equation is 
p(t) =p(t + l)d[S(t)F(S(t))]/dS(t). 
(2.6.17) 
We have 
bH{t}/du(t) 
= - 1 - p(t + 1). 
(2.6.18) 
The transversality condition for the case in which S(N) > A is p(N) = 0. When 
S(N) = A, the transversality condition implies p(N) = c, a constant of integration. 
The conditions, ρ (Ν) = 0 and (2.6.17), imply that p(t) = 0. From (2.6.18), 
dH{t}/bu(t) 
= —1. It follows that in this case, u(t) = b for t = 0 , 1 , 2, . . . 
1. 
In the case p(N) = c, we have to determine the precise switching sequence 
numerically. In a number of numerical examples in which F(S) are biologically 
acceptable functions, we find that the dynamic optimal policy is identical to 
the steady state optimal policy except for the initial and terminal periods. 
If b is sufficiently large the steady state optimal policy will satisfy the 
constraint 0 < u(t) < b. From (2.6.18) it follows that p(t + 1) + 1 = 0 for 
values of t when the system is in equilibrium. Then condition (2.6.17) implies 
1 = d[S(t)F(S(t))] 
IdS(t). 
(2.6.19) 
This is none other than the familiar condition for an optimal steady state 
solution. If the optimal steady state has been determined by means of 
condition (2.6.19), the corresponding optimal control can be obtained from 
(2.6.13). This completes the analysis of the example. 
We have mentioned that a discrete time optimal control with a time delay 
poses no great difficulty if the problem, as a whole, is considered to be a 
nonlinear mathematical programming problem. We shall now demonstrate 
this approach by examining a class of discrete time problems with a time 
delay. 
Let t = 0, 1, 2, . . . , N, and x(t) be the state vector. We want to determine

--- Page 44 ---

40 
an optimal sequence of control vectors u(0), u ( l ) , . . . , u(N — 1), and an 
optimal vector υ. Briefly the problem is as follows: 
System: 
jc f(i 4- 1) = fi[x(t),x(t 
- 1), u(t)], 
ζ = 1 , 2 , . . . , η. 
(2.6.20) 
Initially: 
J C ( - 1 ) = c, 
* ( 0 ) = d. 
(2.6.21) 
Terminally: 
ψ*[χ(Ν),ν] 
= 0 , 
s = 1 , 2 , ...,fe. 
(2.6.22) 
Constraints: 
ar<ur(t)<br, 
r = l , 2 , . . . , m. 
(2.6.23) 
Ν - 
1 
Objective: 
min g[x(N), 
v] + 
£ 
L [ * ( i ) , *(i — 1), w(i)l - 
(2.6.24) 
ί = ο 
By definition the Hamiltonian function 
η 
H{t} 
= L[x(t)9x(t-l),u(t)] 
+ 2 
l)f,[*(0, * ( * - ! ) , "(01· 
i = 1 
(2.6.25) 
Theorem 2.6.2. 
u(0), w(l), . . . , u(N — 1) is an optimal control 
sequence, 
ν is an optimal vector and x(—1), x(0), . . . , tf(iV) is an optimal 
trajectory, 
then there exist costate vectors p(0), p ( l ) , . . . ,p(N) and 
multipliers 
λι, λ 2, . . . , X f c such that 
M{t} 
M{t+ 
1} 
W 
Ρ'<*>
 = Γ - ^ Τ
+ 
* 
/. \ 
, 
i = l , 2 , . . . , n ; 
(2.6.26) 
(ii) for r = 1,2, ... , m 
ar<ur< 
br 
only ifdH{t}/bur 
= 0, 
(2.6.27a) 
wr = ar 
only ifdH{t}/dur 
> 0, 
(2.6.27b) 
ur = b r 
only if dH(t)/dur 
< 0; 
(2.6.27c) 
àg
 
fe 
3i//
s 
W 
Λ
<
Α
0
_ ί ί ( 5 )
 
+ 
.
?
1
»
.
ί
^
· 
' - » . » . · · · . « . 
< * · « · » • > 
0 = — + 
2 
i = l , 2 , . . . , f t . 
(2.6.28b) 
dvj 
s f
x 
bVj 
The proof is similar to that for Theorem 2.6.1. We shall therefore not 
examine it in detail. Clearly similar theorems apply if there are more 
complex time delays.

--- Page 45 ---

41 
Example 2.6.2. In many fish (animal) populations it takes several years for a 
fish to mature and reproduce. Clark (1976 b) has developed a difference 
equation with a time delay for this type of population. 
At time i, let S(t) be the post-harvest fish population. Let E(t + 1) be the 
fraction of the adult population which is impulsively harvested just before 
spawning takes place for that year. Let λ be the fraction of adults that sur­
vive in the period [f, t + 1] in the absence of harvesting. Let F[S(t — 1)] be 
the recruitment to the adult population at time t + 1; and let this be due to 
the spawning population at time t — 1. A model of the harvested population 
is 
S(t + 1) = [1 - E(t + 1)] [XS(t) + F(S(t - 1 ) ) ] . 
(2.6.29) 
For convenience let u(t) =E(t+ 
1) and G[S(£),S(i — 1] = XS(£) + F[S(f — 1)]. 
Our objective is to maximize the total yield during the planning period 
[1,N]. 
It follows that we want to minimize 
Ν — 1 
J=- 
2 
u(t)G[S(t),S(t-l)]. 
(2.6.30) 
t = ο 
We shall impose the constraints 
0 < u(t)< 
b, 
(2.6.31) 
S(N) > A 
(2.6.32) 
where A is a positive constant. We assume that S(—1) and S(0) are known. 
By definition, the Hamiltonian function is 
H{t] 
= -u(t)G[S(th 
S(t - 1)] + p(t + 1)[1 - u(t)]G[S(t), 
S(t - 1 ) ] . 
(2.6.33) 
A necessary condition for optimality is 
Pit) = [-u(t) 
+ p(t + l ) ( l - i i ( f ) ) ] X 
+ [~u(t + 1) + p{t + 2) (1 - u(t + l))]dF[S(0] /dS(f). 
(2.6.34) 
If 0 < uit) < &, a necessary condition for optimality is 
dH{t}lbu(t) 
= [ - 1 - p ( t + 1)] G[S(0, Sit - 1)] = 0. 
(2.5.35) 
Let S*, u*,p* be an optimal steady state solution. Equation (2.6.35) 
implies that p* + 1 = 0. This together with equation (2.6.34) imply that 
1 = λ + d F ( S * ) / d S \ 
(2.6.36) 
This equation may be solved for S*. Eq. (2.6.29) implies that 
u* = 1 - S*/[\S* + FiS*)]. 
(2.6.37) 
This completes our analysis of this example.

--- Page 46 ---

42 
Singular control theory forms an important part of the continuous time 
optimal control theory. Singular control usually occurs when one or more 
control variables appear linearly in the Hamiltonian function. However, a 
discrete time optimal control problem is none other than a mathematical 
programming problem with a special structure. From this point of view, the 
state and control variables in a discrete time optimal control problem have 
the same status. It follows that there is no special significance to be attached 
to the fact that control variables only appear linearly in a problem in which 
the state variables appear nonlinearly. 
We shall now examine a simple example to illustrate the above comments 
on "singular control" in discrete time optimal control problems. Given the 
system 
x(t + 1) = x(t) — u(t), 
t = 0 , 1 , 2, 
x(0) = 5, 
we want to minimize 
3 
J = x
2{3) + x
2(2) 
+ x
2{l)= 
2
 
χ
2 
(Ο-
t = ι 
The Hamiltonian function is 
H{t} 
=x
2(0 + p(f + 
l)[x(t)-u(t)]. 
A necessary condition for optimality is 
dH{t}ßu(t) 
= -p(t 
+ 1) = 0. 
(2.6.38) 
(2.6.39) 
(2.6.40) 
(2.6.41) 
(2.6.42) 
This equation does not contain u(t) explicitly. 
But we can use the system equation to transform the objective function 
so that the control variable appears nonlinearly in the transformed objective 
function. Eq. (2.6.38) and (2.6.40) give 
2 
J= 
Σ [x
2(t)-2x(t)u(t)+ 
u
2(t)]. 
t = 0 
With this new objective function the problem becomes a nonsingular problem. 
In the past there has been some confusion between "singular control" and 
abnormality in discrete time optimal control problem. We shall discuss a 
simple but effective approach to overcome a common type of abnormality 
in discrete time optimal control problem. We shall do so by applying it to 
a simple example. Suppose we want to find u(0), u(l), u(2) which minimize 
the function, 
2 
J[u] 
= 2 
[x
2(t) 
+ u*(t)]

--- Page 47 ---

43 
subject to the constraints, 
x(t + 1) = x(t) — u{t)y 
t = 0 , 1 , 2 
* ( 0 ) = 5, 
x ( 3 ) = 0. 
If dynamic programming is used for solving this problem, we first consider 
the problem in the interval [ 2 , 3 ] . This subproblem is abnormal, the abnor­
mality being due to the fact that there are too many constraints, namely, 
x(3) = 0, x(3) = x(2) — u(2), and x(2) is "given". This means that there is no 
degree of freedom in the subproblem. This abnormality can be removed by 
telescoping the two time units in [1, 3] into a single unit of time, and by 
using (2.6.44) to eliminate condition (2.6.46). These manipulations give the 
following problem: 
ι 
min[2x
2(2) + 2 *
2(0+ "
2 (01 
t = ο 
subject to x(t + 1) = x(t) — u(t), t = 0, 1, 
x(0) = 5. 
In this problem #(2) is unconstrained. It is therefore a normal problem and it 
can be readily solved by using dynamic programming. 
C H A P T E R 2: S E L E C T E D 
R E F E R E N C E S 
Static optimization 
problems 
Bliss ( 1 9 4 6 ) ; Dantzig ( 1 9 6 3 ) ; F i a c c o and McCormick ( 1 9 6 8 ) ; Vincent and Goh ( 1 9 7 2 ) ; 
Kuester and Mize ( 1 9 7 3 ) ; Fletcher ( 1 9 7 5 ) . 
Multiple objectives 
decision 
problems 
Starr and Ho ( 1 9 6 9 ) ; Vincent and Leitmann ( 1 9 7 0 ) ; Leitmann and Marzollo ( 1 9 7 5 ) . 
Continuous 
time optimal 
control 
Bliss ( 1 9 4 6 ) ; Berkovitz ( 1 9 6 1 ) ; Pontryagin et al. ( 1 9 6 2 ) ; Lawden ( 1 9 6 3 ) ; Goh ( 1 9 6 6 a, 
b, c, 1 9 7 3 b ) ; Leitmann ( 1 9 6 6 ) ; Lee and Markus ( 1 9 6 7 ) ; Bryson and Ho ( 1 9 6 9 ) ; 
Intrilligator ( 1 9 7 1 ) ; Vincent and Goh ( 1 9 7 2 ) ; Bell and Jacobson ( 1 9 7 5 ) ; Fleming and 
Rishel ( 1 9 7 5 ) ; Vincent et al. ( 1 9 7 7 ) . 
Discrete time optimal 
control 
Canon et al. ( 1 9 7 0 ) ; Tabak and Kuo ( 1 9 7 1 ) .

--- Page 48 ---

45 
Chapter 3 
STABILITY AND NONVULNERABILITY 
3 . 1 . I N T R O D U C T I O N 
The simplest way to examine stability in an ecosystem model is by examining 
the eigenvalues of a matrix which is computed at an equilibrium of the model. 
But this method can only establish local stability or instability. On the other 
hand, ecosystems in the real world are subjected to large perturbations of the 
initial state, and continual disturbances on the system dynamics. 
For a given model it is possible to use computer simulations to investigate 
the behavior of the model for finite perturbations of initial state. But com­
puter simulations cannot guarantee that an equilibrium does indeed have a 
finite region of attraction. This state of affairs becomes increasingly worse as 
the number of species in a given ecosystem increases. 
A powerful analytical method for establishing that an equilibrium is stable 
relative to finite perturbations of the initial state is the direct method of 
Liapunov (LaSalle and Lefschetz, 1961; Hahn, 1967; Gurel and Lapidus, 
1968; Willems, 1970). There are many methods for constructing Liapunov 
functions (Schultz, 1965; Gurel and Lapidus, 1968, 1969). It has often been 
said that it is very difficult to construct Liapunov functions. This is true. But 
the statement misses the point that it is equally difficult to use other non­
local methods to establish finite stability in a nonlinear model with more 
than two state variables. Computer simulations are excluded in this comment 
because they can provide only tentative conclusions on the finite stability of 
an equilibrium. 
In Sections 3.3 to 3.10, we shall demonstrate the usefulness of the direct 
method of Liapunov by applying it to single species and two species models 
which are described by differential equations. 
Consider the autonomous model 
Ni=NiFt{NuN29...,Nm)9 
i = 
2 , . . . , m 
(3.1.1) 
where F,(iV), F2(N)9 
... , Fm (N) are continuous functions in the positive 
orthant. Suppose it has a positive equilibrium at N* where 
FAN*) = 0, 
i = l , 2 , . . . 
9m. 
(3.1.2)

--- Page 49 ---

46 
Let xt = Ni — Nf for ι = 1, 2, . . . , m. The linearized dynamics is 
m 
Xt= 2 
^ V i » 
i = l , 2 , . . . , m 
(3.1.3) 
; = ι 
where (α / ;) = (bFi/bNj) at ΛΓ*. We can show that Ν* is locally asymptotically 
stable if the real parts of all the eigenvalues of (Ν*αϋ) are negative. A better 
approximation of model (3.1.1) is 
m 
^ = 2 NflvW - # * ) , 
i = 1, 2, . . . , m. 
(3.1.4) 
y = ι 
This approximation is better because it contains the second order terms in 
the Taylor's expansion of (3.1.1). Moreover, model (3.1.4) is valid in a larger 
neighbourhood than that for (3.1.3). Model (3.1.4) is none other than a 
Lotka—Volterra model. We conclude that a study of a Lotka—Volterra model 
in the neighbourhood of an equilibrium can provide more information than 
an eigenvalue analysis. 
Liapunov-like functions can also be used to establish the stability of a limit 
cycle; and to establish that the solutions of a model are ultimately confined. 
We shall examine these applications of Liapunov-like functions in Section 
3.11. This method for studying a limit cycle and a region of ultimate confine­
ment is underdeveloped. 
In Section 3.12, we shall examine how Liapunov-like functions can be used 
to establish that an ecosystem model is nonvulnerable relative to a given class 
of continual disturbances. At present, this method of studying non vulnera­
bility can be readily applied to Lotka—Volterra models, and a class of more 
general nonlinear models which have qualitatively the same behavior as 
Lotka—Volterra models. This approach to study the behavior of a system in 
an uncertain environment is none other than a "worst case" analysis. 
The stability theory of difference equations is less developed than that for 
differential equations. In Sections 3.14 to 3.16, we shall examine how 
Liapunov and Liapunov-like functions can also be used to establish finite 
stability, global stability, and nonvulnerability in difference equation popu­
lation models. 
3 . 2 . L O C A L S T A B I L I T Y 
Let Nu N2, ... Nm 
be the densities of m interacting populations. Consider 
a general model of interacting populations which is described by the set of 
differential equations: 
= Ni Fi(Nj, N29 ... , Nm ) 
(3.2.1) 
where i = 1, 2, . . . , m. The functions, Fu F2, ... , Fm, are in general non­
linear functions of Nu N2, ... , Nm.

--- Page 50 ---

47 
We now state some useful definitions. The set of numbers, (Nu N29... 
, Nm ) 
= N, is called the state vector of the system. The region {Ν | Νχ > 0, N2 > 0, 
. . . , Nm > 0 } is called the feasible region or the positive orthant. A point 
(N*9 N*9 . . . , 
) is an equilibrium if N( = 0 for / = 1, 2, .. . , m. A point 
(Ν*, N29 . . . , JV*, ) is a positive equilibrium if 
Νΐ>09Ν*> 
0, . . . , ΛΓ* > 0 
(3.2.2) 
and 
F,(iVr,iV?,...,iV*) = 0, 
(3.2.3) 
for / = 1, 2, . . . , m. In the absence of migrations we are usually interested 
only in a positive equilibrium. If an equilibrium is not positive we could con­
sider the model ecosystem as a lower dimension model by deleting the mis­
sing species. If necessary we could in this way study a hierarchy of models. 
If Ν is close to N*9 let xt = Nt — Nftor 
i = 1, 2, . . . , m. Substituting these 
into eqs. (3.2.1), and employing Taylor's theorem and ignoring higher order 
terms in xl9 x2, ... , xm, 
we get 
m 
J = l 
where i = 1, 2, . . . , m and 
α "
= Γ ^ (
N*ï> 
i = l , 2 , . . . , m . 
(3.2.5) 
OiVy 
Theorem 3.2.1. The equilibrium 
(JV*, AT*, . . . , iV* ) is locally stable if all the 
real parts of the eigenvalues of the matrix (N* atj) are negative. 
Proof. By definition, the equilibrium N* is locally stable if all the solutions 
of (3.2.1) which begin near N* will move into decreasing neighbourhoods 
of N*. For t > 0, the system (3.2.1) must not be disturbed. 
By definition, Xk is an eigenvalue of (N* au) if there is a vector Xk such 
that 
(Ν?αυ)ΧΗ=λΗΧΗ. 
(3.2.6) 
In general, Xk is a complex number and Xk is a complex vector. Xk is called 
an eigenvector. 
Among ecosystem models it is extremely rare to encounter a model with 
repeated eigenvalues. Let us assume that the eigenvalues of (N* atj) are dis­
tinct. In this case the general solution of (3.2.4) is 
m 
x= 
2 
ctX, βχρ(λ,ί), 
(3-2.7)

--- Page 51 ---

48 
where c l 9 c 2 , . . . , 6
Μ are arbitrary constants, λι, λ 2, . . . , X m are the eigen­
values and Xu Xi9... 
, Xm 
are the corresponding eigenvectors. If the real 
part of λ, is negative, exp(X fi) -> 0 as t
 
0 0 . It follows that if each eigenvalue 
has a negative real part, χ tends to the zero vector as t -»
 0 0 . 
Example 3.2.1. Consider the prey—predator model: 
Nx = Λ Γ 1 [ 3 1 - 1 . 1 Λ Γ 1 - 4 Ν 2 ] , 
N2 = N2[-3 
+ 0.4NX + 
0.2N2]. 
A solution of the system of equations, 
3 1 - 1 . 1 Λ Γ 1 - 4 Ν 2 = 0, 
- 3 + 0.4NX + 0.2iV 2 = 0, 
is (10, 5). We have ax λ = - 1 . 1 , α 1 2 = —4, α 2 1 = 0.4, α 2 2 = 0.2, Ν* = 10 and 
Ν2 = 5. It follows that 
/ Λ Γ * 
, 
/ - I l 
- 4 0 \ 
W
e « )
s ( 
2 
i ) ' 
The eigenvalue equation of this matrix is 
λ
2 + 10λ + 69 = 0. 
It follows that the eigenvalues are —5 ± iy/44. Hence the equilibrium (10, 5) 
is locally stable. 
In ecosystem models with a few species, a useful analytical test for the 
real parts of all the eigenvalues of a matrix to be negative is the Routh— 
Hurwitz stability criterion. Let A be an m X m matrix. Its eigenvalue equation 
is obtained by expanding the equation, 
d e t ( A - X / ) = 0, 
(3.2.8) 
where det denotes the determinant of a matrix and / is an identity matrix. 
From this operation we get an mth order polynomial equation, 
X
m + P ! X
m _ 1 + p
2 X
m
-
2 + ··· + P m - i X + P m = 0 . 
(3.2.9) 
The Routh—Hurwitz stability criterion for m - 2, 3, 4 is as follows: 
m = 2, 
P i > 0 , p
2 > 0 ; 
(3.2.10) 
m = 3, 
P ! > 0 , p
3 > 0 , p 1 p 2 > p 3 ; 
(3.2.11) 
m = 4, 
P
l > 0, p 2 > 0, p 3 > 0, p 4 > 0, (PJ)2 - p
3 ) p 3 > p
2 p 4 . 
(3.2.12) 
These sets of conditions are necessary and sufficient for local asymptotic 
stability.

--- Page 52 ---

49 
Example 3.2.2. This example demonstrates the usefulness of the Routh— 
Hurwitz stability conditions. A model of three-species competition is as 
follows: 
Ni = iV\[10 — 5iVj - 3N2 - 2N3 ], 
N2 = N2[9 -AN,- 
4N2-N3], 
N3=N3[2-a-Ni-2N2 
+ a N 3 ] . 
It has a positive equilibrium at ( 1 , 1 , 1 ) . 
The positive equilibrium is locally stable if the real parts of all the eigen­
values of the matrix, 
Γ - 5 
- 3 
- 2 1 
are negative. Its eigenvalue equation is 
λ
3 4- (9 - α)λ
2 + (4 - 9α)λ + (1 - 8α) = 0. 
For stability, we require 
9 - α > 0 , 
1 - 8 α > 0 
and 
( 9 - α ) (4 - 9α) > 1 - 8α. 
The last inequality is satisfied if a < 0.482 or a > 8.07. Clearly for stability, 
we require α < 1/8. 
An interesting conclusion from this example is that in a three-species 
Lotka—Volterra competition model it is not necessary for each species to 
sustain density dependent mortalities due to intraspecific interactions. 
The Routh—Hurwitz stability criterion is most useful for problems in 
which there is an unknown parameter and in which we are interested in the 
range of values of the parameter for which the equilibrium is stable. 
For models with more than four species, it is very difficult to use the 
Routh—Hurwitz stability criterion. If a matrix is given numerically, it is quite 
simple to compute its eigenvalues on a computer. An alternative method to 
establish that a matrix A is stable is to solve for the unknown symmetric 
matrix Ρ which satisfies the equation, 
A necessary and sufficient condition for A to be stable is that Ρ is positive 
definite (Willems, 1970). 
3.3. F I N I T E AND G L O B A L S T A B I L I T Y 
- 4 
- 4 
- 1 
- 2 
- 1 
a j 
PA + A
TP = -/. 
(3.2.13) 
In this section we shall examine methods which can establish stability 
relative to realistic perturbations of the initial state. We assume that for 
t > 0, the system is not disturbed.

--- Page 53 ---

50 
Consider a model of m interacting populations which is described by the 
equations, 
Ni=NiFt(Nl9N29...9Nm)9 
(3.3.1) 
where i = 1, 2, . . . , m. Assume that it has a positive equilibrium at N*. This 
means that 
Νΐ > 0, Νί > 0, . . . , Κ, 
> 0 
(3.3.2) 
and 
Fi(NÎ,NÎ9...9NZ) 
= 0 
(3.3.3) 
for i = 1, 2, . . . , m. 
Let Ω be an open region which is completely inside the positive region. Let 
N* belong to Ω. The region Ω is a finite region of stability if Ω is a finite 
region and all the solutions of (3.3.1) which begin in Ω remain in Ω and tend 
to N* as t -> °°. Note that the solutions must not leave the region Ω . Other­
wise, some of the species may become extinct for a temporary period. This 
concept of stability means that if a disturbance resets the initial state and the 
system is thereafter left alone, the natural dynamics will drive the state into 
decreasing neighbourhoods of N*. It does not directly provide any information 
on the system's ability to resist continual disturbances which are normally 
experienced by real ecosystems. Such a limitation in this concept of stability 
is often overlooked. 
If the region Ω is equal to the positive orthant {Ν | Nt > 0, / = 1, 2, . . . , m}, 
the system is globally stable. This concept of global stability is only trivially 
different from that for physical systems. In the latter, Ω is equal to the whole 
of the corresponding state space. The two types of global stability are identical 
because we could map the feasible region into the whole of the state space by 
means of the transformation: 
Xt = ln^./iV*), 
(3.3.4) 
where i = 1, 2 , . . . , m. However, this change of variables is unnecessary. 
Moreover, it leads to a loss of insight into the system. 
If a disturbance causes one or more species to become extinct, the simplest 
way to use the concept of finite and global stability is to consider the dis­
turbed ecosystem as a new system of lower dimension. Such catastrophic 
perturbations of the initial states are excluded unless otherwise stated. 
The best method for establishing stability in a finite region or global 
stability is the direct method of Liapunov (LaSalle and Lefschetz, 1 9 6 1 ; 
Willems, 1970). In a physical system a Liapunov function is a generalization 
of the free energy of the system. If energy is continuously dissipated, the 
state of the system will evolve and move towards the state where the energy 
of the system attains local or global minimum. The corresponding state is 
none other than an equilibrium of the system.

--- Page 54 ---

51 
For ecological systems it is also helpful to employ an energy principle to 
provide guidelines for the construction of an effective Liapunov function. 
For ecological systems we require a two-sided energy principle (Goh, 1977 a). 
The standing biomass in a population is a measure of the free energy embodied 
in the population. In a viable population, its density must increase at very 
low densities; and it must decrease at very high densities. It follows that the 
population must absorb energy from an external source at low densities and 
it must dissipate energy at very high densities. This two-sided energy principle 
for a viable population provides a sharp contrast between ecological and 
physical systems. However, it is plausible that this two-sided energy principle 
may also be a very useful concept for a physical control system which has to 
be maintained at an artificial energy level for the proper functioning of the 
system. 
In the region Ω , the function V(N) is a suitable Liapunov function for 
model (3.3.1) if it has the following properties: 
(i) 
V(N*) = 0; 
(ii) 
In Ω, V(N) has a global minimum equal to zero at N* ; 
(iii) 
In Ω, the level surface, V(N) = Κ for each positive value of K, is a 
closed surface; 
(iv) 
The derivative, 
i = 1 
is nonpositive for all N G Ω. 
Condition (iii) forces us to define Ω in terms of a level surface of V(N). If 
L is a positive constant, we choose Ω = {Ν | V(N) < 
L}. 
Theorem 3.3.1. Let N* be a positive equilibrium 
of model (3.3.1). 
The region, 
Ω = {Ν I V(N) < L } , is a region of stability if the function 
V(N) is a Liapunov 
function in Ω and V is negative 
definite. 
The proof of this theorem follows in a straightforward manner from the 
proof of Theorem 1.4.1. Essentially the conditions for a Liapunov function 
ensure that along the solutions of model (3.3.1), V[N(t)] 
tends monotonically 
to zero. The corresponding state vector N(t) tends to N*. V[N] could be 
interpreted as a measure of the distance of the state Ν from N*. 
An effective method for estimating a finite region of stability is to employ 
an optimization algorithm. Choose tentatively a positive constant K. Maximize 
V(N) subject to V(N) = K. If the computed maximum value of V(N) is 
negative, the value of Κ is increased. This process is carried out until the 
computed maximum value of V(N) is positive. From this process we can deter­
mine a positive constant L such that V(N) is negative in the region, Ω = {iV| 
V(N) < L,N¥= 
N*}. This is then a finite region of stability. A robust optimi-

--- Page 55 ---

52 
zation algorithm which can be used in this method of computing a finite 
region of stability is Fletcher's algorithm (Fletcher, 1975). 
Example 3.3.1. We shall examine a model of a harvested single-species 
population. Let ft be a constant rate of harvest. Consider the model, 
N=2N(4-N)-h. 
(3.3.6) 
The natural dynamics has a globally stable equilibrium at Ν = 4. A non-
trivial equilibrium in the harvested population is a solution of the quadratic 
equation, 
2N
2 — 8N + ft = 0. 
This implies two nontrivial equilibria at SY and S2 where 
Si = [4 - V(16 - 2ft)] /2, 
S2 = [4 + V(16 - 2ft)] /2. 
These equilibria are positive if ft < 8. 
From (3.3.6) we get 
N = 
-2(N-Sl)(N-S2). 
Graphically in the (£, AT)-space, we can show that the lower level equilibrium 
at Sx is unstable and the region of stability of the higher level equilibrium is 
{N\N>SX}. 
A Liapunov function for estimating the region of stability for the equi­
librium S2 is 
V(N) = \N-S2\. 
(3.3.7) 
We have V = NiîN> 
S2 and V=-NiîN< 
S2. It follows that V< 0 for 
N> 
Si and ΛΓ Φ S2. The value of V(N) at ΛΓ = Si is \SX — S2\. Hence an esti­
mate of the region of stability of the equilibrium S2 is {Ν \ V(N) < 
\S1—S2\}. 
With additional arguments which are valid for only single-species models, 
we cannot conclude from this Liapunov function that the region of stability 
is 
{N\N>Si}. 
An interesting conclusion from this example is that a constant quota 
harvesting policy for a single-species population cannot be globally stable. 
We can show that this conclusion is not dependent on the assumption that 
the natural dynamics is described by a logistic equation. 
Note that a Liapunov need not be continuously differentiable everywhere 
in a region Ω . 
Example 3.3.2. Let Ν χ and N2 be the densities of a prey and its predator 
respectively. Let the prey population be harvested at the constant rate of 
1.25 units per unit time. We have 
Nx = Ν ι (10 - 2 . 2 ^ - 2N2) - 1.25,

--- Page 56 ---

53 
N2-N2(-0.3+ 
0.2NX-0.1N2). 
This model has an equilibrium at (2.5, 2). It may be rewritten in the form, 
Νχ = N 1 [ - 2 . 2 ( N 1 - 2 . 5 ) - 2 ( i V 2 - 2 ) - 1 . 2 5 / i V 1 + 1 . 2 5 / 2 . 5 ] , 
N2 = N2[0.2(NX 
- 2.5) - 0.1(ΛΓ2 - 2 ) ] . 
(3.3.8) 
A suitable Liapunov function is 
V(N) = NX- 
2.5 - 2.5 ln(iV 1/2.5) + 10[JV 2 - 2 - 2 1η(ΛΓ 2/2)]. 
Along solutions of (3.3.8) we have 
V = [(1.25 - 5.5NX)/(2.5NX)] 
(Nx ~ 2 . 5 )
2 - (N2 - 2 )
2 . 
If Nx < 5/22 and N2 = 2, V is positive. It follows that an estimate of the region 
of stability is {Ν \ V(N) < 2.5 ln(22/5) - 2.5 + 5/22 } . The boundary of this 
region passes through the point (5/22, 2). 
Let Γ denote the positive region {N j Nx > 0, N2 > 0, . . . , Nm 
> 0 } . 
Assume that the model, 
Νι=Ν&(Νϊ9Ν29...9Νη)9 
(3.3.9) 
where 1 = 1, 2, . . . , m, has a positive equilibrium at N*. A function V(N) is a 
Liapunov function in Γ if it has the following properties: 
(i) V(N*) = 0; 
(ii) in Γ, the level surface, V(N) = Κ for each positive value of K9 is a closed 
hypersurface; and for every i = 1, 2, . . . , m, V(N) 
<» as ΛΓ, -> 0+ or as 
Nt -> «ο ; and 
(iii) along a solution of (3.3.9) which begins inside Γ , 
. 
^ 
bV 
V= 
y 
NiFAN) 
(3.3.10) 
is nonpositive for all N G Γ. 
Theorem 3.3.2. Model (3.3.9) 
is globally stable if, in Γ, there exists a Liapunov 
function and V(N) is negative 
definite. 
The proof of this theorem follows directly from that in which the admis­
sible region is the whole of the state space. This is because the transformation, 
X( = \n(Ni/N*)9 
can be used to map the positive region into the complete 
state space. 
We shall outline some applications of this theorem to some general classes 
of models. More detailed discussions of applications to specific classes of 
models will be given in subsequent sections. 
Consider the general single species model, 
ΛΓ = NF(N). 
(3.3.11)

--- Page 57 ---

54 
Assume that it has a positive equilibrium at N*. A suitable Liapunov function 
is 
V(N) = N-N*-N* 
ln(N/N*). 
(3.3.12) 
Along solutions ofN = NF(N), 
we have 
V=(N-N)F(N). 
(3.3.13) 
It follows that V < 0 for Ν > 0 and Ν Φ ΛΓ* if (i) for Ν* > Ν > 0, F(N) > 0 
and (ii) for Ν > JV*, F(N) < 0. 
For easy future reference we state this as a theorem. 
Theorem 3.3.3. The single species model, Ν = NF(N), 
is globally stable if 
(i) it has a positive equilibrium at Ν *, (ii) for Ν* > Ν > 0, F(N) > 0 and (iii) 
forN>N\ 
F(N)< 
0. 
This is a very robust theorem and applies to almost all proposed models of 
an unexploited single-species population. 
When N/N* is large the dominant term in the function, V(N) = Ν — Ν* 
— Ν* ln(iV/iV*), is Ν. Hence for large values of Ny V(N) is a measure of the 
energy embodied in the standing biomass of the population. If V < 0, it 
implies that the population is dissipating energy. When N/N* is small the 
dominant term in V(N) is N* ln(N/N*). 
This is again a measure of the energy 
embodied in the standing biomass of the population. The negative sign in front 
of this term in V(N) means that the population is absorbing energy if V < 0 
at low densities. 
Let s and ρ be positive parameters. The following functions are good 
candidates to act as Liapunov functions for global stability in a single-species 
model : 
(a) 
V(N) = (N
s -N*
s)/s-N*
s 
ln(N/N*). 
(3.3.14) 
(b) 
V(N) =
 V 
·' + — — 
. 
(3.3.15) 
P 
sN
s 
s 
(c) 
V(N) = ]n(N/N*) + ^ 
- - . 
(3.3.16) 
sN
s 
s 
Any function V(N) which has the following properties would be a good 
candidate to act as a Liapunov function: (i) It has a global minimum at N* 
foralliV> 0, (ii) dV/3N< 
0 for AT* > N> 
0 and bV/dN> 
0 for Ν > Ν* and 
(iii) V(N) ->
 0 0 as iV 
0+ or Ν ^
 
0 0 . 
These Liapunov functions for single species are also useful for multispecies 
population models. A natural way to construct a Liapunov function for m 
interacting species is to take a positive linear combination of functions which 
are good candidates to act as Liapunov functions in single-species models.

--- Page 58 ---

55 
Intuitively we can expect this method to succeed if all the interspecific inter­
actions in a complex food web are weak. In this case we can expect the com­
plex food web to behave approximately like a collection of single-species 
populations. Since we have very good Liapunov functions for single-species 
models, we can expect that this approach in the construction of a Liapunov 
function for a multispecies model will be a fruitful approach. In subsequent 
sections we find that this is indeed the case. 
Consider briefly an application of these ideas to the model, 
Nt = NtFi (Nu N29 ... , Nm ), 
(3.3.17) 
where i = 1, 2, . . . , m. Assume that it has a positive equilibrium at N* = (Nu 
N2, ... , N£ ). Let C i , c 2 , . . . , cm 
be positive constants. A good candidate to 
act as a Liapunov function is 
m 
V(N)= 
2 
Ci[Ni-N?-N?ln(Ni/N?)]. 
(3.3.18) 
i = 1 
Along solutions of (3.3.17), we have 
m 
V = 2 
Ci(Ni-Nr)Fi(N). 
(3.3.19) 
i = ι 
Let Γ be the positive orthant {Ν \ Ni > 0, / = 1, 2, .. .„ m } . 
Theorem 3.3.4. Model (3.3.17) 
is globally stable in the positive orthant if it 
has a positive equilibrium 
at N* and there exists a set of positive 
constants, 
cl9 c 2 , . .. , cm , such that 
m 
2 
ct(Nt-Nr)F,(N)<0 
(3.3.20) 
ι = 1 
for all Ν GT and Ν Φ Ν*. 
This theorem follows directly from Theorem 3.3.2 if the function V(N) 
(3.3.18) is a suitable Liapunov function. We shall see in a later chapter that 
this theorem is most effective when each species sustains density-dependent 
mortalities due to intraspecific interactions, and all the interspecific inter­
actions are relatively weak. 
In simple prey—predator models we can have global stability when the 
predator or prey does not sustain density-dependent mortalities due to intra­
specific interactions. To establish such results analytically we need an extension 
of the direct method of Liapunov. 
In the generalization of the direct method of Liapunov, V(N) is allowed to 
vanish at points beside the positive equilibrium. But it is necessary to impose

--- Page 59 ---

56 
an additional requirement. Apart from the positive equilibrium, the solutions 
of the model must not remain indefinitely in the set of points where 
V(N) = 0. 
For a more formal description of this generalization of the direct method 
of Liapunov, we require the concept of an invariant set (La Salle and Lefschetz, 
1961). A set of points denoted by θ is an invariant set if any solution which 
begins in θ remains in it. 
To illustrate this concept, consider the model, 
i V 1 = i V 1 ( 2 - i V 1 - i V 2 ) , 
N2 = N2 ( - 0 . 5 + O.Wi ). 
(3.3.21) 
The invariant sets in this model are {(1,1)}, { ( 2 , 0 ) } , { ( 0 , 0 ) } , {Ν \ Nt = 0 } 
and {Ν I N2 = 0 } . Clearly the only invariant set in the positive region is 
{ ( 1 , 1 ) } . 
Consider the model, 
Nt = ΝΛ Fi (Nu N29...9Nm 
), 
(3.3.22) 
where i = 1, 2, . . . , m. Assume it has a positive equilibrium at N* = (JVt, 
Ν*, 
Nn ). Denote the positive orthant {Ν \ Nt > 0 for ί = 1, 2, . . . , m} 
by Γ . Suppose there exists a function V(N) which has the following properties: 
(i) V(N) > 0 for all N e Γ and Ν Φ Ν*, (i) In Γ, V(N) has a global minimum 
equal to zero at 
(iii) For every i = 1, 2 , . . . , m, V(N) 
<» as Nt -+ Ο-l· or 
iV, -> °°. Under these assumptions the next theorem describes the crucial 
conditions which are sufficient for global stability. 
Theorem 3.3.5. Model (3.3.22) 
is globally stable if 
V(N)= 
f 
^jNtFtiNXO 
(3.3.23) 
i - ι
 
d N i 
for all N G Γ and {Ν* } is the only invariant set in the positive 
orthant. 
We shall not prove this theorem (LaSalle and Lefschetz, 1961). Instead 
we shall apply it to an example to illustrate how it can be used. 
Example 3.3.3. Model (3.3.21) has a positive equilibrium at (1,1). The only 
invariant set in the positive region is { ( 1 , 1 ) } . A suitable Liapunov function is 
V(N) = N
i - l - IniN,) + c[N2 - 1 - ln(N 2)], 
where c is positive constant. Along solutions of the model, we have 
V = -(Ν, 
- l )
2 - (Nx - 1) (N2 - 1) + 0.5c(N 2 - 1) (Nx - 1). 
Choose c = 2. We get

--- Page 60 ---

57 
ν = - ( ^ - 1 )
2 . 
It follows that V< 0 for all Nx > 0, iV2 > 0. By inspection, V = 0 if Nx = 1. 
As { ( 1 , 1 ) } is the only invariant point in the positive region, the model is 
globally stable. 
Likewise, we can relax the condition, V(N) < 0 for all N G Ω and Ν Φ Ν*, 
in Theorem 3.3.1. Consider the model, 
for i = 1, 2 , . . . , m. Assume that it has a positive equilibrium at N*. Let Ω be 
an open subregion of the positive region. Suppose we have a function V(N) 
which has the following properties: (i) V(N) > 0 for all N G Ω and Ν Φ Ν* ; 
(ii) in Ω, V(N) has a global minimum equal to zero at N*; (iii) in Ω , the level 
surface, V(N) = Κ for each value of K, is a closed surface. By necessity we 
choose Ω = {Ν | V(N) < L } where L is a positive number. Based on these 
assumptions the next theorem describes the crucial conditions which are 
sufficient for stability in Ω . 
Theorem 3.3.6. Model (3.3.24) 
is stable in Ω if (ΛΓ*) is the only invariant set 
in Ω and 
for all Ν en. 
3.4. SINGLE-SPECIES M O D E L S 
A common criticism of the logistic model of a single-species population is 
that it assumes that the per capita birth rate of the population is a linear 
function of the density of the population. This criticism is not as serious as 
some ecologists believe it to be. The crucial assumption in the logistic model 
is that a single species population can be described by a single nonlinear 
differential equation. We shall show that the logistic model of a single 
species has the same qualitative dynamical behavior as all proposed models of 
a single species, and much more. 
From Theorem 3.3.3 we deduce that an effective way to understand the 
stability behavior of a nonlinear model, Ν = NF(N), 
is to graph the function 
F(N) against N. If F(N) has only one change in sign from the positive to the 
negative as Ν increases from zero, the model is globally stable. 
The standard logistic model is given by the equation, 
(3.3.24) 
Nt Fi (Ν) < 0 
(3.3.25) 
Ν = (r/K)N(K — Ν). 
(3.4.1) 
In this case the function F(N) is a linear function of Ν with a negative slope, 
F(0) = r and F(K) = 0. For Κ > Ν > 0, F(N) > 0 and for Ν > 
F (Ν) < 0. 
By Theorem 3.3.3 it is globally stable.

--- Page 61 ---

58 
Gilpin and Ayala's (1973) model of a single-species population is described 
by the equation, 
where r, Κ and 0 are positive constants. This model has an equilibrium at 
Ν = K. The function, F(N) = r [ l — (Ν/Κ)
θ 
] , is monotonie decreasing as Ν 
increases from zero. It is positive for Κ > Ν > 0 and it is negative for N> 
K. 
By Theorem 3.3.3 it is globally stable. 
Gompertz's model is used extensively as a model of cancerous growth 
(Swann and Vincent, 1977). It is described by the equation, 
where a and Κ are constants. The function, F(N) = —a\n(N/K), is monotonie 
decreasing. One unsatisfactory feature of this model is that F(N) 
» as 
Ν 
0 + . The model has a positive equilibrium at Ν = Κ. F(N) is monotonie 
decreasing as Ν increases. For Κ > Ν > 0, F(N) > 0 and for N> K, F(N) 
< 0. By Theorem 3.3.3 it is globally stable. 
Schoener's (1973) model of a single species population with a constant 
energy input is 
where r, /, C and b are positive constants. F(N) = r[(I/N) 
— C — bN] is 
strictly monotonie decreasing as Ν increases. It has a positive equilibrium at 
N* = [ - C + V(C
2 + 4 6 / ) ] / ( 2 6 ) . For ΛΓ* > JV> 0,F(N)> 
0 and foriV> iV*, 
F(iV) < 0. It follows that it is globally stable. 
The function F(N) in models (3.4.1) to (3.4.4) decreases monotonically 
as Ν increases. It follows that these models do not describe a single species 
with an Allee effect (see Odum, 1971). The Allee effect occurs in a population 
in which there are difficulties in breeding at low densities. In some popu­
lations (schooling fish) the survival of the members is enhanced up to a 
certain density by aggregation. Beyond the optimum population density, the 
mortality rate increases as the density increases because of competition for 
food space and increased stress. Volterra (1938) put forward a model to describe 
this type of situation. It is 
N = N[-d+ 
bN-aN
2], 
(3.4.5) 
where a, b and d are positive constants. The function, F(N) = —d + bN — aN
2, 
has a single hump for Ν > 0. It has positive equilibria at Ni = [b — V (b
2 
-4ad)] 
/(2a) and N2 = [b + V(b
2 
- 4ad)] /(2a) if b
2 > 4ad. The lower level 
equilibrium Nx is unstable. The higher level equilibrium N2 is stable. Its 
region of attraction is {Ν \ Ν > Nt}. 
This model has received very little 
attention from ecologists. 
In the ecological literature, Pianka (1972) and others have graphically 
described single-species models of populations which sustain the Allee effect. 
N = 
rN[l-(N/Kf], 
(3.4.2) 
Ν = 
-oNln(N/K), 
(3.4.3) 
N = 
rN[(I/N)-C-bN], 
(3.4.4)

--- Page 62 ---

59 
An analytical model of a single-species model of a population which experiences 
an Allee effect is given by the equation, 
N = N[b + N(a- 
N)l(l 
+ cN)], 
(3.4.6) 
where a, b, c are positive constants. The function, F(N) = b + Ν (a —N)/ 
(1 + cN), has a maximum at N** = [ - 1 + V(l + ac)] /c. For Ν < N**, F (Ν) 
may be roughly approximated by the function, b + aN. For Ν > N**, F(N) 
may be roughly approximated by b 4- α/c — N/c. It follows that for Ν > N**9 
model (3.4.6) approximately reduces to the familiar logistic model. For 
b > 0, model (3.4.6) has a single positive equilibrium at 
N* = [(a+ 
bc) + V { ( a + bc)
2+ 
4 b } ] / 2 . 
For Ν* > Ν > 0, F(iV) is positive and for N> N*, F(N) is negative. It follows 
that model (3.4.6) is globally stable if b > 0. For b < 0, the model has another 
equilibrium positive at 
Nx = [ ( a + & c ) - V { ( a + bc)
2+ 
4&}]/2. 
This equilibrium is unstable while the region of stability of the higher level 
equilibrium N* is {Ν \ Ν > 
Nx}. 
Example 3.4.1. A model of a single-species population which sustains an 
Allee effect is described by the equation, 
Ν = N[b +AT(4-JV)/(1 + 2W)]. 
(3.4.7) 
The function F(N) in this model has a maximum at Ν = 1, F(0) = &. If & > 0, 
the model has a positive equilibrium at AT* where 
N* = 2 + b + V ( 4 + 4 & + 2 b
2 ) . 
Fig. 3.4.1 displays the function F(N) for b = - 0 . 5 and b = 0.4. When b = - 0 . 5 
the model has two equilibria, Nu N2. The lower level equilibrium Nx is unstable. 
The region of stability of the equilibrium N2 is {Ν \ Ν > Nx}. 
When b = 0.1, 
the model is globally stable. 
3 . 5 . E X P L O I T E D S I N G L E - S P E C I E S M O D E L S 
An important problem in the management of an exploited population is 
the stability of the population. We can distinguish two types of constant 
(open loop) harvesting policies. In a constant quota policy, a constant number 
of animals in a population is harvested per unit time. This type of policy 
requires that the technology to harvest the animals is very efficient and the 
capacity to carry out the harvest is in excess. An example of this type of 
policy is the constant quota policy of the International Whaling Commission 
prior to 1974. In the other type of constant harvesting policy, the effort 
applied per unit time to catch the animals in a population is fixed. A good

--- Page 63 ---

60 
ο 
ΙΟ 
Fig. 3 . 4 . 1 . Per capita growth rates of populations which sustain the Allee effect. 
working example of this policy is the fixed number of boats and pots which 
are licensed to catch Rock Lobsters in Western Australia. 
It has not been sufficiently emphasized that qualitively these two types of 
constant harvesting policies are very different. Constant quota harvesting 
policies are usually unstable (Goh, 1 9 6 9 / 1 9 7 0 ) while constant effort harvesting 
policies are usually stable (Goh, 1977 c). 
Let Ε be a measure of the effort applied in harvesting a population. Usually, 
Ε is set equal to qf, where q is the catchability coefficient and f is the number 
of boats, men or other units used in the harvesting of the population. The 
harvesting alters the dynamics of a population. If the natural dynamics is 
described by Ν = NF (Ν), the exploited population is given by 
Ν = NF(N) — EN. 
(3.5.1) 
If F(N) is strictly monotonie decreasing as Ν increases and Ν = NF(N) has 
a positive equilibrium, the unexploited population is globally stable. In this 
case, bF/bN < 0 for Ν > 0. Clearly if this is satisfied, b(F - E)/bN < 0 for 
Ν > 0. We conclude that if F(N) is strictly monotonie decreasing for Ν > 0, 
the exploited and unexploited populations have the same qualitative 
behavior, provided in each case there is a positive equilibrium. This conclusion 
applies to the logistic model, Gilpin and Ayala's model, Gompertz's model and 
Schoener's model which were examined in the previous section. 
If a population sustains an Allee effect, the population under a constant 
effort harvesting policy could qualitatively have a different behavior from the 
exploited population. If a constant effort harvesting policy is applied to 
model (3.4.6), we have 
ο ο

--- Page 64 ---

61 
Ν = N{b + Ν(α - N)l(l 
+ cN)} 
— EN. 
(3.5.2) 
If ö > Ο, the unexploited population is globally stable. Suppose E> b. Let 
d = Ε — b. Model (3.5.2) has two positive equilibria at Ni and iV2, where 
Nx = [ ( a - c d ) - V { ( a - c d )
2 - 4 d } ] / 2 , 
JV 2= [ ( a - c d ) + y/{(a- 
cd)- 
4 d } ] / 2 . 
(3.5.3) 
(3.5.4) 
The equilibrium atNx is unstable. The region of stability of the equilibrium 
at N2 is {Ν I Ν > Nx}. 
This follows because Nx > 0 for N2 > Ν > Nx and 
Ν < 0 for Ν > N2. UE< 
b, there is a unique positive equilibrium and the 
exploited population is globally stable. 
Assume that a constant quota policy is prescribed for the harvesting of a 
single-species population. Let h be the constant rate of harvest. A model of 
the harvested population is 
Ν = NF(N) — h. 
(3.5.5) 
An effective way to establish the stability of the exploited model is to plot 
F(N) and h/N on the same graph paper, as in Fig. 3.5.1. Usually, model 
(3.5.5) has two positive equilibria or none. Suppose it has two positive equi­
libria at Nx and N2 where Nx < N2. The lower level equilibrium Nx is unstable 
because Ν < 0 for Nx > Ν > 0 and Ν > 0 for N2 > Ν > Nx. The region of 
stability of the equilibrium at N2 is {Ν | Ν > Nx } if Ν > 0 f or N2 > Ν > Nx 
a n d i V < 0 f o r N > N 2 . 
To illustrate these conclusions, consider the exploited logistic model 
Fig. 3 . 5 . 1 . A constant quota harvesting policy which creates equilibria at Nî and 
N2.

--- Page 65 ---

62 
N = 
(r/K)N(K-N)-h. 
(3.5.6) 
If h > rK/4, there is no positive equilibrium. If h = rK/4, we have the so 
called "maximum sustainable yield" policy. There is a single unstable equi­
librium at Ν = Κ/2. If h < ruf/4, the model has two positive equilibria at Sx 
and S2, where 
It follows that Ν < 0 for Sx > Ν > 0 and ΛΓ > 0 for S2>N>St. 
Hence the 
equilibrium at Sx is unstable. For S2> 
N> 
SlrN 
> 0 and for Ν > S2, Ν < 0. 
Hence the region of stability for the equilibrium at S2 is {Ν | Ν > 
Sx}. 
Recently, Agnew (1979) has introduced a new and more realistic expression 
for the effects of harvesting on a single-species population. This harvesting 
expression reduces to a constant quota policy at high population densities; 
and it also reduces to the classical constant effort policy at low population 
densities. In this harvesting term, the handling time of the harvest is explicitly 
included in the expression. We further generalize this harvesting term in the 
model by adding the effects of competition among the men, boat, or other 
means used in the harvesting of a population. 
We shall use the same type of reasoning which is used for developing an 
expression for a functional response of a predator (Holling, 1966; Murdoch, 
1973). Let At be a short time interval during which the density Ν of an 
exploited population does not change significantly. Let f be the applied 
effort per unit time which is used in the harvesting. In the case of a fish 
population, / is the number of boats used in the harvesting which is standar­
dized in some manner. Let C be the catch per unit effort (boat) during the 
time interval Δ t. During the same time interval, let the time spent in handling 
the catch be wC where a; is a constant. It follows that the time available for 
searching for the animals in the population is (Δ t — wC). Let q be the catcha-
bility coefficient as used in fishery. It follows that the catch per unit effort 
(boat) during the time interval Δ t is 
C = q(At-wC)N. 
(3.5.10) 
This implies that the catch per unit effort during a unit time interval is given 
by the equation 
The total catch per unit time is fC/A t. It follows that a model of an exploited 
population is 
51 = 
(ll2)[K-y/(K?-4hK/r)]9 
52 = (1/2)[K 
+ y/(K
2 
- 
4hK/r)]. 
In this case, we have 
(3.5.7) 
(3.5.8) 
N = 
-(r/K)(N-Si)(N-S2). 
(3.5.9) 
C/At = qN/(l+ 
qwN). 
(3.5.11) 
Ν = NF(N) - qfN/il 
+ 
qwN). 
(3.5.12)

--- Page 66 ---

63 
If there is competition among the boats or other types of units used in the 
population, the expression (3.5.10) may be replaced by 
C = q(At - wC)N/(l 
+ af) 
(3.5.13) 
where f is the applied effort and α is a positive constant. From this equation 
we get 
C_ 
At 
qN 
(1 + af + qwN) 
(3.5.14) 
It follows that a model of an exploited population which incorporates the 
handling time of the harvest and the competition among the units engaged 
in the harvest of the animals is given by the equation, 
Ν = NF(N) - qfN/(l 
+ af + 
qwN). 
(3.5.15) 
Suppose a constant effort harvesting policy is prescribed. In this case, f is 
a constant. A good way to determine how many positive equilibria there are 
in model (3.5.15) is to plot the functions, F(N) and H(N) = qf/(l 
+ af + qwN)9 
on the same graph paper. The function H(N) is strictly monotonie decreasing 
as Ν increases. H(0) = qf(l + af). Fig. 3.5.2 illustrates what can happen in a 
population which sustains an Allee effect. In the particular case given in 
Fig. 3.5.2, the lower level equilibrium at Ν χ is unstable. The region of stability 
of the higher level equilibrium at N2 is {Ν | Ν > 
Nx}. 
Suppose the unexploited model can be adequately described by the logistic 
model. We have 
^ . 0 0 
1.00 
4 . 0 0 
Να 
S.00 
Ν 
2 . 0 0 
3 . 0 0 
Fig. 3 . 5 . 2 . JV* and N2 are equilibria of model ( 3 . 5 . 1 5 ) .

--- Page 67 ---

64 
Ν = (r/K)N(K 
-Ν)- 
qfN/iX + af + qwN). 
(3.5.16) 
If H(N) = qf/(l 
+ af + qwN), we have H(0) = qf/(l 
+ af). Graphically, we 
find that for the model to have a positive equilibrium, we must have r > qfl 
(1 + af). If this is satisfied, the positive equilibrium is at 
N* = (Kqw~l-af)+ 
V{(Kqw - 1 - af)
2 + 4qwK(r + raf- 
qf)/r}]/{2qw). 
(3.5.17) 
Graphically, it is clear that ΛΓ > 0 for Ν* > Ν > 0, and Ν < 0 for Ν > Ν*. 
Hence model (3.5.16) is globally stable. If the competition among the units 
(boats) engaged in harvesting is weak, a < 1. In this situation, if / is large it is 
likely that r < qf/(l 
+ af), and there is no positive equilibrium. 
If F = r[l - (Ν/Κ)
θ] 
and 1 > θ > 0, model (3.5.15) has a dynamical 
behavior which is qualitatively similar to that in the logistic model. If θ > 1, 
it is possible for model (3.5.15) to have two positive equilibria. The lower 
level equilibrium is unstable; the higher level equilibrium is stable relative to 
initial states that are larger than the lower level equilibrium. 
If the function F(N) is as in the Gompertz's or Schoener's model, the model 
(3.5.15) always has a globally stable positive equilibrium. This can be estab­
lished by plotting F(N) and H(N) = qf/(l 
+ af + qwN) on the same paper. 
We note that in these models, Ν = 0 is an asymptote of F(N), while H(N) has 
an asymptote at Ν = — (1 + af)/(qw). 
Hence qualitatively, these models of an 
exploited population can behave differently from the logistic model of an 
exploited population. 
3.6. M O D E L S WITH U N S P E C I F I E D P A R A M E T E R S 
Let au a2, ... ,ap be nonnegative parameters and bl9 b2, ... , bn be para­
meters which can have either sign. In theoretical ecology we are often con­
fronted with models of the form, 
Nt = NiFi(N; a, 6 ) , 
i = 1, 2, . . . , m, 
(3.6.1) 
in which the functional form of the functions, Fl9 F2, . . . , F
m , is given but 
the parameters {a, b} are unspecified. Traditionally we study this model 
by examining in sequence the following questions: (i) for a given set of 
parameters {a, b}, does the model have a positive equilibrium? (ii) If a 
positive equilibrium exists, is it locally stable? (iii) Is the model globally 
stable? 
In theoretical ecology, question (i) is unrealistic because we usually do not 
have a given set of values for the parameters {a, b}. Many of us bemoan this 
state of affairs but we should not let it hold up efforts to develop insight into 
ecological problems. The more realistic and effective approach is to postulate 
the existence of a positive equilibrium at (N*, iVj, . . . , iV£ ) and then ask 
whether the set of equations for iV*

--- Page 68 ---

65 
Fi(N*;α, 
b) = 0, 
* = l , 2 , . . . , m , 
(3.6.2) 
has a positive solution in the set of parameters. In most problems, the number 
of parameters is usually much larger than that of the species. Hence this 
problem usually has a continuum of solutions. 
For an illustration of these ideas, consider the Lotka— Volterra model: 
N{ = Nf 
j = ι 
(3.6.3) 
where i = 1, 2 , . . . , m. The nontrivial equilibrium satisfies the equation, 
m 
bi+ 
2a, 7iV* = 0, 
i = l , 2 , . . . , m . 
(3.6.4) 
j = ι 
If we choose the parameters {aih 
bk } first, then compute the nontrivial equi­
librium we may find that it is not positive. In fact, from computer experi­
ments (Goh and Jennings, 1 9 7 7 ) the probability of success decreases rapidly 
with m. It is more practical to assume that an equilibrium exists at (iV* 
Ν'*, . . . , iV* ) which could be any positive point, and then ask what the 
parameters, bu b2, . . . , b m , should be in order that the assumption is valid. 
We achieve this by letting 
m 
6, = - 
2 
M t f 
(
3 ·
6 ·
5 ) 
j = ι 
for i = 1, 2, . . . , m. Clearly the parameters { a l V } can be freely prescribed 
according to whether we wish to model a competition, a mutualism or a 
prey—predator interaction. 
For more complex situations, we can use an auxiliary nonlinear program­
ming problem. We first assume that a positive equilibrium exists at (Nu 
N2, . . . , ΛΓ* ). We consider the parameters, αϊ9 α 2, . . . , ap, bu b2, ... , bn, as 
independent variables. Then we choose a reasonable objective function like 
L = a] + a\ + · · · + a\ 4- b\ + b\ + · · · + b
2
n. 
(3.6.6) 
We minimize the function L(a, b) subject to the conditions, 
FAN*;* 
&) = 0, 
i = l , 2 , . . . , m , 
(3.6.7) 
a
s > 0 , 
s = l , 2 , . . . , p . 
(3.6.8) 
If we employ a numerical optimization algorithm (Fletcher, 1975), we could 
rapidly generate a set of admissible parameters {a, b}.

--- Page 69 ---

66 
3.7. TWO-SPECIES L O T K A - V O L T E R R A M O D E L S 
The Lotka—Volterra model of a two-species interaction is normally studied 
graphically. The case of two competing species occupies a prominent place in 
this approach because of widespread interest in the coexistence of competing 
species. The graphical analysis suggests that for two competing species, local 
stability implies global stability. We shall prove this result analytically. For a 
Lotka—Volterra model of three or more competing species, this result is not 
necessarily true. In a Lotka—Volterra model of a single prey and a single 
predator system, it is possible to have a positive equilibrium which is only 
locally stable. 
Consider the Lotka—Volterra model for two-species system: 
bi + Σ
 
aiJ
NJ 
j = ι 
i = l , 2 . 
(3.7.1) 
This type of model may be justified by the fact that it is an approximation 
of a nonlinear model near an equilibrium. Denote the nontrivial equilibrium 
by (Nu N2 ). It is a solution of the equations, 
2 
bi+ 
Σ 
% ^ ; = 0 , 
i = l , 2 . 
(3.7.2) 
j = ι 
If the equilibrium is positive, Nx* > 0 and ΝΪ > 0. 
The diagonal elements of the matrix, A = (a ; j), represent intraspecific inter­
actions. If the equilibrium level of the first species Nx is low, it is likely that 
axx is positive. This follows from Allee's principle, as discussed in Odum (1971). 
If N* is large, it is likely that density-dependent mortalities due to intraspecific 
interactions (like crowding) will occur and axx 
would be negative. Similar 
relationships hold between N2 and a 2 2 . 
Let X i = Ni — Ν* for i = 1, 2. Substitute xx, x2 into (3.7.1) and ignore 
higher order terms in xx and x2\ we then get 
xx = N\
kanxl 
+ N*al2x2, 
(3.7.3a) 
x2 = Ν2α2Χχλ 
+ N2a22x2 
. 
(3.7.3b) 
By the Routh—Hurwitz stability criterion, system (3.7.3) is stable, if and only 
NÎalx+Ni*a22 
< 0, 
(3.7.4) 
and 
NtNÎ(alxa22 
- ax2a2X) 
> 0. 
(3.7.5) 
Note that in theoretical ecology, it is accepted that neutral stability is irrele­
vant. Hence (3.7.4) and (3.7.5) are necessary and sufficient conditions for 
(N*9 Nt) to be locally (asymptotically) stable.

--- Page 70 ---

67 
In a two-species competition, a12 < 0 and a2l 
< 0. In a two-species 
mutualism, a12 > 0 and a2i 
> 0. For both cases, a12a2l 
> 0. It follows that in 
order for (3.7.4) and (3.7.5) to be satisfied at a positive point (ΛΓ*, N2), it is 
necessary that an 
< 0 and a22 < 0 must both be satisfied. This means that 
each species must be self-regulating (See Fig. 3.7.1 and 3.7.2). In the case of 
amensalism, where al2 < 0 and a2X = 0, we can similarly show that it is necessary 
for a
n < 0 and a22 < 0. Similarly, for stability to exist in a commensalism in 
which al2 
> 0 and a 2 ) = 0, we must have an < 0 and a22 < 0. In a model of 
an interaction between a single prey and a single predator, it is not necessary 
for α χι and a22 to be both negative. 
Example 3.7.1. Let Nx and N2 be prey and predator densities respectively. 
Consider the prey—predator model: 
Nx 
=Nl(5-2N1-3N2), 
N2=N2(-2 
+ N! + N2). 
This system has a positive equilibrium at ( 1 , 1 ) . Conditions (3.7.4) and 
(3.7.5) are satisfied. Hence the equilibrium is locally stable. However the 
computer solution shows that the trajectory of this model through the initial 
state ( 1 . 0 , 1 . 6 ) tends rapidly to (0,
 0 0 ) as t
 
0 0 . Hence the system has only 
a locally stable positive equilibrium. This example is interesting because there 
is a widespread belief that in a Lotka—Volterra model of a two-species inter­
action, local stability implies global stability. 
This model can help to explain how a pest explosion takes place, Let a 
predator (pest) feed on a prey which regulates itself. A change in the environ­
mental conditions can displace the state of the system from its domain of 
attraction for its positive equilibrium. This can lead to an explosion of the 
predator population and the destruction of the prey population. 
We shall now describe a simple set of conditions for global stability in a 
Lotka—Volterra model of a two-species interaction. 
Theorem 3.7.1. Conditions which are sufficient for global stability in a 
Lotka—Volterra 
model of a two-species interaction are (i) the nontrivial 
equilibrium 
(Nu Nf) is positive, (ii) the positive equilibrium is locally stable 
and (iii) each species sustains density-dependent 
mortalities due to intra-
specific 
interactions. 
Proof. From a graphical analysis of a given Lotka—Volterra model of a two-
species interaction, it is clear that for the system to persist, its nontrivial 
equilibrium must be positive. 
Condition (iii) means that an < 0 and a22 < 0. It follows that (3.7.4) is 
satisfied because N* > 0 and N2 > 0. Condition (ii) implies that det(^4) > 0 
where A = (a^).

--- Page 71 ---

68 
Fig. 3.7.1. Computer solutions of a globally stable Lotka—Volterra model of a two-species 
mutualism. The model is X = X(2 - 3X + Y), and Y = Y(l + 2X - 3 Y). 
Fig. 3.7.2. Computer solutions of an unstable Lotka—Volterra model of a two-species 
mutualism. The model is X = X(-l 
- X + 2 Y) and Y = Y(-2 + 3X - Y).

--- Page 72 ---

69 
By definition, (Nu NÎ) is the nontrivial equilibrium. It follows that we 
have 
bi + anNf 
4- al2Ni 
= 0, 
(3.7.6a) 
b2 + a2XNx* + a22Ni 
= 0. 
(3.7.6b) 
These equations can be used to eliminate b\ and b2 from model (3.7.1). We 
then get 
Ni = Nx[axx(Nx-NÏ)+ 
aX2(N2-N*2)], 
(3.7.7a) 
Ν2 = Νί[α21(Νι-Ν*)+ 
α22(Ν2-Νζ)]. 
(3.7.7b) 
A suitable Liapunov function for this model is 
V(N) = cx[Nx 
-Nf-NîlniNJN*)] 
+ c2[N2-N2* 
-NfkiiNJN})], 
(3.7.8) 
where cx and c2 are positive constants which will be prescribed later on. Along 
solutions of (3.7.7), we have 
V - C t M -NÎ) 
(Nx/Nx) 
+ c2(N2 
-Ni) 
(NJNJ 
= cxaxx(Nx 
- W 
+ 
ο , α 1 2 ( Λ Τ , - N Î ) ( N 2 - N Ï ) 
+ c 2 a 2 1 ( i ^ 2 - Ν ί ) (Ni 
+ c 2 a 2 2 ( N 2 
-Ni)
2 
= (V4) (N-iNT*)
T(CA 4- A
T C ) (N-N*) 
(3.7.9) 
where C = diag(c t, c 2 ) , and A
T is the matrix transpose of A. It follows that 
sufficient conditions for model (3.7.1) to be globally stable are (i) there 
exists a positive equilibrium (AT?, ATj) and (ii) there exists a positive diagonal 
matrix; such that CA + A
TC is negative definite. 
We shall now show that the conditions of the theorem imply that there 
exists a positive diagonal matrix C such that CA 4- A
TC is negative definite. 
The matrix, CA 4- A
TC, is definite if 
cxan 
< 0, 
c2c22< 
0 
(3.7.10) 
and 
kcxc2axxa22 
— (cxaX2 
+ c2a2X)
2 
> 0. 
(3.7.11) 
Condition (iii) means that axx < 0 and a22 < 0. Hence (3.7.10) is satisfied. For 
condition (3.7.11), there are three cases: (a) aX2a2X 
= 0, (b) ax2a2X 
> 0 and 
CLX2CL2X 
< 
0. 
In case (a), either ax2 = 0 or a2X = 0 or both are equal to zero. If ax2 = 0, 
condition (3.7.11) becomes 
c2[4cxaxxa22 
—c2ajx] 
> 0. 
(3.7.12) 
Clearly it is possible to choose positive numbers, cx and c 2 , so that this 
inequality is satisfied. Similar arguments apply if a2X = 0 or CLX2 — a2X — u.

--- Page 73 ---

70 
Biologically, this case contains interactions known as amensalism, commensalism 
and neutralism (Odum, 1971). 
In case (b), aX2a2X 
> 0. This means that either aX2 < 0 and a2X < 0 or 
a12 > 0 and a21 > 0. These subcases are known as competition and mutualism 
respectively. Condition (3.7.11) can be rewritten as 
4cxc2(axxa22 
— al2a21) 
— (cxaX2 
— c2a21)
2>0. 
(3.7.13) 
Choose positive numbers cx and c2 so that 
cxaX2 
—c2a2l 
= 0 . 
(3.7.14) 
This is possible as ax2a2X 
> 0. By assumption, the positive equilibrium 
(Nx, N2) is locally stable. From (3.7.5), this implies that (ana22 
— aX2a2X) 
is 
positive. It follows that (3.7.13) is satisfied by this choice of cx and c 2 . 
Case (c) is a prey—predator interaction. The parameters, ax2 and a 2 1 , are 
non-zero and have opposite signs. Hence it is possible to select positive num­
bers, cx and c 2 , so that 
cxaX2 
+ c2a2X 
= 0. 
(3.7.15) 
As axx < 0 and a22 < 0, it follows that condition (3.7.11) is satisfied. This 
completes the proof. 
There is hardly any mathematical analysis of the Lotka- Volterra models 
of mutualism in the ecological literature. Ironically this class of models, 
which has been largely ignored, turns out to be mathematically the most 
tractable. As noted in the proof of Theorem 3.7.1, in a two-species Lotka— 
Volterra model of mutualism, local stability implies global stability. This 
result remains true in a Lotka—Volterra model of mutualism between any 
finite number of species (Goh, 1979). 
Similarly, in two-species Lotka—Volterra models of competition, local 
stability implies global stability. However, in three-species Lotka—Volterra 
models of competition, local stability need not imply global stability. 
Example 3.2.2 demonstrates this. 
If axx < 0, a22 < 0 and aX2a2X 
< 0, the interaction matrix (a i y) is said to 
be qualitatively stable (May, 1974). This means that for (α ί ;) to be associated 
with a locally stable positive equilibrium, it is not necessary to know the 
exact magnitudes of the parameters so long as they satisfy the above sign 
constraints. For such a matrix, there exists a positive diagonal matrix C such 
that CA + A
TC is negative definite. Thus in a two-species interaction, either 
amensalism, neutralism, commensalism, prey—predator or host—parasite, the 
conditions for global and qualitative stability are both satisfied if each species 
is self-regulating. Similarly, in cases involving more than two species, if the 
interaction matrix A satisfies the strengthened conditions for qualitative 
stability and the corresponding Lotka—Volterra model has a positive equi­
librium, the model is globally stable.

--- Page 74 ---

71 
In a Lotka—Volterra model of a prey- predator system, it is possible to 
have global stability even though only one of the species sustains density-
dependent motralities due to intraspecific interactions. We shall establish 
global stability for a Lotka—Volterra model of a prey—predator system in 
which only the predator sustains density-dependent mortalities due to intra­
specific interactions. This case is very important in pest control. A popular 
method in biological control is to introduce a predator to suppress the pest 
(prey). In general a pest population does not sustain significant density-
dependent mortalities due to intraspecific interactions when its density is 
maintained at economically acceptable levels by the introduced predator or 
by insecticides. 
Let Νi, N2 be prey and predator densities respectively. Let b, d, E, ai2 
and 
a22 be positive constants. Consider the Lotka—Volterra model, 
N\ = N 1 [ b - a 1 2 i V 2 ] , 
(3.7.16a) 
N2=N2[-d 
+ Eal2Nl-a22N2], 
(3.7.16b) 
The parameter Ε is the conversion efficiency of prey into predator; b is the 
per capita birth rate of the prey and d is the per capita death rate of the 
predator. The model has a unique positive equilibrium at (Nu N2) where 
Nt = (bot22 
+ dal2)l(EcL
2
l2 
), 
iV2* = b/al2. 
(3.7.17) 
We shall prove the following theorem which established that the model 
(3.7.16) is a very robust system. 
Theorem 3.7.2. The system described by the equations (3.7.16) 
is globally 
stable if the parameters, 
b, d, Ε, α 1 2, a 2 2 , are all positive. 
Proof. The positive equilibrium (Nu N2) satisfies the equations, 
bi - a 1 2 i V 2 * = 0, 
—d + Ea12Nt 
~ a22NÎ 
= 0. 
Substitute these into (3.7.16). We get 
(3.7.18a) 
(3.7.18b) 
N\ =Nl(-a12) 
(N2 -Ni)9 
(3.7.19a) 
iV2 = iV 2[^a 1 2(iV 1 - W * ) - a 2 2 ( i V 2 - i V 2 * ) ] . 
(3.7.19b) 
A suitable Liapunov function is 
V(N) =E[Nl-Nt 
- NflniNJNf)] 
+ [N2 - N2 -Niln(N2/N*)]. 
(3.7.20) 
Along solutions of system (3.7.19), we have 
V(N) = -OL22(N2 
- Nt)
2. 
(3.7.21) 
Clearly V(N) < 0 for N, > 0, N2 > 0 and N2 Φ N2*. Inside the set {Ν | N2 
= A T * } , the only invariant subset is { ( Λ Γ * , N^)}. By Theorem 3.3.5, this model 
is globally stable.

--- Page 75 ---

72 
Suppose that the predator has an alternative prey which provides it with 
an abundant and steady supply of energy per predator. In this case, a model 
of the prey—predator system is 
Νχ = Νχ&χ-αί2Ν2], 
(3.7.22a) 
N2 = N2[b2 
+ Eal2Nx 
-ct22N2] 
(3.7.22b) 
where bx, ö 2 , E, al2 
and a 2 2 are positive constants. The nontrivial equilibrium 
is at (N*, Ni) where 
Ni = (bxa22 
- b2al2)l(Ea\2), 
Ni = b/ocl2 . 
(3.7.23) 
If 6 2 > &ια 2 2 /al2, 
N* is negative and the nontrivial equilibrium is not posi­
tive. Graphically, we can show that all the solutions which begin in the 
positive quadrant tend to the point (0, b2/oc22 ). Clearly this is a highly desirable 
situation if the prey is a pest. In fact there is a well known example of the 
usefulness of an alternative prey for the predator in the biological control 
of a pest (prey) (Doutt and Nakata, 1965). If b2 < bx a22 / α 1 2 , the nontrivial 
equilibrium is positive. By arguments which are similar to those in the proof 
of Theorem 3.7.2 it can be shown that system (3.7.22) is globally stable 
when it has a positive equilibrium. 
Suppose that only the prey sustains density dependent mortalities due to 
intraspecific interactions. A model of this type of prey—predator system is 
given by the equations, 
Νχ ^Nxlb-αχχΝχ 
~al2N2], 
(3.7.24a) 
N2 =N2[-d 
+ Εαι2Νχ] 
(3.7.24b) 
where b, d, E, a
n and al2 
are positive constants. Its non trivial equilibrium is 
at (Ni, Ni) where 
Ni = d/(Eal2), 
Ni = (bEal2 
- d a n ) / ( e a
2
2 ) 
(3.7.25) 
If (Ni, Ni) is positive, we can use arguments similar to those in the proof of 
Theorem 3.7.2 to establish that this model is globally stable. 
It appears that we have not exhausted all globally stable Lotka—Volterra 
models of two-species interactions. Computer simulations suggest that there 
is global stability in the following prey—predator model: 
Νχ = 
+ Ο.δΝχ - 1.3iV 2), 
(3.7.26a) 
N2 = JV 2(-1.0 + 2Νχ -N2). 
(3.7.26b) 
Biologically, this model is very interesting. It suggests that it is possible for a 
predator N2, which regulates itself, to provide a robust regulation of a pest 
(prey Ν χ) which is not self-regulating. In the absence of the predator, the 
density of the prey will explode.

--- Page 76 ---

73 
3.8. GILPIN AND A Y A L A ' S COMPETITION M O D E L 
The Lotka—Volterra models have often been severely criticized. One of the 
criticisms is that in such a model, the per capita rate of change of the density 
of each species is a linear function of the densities of the interacting species. 
In single-species models, we have seen that the linearity assumption in the 
logistic model is not a serious limitation. The most important assumption of 
the logistic model of a single-species model is that it is a differential equation 
model. We note that these observations apply to a lesser extent in Lotka— 
Volterra models of multispecies systems. If we use Lotka—Volterra models 
only to describe second order dynamics in a neighbourhood of a positive 
equilibrium, we will always get some correct and relevant information. The 
trouble arises when we insist that a Lotka—Volterra model should be valid 
globally. 
Gilpin and Ayala (1973) found that the Lotka—Volterra models do not 
fit globally to the data from a series of carefully conducted experiments. 
For this reason they proposed a new model in which the zero isolines are 
concave. Let Nx and N2 be the densities of two competing populations. 
Gilpin and Ayala's competition model is 
Nx=rxNx[l-(Nx/Kxf> 
-aX2(N2/Kx)]9 
(3.8.1a) 
N2 = r2N2[l-a2X(Nx/K2)- 
(Ν2/Κ2)
Θ^], 
(3.8.1b) 
where r u r 2, Θί9 θ2,αΧ2 
and<x2X are positive constants. 
Let (ΛΓ*, Ni) be the nontrivial equilibrium of (3.8.1). We have 
1 - (NtlKx )·• -a12(Ni/Kt 
) = 0, 
(3.8.2a) 
1-*2Ï{NÎIK2) 
- (N\IK2f* 
= 0. 
(3.8.2b) 
For a more compact notation, we shall require the parameters, 
axx = rx(Nt/Kx 
)*• , 
al2 
= 
rxaX2Ni/Ku 
a2X = r2a2xNl/K2, 
a22 = r2(N2*/K2)
e>. 
(3.8.3) 
It is convenient to use the variables, xx and x2, where 
*i = ΝιΙΝΐ, 
X7 = N2/N}. 
(3.8.4) 
Under this change of variables and with the help of (3.8.2), the system 
(3.8.1) becomes 
Χι = * ι [ - α η ( * ? > - 1) - ax2(x2 
- 1 ) ] , 
(3.8.5a) 
X2 = X2[^a2X(Xx 
- 1) - a22(Xi* 
- 1 ) ] . 
(3.8.5b) 
A suitable Liapunov function for (3.8.5) is 
V = Xx - 1 - In Xx + X2 - 1 - In X2. 
(3.8.6)

--- Page 77 ---

74 
Along solutions of the system (3.8.5) we have 
V = - o u i * ! - 1) ( X * - 1) - a22(X2 
- 1) 
- 1) 
~(al2 
+ a 2 1 ) ( ^ - 1) ( X 2 - 1). 
(3.8.7) 
By inspection V is negative in the region {X | Xx > 1 and X
2 > l}and the 
region {X \ Xx < 1 and X2 < 1 } . If 1 > Θ x > 0 and 1 > 0
2 > 0, it is difficult 
to establish simple analytical conditions that V is negative in the positive 
orthant minus the point ( 1 , 1 ) . If Θ x > 1 and 0
2 > 1, we shall derive some 
simple analytical conditions for V to be negative in the positive orthant minus 
the point ( 1 , 1 ) . 
Gilpin and Ayala applied their model to a competition between Drosophila 
pseudoobscura 
(Nx) and Drosophila willistoni (N2). The data for the parameters 
in this competition are 
rx = 4.513, 
Kx = 7 9 1 , 
Θ x = 0.12, 
aX2 = 0.0869, 
r 2 = 1.496, 
# 2 = 1 3 3 2 , 
p 2 = 0.35, 
a 2 1 = 0.713. 
(3.8.8) 
The corresponding model has a positive equilibrium at (Nu ΛΤ£) = (441, 616). 
From these data, we get 
axl = 4.207, 
al2 = 0.305, 
a 2 1 = 0.493, 
a22 = 1.142. 
(3.8.9) 
These parameter values indicate that each species is strongly self-regulating 
and the interspecific interactions are relatively weak. We establish that V is 
negative for all Xx > 0 and X2 > 0 and (Χί9 X2) Φ (1,1), by plotting a large 
number of level surfaces, V(X) = C, where C is a negative number. From this 
we deduce that model (3.8.1) is globally stable if its parameter values are 
those given in (3.8.8). 
We shall establish simple analytical conditions for global stability in Gilpin 
and Ayala's competition model when Θ(> 1. For m competing species, 
Gilpin and Ayala's competition model is 
j Φ i 
(3.8.10) 
where i = 1, 2, . . . , m. Assume that it has a positive equilibrium at (iV*, 
Nt . . . , # * ) . We haveiV^ > 0 and 
m 
1 - 
- Σ «ι/WW = 0 
(3.8.11) 
j ^ i 
where / = 1, 2, . . . , m. For convenience let us define a matrix β by the 
equations,

--- Page 78 ---

75 
*2 
^ ' . 0 0 
0 . 8 0 
1.60 
2 . 4 0 
3 . 2 0 
4 . 0 0 
Fig. 3 . 8 . 1 . Level surfaces of the V(x) function in ( 3 . 8 . 7 ) . 
and 
ßu = au 
if ι Φ j 
where ij = 1, 2, . . . , m. 
(3.8.12) 
(3.8.13) 
Theorem 3.8.1. Ifet 
> 1 for i = 1, 2, . . . , m, mode/ (3.8.10) 
is globally 
stable 
if there exists a positive equilibrium N* and there exists a positive 
diagonal 
matrix C such that Cß + ß
TC is positive 
definite. 
Proof. Substituting (3.8.11) into (3.8.10), we get 
m 
Ni = Γ,ΛΓ,[(iVW - W/Kt)« 
- 
2 
«ι/W 
-N*)l*th 
j Φ i 
(3.8.14) 
where i = 1, 2, . . . , m. 
Let «!, s 2, . . . , sm be positive constants which will be prescribed later. A 
suitable Liapunov function for model (3.8.14) is 
V(N)= 
2 
sdNi-Nf-NflnW/N?)]. 
i = 1 
Along solutions of (3.8.14) we have 
(3.8.15)

--- Page 79 ---

76 
ί = 1 
m 
- 
Σ 
Σ 
( W w / * » ) (Ν, -Nt) 
(Ν,-Ν;). 
(3.8.16) 
ι = 1 j Φ i 
For convenience, let c, = δ,Γ,/ίΓ, for i = 1, 2, . . . , m. Clearly c x , c 2 , . . . , cm 
are positive constants. 
If 0 > 1 and Ζ is a real number, we have 
\Ζ
Θ - I I < I Z - l l 
(3.8.17) 
for all Ζ > 0. Let Z, = JV,/iV* for ί = 1, 2, . . . , m. We then have 
-(Ni-N*) 
(N°* - J V * ) = -\Nt-N?\\Z?i
i 
-1\Ν?
θί 
<-N*
6i 
(Nt 
-N?)
2 
(3.8.18) 
for i = 1, 2, . . . , m. 
Conditions (3.8.12), (3.8.13), (3.8.16) and (3.8.18) imply that 
m 
m 
v < - 
I 
I
 
ctßiA
Ni 
-
N i ) (
nj 
- t y * ) 
i = i 
y = ι 
= - (1/2) (Ν - N*)
T(Cß + ß
TC) (Ν - Ν*). 
(3.8.19) 
By assumption, there exists a positive diagonal matrix C such that Cj3 + ß
TC 
is positive definite. It follows that V < 0 for all Ν in the positive region minus 
N*. Hence (3.8.10) is globally stable. 
We shall describe a simple way to establish that a given matrix β has a positive 
diagonal matrix C such that Cß + j3
TC is positive definite. We require a matrix 
Ρ which is defined by the equations, 
Pu = ßü 
for i = 1, 2, . . . , m, 
(3.8.20a) 
and 
Pa =-βυ 
ιΐίΦ]. 
(3.8.20b) 
If all the leading principal minors of Ρ are positive, then there exists a positive 
diagonal matrix C such that Cß + ß
TC is positive definite (Johnson, 1974). 
For completeness, we shall establish global stability for a modification 
of model (3.8.10). Let 
for i, j = 1, 2, . . . , m be non-negative constants 
and Ε a = 1 for / = 1, 2, . . . , m. A model of competition among m species is 
Ni-TiNi 
1 - f Äyi^/JT^j 
(3.8.21) 
where i = 1, 2, . . . , m. In this model we only require that 0,· > 0 for ί = 1, 2, 
. . . , m. We shall assume that it has a positive equilibrium at (Nu N*, ... , Nm ) . 
Let Yi = Nt/Ki for ï = 1, 1, . . . , m. We get 
m 
ν = - Σ 
') w -
N Ï Ï M " 
-

--- Page 80 ---

77 
Yt = rtY, 1 - 2 
EuYfJ 
i = ι 
(3.8.22) 
where i = l,2,... 
,m. Let 7 * = 
for i = 1, 2 , . . . , m. We have 
m 
1 ~~ Σ
 
Eu
 
= 
0 
(3.8.23) 
fe = ι 
for / = 1, 2, . . . , m. 
Theorem 3.8.2. Model (3.8.21) 
is globally stable if it has a positive 
equilibrium 
N* and there exists a positive diagonal matrix C such that CE + E
TC is 
positive 
definite. 
Proof. Substitute (3.8.23) into (3.8.22). We get 
j = ι 
(3.8.24) 
for i = 1, 2 , . . . , m. 
Let s
u s 2, ·. · , sm be positive constants which will be prescribed later. A 
suitable Liapunov function for (3.8.24) is 
V ( 7 ) = Σ st 
i = 1 
γθί 
γ *Qj 
7 
Yi
ei 
MYt/Y*) 
(3.8.25) 
Let ct = sft for i = 1, 2 , . . . , m. Clearly c 1 ? c 2 , . . . , cm 
are positive constants. 
Along solutions of (3.8.24), we have 
V = - (1/2) (y -yf(CE 
+ £
T C ) (y - y * ) 
(3.8.26) 
where y, = yf
1 for i = 1, 2 , . . . , m and C = diag(c 1 ? c 2 , . . . , cm ). By assumption, 
there exists a positive diagonal matrix C such that CE + 2?
TC is positive 
definite. Hence Vis negative in the positive region minus the equilibrium 
H*. It follows that the model is globally stable. 
3 . 9 . P R E Y - P R E D A T O R S Y S T E M WITH T Y P E 2 F U N C T I O N A L R E S P O N S E 
By definition, the functional response of a predator is the rate at which 
prey is harvested by a predator (Holling, 1966). If we take into account the 
time a predator uses in handling the prey it has captured, we find the predator 
has a Type 2 functional response. According to Hassell et al. ( 1 9 7 6 a, b), Type 
2 functional response is the most common type of functional response among 
arthropod predators. 
In the ecological literature, Kolmogoroffs Theorem (1936) has been the

--- Page 81 ---

78 
most versatile tool for the qualitative analysis of two-species interactions. It 
has been used very successfully by Rescigno and Richardson (1973) and May 
(1974) in their analysies of two-species interactions. The discovery of bio­
logically meaningful Liapunov and Liapunov-like functions provides a new 
tool which is as versatile as Kolmogoroff s Theorem. We shall examine 
examples in which Kolmogoroff's Theorem does not apply but in which it 
is possible to use a Liapunov function to establish global stability. Moreover, 
Kolmogoroff's Theorem applies only to two-species interactions wherereas 
the direct method of Liapunov and its extensions apply to interactions between 
any number of species (Goh, 1 9 7 8 b). 
Let X and Y be the densities of a prey and its predator respectively. A model 
of prey—predator system is given by the equations 
where g(X) is the per capita rate of change of prey density in the absence of 
the predator and a, d, e, w are positive parameters. The parameter e is the 
conversion efficiency of prey into predator and d is the mortality rate of the 
predator. The expression, aX/(l 
+ wX), is a Type 2 functional response of a 
predator. An interesting feature of this model is that the predator does not 
sustain any density-dependent mortalities due to intraspecific interactions. 
Assume that the model has a positive equilibrium at (X* Y * ) . We have 
X* > 0 and Y* > 0 and 
It follows that X * = d/(ea - wd) and Y* = g(X* ) (1 + wX*)/a. 
For this 
equilibrium to be positive, we must have ea > wd and g(X*) > 0. For 
convenience, let 
Theorem 3.9.1. Model (3.9.1) 
is globally stable if it has a unique positive 
equilibrium at (X*, Y*)9 and 
X = X[g{X)-aY/{l+ 
wX)]9 
Y= Y[-d 
+ eaX/(l+ 
wX)], 
(3.9.1a) 
(3.9.1b) 
£ ( X * ) - a Y * / ( l + wX*) = 09 
-d + eaX*/(l 
+ wX*) = 0. 
(3.9.2a) 
(3.9.2b) 
S= 1/[(1 +wX) 
(1 
(3.9.3) 
(X-X*)[g(X)-g(X*)+ 
awY*S(X-X*)] 
< 0 
forallX> 
0, Y> 
ΟαηάΧΦΧ*. 
(3.9.4) 
Proof. Substitute (3.9.2) into (3.9.1). We get 
X = X[g(X) 
-g(X*) 
- a Y / ( l + wX) + aY*/(l 
+ 
wX*)], 
Ϋ = Y[eaX/(l 
+ wX) - eaX*/(l 
+ 
wX*)]. 
(3.9.5a) 
(3.9.5b) 
A suitable Liapunov function is

--- Page 82 ---

79 
V=X-X* 
-X* 
ln(X/X*) 
+ c[Y — Y* — Y* 
ln(Y/Y*)], 
(3.9.6) 
where c is a positive constant which will be prescribed later. Along solutions 
of (3.9.5), we have 
V = (X-X*)[g(X)-g(X*)] 
-a(X-X*)S(Y+ 
wX*Y-Y*-wXY*) 
+ cea(Y-Y*)S(X-X*) 
= (X-X*)[g(X)-g(X*)+ 
awY*S(X 
- 
X*)] 
- a ( l + 
wX*)(X-X*)S(Y- 
Y*)+ 
cea(X-X*)S(Y-Y*). 
Set c = (1 + wX*)/e; 
we get 
V = (X - X*)[g(X) 
- g(X*) + a w F * S ( X - X * ) ] . 
(3.9.7) 
It follows that V < 0 for X > 0, 7 > 0 and Χ Φ X*. 
From an inspection of (3.9.7), we have V = 0 when X = X* On the set 
{ ( Χ , 7 ) \ X = X*}, 
the only invariant set is {(X*, Y*)}. 
This is because by 
assumption, (3.9.1) has a unique positive equilibrium. By Theorem 3.3.5, 
model (3.9.1) is globally stable. 
We show by a simple example that it is possible to have global stability 
when the per capita birth rate of the prey is not a monotonie decreasing 
function of its density. In this case, the prey population exhibits an Allee 
effect (Odum, 1971). In the same example, it is shown that Kolmogoroff s 
Theorem cannot be used to establish global stability. This observation is 
interesting as May (1974) has shown that Kolmogoroff's Theorem applies 
effectively to most proposed models of prey—predator interactions. 
Example 3.9.1. Consider the prey—predator model, 
where g(X) = 2 + X(4 — X)/(l 
+ 2X). The function g(X) has a maximum at 
X = 1, £(0) = 2 and g(4 + >/18) = 0. For X > 0, g(X) has a single hump. For 
X < 1, g{X) can be roughly approximated by 2 + 4 X , and for X > 1, it can 
roughly be approximated by 4 — Xj2. 
The nontrivial equilibrium (X*, Y*) is at (6, 1.4). Condition (3.9.4) implies 
Hence V is negative for X > 0, Y > 0 and Χ Φ 6. We can establish from a 
graphical analysis that there is only a single equilibrium in the feasible 
region and the only invariant set on the line is { ( 6 , 1 . 4 ) } . Hence model 
(3.9.8) is globally stable. 
Model (3.9.8) is of the form, 
X = X[g(X)-Y/(l+ 
0 . 0 5 X ) ] , 
Ϋ = 7 [ - 6 / 1 3 + 0 . 1 X / U + 0.05X)] 
(3.9.8a) 
(3.9.8b) 
that 
(Χ-βΠΟ.βδΧ
2 
+ 1 1 . 7 X + 1.3) 
13(1 + 2X) (1 + 0.05X) 
(3.9.9)

--- Page 83 ---

80 
Χ = X F ( X , 7 ) , 
F*= 7G(X, Y) 
One of the conditions in Kolmogoroff's Theorem is the inequality, 
X(bF/bX) 
+ Y(bF/bY) 
< 0. 
For (3.9.8), this inequality requires that 
X[bg/bX 
+ 0 . 0 5 7 / ( 1 4- 0 . 0 5 X )
2 ] - Y/(l 
+ 0.05X) < 0. 
(3.9.10) 
(3.9.11) 
(3.9.12) 
At the point (0.5, 0.3), the expression on the left hand side in (3.9.12) is 
approximately equal to 0.0269. Hence this inequality is violated. 
We shall now establish some simple and robust conditions for global 
stability in a class of prey—predator models, in which the per capita death 
rate of the predator is a complex nonlinear function of its density. This 
model could apply to a prey—predator system in which the survival rate of 
the predators is increased up to a certain density by aggregation. 
Consider the prey—predator model; 
Let this model have a positive equilibrium at ( X * , 7 * ) . The function S is as 
displayed in (3.9.3). 
Theorem 3.9.2. Model (3.9.13) 
is globally stable if it has a positive 
equilibrium 
at 
(X\Y*)andif 
(X-X*)[g(X)-g(X
ic)+ 
awY*S(X-X*)] 
+ (Y- 
7 * ) [ ( 1 + 
wX*)/e] 
[f(Y*)-f(Y)]<0 
(3.9.14) 
for α// X > 0, 7 > 0 and (Χ, Υ) Φ (Χ*, Y"). 
Proof. The function V displayed in (3.9.6) is a suitable Liapunov function if 
c = (1 4- wX*)/e. 
The expression (3.9.14) is none other than V computed 
along solutions of (3.9.13). Hence, it is negative for X > 0, Y > 0 and (X, Y) 
Φ (X*, 7 * ) . It follows that model (3.9.13) is globally stable. 
Example 3.9.2. Consider the prey—predator model, 
X = X[g(X) - Y7(1 + 0 . 0 5 X ) ] , 
(3.9.15a) 
Ϋ = Y[-f(Y) 
+ 0 . 1 7 / ( 1 + 0 . 0 5 X ) ] , 
(3.9.15b) 
where -f(Y) 
= - ( 6 / 1 3 - 56/1220) + 7 ( 1 - y)/(l 
+ 8 7 ) and £(X) = 2 
4- X ( 4 - X ) / ( l 4- 2 X ) . The function —f(Y) has a maximum at 7 = 0.25. For 
7 > 0, it is a function with a single hump. For 7 < 0.25, it can be roughly 
approximated by —6/13 + 5 6 / 1 2 2 0 + 7, and for 7 > 0.25, it can be roughly 
X = X [ £ ( X ) - a 7 / ( l 4 - 
wX)], 
7 = Y[~f(Y) 
+ eaY/(l 
+ 
wX)]. 
(3.9.13a) 
(3.9.13b)

--- Page 84 ---

81 
approximated by ( - 6 / 1 3 + 5 6 / 1 2 0 0 + 1/8) - 7 / 8 . For 0.25 > Y > 0, the 
function —f{Y) increases monotonically as Y increases. This violates one of 
the conditions in Kolmogoroffs Theorem. 
Model (3.9.15) has a positive equilibrium at ( 6 , 1 . 4 ) . We have 
. _ -(Χ-βΫφ.βδΧ
2* 
1 1 . 7 X + 1.3) _ 
1 . 0 7 ( 7 - 1 . 4 )
2 ( 0 . 4 - h 1 2 . 2 7 ) 
V " 
13(1 + 2X) ( 1 4 - 0.05X) 
(1 4- 8 7 ) 
(3.9.16) 
By inspection, V< 0 forX > 0, 7 > 0 and (Χ,Υ) Φ ( 6 , 1 . 4 ) . Hence (3.9.15) 
is globally stable. 
3 . 1 0 . N O N L I N E A R TWO-SPECIES M O D E L S 
There is only a very limited set of simple functions which can be used to 
construct a model of an ecosystem. This imposes a major constraint in the 
construction of realistic models of ecosystems. A reason why the graphical 
method of Rosenzweig and MacArthur (1963) is so popular and effective 
for two-species interactions is that it overcomes this constraint to a large 
extent. 
Some ecologists would be delighted if there were a firm mathematical 
foundation for a vague verbal statement like the following: If each species 
of an ecosystem is self-regulating at all densities and all the interspecific 
interactions are relatively weak, the ecosystem is globally stable. In fact we 
can show that there is a precise mathematical foundation for making such a 
verbal statement for two-species interactions. However, the validity of such 
a verbal statement in multispecies interactions decreases rapidly as the num­
ber of species in an ecosystem increases. This is because the sum of all the 
interspecific interactions acting on a species in an ecosystem eventually 
overcomes the self-regulating intraspecific interactions. 
Let Nx and N2 be the densities of two interacting species. A general model 
of two-species interactions, which could be prey—predator interaction, 
competition or mutualism, is given by the equations, 
Νχ =NxFx(Nx,N2), 
N2 = N2F2(Nx,N2). 
(3.10.1) 
We do not require explicit and precise knowledge of the functions, Fx (Nl9N2 
) , 
F2(NUN2). 
We need only information similar to that which is used in a graphical 
analysis of the model. An advantage of this analytical approach is that it is 
applicable to multispecies interactions. The graphical analysis is basically 
limited to two-species interactions. A subtle and difficult problem in 
applying the graphical analysis to three-species interactions is that the angles 
between the zero isocline planes by themselves may not determine the stabi­
lity or instability of a positive equilibrium.

--- Page 85 ---

82 
Assume that model (3.10.1) has a positive equilibrium at (N*9N* ). This 
means that the zero isoclines, Fx(Nl9 
N2) = 0 and F2(Nl9 
N2) = 0, intersect 
at a positive point. The conditions which we shall prescribe will ensure that 
there is only one positive equilibrium. 
By Taylor's Theorem, model (3.10.1) may be exactly rewritten in the form, 
Ni =N1[(tFl/dN1) 
(Nx - Λ Γ ί ) + (3F, /W2) 
(N2 - J V 2 * ) ] , 
(3.10.2a) 
N2 =iNr 2[(3F 2/3JVt) (N1 -Ni) 
+ (bF2/dN2) 
(N2 -AT 2*)], 
(3.10.2b) 
where the partial derivatives are computed at a pair of points, N'9 N", along 
the line joining the points Ν and iV*. Unfortunately Taylor's Theorem does not 
explicitly give N' and N" as functions of N. For this reason, it is appropriate 
to look at these equations as the set of equations of the form, 
Ni ^NAAniNuN,) 
(Nx —AT?) + Al2(Nl9N2) 
(N2-NÎ)], 
(3.10.3a) 
N2 =N2[A21(NUN2) 
(Nx -Ni) 
+ A22(Nl9N2) 
(N2 - A? ) ] , 
(3.10.3b) 
where Au, 
A229 
Ax2, 
A21 
are certain nonlinear functions of Nt and iV2. 
From an inspection of (3.10.2) we conclude that A 
n» Ά22 are measures 
of the per capita intraspecific interactions and Al2, 
A2l 
are measures of the 
per capita interspecific interactions. 
Let Η be a constant 2 X 2 matrix with nonnegative elements. Suppose 
precise descriptions of the functions, Α π , A22, 
Al2, 
A21, 
are not available, but 
we have estimates of the values of these functions for all Nx > 0 and N2 > 0. 
Let these functions satisfy the inequalities, 
An(NuN2) 
< -HiU 
A22(Nl9 
N2) < -H229 
(3.10.4a) 
\Al2(Nl9N2)\<Hl29 
\A2l(Nl9N2)\ 
<H21 
(3.10.4b) 
for alliVi > 0 andiV 2> 0. 
If Η η > 0 and H22> 
0, condition (3.10.4a) means that each species is self-
regulating at all densities. Condition (3.10.4b) implies that the values of the 
per capita interspecific interactions are uniformly bounded at all densities. 
The expression, HnH22 
— Hi2H21, 
is a measure of the combined strength of 
the intraspecific interactions relative to the combined strength of the inter­
specific interactions. If HnH22 
—Hl2H2l 
> 0, it means that the intraspecific 
interactions are stronger than the interspecific interactions. 
Theorem 3.10.1. Model (3.10.3) 
is globally stable if (i) it has a positive equi­
librium at (N\9N\)9 
(n)Hn 
>0andH22 
> 0 and (m)HnH22 
-H12H21 
> 0. 
Proof. A suitable Liapunov function is 
V(N) = C l [N,-Ni-Ni 
ln(NJNi)] 
+ c2[N2 
-N*2 
-Niln(N2/Ni)], 
(3.10.5)

--- Page 86 ---

83 
where Ci and c2 are positive constants which will be prescribed later. 
Along solutions of (3.10.3), we have 
V^cAN, 
-Nt)[An(NuN2) 
(Nt -Nt) 
+ Α 1 2(ΛΓ„ΛΓ 2) 
(N2-Nt)] 
+ c2(N2-NÎ)[A12(NltN2) 
(JV, -Nt) 
+ A22(Nt,N2) 
(N2 - 
Nt)] 
< ο , Α , , ί Λ Γ , - N t )
2 + 
c2A22(N2-Nt)
2 
+ c,|il i a.| \Nt-Nt\ 
+ c2\A2l\|JV, 
-Nt\ 
\N2 -ΛΓ*|. 
(3.10.6) 
Conditions (3.10.4) and (3.10.6) imply that 
V< -clHn(Nl 
-Nt)
2 
-c2H22(N2-Nt)
2 
+ ctfnliV, -Nt)\N2-Nt\ 
+ c2H2l|JV, 
-Nt\ 
\N2-Νζ\. 
(3.10.7) 
Let Χι = \Ni — Nt\ andX2 
= \N2- 
N}\. We have 
V = - ( 1 / 2 ) X
T ( C # + IFC)X 
(3.10.8) 
where C = diag(Ci, c2). If there exists a positive diagonal matrix C such that 
CH + IPC is positive definite, V < 0 for all Ν Φ Ν*. 
The matrix CH + IPC is positive definite if 
2dHn 
> 0, 
2c2H22 
> 0, 
(3.10.9) 
4 c , c 2 H n H 2 2 - (ClH12 
+ c2H21)
2 
> 0. 
(3.10.10) 
Clearly the conditions, Hn 
> 0 and H22 > 0, imply that (3.10.9) is satisfied. 
Condition (3.10.10) is equivalent to the inequality, 
4 c , c 2 ( # , i H 2 2 -H12H21)- 
(ctH12 
-c2H2l)
2 
> 0. 
(3.10.11) 
If H12 Φ 0, we choose c2 = 1 and c, = H21/H12. 
This and the condition, 
HnH12 
—H12H21 
> 0, imply that condition (3.10.11) is satisfied. If H12 = 0 
a n d / / , ι Φ 0, we employ a similar argument. lfHl2 
- 0 and H2i - 0, inequality 
(3.10.10) is clearly satisfied. 
It follows that V < 0 for all Ν Φ Ν*. Hence model (3.10.3) is globally 
stable. 
Corollary 3.10.1. If V < 0 for all Nx > 0, N2 > 0 and Ν Φ Ν*, the positive 
equilibrium 
is unique. 
Proof. Along the solutions of model (3.10.1), we have 
V = 
-Nt)F1(Nl,N2)+ 
c2(N2 
-N!)F2(NUN2). 
(3.10.12) 
By inspection, V = 0 when Ν = N*. Suppose there exists a positive equilibrium 
at ΛΓ' which is not equal to N*. We have N[ > 0, N2 > 0 and 
Fi (Nu N'2) = 0, 
F2(N[9 
Νϊ) = 0. 
(3.10.13)

--- Page 87 ---

84 
From (3.10.12) we have V(N[, N2) = 0. This contradicts the assumption that 
V < 0 for all Nx > 0, N2 > 0 and Ν Φ Ν*. It follows that (3.10.1) has a unique 
positive equilibrium. 
Example 3.10.1. We shall examine a slightly modified version of Schoener's 
(1974) model for competition between two species with pure interference 
and fixed energy input to the population. Schoener's model is modified to 
ensure that (Ν^Ν^ remains finite as Nt 
0+ for i = 1 and 2. Let rh Ih C, and 
et for i = 1, 2 be positive constants. The modified Schoener's model for 
competition between two species is 
Nx = rxNx [Ix /(Nx + ex) - yxxNx 
" T n ^ " cx ] , 
(3.10.14a) 
N2=r2N2[I2/(N2+ 
e2)-y2XNx 
- y
2
2 N
2 - c
2 ] . 
(3.10.14b) 
From (3.10.1) and (3.10.14), we get 
bFJbN, 
--IJiNx 
+ e
1 )
2 - r
l
7
u , 
(3.10.15a) 
dF2/W2 
= -I2/(N2 
+ e 2 )
2 - r2y22, 
(3.10.15b) 
\dFJbN2\ 
= r
l
7
l
2 , 
IdFjmd 
= r2y21. 
(3.10.15c) 
A suitable Η matrix is defined by the equations: 
# i i
= r i 7 i i , 
H22=r2y22, 
Ηι2 
= Γ ^
1
2 , 
H2i=r2y2i. 
(3.10.16) 
From an inspection of (3.10.15) and (3.10.16), we have 
bFl/bNl 
< - Γ ! 7 η , 
dF2/dN2 
<—r2y22, 
(3.10.17a) 
\dFxldN2\ 
< r l 7 l 2 , 
\dF2/dNx\ 
< r2y2i. 
(3.10.17b) 
By Theorem 3.10.1, model (3.10.14) is globally stable if (i) it has a positive 
equilibrium at (NUN2), 
(ii) r
l
7
l
l > 0, r2y22 
> 0 and (iii) rxr2yny22 
— 
rxr2yl2y2X 
> 0. As rx and r 2 are positive, these inequalities may be replaced by the 
conditions, 7
l
l > 0, 7
2
2 > 0 and 7 n
7
2
2 —712721 > 0. 
It is interesting to note that if these conditions are satisfied, then model 
(3.10.14) has exactly the same qualitative dynamic behavior as the associated 
Lotka—Volterra model, 
^ i = W i [ - 7 i i ( # i -Nt)-yX2(N2-Ni)], 
(3.10.18a) 
N2=N2[-y2X(Nx 
-Nx*)-y22(N2-Nt)]9 
(3.10.18b) 
where (ATf, N*) is the positive equilibrium of (3.10.14). This follows because 
(3.10.18) is globally stable if (ΛΓ*, ΝΪ) is positive, yxx 
> 0, 7
2
2 > 0 and 
7 n722 "~~ 712721 > 0· This observation shows that Lotka—Volterra models 
are more robust than some ecologists believe. Basically their static criterion 
forjudging whether a model is correct or not is not necessarily valid from the 
qualitative and dynamical point of view.

--- Page 88 ---

85 
Example 3.10.2. An important problem in the management of an ecosystem 
is whether the system is stable if it is enriched or harvested. Suppose we have 
a two-species ecosystem. Let Ex and E2 be measures of the constant efforts 
applied in the harvesting of the populations. A model of the exploited 
ecosystem is 
Let Gx (Nu N2) = FX(NX, 
N2) - Ex and G2(Nu 
N2) = F2(NU 
N2) - E2. If Fx 
and F2 satisfy the inequalities in (3.10.4) so will Gx and G 2 because Ex and 
E2 are constants. Hence model (3.10.19) is globally stable if (i) the unex-
ploited model (3.10.1) satisfies Theorem 3.10.1 and (ii) model (3.10.19) has 
a positive equilibrium. It follows that such systems are robust under constant 
effort harvesting policies. 
3 . 1 1 . R E G I O N O F U L T I M A T E C O N F I N E M E N T 
May (1972) pointed out that the eigenvalue analysis may lead to an 
erroneous conclusion that a model ecosystem is unstable. This is because a 
model ecosystem with an unstable equilibrium could have a globally stable 
and acceptable limit cycle. The populations in a model ecosystem with a 
stable limit cycle will eventually have regular oscillations. There are a number 
of well known examples of regular fluctuations of populations Odum, 1 9 7 1 , 
(p. 1 8 8 ) especially among animal populations in the Arctic. This suggests 
that limit cycles are important in theoretical ecology. 
The main mathematical tool available for the study of limit cycles is the 
Poincare—Bendixon theorem. Unfortunately it is limited to models with 
two state variables. This has prompted May (1974) to state on p. 9 4 of his 
well known book that ecology would benefit from a mathematical break­
through which could extend this type of analysis to problems with three or 
more state variables. In fact, there is a mathematical method available. 
However, it is not well developed and has seldom been used even for the 
analysis of a physical system. The concept of a region of ultimate confinement 
includes a limit cycle as a special case and it is valid for problems with three 
or more state variables. 
The best method to estimate a region of ultimate confinement is to use a 
Liapunov-like function. This function has the usual properties of a Liapunov 
function except that its time derivative along solutions of a model can be 
positive inside a region of ultimate confinement. A region of ultimate con­
finement has slightly different properties from a region of ultimate bounded-
ness (Aggarwal, 1972). The trajectories of a model which begin inside a 
region of ultimate confinement cannot leave it at all. In contrast, the trajec­
tories of a model are permitted to leave a region of ultimate boundedness for 
some intermediate time periods. 
Nx =NX 
[Fx(NXyN2)~Ex], 
N2=N2[F2(NUN2)-E2]. 
(3.10.19a) 
(3.10.19b)

--- Page 89 ---

86 
Let W(N) be a Liapunov-like function for estimating a region of ultimate 
confinement for the model, 
Ni = NiFi(Nl9N29...9Nm) 
(3.11.1) 
where / = 1, 2, . . . , m. Let LQ and L
u be positive constants, where LQ > L
u . 
L e t S = {N\ W(N)<LU}9 
Υ = {Ν \ LQ > W(N)> L
u } and Ω = S u 7 (union 
of S and Y). Let iV* be a point in the region of ultimate confinement of 
(3.11.1). Note thatiV* need not be an equilibrium point. The function W(N) 
is a Liapunov-like function if it behaves like a Liapunov function in Y. Its 
behavior in S need not be specified. 
However, in practice a Liapunov-like function W(N) has the following 
properties: 
(i) W(N) > 0 for all N G Ω and Ν Φ Ν*. 
(ii) In Ω, W(N) has a unique global minimum equal to zero at N*. 
(iii) In Y9 the level surface, W(N) = Κ for each admissible positive value of 
K9 is a closed surface. 
(iv) The time derivative along solutions of the model, 
™ dW 
ww= I 7z;
Ni
Fi(
N)> 
(
3·
η·
2) 
i = 1
 
ö
7
V i 
must be nonpositive for all N G Y. 
If Ω is equal to the positive orthant Γ = {Ν \ Nt > 0, i = 1, 2, . . . , m}, we 
replace (iii) by the following condition: 
(iii) W(N) - > » a s JVj -> 0+ or Nt ->
 0 0 for i = 1, 2, . . . , m. 
This is an important case in theoretical ecology. It means that if a distur­
bance does not directly cause the extinction of any species and if the model 
ecosystem is left alone for t > 0, the natural dynamics of the system would 
drive the state into the region of ultimate confinement. If this region is 
bounded away from the boundary planes N( = 0, this system property clearly 
ensures the survival of the ecosystem. 
Example 3.11.1. Consider the single variable model: 
Ν = ΛΓ[1η Ν - (In N)
3 ] = 
NF(N). 
It has nontrivial equilibria at N* = e
_ 1 , N* = 1 and N* 
exponential constant. 
The function F(N) has the following properties: 
(i) If e"
1 > N> 
09F(N)> 
0, 
(ii) if 1 > iV > e"
1,F(iV)< 0, 
(iii) if 1 > Ν > e, F(N) > 0, and 
(iv) if i\T> 19F(N)< 
0. 
(3.11.3) 
= e, where e is the

--- Page 90 ---

87 
Hence (a) the equilibrium N* = e"
1 is stable, (b) the equilibrium N* = 1 is 
unstable and (c) the equilibrium N* = e is stable. 
A suitable Liapunov-like function is 
W(N)= 
{ln(JV/2)}
2. 
(3.11.4) 
It has a global minimum at N' = 2. It tends to infinity as Ν 
0 or Ν 
°°. 
Along solutions of (3.11.3), we have 
W = 4 [ln(JV/2)] [In Ν - (In N)
3 
]. 
Let y = {ΛΠ W(N) > [ l n ( e / 2 ) ]
2 }. Clearly # < 0 for all Ne 
Y. Hence an esti­
mate of the region of ultimate confinement of model (3.11.3) is S = {Ν \ W(N) 
< [ln(e/2)]
2 } . By direct arguments, it can be shown that the smallest region 
of ultimate confinement is {Ν \ e> N> 
e'
1}. 
Example 3.11.2. Consider the model: 
Nx = Nx[lnN2 
+ (1 - i 2
2 ) l n JV\], 
(3.11.5a) 
N2 = N2[- 
In Nx + (1 - R
2) In N2], 
(3.11.5b) 
where 
R
2 = (lniVO
2 + ( l n N 2 )
2 . 
(3.11.6) 
This model has an unstable positive equilibrium at (1,1). A suitable 
Liapunov-like function is W(N) = R
2. Along solutions of (3.11.5), we have 
W = 2R
2(1-R
2). 
(3.11.7) 
Clearly W < 0 for R
2 > 1, and W > 0 for R
2 < 1. It follows that any solution 
which begins in the region, {Ν \ 1 > R
2 > 0 } , tends to the limit cycle, 
R
2 = (ΙηΛΓχ)
2 + (IniVl) = 1. 
(3.11.8) 
Similarly any solution which begins in the region, {Ν \ R
2 > 1, Nx > 0, 
N2 > 0 } , tends to the same limit cycle. Fig. 3.11.1 displays the limit cycle 
and some typical trajectories from the interior and exterior regions of it. 
Except for the initial state (1,1), the limit cycle is globally stable. The region, 
S = {Ν I W(N) < 1 } , is a region of ultimate confinement. It is in fact the 
smallest region of ultimate confinement; we have such a good estimate of it 
because the limit cycle is a level surface of the Liapunov-like function W(N). 
Example 3.11.3. We shall now examine a model with three state variables, in 
which the region of ultimate confinement has only a finite region of stability. 
The model is as follows: 
Nx =N1[lnN2 
+ ( l - i ?
2 ) ( 2 - ß
2 ) l n i V
1 ] , 
(3.11.9a) 
N2=N2[-kiN1 
+ ( 1 - E
2 ) ( 2 - E
2 ) l n i V 2 ] , 
(3.11.9b)

--- Page 91 ---

8 8 
ο 
ο ο 
° .00 
1.00 
2 . 0 0 
3 . 0 0 
4 . 0 0 
5 . 0 0 
Fig. 3 . 1 1 . 1 . Limit cycle and converging trajectories of model ( 3 . 1 1 . 5 ) . 
N2 = N3[(1-R
2) 
(2-R
2)lnN3] 
(3.11.9c) 
where 
R
2 = (InN,)
2 
+ (lniV 2)
2 4- (lniV 3)
2. 
(3.11.10) 
This model has an unstable positive equilibrium at (1,1,1). The function, 
W(NiyN2, 
N3) = i?
2, is a suitable Liapunov-like function. It has all the properties 
of a Liapunov function in the positive region except that W is positive in the 
region, W
2 < 1, without the point (1,1,1). Along solutions of (3.11.9), we 
have 
W = 2R
2(1 — R
2) (2-R
2 
). 
(3.11.11) 
In this model we have a continuum of limit cycles. On the hypersurface, 
R
2 - 1, there is one limit cycle for each value of N3. This follows because on 
the hypersurface, R
2 = 1, N3 = 0. 
In this example the smallest region of ultimate confinement is S = {Ν \ W(N) 
< 1 } . All solutions which begin in the exterior region, {Ν \ 2 > W(N) > 1 } , 
will ultimately enter the remain in the region S. Also all solutions which begin 
in the interior region, 1 > W > 0, will tend to the hypersurface, W = 1. In an 
analysis of a region of ultimate confinement, we are usually not interested in 
or able to examine what happens inside the region. 
It is interesting and important to note that a definition of a concept of 
"inside" or "outside" in an m-dimensional space when m > 2, requires a 
closed, simply connected and bounded hypersurface of (m — 1) dimensions.

--- Page 92 ---

89 
A simple way to construct such a hypersurface is to employ a level surface of 
a Liapunov-like function. 
The method of using Liapunov-like functions to estimate regions of ultimate 
confinement in a dynamic model poses a great challenge to applied mathema­
ticians to use it effectively in the analysis of realistic models of ecosystems. 
It is clearly more difficult to use than the direct method of Liapunov for 
establishing global stability. The reason for this is that it demands that the 
level surfaces of a suitable Liapunov-like function must be related to the exact 
boundaries of the smallest region of ultimate confinement. 
3 . 1 2 N O N V U L N E R A B I L I T Y 
In the real world ecosystems are continually disturbed by external forces 
like migrating populations, weather changes, pollution and outbreaks of fire 
and disease. It is desirable that the state of an ecosystem remains in an 
acceptable region of its state space in spite of large and continual disturbances. 
The concept of nonvulnerability was developed (Goh, 1 9 7 1 , 1 9 7 5 , 1 9 7 6 a) 
to describe a system's ability to withstand unpredictable, large and continual 
disturbances. The nonvulnerability approach to describe a system's response 
to unpredictable disturbances is more effective than that based on the theory 
of stochastic differential equations. The latter leads to the Kolmogoroff or the 
Fokker—Planck equation which poses very serious computational problems, 
except in very simple population problems. 
Contributions to the concept of nonvulnerability and related concepts of 
practical stability, resilience and total stability have been made by LaSalle 
and Lefschetz (1961), Lashiher and Storey (1972), Holling (1973), Harrison 
(1979 a), Vincent and Anderson (1979), and Vincent and Skowronksi (1979). 
Consider the model ecosystem: 
Ni = NiFi(Nu 
N29...9Nm\ul9u29...9un]9 
(3.12.1) 
where i = 1, 2, . . . , m. The essential elements of a definition of nonvulnera­
bility are, (i) a specified time interval [09T], 
(ii) a set S(0) which contains 
desirable states of the system, (iii) a set Z(T) which contains undesirable 
states and (iv) a given class of continual disturbances, { ^ ( t ) , u2(t)9 
... , 
un(t)}. 
It is reasonable to assume that we have good estimates of the bounds for 
the disturbance functions, ux(t)9 
u2(t)9 
... , un(t). 
Let 
- f r < u r ( 0 < £ r , 
(3.12.2) 
where ξ r and ξ Γ, for r = l , 2 , 
are constants. Assume that the set of 
admissible functions, {ul9 u29 ... , un}9 
is piecewise continuous. For con­
venience we shall denote the set of admissible unpredictable disturbances by 
U. 
By definition, system (3.12.1) is vulnerable during the time interval [0,T] 
if there exists an admissible set of functions, u^t), u2(t)9 
... , un(t)9 
which

--- Page 93 ---

90 
could drive the system from an initial state in S(0) to a state in Z(T) during 
the time interval [0,T]. Otherwise, the system is said to be nonvulnerable. 
Clearly in this concept of vulnerability we adopt the most pessimistic point 
of view. For this reason we could have a more balanced view if in practice 
the parameters ξr and ξ Γ for r = 1, 2, . . . , n, are underestimated. 
The above vulnerability problem can be formulated as an optimal control 
problem. Unfortunately at present, the computational cost in this accessory 
optimal control problem is high in problems with more than two state variables. 
The most effective approach is to make a conservative analysis with the help 
of Liapunov functions. 
Let V(N) denote a suitable Liapunov function for model (3.12.1) in the 
absence of disturbances, i.e. when ul = 0, u2 = 0, . . . , un = 0. It is convenient 
to define the sets, S(0) and Z(T), in terms of V(N). Let Vs and Vz be positive 
constants. Let S(0) = {Ν \ V(N) < Vs } and Z(T) = {Ν \ V(N) >VZ}. 
Along 
solutions of (3.12.1), we have 
V(N;u) = I 
^ 
NtFAN-ju). 
(3.12.3) 
Strictly speaking, when V(N) is used for this type of analysis it is not a 
Liapunov function. This is because we do not require V to be negative 
definite in the positive orthant. For this reason it is more accurate to call 
it a Liapunov-like function. 
Theorem 3.12.1. Model (3.12.1) 
is nonvulnerable 
relative to the sets, U, S(0) 
and Z(T), during the time interval [0,T] if the global maximum of V(N;u) 
for allueU 
and for all Ne {N\VS< 
V(N) + Vz } is less than (Vz - Vs)/T. 
Proof. By assumption, 
V<(VZ-VS)/T 
(3.12.4) 
for all u e U and for all N e {Ν \ Vs < V(N) <VZ}. 
This implies that any 
trajectory which begins on the hypersurface, {Ν \ V(N) = Vs }, cannot be 
driven to the set Z(T) during the time interval [ 0 , T ] . Any trajectory of 
(3.12.1) which begins inside the set, {N\ V(N) < Vs}9 must first intersect 
the hypersurface, V(N) = Vs, before it is driven towards Z(T). It follows that 
the system cannot be driven from the set S(0) to the set Z(T) during the time 
interval [ 0 , T ] . 
Theorem 3.12.2. Model (3.12.1) 
is nonvulnerable 
relative to the sets, U, 
S(0) and Z(«>), during the time interval [0,«>] ,if there exists a positive 
number G such that Vs < G < Vz, and if the global maximum of V(N;u) 
for allueU 
and for all N e {Ν \ V(N) = G} is negative.

--- Page 94 ---

91 
Proof. The assumption that V(N'M) 
is negative for all u e U and for all 
Ne 
{N\ V(N) = G}implies that all trajectories of model (3.12.1) which 
begin on the hypersurface, V(N) = G, will enter and remain indefinitely in 
the region, {Ν \ V(N) < G}. As G < VZ, it follows that the system cannot 
be driven from the region, {Ν | V(N) < G } , to the set Z(«>). The set S(0) is 
a subset of the set, {Ν \ V(N) < G}. Hence the system is nonvulnerable 
relative to the sets, 17, S(0) and Z(°°), during the time interval [0,°°]. 
Theorems 3.12.1 and 3.12.2 are potentially very effective sufficient con­
ditions for a system to be nonvulnerable. Unfortunately, a major obstacle 
to the application of these theorems is due to the rudimentary nature of 
numerical algorithms for computing the global maximum of a function of 
many variables (Dixon and Szego, 1975). In Chapter 6 we shall discuss an 
algebraic method which can be applied to model ecosystems with many 
species. However, it is a very conservative estimate of the set S(0) in an 
analysis on whether a system is vulnerable or not. 
Example 3.12.1. Let u(t) be a description of the effects of a disturbance on 
the dynamics of a single-species population. When u(t) = 0, let the population 
be described by the logistic model. Assume that the disturbance affects the 
population on a percentage basis during a unit time interval. Examples of this 
type of disturbance are the mortalities caused by weather and diseases. It 
follows that a model of a continually disturbed population is given by the 
equation, 
If the disturbance acts favorably on the population, e.g. a boost in its food 
supply, the function u(t) is negative. If the disturbance is adverse, e.g. a 
disease, u(t) is positive. Assume that we have 
where ξ and £ are constants. 
In this simple model, the worst possible way for the disturbance to act on 
the population is for u(t) to be equal to ξ for all time. If this occurs, we have 
It follows that a necessary and sufficient condition for the disturbed popu­
lation to persist in this pessimistic approach is ξ < r. 
This suggests that a way to study the vulnerability or nonvulnerability of 
a system is to pose and answer the following question: what is the worst 
possible way for a prescribed set of disturbances to act on the dynamics 
of a system? One way to answer this question is to set up and analyse an 
accessory optimal control problem. This is a practical method for problems 
with a few species. 
Ν = (r/K)N(K — N) — u(t)N. 
(3.12.5) 
- r < w ( t ) < É 
(3.12.6) 
N = 
N[(r-ï)-(r/K)N], 
(3.12.7)

--- Page 95 ---

92 
Let us suppose that the disturbance u(t) acts in a different manner on the 
population dynamics. For example, let the disturbance be due to prédation by 
a very efficient and self-regulating predator. In this case, we have 
We shall assume that u(t) satisfies the inequality (3.12.6). 
We can deduce the system's response to u(t) by comparing model (3.12.8) 
with a model of a fishery which is subjected to a constant quota harvesting 
policy. The latter is discussed in Section 3.5. We conclude that system 
(3.12.8) is nonvulnerable for all time if 
S(0) ={N\N> 
0/2) [K-^iK
2 
- 
4£tf/r)]}, 
Z(°°)= 
{N\N 
= 0} 
and 
£ < 
rK/4. 
If ξ > rK/4, the population is rapidly driven to extinction. 
Example 3.12.2. Let Nx and N2 be the densities of a prey and its predator 
respectively. Suppose a model of the prey—predator system which is sub­
jected to continual disturbances is given by the equations: 
Nx =Nt 
[22-O.L/V! - 2 . 1 i V 2 ] + ux(t)Nu 
(3.12.9a) 
N2 = N2 [ - 5 + 0 . 7 ^ - 0.2iV 2] 4- u2(t)N2. 
(3.12.9b) 
The nontrivial equilibrium of the undisturbed system is at (10,10). Let the 
disturbance functions, Ui(t) and u2(t), be piecewise continuous and satisfy 
the a priori estimates: 
Let U denote this set of functions, {ui(t), 
u2(t)}. 
A very good Liapunov function for the undisturbed system is 
V(N) = N
i - 1 0 - lOlnfiVJlO) 4- 2.94[N 2 - 10 -101n(iV 2/10)]. 
(3.12.11) 
Let Vs = 0.05361 and Vz = 0.23143. The level surfaces, V(N) = Vs and 
V(N) = Vz, pass through the points (9,10) and (8,10) respectively. The level 
surface, V(N) = Vz,is 
closest to the axes planes at the point (8,10). Let us 
define the sets, S(0) and Z(T), as follows: 
S(0) = {Ν I V(N) < 0.05361} 
(3.12.12) 
Ν = (r/K)N(K 
-N)-u(t). 
(3.12.8) 
0.11 < Ui(t) < 0.11, 
i = l , 2 . 
(3.12.10) 
and 
Z(T) = {Ν I V(N) > 0.23143}. 
(3.12.13) 
We shall establish that (3.12.9) is nonvulnerable relative to the sets, S(0), 
Z(T) and C7, during the time interval, [0,T] = [0, 2 . 3 8 ] . 
The time derivative of V(N) along solutions of (3.12.9) is

--- Page 96 ---

93 
V(N : u) = -0.1(Νί 
- ΙΟ)
2 - 0 . 0 6 2 ^ - 10) (Ν2 - 10) - 0.294(iV 2 - ΙΟ)
2 
- ιΐχ (Νχ - 10) - 2.94 u2(N2 
- 1 0 ) . 
(3.12.14) 
By means of a minimizing algorithm (Fletcher, 1975), we find that the global 
maximum of V(N : u) for all u G U and for all N G {Ν \ 0.05361 < V(N) 
< 0 . 2 3 1 4 3 } is 0.07439. The corresponding values of u and Ν are as follows: 
ux = 0.11, 
u2 = - 0 . 1 1 , 
Nx = 10.085, 
N2 = 9.641. 
We find that in this case, 
max V = 0.07437 < (Vz 
- Vs )/T = 0.07471. 
Thus, in spite of continual disturbances, any trajectory of (3.12.9) which 
begins inside the set, {Ν \ V(N) < 0 . 0 5 3 6 1 } , will remain inside the set, 
{Ν I V(N) < 0 . 2 3 1 4 3 } . Hence the system is nonvulnerable relative to the 
prescribed conditions. 
Suppose we want the trajectories of model (3.12.9) to remain indefinitely 
inside an acceptable region S(0) if they initiate in it. We have to employ 
Theorem 3.12.2. The set S(0) can be larger than that displayed in (3.12.12). 
Let the set 
S(0) = {Ν I V(N) < 0 . 1 4 9 3 1 } . 
(3.12.15) 
The level surface, V(N) = 0.14931, passes through the point (8.37,10). Let 
G be any positive number that is larger than 0.14931 and let Vz be a con­
stant that is greater than G. Suppose it is undesirable for the state of the 
system to be in the set Z(«>), where 
Z ( o o ) = {N\ 
V(N)> 
V z } . 
We find that the global maximum of V(N : u) for all u G U and Ν 
G {Ν I G > V(N) > 0.14931 }is —0.00035. This occurs for the following set 
of values: 
ux = - 0 . 1 1 , 
u2 = 0.11, 
Nx = 9.5114, 
N2 = 10.428 
As V(N : u) is negative in the set {Ν | V(N) = 0 . 1 4 9 3 1 } , any solution of 
(3.10.9) which begins in S(0) remains in it indefinitely. Hence the system is 
non vulnerable. 
In this example we have employed a Liapunov-like function whose global 
minimum occurs at the equilibrium of the undisturbed system. This property 
of the Liapunov-like function is unnecessary. We only require that the global 
minimum occurs at a point inside the set S(0). 
3 . 1 3 . D I S C R E T E T I M E M O D E L S : L O C A L S T A B I L I T Y 
There is an increasing interest in the use of difference equations for the 
modelling of populations (Van der Vaart, 1973; Innis, 1974 a; Beddington et al.,

--- Page 97 ---

94 
1976; Hassell and Comins, 1976; Goh, 1 9 7 6 b; May, 1976 a). A difference 
equation representation of a dynamic system is also called a discrete time 
model. A reason for this upsurge of interest in discrete time models is that 
they can provide realistic representations of ecosystems when differential 
equations fail to do so. Moreover, the numerical solution of a differential 
equation requires that the differential equation should be converted into 
a difference equation before the digital computer can churn out the solution. 
Unfortunately the theory of nonlinear difference equations is very limited 
in comparison with the theory of nonlinear differential equations. Further­
more, even the simplest nonlinear difference equation can exhibit a very 
complex range of behavior (May, 1976 a). A solution of a discrete time 
model is just a sequence of points in the state space. This lack of continuity 
in the solutions of a difference equation makes any analysis of the solutions 
of a difference equation in the state space a difficult task. 
The standard method for the analysis of the stability of a discrete time 
model examines the eigenvalues of a certain matrix computed at an equilibrium. 
Unfortunately this method can guarantee stability only relative to small 
perturbations of the initial state from an equilibrium. It is only a small step 
towards understanding the stability of a model ecosystem when it is subjected 
to realistic perturbations. For models of one or two species we often have 
graphical insight into a model. This turns a local stability analysis into some­
thing useful. 
If a discrete time model represents a viable ecosystem, it must be stable 
relative to finite perturbations of the initial state from an equilibrium or 
it must have the property that solutions which begin in an acceptable region 
of the state space will remain in the same region if there are no further 
perturbations. One way to establish that a discrete time model is globally 
stable is by means of a Liapunov function. Generally the construction of a 
good Liapunov function requires considerable ingenuity and experimentation. 
Fortunately for a class of model ecosystem we can construct effective 
Liapunov functions by means of a biologically meaningful principle. This 
principle (Goh, 1977 a) states that a viable population must dissipate energy 
at high densities and it must absorb energy at low densities. More precisely, 
such energy exchanges are relative to the continual energy input which is 
necessary to maintain the population at its equilibrium. In a multi-species 
system a simple way to construct a Liapunov function is to use a positive 
linear combination of functions which serve as effective Liapunov functions 
for a single-species population. This is by no means the only way to construct 
an effective Liapunov function for a multispecies model. 
Here we shall study conditions for local stability in population models. At 
time t let Nt(t) denote the density of the ith species in aninteraction among 
m species. For convenience we shall use Nt in place of ΛΓ^ί). In order to 
distinguish N^t + 1) from Nt(t) we shall retain the argument oiN^t 
+ 1). 
Suppose an interaction among m species can be represented by the set of 
nonlinear difference equations,

--- Page 98 ---

95 
A W + l ) = G§[NU 
N29...,Nm], 
(3.13.1) 
where i = 1, 2, . . . , m. 
Let (iV*, AT*, . . . , Nm ) be a positive equilibrium of this model. By defi­
nition, we have 
Nt > 0, Ni > 0, . . . , Nm 
> 0 
(3.13.2) 
and 
Gi (Ν
4) = Nî, G2 (Ν*) = NI ... , G m (Ν*) = Nm . 
(3.13.3) 
The equilibrium Ν* is locally stable if every solution of (3.13.1) which 
begins near N* moves into a decreasing neighbourhood of N* as t increases. 
Let 
X^Ni-N? 
(3.13.4) 
for ι
 = 1, 2, . . . , m. Substitute these equations into (3.13.1) and ignore 
second and higher order terms in X ; we get 
X ( t + 1 ) = 
y 
— 
Xj 
(3.13.5) 
7 = 1
 
; 
where / = 1, 2, . . . , m and the partial derivatives are computed at N*. In 
matrix notation this system of equation has the form, 
X(t+l)=AX(t) 
(3.13.6) 
where (Au) = 
(dGJdNj). 
Theorem 3.13.1. Model (3.13.1) 
has a locally stable equilibrium at N* if the 
magnitudes of all the eigenvalues of the matrix A are less than one. 
Proof. Let us guess that a solution of (3.13.6) is of the form, 
X(£) = X ' F , 
(3.13.7) 
where λ is a constant and F is a constant vector. This is a solution if 
λ*
+1Υ 
= Αλ'Υ. 
(3.13.8) 
This condition implies that 
(A -XI)Y 
= 0, 
(3.13.9) 
where / is an identity matrix. Hence \
tY is a solution of (3.13.6) if λ is an 
eigenvalue of A and Y is the corresponding eigenvector. 
Among ecological models it is extremely rare for the matrix A to have 
repeated eigenvalues. As (3.13.6) is a linear system, any linear combination 
of a set of solutions is a solution of the system. Hence, if λι, λ 2, . . . , X m are 
distinct eigenvalues and Yu 
Y2, ... , Ym are corresponding eigenvectors, the 
general solution of (3.13.6) is

--- Page 99 ---

96 
X(t)= 
J 
cMY,, 
(3.13.10) 
i = 1 
where c
u c 2 , . . . , cm 
are arbitrary constants. 
In general λ is a complex number which can be rewritten in the form, 
Xj = Rj (cos β ι + i sin 0 y). 
(3.13.11) 
where i
2 = —1 and Rj is the magnitude of Xj. It follows that 
Xj = Rj[cos(t6j) 
+ i sin(i0 ;.)]. 
(3.13.12) 
Clearly, if Rj < 1, Rj -> 0 as ί 
°°. Hence if the magnitudes of all the eigen­
values of A are less than one, all the solutions of (3.13.6) tend to 0 as t
 
0 0 . 
It follows the equilibrium N* of (3.13.1) is locally stable. 
Very often we have population models in the form, 
AT, (f+1) = NiFi(NuN29 
...,Nm) 
(3.13.13) 
where i = 1, 2, . . . , m. This reformulation of a population model provides 
some useful insights into a population model. 
At a positive equilibrium N*9 we have 
F , (JV*) = 1, F 2(iV*) = 1, . . . , Fm (N*) = 1. 
(3.13.14) 
Let dij be Kronecker deltas. By definition, 
6 < f = l, 
δ ι 7 = 0 
i f i ^ ; . 
(3.13.15) 
Theorem 3.13.2. Model (3.13.13) 
has a locally stable equilibrium at N* if 
the magnitudes of all the eigenvalues of the matrix, 
A = (du +Ni
irdFi(N*)/dNj), 
(3.13.16) 
are less than one. 
Proof. Substitute X, = Nt — iV/into (3.13.13) and ignore second and higher 
order terms in X; we get 
Xi(t+l) 
= Xi+ 
V 
N*—Xj 
(3.13.17) 
; = 
1 
where / = 1, 2, . . . , m. Compare (3.13.17) with (3.13.6); the result follows 
immediately. 
A model of a single species population is 
N(t + 1)=NF(N). 
(3.13.18) 
We have a locally stable positive equilibrium at N* if N* > 0. F(N*) = 1 and 
II + N*dF/dN\ < 1 => - 2 < N*dF/dN 
< 0. 
(3.13.19)

--- Page 100 ---

97 
Example 3.13.1. Let Ν be the density of a single species population in the 
ith generation and N(t+1) 
denote the density in the (£+l)th generation. 
Suppose the population has no overlapping generations. A popular model 
(Ricker, 1 9 5 4 ) of this type of population is 
N(t+1) 
= Ν exp[r(l -Ν/Κ)], 
(3.13.20) 
where r is a measure of the per capita birth rate, and Κ is the "carrying 
capacity" of the environment. 
This model has a positive equilibrium at Ν = Κ. For Ν = K, bF/bN = (—r/K). 
Hence the positive equilibrium is locally stable if 
- 2 < K(-r/K) 
< 0 = » 0 < r < 2 . 
(3.13.21) 
It is shown in the next chapter that the model is globally stable if r satisfies 
this inequality. 
Consider a population with overlapping generations and in which the 
adults breed once in each generation. Let Ν denote the number of female 
adults at time t and let S be the fraction of female adults which survive in 
one generation. A model of such a population is, 
N(t+1) 
=SN+N 
exp[r(l -N/K)]. 
(3.13.22) 
In this case the parameters, r and K, do not have the same biological interpre­
tations as before. This model has an equilibrium at N* = K[l — (l/r)ln(l — S)]. 
This implies that exp[r(l — N*/K)] 
= (1 — S). If r is negative, N* is positive 
only if 
r< l n ( l - S ) . 
(3.13.23) 
By means of (3.13.19), the positive equilibrium is locally stable if 
- 2 < (1 - S)[-r 
+ ln(l - S)] < 0 =• ln(l - S) < r 
a n d r < 2 / ( 1 - S ) + l n ( l - S ) . 
(3.13.24) 
Clearly, (3.13.23) and (3.13.24) are incompatible and hence r must be 
positive. The function 2/(1 — S) + ln(l — S) increases monotonically as S 
increases from zero to one. When S = 0.9, we require that r satisfies the 
weaker inequality, 0 < r < 17.7. It follows that model (3.13.22) is more 
stable than model (3.13.20) if S is nonzero. This increase in stability is due 
to the fact that the adult population acts like a reservoir which damps out 
fluctuations in the number of maturing females which are being recruited into 
the adult population. 
Example 3.13.2. A flexible model (Hassell, 1 9 7 5 ) of a single-species population 
with nonoverlapping generations is 
N(t+1) 
= \N/(l+aN)
b 
(3.13.25) 
where λ, a and b are positive constants.

--- Page 101 ---

98 
It has a positive equilibrium at 
N=(\
1/b 
- l ) / a . 
Condition (3.13.19) implies that this is locally stable if 
0 < b ( l - \ -
1
/
b ) < 2. 
Hassell (1975) established that this model has stable limit cycles when this 
inequality is violated. 
For ecosystems with two or three species of a single-species population 
with a time delay, the Schur—Cohn criterion is a very useful test of local 
stability for varying parameter values. For systems with four or more species 
or a single-species population with a long time delay, the simplest way to 
state the Schur—Cohn criterion is in terms of inners (Jury, 1974). 
In using the Schur—Cohn condition we must first compute the eigenvalue 
equation of the matrix displayed in (3.13.6) or (3.13.16). Let the eigenvalue 
equation for a two-species system be 
λ
2 + ax\ + a2 = 0 . 
(3.13.26) 
The magnitudes of all the eigenvalues associated with this equation are less 
than one if and only if 
| α 2 | < 1 
and 
\ax\ < |1 + σ 2|. 
Let the eigenvalue equation of a population model be 
λ
3 + α
ι λ
2 + α 2λ + α 3 = 0. 
(3.13.27) 
The magnitudes of all the eigenvalues associated with this equation are less 
than one if and only if 
1 - a \ > \axa3 - a
2 \ 
and 
|1 4- a21 > \ax + a3\ 
(3.13.28) 
Note the first inequality implies \a3 \ < 1. 
Example 13.13.3. We shall use the Schur—Cohn criterion to study how two 
parameters affect the conditions for local stability in a model of two com­
puting species (Hassell and Comins, 1976). Let us consider the model, 
Nx(t+1) 
= Λ Μ ί ) / [ 0 . 3 + 0.2ΛΓΛ0+ 
aN2(t)]\ 
7V 2(i+l)=iV 2(f)/[0.4 + 0.'IV 1(i)+ 0 . 5 Ν 2 ( ί ) ]
2 
where a and s are positive parameters. 
The non trivial equilibrium (Nx, N2 ) is a solution of the system of equations: 
0 . 3 + 0.2 Ν ι + aN2 = 1 , 
0.4 + 0.1Νί 
+ 0.5ΛΓ2 = 1 => Ν* = (3.5 - 6α), Νζ = 0.5/(1 - α). 
This equilibrium is positive if a < 35/60.

--- Page 102 ---

99 
The positive equilibrium is locally stable if and only if the magnitudes of 
all the eigenvalues of the matrix 
il-0.2sNt 
saNt\ 
\-O.2N; 
1-NÏJ 
are less than one. Its eigenvalue equation is 
λ
2 - (1 + Ζ)λ + Ζ + 0.25(1 - a)N*NÎ 
= 0 
where Ζ = 1 - 0.2sN* - 
Ν*. 
The Schur—Cohn stability criterion requires that 
\Z + 0.2s(l - a) N*NÎ\ < 1, 
(3.13.29) 
|1 + Z | < |1 + Z + 0 . 2 s ( l - a)N*N*\. 
(3.13.30) 
Condition (3.13.30) implies that 
a< 
1. 
This condition is equivalent to the condition, (0.2) (0.5) — 0.1a < 0. It means 
that the interspecific interactions are weaker than the intraspecific interactions. 
Conditions (3.3.29) and (3.13.30) involve nonlinear functions of the 
parameters, a and s. We shall examine only these inequalities when a = 0.5. 
Condition (3.13.29) implies that 
|0.1s| < 1 => |s|< 10. 
Condition (3.13.30) implies that 
II - 0.2s| < |1 - 0.1s| 
0 < s < 2 0 / 3 . 
This completes our analysis of this example. 
Example 3.13.4. Clark (1976 b) has proposed and studied an interesting and 
realistic model of a whale population. Clark's model is also applicable to 
other single-species populations which have a time delay because of the time 
it takes a female animal or plant to mature before it can begin to reproduce. 
At time t let N(t) be the number of adult and productive females in a 
population. Consider the model of a single-species population, 
where S is the fraction of female adults which survive per unit time and 
G[N(t — 2)] is the number of maturing females which were born at time 
N(t + l) = SN(t)+ 
G[N(t — 2 ) ] , 
(3.13.31) 
t - 2 . 
In particular, we shall examine the model, 
N(t + 1) = SN(t) + N(t - 2)exp[r(l - N(t - 
2)/K)]. 
(3.13.32) 
The parameters, r and K, in this model do not have the same biological 
interpretations as those in model (3.13.20). This model has an equilibrium at

--- Page 103 ---

100 
Ν* = K[l - (l/r)ln(l - S ) ] . 
Note that 
decreases as r increases because ln(l — S) < 0. 
To analyse the stability properties of discrete time models in a systematic 
manner, we convert (3.13.32) into a system of dynamical equations. We get 
Nt(t+ 
D=N2(t), 
N2(t+l)=N3(t), 
N3(t+ 
l ) = SW 3(t) + N i ( f ) e x p [ r ( l - A r , ( i ) / i : ) ] . 
(3.13.33) 
This new model has an equilibrium at the point, (Nu N2, N3 ) = (N* ,N* ,N* 
) . 
For convenience, let 
a = ( l - S ) [ l - r + l n ( l - S ) ] . 
If the eigenvalues of all the eigenvalues of the matrix 
ml 
\ „ 
0 
S> 
are less than one, model (3.13.33) has a locally stable equilibrium at (N*N*9 
N*). 
The eigenvalue equation of this matrix is 
λ
3 —SX
2 —α = 0. 
(3.13.34) 
The Schur—Cohn criterion requires that 
1 - α
2 > \Sa\9 
1 > | S + a|. 
(3.13.35) 
These conditions involve nonlinear functions of r and S. It is difficult to 
examine them analytically. If S = 0, these conditions require that r satisfies 
the inequality, 2 > r > 0. This is as expected because model (3.13.32) reduces 
to model (3.13.20) when S = 0. If S = 0.5, these conditions require that the 
parameter r satisfies the inequality, 2.87 > r > 0. If S = 0.9, these conditions 
require that 5.17 > r > 0. This suggests that the stability of the model 
increases as S increases from zero to one. As in model (3.13.22) this increase 
in stability is due to a larger adult population acting more effectively to damp 
out the fluctuations in the number of the maturing females. In model (2.13.22) 
when S = 0.9, the parameter r must satisfy the inequality 17.7 > r > 0. This 
suggests that the time delay in the model asserts a destabilising influence in 
this model. It is interesting to note that the parameter Κ does not affect the 
stability of the system as long as it is positive. 
If all the parameters in a given model are specified numerically the simplest 
way of examining the stability of an equilibrium is to compute the eigenvalues 
of the linearized dynamics. There are many numerical algorithms available 
for the computation of the eigenvalues of a given matrix. 
To examine the stability of an equilibrium in a nonlinear model, we have to 
study the stability of the linear system,

--- Page 104 ---

101 
m 
x,(t+1)= 2 
(3.13.36) 
/ = ι 
where i = 1, 2, . . . , m. Let A = (a l 7). Note that there is no restriction placed 
on the signs of Xu X2, ... , Xm 
because they are displacements from an 
equilibrium. A suitable Liapunov function for this system is 
For model (3.13.36) we have 
Δ V = 
X
T(t)[A
TPA-P]X(t). 
Hence, if there exists a positive definite symmetric matrix Ρ such that 
Α
τΡΑ 
— Ρ is negative definite, model (3.13.36) is stable. It can be shown 
that this condition is also necessary. Clearly a sufficient condition for model 
(3.13.36) to be stable is that there exists a positive diagonal matrix D such 
that A
TDA 
— D is negative definite. This condition may be useful for multi-
species ecosystems in which each species sustains density-dependent mortalities 
due to intraspecific interactions and in which the interspecific interactions 
are relatively weak. 
3 . 1 4 . F I N I T E AND G L O B A L S T A B I L I T Y IN D I S C R E T E T I M E M O D E L S 
The literature on a finite region of attraction and global stability in discrete 
time models is very limited. The number of theory papers exceeds those which 
describe interesting applications of the theory to models of real systems. The 
papers by Kaiman and Bertram (1960 b), Diamond (1976 a), LaSalle (1976), 
Goh (1977 c) and Fisher and Goh (1977) contain good descriptions of the 
theory and interesting applications. 
From experience it is very difficult to construct effective Liapunov 
functions for discrete time models. Fortunately for population models there 
is a fundamental energy principle which provides useful guidelines for the 
construction of effective Liapunov functions. This biologically meaningful 
principle states that a viable population must absorb energy at low densities 
and it must dissipate energy at high densities. In multispecies interactions 
a positive linear combination of functions, which are good Liapunov 
functions for single-species models, is a good candidate to act as a Liapunov 
function. Another candidate is obtained by forming a positive definite 
quadratic expression of functions which are effective Liapunov functions 
for single-species models. Finally, we note that in a nonlinear model we can 
construct a new candidate to act as a Liapunov function by adding two 
candidate functions. It is plausible that we can use this process to patch up a 
good Liapunov function. 
V{X) = 
X?{t)PX(t), 
where Ρ is a positive definite symmetric matrix. By definition, 
AV=V[X(t+ 
1)] 
-V[X(t)]. 
(3.13.38) 
(3.13.37)

--- Page 105 ---

102 
Let Nl9 N2, ... , Nm be population densities at time ί in an ecosystem of 
m species. Consider the model, 
ΛΓ ί(ί+ 1 ) = Gt[Nl9N29...9Nm]9 
(3.14.1) 
where i = 1, 2, . . . , m and Gx, G 2, . . . , G m are continuous functions of the 
population densities. We shall assume that this model has a positive equi­
librium at N*. It follows that N? > 0 and G^N*) = N? for i = 1, 2, . . . , m. 
Let Ω be an open region in the positive orthant and let N* G Ω. The 
function V(N) is a suitable Liapunov function of model (3.14.1) in the region 
Ω if it has the following properties: 
(i) V(N) > 0 for all N G Ω and Ν Φ Ν* and V(N*) = 0; 
(ii) In Ω , the level surface V(N) = Κ for each positive value of K9 is a 
closed surface and V(N) has a unique minimum atiV*; 
(iii) The function, 
AV(N) = V[G(N)] 
- V(N). 
(3.14.2) 
is nonpositive for all N G Ω . 
Condition (ii) compels us to define Ω in terms of a level surface of 
V(N). We let Ω = {Ν | V(N) < L} where L is a positive number. Note that 
condition (ii) is satisfied if V(N) -> <*> a s N( -* 0+ or Nt -> + for ι = 1, 2, . . . , m 
and V(N) has a unique minimum in Ω . Condition (iii) means that Δ Vis 
negative semidefinite in Ω. 
Theorem 3.14.1. The region Ω is a region of attraction of model (3.14.1) 
if 
there exists a Liapunov function V(N) in Ω and Δ V(N) is negative 
definite. 
Proof. The solution of (3.14.1) which begins at the point N(0) G Ω consists 
of a sequence of points, iV(0), N ( l ) , N(2)9 . . . . Let S(t) = V[N(t)]. 
The 
solution generates a scalar sequence {S(£)} which is bounded below by zero. 
By assumption Δ V(N) is negative definite in Ω . This implies that the 
sequence {S(t)}is monotonie decreasing as t increases. It follows that S(t) 
converges to a limit. 
Suppose S(t) 
/ as t -+ °°, where / > 0. The assumption that Δ V(N) is 
continuous and is negative definite in Ω implies that it has a nonzero 
maximum for all N G {Ν \ I < V(N) < V[N(0)] 
} . Denote this maximum by 
—0 where Θ is a positive number. We have 
t -ι 
V[N(t)] 
= 2 
àV[N(s)] 
+ V[N(0)] 
< - » + V[N(0)]. 
(3.14.3) 
s = 0 
This implies that V[N(t)] 
—» as t -> «>. This is impossible as V(N) > 0 for 
all N G Ω . The solution which begins at N(0) cannot leave the region Ω . Hence 
/ = 0. This establishes that if there exists a Liapunov function in the region 
Ω, all solutions which begin in it tend to N*. 
Usually we have to determine the region Ω numerically. We first construct

--- Page 106 ---

103 
a function V(N) which has properties (i) and (ii). The region Ω is determined 
by finding a region as large as possible in which ΔV is negative definite. This 
can be carried out by maximizing ΔV for all Ν which satisfy the condition, 
V(N) = Κ where Κ is a. positive constant. The value of Κ is gradually increased 
until the corresponding maximum value of Δ V becomes positive. From this 
process we can pick a positive number K* such that AV is negative definite 
in the region, Ω = {Ν \ V(N) < 
K*}. 
Example 3.14.1. At time £, let AT be the density of a single-species population 
with nonoverlapping generations. A model of this type of population is 
This model is valid only for values of Ν satisfying the inequality 1 > N> 
0. 
For N>l,N{t+ 
1) is negative. 
It has a positive equilibrium at Ν* = 0.5. A suitable Liapunov function is 
Clearly V(N) -> » if Ν -> 0+ or as Ν -+ ~ . Let F(N) = 2(1 - N). From 
(3.14.4) and (3.14.5) we get 
When N/N* is large, the dominant term in V(N) is N. In this case, V(N) is 
none other than the energy embodied in the standing biomass of the popu­
lation. If Δ V is negative it means that the population is dissipating energy. 
When N/N* is small the dominant term in V(N) is N^/N. 
Thus, V(N) is 
inversely proportional to the energy embodied in the standing biomass of 
the population. Hence if ΔV is negative it means that the population is 
absorbing energy from elsewhere. 
For model (3.14.3), Δ Vis negative definite if Ν > 0 and 2(1 — Ν) < 1/(4ΛΡ). 
This implies that 0.809 > Ν > 0. We have V(0.809) = 0.191. Hence an 
estimate of the region of attraction is Ω = {Ν \ V(N) < 0 . 1 9 1 } . We can show 
that Ω = {N\ 0.272 < Ν < 0 . 8 0 9 } . The largest region of attraction in model 
(3.14.4) is {Ν I 1 > Ν > 0 } . Clearly the Liapunov function method gives 
only a rough estimate of the region of attraction. 
Example 3.14.2. Let Nt and N2 be state variables at time t. Consider the 
model, 
N(t+ 
l ) = 2A/
r(l-JV
r). 
(3.14.4) 
V(N)=N-2N* 
+ 
N*
2/N. 
(3.14.5) 
AV(N) = (N/F)(l 
- 
F)(F-N*
2/N). 
(3.14.6) 
Nx (t + 1) = exp[(ln Nt )
2 - (In 
N2)
2], 
N2(t + 1) = exp[21n Nl In 
N2]. 
This model has a positive equilibrium atiV* = (1,1). 
(3.14.7a) 
(3.14.7b) 
A suitable Liapunov function is 
V(N) = (lnNi)
2+ 
(lnN2)
2. 
(3.14.8)

--- Page 107 ---

1 0 4 
Note that V(N) 
«> as Nt, 
0 or as J V , « > for j = 1, 2, Moreover, V(N) has 
a unique minimum at N*. 
Along solutions of (3.14.7) we have 
It follows that ΔV is negative definite in the region, Ω = {Ν \ V(N) < 1 } . 
Hence Ω is an estimate of the region of attraction of N* in model (3.14.7). 
In this specially constructed example Ω is a very good estimate of the largest 
region of attraction of N*. 
In Sections 3.3 and 3.9, we find that in continuous time models it is useful 
to relax the condition that V is negative definite in Ω , a region of attraction. 
We can similarly relax the condition that AV is negative definite in Ω , a 
region of attraction in a discrete time model. 
Let Ω be an open subregion of the positive orthant. Let N* be a positive 
equilibrium of model (3.14.1). We shall assume that N* G Ω. Let the function 
V(N) have the following properties: (i) V(N) > 0 for all N G Ω and Ν Φ Ν* 
and V(0) = 0; (ii) In Ω , the level surface, V(N) = Κ for each positive value of 
Κ, is a closed surface and V(N) has a unique minimum at N*. Let the region 
Ω = {Ν I V(N) < L } , where L is a positive number. Under these assumptions 
the following theorem describes the crucial conditions for the region of 
attraction of ΛΓ*, a positive equilibrium of model (3.14.1). 
Theorem 3.14.2. The region Ω is a region of attraction of model (3.14.1) 
if 
in Ω, AV(N) < 0 and AV(N) does not vanish identically along a solution of 
the model beside the trivial solution, Ν = Ν*. 
A proof of this theorem is given in a paper by LaSalle (1976). We shall 
apply this theorem to a specially constructed example. 
Example 3.14.3. Let Nt and N2 be the state variables at time t. Let the region 
Ω = {Ν I Nx > 0, N2 > 0 } . Consider the model, 
where a12 =V3/2,a2i = 1 / V 2 and a22 = l / \ / 8 . This model has a positive 
equilibrium atAf* = (1,1). 
A suitable Liapunov function is 
V(N) = (InN,)
2 
+ (lniV 2)
2. 
Along solutions of (3.14.10) we have 
AV = -[(l/s/2)\nNl 
- (1/V8)ln iV 2]
2 < 0. 
AV(N) = [(\nN1)
2+ 
(1ηΝ 2)
2][(1ηΛΓ 1)
2+ ( l n i V 2 )
2 - ! ] . 
(3.14.9) 
A M * + i ) 
N2(t+1) 
(3.14.10a) 
(3.14.10b)

--- Page 108 ---

105 
The function AV{N) does not vanish identically along a solution of (3.14.10) 
beside the trivial solution, Ν = (1,1). Hence model (3.14.10) is stable in the 
region Ω. This means that (3.14.10) is globally stable. 
Let x^t) 
= In Nx and x2(t) 
= In N2 . We find that model (3.4.10) is 
equivalent to the model, 
xx(t + 1) = a12x2, 
(3.14.11a) 
x2(t + 1) = a2ixt 
+ a22x2 
, 
(3.14.11b) 
in which there is no restriction on the signs of the variables, xx and x2. We 
can use the Shur—Cohn stability criterion to show that this model is stable. 
Let NlyN2, 
... , Nm 
be population densities at time t. Let Γ denote the 
positive orthant {Ν \ N( > 0, i = 1, 2, . . . , m } . Assume that the model, 
where / = 1, 2, . . . , m, has a positive equilibrium atA/Λ The function V(N) is 
a Liapunov function in Γ if it has the following properties: 
(i) V(N) > 0 for all N G Γ and Ν Φ Ν* and V(N*) = 0; 
(ii) V(N) 
<*> as AT F -* 0+ or as Nt ->
 0 0 for each ί = 1, 2, . . . , m and νχ/V) has 
a unique minimum in Γ; 
(iii) the function, 
is negative for all AT G Γ and iV Φ Ν*. 
Theorem 3.14.3. Model (3.14.12) 
is globally stable if there exists a Liapunov 
function 
V(N) in the positive 
region. 
The proof of this theorem is similar to that for Theorem 3.14.1. Note that 
the function Δ V(N) displayed in (3.14.13) is computed along solutions of 
model (3.14.12). Condition (iii) means that AV(N) displayed (3.14.13) is 
computed along solutions of model (3.14.12). Condition (iii) means that 
AV(N) is negative definite in the feasible region, Γ . 
The next theorem gives more general conditions for global stability. 
Theorem 3.14.4. Model (3.14.12) 
is globally stable if (a) there exists a 
function 
V(N) which has the properties 
(i) and (ii) as stated above, (b) the 
condition, 
is satisfied for all N G Γ and (c) AV(N) does not vanish identically along a 
solution of (3.14.12) 
beside the trivial solution, Ν = Ν*. 
JV f(t+ l) = 
Gt[Nl9N29...,Nm] 
(3.14.12) 
AV(N) = V[G(N)] 
- 
V(N), 
(3.14.13) 
AV(N) = V[G(N)] 
- V(N) < 0, 
(3.14.14) 
Example 3.14.4. Consider a single species population with nonoverlapping 
generations. Let Ν be the adult population density at time t. We shall

--- Page 109 ---

106 
establish a simple and robust set of conditions which are sufficient for global 
stability in the general model, 
N(t+ 
1) = G(N). 
(3.14.15) 
This model is globally stable if (i) there exists a positive equilibrium at Ν*, 
(ii) for Ν* > Ν > 0, Ν*
2/Ν 
> G(N) > Ν, (iii) for N>N*,N> 
G(N) > 
N*
2/N. 
Condition (ii) means that if the density is below the equilibrium level in a 
given generation, the population density is larger in the next generation. In 
other words, the population does not sustain an Allee effect. Condition (iii) 
implies that if the density is higher than the equilibrium level in a given 
generation, the population density is reduced in the next generation because 
of intraspecific competition. 
A suitable Liapunov function is 
V(N) = [ln(N/N*)]
2. 
(3.14.16) 
Along solutions of model (3.14.15) we have 
AV(N) = [In (G/N*)]
2 
~[ln(N/N*)]
2 
= [ln(G/JV)] 
[IniGN/N*
2)]. 
For Ν* > Ν > 0, condition (ii) implies that ln(G/N) > 0 and ln(GAT/iV^)< 0. 
Hence AV < 0 for Ν* > Ν > 0. For Ν > N\ condition (iii) implies that 
ln(G/N) < 0 and ln(GN/N*
2) 
> 0. Hence ΔV < 0 for Ν > Ν*. It follows that 
Δ V is negative definite. We conclude that model (3.14.16) is globally stable. 
This completes our analysis of the example. 
We shall now state a similar set of sufficient conditions for global stability 
in a multispecies model. Let Ρ be a positive definite symmetric matrix. A 
Liapunov function for model (3.14.12) is 
m 
V(N)=2 
mNi/NfWMNj/N*)], 
(3.14.17) 
where N* is a positive equilibrium. 
Theorem 3.14.5. Model (3.14.12) 
is globally stable if there exists a positive 
definite matrix Ρ such that the 
function, 
m 
Δ V = 2 
[MGi/NnPiMGj/N;) 
- 
l n W / ^ V y l n i ^ / J V / ) ] , 
α 
is negative definite in the positive 
orthant. 
There are two problems which have to be solved in order to use this 
theorem. Firstly, there is no known systematic method of choosing a suitable

--- Page 110 ---

107 
positive definite and symmetric matrix P, except in the case of linear or 
related models. Secondly, for m > 2, it is very difficult to establish analytically 
or numerically that a given function is negative definite in the positive 
orthant. The solution of this problem would profit from advances in methods 
for computing the global maximum of a given function. This follows because 
the condition, Δ V is negative definite, is equivalent to the condition that the 
global maximum of Δ V is unique and is equal to zero. In spite of these 
problems, given a model of a multispecies system we should always check 
whether or not Theorem 3.14.5 is applicable. 
Note that the function displayed in (3.14.17) is none other than the 
quadratic function X
TPX 
under the transformation, Xf = IniNJN*) 
where 
î = 1, 2 , . . . , m. It follows that in the positive orthant V(N) has a global 
minimum equal to zero at N* if Ρ is positive definite. This transformation 
can produce other Liapunov functions for population models form Liapunov 
functions V(X) for the modêr X, = £·(Χ), where Xt is not restricted in its sign. 
Example 3.14.5. Let Nx and N2 be two positive state variables at time t. 
Consider the model, 
where a
n , a 1 2 , a2l and a22 are constants. This model has a positive equilibrium 
atiV* = ( l , l ) . 
Let Ρ be a constant positive definite and symmetric matrix. A suitable 
Liapunov function for model (3.14.18) is 
V(N) = P
n (In N,)
2 
+ 2 P 1 2 (In Ni )(ln N2) + P22 (In 
N2)
2. 
Along solutions of model (3.14.18) we have 
Δ ν = Υ
Ύ [Α
ΎΡΑ-Ρ] 
7, 
where A = (α ι 7) and Υ
Ύ = (In Nl9 In N2). Clearly if there exists a positive 
definite matrix Ρ such that ^4
TPA — Ρ is negative definite, then AV(N) < 0 in 
the positive orthant and where Ν Φ Ν* 
Example 3.14.6. At time f, let N(t) be the density of the adult population in 
a single-species population. Suppose it takes 2 years for a member of the 
population to become an adult and intraspecific competition takes place 
during the breeding season. A model (Clark, 1 9 7 6 b) of this type of 
population is 
where S is the survival coefficient of the adult population, and r and Κ are 
positive parameters. 
Nt(i 
+ 1)=JVÇ« 
N?»9 
N2(t+ 
1)=JV?« NÎ» . 
(3.14.18a) 
(3.14.18b) 
N(t + 1) = SN(t) + N(t - 1) exp[r(l - N(t - 
1)/X)] 
(3.14.19)

--- Page 111 ---

108 
Let Nx (t) = N(t — 1) and N2 (t) = N(t). The above model becomes 
Nx(t+ 
1)=JV 2(0, 
(3.14.20a) 
N2(t + 1) = SW2(t) + JVi (t) exp[r(l - N
t (t)/K)]. 
(3.14.20b) 
Suppose S = 0.9, r = 1.5 and Κ = 0.3952. Model (3.14.20) has a positive 
equilibrium atiV* = (1,1). 
By trial and error, we find that a suitable Liapunov function for this model 
is 
V(N) = (In Nxf-2 
(In Nx) (In N2) + 3(ln ΛΓ 2)
2. 
We compute the function AV(N) for model (3.14.2) at a large number of 
points and level surfaces, AV(N) = d where the values of d are varied over a 
wide range. Some typical members of these level surfaces are displayed in 
Fig. 3.14.1. From this exercise, we conclude that AV is negative definite in 
the positive region. Hence model (3.14.20) is globally stable in the positive 
region. 
A good candidate to act as a Liapunov function in a single species model is 
V(N) = (N
s -N*
s)/s 
+ N*
p +
 s/{pN
p)-N*
s/P, 
(3.14.21) 
where s and ρ are positive numbers and N* is the positive equilibrium in the 
model. For example, if ρ = s = 1, we can use this Liapunov function to prove 
that the model, N(t + 1) = G ( A T ) , is globally stable if: (i) it has a positive 
equilibrium at iV* ; (ii) for Ν* > Ν > 0, G (Ν) satisfies the inequality, 
N*
2/N 
> G(N) > N; and (iii) forN>N* 
G(N) satisfies the inequality,N> G(N) > N*
2/N. 
4).00 
1.00 
2 . 0 0 
M 
3 . 0 0 
4 . 0 0 
5 . 0 0 
Fig. 3 . 1 4 . 1 . Level surfaces of the AV(N) 
function for model ( 3 . 1 4 . 2 0 ) .

--- Page 112 ---

109 
Therefore in this case the function (3.14.21) is as effective as the function 
(3.14.16). From (3.14.21) we deduce that a good candidate to act as a 
Liapunov function for a model of a multispecies system is 
τη 
_. 
V(N) = 2 
c^Nfi-N^jsi 
+ N*
pt
 
+ y ^Ρ,ΛΡί j -N*
sijPi 
j > 
(3.14.22) 
where s,-, pt and c,- are positive numbers for ί = 1, 2, . . . , m. 
Another good candidate to act as a Liapunov function for a single-species 
model is 
V(N) = (N
s - N*
s)/s - N*
s ϊη(Ν/Ν*)9 
(3.14.23) 
where s is a positive number. Along solutions of the single-species model, 
N(t+ 
1)=NF(N), 
we have 
AV(N) = N*(F
8 
- l)/s-N*
8 
In F. 
(3.14.24) 
In a viable single-species population when N/N* is very large, F must be much 
smaller than one. Otherwise, NF(N) would be large. This situation is unlikely 
to persist in a viable single-species population. If F < 1 when N/N* is large, 
the dominant term in AV(N) is —N*/s. Thus ΔV should be negative when 
N/N* is large. In a viable single-species population which does not sustain 
an Allee's effect (see Odum, 1 9 7 1 ) , F(N) should be larger than one when 
N/N* is small. Then the dominant term in AV(N) is —N*
s In F. In brief, 
AV(N) should be negative when the density of a population is small or large. 
This means that the population is absorbing energy at low densities and 
dissipating energy at high densities. These biological considerations suggest 
that the function V(N) displayed in (3.14.23) should be a very good candi­
date to act as a Liapunov function. 
Consider the multispecies model, 
tf,(t+ 
l)=NiFi(Nl9N29...9Nm)9 
(3.14.25) 
where i = 1, 2, . . . , m. A very good candidate to act as a Liapunov function 
for this model is 
V(N)= 
2 ^ [ ( ^ -NfiJIsi-NplniNi/N?)^ 
(3.14.26) 
where c
u c 2 , . . . , c m ; sl9 s 2, . . . , 
are positive numbers and N* is a positive 
equilibrium of (3.14.25). Along solutions of (3.14.25) we have 
AV(N)= 
f 
c^N^Fp-iySit-NphiiNilN?)]. 
(3.14.27) 
It follows that model (3.14.25) is globally stable if it has a positive equi-

--- Page 113 ---

110 
librium at AT* and the function AV(N) as displayed in (3.13.27) is negative 
definite in the positive orthant. 
Example 3.14.6. Consider a single-species population with nonoverlapping 
generations. Let Ν be the adult population density at time i, and r and Κ be 
the growth rate and carrying capacity respectively. A very popular model of 
such a population is 
N(t+ 
l)=Nexp[r(l-N/K)]. 
(3.14.28) 
This model has a positive equilibrium at Ν* = K. 
A suitable Liapunov function is 
V(N) = (Ν
2 - K
2)/2 - K
2 \n(N/K). 
(3.14.29) 
Along solutions of (3.14.28) we have 
AV(N) = iV
2[exp{2r(l - N/K)}-l]/2~K
2 
[r(l - N / K ) ] . 
(3.14.30) 
Model (3.14.28) is globally stable if AV(N) is negative for all N> 0 and 
ΝΦ Κ. This condition is satisfied if AV(N) has a unique global maximum at 
Ν = Κ. It is difficult to establish that AV(N) is negative definite in a purely 
analytical way. We establish that AV(N) has a unique global maximum at 
Ν = K. Then we show numerically that outside a small neighbourhood of 
Ν = Κ, AV is negative. 
Condition (3.14.29) implies that 
d(AV)/dN 
= N[exp{2r(l 
- N/K)} 
- 1] -N
2{r/K) 
e x p [ 2 r ( l - N / K ) ] 
+ Kr = 0 , 
w h e n A ^ X . 
d
2(AV)/diV
2 = exp[2r(l — N/K)] 
- 1 - A(r/K)N 
e x p [ 2 r ( l - N / K ) ] 
+ 2N
2(r/K)
2 
exp[2r(l 
-N/K)] 
= 2 r ( - 2 4- r), 
when Ν = K. 
Hence AV(N) has a local maximum atN = Kif2> 
r> 0. Note that Κ plays 
no role in the stability of the equilibrium. 
For the parameter values, r = 1.9 and Κ = 1.0, the functions, V(N) and 
AV(N), are plotted in Fig. 3.14.2. Clearly AV(N), is negative definite. Hence 
for this value of r, model (3.14.28) is globally stable. 
For large values of N/K, the dominant term in (3.14.29) is N
2/2. Hence it is 
a measure of the energy embodied in the standing biomass. If AV(N) is nega­
tive at such densities, it means that energy is dissipated by the population. 
For small values oîN/K, 
the dominant term in (3.14.29) is K
2]n(N/K). 
This is 
again proportional to the energy embodied in the standing biomass. The 
negative sign in front of this term implies that if AV(N) is negative at such 
densities, energy is being absorbed by the population from some external 
sources. In a viable single-species population it is obvious that on balance

--- Page 114 ---

I l l 
0 . 0 0 
0 . 5 0 
1.00 
1.50 
2 . 0 0 
2 . 5 0 
3 . 0 0 
Ν 
Fig. 3 . 1 4 . 2 . Functions V(N) and AV(N) for model N(t + 1 ) = Ν e x p [ 1 . 9 ( l — Ν)]. 
the population must absorb energy when its density is low and it must 
dissipate energy when its density is high. 
This completes the global stability analysis of model (3.14.28). It is widely 
used to describe fish and insect populations (Ricker, 1954; May, 1976 a). In 
Example 3.15.1 we shall show how to estimate a region of ultimate confine­
ment in this model when r > 2. 
3 . 1 5 . R E G I O N O F U L T I M A T E C O N F I N E M E N T AND N O N V U L N E R A B I L I T Y 
In the last two sections we have examined local, finite and global stability 
in discrete time models. These types of stability are associated with a single 
equilibrium in a model. They tell us that if the initial state of a model is 
displaced from an equilibrium to another point in a local, finite or global 
neighbourhood of the equilibrium and the system is thereafter left alone, 
the natural dynamics of the system will drive the state into a decreasing 
neighbourhood of the equilibrium as time progresses.

--- Page 115 ---

112 
Currently there k « widespread interest in a more complex dynamical 
behavior in discrete time models (Li and Yorke, 1975; Beddington et al., 
1975; May, 1976 a; Guckenheimer et al., 1977; Fisher and Goh, 1977; 
Goh and Agnew, 1978). This complex behavior includes limit cycles of 
various periods, regions of ultimate confinement, and chaos. The concept of 
a region of ultimate confinement is useful for it provides sufficient conditions 
for the persistence of an ecosystem which is subjected to finite perturbations 
of the initial state. 
Let NÏ9N29... 
9 Nm 
be population levels at time ί in an ecosystem of m 
species. Suppose a model of the ecosystem is given by the set of difference 
equations, 
where i = 1, 2, . . . , m. 
By definition, a region in a state space is an open and simply connected 
point set. Let Γ be the positive orthant {Ν \ Nt> 
0, i = 1, 2, . . . , m } , and 
let F be a proper subregion of Γ. Let Ω be a proper subregion of Γ such that 
Y is entirely contained in Ω. Moreover the boundary of Y does not intersect 
the boundary of Ω. The region Y is a region of ultimate confinement if: (a) 
every solution of model (3.15.1) which begins in Y remains indefinitely in it 
and (b) every solution of model (3.15.1) which begins in the set, Ω — 7, 
ultimately enters and remains indefinitely in Y. In this section we shall limit 
ourselves to the case when Ω = Γ. 
Let Ν* = (Νχ, Ν29... 
, iV* ) be a point in a region Y. Generally N* is not 
an equilibrium of model (3.15.1). Moreover, the model is allowed to have 
more than one equilibrium in the region Y. We shall employ a Liapunov-like 
function to determine a region of ultimate confinement. Hence we shall 
generally obtain only conservative estimates of the smallest region of ultimate 
confinement. 
A function V(NU N2> ... , Nm ) is a Liapunov-like function for model 
(3.15.1) in the region Γ if it has the following properties: 
(i) V(N)> 
0 for all N G Γ and Ν Φ Ν* and V(N*) = 0; 
(ii) V(N) -» oo as N( -> 0 + or Nt 
°° for i = 1, 2, . . . , m and V(N) has a 
unique minimum in Γ. 
By definition, the function 
Let X be the point set {Ν | AV(N) > 0 } . Let AVm&x 
be the maximum value 
of AV(N) for all N G X. Let V0 be the maximum value of V(N) for all 
NeX. 
It follows that the region {Ν \ V(N) < V 0 } is the smallest region which com­
pletely contains the set X. Let V* = V 0 + A V m a x and Y = {Ν \ V{N) < 
V*}. 
Theorem 3.15.1. Let V(N) be α Liapunov-like 
function for model (3.15.1) 
in 
the region Γ. The region Y = {Ν | V(N) < V*}, is a region of 
ultimate 
confinement 
of the model. 
l ) = G i[AT 1,iST 2,...,iV m] 
(3.15.1) 
AV(N) = V[G(N)] 
— V(N). 
(3.15.2)

--- Page 116 ---

113 
If X is not an isolated point, the maximum value of AV(N) must occur at 
an interior point of X. Generally X is a union of disjointed closed subsets of 
Γ. Hence it could have a very complex structure. It follows that it is more 
practical to determine the maximum value of AV(N) for all Ν G X by maxi­
mizing AV(N) for all N G Γ. This relaxation of the admissible set in the opti­
mization problem is justified because AV(N) is negative in Γ — X. We can use 
an optimization algorithm (Fletcher, 1 9 7 5 ) to determine A V m a x numerically. 
Similarly the complexity of the set X makes it difficult to find the maximum 
V(N) for all N G X. A more practical approach is as follows: Choose a positive 
number c. Maximize AV(N) for all N G {N | V(N) > c } . The parameter c is 
adjusted by trial and error until the maximum of AV(N)y subject to V(N), 
subject to V(N) > c, is equal to zero or just below zero. The corresponding 
value of c is then called V0. 
A Liapunov-like function is none other than a generalized distance function 
from a specified point. In this section the specified point is denoted by N*. 
We shall establish that Theorem 3.15.1 is valid by examining the behavior of 
the solution of model (3.15.1) which passes through a typical point in each of 
the sets which we have defined. 
At time t, consider a point N(t) in X. From (3.15.1) and (3.15.2) we have 
V[N(t + 1)] = AV[N(t)] 
+ V[N(t)] 
< AVm&x 
+ V0 = V\ 
(3.15.3) 
We have strict inequality because the maximum of AV(N) occurs in the 
interior of X, and V(N) = V0 is the smallest V(N) level surface which contains 
entirely the set X. At time i, consider a point N(t) in the set, {Ν \ V(N) 
< V*} -X. 
At such a point, AV(N) < 0. This implies that V[N(t + 1)] < V*. 
It follows that a solution of model (3.15.1) which passes through a point 
N G {Ν I V(N) < V*} at time t cannot get to or go across the hypersurface, 
V(N) = V* at a subsequent time, r > f + 1. Finally we note that as AV(N) is 
negative for all AT G {Ν \ V(N) > V*} Π Γ , all solutions which begin in this 
set will ultimately enter the region {Ν | V(N) < V*}. Therefore the region, 
Υ = {Ν I V(N) < V*}, is a region of ultimate confinement. 
The main difficulty in using Theorem 3.15.1 is the problem of construc­
ting a suitable Liapunov-like function. For a given model we should first try 
and see if functions which are Liapunov functions for other models provide 
a suitable Liapunov-like function. In particular, we should examine whether 
the functions displayed in (3.14.7), (3.14.22) and (3.14.26) include a suitable 
Liapunov-like function for determining a region of ultimate confinement. 
We can also exploit the fact that in the determination of a region of ultimate 
confinement, it is not necessary for a Liapunov-like function to have its 
global minimum at an equilibrium of the given model. 
Let N** be a point in a region of ultimate confinement which is not an 
equilibrium of model (3.15.1), We can derive Liapunov-like functions from 
the functions displayed in (3.14.7), (3.14.22) and (3.14.26) if N* is replaced 
by N**. We note that any Liapunov function V( Y) for a model of the form,

--- Page 117 ---

114 
Yi
 = fi(Y) where Yj is unrestricted in sign, can be turned into a Liapunov-like 
function for a population model by means of the transformation, Yt = ln(iV,/ 
iV**) where i = 1, 2, . . . , ra. Finally we note that if {ch sh Ki9 Ht } is a set of 
positive constants, a Liapunov-like function for model (3.15.1) is 
V(N) = f 
c^JVfi' - 
- f f ^ l n M / J T , ) ] - 
(3.15.4) 
where IV is a constant. This function has a unique minimum atiV** = 
(KiHl
/Si). 
The constant Ψ is chosen so that V(N** ) = 0. 
Example 3.15.1. Consider a single-species population with nonoverlapping 
generations. With an appropriate choice of scale, a model of such a popu­
lation is 
N(t+ 
l ) = N e x p [ r ( l - i V ) ] . 
(3.15.5) 
This model has an equilibrium at AT* = 1. From example 3.14.7, we know 
that this model is globally stable if 2 > r > 0. 
For values of r satisfying 2 < r < 2.692, model (3.15.5) possesses stable 
limit cycles of period 2
n where η is an integer (May, 1 9 7 6 a). For r > 2.692, 
it has chaotic solutions. 
From (3.15.4) a suitable Liapunov-like function for this model is 
V(N) = (N
s - 1)/s -ΗΙη(ΛΓ) - W, 
(3.15.6) 
where s, H and W are constants. Along solutions of model (3.15.5), we have 
AV(N) = N
8 {exp[rs(l - Ν)] — 1 } / s — Hr(l — N). 
(3.15.7) 
We shall illustrate the usefulness of Theorem 3.15.1 by examining two 
cases, (a) r = 2.3 and (b) r = 3.3. When r = 2.3, the model has a two-point 
limit cycle which goes from Nx 
= 0.408 to N2 = 1.59. Model (3.15.5) is of 
the form, N(t + 1) = G[N(t)]. 
The points, Νχ, N2 and Ν = 1, are equilibrium 
points of the second order system, 
N(t+ 
l) = 
G[G[N(t-l)]] 
= G[N(t~l)] 
exp{r(l - G[N(t - 1)])}, 
(3.15.8) 
where G[N(t - 1)] = N(t - 1) exp[r(l —N(t - 1 ) ) ] . In this case, we find by 
trial and error that s = 3.69 and H = 1.1 provide a good estimate of the 
smallest region of ultimate confinement. For these values of s and H, the 
minimum of V(N) occurs at N** = 1.026 and this implies W = —0.0013. The 
functions, V(N) and AV(N), are plotted against Ν in Fig. 3.15.1. The value 
of VQ was found to be 0.727 atiV = 1.5915 (represented by A in the figure) 
and AVmax 
= 0.192 at Ν = 0.544 (Β). At the points, C and D, V(N) = V* = V0 
+ A^max. CD is a region of ultimate confinement, i.e. Υ = {Ν \ 0.341 < Ν 
< 1 . 6 5 6 } .

--- Page 118 ---

115 
- 3 
Fig. 3 . 1 5 . 1 . CD is a region o f ultimate confinement in a single-species model with a 
two-point limit cycle. 
For r > 2.692, model (3.15.5) has chaotic solutions. Even then it is possi­
ble to establish that the solutions are ultimately confined in a region. Fig. 
3.15.1 shows the functions, V and AV, plotted against In(iV) because the 
values of Ν are too small to be shown on its normal scale. We employ the 
parameter values, s = 1.51 and H = 0.52. The point A defines the value of 
1η(ΛΓ) for which V = V0 and AV achieves its maximum value of A V m a x at B. 
The region of ultimate confinement is given by the interval (C,D) where 
V(N) = V* = V0 + AVmAX 
at the points C and D. This implies that a region 
of ultimate confinement is Υ = {Ν \ 0.0012 < Ν < 3.37 } . This completes 
our analysis of the example. 
The concept of a region of ultimate confinement which we have examined 
requires that the system is not perturbed after the initial instant. On the 
4 1 
y 
\ξ—ν 
/ 
c 
Ϊ Λ \ 
\ 2 
D 
7 
L0G(Ν) 
fr
 
B 
- 2
J 
2 
Fig. 3 . 1 5 . 2 . CD is a region of ultimate confinement for a single-species model with 
chaotic solutions.

--- Page 119 ---

116 
other hand, ecosystems in the real world are continually disturbed by unpre­
dictable and finite forces. With the continual growth in the human population 
such distrubances will occur more frequently and on a larger scale. A useful 
concept for understanding an ecosystem's ability to persist in spite of con­
tinual disturbances is the concept of nonvulnerability. So far this concept has 
been developed only for continuous time models. Here we shall outline some 
initial steps in the development of the concept of nonvulnerability for discrete 
time models. 
Let Ui(t), u2(t), 
... , un(t) represent the net effects on the system dynamics 
of continual disturbances which act on an ecosystem during the time interval 
[t, t + 1 ] . These disturbances (harvesting, pollution, migrating populations, 
etc.) alter the system dynamics so that model (3.15.1) of a given ecosystem 
must be replaced by the set of equations, 
where i = 1, 2, . . . , m. In the real world disturbing forces are finite and hence 
it is reasonable to assume that these disturbance functions satisfy the con­
straints, 
where r = 1, 2, . . . , η and {ξr, £ r}is a set of constants. We denote the set of 
disturbance functions which satisfy these constraints by U. 
The essential elements of a definition of nonvulnerability in a given model 
are (i) a specified time interval [Ο,Τ], (ii) a set S(0) which contains desirable 
states of the system, (iii) a set Z(T) which contains undesirable states and 
(iv) a given class of disturbance functions, U. By definition, system (3.15.9) 
is vulnerable during the time interval [0,T] if there exists an admissible set 
of functions {ux(t), 
u2(t), 
... , un(t)} 
which could drive the system from an 
initial state in S(0) to the set Z(T) during the time interval [0,T]. Otherwise, 
the system is said to be non vulnerable. 
This problem can be cast into a discrete time optimal control problem. In 
a given problem it may be relatively simple to show that the system is 
vulnerable. All we need to do is to find a set of functions {uu u2, ... , un } 
which will drive the system from S(0) to Z(T) in the time interval [ 0 , T ] . 
However, it is extremely difficult to use optimal control theory to show 
that it is nonvulnerable in systems with more than two state variables. 
Let V(N) denote a suitable Liapunov-like function which can be used to 
establish global stability or to find a region of ultimate confinement for 
model (3.15.9) when there are no disturbances, i.e. ux(t) = u2(t) = ... = un(t) 
= 0. It is convenient to define the sets, S(0) and Z(T), in terms of a V(N) 
function which is a generalized distance function. Let S(0) = {Ν \ V(N) < Vs} 
and Z(T) = {Ν \ V(N) < Vz } where Vs and Vz are positive numbers such 
that Vz > Vs . Along solutions of (3.15.9), we have 
Ni(t + 1) = Ρ ί[ΛΓ 1,Ν 2, . . . 
,Nm;uuu2,...,un], 
(3.15.9) 
- f r 
<ur(t)<tr 
(3.15.10) 
AV(N,u) = V[P(N,u)] 
- 
V(N). 
(3.15.11)

--- Page 120 ---

117 
We can get a relatively simple method for establishing nonvulnerability by 
generalizing the method contained in Theorem 3.15.1. Firstly we determine 
a level surface, V(N) = Vu such that the global maximum of AV(N,u) for all 
N G {Ν I V(N) > Vl and N> 
0 } and u G U is negative. The value of Vx is 
chosen by trial and error. Denote the set {Ν \ V(N) < Vx} by X. Let the 
global maximum of AV(N,u) for all N G X and u G U be AVmgLX 
. Clearly A V m a x 
occurs at an interior point of X. Let V* = Vx + A V m a x . 
Theorem 3.15.2. Model (3.15.9) 
is nonvulnerable 
relative to the sets, S(0) 
= {N i V(AT) < Vs } and Ζ ( Γ ) = {Ν | V(JV) > V, } , dwnn^ the time 
interval 
[Ο,Τ] ι/ Vz > V* and Vz > Vs. Τ is any positive 
number. 
Proof. By arguments similar to those for Theorem 3.15.1, we can show that 
in spite of the continual disturbances any solution of (3.15.9) which begins 
in the set {Ν | V(N) < V* } remains indefinitely in it. Moreover, any solution 
which initiates in the set {N | V(N) > V* and Ν > 0 } will ultimately enter and 
remain in the set {Ν \ V(N) < V*}. Hence the system cannot be driven from 
the set {Ν | V(N) < V*} to the set Z(T). 
If V* > Vs, Theorem 3.15.2 follows immediately. If V6 > V*, we find 
that in spite of the continual disturbances any solution of (3.15.9) which 
begins in the set {Ν \ V8 > V(N) > V*} cannot be driven to the set Z(T) 
because AV(N,u) is negative for all values of Ν in this set. As in the previous 
case the system cannot be driven from {Ν \ V(N) < V*} to the set Z(T). We 
conclude that the system cannot be driven from set S(0) to the set Z(T). 
Hence the system is non vulnerable. 
Example 3.15.2. At time t, let Ν be the density of a population with non-
overlapping generations. Let u be the mortality sustained by the population 
because of continual environmental disturbances during the time interval 
[t, t + 1 ] . A model of the population is 
N(t + 1) = (1 - u)N e x p [ r ( l - N ) ] . 
(3.15.12) 
We shall assume that 0 < u(t) < 0.2 for all values of t. If r = 2.3, a suitable 
Liapunov-like function from Example 3.15.1 is 
V(N) = (N
s -l)/s- 
Mn(N) - W, 
(3.15.13) 
where s = 3.69, H = 1.1 and W = - 0 . 0 0 1 3 . 
For Vx = 1.5, AV(N,u) is negative for all u G U = {u \ 0 < u < 0.2} and 
N G {Ν I V(N) > Vx and Ν > 0 } . Note that V(N) = 1.2 at the points, Ν = 0.2 
and Ν = 1.81. The maximum value of AV(N,u) for all u G U and N G {Ν \ V(N) 
< Vx } is A V m a x = 0.33337 for the values, Ν = 1.395 and u = 0.2. We can let 
V* = Vi + A y m a x = 1.83. But in order that the result is secure from small 
numerical errors we set V* = 1.84. Thus in spite of the continual distur­
bances a region of ultimate confinement is {Ν | V(N) < V*} = {Ν | 0.146 
< N < 
1.886}.

--- Page 121 ---

118 
If Vs and Vz are positive numbers such that Vz > 1.84 and Vz > 
Vs, 
model (3.15.12) is nonvulnerable relative to the sets C7, S(0) = {Ν \ V(N) 
< Vs} and Z(T) = {Ν\ V(N) >VZ}, 
during the time interval [0,T] where Τ 
is any positive number. 
3 . 1 6 . A D I S C R E T E TIME M O D E L O F TWO COMPETING S P E C I E S 
In this section we shall examine a discrete time model of two competing 
species (Fisher and Goh, 1977). The purpose of this analysis is to illustrate 
the usefulness of some of the methods we have discussed in the previous 
sections. 
Let Νχ and A/2 be population densities at time t. Let r u r 2, α η , a 1 2 , a 2 2 , 
Kt and K2 be positive parameters. A model of two competing species (May, 
1974) is 
Nx(t+ 
1) = NX e x p i r e -allNl-a12N2]/Kl}9 
(3.16.1a) 
N2(t + 1) = N2 e x p { r 2 [ K 2 - a21Nx 
~ a22N2]/K2}, 
(3.16.1b) 
The nontrivial equilibrium at (iV*,N 2) satisfies the equations, 
Kx 
- α ι ι Α Γ ι -ol12N2 
= 0 , 
(3.16.2a) 
K2 - a2lN, 
- a22N2 
= 0. 
(3.16.2b) 
It follows that 
Nt = (Kta22-K2al2)lA9 
Nt = (K2an 
-Kxoc2l)/A9 
(3.16.3) 
where Δ = a
u a
2
2 — α 1 2 α 2 ι . By definition (N*9Nt) 
is positive if Nt > 0 and 
Nt > 0. 
There are too many free parameters in this model. Following May (1974) 
we shall make the simplifying assumption that Kx = K2 = 1, rx = r, r2 = 2r, 
α 11
 = ^22
 = 1 and αί2 
=a2i 
= a. This choice of parameters allows us to 
examine in a simple manner some of the effects of interspecific interactions 
and the growth rates. In this case we have 
(ΝΪ,ΝΪ) 
= (1/(1 + α), 1/(1 + α)). 
(3.16.4) 
For convenience, let N* = 1/(1 + a). 
By Theorem 3.13.2, this equilibrium is locally stable if the magnitudes of 
all the eigenvalues of the matrix 
* - œ 
Ά ) 
are less than one. The Shur-Cohn stability criterion requires that 
a < 1 
(3.16.6) 
and

--- Page 122 ---

119 
r < [ 3 - V ( l + 8 α
2 ) ] / [ 2 ( 1 - α ) ] . 
(3.16.7) 
When r violates condition (3.16.7), there is a regime of stable cycles which 
gives way to chaotic solutions as the value of r increases. 
A suitable Liapunov function for establishing global stability is 
V(NUN2) 
= 
[(N
2-N?)I2-N?\n{NxIN*)] 
+ c[(N\-N2*
2)/2-N*
2ln(N2/NÏ)] 
(3.16.8) 
where c is a positive constant. For r = 1.1 and α = 0.5, we can let c = 0.5. 
Along solutions of model (3.16.1), we have 
AV(N) = m/2)[FUNuN2) 
- 1] —N2*
2 ïn[Fx (Nx, N2 )] 
+ c{(N
2
2/2)[F
2
2(Nl9N2)-l] 
-N*
2ln[F2(NuN2)]} 
(3.16.9) 
if we rewrite (3.16.1) in the f o r m ^ ^ i + 1) = N^^NuN^ 
andiV 2(i + 1) 
= 
N2F2(NUN2). 
It is difficult to show analytically that AV(N) is negative definite in the 
feasible region. However, we can show numerically that it is so by plotting 
the level surfaces of AV(N). 
Fig. 3.16.1 shows a number of level surfaces 
of the AV(N) function when r = 1.1, a = 0.5 and c = 0.5. Clearly in this case 
AV(N) is negative definite in the positive region. From this we conclude that 
model (3.16.1) is globally stable for this particular set of parameters. 
For some values of r and a which violate condition (3.16.7), model 
(3.16.1) has stable limit cycles. In particular, when a = 0.5 and r = 1.5, 
Fig. 3 . 1 6 . 1 . S o m e level surfaces of AV(N) 
in a two-species competition with a globally 
stable equilibrium.

--- Page 123 ---

120 
it has a two-point limit cycle at the points, (0.45, 0.2) and ( 0 . 8 8 , 1 . 1 3 ) . In 
this case we shall show by means of Theorem 3.15.1 that the system has a 
region of ultimate confinement. 
A suitable Liapunov-like function is 
V(N) = [(N[> -N
8
l^)/sl 
-HlN*
8^]n(N1/Nl*)] 
+ c 2 [(N
8
2> -N2*
8*)/s2 
— H2Nt
82ln(N2/N2*)] 
- W 
(3.16.10) 
where s
u s 2, Hu H2 and c are positive numbers. Along solutions of (3.16.1), 
we have 
AV(N) = ( J V W S l ) (F\* - l)-HtN*
8i 
In Fl 
+ c2[(N^/ 
s2) (F|> - 1) -H2N^]nF2]. 
(3.16.11) 
For r = 1.5 and a = 0.5, we find by trial and error that a suitable set of 
parameters is st = 1 . 0 4 , s 2 = 2 . 4 3 , ^ = 0 . 9 7 , # 2 = 0 . 7 2 and c 2 = 0.22. We 
find that the set X in which AV(N) is non-negative is made up of two disjoint 
sets as shown in Fig. 3.16.2. The smallest level surface of the Liapunov-like 
function (3.16.10) which entirely contains the set X is V(N) = V0 = 0.265. 
Note that W = - 0 . 0 0 2 . 
We require the maximum value of AV(N) for all N G X. As AV(N) is 
negative at points Ν outside the set X and which are in the positive orthant, 
it is more convenient to maximize AV(N) for all Ν in the feasible region. This 
gives AVm&x 
= 0.052 at a point inside the set X. By applying Theorem 3.15.1 
to model (3.16.1) with this particular set of parameters we find that it has a 
region of ultimate confinement, Y = {Ν | V(N) < V*} where V* = V0 + AVmi 
= 0.317. In Fig. 3.16.2 the level surface, V(N) = V*, appears to touch the 
Fig. 3 . 1 6 . 2 . V = V* is the boundary of a region o f ultimate confinement in a model o f a 
two-species competition with a two-point limit cycle.

--- Page 124 ---

121 
Νχ axis. In fact the minimum value of N2 on this level surface is approximately 
equal to 0.0017. 
Another Liapunov-like function which can be used to determine a region 
of ultimate confinement in model (3.16.1) is 
V(N) = Z
TPZ 
(3.16.12) 
where Ρ is a positive definite matrix and 
Zt-MNiFANuNJ/N?], 
/ = 1 , 2 . 
For the parameter values, r = 1.5 and a = 0.5, we find that a suitable Ρ matrix 
is Pi ! = 1, Ρi2 = —0.39 and P 2 2
 = = 0.2. It gives a region of ultimate confinement 
comparable to that given by the Liapunov-like function (3.16.10). 
C H A P T E R 3 : S E L E C T E D R E F E R E N C E S 
Local stability 
Willems ( 1 9 7 0 ) ; M a y ( 1 9 7 4 ) . 
Finite and global stability 
LaSalle and Lefschetz ( 1 9 6 1 ) ; Hahn ( 1 9 6 7 ) ; Willems ( 1 9 7 0 ) ; Goh ( 1 9 7 7 a ) . 
Single-species 
models 
Volterra ( 1 9 3 8 ) ; Pianka ( 1 9 7 2 ) ; Gilpin and Ayala ( 1 9 7 3 ) ; Schoener ( 1 9 7 2 ) ; Swann and 
Vincent ( 1 9 7 7 ) . 
Exploited 
single-species 
models 
Schaefer ( 1 9 5 4 ) ; Goh ( 1 9 6 9 / 1 9 7 0 , 1 9 7 7 c);Silliman ( 1 9 7 1 ) ; Brauer and Sanchez ( 1 9 7 5 ) ; 
Clark ( 1 9 7 6 a ) ; Agnew ( 1 9 7 9 ) . 
Two-species Lotka—Volterra 
models 
L o t k a ( 1 9 2 5 ) ; Volterra ( 1 9 3 1 ) ; Slobodkin ( 1 9 6 6 ) ; Goh ( 1 9 7 6 b, 1 9 7 9 ) ; Hsu ( 1 9 7 8 c ) . 
Prey—Predator 
models 
L o t k a ( 1 9 2 5 ) ; Volterra ( 1 9 3 1 ) ; Gause ( 1 9 3 4 ) ; Kolmogoroff ( 1 9 3 6 ) ; Rosenweig and 
MacArthur ( 1 9 6 3 ) ; Rosenzweig ( 1 9 6 9 , 1 9 7 1 ) ; Kilmer ( 1 9 7 2 ) ; May ( 1 9 7 4 ) ; Gilpin 
( 1 9 7 4 , 1 9 7 5 a ) ; Albrecht et al. ( 1 9 7 6 ) ; Bulmer ( 1 9 7 6 ) ; Goh ( 1 9 7 8 b);Hsu ( 1 9 7 8 a, c ) ; 
Kazarinoff and Van den Driessche ( 1 9 7 8 ) ; Harrison ( 1 9 7 9 b ) . 
Nonlinear two-species 
models 
Gilpin and Ayala ( 1 9 7 3 ) ; Rescigno and Richardson ( 1 9 7 3 ) ; M a y ( 1 9 7 4 , 1 9 7 6 b ) ; 
Schoener ( 1 9 7 4 ) ; Goh and Agnew ( 1 9 7 7 ) .

--- Page 125 ---

122 
Nonvulnerability, 
resilience and stochastic 
models 
Kaiman and Bertram ( 1 9 6 0 a ) ; LaSalle and Lefechetz ( 1 9 6 1 ) ; Yoshizawa ( 1 9 6 6 ) ; Kushner 
( 1 9 6 7 ) ; L e w o n t i n ( 1 9 6 9 ) ; Astrom ( 1 9 7 0 ) ; G o h ( 1 9 7 1 , 1 9 7 5 , 1 9 7 6 b, 1 9 7 8 d);Lashiher 
and Storey ( 1 9 7 2 ) ; Holling ( 1 9 7 3 ) ; Botkin and Soble ( 1 9 7 4 ) ; I n n i s ( 1 9 7 4 b ) ; M a y 
( 1 9 7 4 ) ; T u c k w e l l ( 1 9 7 4 ) ; Wu ( 1 9 7 4 ) ; Feldman and Roughgarden ( 1 9 7 5 ) ; Ludwig 
( 1 9 7 5 ) ; T u r e l l i ( 1 9 7 7 , 1 9 7 8 ) ; Harrison ( 1 9 7 9 a ) ; Tuljapurkar and Semura ( 1 9 7 9 ) ; 
Vincent and Anderson ( 1 9 7 9 ) ; Vincent and Skowronski 
( 1 9 7 9 ) . 
Discrete time models: local stability 
Kaiman and Bertram ( 1 9 6 0 b); Willems ( 1 9 7 0 ) ; J u r y ( 1 9 7 4 ) ; May ( 1 9 7 4 ) ; Beddington 
et al. ( 1 9 7 6 ) ; Clark ( 1 9 7 6 b ) ; Goh and Agnew ( 1 9 7 8 ) ; Hassell ( 1 9 7 8 ) . 
Finite and global stability in discrete time models 
Kaiman and Bertram ( 1 9 6 0 b); Diamond ( 1 9 7 6 a ) ; LaSalle ( 1 9 7 6 , 1 9 8 0 ) ; Goh ( 1 9 7 7 b); 
Fisher and Goh ( 1 9 7 7 ) ; Fisher and Kloeden ( 1 9 7 8 ) ; Fisher et al. ( 1 9 7 9 ) ; Goh and 
Agnew ( 1 9 7 9 ) . 
Region of ultimate confinement 
in discrete time models 
Kaiman ( 1 9 5 6 ) ; Beddington et al. ( 1 9 7 5 ) ; Li and Y o r k e ( 1 9 7 5 ) ; Diamond ( 1 9 7 6 b ) ; M a y 
( 1 9 7 6 a ) ; May and Oster ( 1 9 7 6 ) ; Fisher and Goh ( 1 9 7 7 ) ; Guckenheimer et al. ( 1 9 7 7 ) ; 
Marotto ( 1 9 7 8 ) .

--- Page 126 ---

123 
Chapter 4 
FISHERIES 
4 . 1 . I N T R O D U C T I O N 
Fish resources are very important renewable resources. It is estimated that 
the present total world catch of fish is 70-million metric tons. The exploitation 
of fish populations provides some classic examples of disastrous exploitation 
of a renewable resource. A few large fisheries have been destroyed by over­
fishing (Gulland, 1974). 
In this chapter, six management models of a single-species fishery are 
examined. The first is a dynamic pool model. The logistic equation is a well 
known example of this type of population. The second model combines a 
dynamic pool model of a fish population with the dynamics of the efforts 
which are used by several firms or countries in harvesting the fish resource. 
The third model is for a population with nonoverlapping generations (Ricker, 
1954). This model is often used in the management of a salmon population. 
The fourth model is the Beverton—Holt (1957) model for harvesting a fishery 
with many year-classes in order to maximize the total biomass yield. It leads 
to the prescription of an optimal size limit which depends on the effort that 
is used in the harvesting of the fish population. The fifth model is a discrete 
time version of the Beverton—Holt model. It was developed by Goh (1977 b) 
for a fishery with a limited fishing season. The sixth model is for a fish or 
whale population which has a well defined delayed recruitment. 
In practice the management of a fishery is a decision with multiple objec­
tives (Larkin, 1977; Gulland, 1978). Some of the desirable objectives in the 
management of fish resources are as follows: (1) the provision of good bio­
mass yield; (2) the conservation of the fish population; (3) the conservation of 
genetic variability of the fish population; (4) the provision of good economic 
returns; (5) the provision of steady employment; and (6) the provision of 
recreation. The formulation of good harvesting policies which take into 
account these objectives is a complex and difficult task even if the dynamics 
of a fish population is known accurately and if the objectives are fully quanti­
fied. One practical way around the mathematical difficulties in this complex 
problem is to convert tentatively all the objective functions except for one 
into constraints and optimize the remaining objective function. If the policy

--- Page 127 ---

124 
obtained in this manner is unsatisfactory, we should reset the constraints on 
the objective functions and optimize the main objective function. This process 
is repeated until a satisfactory policy from the overall point of view is obtained. 
The maximum sustainable yield (MSY) policy, which maximizes the bio­
mass yield, should be viewed as a first step in this process of formulating a 
harvesting policy which is satisfactory from an overall point of view. It pro­
vides the outer limit of the biomass yield under ideal conditions. 
Many fisheries, especially those which are managed by international com­
missions, are managed by prescribing a constant quota for the catch which is 
shared by the participating fishermen. This widespread practice has an un­
desirable feature. Generally an MSY equilibrium which is created by a con­
stant quota harvesting is unstable. In fact there is a contradiction of terms. 
This type of harvesting policy is sustainable only in an ideal mathematical 
sense, but in practice, it is not sustainable. The instability of this type of 
equilibrium can be overcome by using a variable quota policy which is pres­
cribed and implemented in a feedback manner. But this requires considerable 
effort in monitoring the population and its dynamics. 
If feasible, a more desirable harvesting policy is to prescribe a constant 
effort harvesting policy which generates the MSY equilibrium. This type of 
policy has a built-in stability mechanism. The effort that is used in the har­
vesting of a fish population is a measure of the number of standardized units 
of boats and the time that they are in service. With a constant effort, a lesser 
quantity of fish is caught if the population is below the MSY equilibrium, and 
a greater quantity is caught if it is above the MSY equilibrium. If a fish popu­
lation moves around in schools, this stability mechanism of a constant effort 
harvesting policy may not be very effective; in extreme cases, it is necessary 
to prescribe a stabilizing variable quota policy which is implemented in a feed­
back manner. 
The management of fisheries which takes into account the effects of dis­
count factors has been studied by Clark (1976 a, 1979). An interesting conse­
quence of a high discount rate is that it is optimal for a sole owner of a fishery 
to mine the fish population and drive it to extinction. When the discount rate 
is equal to zero it may also be optimal to drive a fish population to extinction. 
Goh (1969/1970) showed that for maximum biomass yield, it is optimal to 
drive a fish population to extinction if the planning horizon is short. 
4.2. T H E LOGISTIC M O D E L 
Suppose all members of a fish population have identical ecological proper­
ties. This implies that age differences among members of the population are 
not important. Under this assumption the population can be modelled by a 
nonlinear first order differential equation. In fisheries science this type of 
model is often called a dynamic pool model. The most popular dynamic pool 
model is the logistic model. It was applied to fish populations by Schaefer

--- Page 128 ---

125 
(1954). Optimal harvesting policies for harvesting a fish population described 
by a logistic model were developed by Goh (1969/1970), Clark (1973 a) and 
Cliff and Vincent (1973). 
Let N(t) be the population at time t. The logistic model of an unexploited 
fish population is 
The parameters r and Κ are called the intrinsic rate of increase and the carry­
ing capacity, respectively. 
The logistic model of an unexploited population has been criticised by 
many ecologists as being inadequate. However, the logistic model has the 
same qualitative behavior as members of a very large class of single-species 
population models which are described by a nonlinear differential equation. 
Consider the model 
where: (i) F(N) is autonomous, which means it does not contain t explicitly, 
(ii) F(N) is a continuous function of N, (iii) F(K) = 0, and (iv) F(N) < 0 when 
N> 
Κ and F(N) > 0 when Κ > N> 
0. Model (4.2.1) and model (4.2.2) both 
have a unique globally stable equilibrium in the positive region. This means 
that if a perturbation shifts the state to a positive point (N > 0) and the 
system is thereafter left alone, the natural dynamics would move the state into 
a small neighbourhood of Ν = Κ in a finite time interval. Hence, the common 
criticism of the logistic model, that the rate of increase per individual N/N is 
only a linear function of density, is not a serious one. 
There are two simple ways to prescribe how a fish population should be 
harvested, we can prescribe the harvesting rate or the fishing effort. If the tech­
nology for harvesting a fish population is very efficient, the impact of harvesting 
on the population can be specified in terms of the harvesting rate u(t) and 
This model is appropriate for whale populations. In some fisheries, it is the 
fishing effort that can be directly manipulated; the fishing effort is a measure 
of the number of boats and the number of hours each boat is in service. As 
the boats are usually different, there are some technical problems in convert­
ing the number of boats and the number of hours that are in service into 
standardized units. However, since the instantaneous fishing mortality rate is 
directly proportional to the fishing effort, we shall use it as the control variable 
in place of the fishing effort. It follows that a model of an exploited fishery is 
N=(rN/K)(K-N). 
(4.2.1) 
Ν = NF(N) 
(4.2.2) 
N=(rN/K)(K-N)-u. 
(4.2.3) 
Ν = (rN/K) (K-N)- 
EN 
(4.2.4) 
where Ε is a measure of the fishing effort. 
It is not widely realised or emphasized that there is a very important quali­
tative difference between model (4.2.3) and model (4.2.4) if u and Ε are con-

--- Page 129 ---

126 
stants. This difference is especially important if Ε and u are chosen so that 
the corresponding steady state would provide the so-called "maximum sus­
tainable yield". It appears that this serious oversight in fisheries has been 
caused by the standard approach of examining only the steady state yields 
and ignoring the question of whether the steady state is stable or not. The 
"maximum sustainable yield" (MSY) policy for model (4.2.3) is 
u = rK/4. 
(4.2.5) 
This gives an unstable equilibrium at Ν* = K/2. The maximum sustainable 
policy for model (4.2.4) is 
Ε = r/2. 
(4.2.6) 
This gives a globally stable equilibrium at N* = K/2. The region for the global 
stability is {iV I iV > 0 } . However, if the control variables u and Ε are used in a 
feedback 
manner as prescribed by optimal control theory, the qualitative 
difference between the two models disappears (Goh, 1969/1970). 
We shall examine the use of optimal control theory to formulate optimal 
policies for the exploitation of a population described by the logistic model. 
For this purpose we shall employ model (4.2.3), and assume that the control 
variable is bounded. We have 
0 < u(t) < um8LX 
(4.2.7) 
where umSui 
is a constant. A difficulty in the formulation of the problem is to 
decide what the time horizon in the problem should be. A standard approach 
in economic theory is to introduce a discount factor and let the time horizon 
be infinite. Another approach is to fix the time horizon temporarily, develop 
the optimal control policies and examine what happens when the time hori­
zon is expanded. If [0, T] is a fixed time interval, it is necessary to specify 
what should happen at time T. An advantage of this approach is that it forces 
the decision maker to specify what the state of the system should be at time 
Τ The economist's approach avoids this issue. We can tentatively prescribe a 
target, and alter it if the optimal policies which follow are unsatisfactory. Let 
N(T) > a 
(4.2.8) 
where α is a positive constant. 
At time t = 0, let the density of the fish population be known. We have 
N(0)=N0. 
(4.2.9) 
In practice, this means that the state variable can be measured. What we are 
really interested in is not just the solution for a particular initial state but 
solutions for all possible initial states. In other words, we seek optimal feed­
back solutions. This is because we want policies which are robust to large but 
infrequent perturbations of the state variable. 
The objective is to maximize the total biomass yield during the time inter­
val [0, T ] . As age differences among members of the population are ignored,

--- Page 130 ---

127 
the objective can be replaced by the maximization of the total number of fish 
caught during [0, T]. We have 
The optimal control problem is to choose an admissible control function u(t) 
which will maximize the function 
J[u]. 
There are two types of solutions; the occurrence of either one depends on 
whether umax 
> rK/4 or umax 
< rK/4. The mathematical analysis is given in the 
next section. In case (1), umax 
> rK/4. The optimal feedback policy is dis­
played in Fig. 4.2.1. The admissible state space is divided into two regions by 
the trajectory ABC. Typically if (f, N) is a point above ABC, the optimal 
control is u = 
until the trajectory intersects AB where Ν = K/2 or until 
the trajectory intersects CD at time T. The path AB is traversed by means of 
the singular optimal control (MSY policy), u = rK/4. At Β the optimal control 
switches to u = w m a x and this is maintained until t = T. If α = 0, the time taken 
to move from Β to C is (K/br) arctan(K/2b) where b = V [ # ( 4 u m a x 
—Kr)/4r]. 
As Τ is specified, point Β can be obtained by integrating (4.2.3) in reverse time. 
If (t, N) is a point below ABC, the optimal control is u = 0 until the trajec­
tory intersects the path ABC. If the point of intersection is along AB, singular 
control (MSY policy) u = rK/4 is used until Β when the optimal control 
τ 
(4.2.10) 
ο 
4 . 8 0 
TIME 
12.00 
D 
a 
Fig.4.2.1. Optimal feedback control policy: - » denotes a u = 
trajectory, 
denotes 
the singular control trajectory, and -> denotes a u = 0 trajectory.

--- Page 131 ---

128 
variable switches to 
until t = T. If the point of intersection is along BC 
the optimal control switches from u = 0 to u = 
umax. 
In case (ii) 
< rK/4. The singular control (MSY policy) violates the con­
straint (4.8.7). It is therefore inadmissible. The positive state space is divided 
into two regions by ABC which is generated by u = um20[. 
Above and along 
ABC, the optimal control is u = umax 
without any switch. Below ABC the 
optimal control is u = 0. This optimal feedback policy is displayed in 
Fig.4.2.2. We have A = (0, N*(0)) 
where 
c = (1/2W(K 
- 4UmaxK/r), 
(4.2.11) 
d = j ^ - c )
 e
X
p <
2 c T / X ) > 
<
4 ·
2 ·
1 2 ) 
N(0) = (K/2) - c(d + l)/(d - 1). 
(4.2.13) 
This defines uniquely the trajectory ABC. It is interesting to observe that 
there are two steady states. The equilibrium at K/2 4- c is stable, relative to 
all initial states in the region {N\N> 
(K/2) — c}. It is interesting that in spite 
of the constant rate of harvest umax, 
the population is increasing in the region 
{Ν I K/2 — c<N< 
K/2 + c } . The equilibrium at K/2 — c is unstable. Below 
K/2 — c it is optimal to drive the population to extinction. 
Consider again the case when umax 
> rK/4. When Τ 
°°, the singular opti­
mal control (MSY policy) u = rK/4 in theory forms the whole of the optimal 
policy except for an initial period. In practice the path AB is unstable and 
therefore cannot be maintained with the singular control. Any perturbation 
T I M E 
Fig.4.2.2. Optimal feedback control policy when u
m
a
x < rKIA: -*»• denotes a u = u: 
trajectory, and -> denotes a u = 0 trajectory.

--- Page 132 ---

129 
which causes the population to fall below K/2 will lead quickly to the extinc­
tion of the fish population unless a rest period or a reduced harvesting program 
is imposed to allow the population to rise to the K/2 level. In under-developed 
countries this stop—go policy is undesirable for social and economic reasons. 
A more practical and robust policy is to limit the value of umaK 
so that 
wmax < rK/4. When (rK/4 — u^) 
is large, the optimal control policy for this 
choice of umaK 
would be robust. However, a price for building this robustness 
into the optimal control policy is a corresponding loss of total yield. A small 
modification to the optimal control policy is to set u = umax 
whenever Ν > K/2 
— c and u = 0 whenever Ν < K/2 — c. This is a simpler policy. This leads to a 
stable policy (see Fig.4.2.3). 
If model (4.2.4) is used, the optimal feedback control policy is similar to 
that discussed above (Cliff and Vincent, 1973). But an important difference 
is that the "maximum sustainable yield" (MSY) policy Ε = r/2 creates a 
globally stable equilibrium. It is then a desirable policy because it provides 
steady employment for the fishermen, and a steady supply of fish; moreover 
the fish population is stable relative to a wide range of uncertainties. 
Clark (1976 a) has emphasized that economic considerations are crucial in 
the management of a fishery. In particular, if the maximum per capita growth 
rate of a population is less than the instantaneous discount rate and the 
cost of harvesting is neglected, then Clark (1976 a) showed that the optimal 
economic policy is to drive the population to extinction. 
Fig.4.2.3. A stable suboptimal feedback control policy: -*> denotes a u = u
m
a
x (< 
rK/4) 
trajectory, and -> denotes a u = 0 trajectory.

--- Page 133 ---

130 
If economic returns from the harvesting of a fish population are given top 
priority, then the objective function of (4.2.10) should be replaced by the 
total discounted net economic revenue 
τ 
J = je^lv-c/Wudt 
(4.2.14) 
0 
where υ is the price per unit fish, δ is the instantaneous discount rate and c/N 
is the average cost in catching one fish. If r > δ the optimal harvesting policy 
is qualitatively similar to that in Fig.4.2.1.except for a complex switching 
regime near t = T. The singular control equilibrium is given by 
Ν* = (K/4) [g + y/(g
2 + 8cd/vKr)], 
(4.2.15) 
u = (r/K)N*(K-N*) 
(4.2.16) 
where g = [(c/vK) + 1 — δ/r]. For large values of T, the behavior of the opti­
mal solutions for values of t close to Γ is of no practical significance. 
4.3. OPTIMAL C O N T R O L O F T H E LOGISTIC M O D E L 
Let N(t) be the population of time t. The logistic model of the natural 
dynamics of the population is 
Ν = (rN/K)(K-N). 
(4.3.1) 
The three major assumptions for this model are (i) all individuals are equiv­
alent, (ii) the parameters r and Κ are constants, and (iii) there is no time lag in 
the response of the actual rate of increase per individual to changes in popu­
lation density. Assumption (i) implies that age and sex differences are ignored. 
Assumption (ii) implies that the environment is constant. Assumption (iii) is 
a common assumption in differential equation models of a population. 
Initially let 
N(0)=N0. 
(4.3.2) 
Model (4.3.1) can be rewritten in the form 
dN 
dN 
, 
rN 
r(K-N) 
=
>
N '
= ι j - ir/KT
 
Κ Λ \ 
1—T\ ' 
(4.3.3) 
1 + (K/N0 — 1) exp (—ri)
 
v 
7 
The field of solutions when iVois varied is displayed in Fig.4.3.1. Clearly the 
equilibrium Ν = Κ is globally stable. The logistic model has the same qualita­
tive behavior as a large class of nonlinear models. 
Let (i) F(N) be autonomous, (ii) F(N) be continuous, (iii) F(K) = 0 and 
(iv) F(N) < 0 if Ν > Κ, and F(N) > 0üK> 
N> 
0. Consider the model

--- Page 134 ---

131 
TIME 
Fig. 4 . 3 . 1 . Solutions of the logistic model Ν = (r/K)N(K 
—N). 
Ν = 
NF{N). 
(4.3.4) 
It has an equilibrium at Ν = Κ. We shall prove that this equilibrium is globally 
stable in the feasible region; the proof will imply that it has the same qualita­
tive behavior as the logistic model (4.3.1). 
A general method to establish global stability is Liapunov's Method, which 
requires the construction of a suitable Liapunov function. A Liapunov func­
tion has essentially two properties: (i) it has a global minimum at the equil­
ibrium and (ii) the time derivative of the function computed along solutions 
of the system must be negative. A Liapunov function for model (4.3.4) is 
V(N) =N-K-K 
ln(N/K). 
(4.3.5) 
We have 
δ V/bN =(N- 
K)/N. 
(4.3.6) 
Hence, 3 V/bN > 0 when Ν > K9 and b V/bN < 0 when Κ > Ν > 0. It follows 
that V has a unique global minimum at Ν = Κ on the admissible set {N\N> 
0 } . 
Moreover V(N) ->
 0 0 as Ν 
0 + , and V(N) -> «> as Ν -* °°. Hence Ν = Κ is 
globally stable in the positive region {N\N> 
0 } . Computing V(N) along 
solutions of (4.3.4) we get 
V=(N-K)F(N). 
(4.3.7)

--- Page 135 ---

1 3 2 
As F(N) < 0 when N> K, and F(N) > 0 when Κ > Ν > Ο, V is negative for 
all positive values of Ν except when Ν = K. 
Briefly, the optimal control formulated in the previous section is derived as 
follows: 
System: 
Ν = (rN/K)(Κ 
— N) - u. 
( 4 . 3 . 8 ) 
Initially: 
ΛΓ(0) = Ν
0 . 
( 4 . 3 . 9 ) 
Terminally: 
Τ = constant, 
N(T) > a. 
( 4 . 3 . 1 0 ) 
Constraint: 
0 < u < u ^ . 
( 4 . 3 . 1 1 ) 
τ 
Objective: 
max j udt 
( 4 . 3 . 1 2 ) 
ο 
Solution: 
Let p(t) be the costate variable. By definition, the Hamiltonian 
function 
H[N, u, p] =p0u 
+p[(r/K)N(K-N)-u] 
( 4 . 3 . 1 3 ) 
where p0 > 0 . The costate equation is 
ρ = -dH/dN 
= -(pr/K) 
(Κ - 2N). 
( 4 . 3 . 1 4 ) 
The terminal condition N(T) > a is equivalent to the condition N(T) = a or 
N(T) > a. When N(T) = a, the transversality condition gives 
p(T) = constant. 
( 4 . 3 . 1 5 ) 
When N{T) > a, the transversality condition gives 
p(T) 
= 0 . 
( 4 . 3 . 1 6 ) 
Eq. ( 4 . 3 . 1 4 ) is a first order homogenous equation in p(t). Hence the terminal 
condition ( 4 . 3 . 1 6 ) implies 
p(t)= 
0 
( 4 . 3 . 1 7 ) 
for all t G [ 0 , Τ]. The terminal condition ( 4 . 3 . 1 5 ) provides no immediate 
information. 
The optimality conditions are 
U 
= 
Umax 
°
n
l y
 
i
f dH/bU > 
0 , 
u = 0 
only if bH/du< 
0 , 
"max >
 
u >
 
0 
o
n
l y
 
i
f 
a
/
f /
a "
 
= 
° - 
( 4 . 3 . 1 8 ) 
Assuming that p0 = 1 , we have 
dH/bu = l-p(t). 
( 4 . 3 . 1 9 ) 
The control variable u appears linearly in the Hamiltonian function H(N, w,p).

--- Page 136 ---

133 
This indicates that the problem may have an optimal singular control. Along 
a singular extremal, 
Note that in this problem u maximizes H(N, u, p), as our objective is to maxi­
mize the total biomass yield. Fromeq. (4.3.21) the singular extremal is Ν = K/2. 
Employing conditions (4.3.20) to (4.3.22), we deduce that the singular con­
trol is u = rK/4. Condition (4.3.23) shows that the generalized Legendre con­
dition for singular control is satisfied. 
At time θ e [ 0 , T ] , let the control variable switch from one level to another. 
The costate function p(t) must satisfy the condition 
Our job now is to make use of the conditions we have written down to syn­
thesize the optimal feedback control policy. If p(t) satisfies (4.3.17), then 
condition (4.3.18) implies that the optimal control u = 
without any 
switch in the control variable. Integrating backwards from every point in the 
target {N\ N(T) > a } , we find that the maximum control and no switch policy 
is only feasible for some initial states. The boundary of the region in the state 
space which contains such initial states is EBC as shown in Fig.4.2.1. Next, 
we draw the singular extremal AB in Fig.4.2.1. This is done under the assump­
tion that 
> rK/4. Condition (4.3.23) shows that this singular extremal 
satisfies the generalized Legendre condition for optimality. For initial states 
above AB, the simplest way to get to the singular extremal is to employ the 
control u = umax 
until the trajectory intersects AB. For initial states below 
ABC, the simplest way to get to ABC is to employ u = 0 until the trajectory 
intersects ABC. This exhausts all the initial states in the feasible region. The 
complete feedback control policy is displayed in Fig.4.2.1. Its optimality can 
be established by using Green's Theorem (Mancill, 1950; Miele, 1962). 
Consider the case when the singular control violates the constraint (4.3.11). 
We have 
< rK/4. Employing condition (4.3.16), we integrate (4.3.8) and 
(4.3.14) backwards from points in the target {N\N(T) 
> a}. This generates 
optimal trajectories along which u = 
without any switch in the control 
variable. Such trajectories will cover a large portion of the state space. This is 
shown in Fig.4.2.2. The lower boundary of this region is the extremal A B C 
The integrand of the objective function is L = u. Clearly the functional is 
maximized if it is possible to use the maximum control for all t G [0, Τ]. 
However, this simple argument is not valid for more complicated functionals. 
For states below ABC, it is advantageous to get to the trajectory ABC quickly. 
This can be achieved by setting u = 0 until the trajectory intersects ABC. 
bH/bu = 1 - p(t) = 0, 
(d/dt) (bH/bu) = (pr/K)(K 
— 2N) = 0, 
(d
2/dt
2)(bH/bu) 
= -(2pr
2/K
2)N(K 
-N) 
+ 2pru/K = 0 
=> d/bu(d
2/dt
2)(dH/du) 
= 2pr/K = 2r/K> 
0. 
(4.3.20) 
(4.3.21) 
(4.3.22) 
(4.3.23) 
P ( H
S P ( » + ) . 
(4.3.24)

--- Page 137 ---

134 
4.4. S T A B I L I T Y O F BIONOMIC E Q U I L I B R I U M 
Let us suppose a large number of fishermen or firms is exploiting a fish 
population and the cost per unit of effort is the same for each fisherman or 
firm. If the fishery is not regulated, a plausible model of the fishery is 
where Ν is the fish population, NF(N) is the natural growth rate, Ε is a mea­
sure of the fishing effort, ρ is the price of one fish, c is the cost per unit of 
effort, and c and k are positive constants. Eq. (4.4.1b) implies that the rate 
of increase of the effort is proportional to the rate of net economic revenue. 
This model has equilibria at (JV*, E*) = (c/p, F(c/p))9 
(N\ E') = (0, 0), and 
(N",E") 
= (K, 0) where Κ satisfies F(K) = 0. 
Suppose pK - c < 0, F(N) < 0 for Ν > Κ, and F(N) > 0 for Ν < Κ. In this 
case, every solution which begins in the positive quadrant will converge to 
(K, 0). Therefore if pN — c > 0 and Ε > 0 at t = 0, only a transient fishing 
industry is possible because it is not worthwhile to exploit the fish continu­
ously. This result can be established rigorously by using the Liapunov func­
tion 
V(N,E) 
= d[N-K-Kln 
(N/K)] 
+ d\E\ 
where d = 1 and d = d/(pk). 
If F(N) < 0 for small values of iV, then every solution which begins in a 
small neighbourhood of (0, 0) will converge to (0, 0). This can be established 
by using the Liapunov function 
V(Ny E) = \N\ + 
\E\/(pk). 
In this case, the exploitation of the fish population for low initial popula­
tion level will drive it to extinction. 
On the other hand, consider the case where the equilibrium is positive. If 
F(N) - F(c/p) 
< 0 for Ν > c/p, and F(N) - F(c/p) 
> 0 for Ν < c/p, then the 
equilibrium (c/p, F(c/p)) 
is globally stable. This means that every solution 
which begins in the positive quadrant converges to the equilibrium. Here the 
dynamics of the fishery is robust. This result can be established by using the 
Liapunov function 
V(N, E) = di[N — Ν* — N* In (N/N*)] + d2[E — Ε* —E* In (E/E*)] 
where dx = 1, d2 = l/(pfc), N* = c/p and E* = 
F(c/p). 
If the population experiences difficulties in breeding at low densities 
(Allee effect), it is possible that F(N) — F(c/p) 
> 0 for some N> 
c/p, and 
F(N) — F(c/p) 
< 0 for all values oîN< 
c/p. In this particular case, the equil­
ibrium (c/p, F(c/p)) 
is unstable. Mathematically the population cannot be 
Ν = NF(N) — EN, 
E = 
kE(pN-c) 
(4.4.1a) 
(4.4.1b)

--- Page 138 ---

135 
driven to extinction during a finite time interval. But for small values of N9 
the model for the fish population dynamics breaks down; and in practice, the 
fish population can be driven to extinction by overfishing in a finite time. 
Next consider the case in which the fish population is exploited by several 
firms or countries, each of which has a different price and cost structure. 
Suppose the fishery dynamics can be described by the equations, 
Ν = NF(N) - (Ex + E2 + . . . + 
Em)N9 
Èt = k.E.iPiN-c^ 
i = 1, 2, . . ., m, 
where ft., p i and c i are positive constants. 
By definition the first harvester is the most efficient harvester if cl/pl 
< 
q/pf for / = 2, . . . , m. Here every solution of (4.4.2) which begins in the set 
S = {(Ν, Ε) I N> 
0, Εχ > 0 and Et > 0, ι = 2, . . ., m} will converge to the 
equilibrium (cxlpu 
F(cx/px), 
0, . . ., 0), if F{N) - F(cx/px) 
<0forN> 
cx/pu 
and F(N) — F(cjpi) 
> 0 for Ν < cjpi. 
In this case the most efficient 
harvester 
will eliminate the other harvesters. This result can be established by using the 
Liapunov function 
m 
V(N, E) = [N-N*-N* 
In (N/N*)] + dl[El 
—E* — E*ln 
(EJE*)]+ 
£ 
d f | £ . | 
i= 2 
where dt = l/(p yft y) for j = 1, 2, . . ., m. 
Along solutions of the model in the positive orthant 
m 
V(N,E) 
= (N-N*)[F(N)-F(cJPl)]+ 
£ 
(c,/p, - 
cjp,). 
i = 2 
It follows that V(Ny E) < 0. Moreover V(N, E) does not vanish identically 
along a nontrivial solution. Hence every solution of (4.4.2) which begins in 
the positive orthant converges to (cx lpx, 
F ^ / p O , 0, . . . , 0). Similar analysis 
can be carried out for the other subsets of S. In other words the equilibrium 
(Ci/Pi, F(cx /pi ), 0, . . . , 0) is globally sector stable. 
4.5. STOCK R E C R U I T M E N T M O D E L 
In this section we shall consider some concepts for the management of a 
population with nonoverlapping generations in order to maximize the long-
term biomass yield. These concepts are useful for the management of a 
salmon population even though the latter usually has several overlapping 
generations. To first approximation the dynamics of each year-class in a 
salmon population behaves like that of a population with nonoverlapping 
generations. 
Let N(t) be the number of fish in the tth generation. A model of this type 
(4.4.2a) 
(4.4.2b)

--- Page 139 ---

136 
of population is 
N(t + 1) = N(t) F[N(t)] 
(4.5.1) 
A well known example as proposed by Moran (1950) and Ricker (1954) is 
N(t + l)=N(t) 
exp [ r ( l - N ( t ) / K ) ] . 
(4.5.2) 
Other examples are: (i) F(N) = c/(l + aiV), where a, b, c are positive constants, 
(Hassell, 1975); and (ii) F(N) = a exp -bN
2 
(Goh and Agnew, 1978). 
This type of model is used in the management of a salmon population. 
Typically it takes 4 years for a salmon to return to a river to spawn and it dies 
after spawning. Thus a salmon population can be managed as a collection of 
four separate subpopulations each of which behaves like a population with 
nonoverlapping generations. In practice there is a small diffusion between 
the adjoining subpopulations. 
By definition the group of fish which is vulnerable to fishing at time t is 
known as the recruitment. Let u(t) be the number of fish that is harvested 
during the time interval [£, t + At] where Af is a small number. Let H(t) be 
the post-harvest population (the escapement) at time t + Δί, and N(t) be the 
pre-harvest population at time t. Suppose spawning takes place after the har­
vesting period. Using (4.5.1) and the definitions of H(t) and u(t), we get 
H(t + 1) = H(t)F[H(t)] 
- u(t + 1). 
(4.5.3) 
If (//*, u*) is a steady state of (4.5.3), then 
PARENT STOCK 
(THOUSANDS) 
"
 1 
U 
Fig.4.5.1. Three stock recruitment functions: C I represents R - 0 . 1 2 S ( 1 — S / 6 0 0 ) ; C2 
represents R = 0 . 1 2 S exp [—(In 3 ) ( S / 4 0 0 )
2 ] ; and C3 represents R = 0 . 1 2 S exp [—(In 3 ) 
( 5 / 4 0 0 ) ] .

--- Page 140 ---

137 
H* = H*F(H*) - u*. 
(4.5.4) 
The corresponding yield (number of fish harvested) per unit time is 
u* = H*F(H*) — H*. 
(4.5.5) 
The function u*(H*) is a maximum only if du*/dif* = 0. Therefore a necessary 
condition for a maximum steady state yield is 
d[H*F(H*)]/dH* 
= 1. 
(4.5.6) 
Using discrete time optimal control theory, it can be shown that the pair (u*, 
//*) which satisfies (4.5.5) and (4.5.6) also satisfies the necessary conditions 
for a long-term optimal policy which maximizes the yield. The pair (u*, H*) 
which satisfies (4.5.6) is called the MSY policy. 
If the handling time is negligible and the effects of the fish schooling are 
insignificant, then a constant effort harvesting can be approximated by a 
constant fraction harvesting. If E(t) is the fraction of a cohort which is har­
vested impulsively at recruitment, then (4.5.3) gives 
H(t+ 
1) = [l~E(t 
+ l)]H(t)F[H(t)]. 
(4.5.7) 
We shall show that the MSY equilibrium is locally stable if it is created by 
a constant fraction harvesting policy and that it is unstable if it is generated 
by a constant quota harvesting policy (Goh, 1977 c). 
Let E** be the constant fraction harvesting which generates the MSY equil­
ibrium. We have E** = u**/H** where u** satisfies (4.5.5) and (4.5.6). A neces­
sary and sufficient condition for 
to be a locally stable equilibrium of 
(4.5.7) is 
\(d/dH)(l-E**)HF(H)\ 
< 1. 
(4.5.8) 
Using (4.5.6) this condition is equivalent to 
| ( 1 - £ * * ) | < 1. 
(4.5.9) 
Clearly this condition is satisfied because 1 > E** > 0. We conclude that a 
MSY equilibrium which is generated by a constant fraction harvesting is 
locally stable. 
Let u** generate an MSY equilibrium at H**. Under the constant quota u** 
harvesting policy the population dynamics is described by 
H(t + 1) = H(t)F[H(t)] 
- u**. 
(4.5.10) 
If x(t) = H(t) 
the linearized dynamics of (4.5.10) is 
x(t + 1) = x(t) - ax
2(t) 
(4.5.11) 
where a = —(d
2ldH
2)(HF(H)) 
at H**. For most population models, a is posi­
tive. If 1/a > x(0) > 0, then x(t) - 0 as t 
«>. If x(0) < 0, then x(t) -» - ~ as 
t 
°°. It follows that 
is an unstable equilibrium of (4.5.10). Thus a 
constant quota harvesting policy which creates a MSY equilibrium is unstable.

--- Page 141 ---

138 
In practice the recruitment to the fish population varies from year to year. 
A way to manage the population in the presence of this type of uncertainty 
is to control the escapement. Firstly the function HF(H) is obtained by fit­
ting it to stock (parent population) and recruitment data. From this the MSY 
equilibrium 
is computed. The value of H** is also called the optimal 
escapement for maximum biomass yield. By definition the recruitment at 
time (t + 1) is R(t + 1) = H(t)F[H(t)]. 
A harvesting policy for this type of 
population is 
R(t)-H** 
if 
R(t)>H**, 
u(t)=- 
_ 
(4.5.12) 
( 0 
if 
R(t)<H**. 
The dynamics of the harvested population is 
ifÄ(f + ! ) > # * * , 
H(t + 1) 
(4.5.13) 
H(t)F[H(t)] 
if R(t + 1) < 
If. 
If H(t + 1) > H(f) for all H(t) < H** and H(t + 1) > 0 for all H(t) > 
#*\ 
then by Theorem 4.6.3, model (4.5.13) is globally stable. Clearly this is a 
very robust harvesting policy. Another desirable feature of this harvesting 
policy is that the population is rapidly driven to 
4.6. S T A B I L I T Y O F A STOCK R E C R U I T M E N T M O D E L 
In this section, several sets of sufficient conditions for stability of an 
equilibrium of a stock recruitment model for a population with nonoverlap­
ping generations are established (Fisher et al., 1979; Goh, 1980). 
All existing stock recruitment models for unexploited populations have 
continuous stock-recruitment relations; this is not necessarily so with a har­
vested population. For an example, let us assume that it is difficult to esti­
mate the current recruitment to a fish population; and assume further that 
the recruitment in the previous generation is known from catch data. Suppose 
u* denotes a constant quota policy which generates a desirable equilibrium at 
H* for model (4.5.3). Then a reasonable harvesting policy for model (4.5.3) is 
u(t + 1) = 
u* 
if 
H(t)>H*, 
[0 
itH(t)<H*. 
(4.6.1) 
With this delayed feedback harvesting policy, the right hand side of (4.5.3) is 
a discontinuous function of H(t). Mathematically this type of equilibrium is 
said to be unstable, because H(t) = H* — e, where e is a small positive number, 
gives rise to H(t + 1) which differs from H* by a relatively large number. 
Nevertheless H* can be an attractor. This means that every solution of (4.5.3) 
which begins near H* will converge to H* as t -* °°. For harvested population, 
this may be a desirable dynamical property of the population.

--- Page 142 ---

139 
By definition the stock recruitment model 
N(t+ 
l) = 
G[N(t)] 
(4.6.2) 
has an equilibrium at N* if G(iV*) = N*. The equilibrium N* is globally stable 
if every solution of (4.6.2) which begins in the set {N\N> 
0} remains in it 
and converges to N* as t -> °°. Moreover every solution which begins close to 
N* remains close to N*, If the model has this behavior only in a finite neigh­
bourhood of iV*, the equilibrium is said to have a finite region of stability. 
Theorem 4.6.1. Let Q(N): [ΛΓ*, °°) -> (0, N*] be a continuous 
and strictly 
monotonie 
decreasing function such that Q(N*) = N* and Q(N) 
0+ as 
Ν -> °o. Let P(N): (0, Ν*] -* [N*, «>) be the inverse function of Q(N). The 
equilibrium 
N* of (4.6.2) 
is globally stable if (i) G(N*) = N*, N* > 0; (ii) P(N) 
> G(N)>NforallNe 
(0, N*); and (iii) iV> G(iV) > 
Q(N)forallN>N* 
(see Fig. 
4.6.1). 
Proof. This theorem is proved by showing that the function 
is a Liapunov function of (4.6.2). 
The graph of P(N) is the image of that of Q(N) in the "mirror" described 
V(N) = 
P(N)-N 
ΐοτΝ*>Ν> 
0, 
N-Q(N) 
for 
N>N* 
(4.6.3) 
ο 
N* 
Ν 
Fig.4.6.1. P(N) 
> G(N) 
> Ν for all N G ( 0 , Ν*), and Ν > G(N) 
> Q(N) 
for all Ν > Ν*. 
The 
equilibrium ΛΤ of N(t 
+ 1 ) = G(N) 
is globally stable.

--- Page 143 ---

140 
by the line y(N) = N. Thus P(N) inherits from Q(N) the following properties: 
(i) it is continuous; (ii) it is strictly monotonie decreasing; (iii) P(N*) = N* and 
(iv) P(N) -> oo asAT-+ 0+. It follows that V(N) of (4.6.3) has the properties: 
(i) it is a continuous function; (ii) it is strictly monotonie decreasing for N* 
> Ν > 0 and it is strictly monotonie increasing for Ν > Ν* ; and (iii) V(N) 
-> oo as ΛΓ-> °° or as TV 
0+. 
By definition, the function 
AV(N) = V[G(N)] 
- V(N). 
(4.6.4) 
We show that AV(N) is negative definite by examining five cases: 
(1)N*>N> 
0andP(iV)> G(N) > N*; (2) N* > N> 
0 and N* > G(N) > N; 
(3) Ν > Ν* and N> 
G(N) > N*\ (4) N> N* and N* > G(N) > Q(N); and 
{5)ΝΦΝ* 
and G(N) = N*. 
In case (1), we have 
AV(N) = [G(N) - Q(G(N))] 
- 
[P(N)-N] 
< [G(N) - Q(P(N))] 
- [P(N) 
-N] 
because (i) P(N) > G(N) and (ii) Q(N) is a strictly monotonie decreasing 
function. Furthermore Q(P(N)) = Ν because P(N) is the inverse function of 
Q(N). It follows that 
AV(N) < G(N) - P(N) < 0. 
(4.6.5) 
In case (2), we have 
AV(N) = [P(G(N)) - G(N)] - [P(N) 
-N] 
= [P(G(N))-P(N)] 
- [G(N)-N] 
< 0, 
(4.6.6) 
because (i) G(N) > N, and (ii)P(JV) is a strictly monotonie decreasing function. 
Similarly it can be shown that AV(N) < 0 in cases (3) and (4). In case (5), 
AV(N) = 0 - V(N) < 0. It follows that AV(N) is negative definite for Ν > 0. 
Therefore V(N) is a Liapunov function. We conclude that N* is globally 
stable. 
Corollary 4.6.1. Let r be a positive constant and RAS = {N\ V(N) < r] where 
V(N) is given in (4.6.3). 
The set RAS is a finite region of attraction of N* if 
(i) C(N*) = JV*, (ii) P(N) > G(N) > Ν for all N e RAS η {ΛΓ| N*> Ν > 0 } , 
and (iii) N> 
G(N) > Q(N) for all Ne 
RAS Π {N\N> 
Ν*}. 
Corollary 4.6.2. Let G
,(iV*+) = lim dG/dN asN^ 
N*+ ; and similarly, let 
G'(N*—) = lim dG/dN asN-* AT*— Lei c be a positive constant. 
The equil­
ibrium N* of (4.6.2) 
is locally stable if (i) G(N*) = AT*; (ii) 1 > G
,(JV*+) 
> - c ; and (iii) 1 > G'(N*—) > - 1 / c .

--- Page 144 ---

141 
Proof. Let Q(N) = N*-c(N-N*) 
and P(N) =N*-(N- 
JV*)/c. The func­
tion P(JV) is the inverse function of Q(N). If G(N) satisfies conditions (ii) and 
(iii), then there exists a small positive number e such that (a) P(N) > G(N) 
> JV for all JVe (JV* - e, JV*); and (b) N> G(N) > Q(N) for ail Ne (Ν*, N* 
+ e). Hence N* is locally stable. 
Corollary 4.6.3. Let Q(N) and P(N) be the functions as defined in Theorem 
4.6.1. 
The equilibrium 
N* is unstable if (i) G(N*) =N*; (ii) G(N) > P(N) or 
G(N) < Ν for all Ne (0, Ν*); and (iii) G(N) >Nor 
G(N) < Q(N) for all Ν 
e (N*, °o). 
Theorem 4.6.2. Letb> 
N* be a constant. 
Let Q(N): [N*,b]-> 
[0, N*] be a 
continuous 
and strictly monotonie 
decreasing function such that Q(N*) = N* 
and Q(b) = 0. Let P(N): [0, N*] -> [JV*, b] be the inverse function of 
Q(N). 
The equilibrium 
N* of (4.6.2) 
is globally stable if (i) G(N*) =N*; (ii) P(N) 
> G{N) > Ν for all Ν e (0, JV) ; and (iii) Ν > G(N) > Q(N) for all Ν Ε (JV*. b) 
and Ν > G(N) > 0 for all Ne(b,°°) 
(see 
Fig.4.6.2). 
Proof. Consider the function 
(P(N)-N 
iorNG(0,N*), 
V(N) = [N- 
Q(N) 
for JV € [JV*, b), 
Ν 
tor Ne [b, «Ο. 
(4.6.7) 
Fig.4.6.2. P(N) > G(N) 
> Ν for all Ν e ( 0 , N* ), and Ν > G(N) 
> Q(N) 
for all JV > N*. 
The 
equilibrium JV* of N(t 
+ 1 ) = G(JV) is globally stable.

--- Page 145 ---

142 
Using arguments similar to those in the proof of Theorem 4.6.1, we deduce 
that {Ν I V(N) < b} is a region of attraction of N*. We have {N I V(N) < b} 
= {N\0<N< 
b}. 
If the conditions of the theorem are satisfied, then AV(N) < 0 for alliV> b. 
This implies that every solution of (4.6.2) which begins at a finite point in the 
interval (&, °°) remains bounded and positive for all t > 0 and ultimately enters 
the set {N\ 0 < Ν < b]. We conclude that every solution of (4.6.2), which 
begins in the set {N\N> 
0 } , converges to N* as t -> «>. 
The function V(N) of (4.6.7) does not tend to infinity asiV-> 0+. There­
fore it is not "radially unbounded". Thus it is not a Liapunov function accord­
ing to the classical definition of a Liapunov function (see Kaiman and Bertram, 
1960 b). However, according to a recent definition by LaSalle (1976), a 
Liapunov function has to satisfy only two conditions. These are (i) V(N) is 
continuous on a given set S and (ii) AV(N) < 0 for all Ν E S. To distinguish 
this new definition from the classical one, we shall call a Liapunov function 
which satisfies the new definition a weak Liapunov function. Thus V(N) of 
(4.6.7) is a weak Liapunov function. 
If a weak Liapunov function is used, it is essential to give another argu­
ment which ensures that every solution of a model remains bounded and 
stays in a given set for all values of t > 0. 
Theorem 4.6.3. The equilibrium N* of (4.6.2) 
is a global attractor if (i) G(7V*) 
= JV*;(ii) JV*> G(N)>NforallNE 
(09N*);and 
(iii) i\T > G(N) > 0 for all 
Ne(N*,oo) 
(see 
Fig.4.6.3). 
Proof. We shall use the vector function 
Following LaSalle (1976), we construct a scalar Liapunov function V(N) 
from a vector function w(N) by letting 
Eqs. (4.6.8) and (4.6.9) give 
N* 
ifN*>N>0, 
V(N) = 
(4.6.1 
[N 
if 
N>N*. 
The function AV(N) is shown to be negative semidefinite by considering 
the auxiliary vector difference function 
(4.6.8) 
V(N) = m a x i M J V ) , 
(4.6.9)

--- Page 146 ---

143 
Fig.4.6.3. JV* > G(N) > Ν for all JV e ( 0 , JV*), and JV > G(JV) > 0 for all JV > JV*. The 
equilibrium JV* of JV(i + 1 ) = G(N) is globally stable. 
w(N) = w(G(N)) - V(N) u 
(4.6.11) 
where u is a vector with components Mi = 1 and u 2 = 1. We have 
max {ibAN)} = max {wAG(N)) - 
V(N)} 
I 
1 
= max {w,(G(N))} 
- 
V(N) 
i 
= AV(N). 
(4.6.12) 
It follows that AV(N) < 0 if ώ(ΛΓ) < 0, where 0 denotes a zero vector. 
For N* > N> 
0 and N* > G(N) > N, we have 
w(N) 
= 
iv*-G(i\o] _ γ λ τ ι 
= r - G ( i v ) i 
<
o 
(4.6.13) 
It follows that every solution of (4.6.2) which begins in the open interval (0, 
N*) remains in it for all t > 0. In addition the condition AiVi(N) = —G(N) < 0 
for all N G (0, Ν*) implies that every solution which begins in the interval (0, 
N*) converges monotonically to N* as t -+ °°. 
ForN> 
iV*, it can be shown that w(N) < 0 by considering separately the 
cases: (i)N> 
G(N) > JV*, (ii) N* > G(N) > 0, and (iii) G(N) = JV*. Hence 
AV(N) < 0 for N> 
JV*. This implies that every solution of (4.6.2) which 
begins at a finite point in the open interval (JV*,
 0 0 ) is bounded for allt > 0.

--- Page 147 ---

144 
Conditions (ii) and (Iii) imply that every solution which begins at a positive 
point remains positive for all t > 0. We conclude that every solution of 
(4.6.2) converges to JV* as t 
«>. 
If G(JV) is continuous at JV* and it satisfies the conditions of Theorem 
4.6.3, then JV* is globally stable. However, if G(N) is discontinuous at JV*, the 
equilibrium is locally unstable even though it is a global attractor. In other 
words, every solution which begins at a positive point converges to JV* as 
t -* °°, but a solution which begins near JV* may not remain close to JV* for all 
values of t > 0. 
Theorem 4.6.4. Letb>N*bea 
constant 
Let Q(N): [&, «>) -* (0, JV*] be a 
strictly monotonie 
decreasing and continuous function such that Q(b) = JV* 
and Q(N) 
0+ as JV^ «>. Let P{N): (0, N*] 
[&, «>) &e ίήβ inverse function 
of Q(N). The equilibrium N* is a global attractor if (i) G(N*) = iV*; (ii) P(iV) 
> G(N) > Ν for all Ν e (0, JV*); (iii) JV > G(JV) > JV* for a// JV G (JV*, fa] ; 
and (iv) JV> G(JV) > Q(JV) for all Ne 
(&, « ) f s e e 
Fig.4.6.4). 
This theorem can be proved by using arguments which are similar to those 
in the proofs of Theorems 4.6.1 and 4.6.3, and by using the vector function 
P(N) 
Fig.4.6.4. P(N) > G(N) > Ν for all JV G ( 0 , JV*), and JV > G(N) 
> Q(N) for all Ν > JV*. The 
equilibrium N* of N(t + 1 ) = G(N) is a global attractor.

--- Page 148 ---

145 
w(N) = 
forN*>N> 
Ο, 
for 
b>N>N*, 
ΐοτΝ> 
b. 
Corollary 4.6.4. Let b < N* be a positive constant 
Let Q(N): [ΛΓ*, °°) -* (0, &] 
be a strictly monotonie 
decreasing and continuous 
function such that Q(N*) 
= b and Q(N) 
0+ as 
«>. Let P(N): (0, b] -> [iV*, «>) be the inverse 
func­
tion of Q(N). The equilibrium N* is a global attractor if (i) G(N*) =N"; (ii) 
P(N) > G(N) > Ν for all Ne (0,b]; 
(iii) N* > G(N) > Ν for all Ν e (&, N*); 
and (iv) N> G(N) > Q(N) for all Ne (JV\ « ) . 
The proof of this corollary is similar to that for Theorem 4.6.4. 
4.7. G L O B A L S T A B I L I T Y O F T H E R I C K E R M O D E L 
One of the best known stock recruitment models is 
N(t + 1) =N(t) exp [r(l -N(t)/K)] 
(4.7.1) 
where r and if are positive constants. This equation was used by Moran (1950) 
to demonstrate oscillatory behavior in population models and by Ricker 
(1954) in the management of a salmon population. We shall demonstrate the 
usefulness of the results in Sections 4.5 and 4.6 by applying them to model 
(4.7.1). 
May (1976 a) showed that (4.7.1) has (i) a stable equilibrium atN* = Κ if 
2 > r > 0; (ii) stable cycles if 2.692 > r > 2; and (iii) chaotic solutions if 
r > 2.692. 
From (4.5.4) we deduce that under constant fraction harvesting we have 
H(t + 1) = (l-E)H(t) 
exp [r(l -H(t)/K] 
(4.7.2) 
where H(t) denotes the post-harvest population in the ith period and Ε is a 
positive fraction. Model (4.7.2) has a steady state at if* = 1 — l / [ r ( l — E)] 
which is positive if 1 — 1/r > Ε > 0. Comparing (4.7.1) with (4.7.2), we 
deduce that increasing the value of Ε stabilizes the population, provided that 
Ε < 1 - 1/r.

--- Page 149 ---

146 
Condition (4.5.10) implies that the MSY constant effort harvesting policy 
always creates a locally stable equilibrium. For (4.7.2) the MSY equilibrium 
is unique and globally stable. Another interesting observation is that the MSY 
equilibrium is stable even if the unexploited population model has chaotic 
behavior. For example, consider model (4.7.1). It has chaotic behavior if 
r = 4 and Κ = 1; its MSY equilibrium under constant effort harvesting is at 
H* = 0.2381 and the corresponding value of Ε is 0.9525; this MSY equil­
ibrium is globally stable. 
This observation on the stability of the MSY equilibrium provides a way to 
distinguish between fluctuations in a population with nonoverlapping genera­
tions which are caused by chaotic behavior (i.e. they are caused by natural 
dynamics), and those which are caused by random disturbances. If an un­
exploited population has chaotic behavior, a sufficiently high constant effort 
harvesting could damp out the fluctuations. However, if the fluctuations are 
caused by random disturbances, then no constant effort harvesting could 
damp out the fluctuations completely. 
If economic factors are ignored, the long-term optimal harvesting policy 
for maximum yield is to maintain the population at the MSY level. As pointed 
out by Clark ( 1 9 7 6 a, p. 248) the optimal harvesting policy which incor­
porates economic factors could be very complex. 
We shall show that model (4.7.1) is globally stable if 2 > r > 0. This implies 
that (4.7.2) is globally stable if H* = 1 - l / [ r ( l - E)] > 0 and 2 > r + 
l n ( l - i ? ) > 0. 
Using Theorem 4.6.1, we construct first a strictly monotonie decreasing 
function Q(N) such that G(N) = JV exp [r(l — JV)] > Q(N) for all JV> K. As 
2 > r > 0, we choose 
Q(N) = JV exp 2(1 - N/K) 
(4.7.3) 
for N> Κ Clearly G(N) > Q(N) for JV> K. Unfortunately P(JV), the inverse 
function of Q(JV), cannot be expressed as an explicit function. It is obtained 
numerically by making use of the property that P(N) is the image of Q(N) 
in the "mirror" y = N. 
For Κ > Ν > 0 and 2 > r > 0, we have 
Ν exp [2(1 - Ν/Κ)] > Ν exp [r(l-N/K)]. 
(4.7.4) 
Thus a sufficient condition for P(N) > G(N) for all Ν G (0, Κ) and r G (0, 2) 
is that JP(JV) > N exp [2(1 -N/K)] 
for all JVG (0, K). It can be shown graph­
ically that P(N) > Ν exp [2(1 - N/K)] 
for all Ν e (0, K). Using Theorem 
4.6.1 we conclude that (4.7.1) is globally stable if 2 > r > 0. 
Using Theorem 4.6.2 we can show analytically that (4.7.1) is globally 
stable if 2 > r > 0. Let Q(N) = 2K — N for 2K> N> K. The inverse func­
tion of Q(N) isP(N) = 2K — NforK>N> 
0. 
For JV > Κ let H(N) = G(N) - Q(N). We get 
H(N) = JV exp 
[r(l-N/K)]-(2K-N) 
(4.7.5)

--- Page 150 ---

1 4 7 
=> IT (Ν) = ( 1 - rN/K) exp [r(l -N/K)] 
+ 1 
=* H"(N) = (r/K)(rN/K-2) 
exp [r(l - N / £ ) ] > 0 
( 4 . 7 . 6 ) 
( 4 . 7 . 7 ) 
if 2 > r > 0 and Ν > Κ. The conditions, i/(#) = 0 , H'(K+) > 0 , and #"(iV) 
> 0 for all Ν > Κ, imply that H(N) > 0 for Ν > Κ. Hence G(N) > 
Q(N). 
For Κ > Ν > 
0 , let #(ΛΓ) = P(iV) - G(N). We get 
if 2 > r > 0 and Κ > Ν > 0 . The conditions, H(K) = 0 , H\K-) 
< 0 and 
if %/V) > 0 for all N G ( 0 , Κ] imply that H(N) > 0 for all N G ( 0 , Ü l ) . Hence 
P(iV) > G(iV). 
For Ν > 2K, G(N) = iV exp [r(l — ΑΓ/Κ)] is clearly positive. Using Theorem 
4 . 6 . 2 , we conclude that model ( 4 . 6 . 2 ) is globally stable. 
4.8. T H E B E V E R T O N - H O L T M O D E L : OPTIMAL S I Z E LIMIT 
By definition a year-class in a fish population is the cohort of fish born in 
the same year. Usually a fish population contains several year-classes; in other 
words, it has an age structure. The Beverton—Holt model ( 1 9 5 7 ) was 
developed for formulating the optimal harvesting policy which maximizes 
the biomass yield from a fish population with an age structure under the 
assumption that a constant effort is used in harvesting the fish population. 
The optimal policy prescribes that an optimal size limit should be imposed. 
This requires that only fish that are larger than the optimal size limit should 
be harvested. 
By definition, the recruitment to a fish population in a given year is the 
year-class which becomes vulnerable to fishing for the first time during that 
year. In the Beverton—Holt model the relationship between stock and recruit­
ment is completely ignored. This is a reasonable approach for the management 
of a fish species which has a high fecundity. For many commercially impor­
tant fish species, a mature female can lay hundreds of thousands or even 
millions of eggs per season. In this type of fish population the stock and re­
cruitment is highly variable (see Cushing and Harris ( 1 9 7 3 ) ) and cannot be 
used to predict the recruitment which is spawned by a given stock. 
The optimal harvesting policy which is obtained from a Beverton—Holt 
model of a fish population is independent of the recruitment of the different 
year-classes in the population. It follows that it is applicable even if the 
recruitment 
fluctuates greatly from year to year. This ability of the Beverton— 
Holt model to cope with uncertainties in the recruitment is not widely 
appreciated. It is often incorrectly stated that the optimal harvesting policy 
for a Beverton—Holt model of a fishery is only valid for a steady state (con­
stant) recruitment. 
H(N) = 2K-N-Nexp 
[r(l-N/K)] 
=> H'(N) = - 1 - 
( 1 - rN/K) exp 
[ r ( l - N / K ) ] 
=> H"(N) = (r/K)(2 
- rN/K) exp [r(l — N/K)] 
> 0 
( 4 . 7 . 8 ) 
( 4 . 7 . 9 ) 
( 4 . 7 . 1 0 )

--- Page 151 ---

148 
Assume tentatively that we can harvest each year-class independently of 
the other year-classes in a fish population. This assumption will be removed 
at the end of the analysis. We shall now consider the problem of harvesting 
a single-year class so as to maximize the biomass yield. 
Let the available fishing effort which is applied to the year-class be a con­
stant. The fishing effort is a measure of the number of boats and the time that 
they are in service. We shall assume that the effects of the fish schooling on 
the mass contact law for the fishing mortality rate are negligible. 
At time £, let N(t) be the number of fish in the year-class. Let t also denote 
the age of the year-class. During an initial phase in the life of a fish in the 
year-class, its survival is determined mainly by environmental factors. It is 
difficult to predict these environmental factors accurately enough to build a 
predictive model of the dynamics of the year-class during the initial phase. 
Fortunately in most fisheries the natural mortality rate of the year-class be­
comes relatively constant from a certain age. This roughly coincides with 
the age of recruitment which occurs when the year-class becomes vulnerable 
to fishing. This age is denoted by tr. Let Τ be the age at which most of the 
fish in the year-class, in the absence of fishing, would have died from natural 
causes; or the age when the year-class leaves the fishing area permanently. 
In the absence of fishing, the dynamics of the year-class is 
Ν = —MN, 
tr<t<T, 
(4.8.1) 
where M is the natural mortality rate. At time i r, let 
N(tr)=R. 
(4.8.2) 
The parameter R is called the recruitment of the year-class. In many fisheries, 
the value of R for different year-classes varies tremendously; a ten-fold or a 
hundred-fold variation in the value of R from year to year is not unknown. 
Let u(t) be a feasible fishing mortality rate. We have 
N = -[M+ 
u(t)]N. 
(4.8.3) 
Let the available fishing effort which can be applied to the year-class be 
limited. This gives the constraint 
0<u(t)<F 
(4.8.4) 
where F is a constant. As we shall see later on, the parameter F is the fishing 
mortality rate that is actually imposed on the year-class when the size of an 
average fish in the year-class is larger than or equal to the optimal size limit. 
In most fisheries there is no constraint on the number of fish that must be 
allowed to escape from the fishing at age T. One exception to this is a salmon 
fishery. Thus for most fisheries we have the condition 
N(T)>0 
(4.8.5) 
but otherwise N(T) is unconstrained.

--- Page 152 ---

149 
Let W(t) be the average weight of a fish in the year-class at time t. The 
total biomass yield from the year-class is 
τ 
J = f u(t)N(t)W(t)dt. 
(4.8.6) 
The optimal control problem is to choose an admissible control function u(t) 
which maximizes the total biomass yield from the year-class. 
The optimal harvesting policy is 
0 
i f i r < f < £ * , 
n(f)= 
I 
(4.8.7) 
[F 
if f * < t < T, 
where f* is the age at which an average fish in the year-class attains the opti­
mal size limit. 
Under optimal harvesting 
τ 
W(t)N(t)> 
JFW(s)N(s)às 
(4.8.8) 
t 
for all t > f\ This implies that 
τ 
W(t) > f FW(s) exp [—(M + F)(s - i)]ds 
(4.8.9) 
ί 
for all t > f*. Condition (4.8.8) states that for f > f*, the total biomass of the 
year-class at time t is greater than the expected biomass yield during the 
period [t, Τ], if the maximum fishing effort is applied to the year-class during 
this period. 
The optimal control program given in (4.8.7) and (4.8.9) is independent of 
the state variable N(t) and the recruitment R. This property makes the opti­
mal policy independent of the fluctuations in the recruitment from year to year. 
Condition (4.8.9) provides a method to compute t*. Let 
τ 
p(t) = j u(s) W(s) exp [-(M + u(s))(s - t)]ds 
(4.8.10) 
t 
where u(s) is given in (4.8.7). Plot on the same graph paper the functions 
W(t) and p(t). The function p(t) is plotted backwards from the point (Γ, 
p(T)) = (T, 0) with u(T)= F. The value of t at the point where the graph of 
p(t) intersects the graph of W(t) is equal to f* (see Fig.4.8.1). 
The size of an average fish in the year-class at the age t* is the optimal size 
limit for the fish population. The optimal harvesting policy for the fish 
population which contains many year-classes is to prescribe an optimal size 
limit. This means that only fish which are larger than the optimal size limit

--- Page 153 ---

150 
should be harvested. This can be implemented by prescribing a mesh size, if 
nets are used to harvest the fish. 
To illustrate the usefulness of this theory, we shall apply it to the North 
Sea plaice fishery. An average mature female lays about 100 000 eggs in a 
spawning season. The fish is of marketable size at the age of 4 years. The life 
spans of an average male fish and an average female are 13 years and 22 years 
respectively (Beverton and Holt, 1957). We shall let Τ = 15. The optimal bio­
mass yield is not sensitive to the choice of Τ since the value of the fishing 
mortality rate is relatively large. 
In this example we shall employ the data: tr = 3.7, Γ = 15, F = 0.73 and 
M = 0.1. The growth function is 
W(t) = 2867[1 - exp - 0 . 0 9 5 ( i 4- 0.82)]
3. 
(4.8.11) 
The criterion in (4.8.9) does not require a smooth analytical growth function. 
A piece-wise linear growth would suffice. The value of t* which is computed 
by using (4.8.9) is insensitive to small errors in W(t). In Fig.4.8.1 the growth 
function W(t) and the costate function p(t) of (4.8.10) are plotted backwards 
from the terminal time T. The point of intersection of W(t) and p(t) defines 
10 
t* 
14 
χ 
A G E 
Fig.4.8.1. Intersection of the weight function W(t) and the costate variable p(t) deter­
mines the age t* when the length of an average fish is equal to the optimum size limit. The 
functions are computed in reverse time.

--- Page 154 ---

151 
£* which in turn defines the optimal size limit. From this exercise we get 
i* = 10.4. Using the length function 
L(t) = 68.5[1 - exp - 0 . 0 9 5 ( i + 0.82)] 
(4.8.12) 
we deduce that the optimal size limit is 4 5 cm. 
4.9. OPTIMAL C O N T R O L O F T H E B E V E R T O N - H O L T M O D E L 
This section contains details of the mathematical analysis of the Beverton— 
Holt model. The purpose in presenting these details is to show how optimal 
control theory can be applied to an interesting biological problem. The sym­
bols are defined in the previous section. 
In brief, the optimal control problem is as follows: 
System : 
JV = —(M + w) JV, 
tr<t<T. 
(4.9.1) 
Initially: 
JV(ir) = R. 
(4.9.2) 
Terminally: 
N(T) > 0. 
(4.9.3) 
Control constraint: 
0 < u < F. 
(4.9.4) 
τ 
Objective: 
max ju(t) 
W(t)N(t)dt. 
(4.9.5) 
By definition the Hamiltonian function is 
H(t, JV, u, p) = uW{t)N-p{M+ 
u)N. 
(4.9.6) 
The function p(t) is called the costate variable and N(t) is called the state 
variable. The costate equation is 
ρ = -bH/bN 
= p(M + u) - uW(t). 
(4.9.7) 
In applying the transversality condition, JV(T) is considered as unconstrained 
because it belongs to the interior of its constraint set. It follows that 
p(T) = 0. 
(4.9.8) 
The optimality conditions require the optimal control function to satisfy 
the conditions 
0 
only if bH/du < 0, 
u = 
(4.9.9) 
F 
only if bH/bu> 
0. 
This means that the optimal control variable maximizes H with respect to u. 
There is no singular control because the conditions 
bH/bu = (W(t)-p)N= 
0, 
(4.9.10) 
(d/dt) (bH/bu) = (W -MW)N 
= 0 
(4.9.11) 
are not satisfied.

--- Page 155 ---

152 
For most fish populations, W(t) is a monotonie increasing function. 
Furthermore, for biological reasons, we expect only a single switch in the 
control variable. This is because the optimal harvesting program provides a 
balance between a loss in biomass yield due to natural mortalities and a gain 
in biomass yield from the growth of the fish which belong to the year-class. 
In any case, for a given set of data, we can explore numerically and show that 
there is only a single switch in the optimal control function. 
To avoid loss of yield through natural mortality of old fish, we should use 
the maximum effort at T, i.e. u(T) = F. The optimal control program should 
be 
u(t) = 
0 
if tr < t < t*9 
F 
ift*<t<T. 
Eq. (4.9.7) gives 
τ 
t 
(4.9.12) 
[p(s) exp —(Af + u)s]J = j" [~u(s) W(s) exp —(Af + u(s))s] ds. 
(4.9.13) 
t 
Conditions (4.9.8) and (4.9.13) give 
τ 
p(t) = f u(8) W(s) exp [—(Af + u(s))(s - t)] ds. 
(4.9.14) 
Conditions (4.4.9) and (4.9.10) imply 
_ Ό only if W(t)N(t)<p(t)N(t)9 
u(t) = 
(4.9.15) 
( F 
only if W(t) N(t) > p(t) 
N(t). 
Conditions (4.9.12) and (4.9.15) imply that for t > f*, 
τ 
W(t)N(t) 
> N(t) j FW(s) exp [—(Ai + F)(s - 
t)]ds 
t 
τ 
= j FW(s)N(s)às. 
(4.9.16) 
t 
It follows that for t > t*9 we have 
τ 
W(t) > jFW(s) 
exp [—(Af + F)(s - t)]ds. 
(4.9.17) 
t 
This completes the proof of conditions (4.8.8) and (4.8.9). 
We shall now establish that the specification of the optimal size limit pro-

--- Page 156 ---

153 
vides the optimal policy for biomass yield if (i) the fishery contains many 
year-classes; and (ii) the applied fishing effort is a constant. 
Suppose the fish population contains many year-classes. If nets are used it 
is not possible to exploit each year-class selectively. Thus the problem has a 
very intricate constraint. Assume for a moment that it is possible to exploit 
each year-class separately. This means that the nonselectivity constraint is 
relaxed and hence the set of admissible options is enlarged. For a collection 
of year-classes, each of which can be harvested separately, the optimal policy 
is to exploit each year-class optimally. The crucial point in this analysis is that 
this relaxed optimal control program can be implemented when the fish popu­
lation contains many year-classes which cannot be harvested selectively. It 
can be implemented by specifying the optimum size limit which is the average 
length of a fish at age t* of (4.9.12). This requires that only fish which are 
larger than the optimal size limit should be harvested. This policy gives the 
maximum total biomass yield for a fixed fishing effort. 
If economic factors are considered, and a high discount rate is applicable, 
the optimal harvesting policy can be very complex (Clark, 1976 a). 
4 . 1 0 . F I S H E R Y WITH A L I M I T E D FISHING SEASON 
In the harvesting of a fish population with many year-classes, a standard 
objective is to maximize the biomass yield. If the applied fishing effort is 
fixed, this objective can be achieved by prescribing an optimal size limit. In 
this section we shall develop a method for computing the optimal size limit 
when the fishing season is limited to the same period in each year. A fishing 
season may be limited by weather conditions, migration patterns of the fish 
population, or a policy of conservation. 
Another method for computing the optimal size limit for a fishery with a 
limited fishing season uses the continuous time Beverton—Holt model with 
an averaged fishing mortality rate. For example, let 12% of a year-class be 
harvested during a fishing season which is limited to one month in a year. 
Using the continuous time Beverton—Holt model, it is assumed that this fish­
ing mortality is equivalent to a continuous fishing mortality rate of 1% per 
month. For practical purposes, it appears that these two methods for comput­
ing the optimal size limit for a fishery with a limited fishing season give the 
same optimal size limit. 
By definition a year-class is the cohort of fish born in a given year. First 
we shall develop the optimal harvesting program for a single year-class. At 
time t let the age of a year-class be i, and let the number of fish in the year-
class be N(t). Let the limited fishing season take place during the period 
[t, t + At] in the unit time interval [£, t + 1 ] . Let s = 1/Δγ. Usually the dyn­
amics of a year-class is very variable during the early stages of its life. For­
tunately the dynamics of the year-class from the age of recruitment can 
usually be described by a constant linear differential equation (Beverton and 
Holt, 1957). Let Τ be the life span of an average fish in the year-class.

--- Page 157 ---

154 
In the absence of fishing, the dynamics of the year-class can be described 
by 
JV(t+ At) = 
(l-m)N(t) 
where m = 1 — exp (—M At) and M is the instantaneous natural mortality rate. 
It follows that 
N(t + 1) = (1 ~ m)
s~
 
lN(t + Af). 
(4.10.1) 
If u(t) is the fishing mortality coefficient during the fishing season [f, t + Δ t], 
then 
N(t + At) = [ l - m - u(f)] JV(f). 
(4.10.2) 
Combining eqs. (4.10.1) and (4.10.2), we get 
N(t + 1) = f[u(i)l ΑΓ(ί) 
(4.10.3) 
where f[u(t)] 
= (1 - m)
s~
l[l 
- m — u(t)] and t = tr, tr+ 
1, . . ., Τ— 1. 
If Λ denotes the recruitment to the year-class at time £r, then 
N(tr) = R. 
(4.10.4) 
At the end of its life span, N(T) must satisfy the constraint 
N{T)> 
0. 
(4.10.5) 
Usually the fishing mortality is limited because the number of boats and 
the number of hours they are in service are limited. This leads to 
0 < u(t) < b 
(4.10.6) 
where 5 is a constant. If F denotes the instantaneous fishing mortality rate 
which is in fact applied to harvest the year-class, then 
N(t + At) = N(t) exp [—(Af + F) At]. 
(4.10.7) 
Conditions (4.10.2), (4.10.6) and (4.10.7) give 
b = exp (—MAt) - exp [—(M + F)At]. 
(4.10.8) 
Let W(t + Θ At) be the weight of an average fish in the year-class at the age 
of t 4- θ At where Θ is roughly equal to 0.5. We shall assume that the objective 
of the management is the maximization of the total biomass yield from the 
year-class. The problem is to choose the sequence of fishing levels u(tr), 
u(tr + 1 ) , . . ., u(T— 1) which maximizes the objective function. The total 
biomass yield is 
τ— ι 
^ = 2 ["(0^(0^+ θ At)]. 
(4.10.9) 
We shall minimize —J because in our standard discrete time optimal control

--- Page 158 ---

155 
problem, a function is minimized. A maximization problem can always be 
converted into a minimization problem by using the identity 
max J = —min (—</). 
The Hamiltonian function is 
H[N, u,p] 
= p(t 4- l)f[u(t)]N(t)-u(t)N(t)W(t+ 
ΘΑΐ). 
(4.10.10) 
The costate equation is 
p(t) = bH/bN(t) = p(t + 1)/["(ί)] - κ ( 0 ^ ( ί + βΔί). 
(4.10.11) 
Multiplying this equation by iV(f) and using (4.10.3), we get 
p(t)N(t) 
- p ( f + l)N(t 
+ 1) = -ti(f) W(f + dAt)N(t). 
(4.10.12) 
If ί of (4.10.12) is replaced by t + 1, ί + 2 , . . ., Γ — 1, we generate a system 
of equations, which, when added together, give 
τ—ι 
p(t)N(t)-p{T)N(T) 
= - 2 u{8)W(i + ent)N(i). 
(4.10.13) 
1 = t 
At the terminal time, N(T)> 
0. Thus N(T) belongs to the interior of its 
constraint set. For the purpose of applying the transversality condition, N(T) 
is unconstrained. Hence 
p(T) = 0. 
(4.10.14) 
Eqs. (4.10.13) and (4.10.14) give 
τ — 1 
p(t)N(t) 
= 2 
n(0 ^(i
 + 0At)N(i). 
(4.10.15) 
I = t 
The optimal control program seeks to balance the gain in yield from the 
growth of the fish in the year-class with the loss in yield from natural mor­
talities. This suggests that there should be a single switch in the optimal 
control program. It follows that there exists t* such that the optimal control 
program is 
u(t) = 0, 
t = i r, t + 1, . . ., t* — 1, 
ii(f) = b, 
£ = £*,£*+ 1, . . ., Τ — 1. 
(4.10.16) 
We seek a criterion which will enable us to compute t*. 
Using (4.10.10) we get 
bH/bu(t) = - ( 1 - my-'pit 
+ l)N(t) 
- W(t + 6At)N(t). 
(4.10.17) 
The optimality conditions require that u(t) = 0 only if bH/bu(t) > 0, and 
u(t) = b only if bH/bu(t) < 0. Eq. (4.10.17) implies that u(t) = b only if

--- Page 159 ---

156 
W(t + 0Δί) > - ( 1 - my-'pit 
+ 1). 
(4.10.18) 
For t > £*, eq. (4.10.15) gives 
τ—ι 
p(t+ 
l)f(b)N(t) 
= - 
2 
àWO + 
eAtttmy-'Nit). 
i = t+1 
It follows that 
τ —1 
p ( i + l ) = - 
2 
&^(ΐ
 + Ο Δ ί ) [ Α & ) ]
ί _ ί _ 1 . 
(4.10.19) 
i = t+i 
Eqs. (4.10.18) and (4.10.19) imply that t > f* 
t - i 
W(t + 0Δί)> ( l - m )
s
_
1 
2 
MF(i + 0Af)[A&)]
,~~
i'~
1. 
(4.10.20) 
i = t + 1 
This inequality criterion provides a method for computing i*. 
Let the function 
G(f + ΘΜ) = - ( 1 - m)
s~
lp(t 
+ 1). 
(4.10.21) 
Note that the argument of G(t + 0Δί) is ί + 0Δί. To compute £*, the functions 
W(t 4- $At) and G(f + 9At) are plotted together (see Fig.4.10.1). The function 
G(t + 0Δ*) is plotted backwards from the terminal point (Τ — 1 + 0Δί, G(T 
- 1 + βΔί)) = (Τ - 1 + βΔί, 0). The value of ί at the point where G(t + 6At) 
is just below W(t + 0Δί) is ί* + θ At. We can use this property to compute t*. 
A more refined method for computing t* is discussed elsewhere (Goh, 1977 b). 
The optimal control program given in (4.10.16) provides the optimal har­
vesting program for a single year-class. It can also be used to formulate the 
optimal harvesting policy for a fish population which contains many year-
classes. 
Suppose the same effort is used to harvest the fish population during the 
limited fish season in each year. The fact that it is impossible to utilise nets to 
harvest each year-class selectively constitutes an intricate constraint in the 
problem of harvesting optimally a fish population with many year-classes. For 
the sake of argument, let us assume that it is possible to harvest each year-
class selectively. This means the nonselectivity constraint is relaxed and hence 
the admissible set of options is enlarged. For a collection of year-classes which 
can be exploited separately, the optimal policy is to exploit each year-class 
separately. The crucial point in this argument is that this optimal harvesting 
policy can be implemented even if it is not possible to harvest each year-class 
separately. It can be implemented by specifying the optimal size limit. This 
requires that only fish which are larger than the optimal size limit should be 
harvested. This optimal policy maximizes the biomass yield for a fixed fishing 
effort.

--- Page 160 ---

157 
F i g . 4 . 1 0 . 1 . Intersections of the weight function W(t) and the curves, C l , C2 and C 3 , give 
refined estimates of the ages for optimum size limits when: (i) the fishing season is un­
limited; (ii) the fishing season is limited to 6 months in a year; and (iii) the fishing season 
is limited t o one tenth of a year in each year. 
For an example, we shall analyse a hypothetical fishery, using some of the 
data for the North Sea plaice. This hypothetical fishery is analysed instead of 
a real fishery because we want to study the effects of limiting the fishing 
season in a fishery. 
Let W(t) and L(t) denote the growth and length functions respectively. We 
have 
W(t) = 2 8 6 7 [ 1 - exp - 0 . 0 9 5 ( f + 0 . 8 2 ) ]
3 , 
(4.10.22) 
L(t) = 68.5[1 - exp - 0 . 0 9 5 ( t + 0 . 8 2 ) ] . 
(4.10.23) 
The instantaneous natural mortality rate is M = 0.10 and the instantaneous 
fishing mortality rate is 0.73. 
Suppose the fishing season is limited to one tenth of a year in each year. In 
this case, M = 0.1, θ = 0.5 and s = 10. With m = 0.10 and F = 0.73, eqs. 
(4.10.1) and (4.10.8) give m = 0.00995 and b = 0.0697. For a typical year-

--- Page 161 ---

158 
class, let the limited fishing season begin at the ages of 3.4, 4.4, . . ., 14.4. We 
adjust the life span of an average fish from 15 years to 15.4 years; the effects 
of this adjustment on the total biomass yield would be negligible. This small 
adjustment is made so that the dynamics of the year-class can be described 
by (4.10.3) with tr = 3.4 and Τ = 15.4. 
The functions W(t) and G(t + ΘΑΐ) of (4.10.21) for this hypothetical 
fishery are plotted in Fig. 4.10.1. The function G(t + θ At) is just below 
W(t + ΘΑΐ) at t = 5.4 + (0.5)(0.1). It follows that t* = 5.4. Using (4.10.23) we 
deduce that the optimal size limit is 30.6 cm. In Section 4.8 it is shown that 
the optimal size limit is 45 cm and the corresponding value of t* is 10.4, if 
fishing at the given rate of F = 0.73 is carried out continuously during the 
year. Thus the optimal size limit should be reduced if the fishing season is 
shortened. It is interesting to note that the optimal size limit is also 30.6 cm 
if fishing is carried out continuously during the year with one tenth of the 
given fishing effort, namely, F = 0.073. 
4 . 1 1 . F I S H E R Y WITH D E L A Y E D R E C R U I T M E N T 
For many species the population contains many year-classes, and recruit­
ment to the breeding population takes place several years after birth. For this 
type of population the Beverton—Holt model is an incomplete dynamical 
model because it does not incorporate a relationship between the parent stock 
and its progeny. It provides an adequate model for a population with a high 
fecundity. But for a whale or seal population which has a low fecundity, the 
relationship between stock and recruitment plays a crucial role in the manage­
ment of the species. This type of population could be described by a non­
linear delay difference equation. This type of model is used by the International 
Whaling Commission in the management of whale populations. This type of 
model and its generalizations will become important in the management of 
harvested populations. 
To simplify the analysis all the mature reproductive females are lumped 
into a single group. At time £, let N(t) be the number of reproductive females. 
It is assumed that the population has a constant sex ratio. It is also assumed 
that in a harvested population, there is usually a negligible number of old and 
nonreproductive females. At time t, let Ym(t) where m = 1, 2 , . . ., fe, denote 
the number of females which are m years old. A model of this type of popu­
lation is 
Yx{t + l) = 
Fx[N(t)}, 
Y2(t+ 
l)=F2[Y1(t)]9 
N(t + 1) = S[N(t)] 
+ F f c + 1 [ y f c ( t ) ] , 
(4.11.1) 
where Fu F2, . . 
Fk +
S are linear or nonlinear functions, and t = 0, 1, 2, . .

--- Page 162 ---

159 
Eliminating Yu 
Y2,. 
. ., Yk we get 
N(t+ 
l) = S[N(t)] 
+ F[N(t-k)] 
(4.11.2) 
where F ( - ) = Fk+ 
xFk · · · Fx(-). 
This delay difference equation was used by 
Clark ( 1 9 7 6 b) for formulating optimal policies in the harvesting of whale 
populations. 
Model (4.11.2) is equivalent to 
JV,(f + l ) = J V 2 ( f ) , 
N2(t+ 
l ) = J V 3 ( f ) , 
J V f e + 1 ( f + l ) = S[JV f e + 1(f)] + F[JV,(f)]. 
(4.11.3) 
This system has an equilibrium at JV* = (n*, rc*, . . ., n*) where n* = S(n*) 
+ 
Fin*). 
The linearized dynamics of the last equation in (4.11.3) is 
Nh + X(t + 1) - n* = s(JV f e + 1 - n*) + a(JV,(f) - n*) 
(4.11.4) 
where s = 3S/aJV f e + 1 and α = 9F/aiVi at JV = JV*. 
Using Rouche's theorem, Clark ( 1 9 7 6 b) showed that a sufficient condition 
for JV* to be locally stable is 
\a\< 1-8 
(4.11.5) 
where 1 > s > 0. This sufficient condition can also be established by using the 
Liapunov function 
V(N) = |JVi - n * | 4- |JV 2 - n * | + . . . + d | J V f e + 1 - n * | 
(4.11.6) 
where d .= min [1/|σ|, 1/(1 — s)] and where \a\ denotes the absolute value of 
a. If (4.11.5) is satisfied, the equilibrium JV* is locally stable irrespective of 
the length of the time delay. 
For a real population to persist, it must be stable relative to finite perturba­
tions of its initial state. Thus it is desirable to show that the equilibrium JV* 
of (4.11.3) is stable relative to finite perturbations. 
If k = 1, model (4.11.3) is a two-variable system. In this case it is possible 
to establish that AV(N) is negative semidefinite for a wide range of the func­
tions, S(JV 2), F(JVi) and V(N) where V(JV) is a Liapunov function. For k > 1, 
model (4.11.3) is a system with more than two variables. In this case, it is 
usually very difficult to verify that AV(N) is negative semidefinite. Fortun­
ately for an important subclass of models, it is possible to reduce AV(N) to a 
function of two variables. 
We shall show that the maximum steady state yield (MSSY) equilibrium of 
(4.11.2) when the population is subjected to a constant fraction harvesting 
policy, satisfies condition (4.11.5), and therefore, is locally stable. The 
Liapunov function V(N) of (4.11.6) and similar functions may be used to 
establish a finite region of attraction for the MSSY equilibrium.

--- Page 163 ---

160 
Recall that N(t) is the number of reproductive females at time f. Let u(t) 
be the number of reproductive females which is harvested during the time 
interval [f, f + At] where At is a small positive number. Suppose reproduc­
tion takes place during the time interval [t + At, t + 1 ] . A model of the 
harvested population is 
N(t + 1) = S[N(t) - u(t)] + F[N(t -k)~ 
u(t - k)]. 
(4.11.7) 
It is convenient and desirable to use the post-harvest population (the 
escapement) as the state variable. Let H{t) denote the post-harvest population 
of reproductive females at time t + Af. We have 
H(t + 1) = N(t + 1) - u(t + 1). 
(4.11.8) 
Eqs. (4.11.7) and (4.11.8) give 
H(t + 1) = S[H(t)] 
+ F[H(t — fe)] — u(t + 1). 
(4.11.9) 
If the handling time of a catch is negligible and the schooling effect is also 
negligible, then a constant effort harvesting can be approximated by a con­
stant fraction harvesting. In this case 
u(t)=EN(t) 
(4.11.10) 
where Ε is a constant. Eqs. (4.11.9) and (4.11,10) give 
H(t+ 
l) = (l-E)[S(H(t)) 
+ F(H(t-k))]. 
(4.11.11) 
By definition H* is a steady state if 
H* = (1-E)[S(H*)+ 
F(H*)]. 
(4.11.12) 
The corresponding yield per unit time is 
Y* = E[S{H*) 
+ F(H*)]. 
(4.11.13) 
Combining (4.11.12) with (4.11.13) we get 
Y* = [S(H*) + F ( / T ) - # * ] . 
(4.11.14) 
A necessary condition for H** to be a maximum steady state yield (MSSY) 
equilibrium is 
S'(H**) + F'(H**) - 1 = 0 
(4.11.15) 
where the prime denotes differentiation. 
The equilibrium if** satisfies (4.11.5) if 
1(1 -£**)F'(H**)\ < 1 - ( 1 - £ * * ) | S ' ( H * * ) | . 
(4.11.16) 
For most stock recruitment models, S'(H**) satisfies the inequality 
0 < S'(H**)< 
1. 
(4.11.17)

--- Page 164 ---

161 
Conditions (4.11.15) to (4.11.17) give 
(1 — E**)(l 
— S')< 
1 — (1 — E**)S' 
*1-E**<1. 
(4.11.18) 
This is satisfied because 1 > E** > 0. It follows that the MSSY equilibrium 
which is created by a constant fraction harvesting is locally stable. 
We shall describe a method for constructing a Liapunov function for com­
puting a finite region of stability of an equilibrium which satisfies (4.11.5). 
Let b, c and ρ be positive constants. The constants b and c are chosen by 
trial and error so that a certain function is negative semidefinite in a region 
as large as possible. For convenience let 
£/(ΛΓ.) = (N? - n*
2)/2 
- n*
2 In (NJn*), 
(4.11.19) 
R(NU 
Nk+i) 
= S(Nk+,) 
+ 
, ) , 
(4.11.20) 
Z(Nk 
+ 
l)'Ni+t(Nk+i 
-n*)\ 
(4.11.21) 
V(N) = 2 £ W 
+ *>U(Nk + 
l) + c
Z
(
N
k
+
(
4
.
1
1
.
2
2
) 
ι = 1 
W(NUNk 
+ 
1)= —U(Ni) - (b - 1 ) U ( N k + l ) + bU[R(Nu 
Nk+l)} 
+ c[Z(R(NltNk+l))-Z(Nk+l)], 
(4.11.23) 
M(Nu Nk+1) 
= U(Nt) + bU(Nk+l) 
+ cZ(Nk+l), 
(4.11.24) 
Ω - {ATI V(N) < p; ATf > 0, i = 1, 2 , . . ., k + 1 } , 
(4.11.25) 
Γ = {(Ni, Nk+l) 
I M(NU Nk+,) 
<p;Nt> 
0, Nk+l 
> 0 } . 
(4.11.26) 
Theorem 4.11.1. Let W(NuNk+i) 
be defined by (4.11.19) 
to (4.11.23). 
If 
there exist positive constants 
b, c and ρ such that W(NU Nk+1) 
is negative 
definite in the region Γ, then Ω is α region of attraction of the 
equilibrium 
N* of model 
(4.11.3). 
Proof. Along solutions of (4.11.3), 
AV(N) = V[N(t + 1)] - 
V[N(t)] 
k + 1 
= 2 
U(Ni)+ 
bU[R(NuNk+i)} 
+ cZ[R(NuNk 
+ 
1)] 
i = 7 
k 
- 
2 U(Nt) - bU(Nk 
+ 
i) - 
cZ(Nk+i) 
i - 1 
= W(NuNk+i). 
(4.11.27)

--- Page 165 ---

162 
By assumption W(NU Nk+ j) is negative definite in Γ. For N2 = N3 = . . . 
= Nk = n* we have V(N) = M(NU Nk+This 
equality, eq. (4.11.27) and the 
assumption that W(NU Nk+l) 
is negative definite in Γ, imply that AV(N) is 
negative semidefinite in Ω. 
Using an extension of the direct method of Liapunov (Theorem 3.14.2) 
the proof is completed by showing that AV(N) does not vanish identically 
along a nontrivial solution of (4.11.3). The assumption that W(Ni9 iV f e + J is 
negative definite in Γ implies that in the region Ω, the function AV(N) is 
equal to zero only at a point of the form 
Ν = (n*9 Ν29 N39 . . 
Nh, η*). 
(4.11.28) 
If (4.11.3) has a solution of this form for t = 0, 1, 2 , . . . k — 1, we have 
N(0) = (n\ N2(0)9 
N3(0)9 
. . ., Nk(0)9 
n*)9 
N(l) = (n\ N2(l)9 
N3(l)9. 
. ., ^ . , ( 1 ) , n\ n*)9 
N(2) = (π*, N2{2)9 
N3(2)9 
. . ., Nk_2(2)9 
n\ n\ 
n \ 
N(k - 1) = (n*, n*, . . ., n9 ri*) = iV*. 
(4.11.29) 
We conclude that besides the equilibrium solution or a solution which reaches 
iV* in the manner shown in (4.11.29), the function AV(N) does not vanish 
identically along a solution of (4.11.3). It follows that Ω is a region of attrac­
tion of the equilibrium N*. 
Corollary 4.11.1. If W(Nl9 Nk+ 
x) is negative definite in the positive 
quadrant 
of the (iVi, Nk+ 
x)-space9 then AV(N) is negative semidefinite 
in the positive 
orthant Ω = {N\ N( > 0, ι = 1, 2, . . ., k 4- 1}. In this case model (4.11.3) 
is 
globally 
stable. 
For the sake of simplicity we had used a special expression for defining 
[/(iV;) in (4.11.19). We could let U(Nt) be some other Liapunov function of a 
scalar first order difference equation. Similarly Z(Nk+x) 
of (4.11.21) could be 
replaced by some other positive definite function of (Nk+l 
— ή*)
2. 
We have shown how a generalization of the direct method of Liapunov can 
be used to establish finite or global stability in a class of nonlinear Leslie 
models for a population with an age structure. This class of models is impor­
tant in the management of some fish and whale populations. 
A harvested population should be stable relative to finite perturbations of 
its initial state. Otherwise errors in estimating the population could lead to 
the destruction of the population. Theorem 4.11.1 may also be used to com­
pute a region of attraction of an equilibrium of a subclass of models for a 
population which is subjected to quota harvesting.

--- Page 166 ---

163 
A proper stabilizing feedback policy for quota harvesting of a population 
described by (4.11.2) should be a feedback control function of N(t), N(t — 1), 
. . ., N(t — k — 1). At present the quota harvesting policy of the International 
Whaling Commission for a population close to its maximum sustainable yield 
equilibrium is a function of only the current stock of reproductive females, 
N(t). This may not provide the stabilizing effect that is expected from the 
prescribed quota harvesting policy. 
In the next section, we shall apply the method developed in this section to 
models of the Antarctic fin whale population. 
4 . 1 2 . T H E A N T A R C T I C F I N W H A L E P O P U L A T I O N 
We shall show that the unexploited population of the Antarctic fin whale, 
Balaenoptera physalus, is globally stable. We shall compute a region of 
attraction for the equilibrium in a model of the population when it is sub­
jected to a constant quota harvesting. 
Following Ricker (1954) the function F(N) in (4.11.2) is called a stock-
recruitment model. The Ricker (1954) and the Beverton—Holt (1957) stock-
recruitment models are fitted by inspection to the data provided by Allen 
(1973) for the southern hemisphere stock of the fin whale population. The 
quadratic stock-recruitment model F(N) = (r/K)N(K 
— N) which has been 
used by the International Whaling Commission is unsuitable for a global 
stability analysis of the population dynamics. The quadratic stock-recruitment 
model gives negative recruitment when the parent stock is very large. Bio­
logically this is nonsensical. 
Using the Ricker stock-recruitment model we get 
N(t + 1) = sN(t) + AN(t - 8) exp [~BN(t - 8)] 
(4.12.1) 
where s = 0.96, A = 0.12 and 1/B = 3 X 1 0
s . This model has an equilibrium at 
N=n* 
= (1/J3) In [A/(l - s)] = (3 In 3) X 1 0
s . The stability of this equil­
ibrium is independent of the value of B. 
For convenience let χ = JV/n*. Using the transformation in (4.11.3) we get 
x^t + 1) = x 2 ( f ) , 
x2(t + 1 ) = * 3 ( 0 , 
x9(t + 1) = sx9(t) 
+ AXi(t) exp [—Cxx (t)], 
(4.12.2) 
where C = In [A/(l 
— s)]. This model has an equilibrium at x* = (1, 1, . . ., 1). 
A Liapunov function for this normalized model is the function V(N) in 
(4.11.22). By trial and error we choose b = 15 and c = 1. For model (4.12.2) 
the function W(xu x9) in (4.11.23) is negative definite in the positive quad­
rant of the (xu *9)-spaee. This is established by plotting some of the level sur-

--- Page 167 ---

164 
- 0 - 7 5 
0 
1.0 
2 . 0 
Χ 
F i g . 4 . 1 2 . 1 . Level sets of the function W(xitx9) 
for model ( 4 . 1 2 . 2 ) . 
>-
i 
1 
1 
1 
1 
1 
0 
0 . 8 
1.6 
X 
Fig.4.12.2. Level sets of the function W(xl9 
x9) for a system of first order equations 
which is equivalent to model ( 4 . 1 2 . 3 ) . 
faces of W(xu x9) (see Fig.4.12.1). LetX 
= xx and Y = x9. Figure 4.12.1 dis­
plays some of the level sets of W(X, Y). Many of the computed level surfaces 
of W(X, Y) are not displayed. The function W(Xy Y) is a continuously differ­
entiate function in the positive quadrant. This justifies the conclusion that 
W(Xy Y) is negative definite in the positive quadrant. It follows that model 
(4.12.2) is globally stable.

--- Page 168 ---

165 
Using the Beverton—Holt stock-recruitment model, eq. (4.11.2) gives 
N(t + 1) = sN(t) + rN(t - 8 ) / [ l + AN(t - 8)] 
(4.12.3) 
where s = 0.96, r = 0.12 and A = 6 X 10"
6. The analysis for (4.12.2) is applied 
to this model with b = 15 and c = 10 in the Liapunov function (see Fig.4.12.2). 
These constants are chosen by trial and error. We get the same conclusion 
that the population is globally stable. 
Under the constant quota harvesting of u females per year, model (4.12.1) 
becomes 
N(t + 1) = sN(t) + AN(t - 8) exp [—BN(t - 8)] - u. 
(4.12.4) 
If u = 3000 the equilibrium of (4.12.4) is at Ν = η* = 251 210. For conveni­
ence let χ = N/n* and υ = u/n*. Under this change of variables, we get 
xx(t + 
l)=x2(t), 
x2(t + 1) = * 3(f), 
x9(t + 1) = sx9(t) + Axt(t) 
exp [-C*i(£)] - i; 
(4.12.5) 
where C = 0.838. 
The Liapunov function for (4.12.2) is used in the analysis of model 
(4.12.5). A region in which W(xu x9) is positive is determined. Some of the 
level surfaces of the function M(xu 
x9) of (4.11.24) for model (4.12.5) are 
computed. From this we find that W(xu x9) is negative definite in the region 
{(*!, x9) I M(xu 
x9) < 17.98}. This implies that AV(a:) is negative semidefinite 
in the region {χ | V(x) < 17.98} where V(x) is given in (4.11.22). It follows 
that a region of attraction of the equilibrium x* = (1, 1, . . ., 1) is {χ \ V(x) 
< 17.98}. This region contains the region {χ \ Σ(χ. — l)
2 < ( 0 . 7 1 )
2 } . 
4 . 1 3 . H A R V E S T I N G A M U L T I S P E C I E S C O M M U N I T Y 
The theory of optimal harvesting of a multispecies community is not as 
well developed as that for a single species population. One reason is that it is 
very difficult to build a realistic model of a multispecies community which 
leads to an analytically tractable optimal control problem. Another reason is 
that it is difficult to apply optimal control theory to a problem with more 
than two state variables. 
A pragmatic approach to this difficult management problem is to build 
two classes of models. One class of models consists of simplified models which 
capture some of the key dynamical processes of a harvested multispecies 
community. These models are subjected to stability and optimal control 
analysis. The insights obtained in this exercise are then used in the study of 
the second type of model. The latter is a detailed computer simulation model 
of the harvested multispecies community.

--- Page 169 ---

166 
We shall examine some aspects in the mathematical analysis of a simplified 
analytical model of a harvested multispecies community. We shall describe 
several ideas which may be useful for formulating good harvesting policies for 
a multispecies community in the real world. 
Firstly let us consider the problem of harvesting m interacting species so as 
to maximize the total discounted net revenues. This problem has been studied 
by Clark (1976 a) add Silvert and Smith (1977). LetiV,. be the population of 
the ith species, and ui be the rate of harvest of the zth species. Suppose the 
dynamics of the harvested multispecies community is 
N. = G((N) - u{9 
i = l, 2 , . . . , m . 
(4.13.1) 
Let [0, T] be the planning horizon, and at time T, let 
Ni{T)>e.9 
î = 1, 2 , . . . , m 
(4.13.2) 
where e. are positive constants. The constants eu e29. 
. ., em are chosen so 
that the community is viable after time Τ if harvesting ceases thereafter. 
Let the harvest rates be bounded from above so that 
bt > u.(i) > 0, 
i = 1, 2, . . ., m, 
(4.13.3) 
where bl9 b l 9 . . ., bm are constants. These constraints are imposed tentatively 
in order to provide a healthy and robust fishing industry. 
The problem is to choose the functions u^t) which will drive the system 
from the initial state 
Ni(0)=Ni09i 
i = l, 2 , . . . , m , 
(4.13.4) 
so as to maximize the present value integral 
T 
r m 
J
= /
 
e ~
6
t [ l 
( " / - C / / ^ K J df 
(4.13.5) 
where v. is the price for fish of the ith species and ciui/Ni 
is the cost of har­
vesting the ith species at the rate of u{ and δ is the discount rate. 
This is an optimal control problem. For m > 2 it is expensive to compute 
the optimal feedback control policy. A feedback control harvesting policy for 
a model of a real system is desirable because it could provide a harvesting 
policy for the real system which is insensitive to small errors in the measure­
ment of the state vector and in the system dynamics. 
The analysis of a single-species model suggests that an optimal harvesting 
program for a multispecies community should consist of three stages. In the 
first stage the system is driven rapidly to an optimal steady state. The system 
is then maintained at the steady state until the value of t is close to T. In the 
third stage the population levels are driven to lower levels which depend on 
the cost of harvesting and the terminal constraints. However, this structure 
in an optimal harvesting program for a multispecies community has not been

--- Page 170 ---

167 
established rigorously for any problem; and in general, an optimal harvesting 
program will not have this structure. 
If the optimal feedback harvesting policy has such a structure, the first 
task is to compute the optimal steady state. This steady state is a singular 
extremal because the control variables appear linearly in the system equations 
(4.13.1) and the objective function (4.13.5). It can be computed more easily 
by transforming first the integral (4.13.5). Let yt(N) 
satisfy 
y f = (υ, - cJNJN., 
i = 1, 2, . . ., m, 
(4.13.6) 
such that y^O) = 0 for i = 1, 2, . . ., m. Eqs. (4.13.1) and (4.13.5) give 
T 
m 
< / = / e - « 2 
[(υ,-ο,ΙΝ,ΗΟ,-Ν,)]& 
0 
1 = 1 
m 
T 
m 
= Σ e*
Ty,(T) 
+ / e~
ê i 2 (
y i - ct/Nt)(Gt 
- 8yt)dt. 
(4.13.7) 
1 = 1 
0 
i = l 
For convenience, let 
m 
R(N, c, δ) = 2 ^-cJN^G^m-dy^N)). 
(4.13.8) 
i= 1 
We shall use optimal control theory to compute the optimal steady state. 
By definition the Hamiltonian function 
m 
H = e~
5tR(N, 
c, δ) + 2 Pi(Gt{N) - ",·)· 
(4.13.9) 
ί = 1 
Suppose there exists an optimal subarc which satisfies the conditions 0 < 
ut(t) 
< bt for i = 1, 2, . . ., m. Let (N*(t), u*(t)) denote such an optimal solution. It 
must satisfy the conditions 
m 
pt = -dH/dNt 
= -e-^dR/dNi 
- 
2 
pfGJM,, 
(4.13.10) 
s = 1 
dH/dut — 0, 
i = 1, 2, . . ., m. 
(4.13.11) 
Eqs. (4.13.9) and (4.13.11) give 
BH/dUt = -Pi 
= 0, 
i = 1, 2, ... ., m. 
(4.13.12) 
The control vector w appears linearly in the Hamiltonian function. There­
fore if there is an optimal interior control vector, it must be a singular control. 
Let D = d/dt. By Theorem 2.5.2 necessary conditions for the singular control 
to be optimal are

--- Page 171 ---

1 6 8 
D(d///dUf) = p{ = 0, 
(4.13.13) 
m 
(d/du,).D(dtf/du,) = e^^R/dUjdN, 
+ 2 P^GJdUjdN, 
= 0, 
(4.13.14) 
S = 
m 
m 
/7 sa
2G s/ajv faJv r) (σ Γ-ιι Γ) 
— δ e 
'bR/'àNi = 0 
(4.13.15) 
for i, ; = 1, 2, . . ., m. Conditions (4.13.10), (4.13.12) and (4.13.13) imply 
that 
If the function R is autonomous, then a solution of (4.13.16) gives a steady 
state solution to the optimal control problem. Let (4.13.16) have a unique 
positive solution at N* and the corresponding constant control vector be u*. 
In this optimal control problem the objective function J in (4.13.5) is to be 
maximized. Thus the generalized Legendre condition (Theorem 2.5.2) re­
quires that along the singular solution, the matrix whose typical element is 
where ι, ; = 1, 2, . . ., ra, must be positive semidefinite. Hence the matrix 
(d
2R/dN.dNj) 
must be negative semidefinite atiV*. It follows that the function 
R(N, c, δ) must be a local maximum at ΛΓ*. 
Example 4.13.1. Consider the competition model 
Nt =N1(3-2Nl 
- N
2 ) - u
u 
N2 =N2(2-Nl 
-N2)~u2. 
For u = (0, 0) this model has a globally stable equilibrium at (1, 1). 
Let v. = 1, c. = 0 for i = 1, 2 and δ = 0. The function 
R = ΛΓι(3 — 2Νι —N2) + N2(2-Ni 
-N2) 
has a global maximum at (1/2, 11/2). The corresponding optimal control 
vector is u* = (3/4, 1/2). 
Example 4.13.2. Consider the harvested prey-predator model 
Νγ =Νι(1Λ5-0.1Νί 
-N2)-ul 
=GX ~ u
u 
(4.13.18) 
N2 = ΑΓ 2(-0.8 + 0.2ΛΓ! - 0.1JV 2) - u2 = G2 - u 2, 
(4.13.19) 
where Ni = population of prey and N2 = population of predator. For u = (0, 
0) this model has a globally stable equilibrium at (4.5, 1). 
e'^dR/dNi 
= 0 , 
i = 1, 2, . . ., m. 
(4.13.16) 
(3/3u.)D
2i (dH/dUi) 
= 
-e'^d^/dNfiNj 
(4.13.17)

--- Page 172 ---

169 
Let Vx = 0.095, v2 = 1, cx = 0, c2 = 0 and δ = 0. The function 
R = 0 . 0 9 5 ^ ( 1 . 4 5 - O.liV! -N2) 
+ iV 2(-0.8 + 0 . 2 ^ - 0.1AT2) 
(4.13.20) 
has an interior stationary solution at (7.813, 0.1019). The corresponding 
control vector is u = (4.428, 0.07667) and R = 0.4974. But the matrix 
/ d
2R 
\ 
= 
/ - 0 . 0 1 9 
0.105\ 
\bNfiNj) 
\ 
0.105 
- 0 . 2 / 
is indefinite. Hence the singular solution at (7.813, 0.1019) is nonoptimal. 
This solution is a saddle point of the function R. 
The parameter values vx = 0.095, v2 = 1.0 imply that the predator is more 
valuable than the prey. Thus we can expect that an optimal solution may be 
given by ux = 0 and u2 is a singular control function. 
By definition, the Hamiltonian function is 
where Gu G2 and R are given in (4.13.18) to (4.13.20). Along a partially 
singular extremal we have 
Eqs. (4.13.22) to (4.13.24) and Gx = 0 are satisfied by the steady state solu­
tion, iV* = (9.5, 0.5) and u* = (0, 0.525). The corresponding value of R is 
equal to 0.525. Clearly this steady state gives a better return than the totally 
singular solution at (Nu N2) = (7.813, 0.1019). 
We shall now consider some aspects of the problem of optimally driving a 
harvested community from an arbitrary admissible state to a steady state 
singular solution at AT*. For simplicity we shall consider the harvesting of a 
two-species system under the assumption that the planning horizon [0, Γ] is 
very large. In this case the control programs for t close to Τ can be ignored. 
In brief the optimal harvesting problem is as follows: 
Η = R(NU 
N2) + p^G, 
- ux) + p 2 ( G 2 - 
u2) 
(4.13.21) 
bH/du2 = - p
2 = 0, 
(d/dt)(bH/bu2) 
= 0, 
(d
2/dt
2)(dH/du2) 
= 0. 
(4.13.22) 
(4.13.23) 
(4.13.24) 
System: 
Initially: 
Terminally: 
Constraints: 
Nt = Gt(N) -
A/i<0)=JV 
Nt(T) > eiy 
0 < ut < 6.. 
Τ = constant. 
u p 
i = 1, 2. 
(4.13.25) 
(4.13.26) 
(4.13.27) 
(4.13.28) 
Objective: 
max 
(4.13.29) 
Here y and R are given in (4.13.6) and (4.13.8) respectively.

--- Page 173 ---

170 
Suppose R(N9 c, δ) has a global maximum at the positive state at N*; and 
the corresponding totally singular control u* = G(u*) is admissible. Accord­
ingly the singular solution (AT*, u*) satisfies (4.13.16), (4.13.25), (4.13.28) and 
the generalized Legendre condition. 
The costate equations are 
* - ^ s r ^ - " ^ -
1·
1 
(413·
30) 
An optimal trajectory must satisfy these equations. Furthermore, at a 
switching junction, H, px and p2 must be continuous. These conditions are 
needed for computing the field of solutions as the initial state is varied. 
Typically the system is first driven by bang-bang control (i.e. ut = 0 or u. 
= bt) to a partially singular control arc. The system should then be driven 
along the partially singular control arc until the state reaches the totally 
singular solution at ΛΓ*. 
The field of solutions in the positive quadrant of the (Nu N2)-spdice is 
generated by integrating, in reverse time, the state eqs. (4.13.25), and using 
the necessary conditions for optimality. Generally, we first compute eight 
isolated trajectories which are joined to the totally singular solution Ν = iV*. 
These trajectories are generated by the control vectors (0, 0), (0, & 2), (bl9 0), 
(bu 
b2), (0, singular), (singular, 0), (bl9 singular) and (singular, u2). We must 
also use conditions px = 0 and p2 = 0 along the totally singular solution Ν 
= Ν* in order to join optimally the eight trajectories to the totally singular 
solution. 
As an example, let us consider how the u = (singular, 0) arc is computed. It 
is obtained by integrating, in reverse time from the totally singular solution 
Ν = N*9 the state eqs. (4.13.25) with u2 = 0 and ux satisfying 
bH/bux 
=-px 
= 0, 
(4.13.31) 
(d/dt)(bH/bux) 
= e~
6tdR/bNx 
+ p2dG2/bNx 
= 0, 
(4.13.32) 
(d
2/dt
2)(bH/dux) 
= 0. 
(4.13.33) 
The generalized Legendre condition is satisfied if 
(b/bux)(d
2/dt
2)(dH/dux) 
= -e~
6t[d
2R/bN\ 
- (a
2G 2/3AT?)(a JR/3iV 1)/ 
(bG2/bNx)] 
> 0 
(4.13.34) 
along the partially singular control solution. 
Eqs. (4.13.32) and (4.13.33) can be used to compute ux as a function oft 
and Ν if condition (4.13.34) is satisfied in the inequality manner. Recall that 
u2 - 0. With these functions, ux and u 2, the state eqs. (4.13.25) are numeric­
ally integrated in reverse time from the totally singular solution N*. The co-
state variables, px and p 2, along the partially singular solutions are computed 
by means of (4.13.31) and (4.13.32) instead of integrating the costate equa-

--- Page 174 ---

171 
tions (4.13.30). This is because the numerical solutions of the costate equa­
tions (4.13.30) will not satisfy conditions (4.13.31) in an exact manner. 
From each point of the u = (singular, 0) arc, we can construct two bang-
bang arcs by integrating, in reverse time, the state and costate equations, 
(4.13.25) and (4.13.30). We must also use the conditions that px and p2 are 
continuous at a switching point. At the beginning of the integration, let u 
= (0, 0) in one case and u = (bu 
0) in the other case. Subsequently the control 
vector is determined by the signs of dH/bux and 
dH/du2. 
As an example, consider how the u = (0, 0) arc which joins the totally 
singular solution atiV* is computed. The state and costate equations, (4.13.25) 
and (4.13.30), are integrated in reverse time, using the "initial" conditions, 
Ν = N*y ρ = (0, 0) and u = (0, 0). Subsequently the values of ux and u2 are 
determined by the signs of dH/dux and bH/bu2. In this manner we can com­
pute the four bang-bang arcs which join directly with the totally singular 
solution Ν = Ν*. 
The above method may be used to compute a unique field of solutions in 
the positive quadrant, provided that the generalized Legendre condition is 
satisfied along the entire arc of each of the partially singular control solutions 
and the switching of the control variables occurs only on the singular solu­
tions. From (4.13.34) it is clear that it is possible for the generalized 
Legendre condition to be satisfied only on a subarc of a partially singular arc 
even if R(N, c, δ) has a global maximum at JV*. In this case there could be a 
complex field of solutions. 
However, the method for constructing a complete field of solutions in the 
positive quadrant of the (Nu iV2)-space is not applicable if the function R(N, 
c, δ) does not have a local maximum at a totally singular solution at N*. 
Example 4.13.2 demonstrates that this possibility exists. This case is being 
investigated. 
Consider again the case where R(N9 c, δ) has a global maximum at N*. Here, 
one way to drive the system to the totally singular solution at N* is to choose 
admissible control variables, ux and w2, so as to maximize the function 
R = (dR/Mx)(Gx 
— ux) + (dR/W2)(G2 
- u
2 ) . 
(4.13.35) 
In other words, ux and u2 are chosen so that the projection of the direction 
of a trajectory in the steepest ascent direction is maximized. However, the 
function —R(N, c, δ) does not tend to infinity as JV. -> 0+ for i = 1, 2. This 
means that the above way of prescribing ux and u2 may generate solutions 
which intersect a coordinate axis. Therefore, close to the coordinate axes, the 
control variables must be prescribed according to some other rules. 
From this discussion, it is clear that the optimal policy to drive a system 
to a totally singular solution is generally very complex. This complexity 
means that it may be difficult to implement the optimal feedback control. 
Furthermore the optimal policy may be sensitive to the model of the natural 
dynamics.

--- Page 175 ---

172 
Let f*(JV(0)) be the minimum time it takes to drive the system from the 
state N(0) to the totally singular solution at iV*. Let δ be the discount interest 
rate. If δ t*(N(0)) > 1, the major part of the value of the functional in 
(4.13.29) is accumulated during the transition from N(0) to iV*. It is then 
desirable to use the optimal feedback control or another feedback policy 
which approximates the optimal policy. 
If δ = 0, the totally singular solution iV* is none other than a modified ver­
sion of the maximum sustainable yield (MSY) equilibrium. The modifications 
take into account the relative values of different species and the costs in 
harvesting them. Here, it is possible to use any stable feedback control policy 
to drive the system to N* without making much difference to the value of 
the objective function in the long run. The robustness of this harvesting 
policy provides a very cogent argument for using the modified MSY equil­
ibrium in harvesting a multispecies community instead of one which incor­
porates a discount interest rate. 
C H A P T E R 4: S E L E C T E D R E F E R E N C E S 
Fisheries 
management 
Gordon ( 1 9 5 4 ) ; Ricker ( 1 9 5 4 , 1 9 7 5 ) ; Schaefer ( 1 9 5 4 ) ; Beverton and Holt ( 1 9 5 7 ) ; Goh 
( 1 9 6 9 / 1 9 7 0 , 1 9 7 3 a, 1 9 7 7 b); Smith ( 1 9 6 9 ) ; Clark ( 1 9 7 3 a, b, 1 9 7 6 b, 1 9 7 8 , 1 9 7 9 ) ; 
Gulland ( 1 9 7 4 , 1 9 7 7 , 1 9 7 8 ) ; Cushing ( 1 9 7 5 ) ; Palm ( 1 9 7 5 , 1 9 7 7 ) ; Anderson ( 1 9 7 7 ) ; 
Larkin ( 1 9 7 7 ) ; Silvert and Smith ( 1 9 7 7 ) ; Clark and Mangel ( 1 9 7 8 ) ; Clark and Munro 
( 1 9 7 8 ) ; Silvert ( 1 9 7 8 ) . 
The logistic model 
Schaefer ( 1 9 5 4 ) ; Goh ( 1 9 6 9 / 1 9 7 0 ) ; Pella and Tomlinson ( 1 9 6 9 ) ; Silliman ( 1 9 7 1 ) ; Clark 
( 1 9 7 3 a, 1 9 7 6 a ) ; Cliff and Vincent ( 1 9 7 3 ) ; Beddington and May ( 1 9 7 7 ) ; Schnute ( 1 9 7 7 ) . 
Stability of bionomic 
equilibrium 
Smith ( 1 9 6 9 ) ; Clark ( 1 9 7 6 a, 1 9 7 8 ) . 
Stock recruitment 
model 
Moran ( 1 9 5 0 ) ; Ricker ( 1 9 5 4 ) ; Cushing and Harris ( 1 9 7 3 ) ; Hassell ( 1 9 7 5 ) ; Hassell et al. 
( 1 9 7 6 b); Goh ( 1 9 7 7 c ) ; Goh and Agnew ( 1 9 7 8 ) ; Fisher et al. ( 1 9 7 9 ) . 
Optimum size limit 
Allen ( 1 9 5 3 ) ; Beverton and Holt ( 1 9 5 7 ) ; Goh ( 1 9 7 3 a, 1 9 7 7 b).

--- Page 176 ---

173 
Models with age 
structure 
Leslie ( 1 9 4 5 , 1 9 4 8 ) ; Lefkovitch ( 1 9 6 5 ) ; Booth ( 1 9 7 2 ) ; Beddington and Taylor ( 1 9 7 3 ) ; 
Auslander et al. ( 1 9 7 4 ) ; Rorres and Fair ( 1 9 7 5 ) ; Clark ( 1 9 7 6 b); Usher ( 1 9 7 6 ) ; Goh 
and 
Agnew ( 1 9 7 9 ) ; Reed ( 1 9 7 9 ) . 
Models of whale 
population 
Annual Reports of the International Whaling Commission; Allen ( 1 9 7 3 ) ; Schevill ( 1 9 7 4 ) ; 
Clark ( 1 9 7 6 b); Allen and Kirkwood ( 1 9 7 7 ) ; Gambell ( 1 9 7 7 ) ; Goh and Agnew ( 1 9 7 8 , 
1 9 8 0 ) ; Beddington ( 1 9 7 8 ) . 
Harvesting a multispecies 
community 
Larkin ( 1 9 6 3 , 1 9 6 6 ) ; Rosenzweig ( 1 9 7 1 ) ; Gilpin ( 1 9 7 2 ) ; Clark ( 1 9 7 6 a ) ; Brauer et al. 
( 1 9 7 6 ) ; Getz ( 1 9 7 7 ) ; Silvert and Smith ( 1 9 7 7 ) .

--- Page 177 ---

175 
Chapter 5 
COMPLEX ECOSYSTEMS 
5.1. INTRODUCTION 
Elton (1958) put forward the hypothesis that complex ecosystems are 
more stable than simple ecosystems. For some years this hypothesis was 
accepted as a central principle in ecology. May (1974), however, warned 
against a blind acceptance of this principle, and showed that stability decreases 
with complexity among mathematical models of ecosystems. 
May's criticism has been supported and extended by Roberts (1974), 
Gilpin (1975 b), Goh and Jennings (1977). They have shown that the 
requirement that a nonlinear model should have a positive equilibrium 
imposes a very severe constraint on the parameters of the system when the 
number of species is large. Moreover, Goh and Jennings (1977) showed that 
the result of Gardner and Ashby (1970) and May (1974) on the stability of 
randomly assembled linear systems applies to the subset of Lotka-Volterra 
models with a positive equilibrium. Thus it is doubly difficult for a L o t k a -
Volterra model to represent a viable and stable complex ecosystem which 
is spatially homogenous and well mixed. 
In the real world, ecosystems are continually perturbed by large and 
unpredictable disturbances. Nonvulnerability was developed by Goh (1971, 
1 9 7 5 , 1 9 7 6 a) to describe an ecosystem's ability to withstand large, unpre­
dictable and continual disturbances. Using a result of Lee and Markus (1967), 
Goh (1975) showed that the set of linear ecosystem models which is com­
pletely vulnerable under a single perturbing force is open and dense in the 
space of such systems. It follows that species richness per se does not confer 
on a complex linear ecosystem model the property of the "not-putting-all-
eggs-in-one-basket" kind. 
From these studies on the relationships between stability and complexity, 
we conclude that real ecosystems must have some very special and math­
ematically atypical sorts of complexity which permit and enhance stability. 
It follows that a central problem in theoretical ecology is to elucidate the 
very special features in a complex ecosystem which promote the persistence 
of the system. 
Stability as a population model is often established by means of an

--- Page 178 ---

176 
eigenvalue analysis. This establishes only local stability. Ideally, we should 
test that an ecosystem model is stable relative to finite perturbations. But it 
is generally very difficult to do so in a population model with more than two 
species. In Sections 5.3 to 5.5, we shall derive some conditions for global 
stability in several classes of complex nonlinear ecosystem models. These 
results are obtained by means of the direct method of Liapunov. 
This direct method was discovered in 1892 by A.M. Liapunov (see Liapunov, 
1966), but it was ignored by mathematicians for a long time. In the West it 
became a popular tool for the analysis of nonlinear systems in the nineteen-
fifties. This method requires the construction of certain functions called 
Liapunov functions. For a physical system, the Liapunov method generalizes 
the idea that a system which continuously dissipates energy until it attains 
equilibrium is stable. 
In an ecosystem the population of each species must be nonnegative. This 
requires that in ecological theory a two-sided energy principle for construc­
ting a Liapunov function is more appropriate (Goh, 1977 a). A viable single-
species population must have net energy dissipation when its population is 
large; and it must have net energy absorption when its population is low. If a 
single-species population has this behavior it is said to be self-regulating. A 
complex ecosystem is robust if it is stable relative to large perturbations of 
its initial state, and if the qualitative behavior of its dynamics is not sensitive 
to small variations in the parameters of the system. In Section 5.5, it is 
shown that an ecosystem model is robust if it is a collection of populations 
each of which is self-regulating at extreme densities, and is such that from 
the total system's point of view, the interactions between the populations 
are weaker than the self-regulating interactions of the populations. 
By definition, an ecosystem model is connectively stable if it remains 
stable under certain classes of finite changes in the parameters which may 
alter the type of interactions between species. This concept of stability was 
pioneered by Siljak (1978). In Section 5.6 it is applied to a class of non­
linear ecosystem models. 
Nonvulnerability describes a system's ability to withstand large and unpre­
dictable disturbances. In Section 5.7 we establish that a class of nonlinear 
models is nonvulnerable under a prescribed class of disturbances. The 
bounded but unknown functions which act on a nonlinear ecosystem model 
can also be interpreted as errors in the system's equations which can be 
tolerated without a qualitative change in the behavior of the dynamics of the 
system. 
The requirement that a nonlinear ecosystem model has a positive equi­
librium imposes a very severe constraint on the parameters of the system. 
But a given nondegenerate Lotka—Volterra model for m species has 2
m 
equilibria; usually a significant fraction of these are nonnegative. This suggests 
that the stability of nonnegative equilibrium is important in the analysis of a 
complex ecosystem model.

--- Page 179 ---

177 
The concept of asymptotic stability cannot always be used directly to 
establish the stability of a nonnegative equilibrium. For example, the equil­
ibrium Ν = 0 of Ν = —Ν
2 is not asymptotically stable. But every solution of 
the equation which has a positive initial value remains positive for all finite 
values of t and converges t o J V = 0 a s i - » « > . This motivated the development of 
the concept of sector stability. By definition, a nonnegative equilibrium is 
sector stable if every solution of the system which begins in an admissible non-
negative neighbourhood remains in an admissible neighbourhood for all finite 
values of t, and converges to the nonnegative equilibrium as t
 
0 0 . Some 
simple conditions for a nonnegative equilibrium to be globally sector stable 
are obtained. This concept is useful for understanding the dynamics of indi­
vidual patches in a spatially heterogenous community. 
In the real world, the growth rate of a population usually does not respond 
immediately to changes in its own population or that of an interacting 
population. This fact introduces time delays into population dynamics. In 
Section 5.9 some simple conditions for global stability are obtained for a 
class of population models with continuous time delays. 
Spatial heterogeneity plays an important role in the persistence of a com­
plex ecosystem. Suppose a community in a region is an inter-connected net­
work of patches. From the preceding discussions we can expect that each 
patch in isolation has a sector stable equilibrium which contains a few 
species. Suppose different combinations of species persist in different patches 
when the latter are in isolation. If the diffusion coefficients between patches 
are small, then we expect that the network of patches will allow a relatively 
large number of species to persist in the region. In Section 5.10 we shall 
examine some computer simulations which suggest that this type of network 
is globally stable, if all the patches in isolation are globally sector stable, and 
the diffusion coefficients between the patches are small. Thus spatial hetero­
geneity can make a complex ecosystem robust. 
5.2. M A T H E M A T I C A L R E L A T I O N S H I P S B E T W E E N S T A B I L I T Y AND C O M P L E X I T Y 
Elton (1958) put forward the hypothesis that in Nature a complex eco­
system tends to be more stable than a simple ecosystem. This hypothesis was 
supported by the observation that populations in a complex tropical eco­
system are more stable than those in an arctic or a desert region. For a num­
ber of years this hypothesis was accepted as a central principle in ecology. 
However, it was attacked by May (1974), who showed that increasing 
complexity reduces stability in population models. From studies of specific 
classes of population models of increasing complexity, May (1974) showed 
that a simple community model tends to have a comparatively large domain 
of parameter space wherein it is stable; while on the other hand, a complex 
community model tends to be fragile because it is stable for parameters 
within a comparatively small and restricted region of its more highly

--- Page 180 ---

178 
dimensional parameter space. Following Gardner and Ashby (1970), May 
(1974) showed that the stability of randomly connected linear systems 
decreases as the number of species increases, and as the strength and the 
number of connections among the species increase. 
Let the linearized dynamics of an ecosystem model in a neighbourhood of 
an equilibrium be 
m 
* i = 
Σ
 
au
xn 
i = l , 2 , . . . , m . 
(5.2.1) 
j = ι 
Let / be an identity matrix, and let Β = (bu) and A = (a f J) = Β — J. The com­
munity connectance C is defined as the fraction of non-zero elements in the 
matrix B. The non-zero elements of Β are equally likely to be positive or 
negative; and have magnitudes which are chosen from a random number 
distribution with mean equal to zero and a mean square value equal to s \ 
Thus s
 2 is a measure of the strength of the non-zero interactions. 
It was shown by May (1974) that the matrix A will almost certainly be 
stable if 
s(mC)
1/2 
< 1; 
(5.2.2) 
and it would almost certainly be unstable if (5.2.2) is violated. This analytical 
result of May confirmed the simulation studies of Gardner and Ashby (1970). 
It follows that stability tends to decrease as complexity increases in an 
ecosystem model. An interesting question which follows is: what are the 
special features in a real complex ecosystem which will allow and enhance 
stability? 
Goh (1974) showed that a linear food web in which each trophic level 
dissipates energy in the absence of energy inputs will be stable. DeAngelis 
(1975) discovered a class of randomly assembled food web models in which 
stability increases with complexity. In these models energy flows in one 
direction, from the lowest trophic level to the highest trophic level. Energy 
is absorbed from the environment at the lowest trophic level and is dissipated 
at all the other trophic levels. 
Following Cross (1978) a matrix A is said to be Liapunov—Volterra stable 
if there exists a positive diagonal matrix D = diag(d!, d 2, . . . , dm ) such that 
DA + A
TD is negative definite. Let us denote this class of matrices by L — V. 
Let 
V(x) = (<*!*? + d2x\ 
+ · - - + dm x
2
m )/2. 
(5.2.3) 
Computing V along solutions of (5.2.1) we get 
V(x) = (l/2)x
T(DA 
+ A
TD)x. 
(5.2.4) 
Hence, if A belongs to L — V, model (5.2.1) is stable. Goh (1977 a) showed 
that a necessary condition for A to belong to L — V is that all the principal

--- Page 181 ---

179 
minors of —A must be positive. Hence the probability for a randomly con­
structed matrix A to belong to L — V decreases as the number of species 
increases, and, in a more subtle way, as the magnitudes of the elements of A 
increase. If an ecosystem consists of a collection of self-regulating species 
and the sum total of the self-regulating forces dominates the destabilizing 
effects of the interspecific interactions, then we can expect that it would 
have at an equilibrium, a matrix A which belongs to L — V. 
Roberts (1974) made the important point that in order for a non-linear 
population model to represent a viable spatially homogenous ecosystem it 
must have a positive (feasible) equilibrium. Roberts (1974), Gilpin (1975 b), 
and Goh and Jennings (1977) studied randomly assembled Lotka—Volterra 
models. They concluded that the requirement that the nontrivial equilibrium 
of a Lotka—Volterra model must be positive imposes a very severe constraint 
on the parameters of a model if the number of species is large. Goh and 
Jennings (1977) showed that the result of Gardner and Ashby (1970) and 
May (1974) for randomly assembled linear systems is applicable to the sub­
set of Lotka-Volterra models each of which has a positive equilibrium. 
From this discussion it follows that it is doubly difficult for a complex 
model to represent a viable and stable ecosystem in a spatially homogenous 
environment. 
Consider the Lotka-Volterra model 
m 
Ni-NAbi^- 
Σ
 
au
NA> 
i = l , 2 , . . . , m 
(5.2.5) 
j = ι 
where b = (&,·) and A = (a l 7) are constant matrices. The nontrivial equilibrium 
N* of (5.2.5) satisfies the equations 
m 
^ + Σ Μ ^ = 0 , 
ï = l , 2 , . . . , m . 
(5.2.6) 
j = ι 
Thus the equilibrium N* is the intersection of m hyperplanes. The act of 
choosing the set of parameters {bh a l 7} in a random manner is equivalent to 
choosing m hyperplanes in a random manner. If the hyperplanes are not 
chosen in a biased manner we can expect that the probability that N* is 
positive (i.e. iV*> 0, i = 1, 2, . . . , m) is approximately equal to 2~
 m . 
On the other hand a nondegenerate Lotka-Volterra model of m species 
has 2
m equilibria. This is because an equilibrium of (5.2.5) can be obtained 
by setting Nt = 0 or bt + Σαι7ΑΓ; = 0 for i = 1, 2, . . . , m. For each species we 
have two choices. Hence, for m species there are 2
m possibilities. Gilpin and 
Case (1976) showed that a randomly assembled Lotka—Volterra model of 
competition can be expected to have a significant fraction of locally sector 
stable nonnegative equilibria. Furthermore there is a high probability that 
a randomly assembled Lotka—Volterra model has a nonnegative equilibrium

--- Page 182 ---

180 
with a large domain of attraction if m < 20. For m > 8 the mean number of 
species present in a locally sector stable nonnegative equilibrium is 2.5. 
These properties of Lotka—Volterra models can be expected to occur also 
in more nonlinear differential equation models of interacting populations. 
They have important implications for a community which is made up of an 
interconnected network of patches each of which in isolation is described by 
a nonlinear differential equation model of the form 
AT« = NiFANu^ 
. . . , lV m ), 
i = 1, 2, . . . , m 
(5.2.7) 
where Fx (N)9 F2(N)9 
... , Fm(N) 
are continuous functions of N. From the 
preceding discussions we conclude that it is highly probable that each patch 
in isolation would contain only a few species. If the environment is spatially 
heterogenous then different combinations of species will persist in different 
patches. In this case, Examples 5.10.3 to 5.10.5 clearly demonstrate that 
the total network of patches would allow a large number of species to persist 
if the diffusion coefficients between the patches are small. 
Hitherto the concept of stability that we have used in this section is 
related to impulsive and infrequent perturbations of the initial state of the 
system. But real ecosystems are continually perturbed by unpredictable 
distrubances. To describe a system's ability to persist in spite of incessant 
disturbances, Goh ( 1 9 7 1 , 1 9 7 5 , 1 9 7 6 a, 1978 d) developed the concept of 
nonvulnerability. Goh (1975) showed that the set of linear ecosystem models 
which is completely vulnerable under a single perturbing force is open and 
dense in the space of all such systems. It follows that species richness per se 
does not confer on a complex linear model the property of the "not-putting-
all-eggs-in-one-basket" kind. Thus there must be special features in the struc­
ture of a real ecosystem which reduce the vulnerability of a system. We note 
that a weakly connected network of patches, some of which are continually 
perturbed by a disturbance, is less vulnerable than the same community in 
a homogenous environment. Recently Vincent and Anderson (1979) showed 
that the addition of a trophic level to a food chain may make the system less 
vulnerable. 
Suppose a model of an ecosystem which is continually perturbed by the 
forces ul9 u29 ... , up is 
Nt = Gi(Nl9N2, 
... 
9Nm9ul9u29 
... 
9 up)9 
i = 1, 2, . . . , m. 
(5.2.8) 
Let ux (i), "2(0> · · · >
 u
P(t) 
be piecewise continuous functions of t and 
ak < uk < bk for k = 1, 2, . . . , ρ where ak and bk are a priori bounds. Denote 
the admissible set of {uk (t)} by U. 
Let S(0) be a desirable region of the (Ni9N29 
... , Nm )-space. Let Z(T) be 
a set of undesirable states. By definition (5.2.8) is vulnerable relative to the 
sets U9 S(0) and Z(T) during the time interval [0, T] if there exists an admis­
sible ue 
U which will drive the system from a state N(0) G S(0) to Z(T) 
during the time interval [0, T ] . Otherwise it is said to be nonvulnerable.

--- Page 183 ---

181 
Example 5.2.1. Let a logistic population model be continually perturbed by 
u(t). Suppose we have 
N = N — N
2—u 
(5.2.9) 
where 0 < u(t) < 1/8. The population will persist during the time interval 
[0, T] where Τ is any positive number of initially 
N(0) 
> V 2 ( V 2 - 
l ) / 4 . 
Hence, if S(0) = {Ν \ Ν> 
y/2{y/2 
- l ) / 4 } and Z(T) = {Ν \ N< 
y/2(s/2 
- 1)/ 
4 } , then (5.2.9) is nonvulnerable. 
A subclass of nonlinear population models which are nonvulnerable is 
studied in Section 5.7. But generally, in the case of more than two species, 
it is very difficult to test whether or not a population model is vulnerable. 
To get some insight into how the vulnerability of a system may change as the 
complexity of the system increases, we shall consider the linearized dynamics 
of the system. 
Let N* G S(0) and G^iV*, 0) = 0 for i = 1, 2, . . . , m. Consider the special 
case when there is a single perturbing force u{t). Let x( = e(Nt — Nf) and 
υ - eu where e is a small positive constant. The linearized dynamics of (5.2.8) 
is 
m 
xi = 2
 
au
xj
 
+ btv9 
i = 1, 2, . . . , m 
(5.2.10) 
; = ι 
where au = dGJbNj and bt = bGJdu at (N*, 0 ) . Let us assume that no a priori 
bounds are imposed on v(t). 
The linear system is said to be completely vulnerable if, for any given 
initial state x(0) and any given final state x(T)9 there exists a piecewise con­
tinuous function v(t) which will drive the system from #(0) to x(T) during the 
time interval [0, T]. This definition parallels that for complete controllability 
of a linear system (see Barnett, 1975). It follows that a sufficient condition 
for (5.2.10) to be completely vulnerable is 
rank[& \Ab \A
2b 
: ... \A
m-
lb] 
= m. 
(5.2.11) 
For convenience, the compound matrix in (5.2.11) is called the vulnerability 
matrix. 
Lee and Markus (1967, p.100) have shown that the set of all pairs (Ay b) 
which satisfies (5.2.11) is open and dense in the space of all pairs (A, b) 
with the metric 
m 
m 
II(Λ, 6)11 = 2 
+ Σ 
'
6 Ί 
(5.2.12) 
ij = 1 
i = l 
where \c\ denotes the absolute value of c. This means that if a pair (A, b)

--- Page 184 ---

182 
satisfies (5.2.11), then all variations of (A, b) caused by small changes in the 
elements of A and b also satisfy (5.2.11). Furthermore if (A, b) does not 
satisfy (5.2.11), then by small changes in the elements of A and b, we can 
get a pair which satisfies (5.2.11). Thus linear systems which are not com­
pletely vulnerable to a single perturbing force are extremely rare in the world 
of all possible linear systems each of which is subject to a single perturbing 
force. It is so rare that if one constructs randomly connected food webs 
with a single perturbing force, the probability that a randomly connected food 
web with a single perturbing force is completely vulnerable is always equal 
to one, irrespective of the number of species. Hence species richness per se 
does not confer on a system the property of the "not-putting-all-eggs-in-one-
basket" kind. 
It follows that a high percentage of the elements of A and b for a full 
model of an ecosystem must be fixed zeros. To keep mathematical models 
tractable to analysis, population theorists have focused their attention on 
richly connected simple submodels of an ecosystem. This approach has made 
us overlook the important role that null interactions between species in 
different submodels perform in the persistence of the total ecosystem. 
We expect that spatial heterogeneity confers on an ecosystem the "not-
putting-all-eggs-in-one-basket" property relative to certain disturbances. We 
shall consider how our type of analysis supports this expectation. We shall 
also demonstrate that the vulnerability of a system relative to a perturbing 
force depends on the manner in which the force acts selectively on the 
dynamics of the system. 
Suppose we have an insect population on islands P I and P2; during the 
period [0, T] migrants move only from P2 to P I . Let an epidemic begin on 
island P I and wipe out the insect population during the time interval [0, tx ] 
where tx < T. During the period [tuT] 
let the insect recolonize island P I . 
Thus during the time interval [0, T] the insect populations on islands P I and 
P2 are not vulnerable to the epidemic. 
On the other hand, suppose the epidemic begins on P2 and is transmitted 
to P I by the migrants. This wipes out the insect populations on both islands. 
Thus the manner in which a perturbing force acts directly on the components 
of an ecosystem is important. Therefore a novel disturbance to an ecosystem 
can be a very serious threat to the system because the pattern of interactions 
in the community would not have evolved to prevent the transmission of the 
adverse effects throughout the system. 
Let us examine caricatures of these examples. Consider the system 
(5.2.13) 
The vulnerability matrix for this system is 
A : a„\ 
\0 : 0 / ' 
(5.2.14)

--- Page 185 ---

183 
Clearly its rank is less than 2 and thus condition (5.2.11) is not satisfied. 
This means that v(t) does not drive x2 directly and indirectly. In this case 
x2 is secure from the adverse effects of the perturbing force. This corresponds 
to the case in our example when the epidemic begins on island P I . 
Consider the system 
The vulnerability matrix is 
(5.2.16) 
(0 : 
aX2\ 
U : 022/ 
Its rank is equal to 2 if a12 Φ 0. Hence condition (5.2.11) is satisfied. In this 
case v(t) acts directly on x2 and indirectly on xx. This corresponds to the case 
in our example when the epidemic begins on island P2. 
Further insight into the structure of systems (5.2.13) and (5.2.15) can be 
obtained by a change of variables. Excluding the exceptional case axx = a22, 
let 
*ι = 3 Ί —y2aX2l{an 
— a 2 2 ) , 
* 2 = y 2 , 
(5.2.17) 
Model (5.2.13) maps into 
y l =011^1 + v, 
y2 = a22y2. 
(5.2.18) 
Thus (5.2.13) is equivalent to a collection of two non-interacting subsystems. 
Clearly y2 is secure from the perturbing force v(t). This is precisely the effect 
of the "not-putting-all-eggs-in-one-basket" kind. 
Model (5.2.15) maps into 
yi =αιι3Ί + v(t)al2/(an 
~ a
2
2 ) , 
y2 = a22y2 
+ v(t). 
(5.2.19) 
We have decoupled the state equations, but if aX2 Φ 0, the perturbing force 
acts on both subsystems. In fact, when (5.2.11) is satisfied there is no 
nonsingular linear transformation which maps (5.2.10) into another model 
with an isolated subsystem, i.e. a subsystem which does not interact with 
other subsystems and the perturbing force. 
By using linear difference equation models, we can demonstrate that age 
structure in a population reduces the vulnerability of the population to a 
disturbance which perturbs only members of the population of certain 
ages and which acts during a period which is brief compared with the life 
span of the species.

--- Page 186 ---

184 
5 . 3 . S T A B I L I T Y O F N O N L I N E A R M U L T I S P E C I E S M O D E L S 
Suppose an ecosystem has m interacting species. Let Nt be the population 
of the ith species. A model of the system is 
where Fu F2, ... , Fm are general nonlinear functions. 
We shall examine the stability of the equilibrium JV* which satisfies the 
equations 
This equilibrium is feasible (positive) if JV* > 0 for i = 1, 2, . . . , m. By defi-
nition JV* is globally stable if every solution of (5.3.1) which begins in the 
positive orthant R™ = {JV \ JVf > 0, i = 1, 2, . . . , m } remains in it for all 
finite values of t and converges to JV* as t ->
 0 0 . 
The most effective analytical method to establish the global or finite 
stability of JV* is the direct method of Liapunov. This requires the construc-
tion of a Liapunov function. One way to construct a Liapunov function for 
a multispecies model is to make a positive linear combination of Liapunov 
functions for single-species models. 
Let V^Ni) be a Liapunov function for the logistic model of a single-species 
population. A general expression for V^JV,) is 
where ^(S,) is a continuous function such that //(S,) < 0 for all S f G (0, JV*), 
fi(Si) > 0 for all S f G (JV£ oc), and ft(S,) > 0 for all S, > 0. Furthermore 
fi(Si) and gi(Si) are chosen so that V^JV,)
 
0 0 as JV, 
0 + or as Nt?
 
0 0 . 
Example 5.3.1. (a) If fx (Si ) = Sx - JV* and ^ ( S j ) = 
then 
ViiATj) = Nx — JV* 
-NÎYniNJNt). 
(b) If A(S 2) = Si - JV2*
2 and £ 2 ( S 2 ) = Si, then 
V 2(JV 2) = JV2 - 2JV2* + JV 2*
2/JV 2. 
Let cu c2 , ... , cm 
be positive constants. A candidate to act as a Liapunov 
function for (5.3.1) is 
Ni = NiFi(Ni,N2, 
. . . , JV m), 
ι = 1, 2, . . . , m 
(5.3.1) 
F,(JV) = 0, 
i = l , 2 , . . . , m . 
(5.3.2) 
(5.3.3) 
V(N) = c, ^ ( J V J + c 2V 2(JV 2) + . ·. + cm Vm (JVm ). 
Along a solution of (5.3.1), 
(5.3.4) 
m 
(5.3.5) 
i = 1

--- Page 187 ---

185 
By Theorem 3.3.5 the equilibrium ΛΓ* is globally stable if V < 0 for all 
N G RJ
1, and V(N) does not vanish identically along a solution of (5.3.1) 
except for the trivial solution Ν = Ν* The next theorem follows by using a 
particular class of Liapunov function. 
Theorem 5.3.1. Suppose model (5.3.1) 
has a positive equilibrium 
at N*. Let 
fi(s) and gi(s) be a pair of functions such that Vj-iiV,.) of (5.3.3) 
is a Liapunov 
function for a single-species 
model with an equilibrium 
at N* The 
equilibrium 
N* of (5.3.3) 
is globally stable if there exist positive constants cu c 2, . . . , cm 
such that the 
function 
m 
W(N)= 
2 
ci[fi(Ni)/gi(Ni)]NiFi(N)<0 
(5.3.6) 
i = 1 
for all N G R™ and W(N) does not vanish identically along a solution of 
(5.3.1) 
except for Ν = N* 
Proof. Let V(N) be the function given in (5.3.4) where V^C/V,) is given by 
(5.3.3). Along a solution of (5.31.) we have V(N) = W(N). The theorem 
follows by LaSalle's (1976) extension of the direct method of Liapunov. 
If fi(Ni) = Ni -iV^and ft(JV,) = Ni9 we deduce that N* is globally stable 
if there exist positive constants cu c 2, . . . , cm 
such that 
m 
V(N)= 
2 
C|(JV, - Nf)F,(N) 
< 0 
(5.3.7) 
i = 1 
for all N G RJ* and V(N) does not vanish identically along a solution of 
(5.3.1) except for the trivial solution Ν = Ν*. 
Example 5.3.2. Following Hsu ( 1 9 7 8 a) let us examine the prey—predator 
model 
# 2 = Λ Τ 2 [ α 2 ι ( Λ Τ ι ) ] 
where &(ΛΓ,), αι 2(Λ/\) and α 2, (ΛΓ,) are functions of iv",. We assume that it has 
a positive equilibrium at Ν* = (Ν*, N* )• 
If c, = 1, c 2 = 1, fl(Nl)=a71(Nl),gl(N1) 
= Nla12(N1), 
f2(N2)=N2-NÎ 
and 
g2(N2) 
= N2, the function V(N) of (5.3.6) becomes 
V(N) = 
a2i(N1)[b(Ni)lal2(Nl)-NÎ] 
= α 2,(Ν,)[&(ΛΓ,)/α, 2(ΛΜ - &(ΛΓ,*)/α,2(ΛΓ,*)]. 
It follows thatiV* is globally stable if a21(N1)[b(Nl)/a12(N1) 
- &(Λ/\*)/α12(Ν,*)] 
< 0 for all Nt > 0 and Ν, Φ Nt

--- Page 188 ---

186 
From experience, we find that the function (5.3.4) is a good candidate to 
act as a Liapunov function if model (5.3.1) is a collection of populations each 
of which is self-regulating and the sum total of the regulating intraspecific 
interactions dominates the destabilizing effects of the interspecific inter-
actions, If a population in the community has unstable intraspecific inter-
cations, it is worthwhile to subject (5.3.1) to a preliminary transformation. 
In this manner, Hsu (1978 c) was able to establish the global stability of 
Lotka—Volterra models in which not all the species are self-regulating. 
If bF1/dNi 
> 0 at the equilibrium, the Ni-population 
is said to be not 
self-regulating at the equilibrium. In this case it may be worthwhile to subject 
model (5.3.1) to the Poincare transformation 
N1 = l/xu 
N1=xi/x1 
for? = 2 , 3 , . . . , m. 
(5.3.8) 
Under this transformation, model (5.3.1) becomes 
xx = —xlFl(l/xux2/xl,... 
, x m / x i ) , 
X \ = Xi(Fi — Fx), 
i = 2, 3, . . . , m. 
(5.3.9) 
The positive equilibrium N* is mapped into a positive equilibrium which is 
denoted by x*. Sometimes it is easy to construct a Liapunov function for 
the transformed model when it is difficult to do so for the original model. 
This combination of a preliminary transformation and a search for a Liapunov 
function may be used repeatedly until a suitable Liapunov function is con-
structed. 
Using the Liapunov function 
m 
V(x)= 
2 
ci[xi—x*—xîln(xi/xÎ
t)] 
(5.3.10) 
i = 1 
we deduce that x* of (5.3.9) is globally stable if there exist positive constants 
c
u c 2 , . . . , c m such that 
m 
V = -cx(xx-xï)Fx 
+ 2 
ci(xi-xfi(Fi-Fl)<0. 
(5.3.11) 
i = 2 
and F does not vanish identically along a solution, except for χ = χ*. 
Example 5.3.3. Consider the prey—predator model 
Nx = ΛΓ^Ο.25 Η- Νχ - 5ΛΓ2), 
Ν2 = Ν2(-0.5 
+ 2Νι - 
6Ν2). 
It has an equilibrium at (1.0, 0.25). 
Under the Poincare transformation Nx = l/xx, 
N2 = x2/Xi, 
we get 
Χι = (—1 — 0.25*! + 5 * 2 ) ,

--- Page 189 ---

187 
x2 = * 2 (1 — 0.75* ! — x2 
)/xi. 
Using the Liapunov function (5.3.10) with cx = 0.75 and c2 = 5, we get 
V = - [0.1875(*i - I )
2 + 5(x2 
-0.25)
2]/x1. 
Therefore the transformed model is globally stable. Hence the original 
model is globally stable. 
5 . 4 . S T A B I L I T Y O F M U L T I S P E C I E S L O T K A - V O L T E R R A M O D E L S 
The Lotka—Volterra models form the simplest class of nonlinear population 
models. A highly nonlinear population can always be approximated by a 
Lotka—Volterra model in the neighbourhood of an equilibrium. Thus an 
analysis of a Lotka-Volterra model of a community may provide more 
information of the stability properties of the community than an eigenvalues 
analysis of a more nonlinear model of the system. 
A Lotka-Volterra model for m interacting species is 
I 
a</ty], 
; = l , 2 , . . . , m 
(5.4.1) 
where bh a l 7 for z, ; = 1, 2 , . . . , m are constants. Each equation in (5.4.1) has 
two factors. The model could have up to a maximum of 2
m equilibria. Let 
N* denote the equilibrium which satisfies the set of equations, 
m 
bi + 2
 
av
N*
 
= 0, 
i = 1, 2, . . . , m. 
(5.4.2) 
j = l 
By definition N* is a positive or feasible equilibrium if N* > 0 for i = 
1 , 2 , . . . , m . 
Using eq. (5.4.2), model (5.4.1) becomes 
m 
Ni=Ni 
Σ 
au(Nj-Nj*)9 
i = l , 2 , . . . , m . 
(5.4.3) 
j = ι 
Let N* be an equilibrium of (5.3.1) and a l 7 = dFi/dNj at N*. It follows that 
(5.4.3) is a local approximation of (5.3.1). 
The equilibrium N* is locally stable if all the real parts of the eigenvalues 
of the matrix (Ν*αα) 
are negative. Note that in general the stability properties 
of the matrix (JV*a i ;) are different from those of the matrix A = (a l 7). The 
next theorem describes some conditions for global stability. 
Theorem 5.4.1. The positive equilibrium N* is globally stable if there exists 
a positive diagonal matrix C such that CA + A
TC is negative 
semi-definite 
and the 
function

--- Page 190 ---

188 
W(N) = ( 1 / 2 ) ( Ν - Λ ί * )
τ ( 0 4 4- A
TC)(N-N*) 
(5.4.4) 
does not vanish identically 
along a solution of (5.4.1) 
except for Ν = Ν*. 
Proof. Let C = diag(c 1 ? c 2 , . . . , cm ) where c
u c 2 , . . . , cm are positive constants, 
and 
m 
V(N)= 
2 
cdNi-Nf-NflniNJN?)]. 
(5.4.5) 
i = 1 
Along solutions of (5.4.1) we have 
V = ( l / 2 ) ( i V - J V * )
T ( C A + A
TC)(N-N*) 
= W(N). 
(5.4.6) 
By assumption W(N) does not vanish identically along a solution of (5.4.1) 
except for Ν = Ν*. Hence by LaSalle's extension of the direct method of 
Liapunov N* is globally stable. 
Example 5.4.1. Consider the prey—predator model 
Nx=Nx[bx 
- a i a t f a ] , 
ΛΓ2 =N2[-d 
+ 
Ea12N1-a22N2] 
where bu α 1 2, α 2 2, 
and d are positive constants. This model has a positive 
equilibrium at AT* = [(da 1 2 4- ba22)/Ea\2, 
b / a 1 2 ] . The interaction matrix is 
A=(° 
~~
ai2\ 
\Eal2 
—a22J ' 
If C = diag(£, 1), the matrix OA + A
TC = diag(0, - 2 a 2 2 ) . Thus CA + A
T C 
is negative semidefinite. The function V(N) = ~(a22)(N2 
— b/al2)
2 
does not 
vanish identically along a solution of the model except for Ν = Ν*. Hence 
the equilibrium N* is globally stable. 
Similarly it can be shown that a longer food chain is globally stable if it 
has a positive equilibrium. Consider the model 
Ni=Nx[bx 
- a
1
2 i V
2 ] , 
N2 =N2[-d2 
+ e2a12Nx 
—a23N3], 
N3 =N3[—d3+ 
e3a23N2 
—a33N3] 
where all the parameters are positive. If the equilibrium at N* where 
N2 = &ι/α 1 2, N* = (e3a23N2 
—d3 )/a33, 
Nt = (d2 + a23N3)/(e2a12) 
is positive, 
then it is globally stable. 
Next consider the case in which the species at the lowest trophic level is 
self-regulating. For a three-species food chain, we have 
Nx =Nx[bx 
-axxNx 
~a12N2],

--- Page 191 ---

189 
N2 = N2[—d2 
+ e2aX2Nx 
— 
a23N3], 
N3 = N3 [—d3 + e3a23N2 
]. 
It has an equilibrium atN* whereN 2 = d3/(e3a23), 
Nx = (bx — aX2N2 
)/axx 
2indN3 
= (e2aX2Nx 
— d2 )/a23. 
If we choose cx = 1, c 2 = l / e 2 and c 3 = l / ( e 2 e 3 ) , 
then the function V(N) of (5.4.4) is a Liapunov function. We conclude that 
the equilibrium N* is globally stable. 
In general, for m > 2, it is difficult to construct a positive diagonal matrix 
C such that CA + A
T C is negative semidefinite. The case when m = 3 has been 
studied by Cross (1978). We shall establish some sufficient conditions for a 
Lotka—Volterra model of a two-species system to be globally stable. 
Theorem 5.4.2. For m = 2, model (5.4.1) 
is globally stable if (i) it has a 
positive equilibrium atN*, and (ii) axx < 0, a22 < 0 and det A > 0. 
Proof. We shall show that condition (ii) implies that there exists a positive 
diagonal matrix C such that CA + A
TC is negative definite. The matrix 
CA + A
TC is negative definite if cxaxl 
< 0,c2a22 
< 0 and 
4 c 1 c 2 a 1 1 a 2 2 — (ctal2 
+ c2a2lf 
> 0. 
(5.4.7) 
Clearly C i a
n 
< 0 and c2a22 
< 0 if condition (ii) is satisfied. 
For condition (5.4.7), there are three cases: (a) α 1 2 α 2 1 = 0, (b) al2a2X 
> 0, 
and (c) αί2α2ί 
< 0. 
In case (a), either a 1 2 = 0 or a 2 1 = 0, or both are equal to zero. Suppose 
a 1 2 = 0. Condition (5.4.6) reduces to 
c 2 ( 4 c 1 a 1 1 a 2 2 — c 2 a 2 1 ) > 0 . 
(5.4.8) 
Clearly it is possible to choose positive constants cx and c 2 so that (5.4.8) is 
satisfied. Similar arguments apply when a2X = 0, or aX2 and a2X are both equal 
to zero. Biologically, case (a) contains interactions known as amensalism, 
commensalism and neutralism. 
In case (b), aX2a2X 
> 0. This means either aX2 < 0 and a2x < 0, or ax2 > 0 
and a2X > 0. These subcases are known as competition and mutualism 
respectively. Condition (5.4.7) can be rewritten as 
4cxc2(axxa22 
—ax2a2X) 
— (cxaX2 
— c2a2X)
2 
> 0. 
(5.4.9) 
It is possible to choose positive numbers cx and c2 so that 
By assumption det A > 0. Hence (5.4.9) is satisfied. 
In case (c), aX2a2X 
< 0. This represents a prey—predator interaction. As 
aX2 and a2X have opposite signs, it is possible to choose positive numbers 
cx and c 2 such that 
cxaX2 
— c2a2X = 0. 
(5.4.10) 
cxaX2 
+ 
c2a2X = 0. 
(5.4.11)

--- Page 192 ---

190 
It follows that (5.4.7) is satisfied. This completes the proof of the theorem. 
We deduce from Theorem 5.4.2 that for two-species Lotka—Volterra models 
of competition or mutualism, local stability implies global stability. 
For m > 2, there is a simple set of sufficient conditions for model (5.4.1) 
to be globally stable. 
Theorem 5.4.3. Model (5.4.1) 
is globally stable if it has a positive 
equilibrium 
at N* and there exists a matrix G such that 
ait < Gu 
and 
\au\ < Gi} 
for i Φ j 
(5.4.12) 
for ι, j = 1, 2, . . . , m and all the leading principal minors of — G are positive. 
Proof. The off-diagonal elements of the matrix G are nonnegative. If all the 
leading principal minors of —G are positive, then G is an Af-matrix. Araki and 
Kondo (1972) showed that an M-matrix has a positive diagonal matrix C such 
that CG + G
TC is negative definite. 
Using (5.4.6) and (5.4.12), we get 
m 
V= 
Σ 
ciaij(Ni-N*)(Nj-Nf)<(l/2)(N-N*)
T(CG+ 
G
T C ) ( N - Λ Γ * ) . 
i J 
(5.4.13) 
It follows that V(N) is negative definite. Hence Λ Γ * is globally stable. 
Example 5.4.2. The three-species model 
N1 =N1(2.5-2N1 
-N2 
+ N3), 
N2 = N2(4.5 
— Ni — 3N2 - 
N3), 
N3 = N3(-l 
+ Nx+ 
N2- 
2N3) 
has an equilibrium at (1, 1, 0.5). 
A suitable G matrix is 
All the leading principal minors of —G are positive. It follows that the equi­
librium ( 1 , 1 , 0.5) is globally stable. 
Theorem 5.4.1 can only be applied to a Lotka—Volterra model which 
satisfies the condition α π < 0 for ί = 1, 2, . . . , m. But Hsu ( 1 9 7 8 c) showed 
that it is possible to establish global stability in a Lotka—Volterra model 
which violates this condition by first subjecting the model to a Poincare 
transformation. We shall demonstrate this approach by applying it to the 
two soecies Lotka—Volterra model,

--- Page 193 ---

191 
Nx = Nx(bx 
+ axlNx 
+ a 1 2JV 2), 
N2 = N2(b2 
+ a2XNx 
+ a22N2). 
(5.4.14) 
Theorem 5.4.4. Model (5.4.1) 
is globally stable if (i) it has a positive equi­
librium and (ii) bx > 0, a 1 2 > a22 and b2aX2 
> 
bxa22. 
Proof. Under the Poincare transformation 
Nx 
= 1 / * ! , 
N2 = x2/xx 
(5.4.15) 
model (5.4.14) becomes 
xx =xx[-vxx 
—bxxx 
—aX2x2]/xx, 
x2 = x 2 [ ( a 2 i — a
n ) + (b2-bx)xx 
+ ( a 2 2 — a 1 2 ) Ä 2 ] / * i - 
(5.4.16) 
The equilibrium N* is mapped into the positive equilibrium x* = 
(l/Nf, 
NÎ/NÎ). 
For convenience, let 
(5.4.17) 
Using a Liapunov function of the form in (5.4.5), we deduce that x* is 
globally stable if there exists a positive diagonal matrix C such that 
V= 
(1/2)(JC --x*)
T(CH+ J ^ C ) ( * - * * ) / * , < 0 
(5.4.18) 
for all Λ: G R+ and Λ: ^ Λ:*. Using arguments similar to those in the proof of 
Theorem 5.4.2, we deduce that x* is globally stable if condition (ii) is satis­
fied. 
Corollary 5.4.1. Model (5.4.1) 
is globally stable if (i) it has a positive equi­
librium, and (ii) b2 > 0, a2X > axx and bxa2X 
> 
b2axx. 
This corollary can be proved by first subjecting (5.4.1) to the Poincare 
transformation 
Nx =yjy2, 
N2 = 
l/y2. 
The result can then be established by using arguments similar to those which 
are used to prove Theorem 5.4.4. 
Hsu (1978 c) showed that the Poincare transformation can also be used 
to establish that model (5.4.1) has an unbounded solution. We shall examine 
how this approach can be used by applying it to model (5.4.14). If axx > 0 
and axx > a2X, then there exists a solution of (5.4.16) with its initial state in 
the positive orthant which converges to χ = (0, 0 ) as t
 
0 0 . This implies 
that (5.4.14) has a solution such that Nx(t) ->
 0 0 as t
 
0 0 .

--- Page 194 ---

192 
5 . 5 . S T A B I L I T Y OF A C L A S S O F N O N L I N E A R M O D E L S 
If a model of an ecosystem is more nonlinear than a Lotka—Volterra 
model, it is very difficult to use Theorem 5.3.1 to establish the global or 
finite stability of its equilibrium. For m > 2, it is difficult to verify that a 
nonlinear function, like V(N), is negative semidefinite in a given region. The 
condition that V(N) is negative semidefinite.in a given region is equivalent tc 
the condition that the global maximum of V(N) is equal to zero. Unfor­
tunately the available techniques for global optimization (see Dixon and 
Szego, 1975) are limited to very special classes of functions. 
In this section we shall examine an algebraic criterion for a nonlinear eco­
system model to be globally stable. Unfortunately it is a very conservative 
condition. Its main value is that it provides a deep insight into conditions 
for a complex ecosystem to be globally stable. It also identifies a class of 
highly nonlinear ecosystem models which have qualitatively the same 
dynamical behavior as a subset of Lotka—Volterra models. 
A general model for m interacting species is 
for all N e R™ = {Ν \ Nt•> 
0, i = 1, 2, . . . , m } , the positive orthant. 
Theorem 5.5.1. The equilibrium N* of (5.5.1) 
is globally stable if there exists 
a constant matrix G which satisfies (5.5.3) 
and (5.5.4), 
and all the leading 
principal minors of —G are positive. 
Proof. If C i , c 2 , . . . , cm 
are positive constants, let 
Nl = NftiNu 
N2,...,Nm), 
i = 1, 2, . . . , m. 
Let N* denote a positive equilibrium which satisfies the equations 
F,(N) = 0, 
i = l , 2 , . . . , m . 
Let G be a constant matrix such that 
dF,W,<Gu, 
i = l , 2 , . . . , m , 
\bFi/dNj\ < Gij 
ΐοιίΦ) 
(5.5.3) 
(5.5.4) 
(5.5.1) 
(5.5.2) 
m 
V(N)= 
2 
cdNt-Nf-NflniNt/N?)]. 
(5.5.5) 
i = ι 
Along solutions of (5.5.1) we have 
m 
V(N)= 
2 
ct(Nt-N?)F,(N). 
(5.5.6) 
i = 1 
Applying Taylor's Theorem to V(N), we get

--- Page 195 ---

193 
m 
V(N)= 
2 
CiiNi-NfHbFt/ÜNjHNj-N;) 
(5.5.7) 
i,i = ι 
in which the partial derivatives are computed at a set of points between Ν 
and N*. 
Let C = diag(c l 5 c 2 ) . . . , cm ). Eq. (5.5.3), (5.5.4) and (5.5.7) give 
m 
m
m 
V < 2 
CtG„(N, - i v ? )
2 + Σ 
Σ 
-iv?lliVy 
- Λ Γ / Ι 
i = l 
i = 1 j Φ i 
= ( l / 2 ) y
T ( C G + G
TC)y, 
(5.5.8) 
where y = (\Ni —Nf\). 
Clearly V(JV) is negative definite if CG + G
T C is 
negative definite. 
The off-diagonal elements of G are nonnegative. If all the leading principal 
minors of —G are positive, the matrix G is an M-matrix. For such a matrix, 
there exists a positive diagonal matrix C such that CG + G
T C is negative 
definite (Araki and Kondo, 1972). Hence N* is globally stable. 
Theorem 5.5.1 implies that an ecosystem model is globally stable if it is 
a collection of interacting stable subsystems such that the interactions 
between subsystems, form the total system's point of view, are weaker than 
the self-interactions of the subsystems. If an ecosystem model satisfies eqs. 
(5.5.3) and (5.5.4), the condition that all the leading principal minors of 
—G are positive provides a criterion that the self-regulating intraspecific 
interactions are stronger than the interspecific interactions. The next example 
demonstrates that this is not a straightforward and intuitive concept. 
Example 5.5.1. Consider two matrices G1 and G 2 where 
1-1 
0.6 
0.3 \ 
1-1 
8 
0.1 \ 
Gj = 
0.5 
- 1 
0.7 
, 
G 2 = 
0.01 
- 1 
0.2 
. 
\ 0 . 7 
0.4 
-11 
\ 0 . 2 
2 
- 1 / 
Let the matrices be associated with two nonlinear ecosystem models via 
conditions (5.5.3) and (5.5.4). From (5.5.4) it is clear that the interspecific 
interactions can have positive or negative signs. Therefore the interspecific 
interactions could be any type of interactions. 
In Gi all the off-diagonal elements are numerically smaller than the 
diagonal elements. On the other hand, G 2 has some off-diagonal elements 
which are numerically larger than its diagonal ones. Thus, at first sight, the 
intraspecific interactions are stronger than the interspecific interactions 
for a multispecies system with matrix G χ, and vice-versa for a community 
with matrix G 2 . But det(—GJ < 0, and therefore Gx, does not satisfy the 
given criterion for a system to have intraspecific interactions, which, from 
the total system's point of view, are stronger than its interspecific interactions. 
On the other hand, all the leading principal minors of —G2 are positive; there-

--- Page 196 ---

194 
fore, a community with matrix G 2 satisfies the given criterion for its intra­
specific interactions to be stronger than its interspecific interactions. 
We shall demonstrate that constant energy inputs to each population in an 
ecosystem model which satisfies Theorem 5.5.1 in the absence of these energy 
inputs, are stabilizing influences, If a model does not satisfy Theorem 5.5.1 
this type of energy input may be destabilizing. It is known in system theory 
that a model with more than two components can be destabilized by making 
some of its diagonal elements more negative (Willems, 1971). 
Let Iu /2, ... , Im be nonnegative constants. Consider the model 
Ni = NtFt(N) 
+ J„ 
i = 1, 2, . . . , m. 
(5.5.9) 
Suppose this model has a positive equilibrium at N*. By assumption there 
exists a constant matrix G such that conditions (5.5.3) and (5.5.4) are 
satisfied, and all the leading principal minors of — G are positive. When 
Ii > 0 for i = 1, 2 , . . . , m, we have 
d[Ft + IilN^/dNi 
< Gii-Ii/N]< 
Gn. 
(5.5.10) 
It follows that if model (5.5.9) satisfies Theorem 5.5.1 when J, = 0 for i = 1, 
2, . . . , m, it will also do so when /, > 0 for ί = 1, 2, . . . , m, provided the 
latter has a positive equilibrium. Hence, constant energy inputs into an 
ecosystem model which satisfies Theorem 5.5.1 in the absence of the energy 
inputs, are stabilizing influences. 
A population model can be destabilized by a constant fraction harvesting, 
or by a constant quota harvesting, or by enrichment (Goh, 1969/1970; 
Rosenzweig, 1971). We shall now identify a class of multispecies models 
which remain stable under constant fraction harvestings of the component 
species, provided the harvested community has a positive equilibrium with 
all the species. 
Suppose the unexploited system is described by eq. (5.5.1). Let Et be 
the constant fraction harvesting which is applied to the ith species in the 
community. Thus Ex, 2? 2, . . . ,Em 
are nonnegative constants. A model of 
the exploited system is 
Ni-NilFdm-Ei], 
i = l , 2 , . . . , m . 
(5.5.11) 
We have 
b(Fi-Ei)/dNj 
= bFi/bNi 
(5.5.12) 
for ι, j = 1, 2 , . . . , m. Hence if model (5.5.1) satisfies Theorem 5.5.1 so does 
model (5.5.11), provided that the latter has a positive equilibrium. 
5.6. C O N N E C T I V E S T A B I L I T Y 
On an evolutionary time scale the character of the interactions between 
two species can change, e.g. from a competitive to a commensal interaction 
or vice-versa. On the other hand, during a change in seasons, a predator can

--- Page 197 ---

195 
switch from feeding on one species to another, Siliak (1978) has recently 
developed a new stability concept which may be useful for studying the 
consequences of such structural changes in a multispecies community. The 
new concept of stability is called connective stability. If a system remains 
stable in spite of certain structural changes in the interactions, then it is said 
to be connectively stable. 
However, it is necessary to modify Siljak's results on connective stability 
before they can be applied to ecological models. In an ecosystem model the 
state variables must be nonnegative. This restricts the set of admissible struc­
tural perturbations to those which do not cause the equilibrium of an eco­
system model to become nonpositive. Siljak (1978) studied the connective 
stability of the model 
m 
* /
= 
Σ 
Aij(t,x)xj9 
i = l,2, . . . , m, 
(5.6.1) 
; = l 
where (A l 7) is a matrix of nonlinear functions. This model tacitly assumes 
that structural perturbations which cause interactions between species to 
be connected or disconnected do not shift the equilibrium from the origin. 
This assumption is generally not satisfied in a nonlinear model of an ecosystem. 
Consider the prey—predator model, 
Nt = i \ M 1 . 8 - Nx - 0 . 8 i V 2 ] , 
N2 = N2[—0.1 
I- l.lc^iV! -N2]. 
(5.6.2) 
When c 2i = 1, the model has a positive equilibrium at ( 1 , 1 ) . It follows that 
the linearized dynamics in the neighbourhood of ( 1 , 1 ) is 
Χι 
= —Χχ — 0 . 8 J C 2 . 
x2 ~ 1.1.x j 
x2 . 
This linear system satisfies Siljak's conditions for connective stability. 
When c 2 1 = 1, eq. (5.6.2) reduces to 
Nt =Nl(1.8-Nl 
- 0 . 8 i V 2 ) , 
N2 =N2(-0.1-N2). 
(5.6.3) 
The model has a non trivial equilibrium at (1.88, —0.1); and three other 
equilibria at (0, 0), (0, —0.1) and (1.8, 0). It can be shown analytically that 
all the solutions which begin in the positive orthant tend to the equilibrium 
(1.8, 0) as t tends to infinity. This means that the perturbed model (5.6.3) 
does not represent a viable prey—predator system. 
Siljak's pioneering analysis of connective stability in nonlinear systems can 
be modified to apply to ecosystem models. For the sake of simplicity, we 
shall use Lotka-Volterra models in this discussion. This analysis can be 
easily extended to the class of nonlinear ecosystem models which are analyzed 
in Section 5.5.

--- Page 198 ---

196 
Consider the Lotka-Volterra model 
Nt = Nt 
&,(β) + Σ 
cu(8)GuNj 
i = 1, 2 , . . . , m, 
(5.6.4) 
j = ι 
where b f(s) and c l 7(s) are functions of s. Let cu = 1 for i = 1, 2, . . . , m and 
—1 < c l 7(s) < 1 for i Φ j . Let G = (G l 7) be a constant matrix such that Gu 
< 0 for i = 1, 2, . . . , m and G l 7 > 0 for i Φ j . The assumption that c l 7 can be 
positive or negative when i Φ j implies that eq. (5.6.4) is a model for a 
community with any type of interspecific interactions. 
The nontrivial equilibrium of eq. (5.6.4) is 
where b = (&,·) and Ε = (Ευ) = (c l 7G l 7). 
We shall consider two cases. In the first case, the parameters bt and c l 7 are 
permitted to change impulsively but infrequently relative to the time scale 
of model (5.6.4). In the second case, let δ be a small number and s = δ ί. 
This means that b t(s) and cu(s) are slowly varying functions of t. Therefore in 
both cases the question as to whether a new equilibrium AT*(s), which is 
created by structural perturbations and environmental changes, in positive 
or not, is separated from the question as to whether or not the newly 
created equilibrium is stable. 
Goh and Jennings (1977) showed that the subset of Lotka—Volterra 
models, where each model has a positive equilibrium, is a small fraction in a 
set of randomly assembled Lotka—Volterra models. Furthermore, this 
fraction decreases rapidly with the number of species in a community. These 
results imply that the requirement that the nontrivial equilibrium of a 
Lotka—Volterra model must be positive imposes a very severe constraint on 
the values of its parameters. This in turn limits the class of structural pertur­
bations which will not destroy the viability of a complex ecosystem. 
The next theorem describes conditions under which model (5.6.4) is 
connectively stable in a restricted sense. 
Theorem 5.6.1. If model (5.6.4) 
is subjected 
to the above restricted 
class of 
structural perturbations 
such that the equilibrium 
N*(s) remains positive, 
and if all the leading principal minors of—G are positive, then N*(s) 
remains 
globally stable. 
Proof. Eq. (5.6.4) and (5.6.5) give 
JV*(s) = - £ ; -
1 b 
(5.6.5) 
L ; = l 
J 
A Liapunov function for this system is 
m 
(5.6.6)

--- Page 199 ---

197 
m 
V(N)= 
2 
αι[Ν,-Ν?-φΙη(Ν,ΙΝ?)] 
(5.6.7) 
i = 1 
where dx, d2,... 
, dm 
are positive constants and N* is a function of s. 
By assumption, cH = 1 for / = 1, 2, . . . , m and | c l 7 | < 1 for i Φ j . 
It follows that along solutions of the model, 
m 
m 
V(N)= 
2 
Σ 
diCuGuW-NMNj-Nf) 
i = ι / = ι 
i = l 
i = 1 ; = i 
= ( l / 2 ) y
T ( D G + G
TD)y 
(5.6.8) 
where D = diag(d l 9 d 2 , . . . , dm ) and y = ( |iVJ — JVJ* I ). The diagonal elements 
of G are negative and its off-diagonal elements are nonnegative. If all the 
leading principal minors of —G are positive, then G is an M-matrix. Therefore 
there exists a positive diagonal matrix D such that DG + G
TD is negative 
definite (Araki and Kondo, 1972). Hence N* is globally stable in spite of 
certain changes in the parameters {&,·(«), c l 7 ( s ) } . 
Theorem 5.6.1 describes the conditions under which model (5.6.4) can 
track its equilibrium as its parameters vary because of certain environmental 
and structural perturbations. If model (5.6.4) satisfies the conditions of the 
theorem, then each of its submodels, when one or more species is absent, 
will also satisfy the theorem provided that it has a positive equilibrium. In 
other words, a perturbation which causes the extinction of one or more 
species in an ecosystem model which satisfies Theorem 5.6.1 will create a 
submodel which satisfies the same theorem, provided the reduced model 
has a positive equilibrium. 
5.7. N O N V U L N E R A B I L I T Y O F N O N L I N E A R M U L T I S P E C I E S M O D E L S 
In the real world ecosystems are continually disturbed by unpredictable 
forces due to changes in weather, migrating species and diseases. Global 
stability in a model does not mean that an ecosystem model can persist in 
the face of continual and unpredictable disturbances. A way to establish 
an ecosystem's ability to do so is to use the theory of stochastic differential 
equations (May, 1974; Ludwig, 1975). Unfortunately it is very difficult to 
solve the Fokker-Plank equation for the full nonlinear stochastic model 
except for models with one or two variables. An alternative approach is to 
use Liapunov functions and the concept of nonvulnerability (Goh, 1 9 7 6 a). 
We shall discuss how this approach can be applied to a class of nonlinear 
ecosystem models.

--- Page 200 ---

198 
Let Ui(t) be the magnitude of disturbance which acts on the growth rate of 
the ith species. Suppose a model of the ecosystem which is continually per­
turbed is 
Ni =NiHi(N, 
w), 
ι = 1 , 2 , . . . , m 
(5.7.1) 
where ///(AT, u) is a function of NUN2, 
... , Nm, 
w l 5 u 2 i . . . , um . If the distur­
bances act in a density-independent manner, then model (5.7.1) reduces the 
form 
Ni = NiFt(N) 
+ ut(t)Ni9 
i = 1, 2, . . . , m. 
(5.7.2) 
Suppose W! ( i ) , u2(t), ... , um{t) 
are piecewise continuous functions which 
satisfy the a priori constraints, 
a{ < κ,(0 < biy 
i = 1, 2, . . . , m 
(5.7.3) 
where { a f , &,·} is a set of constants. For convenience, we denote the set of 
admissible functions {w f(i)} by U. 
Let S(0) denote a set of desirable states of the ecosystem model in (5.7.1). 
Let Ζ denote a set of undesirable states. The system is said to be vulnerable 
relative to the sets [/, S(0) and Ζ during the time interval [0, Τ], if there 
exists an admissible vector function u(t) which drives the system from an 
initial state in S(0) to the undesirable set Ζ during the time interval [0, T ] . If 
there is no admissible disturbance u(t) which can drive the system from the 
set S(0) to Ζ during the time interval [0, Τ ] , than the system is said to be 
nonvulnerable relative to the sets U, S(0) and Ζ during the time interval [0, T ] . 
A way to test whether or not a system is vulnerable is to solve the following 
optimal control problem : 
System: 
Nt = Nfl^N, 
u), 
ι = 1, 2, . . . , m. 
(5.7.4) 
Initially: 
N(0)e 
3S(0). 
(5.7.5) 
Constraint: 
uG U. 
(5.7.6) 
Terminally: 
NtfJedZ. 
(5.7.7) 
Objective: 
Minimize (ij). 
(5.7.8) 
Here bS and bZ are the boundaries of the sets S(0) and Z. We assume that the 
set S(0) and the complement of the set Ζ are simply connected regions. If 
this optimal control problem has a solution where π ύ η ^ ) is less than T, then 
model (5.7.1) is vulnerable; where miniij) is greater than T, the system is 
non vulnerable. If m < 3 it is relatively easy to solve numerically this optimal 
control problem; as m increases, it rapidly becomes very difficult to do so. 
Another method of establishing that an ecosystem model is nonvulnerable 
is to carry out a conservative analysis using Liapunov-like function. Let V(N) 
denote a Liapunov function for (5.7.1) when u f ( 0 = 0, for i = 1, 2, . . . , m. 
In this analysis V(N) is called a Liapunov-like function because it is not used

--- Page 201 ---

199 
to establish asymptotic stability. It is convenient to define the sets S(0) and 
Ζ in terms of the level surfaces of V(N). Let s and ζ be positive constants and 
l e t S ( 0 ) = {N\ V(N)<s} 
a n d Z = {Ν | V(N)> 
z}. 
Along solutions of eq. (5.7.1), we have 
m 
V(N,u)= 
2 
(W/dNtWHAN, 
u). 
(5.7.9) 
ι = 1 
The next theorem describes some sufficient conditions for model (5.7.1) to 
be non vulnerable. 
Theorem 5.7.1. Model (5.7.1) 
is nonvulnerable 
relative to the set U9 S(0) and 
Ζ during the time interval [0, T ] , if there exists a positive number ρ such that 
s < ρ < ζ and the global maximum of V(N9 u) for all u G U and N G {Ν | V(N) 
= ρ] is negative. Here Τ could be any positive 
number. 
Proof. The conditions in the theorem imply that V(N9 u) is negative on the 
hypersurface {N | V(N) = p] for all admissible disturbances. It follows that 
all solutions of (5.7.1) which begin in the set {N | V(N) < p} remain in it 
indefinitely. Therefore the system cannot be driven from the set Ρ = {Ν | V(N) 
< p} to the set Ζ because ρ < z. But the set S(0) is a subset of the set P. 
Hence the system is non vulnerable relative to the sets U9 S(0) and Ζ during 
the time interval [0, T]. 
For model (5.7.2) we can establish more refined conditions for it to be 
non vulnerable. Let C = d i a g ^ , c 2 , . . . , cm ) be a positive diagonal matrix and 
m 
V(N)= 
2 ct[Nx 
-Nf-NflniNJN?)] 
(5.7.10) 
i = ι 
where N* > 0 for i = 1, 2, . . . , m. Here N* = (Nj) need not be an equilibrium 
of (5.7.2) when ut = 0 for i = 1, 2, . . . , m. Along solutions of (5.7.2) we have 
V(N9 u) = (N-N*)
TCF(N) 
+ (N-N*)
TCu. 
(5.7.11) 
Corollary 5.7.1. Model (5.7.2) 
is nonvulnerable 
relative to the sets [/, S(0) 
and Ζ during the time interval [0, Τ], where Τ is any positive number, if 
there exist positive constants cl9 c 2 , . . . , c m , ρ such that s< ρ < ζ and the 
global maximum of V(N9 u) of (5.7.11) 
for alluGU 
and N G {N | V(N) = ρ} 
is negative. 
In practice it is very difficult to use Theorem 5.7.1 because global optimi­
zation algorithms are unreliable (Dixon and Szego, 1975). For this reason 
we shall now discuss a more conservative but reliable method, This is an 
extension of the algebraic method which was developed for Lotka—Volterra 
models by Goh (1976 a).

--- Page 202 ---

200 
Suppose there exists a constant matrix G such that model (5.7.2) satisfies 
the inequalities 
dFiW/dNi 
< G f i, 
ι = 1, 2, . . . , m, 
(5.7.12) 
\dFi(N)ldNJ\<Gu, 
ιΦ] 
(5.7.13) 
for all N G R
m . The off-diagonal elements of G are nonnegative. Therefore, 
if all the leading principal minors of —G are positive, then G is an Af-matrix. 
In this case there exists a positive diagonal matrix C such that CG + G
TC is 
negative definite. We shall normalize the elements of C by setting cx = 1. Let 
c* be the largest element of c and X m i n be the smallest eigenvalues of the 
matrix —(CG + G
TC)/2. For the sake of simplicity, we shall consider the 
special case in which the disturbance functions satisfy the constraints, 
- 6 < ut(t) <b, 
i = 1, 2, . . . , m. 
(5.7.14) 
Let r* be the minimum distance from N* to any of the coordinate axis 
hyperplanes. Thus r* is the smallest number in the set {iV*, N*, ... , Nm 
} . 
Let r 0 be the smallest positive number which satisfies the inequality 
A m i n > [bc*m
l/2]/r 
(5.7.15) 
Consider the hypersphere 
(Ν-Ν*)
Ύ(Ν-Ν*) 
= r
2 
(5.7.16) 
where r satisfies the inequality r 0 < r < r*. Let ΛΓ* be a positive equilibrium 
of (5.7.2) when u = 0. Let ρ be the maximum value of V(N) for all Ν on the 
hypersphere in (5.7.16). Let s and ζ be positive constants such that s < ρ < ζ 
and let S(0) = {Ν | V(JV) < s} and Ζ = {JV| V(JV) > 
z}. 
Theorem 5.7.2. 77ie ecosystem 
model (5.7.2) 
is nonvulnerable 
relative to the 
sets E7, S(0) and Ζ during the time interval [0, Γ ] where Τ is any positive 
number if model (5.7.2) 
satisfies (5.7.12) 
and (5.7.13) 
and there exists a 
positive diagonal matrix C such that inequality (5.7.15) 
is satisfied. 
Proof. By assumption, model (5.7.2) satisfies (5.7.12) and (5.7.13). Hence, 
along solutions of the model, we have 
V(N9 u) = {N-N*j*CF(N) 
+ 
{N-N*)
TCu 
< ( l / 2 ) y
T ( C G + G
TC)y + (N-N*)
TCu 
(5.7.17) 
where y = (\Nt 
—N*\). 
The product (N — N*)
TCu 
is an inner product which is induced by the 
positive diagonal matrix C. Let Ν be a point on the hypersphere (5.7.16). By 
the Cauchy—Schwarz inequality, we get

--- Page 203 ---

201 
(Ν - Ν* )
τ Cu < [(ΛΓ - Ν*)
τ C(N -Ν*)]
1/2 
[u^Cu] 
<c*r(u
Tu)
1/2 
<c*rbm
i/2. 
Eqs. (5.7.17) and (5.7.18) imply 
1/2 
(5.7.18) 
V(N9 u)< 
X m i n r
2 + 
rbc*m
U2 
(5.7.19) 
Inequality (5.7.16) and r0 < r < r* imply that V(N, u) is negative on the 
hypersphere (5.7.16). Outside this hypersphere, the quadratic term involving 
(N — N*) in (5.7.17) dominates the linear term in (N—N*). 
Therefore, on 
and outside the hypersphere, V(N, u) is negative. Hence V(N, u) is negative 
on the level set {Ν \ V(N) = p]. This implies that a solution of model (5.7.2) 
which begins in the set S(0) cannot be driven by the set of admissible dis­
turbances to the set Z. Hence the ecosystem model (5.7.2) is non vulnerable 
relative to the sets [/, S(0) and Ζ during the time interval [0, T] where Τ is 
any positive number. 
The following example demonstrates how Theorems 5.7.1 and 5.7.2 may 
be used. 
Example 5.7.1. Let Ν χ be a prey population and N2 be the population of its 
predator. Suppose the prey—predator system which is continually perturbed 
can be described by the model 
where ux(t) and u2(t) are piecewise continuous disturbances. Suppose 
ux(t) 
and u2(t) satisfy the constraints 
In the absence of the disturbances, ux = 0, u2 = 0, the model has a positive 
equilibrium at N* = (10, 10). By trial and error, we choose cx = 1.0 and 
c2 = 2.94 for the V(N) function in (5.7.10). The level set of this V(N) function 
which passes through the point (8.37, 10) is V(N) = 0.1493. The global 
maximum of V(N, u) for all admissible functions ux(t) and u2(t) and for all 
Ν<Ξ {N\ V(N) > 0.1493, Nx >09N2> 
0 } is equal to - 0 . 0 0 3 5 when Nx 
= 9.511, N2 = 10.428, ux = - 0 . 1 1 and u2 = 0.11. 
Let ρ be any positive number larger than 0.1493, and s and ζ be positive 
numbers such that s < ρ < ζ. Let S(0) = {Ν \ V(N) < s} and Ζ = {Ν \ V(N) 
> z}. By Theorem 5.7.1 model (5.7.20) is nonvulnerable relative to S(0), Ζ 
and the admissible set of disturbances, during the time interval [0, T] where 
Τ is any positive number. 
We can use Theorem 5.7.2 to establish that (5.7.20) is non vulnerable relative 
Nx =Nl[22-0.1N1 
-2.1N2] 
+ 
ux(i)Nu 
N2 =N2[-5 
+ 0.1NX -0.2N2] 
+ 
u2(t)N2 
(5.7.20) 
- 0 . 1 K Ui(t)< 
0.11, 
i = l , 2 , 
(5.7.21)

--- Page 204 ---

202 
to different sets S(0) and Z. Allowing cx = 1 and c 2 = 3, we get X m i n = 0.1. In 
this case V(N) is slightly different from before. Let ρ > 5.79, and let s and ζ 
be positive numbers such that s < ρ < ζ. By Theorem 5.7.2 model (5.7.20) is 
nonvulnerable relative to the sets S(0) = {Ν \ V(N) < s} and Ζ = {Ν \ V(N) > 
> z) during the time interval [0, T] where Τ is any positive number. The set 
of admissible disturbances is the same as before. We conclude that Theorem 
5.7.1 is more effective than Theorem 5.7.2 provided we can compute the 
global maximum of V(N, u). Unfortunately, global optimization algorithms 
are at present unreliable. 
5.8. S E C T O R S T A B I L I T Y 
By definition, a nonnegative equilibrium of an ecosystem model is sector 
stable, if every solution of the system, which begins in a nonnegative 
neighbourhood, remains in the same or larger nonnegative neighbourhood for 
all finite values of t, and converges to the equilibrium as t tends to infinity. 
We shall demonstrate that the concept of sector stability is important in the 
analysis of a complex ecosystem model. A nontrivial mathematical criterion 
is given for the total system property which states that the self-regulating 
intraspecific interactions are stronger than the interspecific interactions. 
This total system property is sufficient for an ecosystem model to be globally 
sector stable. 
The question as to whether a nonnegative equilibrium of an ecosystem 
model is "stable" occurs in the study of some interesting processes in ecology, 
e.g., succession and extinction. The concept of asymptotic stability cannot 
be directly used to study the behavior of this type of equilibrium, because 
it is defined in terms of open neighbourhoods. But for a nonnegative equi­
librium to be "stable", we require only that every trajectory which begins in 
a nonnegative neighbourhood, remains in it or a larger nonnegative neighbour­
hood for all finite values of i, and converges to the equilibrium as t -»
 0 0 . If 
a nonnegative equilibrium has this property, it is said to be sector 
stable. 
In a well-known experiment, Paine (1966) found that the removal of a 
predator starfish from an area resulted in the reduction of a 15-species 
community to an 8-species community. This experiment gives rise to an 
interesting question as to whether the composition of the 8-species community 
is sensitive to the densities of the 15 species at the time when the starfish 
population was removed. The concept of sector stability can provide the 
answer to this question if an adequate model of the 15 species is available. 
Simberloff (1976) carried out a large number of censuses of arboreal 
arthropod populations on eight islands during a 3-year period. He found 
that members of a group of 22 species out of a total of 254 species were 
either present at all the censuses or were absent only once. This suggests 
that the presence of the other species on an island was maintained by 
continual migrations. If this is the case, the concept of sector stability may

--- Page 205 ---

203 
provide some useful insight into the composition of the species in the com­
munities on the islands if models of the communities are available. 
A way to model a spatially heterogenous community is to use a set of 
differential equations (Levin, 1974). One equation is used to describe the 
dynamics of a subpopulation in a patch. The interactions between the 
equations describe the migrations between different patches and the inter­
actions between different species in a patch. A species in this type of environ­
ment can persist even if it is extinct in some of the patches for most of the 
time. This calls for the analysis of a nonnegative equilibrium to determine 
whether or not it is sector stable. 
Roberts (1974), Gilpin ( 1 9 7 5 b) and Goh and Jennings (1977) have shown 
that only a small fraction of randomly assembled Lotka-Volterra models 
have a (feasible) positive equilibrium. Therefore the requirement that an 
ecosystem model should be positive imposes a very severe constraint on the 
parameters of a complex ecosystem model. On the other hand, a given non-
degenerate Lotka—Volterra model for m species has 2
m equilibria. Usually 
a significant fraction of these equilibria are nonnegative. The appropriate 
stability concept for studying the convergence properties of a nonnegative 
equilibrium is sector stability. 
The convergence of trajectories of a multispecies model, which begin in 
the positive orthant, to a nonnegative equilibrium has been studied by Leung 
(1976), Goh (1978 a), Hsu (1978 b) and Case and Casten (1979). 
Suppose a model of a multispecies system is 
Ni=NiFi(NuN2,...,Nm)9 
i = l, 2 , . . . , m 
(5.8.1) 
where Fi(N), 
F2(N), 
... , Fm (N) have continuous partial derivatives every­
where in the state space. This model has an equilibrium atiV* if Nt = 0 for 
ι = 1, 2, . .. , m at Ν*. An equilibrium of (5.8.1) is obtained by setting^ = 0 
or Ft(N) = 0 for ί = 1, 2, . . . , m and solving the resultant set of equations. In 
a nondegenerate Lotka—Volterra model, this procedure leads to 2
m equilibria. 
Let M = { 1 , 2, . . . , m } , Ρ be a proper subset of M, and Q = M — P. An 
equilibrium N* of (5.8.1) is nonnegative it Ν* > 0 for all i G Ρ, and AT* = 0 
for all i G Q. Let J be a subset of Λί, V(N) = \\N\\ be a norm of Ν and e and δ 
be positive numbers. Let 
R(e,I) 
= {AM V(N)< 
e9Nt> 
0 for i G / and Nt > O f o r i e M - / } , 
(5.8.2) 
S(e, / ) = {AM V(N) < e, Nt > 0 for / G / and Nt = 0 for i G M - / } . 
(5.8.3) 
Definition. The nonnegative equilibrium N* is sector stable, if, for each small 
positive number e, there exists a corresponding positive number δ (e), such 
that every solution of (5.8.1) which begins in the set JR(e,P), remains in 
R(8 (e), P) for all finite values of t and converges to N* as t -»
 0 0 . 
This definition is similar to that for asymptotic stability. The difference

--- Page 206 ---

204 
is that in the case of sector stability, the trajectories are restricted to a non-
negative part of an open neighbourhood of the equilibirum. 
We shall establish some sufficient conditions for a nonnegative equilibrium 
to be locally stable sector. Let the matrix 
where ij G Ρ and the partial derivative bFJdNj is computed at JV*. 
Theorem 5.8.1. The nonnegatiue equilibrium 
JV* of (5.8.1) 
is locally sector 
stable if all the eigenvalues of Κ have negative real parts, and 
Proof. Without loss of generality, we relable the index set so that Ρ = { 1 , 2, 
... , η} where π is a positive integer. Let xt = Nt — JV* for i = 1, 2, . . . , m. The 
linearized dynamics of (5.8.1) is 
where /, ; = 1, 2, . . . , n; ft, k = η + 1, η + 2, . . . , m; 3hk 
= 1 if ft = k and 
dhk 
= 0 if ft Φ k. 
The matrix in (5.8.6) is a block upper triangular matrix. All its eigenvalues 
have negative real parts because the submatrix Κ is stable and condition 
(5.8.5) is satisfied. Therefore the equilibrium of (5.8.6) is asymptotically 
stable. It follows that there exists a Liapunov function V(x) = x
TBx 
such 
that V(x) < 0 along all nontrivial solutions of (5.8.6). 
The proof is completed by showing that every solution of (5.8.1) which 
begins in the set R(e, P) remains in the set R(d(e), P) for all finite values of i, 
Consider the solutions of (5.8.1) which begin in the set S(e, M). By 
assumption, the functions FX{N), 
F2(N),... 
, Fm(N) 
have continuous partial 
derivatives everywhere in the state space. Therefore the standard local 
existence and uniqueness theorem for differential equations is applicable to 
(5.8.1). By inspection, any solution of (5.8.1) which begins on a coordinate 
axis hyperplane remains in it for all finite values of t. It follows that all the 
solutions of (5.8.1) which begin in S(e, M) do not intersect a coordinate 
axis hyperpjlane for all finite values of t. This invariance property and the 
condition V(x) < 0 imply that a solution of (5.8.1) which begins in the set 
S(e, M) will remain in the set S(5(e), M) for all finite values of t and converge 
to JV* as t
 
0 0 . 
Let / be equal to Ρ or let it be a superset of P. The above line of reasoning 
can be used to show that there exists 6(e), such that every solution of (5.8.1) 
which begins in the set S(e, / ) remains in S(ô(e), / ) for all finite values of t 
and tends to JV* as t
 
0 0 . The set R(ey P) is the union of the sets S(e, / ) where 
J is a superset of P. It follows that JV* is locally sector stable. 
The most powerful analytical method for establishing finite and global 
K = 
(N*dFi/dNj) 
(5.8.4) 
Fi(N*)< 
0 
forallie 
Q. 
(5.8.5) 
χ 
(5.8.6)

--- Page 207 ---

205 
stability is the direct method of Liapunov. We shall modify this method so 
that it can be used to establish finite and global sector stability of a non-
negative equilibrium. 
Let c
u c 2 , . . . , c m be positive constants. Consider the function 
V(N)=2 
cdNi-Nf-NMNt/N*)}* 
Σ
 
C* 
(
5·
8·
7) 
ί G Ρ 
/ G O 
The level sets of V(N) are closed hypersurfaces. For i G Ρ, the function 
V(N) -+ oo ^ ^ ~*
 0 0 or as Nf 
04-. For i G Q, the function V(N) ~*
 0 0 as 
\Nt\-+oom 
Let d be a finite positive number, aneklet V(N) in (5.8.2) and (5.8.3) be 
the function in (5.8.7). By definition, the nonnegative equilibrium N* is 
sector stable relative to the set R(d, P), if every solution of (5.8.1) which 
begins in the set R{d, P) remains in it for all finite values of t and converges 
to N* as t ->
 0 0 . 
Theorem 5.8.2. The nonnegative equilibrium N* of (5.8.1) 
is sector 
stable 
relative to the set R(d, P), if there exist positive constants c
u c 2» · · · >
 c m 
such that the 
function 
m 
W(N)= 
Σ 
Ci(Ni -N?)Fi(N) 
< 0 
(5.8.8) 
ι = 1 
at every point in R(d, P), and W(N) does not vanish identically along a 
solution of (5.8.1), 
except for Ν = N*. 
Proof. In the set S(d, Af), the total time derivative of V(N) along solutions of 
(5.8.1) is 
V(N)= 
Σ 
οΑΝι-ΝΐΜφ)* 
Σ 
CiWiW- 
(
5·
8·
9) 
i G P 
i G Q 
But N* = 0 for i G Q. Therefore Nt = Nt - 
for ail i G Q. Hence V(N) 
= W(N) for ail Ne 
S(d, M). 
The standard local existence and uniqueness theorem for differential 
equations implies that every solution of model (5.8.1), which begins in 
the set S(d, M), does not intersect any of the coordinate axis hyperplane 
{Ν I Nt = 0 } where ί = 1, 2, . . . , m. This behavior of the solutions of (5.8.1), 
and the conditions that (i) V(N) < 0 and (ii) V(N) does not vanish identically 
along a non trivial solution in the set S(d, Af), imply that every solution of 
(5.8.1) which begins in S(d, Af) remains in it for all finite values of t and 
converges to N* as t
 
0 0 . A similar argument applies to S(d, J) where I is any 
proper superset of P. In the reduced state space, where N{ = 0 for all ί G Q, 
the equilibrium Ν* is a positive equilibrium. The conditions of this theorem 
are sufficient for AT* to be stable relative to the set S(d, P ) .

--- Page 208 ---

206 
The set R(d, P) is the union of all the sets S(d, I) where / is any proper 
superset of Ρ and of the set S(d, P). We conclude that iV*is sector stable 
relative to the set R(d, P). 
Let the limit of R(d, P) as d -> «> be denoted by R(°°, P). Hence 
R(°°,P) 
= {N\ Nt> 
0 for ί GPandiV, > 0 for i G Q } . 
(5.8.10) 
By definition, the nonnegative equilibrium Ν* is globally sector stable if it 
is sector stable relative to the set R(°°, P). The next corollary follows 
immediately from the definition of global sector stability and Theorem 5.8.2. 
Corollary 5.8.1. The nonnegative equilibrium N* of (5.8.1) 
is globally 
sector 
stable if there exist positive constants cx, c2, . . . , c m , such that at every point 
in R(°°, P), the function W(N) of (5.8.8) 
is nonpositive 
and does not vanish 
identically along a solution of (5.8.1 ) , except for Ν = Ν*. 
We shall apply Corollary 5.8.1 to a nonnegative equilibrium of the general 
Lotka—Volterra model 
Ni=Ni 
\bi+ 
f 
aijNj], 
i = l , 2 , . . . , m . 
(5.8.11) 
Let Ρ be a subset of M = {1, 2, . . . , m} and Q = M—P, and let A = (αυ). 
Suppose Ν 
is an equilibrium of (5.8.11), such that N* > 0 for all i G Ρ, 
and Ν* = 0 for all Ï G Q. Corollary 5.8.1 implies that N* is globally sector 
stable if: (i) there exists a positive diagonal matrix C such that CA + 
A
TC 
is negative semidefinite; (ii) for all i G Q, 
m 
W
) 
= 6, + 2 
0; 
y = ι 
and (iii) the function 
V(N) = (1/2) (N-N*)
T(CA 
+ A
TC)(N-N*)+ 
Σ 
c^F^N*) 
i e Q 
does not vanish identically along a solution of (5.8.11), except for Ν - Ν*. 
In practice it is very difficult to verify condition (5.8.8) when m > 2 and 
when {Fi(N)} 
is a set of nonlinear functions. The next theorem provides a 
conservative method for using Corollary 5.8.1. 
Theorem 5.8.3. Suppose there exists α constant matrix G such that 
dFi(N)/3Ni 
< G», 
i = 1, 2, . . . , m, 
(5.8.12) 
\dFi(N)/bNj\< 
Gih 
i Φ j 
(5.8.13)

--- Page 209 ---

2 0 7 
for all Ν in an open set containing R(<*>,P). If all the leading principal 
minors 
of —G are positive, and 
Fi(N*) 
< 0 
for all i G Q, 
( 5 . 8 . 1 4 ) 
then the nonnegative 
equilibrium 
N* is globally sector 
stable. 
Proof. Applying the mean value theorem to each of the functions 
FX(N), 
F2(N), 
... , Fm (AT), eq. ( 5 . 8 . 9 ) gives 
m 
m 
v(jv)= Σ Σ ci(Ni-Nnmwj)(Nj-N*)+ 
Σ 
^ Ν ^ Ν * ) . 
i = ι j = ι 
ι e 
Q 
( 5 . 8 . 1 5 ) 
For each value of ι, the vector (dFj/dNj) is computed at a point between Ν 
and Ν*. 
Eq. ( 5 . 8 . 1 2 ) , ( 5 . 8 . 1 3 ) and ( 5 . 8 . 1 5 ) give 
V(N) < ( 1 / 2 ) 
(CG + G
TC)Y + 2 
c^F^N*) 
( 5 . 8 . 1 6 ) 
i e 
Q 
where Γ = (UVf —N*\) and C = diag(cx, c 2 , . . . , c m ) . 
The off-diagonal elements of G are nonnegative, and by assumption, all 
the leading principal minors of —G are positive. Hence G is an M-matrix. It 
follows that there exists a positive diagonal matrix C such that CG + G
T C is 
negative definite (see Araki and Kondo, 1 9 7 2 ) . This property of G and 
( 5 . 8 . 1 4 ) imply that V(N) is negative definite in Ä(°°, Ρ). Hence Ν* is globally 
sector stable. 
Example 5 . 8 . 1 . Consider the following model for three competing species, 
Νχ = # , ( 1 1 . 7 - 4 ^ 
-0.2N2-01N3), 
N2 
= N 2 ( 1 . 2 - 
0.8ΛΓ! - N
2 - 
0 . 2 i V 2 ) , 
N3 =N3(3-2Nl 
-N2-2N3). 
( 5 . 8 . 1 7 ) 
It has 2
3 equilibria at ( 3 , - 1 , - 1 ) , ( 0 , 1 , 1 ) , ( 0 , 6 / 5 , 0 ) , ( 0 , 0 , 3 / 2 ) , ( 0 , 0 , 0 ) , 
( 2 3 1 / 7 8 , 0 , - 1 1 4 / 7 8 ) , ( 1 1 7 / 4 0 , 0 , 0 ) and ( 5 7 3 / 1 9 2 , - 5 7 / 4 8 , 0 ) . Thus there 
are four nonnegative equilibria. 
Model ( 5 . 8 . 1 7 ) is a special case of ( 5 . 8 . 1 1 ) . Let Gu = au for i = 1 , 2 , 3 and 
Gij = |a l 7| for i Φ j . All the leading principal minors of the matrix 
/ 4 
- 0 . 2 
- 0 . 1 \ 
- G = 
- 0 . 8 
1 
- 0 . 2 
\ - 2 
-
1
2
/ 
are positive.

--- Page 210 ---

208 
At the e q Ä m u m , JV* = (117/40, 0, 0 ) , we have 
Fl(N*) 
= 0, 
F 2(JV*) = - 1 . 1 4 , 
F 3(JV*) = - 2 . 8 5 . 
Hence condition (5.8.14) is satisfied. By Theorem 5.8.3 the equilibrium 
(117/40, 0, 0) is globally sector stable. This means that every solution which 
begins in the set {JV | Nx > 0, N2 > 0, N3 > 0 } remains in it and converges to 
the equilibrium (117/40, 0, 0) as t 
°°. 
If JV! = 0 the reduced system has an equilibrium at ( 0 , 1 , 1 ) . This equilibrium 
is globally stable relative to the positive quadrant of the (JV 2, JV3)-space. This 
means that the JV2 and JV3 species can coexist in the absence of the Nx species. 
But if the Nx species invade the region occupied by the JV2 and JV3 species, it 
will drive the JV2 and JV3 species to extinction. This process may be used to 
model the replacement of some species during a succession. 
From studies of island communities, it is clear that the presence of many 
species on islands is maintained by continual immigrations. Let us suppose 
that the three species immigrate at constant rates Ii9I2 
and J 3 . In this case, 
model (5.8.17) is replaced by 
Ni=Ni 
[11.7 - 4 i V 1 - 0 . 2 A T 2 - 0 . 1 J V 3 ] + J , , 
JV2 =JV 2[1.2 - 0 . 8 J V ! - J V 2 - 0 . 2 J V 3 ] 4- / 2 , 
N3=N3[3-2Nl-N2-2N3] 
+ / 3 . 
(5.8.18) 
If JVi is small, and JV2 and JV3 are finite, then Nx > 0. On the other hand, if 
JVj > N2 and Nx > JV3, and Nx is large, then Nx < 0. Similar comments apply 
to JV2 and JV3. If (5.8.18) has a positive equilibrium at JV*, then by Theorem 
5.5.1 the equilibrium JV* is globally stable. Thus in this case, continuous 
immigrations at constant rates provide a stabilizing influence. 
Example 5.8.2. A model of a chemostat with η species utilizing one limiting 
substrate is 
S = S \(S°/S-1)D- 
2 
kiXi/(ai 
+S)]9 
(5.8.19) 
Xt = Admis/fa 
+ S) - Β,·], / = 1, 2, . . . , m, 
(5.8.20) 
where S° , JD, ku au m{ and D{ are positive constants. The limiting behavior of 
this model has been studied by Hsu (1978 b). 
For convenience, let hx = α,Ζ),·/^ — Dt) for i = 1, 2, . . . , m. If 0 < hx 
< h2 < · · · < hn and hx < S°, then the equilibrium (S*, X*) = (huX*, 
0, 0, 
. . . , 0) is globally sector stable. For i = 1, eq. (5.8.20) gives S* =hx and 
eq. (5.8.19) gives Xt = D(ax 4- hx){S° 
~hl)/h1 
ifX 2* =X 3* = · · · X * = 0 . 
By Theorem 5.8.2 (S*, X * ) is globally stable if there exist positive con­
stants c 0 , c l 5 c 2 , . . . , cn such that

--- Page 211 ---

209 
W(s, χ) = c0(S - h,) f(s°/s - I)D - 
j 
W ( a , + SI 
η 
+ 2 
ci(Xi-Xr)[miS/(ai 
+ 
S)-Di] 
i = 1 
is negative semidefinite in the set {(S,Z) | S > 0, Xx > 0, X, > 0, i = 2, 3, .. 
... , n} and it does not vanish identically along a nontrivial solution. Let 
c 0 = 1, ct = ki/irrii — D,) for i = 1, 2, . . . , m. After some manipulations, we 
get 
(S-h1)
2D(hlS+ 
axS°) 
" 
It follows that R^(S, X ) is negative semidefinite. Moreover it can be shown 
that W(S, X) does not vanish identically along a nontrivial solution. Hence 
(S*, X*) is globally sector stable. 
In a complex ecosystem model, the condition that an equilibrium should 
be positive imposes a very severe constraint on the set of parameters in the 
model. In a set of randomly assembled Lotka—Volterra models for m species, 
Goh and Jennings (1977) showed that the fraction of models with a positive 
equilibrium is approximately equal to 2~
m. 
On the other hand, a given non-
degenerate Lotka—Volterra model has 2
m equilibria; and Gilpin and Case 
(1976) showed that usually a significant fraction of these equilibria are non-
negative (partially feasible). This observation suggests that the sector stability 
of a nonnegative equilibrium is important in the analysis of a complex eco­
system model. 
In a complex ecosystem model, we can expect that there is a nonnegative 
equilibrium which is globally stable if the sum total of the self-regulating 
intraspecific interactions is stronger than the sum total of the interspecific 
interactions. The complex ecosystem model (5.8.1) has this type of total 
system property if there exists a constant matrix G such that conditions 
(5.8.12) and (5.8.13) are satisfied and all the leading principal minors of 
—G are positive. In such a model the species composition at steady state 
is independent of the initial densities of the species, provided that the initial 
set of species includes all the species at the steady state. Such an ecosystem 
model can withstand a wide range of large perturbations of the initial state. 
5.9. P O P U L A T I O N M O D E L S WITH TIME D E L A Y S 
In this section we shall first examine single-species models with time 
delays. We shall then make a general stability analysis of multi-species 
models with continuous time delays. 
The growth rate of a population in the real world does not respond

--- Page 212 ---

210 
instantaneously to changes in the population level. For example, the growth 
rate of a mammal population could have time delay because of a gestation 
period or because of the time it takes a female animal to mature. Population 
models with time delays have been studied by Volterra (1931), Wangersky 
and Cunningham (1957), May (1974), MacDonald (1976), Cushing (1977), 
Wörz-Busekros (1978), Brauer (1977) and others. 
A well-known population model with a time delay is 
N(t) = rN(t)[l-N(t 
- T)/K] 
(5.9.1) 
where r, Κ and Τ are positive constants. It has been suggested that this model 
describes a herbivore population grazing on vegetation which takes Τ units of 
time to recover. In this case the term 1 — N(t — T)/K is a measure of the 
abundance of the vegetation at time t. It is more plausible that the level of 
vegetation at time t depends on the total past history of the herbivore 
population. If so, model (5.9.1) can be replaced by either one of the following 
models, 
N(t) = N(t) [r - cN(t) -wf 
exp(-a(i - s))N(s)ds], 
(5.9.2) 
N(t) = N(t) [r - cN(t) -w 
f (t- 
8)exp(-a(t - s))N(s)ds], 
(5.9.3) 
where r, c, w and a are positive constants. 
Model (5.9.2) can be converted into a system of differential equations. 
Let 
t 
y(t) = / exp(-a(i -s))N(s) 
ds. 
(5.9.4) 
Using (5.9.2) and (5.9.4), we get 
Ν = N[r — cN — wy ], 
y=-xiy 
+ N. 
(5.9.5) 
The y variable has no direct biological meaning. But χ = r — wy is a measure 
of the abundance of the vegetation. In place of (5.9.5) we have 
N = N(x- 
cN), 
x = ar — ax — wN. 
(5.9.6) 
Thus the vegetation is replenished at a constant rate and it has a constant per 
capita natural death rate. This model is applicable to a vegetation whose growth 
rate is limited by available growing sites and which has a large seed bank in 
the ground. Furthermore, the vegetation is harvested by the herbivore at a 
rate which depends on the herbivore population but not on the vegetation 
level. 
Model (5.9.3) can also be converted into a system of differential equations.

--- Page 213 ---

211 
Let 
t 
yi(t)= 
/ (t-s)exp(-a(t-s))N(s)dsy 
(5.9.7) 
t 
y2(t) = / exp(-a{t 
- s))N(s) ds. 
(5.9.8) 
Using (5.9.3), (5.9.7) and (5.9.8), we get 
Ν = N(r — cN — wy j), 
yi =~ayi 
+ y 2, 
j
2 = -ay2 
+ N. 
(5.9.10) 
It is not clear how a biological explanation can be provided for the differential 
equations for yx and y2. 
From eqs. (5.9.4), (5.9.7) and (5.9.8), we deduce that the variables y(£), 
yi(t) and y2 (t) are positive for all values of t. This property of the y, yu 
y2 
variables plays a role in an analysis of the stability of models (5.9.5) and 
(5.9.10). 
Model (5.9.5) has a positive equilibrium at (AT*, y*) = (ar/(ac + w), r/(ac 
+ w)). We shall show that (N*9 y *) is globally stable. Model (5.9.5) may be 
rewritten in the form 
Ν = N[-c(N-N*)-w(y- 
y * ) ] , 
y = -a(y-y*)+ 
(N-N*). 
(5.9.11) 
Consider the function 
V(N, y)=N-N* 
—N*ln(N/N*) 
+ (w/2)(y 
- y * )
2 . 
(5.9.12) 
Along solutions of (5.9.11) we get 
V = -c(N 
- N*)
2 - aw(y - y * )
2 . 
(5.9.13) 
The function V(N9 y ) does not tend to infinity as y 
0 + . Thus it is necessary 
to check that every admissible solution y(t) of (5.9.11) is positive for all 
t > 0. From (5.9.4) we find that this is indeed the case. More precisely, we 
deduce from (5.9.5) that y(t) > 0 for all t > 0 if y(0) > 0 and N(t) > 0. From 
(5.9.4) we have y(0) > 0. Hence y(t) > 0 for allt > 0. Therefore we conclude 
that every solution of (5.9.11) which begins in the positive quadrant of the 
(N, y)-space remains in it for all positive values of t and converges to (N*9 y*) 
as t -+
 0 0 . 
There is another reason for time delay to occur in the growth rate of a 
single-species population. It takes time for an animal or plant to mature. 
Let N(t) denote the number of mature females in a population with a constant 
sex ratio. Suppose a female animal takes Τ units of time to mature. A model 
of this type of population is of the form

--- Page 214 ---

212 
N(t) = -dN(t) 
+ F[N(t - 
Τ)], 
(5.9.14) 
where d, a positive constant, is the per capita death rate of adult females and 
F[N(t — T)] is the rate at which maturing females are recruited into the 
mature group of females. 
Let us assume that model (5.9.14) has a positive equilibrium at N* which 
is a solution of the equation 
where ρ = F'(iV*), the derivative of F(N) at N*. 
Brauer (1978) has given necessary and sufficient conditions for (5.9.16) to 
be stable. He has also established some interesting results on the manner in 
which the characteristic return time of this equation depends on the 
parameters d, ρ and T. We shall apply Brauer's results to (5.9.14). 
The eigenvalue equation for (5.9.16) is 
[ p e x p ( - X T ) - X ] - d = 0. 
(5.9.17) 
Let X m be the largest real part of the solutions of (5.9.17). If X m is negative, 
then (5.9.16) is stable and the characteristic return time, or settling time, is 
(—1/X m ). For convenience, let u = —Xm. If ρ < 0, the equation which deter­
mines u depends on T* which is the solution of 
pT*exp(dT* + 1) + 1 = 0. 
(5.9.18) 
If ρ < 0 and 0 < T< T*9 the characteristic return time of (5.9.16) is a 
decreasing function of T, and u is the solution of the equation 
(—d + u)T exp - ( d + u)T + pT exp(dT) = 0. 
(5.9.19) 
If ρ < 0 and Τ > Γ*, then the characteristic return time is an increasing 
function of Γ , and u is a solution of 
[u/sin(w)] exp[—u/tan(u)] + pTexp(dT) = 0. 
(5.9.20) 
Example 5.9.1. Goh and Agnew (1979) fitted the model 
N(t + 1) = sN(t) + aN(t - 8) exp[-bN(t 
- 8)] 
(5.9.21) 
to the data for the southern hemisphere stock of the fin whale which has 
been given by Allen (1973). The parameter values obtained are s = 0.96, 
a = 0.12 and 1/b = 3 X 1 0
s . 
A differential equation which approximates this difference equation is 
This model has an equilibrium a t N * = (31n 3) X 1 0
s . The linearized equation 
dN* 
= F ( i V * ) . 
Let x(t) = N(t) — ΛΓ*. The linearized dynamics is 
x(t) = —dx(t) + px(t — T) 
(5.9.15) 
(5.9.16) 
N(t) = - ( 1 ~s)N(t) 
+ aN(t - 8)exp[-WV(f - 8 ) ] . 
(5.9.22)

--- Page 215 ---

213 
for (5.9.22) is (5.9.16) where d = 0.04, ρ = - 0 . 0 0 3 9 4 4 . For these parameter 
values, (5.9.18) has solution T* = 29.1. Since Τ = 8 < 29.1, u is the solution 
of (5.9.19). We get u = 0.625. Thus the characteristic return time is 1.6. In 
view of the time delay of 8 years, this value of the characteristic return time 
appears small. The reason for this is the stabilizing term —(1 —s)N(t) in 
(5.9.22). 
We shall now make a general analysis of a class of nonlinear integro-
differential equations. This discussion generalizes the results of Wörz-Busekros 
(1978) for Lotka—Volterra equations with continuous time delays. Consider 
equations of the form 
Ρ 
t 
Ni-NiFiiN)* 
2
 
Ni
Hi» 
ί Ehk(t,s)Gk(N(s))ds 
(5.9.23) 
h,k 
= 1 
where Ft(N), 
Gk(N) are nonlinear functions of N; (Hih) is a constant matrix; 
and (Ehk) 
is a matrix whose elements are some functions of t and s. 
Some equations of the form (5.9.23) can be reduced to a system of 
differential equations. This reduction can be usually carried out in different 
ways. In the transformation of (5.9.23) to a system of differential equations, 
it is useful to note the fact that a general solution of the autonomous vector 
equation, 
x(t) = Ax(t) + Bu(t)9 
(5.9.24) 
where A and Β are constant matrices, is of the form 
x(t) = M(t> to)x(to) + f M(U s)Bu(s) ds. 
(5.9.25) 
Here M(t, s) is the transition matrix which has many interesting properties 
(see Willems, 1970). 
Due to the fact that (5.9.23) can be reduced to a system of differential 
equations in a nonunique manner, it is convenient for us to examine the 
differential equation system of the form 
m 
N( = NiFj(N) + Nt 
2 
Q*^, 
i = 1, 2, . . . , m, 
8 = 1 
n 
m 
yr= 
2
 
A™y*
+ 
Σ
 
BnGi(N), 
r = l , 2 , . . . , n 
(5.9.26) 
s = 1 
i = 1 
instead of (5.9.23). In model (5.9.26), (Ars), 
(Bri) and (Qis) are constant 
matrices. In matrix notation, model (5.9.26) is 
ΛΓ = d i a g M ,N2,...,Nm 
)[F(N) 
+ 
Qy], 
y = Ay + BG(N). 
(5.9.27)

--- Page 216 ---

214 
Generally, the variables yl9 y 2, . . . , y„ can take positive and negative 
values. But in some cases (e.g. in (5.9.5) and (5.9.10)) these variables take 
only positive values. Let R
m X R
n denote the region in which the Nt variables 
are restricted to positive values and the ys variables are unrestricted in sign. 
Let (N*9 y*) denote an equilibrium of (5.9.27) which satisfies the equations 
F(iV*) + Qy* = 0 , 
Ay* + £G(JV*) = 0. 
(5.9.28) 
Suppose (N*, y*) is inside the region RJ" X R". Eqs. (5.9.27) and (5.9.28) 
give 
Ν = dmg(Nl9 N29 ... ,Nm)[F(N) 
-F(N*) 
+ Q(y 
-y*)], 
y=A(y-y*) 
+B[G(N)-G(N*)]. 
(5.9.29) 
By definition (N*9 y*) is globally asymptotically stable if every solution of 
(5.9.27) which begins in the region R + X R
n remains in it for all finite values 
of t and converges to (N*, y*) as t -+
 0 0 . 
Suppose the homogenous system 
η 
yr= 
J ArsyS9 
r = 1 , 2 , . . . , η 
(5.9.30) 
s = 1 
is stable. In this case there exists a positive definite symmetric matrix Ρ such 
that PA + A
TP is negative definite. 
Theorem 5.9.1. The equilibrium (N*9 y*) is globally asymptotically 
stable if 
there exists a positive diagonal matrix C and a positive definite matrix Ρ such 
that 
W(N9 y) = (N-N*)
TC[F(N)-F(N*) 
+ Q(y - y * ) ] 
+ ( y - y * )
T P U ( y -~y*) + BG(N) - BG(N*)] 
< 0 
(5.9.31) 
for all (N9 y) G R
m 
X R
n and W(N9 y) does not vanish identically along a 
solution of (5.9.27) 
in R
m 
X R", except for (N9 y) = (TV*, y*). 
Proof. We shall show that the function 
m 
V(N,y)= 
2 
c,lNi-N? 
-NfMNtlN*)} 
+ d / 2 ) ( y - y * )
T P ( y - y * ) 
'
=
1 
(5.9.32) 
where C = diag(c,, c 2 , . . . , c
m ), is a Liapunov function. 
Along solutions of (5.9.27) we have 
V(N,y) 
= 
W(N,y).

--- Page 217 ---

215 
Hence V(JV, y) is a Liapunov function. Using LaSalle's extension of the 
direct method of Liapunov (see LaSalle, 1 9 7 6 ) and the fact that (JV*, y*) is 
the only invariant point in R+ X R
n , we conclude that (JV*, y*) is globally 
asymptotically stable. 
Let L be an m X m constant matrix and b be a constant vector. Suppose 
F(N) = b + LN and G = JV. Eq (5.9.27) becomes 
JV = d i a g M , JV 2, . . . , JV m ) [L(N - JV*) + Q(y - 
y*)], 
y=A(y-y*) 
+ J5(JV —JV*). 
(5.9.33) 
From (5.9.31) and (5.9.33) we get 
W(JV, y) = (1/2)Z
TRZ 
(5.9.34) 
where 
/ J V - J V * \ 
(CL+^C 
CQ+B?P\ 
[y-y* 
) ' 
\Q
TC + PB 
PA + A
T P ) ' 
(5.9.d5) 
Therefore the equilibrium (JV*, y*) of (5.9.33) is globally asymptotically 
stable if: (i) JV* is a positive vector; (ii) there exists a positive diagonal matrix 
C and a positive definite symmetric matrix Ρ such that R is negative semi-
definite; and (iii) W(N, y) of (5.9.34) does not vanish identically along an 
admissible solution of (5.9.33), except for JV = JV*. 
We note that 
For convenience, let 
S
= ( B 
Α)-
 
(
5
9 ·
3
7
) 
A sufficient condition for R to be negative definite is that there exists a 
positive diagonal matrix D such that DS + S
TD is negative definite. Let 
GH = Su for i = 1, 2, . . . , m + η and G l 7 = |S l V| for ί Φ j. If all the leading 
principal minors of — G are positive, then G is an M-matrix. Then there exists 
a positive diagonal matrix D such that DG + G
TD is negative definite. For 
this matrix D, the matrix DS + S
TD is negative definite. 
Example 5.9.2. Model (5.9.10) has a positive equilibrium at (JV*, y*, y*) 
where y* = r/(u; + ca
2), y* = ay*, JV* = a
2y*. For this model, 
l-c 
-w 
0 \ 
S = 
0 
- a 
1 . 
(5.9.38) 
\ 
1 
0 
- a / 
The parameters c and w are positive. Consider the matrix

--- Page 218 ---

216 
/—c 
w 
0 \ 
G = 
0 
-a 
1 
. 
(5.9.39) 
\ 
1 
0 
-a) 
All the leading principal minors of—G are positive if a
2c > w. Hence if 
a
2c> 
w. the equilibrium (N\ y*, y*) is globally asymptotically stable. 
5 . 1 0 . SPATIAL HETEROGENEITY IN POPULATION DYNAMICS 
In the real world spatial heterogeneity plays a crucial role in the persis­
tence and stability of populations. A classic example which demonstrated 
the importance of spatial heterogeneity was carried out by Huf faker (1958) 
using mites. The role of spatial heterogeneity in the dynamics of interacting 
populations has been the subject of much recent theoretical and experimental 
research; this research has been reviewed by Levin (1976 a). 
We can distinguish three different mathematical approaches to studying 
the effects of spatial heterogeneity on population dynamics. In the first 
approach the changes in the number of patches occupied by different species 
are studied. This approach has been developed by Levins and Culver (1971), 
Horn and MacArthur (1972), Slatkin (1974), Hastings (1977), Caswell (1978) 
and others. In the second approach, m species which are distributed over an 
interconnected network of η patches are considered. The dynamics of a 
typical patch and the effects of migrations on a patch are studied. This 
approach has been developed by Othmer and Scriven (1971), Karlin and 
McGregor (1972), Levin (1974) Christiansen and Fenchel (1977) and others. 
In the third approach the role of space and dispersal in population dynamics 
is studied by using partial differential equations to model the population 
dynamics. This approach was pioneered by Skellam (1951) and developed 
by Comins and Blatt (1974), Hadeler et al. (1974), Steele (1974), Rosen 
(1975), Levin (1976 b), Gopalsamy (1977), Jörne and Carmi (1977), 
Hastings (1978) and others. 
We shall examine some aspects of these three approaches to understand 
the role of spatial heterogeneity in population dynamics. 
Suppose a prey and its predator are distributed over a large number of 
patches in a region. Let X denote the fraction of patches which contains 
preys only, and Y denote the fraction of patches which contains preys and 
predators. It follows that the number of empty patches is 1 — X — Y. Note 
that X and Y must satisfy the constraints 
1 > X > 0 , 
1-X>Y>0. 
(5.10.1) 
Under the assumption that the Y type of patches decay at a constant rate, 
Hasting (1977) proposed that a model of the dynamics of the patches is 
X = a(l-X-7)(X+ 
Y)-bXY, 
Y = bXY — Y. 
(5.10.2)

--- Page 219 ---

217 
In this model it is assumed that an empty patch can be invaded only by 
the prey to create an X type of patch. The invasion rate of the predator is 
proportional to the number of patches it currently occupies. Similarly the 
invasion rate of the prey is proportional to the number of patches it occupies. 
Hastings (1977) also studied a model which assumes that the predator elimi­
nates the prey in a Y type of patch in some set time. This leads to a delay 
differential equation with a more complex behavior. 
Using the Poincare—Bendixon Theorem, Hastings (1977) showed that 
(5.10.2) is globally stable if it has a positive and admissible equilibrium 
which, for convenience, is denoted by (X*, Y*). This means that every 
solution of (5.10.2) which begins in the region { ( X , 7 ) | 1 > X > 0, 1— X 
> Y > 0 } remains in it for all finite values of t and converges to (X*, Y*) 
as t -+
 0 0 . Model (5.10.2) has a positive and admissible equilibrium if b > 1. 
This brief discussion demonstrates the type of results which can be obtained 
in this approach. 
In the second approach a community of m species is assumed to be distri­
buted over an interconnected network of η patches. Let Nf be the population 
of the ith species in the sth patch and Mf be the net immigration rate of the 
ith species into the sth patch. A general model of this network of patches is 
Nf = NfF' 
(iVi,iV 2
s, . . . ,Nm) 
+ Mf(N},Nj9 
. . .9N?) 
(5.10.3) 
where i = 1, 2, . . . , m and s = 1, 2, . . . , rc. 
When η is large it is very difficult to analyse model (5.10.3). To get some 
insight into the behavior of the model, we first examine the case in which 
there is no migration between any patch, i.e. Mf = 0 for i = 1, 2, . . . , m and 
s = l , 2 , . . . , r c . I n this case it is likely that the model for each patch has one 
or more nonnegative equilibria which are locally sector stable. For global 
sector stability, the equations for each patch must satisfy Corollary 5.8.1. If 
the parameters or the dynamical equations are different in distinct patches, 
then different combinations of species will persist in different patches. 
Example 5.10.1. Let Nx and N2 be the populations of two competing species 
in a patch. Suppose a model of the competition is 
Nl =Nl[2-Nl 
-N2]9 
N2 =N2[b-Nl 
-2N2] 
(5.10.4) 
where & is a positive parameter. 
This model has an equilibrium at (4 — &, b — 2). It is positive if 4 > b > 2. 
If b > 4, the nonnegative equilibrium at (0, b/2) satisfies Theorem 5.8.3; 
therefore, it is globally sector stable. This means that every solution of 
(5.10.4) which begins in the set {Ν \ Ni > 0, N2 > 0 } remains in it and 
converges to (0, b/2). Similarly if b < 2, the equilibrium (2, 0) is globally 
sector stable. 
Thus if b varies from patch to patch in a region and there is no migration

--- Page 220 ---

218 
between the patches, then we can expect that there exist three types of 
patches in the region; some contain two coexisting species and others con­
tain Nx οτΝ2 
species. 
Christiansen and Fenchel (1977) showed that a competition between two 
species can be destabilized by one species immigrating at a constant rate. The 
immigration causes the system to lose its positive equilibrium. 
Example 5.10.2. For J = 0 the model 
Νχ =Νχ[2-Νχ 
—N2], 
N2 =Ν2[3-Νχ 
-2N2] 
+ / 
(5.10.5) 
has a globally stable equilibrium at (1, 1). 
If I> 0 it has an equilibrium at N* where Nf = 1.5 — (/ + 0 . 2 5 )
1 / 2 a n d 
iV 2* = 0.5 + (J + 0 . 2 5 )
1 / 2 . This equilibrium loses its positivity if I> 2. 
Immigration into a patch at constant rates is a stabilizing influence in a 
class of models if they generate a positive equilibrium. Model (5.8.18) illus­
trates this behavior. We shall establish this result in a general manner. Let a 
model of a typical patch be 
Ni = NiFi(Nx ,N2,...,Nm) 
+ Ii 
(5.10.6) 
where I{ is a nonnegative constant and i = 1, 2, . . . , m. If 7, > 0, then N( > 0 
when Nt = 0. Let (5.10.6) have a nonnegative equilibrium which satisfies 
Theorem 5.8.3 if It = 0 for i = 1, 2, . . . , m. Suppose, for 7f > 0 where i = 1, 2, 
. . . , m, model (5.10.6) has a positive equilibrium at N*. In this case the 
immigration at constant rates is a stabilizing influence. We have 
3(F, + Ii/NiVdNi = dFt/Wi - IJNJ < Gu, 
(5.10.7) 
b(Fi + IJN^/bNj 
= bFJbNj 
if i Φ j . 
(5.10.8) 
By Theorems 5.5.1 and 5.8.3 N* of (5.10.6) is globally stable. Therefore, in 
this case, immigration at constant rates is a stabilizing influence. 
We shall now examine the consequences of migration between patches. In 
the simplest case the net exchange from the sth patch to the rth patch for 
the zth species is proportional to N* — Nf. We have 
η 
Nf =NfFf(N
s)+ 
2
 
Di
r(Nf-N[)9 
ι = 1 , 2 , . . . , m 
(5.10.9) 
r = 1 
where Df is a nonegative diffusion coefficient. This class of models was studied 
by Levin (1974, 1976 b) and Hastings (1978). 
Suppose (5.10.9) has a nonnegative equilibrium. It may not be possible 
to rewrite it in the same form as model (5.8.1). Therefore it may not be 
possible to use Theorem 5.8.1 to establish that a nonnegative equilibrium of 
(5.10.9) is locally sector stable. We shall now consider Levin's (1976 b)

--- Page 221 ---

219 
Theorem for local stability which is more general than Theorem 5.8.1. 
Suppose the model 
Yi = Gi(Yu 
Y2, ... , Yp 
+ 
q ), 
ι = 1, 2, . . . , ρ 4- g 
(5.10.10) 
has a nonnegative equilibrium at 
= (Yf, Y2, . . . , Y*, 0, 0, . . . , 0) where 
Υ;.*>0 fori = 1 , 2 , . . . , p . 
Theorem 5.10.1. The nonnegative equilibrium 
Y* of (5.10.10) 
is locally 
sector stable if: (i) at Y* all the eigenvalues of the matrix 
(dGi(Y)/dYj), 
where i, j = 1, 2, . . . , ρ + q, have negative real parts; (ii) 9Gr( Y)/3Y) = 0 for 
i = 1, 2, . . . ,p, r = p + l , p + 2, . . . , p + g;<md (iii) 3 G r ( 7 ) / a y s > 0 /br 
r Φ s and r, s = ρ + 1, ρ + 2, . . . , ρ + 
ςτ. 
Proof. This proof is adapted from that given by Levin (1976 b). The linearized 
dynamics of (5.10.10) is 
p 
+ 
Q dG-
y i = l 
i = l , 2 , . . . , p +
9 . 
(5.10.11) 
Condition (i) implies that Y* is asymptotically stable. Hence solutions of 
(5.10.10) which begin in an open neighbourhood of Y* will remain close 
to 
Y\ 
The variables y χ, y2, ... , yp can be positive or negative because Y'* > 0 
for ï = 1, 2, . . . , p. But the variables ys> 
0 for s = ρ + l , p + 2, . . . , p + q 
because Y* = 0. If conditions (i) to (iii) are satisfied, then solutions of 
(5.10.10) which begin in an admissible nonnegative neighbourhood of Y* 
will remain in the same or larger admissible nonnegative neighbourhood. Hence 
Y* is locally sector stable. 
Before we consider some examples we shall make some general obser­
vations on competition. It is worthwhile to distinguish between two types 
of Lotka—Volterra models of competition. Consider the Lotka—Volterra 
model 
Ni =Nl[b1 
- C n i V , - c 1 2 i V 2 ] , 
N2 =N2[b2 
-c2lNx 
-c22N2] 
(5.10.12) 
where bl7 b2, c
n , c 2 2 , c 1 2 , c 2 1 are positive constants. If cxxc22 
—cl2c21 
> 0 
model (5.10.12) is said to describe a tolerant competition. If c
n c
2
2 — c 1 2 c 2 1 
< 0, then (5.10.12) is said to describe a severe competition. A L o t k a -
Volterra model for a tolerant competition is globally stable if it has a positive 
equilibrium. Similarly, the general Lotka—Volterra model 
Nt = Nt \bi - 
f 
cisNs] 
, 
i = 1, 2, . . . , m 
(5.10.13) 
L 
s = 1 
J

--- Page 222 ---

220 
where C = (C^) is a nonnegative matrix, is said to describe a tolerant com­
petition if there exists a positive diagonal matrix D such that DC + C
TD is 
positive definite. Otherwise, model (5.10.13) is said to describe a severe com­
petition. 
Levin ( 1 9 7 4 , 1 9 7 6 b) studied a network of identical patches which contain 
severe competition between two species. In this case the Lotka—Volterra 
equations for a patch in the absence of migration may have two locally 
sector stable nonnegative equilibria. Thus the outcome of the competition in 
an isolated patch depends on the initial densities of the species. If the dif­
fusion coefficients between patches are small, an equilibrium of a typical 
patch will have the same stability behavior as that of a nearby nonnegative 
equilibrium which exists if there is no migration between patches; this is 
shown by Levin (1976 b). From this result and computer simulations, we 
make the conjecture that a positive equilibrium of an interconnected net­
work of identical patches which contain species in severe competition could 
only be locally stable. 
Example 5.10.3. Let Xt and Yt be the populations of two competing species 
in the ith patch. Suppose we have two identical patches and a model of the 
patches is 
Xx =X1(3-X1 
-2YX) 
+ 
D{X2-Xx), 
Yx = Yx(3 - 2XX - Yx) + D(Y2 
- 
Yx), 
X2 =X2(3-X2 
-2Y2) 
+ D{XX - X
2 ) , 
Y2 = Y2(3 - 2X2 - Y2) + D(YX 
- 
Y2). 
(5.10.14) 
For D = 0 each patch has locally sector-stable equilibria at (3, 0) and (0, 3) 
and two unstable equilibria at (0, 0) and ( 1 , 1 ) . The species are in severe 
competition. 
Using the results in Levin's (1974) paper, we deduce that (5.10.14) has 
two locally stable positive equilibria if 0 < D < 0.3. If D = 0.1 these locally 
stable equilibria are A = (2.696, 0.104, 0.104, 2.696) and Β = (0.104, 2.696, 
2.696, 0.104). The equilibrium at A corresponds to the case in which species 
X is established in the first patch and species Y is established in the second 
patch and immigration maintains the presence of the other species in each 
patch. Similar comments apply to the equilibrium at B. For D = 0.1, model 
(5.10.14) has an unstable equilibrium at ( 1 , 1 , 1 , 1 ) . Using Theorem 5.10.1 
we can show that there are two locally sector-stable equilibria at (0, 3, 0, 3) 
and (3, 0, 3, 0). For D > 0.3 there is no stable positive equilibrium. 
We conclude that (5.10.14) describes a relatively fragile system. The 
reasons for this fragility are: (i) the patches are identical; and (ii) the two 
species are in severe competition with each other. 
In the next example we shall demonstrate that spatial variations in the 
carrying capacity for a species can allow two species in severe competition 
with each other to coexist in a robust manner.

--- Page 223 ---

221 
Example 5.10.4. Let X and Y be the populations of two competing species in 
an isolated patch. Suppose a model of the competition is 
X = X ( b - X - F ) , 
Y=Y(3-2X-Y) 
(5.10.15) 
where 6 is a positive constant. Suppose the X species is sensitive to an environ­
mental factor which varies spatially; and as a result of this the parameter b 
varies from patch to patch. Comparing (5.10.12) and (5.10.15), we note that 
the latter describes a severe competition because c n c 2 2 ~ ~ C i 2 C 2 i = —1. Thus the 
species cannot coexist in an isolated patch. 
If 1.5 < b < 3, model (5.10.15) has an unstable positive equilibrium at 
(3 — b, 2b — 3). In this case the dynamical behavior of (5.10.15) is similar to 
that of an isolated patch of (5.10.14). The most interesting case is when b > 3 
in one patch and b < 1.5 in the other patch. If b > 3 it can be shown graphically 
or by computer simulations that (b, 0) is globally sector-stable. This means that 
every solution of (5.10.15) which begins in the region { ( Χ , Y) \ X > 0, Y> 0} 
remains in it and converges to (b, 0). In this case the X species wins in the 
competition for all admissible initial densities. Similarly for b < 1.5, the Y 
species wins in the competition for all initial densities; (0, 3) is globally sector-
stable. 
It follows that if there are two isolated patches in a region, the two species 
in severe competition with each other could persist in the region for a wide 
range of initial conditions. As expected, the two species could also persist in 
the region if there is a small diffusion between the patches. 
Let X., Y. be the populations of the two competing species in the ith patch 
where / = 1, 2. Consider the model 
Xx 
= X
1 ( 4 - X
1 
-YX)+D(X2-XX)9 
Yx = YX(3-2XX-YX) 
+ 
D(Y2-YX), 
X 2 = X
2 ( 1 - X
2 -Y2)+D{XX 
- X
2 ) , 
^ι = y
2 ( 3 - 2 X
2 - Y2) + D(YX 
- Y2). 
(5.10.16) 
If D = 0 the Y species is excluded in the first patch and the X species is excluded 
in the second patch. If D = 0.1 model (5.10.16) has a positive equilibrium at 
(3.855, 0.051, 0.226, 2.471). Computer simulations suggest that this equili­
brium is globally stable. We conclude that environmental variations and spatial 
heterogeneity can allow two species in severe competition with each other to 
coexist for a wide range of initial conditions. 
If D is relatively large the two patches behave like one, and one species is 
excluded. For example, forD = 0.5, computer simulations suggest that the 
equilibrium (3.72, 0 , 1 . 6 4 , 0) is globally sector-stable. Thus species X wins the 
competition in the two interconnected patches. 
In the next example, we demonstrate that spatial variations in the carrying 
capacity of a species can allow two species in tolerant competition with each 
other to coexist in a robust manner even if the diffusion coefficients are rel­
atively high. We shall consider the nontrivial case in which the two species 
cannot coexist in an isolated and homogenous patch.

--- Page 224 ---

222 
Example 5.10.5. Let X and F be the populations of two competing species in 
an isolated patch. Suppose a model of the competition is 
X = 
X(2-X-Y), 
7 = Y(b-X-2Y) 
(5.10.17) 
where & is a positive constant. We shall assume that b varies from patch to 
patch because the Y species is sensitive to an environmental factor (e.g. 
limiting nutrient in the soil for a plant species) which varies spatially. Com­
paring (5.10.12) with (5.10.17), we deduce that the latter models a tolerant 
competition because c
n c
2
2 ~cX2c2X 
= 1 > 0. This does not immediately 
imply that both species can coexist in an isolated patch because the inter­
action may not have a positive equilibrium. 
If 2 < b < 4, model (5.10.17) has a globally stable equilibrium at (4 — & , 
b — 2). In this case both species can coexist in an isolated patch. 
Using Theorem 5.8.3 we can show that the equilibrium (2, 0) is globally 
sector-stable if b < 2. Here, the X species wins the competition in an isolated 
patch. Similarly, it can be shown that the Y species wins the competition in 
an isolated patch if b > 4. In this case (0, b/2) is globally sector-stable. 
Let Xh Yi be the populations of the two species in the ith patch where 
i = l , 2 . Suppose a model of the coupled patches is 
Xx = X1(2 -Xx 
- Yx) + D(X2 -Xx 
) , 
Yx = Yx(5-Xx 
- 2YX) + D(Y2 
- F t ) , 
X2 =X2(2-X2-Y2) 
+ D(XX - X
2 ) , 
Y2 = Y2(1.5-X2 
-2Y2) 
+ D(YX - 7
2 ) . 
(5.10.18) 
If D = 0, the Y species wins in the first patch and the X species wins in the 
second patch. 
For the relatively large value of D = 0.5, model (5.10.18) has a positive 
equilibrium at (0.471, 2 . 1 0 , 1 . 0 1 , 1 . 7 2 ) . Computer simulations suggest that 
this equilibrium is globally stable. 
This example suggests that an interconnected network of patches, each of 
which contains a set of tolerant competing species which cannot coexist 
together in an isolated patch, could allow all the species to coexist in a robust 
manner even if the diffusion coefficients are relatively high. 
From these simple examples, it is clear that the qualitative behavior of the 
dynamics of a community in a spatially heterogenous environment could be 
very different from that of the same community in a homogenous environ­
ment. 
We note that in the study of a community in a heterogenous environment 
the concept of global sector stability is useful. We expect that an intercon­
nected network of patches, each of which in isolation has a globally sector 
stable nonnegative equilibrium, would be a globally stable system if the 
diffusion coefficients between the patches are small. 
In the third approach to the study of the role of spatial heterogeneity in 
population dynamics, it is assumed that the populations are continuously

--- Page 225 ---

223 
spread out in space. Thus, partial differential equations are used to model 
the dynamics. 
Let R be a simply connected region inside an ocean. Suppose a community 
in R can be described by the equations 
—>=NiFi(N) 
+ 2 
Γ - Ρ / Τ - Ί . 
* = l , 2 , . . . , m 
(5.10.19) 
dt 
dxs \ 
dxs J 
where -Df(i, χ, N) are the diffusion coefficients which are nonnegative functions 
of f, χ, N. Let η denote a unit vector which is normal to dR, the boundary 
of R. Let V = (3/3xi, d/dx2, 3/3x 3) be the gradient operator. We shall assume 
that there is no net migration across every point of dR. Hence, at every point 
on dR we have 
η-VNi 
= 0 
for all i = 1, 2, . . . , m. 
(5.10.20) 
Here η · ViV,- is the projection of V Nt on n. 
We shall establish that (5.10.19) has a spatially independent solution which 
is globally stable relative to all positive solutions of (5.10.19) if: (i) it has a 
globally stable solution when D. = 0 for i = 1, 2, . . . , m; and (ii) for the 
reduced model there exists a Liapunov function 
m 
V(N) = 2 
ct ViM), 
i = 1, 2, . . . , m 
(5.10.21) 
i = 1 
where c 1 ? c 2 , . . . , c
m are positive constants such that d
2V/dN
2 > 0 for 
/ = 1, 2, . . . , m. It follows that 
m 
V(N)= 
2 
(dV/bN^iFiiN) 
(5.10.22) 
/ = ι 
is negative semidefinite and V(N) does not vanish identically along a non-
trivial solution of the reduced model (i.e. Dt = 0, i = 1, 2, . . . , m) 
Let dv = da^da^d:*^ and ds be an element of the surface dR. We shall show 
that 
E= 
f V(N)dv 
(5.10.23) 
R 
is a Liapunov functional of (5.10.19). Along a positive solution of (5.10.19), 
we have 
Λ 
ι - 1 
ι 
-/2 iK
A , , f , < N ) + .?1^
v'
<D'
VN'
,l
d" 
j2 ι — 1 
* 
s - 
1 
*

--- Page 226 ---

224 
R 
ι = 1 
ι 
ι 
' 
Using the divergence theorem and condition (5.10.20), we get 
E 
= 
Σ 
f (n-VN.) 
— D.ds + / — N.F, - — 
DtVN, - VAT, di; 
ι 
1 L
3
K 
I 
ρ 
I 
I 
J 
where ||α||
2 = α? + α\ -f a i AsD, > 0 and a
2V/3A^> 0 fori = 1, 2 , . . . , m, it 
follows that Ê is negative semidefinite and does not vanish identically along 
a nontrivial solution. We conclude that the spatially uniform solution N* is 
globally stable relative to all positive solutions of (5.10.19). This result was 
first established by Hastings (1978). Special cases of this result were established 
by Rosen (1975) and Jörne and Carmi (1977). Similar results can also be 
established in the case where R is a simply connected region of a two-
dimensional space. 
Hastings (1978) also showed that the spatially homogenous solution of 
an interconnected network of η identical patches, which is described by 
(5.10.9) and in which Df = D™ > 0, is globally stable for all initial conditions 
N
si (0) > 0 for all /, s. This result implies that a system of equations which 
models a spatially homogenous and well mixed community can also be used 
to model a collection of identical patches of the same community. 
C H A P T E R 5: S E L E C T E D 
R E F E R E N C E S 
Complexity 
versus stability 
MacArthur ( 1 9 5 5 ) ; Elton ( 1 9 5 8 ) ; Gardner and Ashby ( 1 9 7 0 ) ; May ( 1 9 7 4 ) ; Roberts 
( 1 9 7 4 ) ; DeAngelis ( 1 9 7 5 ) ; Gilpin ( 1 9 7 5 b ) ; Goh ( 1 9 7 5 , 1 9 7 8 d); Goodman ( 1 9 7 5 ) ; 
Gilpin ( 1 9 7 5 ) ; Gilpin and Case ( 1 9 7 6 ) ; Goh and Jennings ( 1 9 7 7 ) ; Pimm and Lawton ( 1 9 7 7 ) ; 
Mazanov ( 1 9 7 8 ) ; McNaughton ( 1 9 7 8 ) ; Siljak ( 1 9 7 8 ) ; Vincent and Anderson ( 1 9 7 9 ) . 
Stability of nonlinear multispecies 
models 
Strobeck ( 1 9 7 3 ) ; May ( 1 9 7 4 ) ; Freedman and Waltman ( 1 9 7 7 ) ; Goh ( 1 9 7 7 a, 1 9 7 8 d ) ; 
May ( 1 9 7 7 ) ; Hsu ( 1 9 7 8 a, c ) ; Siljak ( 1 9 7 8 ) ; Gard and Hallam ( 1 9 7 9 ) . 
Sector stability 
Gilpin and Case ( 1 9 7 6 ) ; Leung ( 1 9 7 6 ) ; Levin ( 1 9 7 6 b ) ; Goh ( 1 9 7 8 a ) ; Takeuchi et al. 
( 1 9 7 8 ) ; Hsu ( 1 9 7 8 b ) ; Case and Casten ( 1 9 7 9 ) .

--- Page 227 ---

225 
Population models with time delays 
Volterra ( 1 9 3 1 ) ; Wangersky and Cunningham ( 1 9 5 7 ) ; Scudo ( 1 9 7 1 ) ; May ( 1 9 7 4 ) ; 
MacDonald ( 1 9 7 6 ) ; Brauer ( 1 9 7 7 , 1 9 7 8 ) ; Cushing ( 1 9 7 7 ) ; Wörz-Busekros ( 1 9 7 8 ) . 
Spatially heterogenous 
populations 
Skellam ( 1 9 5 1 ) ; Huffaker ( 1 9 5 8 ) ; Reddingius and Den Boer ( 1 9 7 0 ) ; Levins and Culver 
( 1 9 7 1 ) ; Othmer and Scriven ( 1 9 7 1 ) ; Horn and MacArthur ( 1 9 7 2 ) ; Karlin and McGregor 
( 1 9 7 2 ) ; Comins and Blatt ( 1 9 7 4 ) ; Hadeler et al. ( 1 9 7 4 ) ; Levin ( 1 9 7 4 , 1 9 7 6 a, b ) ; Slatkin 
( 1 9 7 4 ) ; Steele ( 1 9 7 4 ) ; Rosen ( 1 9 7 5 ) ; Christiansen and Fenchel ( 1 9 7 7 ) ; Gopalsamy 
( 1 9 7 7 ) ; Hastings ( 1 9 7 7 , 1 9 7 8 ) ; Jörne and Carmi ( 1 9 7 7 ) ; Leung ( 1 9 7 8 ) ; Ashkenazi and 
Othmer ( 1 9 7 8 ) .

--- Page 228 ---

227 
Chapter 6 
MANAGEMENT OF PESTS AND GREENHOUSE CROPS 
6.1. INTRODUCTION 
Insecticide pollution is recognized as a major health hazard to human 
beings. This has led to an increased interest in biological control methods for 
insect and plant pests (DeBach, 1964; Huffaker and Messenger, 1976). An­
other important reason for the intense interest in biological control is the 
decreasing effectiveness of chemical pesticides due to the adaptation of the 
pests to such pesticides. This leads to exponential increases in the cost of 
spraying chemicals on a pest. For instance, in the Ord River region of the 
northwestern part of Australia, the spraying of insecticides to suppress cotton 
pests increased steadily until it had to be applied every other day on the same 
crop. By that time, it had become too costly to continue spraying chemicals 
which has become decreasingly effective; consequently, the growing of 
cotton in the region was abandoned in 1976. 
Biological control was practised by Chinese citrus growers since ancient 
times (Debach, 1964, p.22). They placed nests of predaceous ants, Oeco-
phylla smaragdina F., in mandarin orange trees to reduce the numbers of 
foliage-feeding insects. But the scientific approach to biological control 
began with the dramatic and successful control of the cottony-cushion scale, 
leery a purchasi Mask., by the introduction of the vedalis beetle (lady bird), 
Rodolia cardinalis (Muls.), into California in 1888 (DeBach, 1964, Chapter 2). 
In 1976, Laing and Junji Hamai reported that 157 species of insect pests have 
been successfully suppressed by means of biological control. However, one 
third of these successes are only partial. 
Usually in the biological control of a pest, a parasite or a predator of the 
pest is imported and bred in laboratories. When there is an adequate number 
of the imported natural enemy, they are released with the expectation that a 
stable prey—predator or host—parasite system will be created. There are a 
few cases in which additional releases of the natural enemy are made now 
and then (Hussey and Bravenboer, 1971; Parker, 1971). It is plausible that 
the manipulation of the rate of release of the natural enemy and the rate of 
release of the pest itself will increase the number of successes in the bio­
logical control of pests.

--- Page 229 ---

228 
We can distinguish two uses of mathematical analysis in pest control. 
Firstly, mathematics is used for designing robust and stable prey—predator or 
host—parasite systems. This is achieved by finding out the characteristics of a 
natural enemy which will enhance stability in the system consisting of the 
pest and its natural enemy. It is useful in this type of study to compute the 
range of parameter values for which the system is stable. Having discovered 
the best characteristics of a natural enemy, it is then possible to choose the 
most appropriate natural enemy to control a pest. 
The second way in which mathematics is used in pest control is to formu­
late good feedback control policies in the dynamic manipulation of the con­
trol variables acting on a system consisting of the pest and its natural enemy. 
Due to difficulties in applying optimal control theory, this application of 
mathematics in pest control is limited to a few studies (Goh et al., 1974 a; 
Conway, 1977; Shoemaker, 1977). 
In a design problem in pest control, a good model of the dynamics of the 
system consisting of the pest and its natural enemy is essential. Otherwise, we 
will not be justified in making any conclusions on the characteristics of a 
natural enemy which enhance stability in the system in the real world. 
On the other hand, it is not necessary to have a good model of the natural 
dynamics of a pest—predator or pest—parasite system before we can formu­
late good feedback control policies. In Section 6.3 we shall reaffirm this 
assertion by considering a poorly defined prey—predator system which is 
subjected to a few control variables which could enhance the desirable trends 
in the natural dynamics so as to drive the state of the system to a desirable 
target and maintain the state inside the target. 
Biological control is not the panacea to all pest problems. In the forseeable 
future it will be necessary to continue the use of chemical pesticides. A uni­
fied approach which uses both biological and chemical methods in a harmon­
ious way to suppress a pest is called integrated control (Geier, 1970; Corbet 
and Smith, 1976). 
In Section 6.4 we shall use optimal control theory to formulate optimal 
feedback policies in the integrated control of a pest—predator system. The 
control variables are rates of releases of the pests and the predators, and rates 
of application of chemical agents. We shall use a Lotka—Volterra model to 
describe the natural dynamics. As previously noted, the qualitative features 
of an efficient feedback control policy in this type of situation is not 
critically dependent on the precise details of a model of the natural dynamics. 
Potentially, the use of viruses, fungi and bacteria is one of the most effec­
tive methods for controlling pests. One reason for this optimism is that the 
generation time lapse of microbes is much shorter than that of an insect 
pest. This advantage is subdued in the case where the transmission is carried 
out by an insect vector. The control of rabbit pests in Australia (Fenner and 
Ratcliffe, 1965; Davis et al., 1976) by the virusdisease called myxomatosis, 
provides an extremely spectacular example of a virus controlling a pest. In

--- Page 230 ---

229 
Section 6.5 we shall formulate optimal feedback control policies for generat­
ing epidemics to control a pest. 
Section 6.6 contains an interesting example of managing, without an 
analytical model, a real system in which the state variable is highly variable 
and unpredictable. We shall show that it is possible to prescribe in an optimal 
manner the duration of a tomato crop grown in a greenhouse. 
6.2. SOME APPLICATIONS O F S T A B I L I T Y C O N C E P T S IN P E S T C O N T R O L 
The most common method of biological control is to introduce a natural 
enemy which is usually a predator or a parasite (Laing and Junji Hamai, 
1976). This method will succeed if the pest—predator or pest—parasite 
system has a stable equilibrium in which the pest level is relatively low. In 
order to provide a robust control of the pest the desirable equilibrium should 
have a large domain of attraction. It follows that an understanding of the 
factors which enhance stability and which generate a positive equilibrium in a 
prey—predator or host—parasite system will provide useful guidelines for bio­
logical control. This type of analysis has been carried out by Hassell and May 
(1973), Diamond (1974), Beddington et al. (1976), Freedman (1976), 
Anderson and May (1978), May and Anderson (1978), Goh and Agnew (1979) 
and many other authors. 
In this section we shall examine a few population models in order to iden­
tify some of the factors which stabilize or destabilize a prey—predator system. 
The first example demonstrates that a prey—predator system is fragile if the 
prédation rate is proportional to the product of the prey and predator popu­
lations; and the prey birth rate and the predator death rate are density 
independent. 
Example 6.2.1. A pest population is usually unstable. For simplicity we shall 
model it by 
where r is a positive constant and H denotes the pest population. 
Let us suppose the natural enemy is a predator whose population is denoted 
by P. We shall assume that: (i) the predator consumes the prey (pest) at a rate 
which is proportional to the product of the prey and predator populations; 
(ii) the eaten prey biomass is converted into predator biomass with a constant 
efficiency; and (iii) the per capita prey birth rate and the per capita predator 
death rate are independent of the prey and predator populations respectively. 
Under these assumptions a model of the prey—predator system is 
H=rH 
(6.2.1) 
H = 
H[r-a12P], 
P = P[-d 
+ 
Ea12H] 
(6.2.2) 
where r, ai2, d and Ε are positive constants.

--- Page 231 ---

230 
This is a well known Lotka—Volterra model. Its solutions are limit cycles 
and the model is fragile. Suppose the predator is subjected to small but un­
predictable disturbances which increase the mortality rate of the population 
of the predator by u(t) where 0 < u(t) < b. Accordingly, we have 
Let (#*, P*) = (d/(Eal2), 
r/a12) 
and 
V(H, P)=E[H-H
k-H* 
In (H/H*)] + [ P - P * - P * In (P/P*)]. 
(6.2.4) 
Computing V along the solutions of (6.2.3) we get 
If u(t) = 0, then V = 0. Clearly a solution of (6.2.2) is V(H, P) = constant. 
The worse possible way u(t) can act on (6.2.3) is u(t) = b for P> P* and u(t) 
= 0 for Ρ < Ρ*. If this happens the solutions of (6.2.3) will approach the co­
ordinate axis planes Η = 0 and Ρ = 0. This leads to a breakdown of the p r e y -
predator system. In other words, model (6.2.3) is vulnerable to small con­
tinual disturbances. 
In the next example, we shall show that a prey—predator system can be 
globally stable if the prey or predator sustains density dependent mortalities. 
This means that the death rate of the prey or predator increases with density. 
Example 6.2.2. If the death rate of the prey population increases with density, 
model (6.2.2) becomes 
H=H[r-auH-al2P], 
where r, an,al2,d 
and Ε are positive constants. This model has a nontrivial 
equilibrium at (Η*, P*) = (d/(Eal2), 
[r — aud/(Eai2)] 
/al2). 
The equilibrium is 
positive if r > 
and/(Eal2). 
Let V(H, P) be the function in (6.2.4). Computing V(H, P) along solutions 
of (6.2.6), we get 
V(H, Ρ)=-Εαίλ(Η-Η*)
2. 
(6.2.7) 
Clearly, V< 0 and V does not vanish identically along solutions of (6.2.6). 
Therefore (#*, P*) is globally stable if P* > 0. 
On the other hand let us assume that the death rate of the predator popu­
lation increases with density. In the above case model (6.2.2) becomes 
H = 
H[r-al2P], 
P = P [ - d + Eai2H-a22P] 
(6.2.8) 
where r, a12, a22, d and Ε are positive constants. This model has an equilibrium 
H=H[r-al2P], 
P = P[-d 
+ Eal2H] 
-u(t)P. 
(6.2.3) 
V=(P-P*)(-u). 
(6.2.5) 
P = P[-d 
+ 
Eal2H], 
(6.2.6)

--- Page 232 ---

231 
at (if*, Ρ*) where H* = d/(Eal2) 
+ ra22/(Ea
2
i2) 
and P* = r/al2. 
This equilibrium 
is positive if all the parameters are positive. Model (6.2.8) is more robust than 
model (6.2.6). The latter has a positive equilibrium only if r > 
and/(Eai2). 
For practical purposes it is desirable that r is significantly larger than 
axldl 
(Eal2). 
Let V(H, P) be the function in (6.4.2). Computing V(H, P) along solutions 
of (6.2.6), we get 
V(H, P)=-a22(P-P*)
2 
< 0. 
(6.2.9) 
Hence the equilibrium (#*, P*) of (6.2.8) is globally stable. 
For pest control, model (6.2.6) has an advantage over model (6.2.8). The 
equilibrium level of the pest in model (6.2.6) is άΙ(Εαλ2). 
This is less than 
d/(Eal2) 
+ ra22l{Ea\2), 
the equilibrium level of the pest in model (6.2.8). In 
both models it is desirable that d is small and Ε and a 1 2 be relatively large. 
This means that the per capita death rate of the predator at low densities 
should be small and the predator should be efficient in converting prey bio­
mass into predator biomass and be efficient also in searching and consuming 
the pest. 
By definition, the functional response of a predator is the rate at which a 
predator captures and consumes the prey. In the previous example the func­
tional response of the predator was assumed to be proportional to the prey 
population irrespective of the density of the prey. In practice, the rate at 
which a predator eats its prey becomes saturated at high prey densities. More 
realistic functional responses of predators have been proposed by Holling 
(1959). He classified functional responses into three categories. In type I the 
response is a piece wise linear function: as the prey density increases the res­
ponse increases at a constant rate but, beyond a certain prey density it is equal 
to a constant. In type II the response rises at a decreasing rate towards an 
asymptotic value as the prey density increases. In type III the response is 
sigmoid and it tends towards an asymptotic value as the prey density increases. 
Experimental results on the functional responses of predators can be found 
in the papers by Hassell et al. (1976 a, 1977). 
We shall show that in simple population models type I and type II func­
tional responses cannot contribute to the stability of a prey—predator system 
(Hassell and May, 1973; Oaten and Murdoch, 1975). If a predator has a type I 
or a type II functional response and the prey—predator system is stable, the 
stability is due to other processes affecting the predator or prey. 
Let f(H) be the functional response of a predator. Suppose a model of the 
prey—predator system is 
H = 
rH-Pf(H), 
Ρ = P(-d 
+ Ef(H)) 
= Pg(H) 
(6.2.10) 
where r and Ε are positive constants. Let (Η*, P*) be an equilibrium which 
satisfies the equations,

--- Page 233 ---

232 
f(H*) = d/E, 
(6.2.11) 
Ρ* =ErH*/d. 
(6.2.12) 
For relatively low values of Η the functional response f{H) is usually a strictly 
monotonie increasing function of H as H increases. It follows that if d/E is 
less than the supremum of f(H) for # > 0, then (6.2.11) and (6.2.12) have a 
unique positive solution. If otherwise, every solution of (6.2.10) has the 
behavior H(t) ->
 0 0 and P(t) -> 0 as t -> «>. 
Suppose (6.2.10) has a positive equilibrium at (H*9P*). 
Consider the function 
V(H9 P) = J* ^ 
as + J
 
(
S ~
P *
} as. 
(6.2.13) 
H* 
P* 
Computing V(H, P) along the solutions of (6.2.10), we get 
V(H9P) 
= [EHP*/f(H)] 
[f(H) - f(H* )] [f(H* )/H* - f(H)/H]. 
(6.2.14) 
If f(//) is a type I functional response, we have 
_ tcH 
forH<H0, 
fi<H)~\cH0 
for H>H0. 
(6.2.15) 
For H0 > H> 0, the function V(H, P) of (6.2.14) is equal to zero; and for 
H> H0, it is positive. It follows that the solutions of (6.2.10) in the set 
{(#, Ρ) I V(H, P) < V(H0, P*)} are fragile limit cycles; and those in the set 
{(Η, Ρ) I V(H, P) > V(H0y P*)} are unstable. 
Suppose f(H) is a type II functional response. This means that f(H) is 
strictly monotonie increasing, and the slope of f(H) is strictly monotonie 
decreasing as H increases. Hence, (i) f{H*) > f(H) and f(H)/H> 
f{H*)IH* for 
H* > H> 0; and (ii) f(H*) < f(H) and f(H)/H< 
f(H*)/H* forH> 
H*. There­
fore, V(H, P) > 0 for all Pf > 0 and Η Φ Η*. We conclude that the solutions 
of (6.2.10) are unstable for type II functional response. The next example 
illustrates the result obtained above. 
Example 6.2.3. Let the functional response be 
f(H) =aH/(l 
+ wH) 
(6.2.16) 
where a and w are positive constants. We have 
f(H)-f(H
k) 
= a(H-H
k)/[(l+ 
wH)(l+ 
wH*)], 
(6.2.17) 
f(H*)/H* - f(H)/H 
= aW(H - i/*)/[(l + wH)(l+ 
wH*)]. 
(6.2.18) 
It follows that for this particular functional response the function V(H9 P) is 
positive for all Η > 0 and Η Φ Η*. Hence the solutions of (6.2.1) (6.2.10) 
with this particular f(H) function are unstable. 
Suppose f(H) is a type III functional response. By definition this is a sigmoid 
function. Let the function f(H)/H 
have a maximum at Hm ; the function 
f(H)/H being the slope of the line joining the points (0, 0) and (//, f(H)). For

--- Page 234 ---

233 
H> # m , f(H) behaves locally like a type II functional response. Hence, if 
H* > Hm the equilibrium (i/*, P*) is unstable. 
If H* satisfies the inequality Hm > H* > 0, the graph of the function 
(f(H*)/ 
H*)H intersects that of the function f(H) at two points. One of these points 
is #*; let Hu denote the other point. For H* > H> 0, we have f(H) < f(H*) 
and « # * ) / # * > f(H)/H; thus V(H, P) < 0. For Hu> 
H> Ü*, we have f(H) 
> f(H*) and f(H*)/H* < f(H)/H; thus V(H, P) < 0. It follows that V(ü, Ρ) 
< 0 for all Ü such that Hu> 
H> 0 and Η φ Ü*. Therefore { ( # , Ρ) | V(ü, Ρ) 
< F ( ü u , Ρ*)} is a region of attraction of (#*, P*). 
The next example will illustrate these results. 
Example 6.2.4. Consider the prey—predator model 
H= 0.25Ü — Ρ ϋ
2 / ( 0 . 6 4 4- Η
2), 
P = P [ - d + 0 . 1 ^ / ( 0 . 6 4 + #
2 ) ] . 
(6.2.19) 
For this model the function f(H)/H 
= H/(0.64 + Ü
2 ) has a maximum at 
Hm = 0.8. Hence if 0.8 > ii* > 0, the positive equilibrium (ϋ*, P*) of (6.2.19) 
is locally stable. If Ü* > 0.8, then (ϋ*, P*) is unstable. Using (6.2.11) we 
deduce that (6.2.19) has a locally stable equilibrium if d < 0.05, and no 
stable equilibrium if d > 0.05. 
If d = 0.02, the equilibrium (ϋ*, P*) = (0.5, 0.89). In this case, the graph of 
the function (/*(ϋ*)/ϋ*)ϋ intersects that of the function f(H) at the points, 
Ü* = 0.5 and Hu = 1.28. Hence, the region { ( ϋ , Ρ) I V(ü, Ρ) < V(1.28, 0,89)} 
is a domain of attraction of the equilibrium where the function V(ü, Ρ) is 
given in (6.2.13). 
In a well known example, Doutt and Nakata (1965) (see Hagen et al., 
1971, p.275) discovered that the presence of an alternate host which infests 
blackberries was crucial in the biological control of the grape leaf hopper, 
Erythroneura 
elegantula, by the egg parasite, Anagrus epos. Hedgerows can 
be important refuges for the natural enemies of a wide variety of pests. Thus 
spatial heterogeneity can play an important role in biological control. 
We shall demonstrate that spatial heterogeneity can stabilize a p r e y -
predator system in biological control (Murdoch, 1977). 
Let us assume that the predator has two subpopulations: one is with the 
pest population in the cultivated area; the other is outside the cultivated area. 
At time £, let these subpopulations be Pi(t) and P2(t) respectively. Let the P 2 
population be under stress, with the result that its mortality rate increases 
with density. Let the diffusion coefficient between the two subpopulations 
be small. A simplified model of this type of prey—predator system is 
H = 
H(r-a12Pl), 
Pi =P,(-d 
+ Eal2H) 
+ D(P2 - P j ) , 
P 2 =P2(b-a33P2) 
+ D(PX - P
2 ) 
(6.2.20) 
where r, αί2, a 3 3 , d, Ε and D are positive constants.

--- Page 235 ---

234 
Model (6.2.20) has an equilibrium at (#*, Ρ*, Ρ*) where 
P* 
=r/al2, 
P* = { ( & - £ ) + [(b —D)
2 + 4 α 3 3 £ Ρ * ]
1 / 2 } / ( 2 α 3 3 ) , 
H* = [d 
+D(l-PyPÏ)]/(Eal2). 
(6.2.21) 
By assumption, P2 is an environment which is harsher than that of Px. We can 
then expect that P* < P*. It follows that it is likely that (#*, P*, P2) is a posi-
tive equilibrium. 
Model (6.2.20) may be rewritten in the form N. = N.F^Nu 
N29 N3)9 i = 1, 2, 
3, where (Nu N29 N3) = (#, Pu P 2 ) and 
Fi =r — 
ai2N2, 
F2 =-d 
+ Eal2Nx 
-D 
+ 
D(N3/N2), 
F3 = b-D-a33N3 
+ D(N2/N3). 
(6.2.22) 
The Jacobian (dFJbNj) is 
At the equilibrium N* = (#*, Ρ*, P*), let A = (Au) = (dFJdNj). 
If cx =E,c2= 
1, 
c3 - 
and C = diag (cu c 2 , c 3 ) , then the matrix CA + A
TC is semidefinite. 
Hence (ii*, Ρ*, P*) is locally stable. The function 
is a Liapunov function and may be used to estimate the region of attraction 
If b > 0, then the P 2 predator subpopulation lives on an alternative prey. 
If b < 0, there may be no alternative prey in the region that the P 2 population 
occupies. In either case the existence of the second subpopulation stabilizes 
the prey—predator system. From (6.2.2) we know that in the absence of the 
P 2 population, the prey—predator system is fragile. 
We consider next the case in which the pest has a refuge (e.g. a hedgerow). 
In the refuge the pest subpopulation is under stress and its death rate increases 
with density. Let Hx denote the pest subpopulation in the cultivated area and 
let ü 2 be the pest subpopulation in the refuge. Suppose the diffusion co­
efficient between the two subpopulations is small. A simplified model of this 
type of prey—predator system is 
(6.2.23) 
3 
V(N) = 2 c,[N,-Ni 
-N*ln 
(N^N*)] 
(6.2.24) 
of Ν* = (H 
,PÏ,P*2). 
H, =Hl(rl 
- o i a P ) + D(H2 
-#,), 
H2 = H2(r2 
-a22H2) 
+ D(Ht 
-H2),

--- Page 236 ---

235 
P = P(-rf + 
EaX2Hx) 
(6.2.25) 
where ru a 1 2 , a 2 2 , D, Ε and d are positive constants. The parameter r 2 can be 
positive or negative. 
It is reasonable to assume that rx > D. If this assumption is satisfied, then 
(6.2.25) has a positive equilibrium at (//*, U*2, P*) where 
flî=d/(JBa12), 
flî = { ( r 2 — D) + [(r 2 - Z))
2 + 
4a22DH\V
l2)l{2a22), 
Model (6.2.26) may be rewritten in the form N. = N.F^Nu N2, N3) where 
(Nl9 N2, N3) = (Jf„ tf2, P). Let C = diag (1, flî/flî, l / £ ) and A = (bFJbNj) 
at 
iV* = (#*, 
P*). We find that CA + A
TC is negative semidefinite. It follows 
that (#*, 
Ρ*) is locally stable and the function of the form given in (6.2.24) 
can be used as a Liapunov function to estimate the region of attraction of 
(ZTÎ, #*,P*). 
We note that (6.2.5) has a stable positive equilibrium at (/fî, H\9 P*) even if 
r 2 is negative. In this case the H2 subpopulation is in a refuge that is in a 
contiguous area which is not cultivated or which contains another crop. This 
suggests that monoculture in a large area is undesirable for pest control. 
The stability of the equilibrium (//*, H\, P*) depends critically on the par­
ameter a 2 2 . If a 2 2 = 0, we can show that the solutions of (6.2.25) in a neigh­
bourhood of (H*u f/^, P*) are fragile limit cycles. 
6.3. G R A P H I C A L A N A L Y S I S O F A C O N T R O L TWO-SPECIES S Y S T E M 
In this section we shall establish four simple rules for determining the 
stability or instability of an equilibrium in the graphical analysis of a two-
species system. We shall demonstrate that the graphical method can be used 
for developing efficient feedback control policies in the management of a 
pest—predator system. 
Let X and Y be the populations of two species whose interaction can be 
described by the model, 
Let the functions GX(X, Y) and G 2(X, Y) be positive in the positive quadrant. 
By definition the curve GX(X, 
Y)FX(X, 
Y) = 0 is called the X isocline. Strictly 
speaking, it should be called the X zero isocline. As Gx(Xy 
Y) > 0 the X iso­
cline is given by FX(X, Y) = 0. Similarly F2(Xy 
Y) = 0 is the Y isocline. 
Before the advent of modern computers the method of isoclines was 
often used to analyse the behavior of a given nonlinear model with one of 
two variables (Cunningham, 1958). Rosenzweig and MacArthur (1963) popu­
larized this method in population dynamics and showed that it is a very 
(r, -D)/a12 
+ 
DH2/(al2Hx). 
(6.2.26) 
X = GX{X, Y)FX(X9 
Y), 
Y=G2(Xy 
Y)F2(X9 
Y). 
(6.3.1)

--- Page 237 ---

236 
flexible tool for studying two-species interactions. Strebel and Goel (1973) 
have re-examined this method and have pointed out several difficulties in 
applying this method to data from an experimental two-species interaction. 
In the case where the predator isocline is vertical at a positive equilibrium 
and the prey isocline has a single hump, Rosenzweig and MacArthur (1963) 
and Freedman (1976) showed that: (i) the equilibrium is locally stable if the 
isoclines intersect to the right of the maximum of the prey isocline; and (ii) 
the equilibrium is unstable if the isoclines intersect to the left of the maxi­
mum of the hump. We shall generalize and clarify these graphical rules for 
determining the local stability of a positive equilibrium. 
Consider the linear equations 
χ = ki(aux 
+ 
aX2y), 
y = k2(a2Xx 
+ a22y) 
(6.3.2) 
where kuk2 
are positive constants. The characteristic equation for this 
system is 
λ
2 - ( M u 4- k2a22)\ 
+ kxk2det 
A = 0. 
(6.3.3) 
The Routh—Hurwitz necessary and sufficient conditions for (6.3.2) to be 
stable are 
kxalx 
+ k2a22 
< 0 
(6.3.4) 
and 
det ,4 > 0. 
(6.3.5) 
Hence (6.3.2) is stable if (i) axl < 0, a22 < 0 and det A > 0; or (ii) au 
< 0, 
a22 < 0 and det A > 0. It is unstable if (i) det A < 0; or (ii) a
n > 0 and 
a22 > 0; or (iii) axx > 0 and a22 > 0. 
Let model (6.3.1) have a positive equilibrium at (X*, Y*). Linearizing the 
equations of (6.3.1) we get kx = GX(X*, Y*)9 k2 = G 2(X*, Y*)9 axx = dF^X*, 
Y*)/3X*, aX2 = bFJdY, 
a2X = bF2/3X, 
and a22 = 
dF2/dY. 
The gradient of the X isocline at (X*9 Y*) is VFX = ( û l h a 1 2 )
T and it is nor-
mal to the X isocline at (X*, Y*). Similarly VF2 = (α 2 1, α 2 2 )
τ is normal to the 
Y isocline at (X*, Y*). Thus the signs of axx and a22 can be determined graphic­
ally be examining, at the point (X*, Y*)9 the sign of the first component of 
the normal to the X isocline, and the sign of the second component of the 
normal to the Y isocline. 
Let u be a unit vector perpendicular to VFi and VF2. The vector cross 
product, 
VFXX 
VF2 = (detA)u9 
(6.3.6) 
»sinflllV^IMI VF 2||ii, 
(6.3.7) 
where θ is the angle between the vectors VFX and VF2 in the anticlockwise

--- Page 238 ---

237 
direction from VF ι to VF 2 and || VF,|| is the magnitude of VFX. It follows 
that det A > 0 if π > θ > 0, and det A < 0 if 2π > Θ > π. Therefore the sign 
of det A can be determined graphically by examining the angle in the anti­
clockwise direction between the normals to the X and Y isoclines. 
From this analysis we deduce four graphical rules for determining the local 
asymptotic stability of an equilibrium. Note that in an application of these 
rules we have some freedom in choosing the Gx and G2 functions. The only 
constraint on the G χ and G 2 functions is that they must be positive at the 
equilibrium point. 
Rule I. At the equilibrium (X*, Y*) let θ be the angle in the anticlockwise 
direction between the normals of the X and Y isoclines respectively. If 2π 
> θ > π, then (Χ*, Y*) is unstable. 
Rule II. The equilibrium (X*, Y*) is unstable if, at the point (X*, Y*), the 
first component of the normal to the X isocline is positive (nonnegative) and 
the second component of the normal to the Y isocline is nonnegative (posi­
tive). 
Rule HI. The equilibrium (X*, Y*) is locally stable if: (i) the first com­
ponent of the normal to the X isocline is negative (nonpositive); (ii) the second 
component of the normal to the Y isocline is nonpositive (negative); and 
(iii) the angle Θ in the anticlockwise direction between the normals of the X 
and Y isoclines satisfies the inequality π > Θ > 0. 
Rule IV. The equilibrium (X*, Y*) of (6.3.1) is locally asymptotically 
stable (unstable) if, at the point (X*, Y*), G.dFJbX 
+ G2dF2/bY 
is negative 
(positive) and π > θ > 0. 
The next two examples demonstrate that the above rules can be used to 
determine quickly the instability or local stability of an equilibrium. 
Example 6.3.1. Consider the competition model, 
X = 
X(3~2X-Y), 
Υ = Y(2 —- X — Y). 
(6.3.8) 
It has four equilibria at (1, 1), (0, 2), (3/2, 0) and (0, 0). 
At (1, 1) the X and Y isoclines a r e 3 - 2 X - Y = 0 a n d 2 ~ X — Y = 0 res­
pectively. The components of their normals have the signs (—, —), (—, —). 
Thus the first component of the normal to the X isocline and the second 
component of the normal to the Y isocline are both negative. The angle Θ 
between these normals satisfies the inequality π/2 > θ > 0. By Rule III this 
equilibrium is locally stable (see Fig.6.3.1). 
At the equilibrium (0, 2) let Gx = 3 — 2X - Y. We have G^O, 2) = 1. The 
X and Y isoclines are X = 0 and 2 — X — Y = 0 respectively. Their normals 
have the signs ( + , 0 ) and (—, —). The angle θ between them satisfies the

--- Page 239 ---

238 
γ 
Fig.6.3.1. The angle in the anticlockwise direction between the normals of the X and Y 
zero isoclines of model ( 6 . 3 . 8 ) . 
inequality 3π/2 > Θ > π. By Rule I this equilibrium is unstable. Examination 
of the vector field (XFU 
YF2) in a nonnegative neighbourhood of (0, 2) shows 
that the equilibrium is not sector stable. 
At the equilibrium (3/2, 0) let G2(X, Y) = 2 - X - Y. We have G 2(3/2, 0) 
= 1/2. The X and Y isoclines are 3 — 2X — Y = 0 and Y = 0 respectively. Their 
normals have the signs (—, —) and (0, +) and the angle θ between them satis­
fies the inequality 3π/2 > Θ > π. By Rule I this equilibrium is unstable. 
At the equilibrium (0, 0) let G, = 3 - 2X - Y and G 2 = 2 - X - Y. We 
have G^O, 0) = 3, G 2(0, 0) = 2. The X and Y isoclines are X = 0 and Y = 0 
respectively. Their normals have the signs (+, 0) and (0, +). By Rule II this 
equilibrium is unstable. 
Example 6.3.2. Suppose a predator has the sigmoid functional response f(X) 
= X
2 / ( 0 . 6 4 + X
2). Let a model of the prey—predator interaction be 
X = X [ 0 . 2 - X 7 / ( 0 . 6 4 + X
2)], 
(6.3.9) 
Ϋ = Y[~d + 0.1X
2/(0.64 + X
2 ) ] 
(6.3.10) 
where d is a positive constant. Eq. (6.3.9) may be rewritten in the form 
X= 0 . 2 [ X
2 / ( 0 . 6 4 + X
2)]{X+ 
0 . 6 4 / Χ - 5 Υ ) . 
(6.3.11) 
At a positive equilibrium (X*, Y*) the X and Y isoclines are X + 0.64/X 
- 5Y = 0 and 0.1X
2/(0.64 + X
2) - d = 0. For X > 0 the curve Y = ( 0 . 6 4 / X 
+ X ) / 5 is convex and it has a global minimum at X = 0.8. At (X, Y) the

--- Page 240 ---

239 
normals to the X and Y isoclines are (1 - 0 . 6 4 / X
2 , - 5 ) and ( 0 . 1 2 8 X / ( X
2 
+ 0.64)
2, 0). 
If d > 1/20, then X* > 0.8. In this case the components of the normals to 
the X and Y isoclines at the positive equilibrium (X*, Y*) have the signs (4-, 
—) and ( 4 , 0) respectively. By Rule II the equilibrium is unstable (Fig.6.3.2). 
If 1/20 > d > 0 then 0.8 > X* > 0. In this case the components of the 
normals to the X and Y isoclines at the positive equilibrium (X*, Y*) have the 
signs (—, —) and ( 4 , 0) respectively. Furthermore the angle θ between the 
two normals satisfies the inequality π > θ > π/2. By Rule III the equilibrium 
is locally stable. 
It is worthwhile to distinguish three types of control policies. The first 
type uses constant control variables; the second type uses control variables 
which are continuous functions of the populations (state variables); and the 
third type uses discontinuous feedback control functions. We shall examine 
the effects of the three types of control polciies by applying them to simple 
prey—predator models. 
Let w(X, Y) and v(X9 Y) be control variables acting on a prey—predator 
system; and let a model of the system be 
X=GX(X9 
Y)FX(X9 
Y)-u(X9 
Y), 
Y = G 2(X, Y ) F 2 ( X , Υ) - v(X9 Y). 
(6.3.12) 
O 
1 
X 
Fig.6.3.2. The angle in the anticlockwise direction between the normals of the X and Y 
zero isoclines of model ( 6 . 3 . 9 ) and ( 6 . 3 . 1 0 ) .

--- Page 241 ---

240 
Each choice of the control functions u(X, Y) and v(X, Y) from an admissible 
set gives a set of X and Y isoclines. Thus a way to design a desirable control 
pest—predator system is to choose u(X, Y) and υ(Χ, Y) which will reshape 
and shift the isoclines so as to create an economically desirable and locally 
stable equilibrium. Using Liapunov functions, or otherwise, we could check 
that the equilibrium has a large region of attraction. 
Example 6.3.3. At relatively moderate levels, an insecticide tends to kill a 
pest and its predator in a density-independent (proportional) manner. Let us 
assume that a nonselective insecticide is applied at a constant rate to a pest-
predator system. If 6, a 1 2 , a22, <2, e, Ε and c are positive constants, let a model 
of the system be 
This model has an equilibrium at (X*, Y*) where Y* = (b — E)/(ai2) 
and X* 
= (d + cE + 
a22Y*)l{eaX2). 
In this case the X and Y isoclines are shifted when Ε is varied. If b > Ε 
the predator equilibrium level is decreased and the pest equilibrium level 
is increased as the control parameter Ε is increased. The normals to the iso­
clines remain unchanged. Therefore the stability of (X*, Y*) remains the same 
for all nonnegative values of E, provided that Y* remains positive. Hence (X*, 
Y*) is globally stable. 
By lowering the predator equilibrium level, the application of the insecti­
cide makes the system more vulnerable to perturbations. 
Example 6.3.4. Let us assume that a nonselective insecticide is applied at a 
rate which is proportional to the pest density. This gives an example of a 
continuous feedback control policy. Let a model of the control p r e y -
predator system be 
where c and s are nonnegative constants. 
If the insecticide is not used, we have c = 0, and model (6.3.14) has a 
unique positive equilibrium at (0.9, 0.322). The prey isocline is convex and 
it has a global minimum at X = 0.8. The normals of the prey and predator iso­
clines at this equilibrium have the signs (4-, —) and ( 4 , 0). By Rule II it is 
unstable. 
Let c = 0.0508 and s = 0.1. Here the prey isocline 
X = 
X(b-a12Y)-EX9 
Y = Y ( - d 4 
eal2X-a22Y)-cEY. 
(6.3.13) 
X = X[0.2-XY/(0.64+ 
X
2)] 
-l.bcX\ 
Y= Y [ - 0 . 0 5 5 9 4 0.1X
2/(0.64 4 X
2)] - 
scXY 
(6.3.14) 
Y = 0 . 1 2 8 / X 4 0.2X- 
0.96c 
-l.bcX
2 
(6.3.15) 
is monotonie decreasing and intersects the X axis at X = 2.62. Model (6.3.14)

--- Page 242 ---

241 
has a unique positive equilibrium at (1, 0.203). The normals to the prey and 
predator isoclines at this equilibrium have the signs (—, —) and (4-, 0). Hence 
this equilibrium is locally stable. For 1 > X > 0 the prey isocline is above the 
line Y = 0.203; and for Κ 
X < 2.62 the prey isocline is below the line Y 
= 0.203. Hence (1, 0.203) is globally stable (Hsu, 1978 a). 
If c = 0.0508 and s = 0.298, there are two predator isoclines, namely, X 
= 1.618 and X = 2. The prey isocline is given in (6.3.15). The two positive 
equilibria are (1.62, 0.154) and (2, 0.11). 
At the equilibrium (1.62, 0.154) the normals to the prey and predator 
isoclines have the signs (—, —) and ( + , 0) respectively. By Rule III this equi­
librium is locally stable. 
At the equilibrium (2, 0.11) the normals to the prey and predator isoclines 
have the signs (—, —) and (—, 0). The angle Θ between the normals to the prey 
and predator isoclines satisfies the inequality 2π > Θ > π. By Rule I this 
equilibrium is unstable. It is interesting to note that in this case the equilibrium 
is unstable even though the slope of the prey isocline is negative and the 
predator isocline is vertical. This should be a warning that the stability rule 
given by Rosenzweig and MacArthur (1963) ought to be used with some care. 
Example 6.3.5. An increasingly popular method of biological control is to 
release predators which are bred in laboratories. If υ is the rate of release of 
the predators, let a model of the system be 
X = 
X(1-Y), 
Y= Y(-l 
+ X) + v. 
(6.3.16) 
Suppose the pest level at the equilibrium (1, 1) is above the economic 
threshold for pest damage. It is desirable to reduce the pest level below X 
= 0.8. Tentatively we shall examine whether or not it is possible to create a 
stable equilibrium at (0.5, 1) if predators are released. This requires the 
1 
2 
Fig.6.3.3. Angles between the normals of the zero isoclines of model ( 6 . 3 . 1 4 ) for c 
= 0 . 0 5 0 8 and s = 0 . 2 9 8 .

--- Page 243 ---

242 
predators to be released at the rate υ = 0.5. 
In this case the prey and predator isoclines are 0 = 1 — Y and Y(X — 1) 
4- 0.5 = 0 respectively. At (0.5, 1), their normals have the signs (0, —) and 
(+,—). The angle θ between these normals satisfies the inequality π > θ > 0. 
By Rule III the equilibrium (0.5, 1) is locally stable. Using the Liapunov 
function 
V(X, Y ) = X - 0 . 5 - 0 . 5 1 n ( X / 0 . 5 ) + y - l - l n ( Y ) , 
(6.3.17) 
we find that V(X, Y) = - 0 . 5 ( 7 — 1 )
2 / F < 0. Hence the equilibrium at (0.5, 1) 
is globally stable. 
In (6.3.16) the prey—predator model for the natural dynamics is very 
fragile. But the conclusion that the equilibrium (0.5, 1) is locally stable is not 
critically dependent on the model of the natural dynamics of the p r e y -
predator system. At the equilibrium the slopes of the isoclines vary with 
changes in the model of the natural dynamics. The angle Θ between the 
normals of the isoclines of the control prey—predator system is arctan(2) and 
it satisfies the inequality π > θ > 0. Thus small changes in the slopes of the 
isoclines will not make θ violate the inequality π > θ > 0. 
We shall now examine the use of discontinuous feedback control functions 
to manage a prey—predator system (Goh et al., 1974 b) by analysing a few 
simple models. If there is a sufficient number of control variables it is pos­
sible to formulate good and robust management policies for a prey—predator 
system without an accurate model of the natural dynamics of the system. 
This is because the control variables can be used to dominate the system and 
to drive the system to wherever we want. As an illustration, consider a daily 
life situation. The natural dynamics of a car is unknown to the average driver; 
yet he can manoeuvre it satisfactorily because he has enough control vari­
ables to dominate the natural dynamics of the car. 
In the management of the dynamics of a pest—predator system we must 
specify a target to which we will drive the system (Vincent et al., 1974, 1977). 
We need also an index for measuring the performance of the control policies. 
In most cases it is impossible to eliminate a pest completely. The next best 
target is an equilibrium of the natural dynamics provided the corresponding 
level of the pest is below the economic threshold for pest damage. Otherwise, 
we have to create a new equilibrium by using one or more of the control 
variables in a continuous manner as in Example 6.3.5. 
Example 6.3.6. Let u(t) be the rate at which an insecticide is applied. Clearly 
u(t) is a control variable. Suppose a model of the control prey—predator 
system is 
X = X(l— 
Y) — u(t)X, 
Y= Y(X-l). 
(6.3.18) 
The point (1, 1) is an equilibrium of the natural dynamics. Suppose X = 1

--- Page 244 ---

243 
is an acceptable pest level. Due to limitations of facilities and manpower, let 
the control variable be bounded from above, i.e., 
0 < u(t)< 
b 
(6.3.19) 
where b is a positive constant. The control problem is to choose u as a func­
tion of X and Y so as to drive the system from any positive state at time t = 0 
to the equilibrium ( 1 , 1 ) with a minimum use of the control variable. 
Consider the Liapunov function 
V(X, Y)=X-l-ln(X) 
+ y - l - l n ( Y ) . 
(6.3.20) 
Computing V(X, Y) along solutions of (6.3.18) we get 
V(Xy Y) = -{X 
- 1) u. 
(6.3.21) 
To make V(X, Y) as negative as possible we choose u = b for X > 1. With this 
feedback control policy we can drive the system from any positive initial state 
to (1, 1). But it is not clear that this control policy provides an efficient use 
of the control variable. 
To develop an efficient control policy we examine in each region of the 
state space the directions of the components of the velocity vector of the 
natural dynamics and the effects of the control variable on the dynamics of 
the control prey—predator system. In the region {(X, Y) I X > 1, Y < 1} we 
have 
(*Κ)
 + (Π·
 
<6·
3·
22) 
The first term in (6.3.22) gives the signs of the components of the velocity 
vector of the natural dynamics. If u = b there is wastage in the use of the 
control variable for it acts against the first component of the velocity vector 
of the natural dynamics. This suggests that we should let u = 0. 
In the region {(Χ, Y) \ X > 1, Y > 1} we have 
(*) • (•)
+(D ·
 
,6-
s-
2s) 
Therefore if we let u = b, the control variable will enhance the natural dyn­
amics. This means that the control variable is used in an efficient manner. 
Thus an efficient control policy for model (6.2.18) is u = b at all points (X, 
Y) where X > 1 and Y > 1; and u = 0 elsewhere. 
However, the above policy may be unsatisfactory in terms of other perfor­
mance index. For example it would be useless if it is absolutely essential to 
keep the pest level below X = 1 for all values of t. 
Example 6.3.7. Let u(t) be the rate of application of a nonselective insecti­
cide. Suppose a model of the control pest—predator system is

--- Page 245 ---

244 
X = X(1- 
Y)-uX, 
Y = 
Y(X-l)-suY 
(6.3.24) 
where s is a positive constant and represents the relative toxicity of the 
chemical to the prey and predator. 
If V is the Liapunov function in (6.3.20) the derivative V along solutions 
of (6.3.24) is 
Hence u = b is stabilizing if it is applied at the maximum level in the region 
{(Χ, Y) I (X- 
1) + s(Y— 1) > 0, X> 
0, Y> 0} and u = 0 elsewhere. 
On examining the signs of the components of the velocity vector of the 
natural dynamics and the effects of the control variable, we deduce, as in 
Example 6.3.6, that the control variable is used in an efficient manner if it is 
applied at the maximum level in the region {(Χ, Y) I (X — 1) + s( Y — 1) > 0, 
1 > X > 0 } . If s is small this represents a relatively small region in the state 
space. A compromise policy is to let u = b for all (X, Y) in the region {(X, 
Y ) l ( X - l ) + s ( Y - l ) > 0, ( 7 - l ) - s ( X - l ) > 0 , X > 0} andu = 0 else­
where. As expected this region reduces to {(X, Y)\X> 
1, Y> 1} as s -+ 0. 
When s = 0 the insecticide acts only on the pest and model (6.3.24) reduces 
to (6.3.18). 
Example 6.3.8. Let ux and u2 be the rates of release of pests and predators 
which are bred in laboratories. Let vx and v2 be the rates of application of 
chemical agents which kill the prey and predator selectively. Let F(X, Y) and 
G(X, Y) be the growth rates of the pest and predator in the absence of the 
control variables. A model of the control prey—predator system is 
Let ux(t), u2(t), 
and v2(t) be piecewise continuous functions of t\ and 
let them be subject to the constraints, 0 < ux < au 0 < u2 < a 2, 0 < vx < bx 
and 0 < v2 < b2 where au a2, bx and b2 are positive constants. 
Suppose the prey isocline F(X, Y) = 0 and G(X, Y) = 0 intersect at a posi­
tive point (X*, Y*). Let this equilibrium be an acceptable target for driving 
the system to. Let these isoclines divide the positive quadrant into four sub-
regions which are denoted by i?(+, + ) , R(—, +), R(—, —) and R(+, — ). By 
definition, i?(+, +) = {(*, y) I F(X, Y) > 0, G(X, Y) > 0 } . The other regions 
are defined in a similar manner. 
From the analyses of a number of explicit prey—predator models, we find 
that an efficient control policy is as follows: (i) in R(+, +) the predators 
which are bred in laboratories are released at the maximum rate; (ii) in R(—, 
+ ) the chemical agent to kill the pest is used at the maximum rate; (iii) in 
V(X9 Y)=-[(X-1) 
+ 
s(Y-l)]u. 
(6.3.25) 
(6.3.26)

--- Page 246 ---

245 
R(—, —) the chemical agent to kill the predators is used at the maximum rate; 
and (iv) in R(+, —) the pests (preys) which are bred in laboratories are 
released at the maximum rate. In each case the other control variables are set 
equal to zero. 
For (X, Y) in R(+, — ), the rationale for releasing the pests is to feed the 
predators. This control policy drives the state rapidly into the region R(+, +) 
where the predator population is increasing. 
The most important conclusion to be drawn from this analysis is that it is 
possible to formulate an efficient feedback control policy which is insensitive 
to the natural dynamics of a prey—predator system. The reason for this is that 
if there are enough control variables it would be possible to enhance the desir­
able trends in the natural dynamics so as to drive the state of the system to a 
desirable target in an efficient manner. 
6.4. OPTIMAL C O N T R O L O F A P R E Y - P R E D A T O R S Y S T E M 
We shall examine the optimal control of a prey—predator system. An 
object of the analysis is to illustrate the use of optimal control for formulat­
ing optimal policies in the dynamic management of a prey—predator system. 
For simplicity we shall use the classical Lotka—Volterra model for the natural 
dynamics of the system. The solutions of the model are limit cycles and its 
behavior is fragile to small continual perturbations (see model (6.2.3)). But 
from Example 6.3.8 we note that the qualitative features of an efficient feed­
back control policy is not critically dependent on the precise details of a 
model for the natural dynamics of a prey—predator system if there is a suffi­
cient number of control variables to enhance the desirable trends in the 
natural dynamics so as to drive the system to a desirable target. 
We shall formulate five optimal control problems and consider their 
optimal feedback control policies (Goh et al., 1974 a); and examine the 
mathematical details of the optimal control analysis of two of these problems. 
In the first three problems the control variable is the rate of application of 
a chemical which (i) kills the prey selectively; (ii) kills the predators selec­
tively; and (iii) kills the preys and predators. In the fourth problem the 
control variable is the rate of release of preys (pests) which are bred in labor­
atories or imported. In the last problem the control variable is the rate of 
release of predators which are bred in laboratories or imported. The object of 
the optimal control problem is to drive a prey—predator system to a desirable 
target and to do so with minimum cost, expressed as a weighted sum of the 
pest damage and the cost in using the control variable. 
Using nondimensional variables (see Vincent et al., 1974) the classical 
Lotka—Volterra model for the natural dynamics of a prey—predator system is 
X = 
X(1-Y), 
Y= 
Y(X-K) 
(6.4.1)

--- Page 247 ---

246 
where Κ is a positive constant. The solutions are limit cycles which satisfy the 
equation 
X-K-K\n(X/K) 
+ 7 - l - l n ( 7 ) = C. 
(6.4.2) 
The parameter C in (6.4.2) is a constant of integration and depends on the 
initial values of X and Y. 
Let the control variable u(t) be the rate of application of a chemical which 
kills the pests and the predators. At moderate levels of the prey population 
and at moderate values of u(t) the rate at which the prey is killed is propor­
tional to the product of u and the population of the prey; the predator is 
killed at a similar rate. Suppose the chemical leaves no residue. The dynamics 
of the prey—predator system subject to this control variable is 
X = 
X(l-Y)-eluX, 
Y = Y(X-K)-e2uY 
(6.4.3) 
where ex and e2 are nonnegative constants. 
At the initial time t = 0 let 
X(0) = X0, 
7 ( 0 ) = I V 
(6.4.4) 
This means that the population levels can be measured accurately. 
The point (Κ, 1) is an equilibrium of the natural dynamics of the p r e y -
predator system. Thus in a neighbourhood of (Κ, 1) we can expect that the 
components of the natural velocity vector will be small. If the state of the 
system is in a neighbourhood of this equilibrium it would be relatively cheap 
to use control variables to maintain the state in the neighbourhood. This is 
one reason why it may be desirable to drive the state of a system to an equil­
ibrium of its natural dynamics. Assuming that the pest level at the equilibrium 
(Κ, 1) is acceptable we shall drive the system to (Κ, 1). Hence we have the 
target (terminal) conditions 
X(T)=K, 
Y(T) = 1 
(6.4.5) 
where T, the terminal time, is unconstrained. If (X, 1) is unacceptable, we 
have to use some of the control variables to create an artificial equilibrium 
and use it as a target. Example 6.3.5 shows how an artificial equilibrium may 
be created. 
Because of limitations in facilities and manpower the control variable will 
be bounded from above. For simplicity we assume that 
0 < u(t) < b 
(6.4.6) 
where b is a positive constant. In practice u(t) is a piecewise continuous func­
tion. 
We need a criterion to measure the performance of the control program. 
One eminently reasonable criterion is a cost function which is a weighted

--- Page 248 ---

247 
combination of the total cost of using the chemical and the total cost of pest 
damage to crops. We assume that the crop damage is negligible when the 
system is at the equilibrium (K, 1). The final choice of the performance index 
may take into account other considerations e.g. health. In this study let the 
performance index for the control problem be 
τ 
J= 
j* ( c X + u)dt 
(6.4.7) 
ο 
where c is a nonnegative constant. 
The optimal control is to choose an admissible control program which will 
drive the system from the initial state (Χθ9 
Y0) to the target (K, 1); and such 
that the performance index is minimized. 
Example 6.4.1. Consider the case in which the chemical kills only the preys. 
In brief the optimal control problem is as follows: 
System: 
X = X(l~Y)-uX, 
Y=Y(X-1). 
(6.4.8) 
Initially: 
X(0) = X0, 
Y(0) = Y09 
(6.4.9) 
Constraint: 
0 < u(t) < b. 
(6.4.10) 
Terminally: 
X(T) = 1, 
Y(T) = 1. 
(6.4.11) 
τ 
Objective: 
min | (cX + u)dt. 
(6.4.12) 
ο 
For a given initial state the optimal control program is a sequence of u(t) 
= 0 arcs and u(t) = b arcs. The exact sequence has to be determined numeric­
ally. In Fig.6.4.1 the optimal control program is given for all positive initial 
states in a region. The control variables given in this manner make up an 
optimal feedback 
control 
policy. 
The curves AP and BP in Fig.6.4.1 are switching curves. Let the typical 
initial state of the system be at G ι. The system is allowed to evolve under null 
control until its solution intersects the switching curve BP. At the point of 
intersection, the control variable is switched on and applied at maximum level 
until the state of the system reaches the target Ρ at (1, 1). If the initial state is 
at G 2, the control variable is immediately applied at maximum level until the 
solution intersects the switching curve AP. At that point the control variable 
is switched off, and the system evolves under its own natural dynamics until 
its solution intersects the switching curve BP. There the control variable 
switched on again at maximum rate and it drives the state of the system to the 
target at P. 
From Fig.6.4.1 we observe that the spraying of the chemical must stop as 
soon as the state of the system reaches the target at P. Otherwise, the system

--- Page 249 ---

248 
A 
OC 
Ο 
I-
< 
Û 
LU 
OC 
Q. 
0 
P R E Y 
B 
Fig.6.4.1. Optimal control of a prey-predator system using an ideal pesticide. 
denotes a 
"max trajectory, and -> denotes a u = 0 trajectory. 
may be driven to the point Q via the broken curve PQ. If the spraying is then 
stopped at Q, the state of the system will move along a trajectory of the 
natural dynamics which is some distance from the target P. Ultimately this 
leads to a pest outbreak. 
Example 6.4.2. We shall examine the mathematical details of the optimal 
control problem which is considered in the previous example. 
The Hamiltonian function for the problem in (6.4.8) to (6.4.12) is 
H(t9X, 
7, u9p)=p0(cX 
+ ii) + pl[X(l-Y)-uX] 
+ p2Y(X-l). 
(6.4.13) 
Let X*, 7*, w*, p* denote an optimal set. 
The optimal set X*, Y*, u*, p* must satisfy the costate equations 
because H does not contain t explicitly. This follows from the condition dH/ 
dt = dH/dt, and the condition that H is continuous. 
The transversality condition gives 
at t = Τ because Τ is unconstrained. Therefore along an optimal trajectory 
px =-dH/dX 
= 
-cp0-pl(l-Y-u)-p2Y9 
p2 = -dH/d Y = p,X- 
p2(X - 1), 
and Po
 = constant > 0. Along an optimal set we have 
H{U X*, y*, *Λ ρ*) = constant 
(6.4.14) 
(6.4.15) 
(6.4.16) 
H(Ty X*, y*, u*,p*) = 0 
(6.4.17) 
H(t9x*9 
y*, *Λρ*) = ο. 
The parameters Pi(T) and p2(T) are constants of integration. 
(6.4.18)

--- Page 250 ---

249 
Along an optimal trajectory the optimal control u*(t) must minimize H(X*, 
Y*, u, p*) with respect to all admissible controls. It follows that 
u\t) 
= 0 
only if di/(X*, Y*, u*, p*)/du* > 0, 
(6.4.19) 
u*(t) = b 
only if dH(X*9 Y*, M*, p*)/3w* < 0. 
(6.4.20) 
If during the subinterval [tu 
t2] of [0, Τ ] , 
bH(X*9 Y*, u*9p*)/bu* = p0-plX=09 
(6.4.21) 
then u*(t) is a singular control. This is because u appears linearly in the 
Hamiltonian H. 
For clarity and convenience, let the total derivative with respect to t be 
denoted by D or a dot. When eq. (6.4.21) is differentiated totally with res­
pect to i, we get 
O(bH/bu) = -pxX 
- pxX. 
(6.4.22) 
Employing (6.4.8), (6.4.14) and (6.4.22), we get 
O(bH/bu\ 
= X(cp0 
+ p2Y) 
= 0. 
(6.4.23) 
As X > 0 we deduce that 
cp0 + P2Y=0. 
(6.4.24) 
Similarly, we get 
D
2(bH/bu) 
= p2XY(X 
- 1) = 0. 
(6.4.25) 
But X > 0, Y > 0 and Χ Φ 1. It follows that p2 = 0. Using (6.2.24) we deduce 
that po = 0. Employing (6.4.21) it follows that px = 0. Thus (p 0, Pi, p 2 ) = 0. 
But the vector (p 0, Pi, p2) must not be equal to a zero vector. Hence there is 
no optimal singular control. 
The precise switching sequence is determined numerically. This is done by 
integrating the equations in (6.4.8), (6.4.14) and (6.4.15) in reverse time; and 
using the optimality conditions (6.4.19) and (6.4.20); and setting p 0 = 1. The 
"initial" conditions in this reverse time integration are X(T) = 1, Y(T) = 1. 
Furthermore pi(T),P2(T), and Τ are constants of integration. Each choice of 
the set of constants of integration, {Τ, Ρι(Γ), p2(T)}, 
generates an initial state 
(X0, Y 0 ) at t = 0. 
Strictly speaking, we cannot conclude that the solutions given in Fig.6.4.1 
are optimal because we have not used sufficiency theorems to establish that 
the solutions are indeed optimal. We are only justified in saying that these 
solutions satisfy all the necessary conditions for optimality. Thus the usage of 
the phrase "optimal control
9' 
in this section should be understood 
in this 
limited 
sense. 
Example 6.4.3. Let u(t) be the rate of application of a nonresidual chemical

--- Page 251 ---

250 
Y - 
Y(X-l)-e2uY. 
which kills the prey and the predators. Let Κ = 1 in (6.4.3). In brief, the 
optimal control problem is as follows: 
System : 
X = X(l — Y) — etuX, 
Initially: 
X(0) = X0, 
Y(0) = Y0 
Constraint: 
0 < u < b. 
Terminally: 
X(T) = 1, 
Y(T) = 1. 
(6.4.26) 
(6.4.27) 
(6.4.28) 
(6.4.29) 
Objective: 
m in 
Λ 
j (cX+ 
u)dt. 
(6.4.30) 
If ex = 1 and e2 = 0, the problem reduces to that in Example 6.4.1. If e, 
= 0 and e2 = 1, the chemical kills only the predators. Using arguments similar 
to those in Example 6.4.2 we can show that there is no optimal singular 
control. Thus the optimal program for a given initial state is a combination of 
u = 0 arcs and u = b arcs. This has to be determined numerically. 
The optimal feedback control policy for this problem is displayed in 
Fig. 6.4.2. The curves AP, PS and SB are switching curves. Typically, if the 
initial state is at G j the system is allowed to move with null control until the 
solution intersects the switching curve PS. At the point of intersection, the 
control is switched on and maintained at the maximum rate until the state of 
the system reaches P. If the initial state is at G 2 the control variable is immedi­
ately applied at the maximum level until the solution intersects the switching 
curve AP. There the control is switched off until the solution intersects the 
switching curve PS. The control variable is then applied again at maximum 
P R E Y 
Fig.6.4.2. Optimal control of a prey—predator system using a chemical which kills the 
predator. - » denotes a w m a x trajectory, and -* denotes a u = 0 trajectory.

--- Page 252 ---

251 
until the state of the system reaches P. At Ρ the control variable is switched 
off. 
Suppose the chemical kills the prey and the predator. In this case ex and e2 
are positive. If ex > e2 the is a locally optimal singular extremal which satis­
fies the equation 
cX(e\ + exe2 + e\Y-exe2Y) 
+ exX(l 
- Y) + e2Y(X 
- 1) = 0. 
(6.4.31) 
This singular extremal passes through the origin (0, 0). If c = 0 it also passes 
through the target (1, 1); and the corresponding singular control is 
u*(t) = X*(t)/e2 
- Y*{t)lex. 
(6.4.32) 
The full significance of this singular remains to be unravelled. For simplicity 
we ignore the singular control and use only the optimality conditions for u 
= 0 and u = b. From the practical point of view, it is easier to use a combina­
tion of u = 0 and u = b than a combination of u = 0, u = b and singular 
control. 
In Fig. 6.4.3 the optimal feedback control policy is displayed for the par­
ameters ex = e2 = 1, b = 1. In this case there is no optimal singular control. The 
arcs AP and BP are switching curves. Typically, if the state of the system is at 
Gi the system is allowed to evolve under null control until the solution inter­
sects the switching curve PB. At the point of intersection the maximum con­
trol is switched on until the state of the system reaches the target P. If the 
initial state of the system is at G 2 the maximum control is switched on until 
the solution intersects the switching curve AP where it is switched off until 
the solution intersects the switching curve PB. It is then driven by u = b until 
it reaches the target Ρ at (1, 1). 
Fig.6.4.3. Optimal control of a prey—predator system using a chemical which kills prey 
and predator. -~ denotes a w m a x trajectory, and -* denotes a u = 0 trajectory.

--- Page 253 ---

252 
Example 6.4.4. Let the control variable u(t) be the rate of release of preys 
(pests) which are bred in laboratories or are imported. Suppose a model of 
the control prey—predator system is 
X = X(1- 
Y) + u, 
7 = Y(X-l). 
(6.4.33) 
At any time t, let us assume that the populations can be measured accur­
ately. This gives the initial conditions, 
X(0) = X0, 
Y(0)= 
Yo, 
(6.4.34) 
where X0 and Y0 are measurements of the populations at time t = 0. 
Because of limitations of facilities and manpower, let u(t) satisfy the con­
straint 
0 < u(t)< 
b 
(6.4.35) 
where b is a constant. 
Let the target of the optimal control problem be Ρ = (1, 1). Thus at the 
terminal time, 
X{T) = 1, 
Y(T) = 1. 
(6.4.36) 
We assume that Τ is unconstrained. 
The problem is to find an admissible control function w*(£) which drives 
the system from (X0, Yo) to the target at Ρ and which minimizes the function 
τ 
J= 
J (cX+ 
II)df. 
(6.4.37) 
0 
This function is a weighted sum of a measure of pest damage and the cost of 
using the control variable. 
It can be shown that the optimal control program is some combination of 
u = 0 and u = b. The exact sequence of u = 0 and u = b has to be determined 
numerically. 
The optimal feedback control is displayed in Fig.6.4.4. The arcs AP, PS 
and SB are switching curves. Typically, if Gi is the initial state of the system 
the control is switched on at maximum rate until the solution intersects AP. 
At the point of intersection the control is switched off until the solution 
intersects the switching curve PS. There the control variable is switched on at 
maximum rate until the state of the system reaches the target P. If the initial 
state is at G 2 the system is allowed to evolve under its own natural dynamics 
until the solution intersects the switching curve PS. There the control u = b 
is switched on until the state of the system reaches the target P. At Ρ the 
control variable is switched off and theoretically it will remain there because 
Ρ is an equilibrium of the natural dynamics. In practice, the state of the system

--- Page 254 ---

253 
ce 
ο 
< 
Û 
LU 
OC 
Û. 
B 
I 
I 
0 
A 
2 
P R E Y 
Fig.6.4.4. Optimal control of a prey—predator system by releasing pests. 
denotes a 
"max trajectory, and 
denotes a u = 0 trajectory. 
has to be maintained at the target by using small amounts of control variables. 
It is best to consider this question of stabilizing the system at a target as a 
separate problem (Vincent et al., 1977; Vincent and Skowronski, 1979). 
Initially, the idea that it may be desirable to release some pests at the right 
time in order to maintain the pest population at a low level may sound absurd. 
However, the reason for doing so is to feed the predators during a period when 
their numbers are decreasing. By doing this the predator population is pre-
vented from falling too low. Subsequently, when the pest population begins 
to build up there will be enough predators around to suppress it. 
Example 6.4.5. Let u(t) be the rate of release of predators which are bred in 
laboratories or are imported. Suppose a model of the control pest—predator 
system is 
X = X ( 1 - Y ) , 
y = Y(x-i) 
+ u. 
(6.4.38) 
At time t = 0, let 
X(0) = X0, 
Y(0) = Y0; 
and let u(t) satisfy the constraint 
0 < u(t) < b 
(6.4.39) 
(6.4.40) 
where b is a constant. 
Let Τ be unconstrained; and let the target of the control problem be

--- Page 255 ---

254 
Fig.6.4.5. Optimal control of a prey—predator system by releasing predators. 
denotes a 
"max trajectory, and -+ denotes a u = 0 trajectory. 
X(T) = 1, 
Υ(Τ) = 1. 
(6.4.41) 
Suppose it is desirable (i) to drive the system quickly to the target; (ii) to 
have a low pest damage; and (iii) to have a low cost in using the control vari­
able. To take these objectives into account we use the weighted performance 
index 
τ 
</=T + J ( d X + c 2 u ) d t 
(6.4.42) 
ο 
where cx and c 2 are nonnegative constants. The problem is to choose an ad­
missible u*(i) which will drive the system from (X0, Y0) to P, and which mini­
mizes the performance index. 
The optimal feedback control pojicy for this problem when b is relatively 
large (b = 0.5) is given in Fig.6.4.5. The curves BP and PA are switching curves. 
Typically, if Gx is the initial state the system moves under the control u = b 
until the solution intersects the switching curve PA. There the control is 
switched off until the solution intersects the switching curve BP. It is then 
driven to Ρ along BP by using u = b. At Ρ the control is switched off. 
Biologically this policy is as expected. The predators are released when the 
pest population begins to increase. This reduces the pest immediately and also 
prevents subsequent large increases in the pest population. 
To illustrate the application of optimal control theory we shall examine 
some of the mathematical details in the solution of the optimal control prob­
lem given in (6.4.38) to (6.4.42). 
By definition, the Hamiltonian function is

--- Page 256 ---

255 
H(t, X, Y, κ, p) = p0(ClX 
+ c2u) + ρχΧ(1 
- Y) + p 2 [ X ( X - 1) + u] 
(6.4.43) 
where p0 = constant > 0. 
The costate equations are 
Pi = ~bH/bX = - p o d - P i ( l - Y) ~ p
2 Y, 
(6.4.44) 
p 2 = - 3 # / 3 Y = PlX-p2(X 
- 1). 
(6.4.45) 
Let (X*, Y*, u*, p*) be an optimal solution. The Hamiltonian function in 
(6.4.43) does not contain t explicitly. Using the condition dH/dt = bH/bt we 
get 
i/(X*, Y*, u\ p*) = constant 
(6.4.46) 
for all values of t in [0, T ] . The transversality condition at t = Τ gives 
if[X*(T), y*(T), u*(T),p*(T)] + 1 = 0. 
(6.4.47) 
Hence the constant in (6.4.46) is equal to —1. The values of Pi(T) and p2(T) 
are constants of integration. These and the value of Τ are chosen so that the 
optimal solution in reverse time passes through the initial state (X0, Y0) at 
time t = 0. 
Along an optimal trajectory the optimal control u*(t) must minimize H(X*, 
y*, uy p*) with respect to all admissible controls. It follows that 
u\t) 
= 0 
only if 3i/(X*, Y*, u*, p*)/bu* > 0, 
(6.4.48) 
u\t) 
= b 
only if bH(X*, Y*9 u*, p*)/3w* < 0. 
(6.4.49) 
If on a subinterval [tut2] 
of [0, Τ ] , 
bH(X*9 Y*, w*, P*)/3M* = p 0 c + p 2 = 0, 
(6.4.50) 
then u*(t) is a singular control. This is because the control variable appears 
linearly in the Hamiltonian H. 
We shall denote the total derivative with respect to t by D or by a dot. 
Differentiate (6.4.50) totally with respect to i; we get 
D(bH/bu) = p 2 = pxX - p2(X - 1) = 0, 
(6.4.51) 
O
2(bH/bu) 
= ρ , Χ + pxX -p2(X 
- 1) - p
2 X = ( c 2 - c^PoX = 0. 
(6.4.52) 
If Po > 1 this is satisfied only if cx = c2. This is a very special case. For cx Φ c2 
there is no optimal singular control; in particular, if cx = 0 and c2 = 2, there is 
no optimal singular control. Hence the optimal program is a combination of 
u = 0 and u = b; this has to be determined numerically. 
6.5. OPTIMAL C O N T R O L O F EPIDEMICS F O R P E S T C O N T R O L 
The use of bacteria, fungi and viruses is potentially one of the most impor­
tant methods in pest control. For example, Bacillus thuringiensis, which is

--- Page 257 ---

256 
available in commercial preparations, is used in the control of a large number 
of pests (Falcon, 1971; Burges and Hussey, 1971). An advantage of using 
insect pathogens is that they are safe to man and are usually safe to bene­
ficial insects. 
There is a vast amount of literature on the applications of microbial diseases 
to suppress pests (Tanada, 1964; Fenner and Ratcliffe, 1965; Burges and 
Hussey, 1971; Davis et al., 1976; Falcon, 1976). But there are only a few 
papers on mathematical models of the dynamics of microbial diseases in pest 
control (Anderson and May, 1978; Goh et al., 1980). On the other hand there 
are many mathematical models of infectious diseases of man (Dietz, 1967; 
Ludwig, 1974; Waltman, 1974; Bailey, 1975; Wickwire, 1977). 
At present, insect pathogens are used in two ways. In the first method, a 
small amount of pathogen is introduced into a pest population with the 
expectation that it will generate an epidemic and that it will subsequently be 
endemic. The success of this approach depends on the survival of the microbes 
which in turn depends on environmental factors, such as temperature, humi­
dity and crop conditions. In the second method, an insect pathogen is used 
like a nonresidual chemical insecticide. In this case, it is applied whenever a 
pest population is at an economically significant level for pest damage and 
there is no expectation that the pathogen will survive for an appreciable 
period. 
We shall examine the use of pathogens in a more flexible manner. We are 
especially interested in the situation when environmental conditions do not 
allow a significant epidemic to be generated if only a small amount of path­
ogen is introduced into a pest population on a once-and-for-all basis. Until 
more realistic models are available, we shall use the simplest model of an 
epidemic. 
At time t, let S(t) be the number of susceptible insects, and I(t) be the 
number of infective insects. A model of an epidemic 
S = 
-rSI9 
i=rSI-wI, 
(6.5.1) 
where r and w are positive constants. In practice, the parameters are functions 
of the humidity and the physiological time which is some measure of the 
period in which the temperature is above a certain threshold (Clark et al., 
1967; Gilbert et al., 1976). Insects are cold blooded animals; below a certain 
species specific temperature their metabolism slows down considerably. The 
parameter w is the death rate of the insect population, and r is the infection 
rate. 
Let S(t) denote the number of insects in the larvae and adult stages. In 
each generation there is a burst of new larvae and adults. This resets the initial 
value S(0) for each generation in an insect population with nonoverlapping 
generations. Thus the time variable t is on a fast time scale. It is appropriate 
for describing processes within a generation.

--- Page 258 ---

257 
If eq. (6.5.1) is written in the form, 
S = - r S J , 
I = rI(S-w/r), 
(6.5.2) 
we deduce immediately that S and I decrease monotonically if 0 < S < w/r. 
Therefore the infection dies out rapidly if the initial state (S(0), 7(0) ) satisfies 
the conditions 1(0) > 0 and 0 < S(0) < w/r. This is a well known threshold 
phenomenon of an epidemic. If (S(0), 1(0)) satisfies the conditions 1(0) > 0 
and S(0) > w/r, then I(t) will increase for an initial period until S(t) = w/r. 
The solutions of model (6.5.1) for various initial values are shown in 
Fig.6.5.1. This figure could be used to predict the final outcome of an 
epidemic if only a small amount of pathogen is released into the pest popula­
tion. For example, if S(0) = 2.56(u;/r) and 1(0) = 0.0001, thenS(T) + 0.256(u;/r) 
and I(T) 
0 as T-> «>. Again, if S(0) = A(w/r) and 1(0) = 0.0001, then S(T) 
-> 0.08(w/r) 
and I(T) -+ 0 as Τ -> «>. 
Suppose pests which are bred in laboratories or which have been captured 
from the field are infected by a pathogen and are then released during the 
brief period [—At, 0] where Δί is a small positive number. This means that 
we can manipulate the initial value 1(0). Thus 1(0) is a control parameter. 
Given a pest population S(0), we can use Fig. 6.5.1 to compute the least value 
of 1(0) which is needed to generate an epidemic so that the pest population at 
the end of an epidemic will be below a desirable level. In other words, we can 
use Fig.6.5.1 to compute the least value of 1(0) so that the limit of S(T) as 
Τ -> oo win be below a desirable level. 
For example, let S(°°) denote the limit of S(T) as Τ -> °°. Suppose it is 
0 
1 S U S C E P T I B L E S 
Fig.6.5.1. Solutions of a simple epidemic.

--- Page 259 ---

258 
desirable that S ( ~ ) should be below 0.1(u;/r). If S(0) = 3.26(u;/r), then 1(0) 
must be greater than 0.325(w/r) in order to generate an epidemic which will 
reduce the pest population to below 
0.1(w/r). 
We shall examine two optimal control problems in the management of an 
epidemic to control a pest population. In the first problem the control variable 
is the rate of release of infected pests; and the control problem is to drive the 
pest population below a certain level with a minimum use of the control vari­
able. In the second problem the pathogen is used in the same way as a non-
residual chemical pesticide. In this case the control variable is the rate of 
release of the pathogen. The control problem is to drive the pest population 
below a given pest level and to do so in a manner which minimizes a weighted 
sum of the cost of using the control and the time it takes to drive the system 
to the target. 
Example 6.5.1. Let u(t) be the rate of pests infected in a laboratory. Suppose 
a model of the epidemic under this control variable is 
S = - r S J , 
i = rSI-wI+ 
ii. 
(6.5.3) 
At time t = 0, let S0 and J
0 be the measured values of S and /. Thus we have 
S(0) = S 0, 
/ ( 0 ) = / 0 . 
(6.5.4) 
Let us assume that the control variable is bounded from above by a constant. 
This limitation on the control variable is due to a lack of facilities and man­
power. Hence we have 
0 < u(t)< 
b 
(6.5.5) 
where b is a constant. Let u(t) be piecewise continuous. 
Let the control program be over the period [0, T] where Τ is uncon­
strained. In order that the pest population is below a certain level at the end 
of an epidemic, we shall impose the conditions, 
S(T)=d, 
I(T)>a, 
(6.5.6) 
where α is a positive constant. The value of d is specified so that the damage 
due to the pests is negligible at this level. 
The object is to choose an admissible function u(t) which drives the system 
from (.So, I0) to the target specified in (6.5.6); and which minimizes the objec­
tive function 
τ 
J= j uat. 
(6.5.7) 
Let ABC be the u = 0 solution of (6.5.3) which passes through the point

--- Page 260 ---

259 
(S, Ι) = (d, à). Below ABC the cost of driving the system from a given point 
to another is independent of the path of integration. Therefore an optimal 
feedback policy is u = b at a point below ABC; and is u = 0 at a point on ABC, 
or at a point above ABC. 
We can show that the generalized Legendre condition is satisfied in an 
indeterminate manner by singular extremals below ABC. This suggests that the 
cost of control below ABC is independent of the path of integration. We shall 
establish that this is indeed the case. Let (Su h) and (S 2, I2) be any two given 
points below ABC; and let tx and t2 be the corresponding values of t. Using 
(6.5.3) and (6.5.7), we get 
J u d i = J
2d/-h ( i _ J | ) d S . 
(6.5.8) 
Ί 
S I 
The integral on the right hand side of (6.5.8) is independent of the path of 
integration. 
Example 6.5.2. Let u(t) be the rate of application of a pathogen. We shall 
assume that at moderate levels of u(t) the rate at which a pest is infected by 
the pathogen is uS. Thus a model of an epidemic which is modified by the 
application of the pathogen is 
S = —rSI — uS, 
I=rSI-wI+ 
uS. 
(6.5.9) 
For reasons similar to those given in Example 6.5.1, the constraints in the 
optimal control problem are 
S(0) = S o, 
/ ( 0 ) = / 0 , 
(6.5.10) 
S(T) = d, 
I(T)>a, 
(6.5.11) 
0 < u(t)< 
b. 
(6.5.12) 
The problem is to choose an admissible control program u(t) which will 
drive the system from the initial state (S 0, / 0 ) to the target (6.5.11) so as to 
minimize the function 
τ 
J = d T + j c2udt 
(6.5.13) 
0 
where cx and c2 are nonnegative constants. Eq. (6.5.13) may be rewritten as 
1 
«/= J (c, + c 2u)di. 
(6.5.14)

--- Page 261 ---

260 
If Ci = 0 and c 2 = 1, then the optimal feedback policy is similar to that in 
Example 6.5.1. Let ABC be the u = 0 trajectory of (6.5.9) which passes 
through the point (S, I) = (d, a). Below ABC the cost of the control program 
between any two given points is independent of the path of integration. 
Therefore, for an initial state below ABC, the optimal program could be any 
admissible control program which drives the state of the system to ABC. On 
and above ABC the optimal program is u = 0. 
We shall establish that the cost of control is independent of the path of 
integration if cx = 0. Let y = S + /. Eq. (6.5.9) is equivalent to 
y = —wi, 
i = r(y-I)I-wI+ 
u(y-I). 
(6.5.15) 
Using (6.5.15) we get 
/ "
d i = / ( ^ 7 )
+ f e - ( ^ ]
d y -
 
(6·
5·
16) 
The integral on the right hand side of (6.5.16) is independent of the path of 
integration. 
If Ci and c 2 are both positive, then the optimal control trajectory is a 
sequence of u - 0 arcs and u = b arcs. The exact sequence has to be computed 
numerically. Fig.6.5.2 gives the optimal feedback control policy for the case 
in which Ci ~ 0.05 and c 2 = 1.0. 
We shall establish that there is no optimal singular control if cx and c 2 are 
both positive. 
By definition, the Hamiltonian function is 
H = p0(cl 
+ c 2 w ) - p 1 ( r S / + uS)4- p2(rSI-wI+ 
uS). 
(6.5.17) 
The costate equations are 
ρλ = -bH/bS 
= (Pi - p
2 ) (rl + u), 
(6.5.18) 
p 2 = -bH/bI 
= P
l rS 4- p2(w- 
rS) 
(6.5.19) 
The terminal conditions (6.5.11) can be decomposed into two cases: 
(i) I(T) > a; and (ii) J(T) = a. In the first case the transversality conditions at 
t = Τ are p 2(T) = 0 and Η = 0. In the second case we have Η = 0 at t = T\ and 
p2(T) 
is a constant of integration. Given p 2(T), the condition Η = 0 gives 
Pi(T) = [Po(c! + c2u) + p2(rSI-wI+ 
uS)]/(rSI+ 
uS). 
(6.5.20) 
The time variable t does not appear explicitly in H. Using the equation 
dH/at = bH/bt, and the continuity of H, we get 
H[S9I,plyp2,u] 
= 0 
(6.5.21)

--- Page 262 ---

261 
Fig.6.5.2. Optimal control of an epidemic for pest control, 
denotes a u
m
a
x trajectory, 
and 
denotes a u = 0 trajectory. 
for all values of t in the period [0, T ] . 
Along a singular extremal we have 
bH/bu = C2P0 + (P2 —Pi)S = 0. 
(6.5.22) 
For the sake of clarity the total derivative with respect to time is denoted by 
D or by a dot. Using (6.5.18) and (6.5.19), we find that along an optimal 
singular extremal, we have 
O(bH/bu)= 
[pxrS 
+ p2(w-rS)]S 
= 0. 
(6.5.23) 
As S Φ 0 we have 
PirS + p2(w-rS) 
= 0. 
(6.5.24) 
Using (6.5.21) and (6.5.22), we get 
H = p0cx 
- [pirS + p2(w 
- r S ) ] / = 0. 
(6.5.25) 
Eqs. (6.5.24) and (6.5.25) and the assumption that cx is positive give p0 = 0. 
From (6.5.22) it follows that px = p2. Substitutingp x = p2 into (6.5.24), we 
get p2 = 0. Therefore p0 = 0, px = 0 and p2 = 0. But (p0> Pu Pi) must not be a 
zero vector. Hence there is no optimal singular control. We conclude that the 
optimal trajectory from a given initial state is a sequence of u = 0 arcs and 
u = b arcs.

--- Page 263 ---

262 
6.6. OPTIMAL M A N A G E M E N T O F G R E E N H O U S E C R O P S 
In desert areas the major limiting factor for crops is water. To conserve it, 
vegetable crops are grown in greenhouses. The temperature in this type of 
greenhouse is lowered at night so that food made by the plants during the 
day is not entirely lost during the night. Associated with the greenhouse is a 
nursery used to produce seedlings which are ready for transplanting after a 
fixed time interval. Since it is relatively cheap to grow the seedlings, the costs 
in doing so are ignored in the subsequent analysis. After transplanting the 
seedlings grow to maturity and produce fruit. 
The quantity of fruit produced per week varies considerably with the lapse 
of time. It declines after a number of weeks. Thus the manager has to decide 
when to terminate the current crop and to plant the next one. If the crop is 
terminated too soon, too much time will have been devoted to unproductive 
vegetative plant growth. On the other hand, if the crop is not terminated soon 
enough, too much time will have been devoted to perpetuating old plants 
which have falling productivity rates (see Goh et al., 1975). 
The determination of an optimal crop length falls in the class of problems 
known as the "replacement problem". Similar problems occur in the produc­
tion of milk (Smith, 1973), eggs and timber (Gaffney, 1960; Pease, 1967; 
Clark, 1976 a; Dillon, 1977). Some of the papers on the replacement problem 
make use of dynamic programming (Faris, 1960; Burt and Allison, 1963); 
Schreuder, 1968; Smith, 1973). 
A common assumption in the analysis of the replacement problem is that a 
predictive and deterministic model of the value function or the cumulative 
production function of a crop is available. This assumption is not satisfied by 
the tomato crop in a greenhouse. Over a fixed period of 26 weeks, and under 
normal conditions, the cumulative production of a tomato crop in a green­
house in Arizona can vary between 80 000 lbs and 170 000 lbs per acre. Be­
cause of this variability we shall develop an algorithm based on past and 
current production data and current production trends. This extends the 
Faustmann algorithm which is based on a deterministic model of the cumula­
tive production function. 
For simplicity let us consider the case in which (i) the price for the pro­
duce is constant; (ii) the market is large and will accept all the production of 
the crop; and (iii) there is a single greenhouse. After the initial analysis we 
shall discuss how these assumptions can be relaxed. 
Firstly it is necessary to build a production model of an average crop. 
Suppose that production data from Ν crops of tomatoes in a greenhouse are 
available. Let t be the number of weeks from the date the seedlings are 
planted. At t weeks from the transplant date, let Yn(t) be the weekly produc­
tion per acre from the nth crop. By definition, the weekly production per unit 
area for the average crop at t weeks from the transplant date is

--- Page 264 ---

263 
Fig.6.6.1. A graphical method for computing the optimal length of an average crop. 
YW
=N 
I 
W 
(6.6.1) 
η = 1 
Let S(t) be the cumulative yield per acre for the average crop at t weeks 
from the transplant date. By definition, 
t 
S(t) = 2 Y(i)- 
(6.6.2) 
i = 0 
The average production per week from a greenhouse at time t is 
R(t) = S(t)/t. 
(6.6.3) 
This is the slope of the line which joins the origin to a point (£, S(t)) on the 
graph of S(t). In most replacement problems the function S(t) is a sigmoid 
function such that R(t) has a unique maximum at t - £*. According to the 
Faustmann algorithm, t* is the optimal crop length (Gaffney, 1960; Clark, 
1976 a). 
Instead of being weekly production data, Y(t) could denote the net weekly 
revenue per acre from an average crop at t weeks from the transplant date. 
This would be one way of handling the variation in the costs of maintaining 
and harvesting the crop as t varies. In this case S(t) would denote the net 
cumulative revenue per acre from the crop at t weeks from the transplant 
date (Dillon, 1977, p.72). 
We shall now examine some ways to overcome the large and unpredictable 
variations in the total (cumulative) yield from different crops. The main

--- Page 265 ---

264 
thrust of our approach is to make decisions based on the latest available 
information on the current crop. 
Let Y°(t) denote the weekly production of the current crop at t weeks 
from the transplant date. Let S
c(t) be the cumulative yield per acre of the 
current crop at t weeks from the transplant date. The average yield per acre 
from the current crop at t weeks from the transplant date is denoted by 
R
c(t) 
= 
S
c(t)/t. 
By examining the unripened fruits on the plants it is possible to predict a 
few weeks ahead of time the value of 
Thus we can estimate a few weeks 
ahead of time the week t'c which will maximize the average yield per acre for 
the current crop. With this information the following scheduling algorithm 
may be used: (i) if R
c(t'c) 
is significantly smaller than R(t*) the current crop 
should be terminated immediately; (ii) if R
c(t') 
is approximately equal to 
R(t*) the current crop should be terminated at t = i*; (iii) if R
c(t'c) 
is signifi-
cantly greater than R(t*), the crop should be prolonged beyond t' until fc 
where Y
c(t
e
c) is approximately equal to Ä(i*), or until t"c where R
C(Q 
= #(£*). 
The rationale behind this feedback algorithm is as follows. In case (i) we 
are comparing the current crop with an average crop. If the current crop is 
projected to be bad, i.e. R
c(t'c) 
< R(t*), we are wasting our time with it. If a 
new crop is started there is a good chance that the average yield per week, 
including the weeks required for a new crop to mature, will be greater. Fur-
ther extending the crop until t = t'c gives an immediate short-term advantage, 
but it lowers the total production in the long run. 
In case (ii) the current crop is approximately average. Since t* is the best 
time to terminate an average crop we should terminate the current crop 
accordingly, i.e. at t = t*. 
In case (iii) the current crop is projected to be better than the average crop 
as R
c(t'c) 
> R(t*). Thus the chances are that if we terminate the crop at t'c, the 
maximum average production per week of the next crop R(t*) will not be as 
large as R
c(t'c). 
It is desirable to prolong the current crop. In the case of 
tomatoes, the weekly production function Y
c(t) 
is very erratic as t varies. It 
depends to some extent on the skill of the labour that harvests the fruit. Thus 
it is not always a good idea to terminate a crop when the weekly production 
Y°(t
e
c) for the current crop falls below R(t*). Here, the manager must use his 
own judgement; from observations of the unripened fruit on the plants he 
should estimate ζ where R
c(t"c) = R(t*). If t
e
c is close to ζ and Y
c(t) 
R{t*), 
then it is desirable to terminate the crop. 
We shall now relax some of the assumptions of the above analysis. In the 
real world the price of tomatoes varies considerably during the year. For the 
southern states of U.S.A. the price of tomatoes is depressed in May and from 
the second half of July to the end of October because of an influx into the 
market of (i) tomatoes which are locally grown in open fields; and (ii) 
tomatoes which are imported from Mexico. In practice it is desirable to sell 
a significant portion of the produce by contract. This requires that the weekly

--- Page 266 ---

265 
production throughout the year must be greater than a minimum level. On the 
other hand, an upper limit should be arbitrarily imposed on the total weekly 
production so as not to saturate the market and cause the price of tomatoes 
to fall below economically viable levels. 
These complications in the real world can be successfully accomodated by 
partitioning a greenhouse into several sections so that different stages of 
maturity of the crop can be achieved simultaneously. If the previously stated 
algorithm is used in each section independently, then the total production in 
the long run is maximized; this is independent of the number of partitions 
made. We can make as many partitions as we like without significantly alter­
ing the long-term maximum production. Naturally the more partitions there 
are the "smoother" the total weekly production curve for a group of green­
houses will be. 
Let G(s) denote the total weekly production from a group of greenhouses 
at time s. The ability to partition a greenhouse without significantly altering 
the maximum long-term total production can be used to shape the function 
G(s) so that it satisfies the maximum and minimum production constraints, 
and has "peaks" which coincide with the peaks in the market price for the 
produce. This part of the analysis can be carried out very simply by simula­
tions on a computer. 
The results of this analysis have been successfully applied to the manage­
ment of the production of tomatoes from 10 acres of greenhouses in Tucson, 
Ariz. (Goh et al., 1975). 
An important lesson from this real life problem is that it is worthwhile to 
reduce a problem to its barest essentials in the initial analysis. The results of 
the initial analysis can provide considerable insight into the solution of the 
problem in the real world. These insights can then be used in a computer 
simulation model which incorporates all those complications which are 
thought to be important. If we begin with a complex computer simulation 
model it is difficult to know how to extract useful information from the 
model. 
C H A P T E R 6: S E L E C T E D R E F E R E N C E S 
Pest 
management 
De Bach ( 1 9 6 4 ) ; Becker ( 1 9 7 0 ) ; Geier ( 1 9 7 0 ) ; Hussey and Bravenboer ( 1 9 7 1 ) ; Jacquette 
( 1 9 7 2 ) ; Goh et al. ( 1 9 7 4 a ) ; Giese et al. ( 1 9 7 5 ) ; Vincent ( 1 9 7 5 ) ; Corbet and Smith ( 1 9 7 6 ) ; 
Huffaker and Messenger ( 1 9 7 6 ) ; Ruesink ( 1 9 7 6 ) ; Tummala et al. ( 1 9 7 6 ) ; Cohen ( 1 9 7 7 ) ; 
Conway ( 1 9 7 7 ) ; Shoemaker ( 1 9 7 7 ) ; Tummala and Haynes ( 1 9 7 7 ) ; Ludwig et al. ( 1 9 7 8 ) . 
Stability concepts in pest 
control 
Hassell and May ( 1 9 7 3 ) ; Diamond ( 1 9 7 4 ) ; Oaten and Murdoch ( 1 9 7 5 ) ; Beddington et al.

--- Page 267 ---

266 
( 1 9 7 6 ) ; Hassell et al. ( 1 9 7 6 a, 1 9 7 7 ) ; Freedman ( 1 9 7 6 ) ; Murdoch ( 1 9 7 7 ) ; Anderson and 
May ( 1 9 7 8 ) ; May and Anderson ( 1 9 7 8 ) . 
Graphical analysis 
Cunningham ( 1 9 5 8 ) ; Rosenzweig and MacArthur ( 1 9 6 3 ) ; Strebel and Goel ( 1 9 7 3 ) ; Goh et 
al. ( 1 9 7 4 b); Noy-Meir ( 1 9 7 5 , 1 9 7 8 ) ; Freedman ( 1 9 7 6 ) ; Goh ( 1 9 7 9 a). 
Optimal control of pests 
Becker ( 1 9 7 0 ) ; Mann ( 1 9 7 1 ) ; Jacquette ( 1 9 7 2 ) ; Shoemaker ( 1 9 7 3 , 1 9 7 7 ) ; Goh et al. 
( 1 9 7 4 a, b ) ; Conway ( 1 9 7 7 ) .

--- Page 268 ---

267 
REFERENCES 
Aggarwal, J . K . , 1 9 7 2 . Notes on Nonlinear Systems. Van Nostrand Rheinhold, New Y o r k , 
N.Y., 2 7 9 p p . 
Agnew, T.T., 1 9 7 9 . Optimal exploitation of a fishery employing a non-linear harvesting 
function. Ecol. Modelling, 6 : 4 7 — 5 7 . 
Albrecht, F . , Gatzke, H., Haddad, A. and Wax, Ν., 1 9 7 6 . On control o f certain interacting 
populations. J . Math. Anal. Appl., 5 3 : 5 7 8 — 6 0 3 . 
Allen, K.R., 1 9 5 3 . A method for computing the optimum size limit for a fishery. Nature, 
1 7 2 : 2 1 0 . 
Allen, K.R., 1 9 7 3 . Analysis of stock-recruitment relations in Antarctic fin whales. Rapp. 
P.V. Reun. Cons. Int. Explor. Mer, 1 6 4 : 1 3 2 — 1 3 7 . 
Allen, K.R. and Kirwood, G.P., 1 9 7 7 . Were 1 9 4 6 Sperm Whale Stocks at the Unexploited 
Level? CSIRO Div. Fish, and Oceanogr., Rep. No. 8 7 . 
Anderson, L . G . , 1 9 7 7 . The Economics of Fisheries Management. The Johns Hopkins Univ. 
Press, Baltimore, Md., 2 1 4 p p . 
Anderson, R.M. and May, R.M., 1 9 7 8 . Regulation and stability of host—parasite popu­
lation interactions. I. Regulatory Processes. J . Anim. Ecol., 4 7 : 2 1 9 — 2 4 7 . 
Annual Reports of the International Whaling Commission, Cambridge, U.K. 
Araki, M. and Kondo, B . , 1 9 7 2 . Stability and transient behavior of composite nonlinear 
systems. I E E E Trans. Autom. Control, 1 7 : 5 3 7 — 5 4 1 . 
Arrow, K . J . and Hahn, F.H., 1 9 7 1 . General Competitive Analysis. Holden-Day, San 
Francisco, Calif., 4 5 2 p p . 
Arrow, K . J . , Block, H.D. and Hurwicz, L . , 1 9 5 9 . On the stability of the competitive equi­
librium, II. Econometrica, 2 7 : 8 2 — 1 0 9 . 
Ashkenazi, M. and Othmer, H.G., 1 9 7 8 . Spatial patterns in coupled biochemical oscillators. 
J . Math. Biol., 5 : 3 0 5 — 3 5 0 . 
Astrom, K . J . , 1 9 7 0 . Introduction t o Stochastic Control Theory. Academic Press, New 
Y o r k , N.Y., 2 9 9 p p . 
Auslander, D., Oster, G. and Huffaker, C.B., 1 9 7 4 . Dynamics of interacting populations. 
J . Franklin Inst., 2 9 7 : 3 4 5 — 3 7 6 . 
Bailey, N.T.J., 1 9 7 5 . The Mathematical Theory of Infectious Diseases and its Applications. 
Griffin, London, 4 1 3 p p . 
Banks, H.T., 1 9 7 5 . Modelling and control in the biomedical sciences. In: S.A. Levin 
(Editor), Lecture Notes in Biomathematics, Vol. 6. Springer-Verlag, Berlin, pp. 1—114. 
Barbashin, E.A. and Krasovskii, N.N., 1 9 5 2 . On the stability of a motion in the large. 
Dokl. Akad. Nauk. SSSR, 8 6 : 4 5 3 — 4 5 6 . 
Barnett, S., 1 9 7 5 . Introduction to Mathematical Control Theory. Clarendon Press, Oxford, 
2 6 4 p p . 
Becker, N.G., 1 9 7 0 . Control of a pest population. Biometrics, 2 6 : 3 6 5 — 3 7 5 . 
Beddington, J . R . , 1 9 7 8 . On the dynamics of Sei whales under exploitation. Annu. Rep. 
Int. Whaling Comm., 2 8 : 1 6 9 — 1 7 2 .

--- Page 269 ---

268 
Beddington, J . R . and May, R.M., 1 9 7 7 . Harvesting natural populations in a randomly 
fluctuating 
environment. Science, 1 9 7 : 4 6 3 — 4 6 5 . 
Beddington, J . R . and Taylor, D.B., 1 9 7 3 . Optimum age specific harvesting of a population. 
Biometrics, 2 9 : 8 0 1 — 8 0 9 . 
Beddington, J . R . , Free, C.A. and Lawton, J . H . , 1 9 7 5 . Dynamic complexity in p r e d a t o r -
prey models framed in difference equations. Nature, 2 5 5 : 5 8 — 6 0 . 
Beddington, J . R . , Free, C.A. and Lawton, J . H . , 1 9 7 6 . Concepts of stability and resilience 
in predator—prey models. J . Anim. Ecol., 4 5 : 7 9 1 — 8 1 6 . 
Bell, D.J. and Jacobson, D.H., 1 9 7 5 . Singular Control Problems. Academic Press, New 
York, N.Y., 1 9 0 p p . 
Bellman, R . E . , 1 9 5 7 . Dynamic Programming. Princeton University Press, Princeton, N.J., 
3 4 2 p p . 
Berkovitz, L.A., 1 9 6 1 . Variational methods of control and programming. J . Math. Anal. 
Appl., 3: 1 4 5 - 1 6 9 . 
Beverton, R.J.H. and Holt, S.J., 1 9 5 7 . On the dynamics of exploited fish populations. 
Fish. Invest. Minist. Agric. Fish. F o o d G.B. Ser. II Salmon Freshwater Fish., 1 9 : 1—533. 
Bliss, G.A., 1 9 4 6 . Lectures on the Calculus o f Variations. University of Chicago Press, 
Chicago, 111., 2 9 6 p p . 
Booth, D.E., 1 9 7 2 . A model for optimal salmon management. Fish. Bull., 7 0 : 4 9 7 — 5 0 7 . 
Botkin, D.B. and Sobel, M.J., 1 9 7 4 . The complexity o f ecosystem stability. In: S.A. Levin 
(Editor), Ecosystem Analysis and Prediction. SIAM, Philadelphia, Pa., pp. 1 4 4 — 1 5 0 . 
Brauer, F . , 1 9 7 7 . Stability of some population models with delay. Math. Biosci., 3 3 : 
3 4 5 - 3 5 8 . 
Brauer, F . , 1 9 7 9 . Asymptotic behavior of a class of differential-difference equations. T o 
appear. 
Brauer, F . and Sanchez, D.A., 1 9 7 5 . Constant rate population harvesting: equilibrium and 
stability. Theor. Popul. Biol., 8 : 1 2 — 3 0 . 
Brauer, F . , Soudack, A.C. and Jarosch, H.S., 1 9 7 6 . Stabilization and de^stabilization of 
predator—prey systems under harvesting and nutrient enrichment. Int. J . Control, 
2 3 : 5 5 3 - 5 7 3 . 
Bryson, A . E . and H o , Y . C . , 1 9 6 9 . Applied Optimal Control. Blaisdell, Waltham, Mass., 
4 8 1 pp. 
Bulmer, M.G., 1 9 7 6 . The theory of prey—predator oscillations. Theor. Popul. Biol., 
9: 1 3 7 - 1 5 0 . 
Burges, H.D. and Hussey, N.W., 1 9 7 1 . Microbial Control of Insects and Mites. Academic 
Press, New York, N.Y., 8 6 1 p p . 
Burt, O.R. and Allison, J . R . , 1 9 6 3 . F a r m management decisions with dynamic program­
ming. J . F a r m Econ., 4 5 : 1 2 1 — 1 3 6 . 
Canon, M.D., Cullum, C D . and Polak, E . , 1 9 7 0 . Theory of Optimal Control and 
Mathematical Programming. McGraw-Hill Book Company, New Y o r k , N.Y., 2 8 5 p p . 
Case, T.D. and Casten, R., 1 9 7 9 . Global stability and multiple domains of attraction in 
ecological systems. A m . Nat., in press. 
Caswell, H., 1 9 7 8 . Predator-mediated coexistence: a nonequilibrium model. Am. Nat., 
1 1 2 : 1 2 7 — 1 5 4 . 
Christiansen, F . B . and Fenchel. T.M., 1 9 7 7 . Theories of Populations in Biological Popu­
lations. Springer-Verlag, New York, N.Y., 1 4 4 p p . 
Clark, C.W., 1 9 7 1 . Economically optimal policies for the utilization of biologically 
renewable resources. Math. Biosci., 1 2 : 2 4 5 — 2 6 0 . 
Clark, C.W., 1 9 7 3 a. The economics o f over-exploitation. Science, 1 8 1 : 6 3 0 — 6 3 4 . 
Clark, C.W., 1 9 7 3 b. Profit maximization and the extinction of animal species. J . Polit. 
Econ., 8 1 : 9 5 0 - 9 6 1 . 
Clark, C.W., 1 9 7 6 a. Mathematical Bioeconomics: The optimal Management of Renew­
able Resources. Wiley-Interscience, New Y o r k , N.Y., 3 5 2 p p . 
Clark, C.W., 1 9 7 6 b. Delayed-recruitment model of population dynamics with an appli-

--- Page 270 ---

269 
cation to baleen whale population. J . Math. Biol., 3 : 3 8 1 — 3 9 2 . 
Clark, C.W., 1 9 7 8 . Restricted entry t o common-property fishery resources: a game-
theoretic analysis. Inst. Appl. Math, and Statist., Tech. Rep. No. 7 8 - 9 , Univ. o f British 
Columbia, pp. 1—31. 
Clark, C.W., 1 9 7 9 . Mathematical models in the economics o f renewable resources. SLAM 
Rev., 2 1 : 8 1 - 9 9 . 
Clark, C.W. and Mangel, M., 1 9 7 9 . Aggregation and fishery dynamics: a theoretical study 
of schooling and the purse-seine tuna fisheries. Fish. Bull., in press. 
Clark, C.W. and Munro, G.R., 1 9 7 8 . Renewable resource management and extinction. 
J . Environ. Econ. Manage., 5 : 1 9 8 — 2 0 5 . 
Clark, C.W., Clarke, F . H . and Munro, G.R., 1 9 7 9 . The optimal exploitation of renewable 
resource stocks: problems of irreversible investment. Econometrica, 4 7 : 2 5 — 4 7 . 
Clark, L . R . , Geier, P.W., Hughes, R.D. and Morris, R . F . , 1 9 6 7 . The Ecology of Insect 
Populations. Methuen, London, 2 3 2 p p . 
Cliff, E.M. and Vincent, T . L . , 1 9 7 3 . An optimal policy for a fish harvest. J . Optimization 
Theory Appl., 1 2 : 4 8 5 - 4 9 6 . 
Cohen, J . E . , 1 9 7 7 . Mathematical models o f schistosomiasis. Annu. Rev. Ecol. Syst., 
8 : 2 0 9 - 2 3 3 . 
Comins, H.N. and Blatt, W . E . , 1 9 7 4 . Prey—predator models in spatially heterogeneous 
environments. J . Theor. Biol., 4 8 : 7 5 — 8 3 . 
Conway, G.R., 1 9 7 7 . Mathematical models in applied ecology. Nature, 2 6 9 : 2 9 1 — 2 9 7 . 
Corbet, P.S. and Smith, R . F . , 1 9 7 6 . Is integrated control realistic? In: C.B. Huffaker 
and P.S. Messenger (Editors). Theory and Practice of Biological Control. Academic 
Press, New Y o r k , N.Y., pp. 6 6 1 — 6 8 2 . 
Cross, G.W., 1 9 7 8 . Three types of matrix stability. Linear Algebra Appl., 2 0 : 2 5 3 — 2 6 3 . 
Cunningham, W . J . , 1 9 5 8 . Introduction t o Nonlinear Analysis. McGraw-Hill, New Y o r k , 
N.Y., 3 4 9 p p . 
Cushing, D.H., 1 9 7 5 . Fisheries Resources of the Sea and their Management. Oxford Univ. 
Press, Oxford, 8 7 p p . 
Cushing, J . M . , 1 9 7 7 . Integrodifferential equations and delay models in population 
dynamics. In: S.A. Levin (Editor), Lecture Notes in Biomathematics, Vol. 2 0 . Springer-
Verlag, Berlin, pp. 1—196. 
Cushing, D.H. and Harris, J.G.K., 1 9 7 3 . Stock and recruitment and the problem of density-
dependence. Rapp. P.V. Reun. Cons. Int. Explor. Mer, 1 6 4 : 1 4 2 — 1 5 5 . 
Dantzig, G.B., 1 9 6 3 . Linear Programming and Extensions. Princeton University Press, 
Princeton, N.Y., 6 2 1 p p . 
Davis, P . E . , Myers, K. and Hoy, J . B . , 1 9 7 6 . Biological control among vertebrates. In: 
C.B. Huffaker and P.S. Messenger (Editors), Theory and Practice o f Biological Con­
trol. Plenum Press, New Y o r k , N.Y., pp. 5 0 1 — 5 1 9 . 
DeAngelis, D.L., 1 9 7 5 . Stability and connectance in food web models. Ecology, 5 6 : 
2 3 8 — 2 4 3 . 
DeBach, P. (Editor), 1 9 6 4 . Biological Control of Insect Pests and Weeds. Chapman and 
Hall, London, 8 4 4 p p . 
Diamond, P., 1 9 7 4 . The stability of the interaction between entomophagous parasites 
and their hosts. Math. Biosci., 1 9 : 1 2 1 — 1 2 9 . 
Diamond, P., 1 9 7 6 a. Domains of stability and resilience for biological populations 
obeying difference equations. J . Theor. Biol., 6 1 : 2 8 7 — 3 0 6 . 
Diamond, P., 1 9 7 6 b. Chaotic behaviour o f systems of difference equations. Int. J . Syst. 
Sei., 7: 9 5 3 - 9 5 6 . 
Dietz, Κ., 1 9 6 7 . Epidemics and rumours: a survey. J . R. Statist. Soc. A, 1 3 0 : 5 0 5 — 5 2 7 . 
Dillon, J . L . , 1 9 7 7 . T h e Analysis of Response in Crop and Livestock Production. Pergamon 
Press, Oxford, 2 1 6 p p .

--- Page 271 ---

270 
Dixon, L.C.W, and Szego, G.P., 1 9 7 5 . Towards Global Optimization. North-Holland, 
Amsterdam, 4 7 2 p p . 
Doutt, R . L . and Nakata, J . , 1 9 6 5 . Parasites for control o f grape leafhopper. Calif. A g r i c , 
1 9 : 3. 
Elton, C.S., 1 9 5 8 . The Ecology o f Invasion by Animals and Plants. Methuen, London, 
1 8 1 p p . 
Falcon, L.A., 1 9 7 1 . Use of bacteria for microbial control of insects. In: H.D. Burges and 
N.W. Hussey (Editors), Microbial Control of Insects and Mites. Academic Press, New 
Y o r k , N.Y., pp. 6 7 - 9 5 . 
Falcon, L . A . , 1 9 7 6 . Problems associated with the use of arthropod viruses in pest control. 
Annu. Rev. E n t o m o l . 2 1 : 3 0 5 — 3 2 4 . 
Faris, J . E . , 1 9 6 0 . Analytical techniques used in determining the optimum replacement 
Pattern. J . F a r m Econ., 4 2 : 7 5 5 — 7 6 6 . 
Feldman, M.W. and Roughgarden, J . , 1 9 7 5 . A population's stationary distribution and 
chance of extinction in a stochastic environment with remarks on the theory of 
species packing. Theor. Popul. Biol., 7: 1 9 7 — 2 0 7 . 
Fenner, F . and Ratcliffe, F.N., 1 9 6 5 . Myxomatosis. Cambridge Univ. Press, Cambridge, 
3 7 9 p p . 
Fiacco, A.V. and McCormick, G.P., 1 9 6 8 . Nonlinear Programming: Sequential Uncon­
strained Minimization Techniques. Wiley, New Y o r k , N.Y., 2 1 0 p p . 
Fisher, M.E. and Goh, B.S., 1 9 7 7 . Stability in a class of discrete time models o f interaction 
populations. J . Math. Biol., 4 ( 1 9 7 7 ) 2 6 5 — 2 7 4 . 
Fisher, M.E. and Kloeden, P . E . , 1 9 7 8 . Asymptotic behaviour of a class of discontinuous 
difference equations. J . Aust. Math. S o c , 2 0 (Series B ) : 3 7 0 - 3 7 4 . 
Fisher, M.E., Goh, B.S. and Vincent, T . L . , 1 9 7 9 . Some stability conditions for discrete 
time single species models. Bull. Math. Biol., in press. 
Fleming, W.H. and Rishel, R.W., 1 9 7 5 . Deterministic and Stochastic Optimal Control. 
Springer-Ver lag, Berlin, 2 2 2 p p . 
Fletcher, R., 1 9 7 5 . An ideal penalty method for constrained optimization. J . Inst. Math. 
Appl., 1 5 : 3 1 9 - 3 4 2 . 
Freedman, H.I., 1 9 7 6 . Graphical stability, enrichment, and pest control by a natural 
enemy. Math. Biosci., 3 1 : 2 0 7 — 2 2 5 . 
Freedman, H.I. and Waltman, P., 1 9 7 7 . Mathematical analysis of some three species 
food-chain models. Math. Biosci., 3 3 : 2 5 7 — 2 7 6 . 
Gaffney, M.M., 1 9 6 0 . Concepts of Financial Maturity in Timber. North Carolina State 
College, Dep. of Agric. Econ. Ser. No. 6 2 . 
Gambell, R., 1 9 7 7 . Whale conservation. Role of the International Whaling Commission. 
Mar. Policy, 1: 3 0 1 - 3 1 0 . 
Gard, T.C. and Hallam, T.G., 1 9 7 9 . Persistence in food webs: I. Lotka—Volterra food 
chains. Bull. Math. Biol., in press. 
Gardner, M.R. and Ashby, W.R., 1 9 7 0 . Connectance of large dynamical (cybernetic) 
systems: critical values for stability. Nature, 2 2 8 : 7 8 4 . 
Gatto, M. and Rinaldi, S., 1 9 7 7 . Stability analysis o f predator—prey models via the 
Liapunov method. Bull. Math. Biol., 3 9 : 3 3 9 — 3 4 7 . 
Gause, G.F., 1 9 3 4 . The Struggle for Existence. Williams and Wilkins, Baltimore, Md., 
1 6 3 p p . 
Geier, P.W., 1 9 7 0 . Temporary suppression, population management, or eradication: how 
and when to choose. In: R . L . Rabb and F . E . Guthrie (Editors), Concepts o f Pest 
Management. North Carolina State University, Raleigh, N.C., pp. 1 7 0 — 1 8 9 . 
Getz, W.M., 1 9 7 7 . On harvesting two competing populations. C S I R Tech. Rep., TWISK 
7, NRIMS, CSIR, Pretoria, pp. 1—29. 
Giese, R . L . , Peart, R.M. and Huber, R . T . , 1 9 7 5 . Pest management. Science, 1 8 7 : 1 0 4 5 — 
1 0 5 2 .

--- Page 272 ---

271 
Gilbert, N., Gutierrez, A.P., Frazer, B.D. and Jones, R . E . , 1 9 7 6 . Ecological Relationships. 
W.H. Freeman and Co., San Francisco, Calif. 
Gilpin, M.E., 1 9 7 2 . Enriched predator—prey systems: theoretical stability. Science, 1 7 7 : 
9 0 2 - 9 0 4 . 
Gilpin, M.E., 1 9 7 4 . A Liapunov function for competition communities. J . Theor. Biol., 
4 4 : 3 5 - 4 8 . 
Gilpin, M.E., 1 9 7 5 a. Group Selection in predator—prey Communities. Princeton Univ. 
Press, Princeton, N.J., 1 0 8 p p . 
Gilpin, M.E., 1 9 7 5 b. Stability o f feasible predator—prey systems. Nature 2 5 4 : 1 3 7 — 1 3 9 . 
Gilpin, M.E. and Ayala, F . J . , 1 9 7 3 . Global models o f growth and competition. Proc. Nat. 
Acad. Sei. (U.S.A.), 7 0 : 3 5 9 0 - 3 5 9 3 . 
Gilpin, M.E. and Case, T . J . , 1 9 7 6 . Multiple domains o f attraction in competition com­
munities. Nature, 2 6 1 : 4 0 — 4 2 . 
Goh, B.S., 1 9 6 6 a. T h e second variation o f the singular Bolza problem. SIAM J . Control, 
4 : 3 0 9 - 3 2 5 . 
Goh, B.S., 1 9 6 6 b. Necessary conditions for singular extremals involving multiple control 
variables. SIAM J . Control, 4 : 7 1 6 — 7 3 1 . 
Goh, B.S., 1 9 6 6 c. Necessary Conditions for Singular Extremals in the Calculus o f Vari­
ations. Ph.D. Thesis, Univ. of Canterbury, Canterbury, N.Z., 1 0 9 p p . mimeographed. 
Goh, B.S., 1 9 6 9 / 7 0 . Optimal control o f a fish resource. Malay. Sei., 5 : 6 5 — 7 0 . 
Goh, B.S., 1 9 7 1 . The potential utility of control theory t o pest management. Proc. Ecol. 
Soc. Aust., 6: 8 4 — 8 9 . 
Goh, B.S., 1 9 7 3 a. Optimal control of renewable resources and pest populations. Proc. 
6th Hawaii Int. Conf. on System Sciences, pp. 2 6 — 2 8 . 
Goh, B.S., 1 9 7 3 b. Compact forms of the generalized Legendre conditions and the deri­
vation of singular extremals. P r o c . 6th Hawaii Int. Conf. on System Sciences, pp. 1 1 5 — 
1 1 7 . 
Goh, B.S., 1 9 7 4 . Stability and diversity in ecosystems. Proc. 7 t h Hawaii Int. Conf. on 
System Sciences, 2 4 1 — 2 4 3 . 
Goh, B.S., 1 9 7 5 . Stability, vulnerability and persistence o f complex ecosystems. Ecol. 
Modelling, 1: 1 0 5 - 1 1 6 . 
Goh, B.S., 1 9 7 6 a. Nonvulnerability o f ecosystems in unpredictable environments. Theor. 
Popul. Biol., 1 0 : 8 3 — 9 5 . 
Goh, B.S., 1 9 7 6 b. Global stability in two species interactions. J . Math. Biol., 3: 3 1 3 — 
3 1 8 . 
Goh, B.S., 1 9 7 7 a. Global stability in m a n y species systems. A m . Natr., I l l : 1 3 5 — 1 4 3 . 
Goh, B.S., 1 9 7 7 b. Optimum size limit for a fishery with a limited fishing season. Ecol. 
Modelling, 3 : 3 — 1 5 . 
Goh, B.S., 1 9 7 7 c. Stability in a stock recruitment model o f an exploited fishery. Math. 
Biol. Sei., 3 3 : 3 5 9 - 3 7 2 . 
Goh, B.S., 1 9 7 8 a. Sector-stability o f complex ecosystem models. Math. Biosci., 4 0 : 
1 5 7 - 1 6 6 . 
Goh, B.S., 1 9 7 8 b. Global stability in a class o f prey—predator models. Bull. Math. Biol., 
4 0 : 5 2 5 — 5 3 3 . 
Goh, B.S., 1 9 7 8 c. T h e usefulness o f optimal control theory t o ecological problems. In: 
E. Half on ( E d i t o r ) , Theoretical Systems Ecology. Academic Press, New Y o r k , N . Y . 
Goh, B.S., 1 9 7 8 d. Robust stability concepts for ecosystem models. In: E . Halfon (Editor), 
Theoretical Systems Ecology. Academic Press, New Y o r k , N . Y . , p p . 4 6 7 — 4 8 7 . 
Goh, B.S., 1 9 7 9 . Stability in models o f mutualism. A m . Nat., 1 1 3 : 2 6 1 — 2 7 5 . 
Goh, B.S., 1 9 8 0 . Stability of a scalar nonlinear difference equation. T o appear. 
Goh, B.S. and Agnew, T.T., 1 9 7 7 . Stability in Gilpin and Ayala's models o f competition. 
J . Math. Biol., 4 : 2 7 5 - 2 7 9 .

--- Page 273 ---

272 
Goh, B.S. and Agnew, T.T., 1 9 7 8 . Stability in a harvested population with delayed 
recruitment. Math. Biosci., 4 2 : 1 8 7 — 1 9 7 . 
Goh, B.S. and Agnew, T.T., 1 9 8 0 . Global and finite stability of a population with delayed 
recruitment. Ecol. Modelling, in press. 
Goh, B.S. and Jennings, L.S., 1 9 7 7 . Feasibility and stability in randomly assembled 
Lotka—Volterra models. Ecol. Modelling, 3 : 6 3 — 7 1 . 
Goh, B.S., Leitmann, G. and Vincent, T . L . , 1 9 7 4 a. T h e optimal control of a prey—predator 
system. Math. Biosci., 1 9 : 2 6 3 — 2 8 6 . 
Goh, B.S., Wilson, D.J. and Vincent, T . L . , 1 9 7 4 b. Suboptimal control of prey-predator 
system by graphical analysis. Proc. 7th Hawaii Int. Conf. on System Sciences, pp. 
1 9 6 - 1 9 9 . 
Goh, B.S., Peng, W . Y . , Vincent, T . L . and Riley, J . J . , 1 9 7 5 . Optimal management o f green 
house crops. Hortscience, 1 0 ( 1 ) : 7 — 1 1 . 
Goh, B.S., Vincent, T . L . and Leitmann, G., 1 9 8 0 . Optimal epidemic programs for pest 
control. To appear. 
Goodman, D., 1 9 7 5 . The theory of diversity—stability relationships in ecology. Q. Rev. 
Biol., 5 0 : 2 3 7 - 2 6 6 . 
Gopalsamy, K., 1 9 7 7 . Competition and coexistence in spatially heterogenous environ­
ments. Math. Biosci., 3 6 ; 2 2 9 — 2 4 2 . 
Gordon, H.S., 1 9 5 4 . E c o n o m i c theory of a common-property resource: the fishery. 
J . Polit. Econ., 6 2 : 1 2 4 - 1 4 2 . 
Guckenheimer, J . , Oster, G. and Ipaktchi, Α., 1 9 7 7 . The dynamics of density dependent 
population models. J . Math. Biol., 4 : 1 0 1 — 1 4 7 . 
Gulland, J . A . , 1 9 7 4 . The Management of Marine Fisheries. Scientechnica, Bristol, 1 9 8 p p . 
Gulland, J . A . , 1 9 7 7 . World fisheries and fish stocks. Mar. Policy, 1: 1 7 9 — 1 8 9 . 
Gulland, J . A . , 1 9 7 8 . Fishery management: new strategies for new conditions. Trans. Am. 
Fish. S o c , 1 0 7 : 1—11. 
Gurel, O. and Lapidus, L . , 1 9 6 8 . Stability via Liapunov's second method. Ind. Eng. 
Chem., 6 0 ( 6 ) : 1 - 2 6 . 
Gurel, O. and Lapidus, L . , 1 9 6 9 . A guide t o the generation of Liapunov functions. Ind. 
Eng. Chem., 6 1 ( 3 ) : 3 0 - 4 1 . 
Hadeler, K.P., Van der Heiden, U. and Rothe, F . , 1 9 7 4 . Nonhomogeneous spatial distri­
butions of populations. J . Math. Biol., 1: 1 6 5 — 1 7 6 . 
Hagen, K.S., Van den Bosch, R. and Dahlsten, D.L., 1 9 7 1 . The importance o f naturally-
occurring biological control in the Western United States. In: C.B. Huffaker (Editor), 
Biological Control. Plenum Press, New Y o r k , N.Y., pp. 2 5 3 — 2 9 3 . 
Hahn, W., 1 9 6 7 . Stability of Motion. Springer-Verlag, Berlin, 4 4 6 p p . 
Harrison, G.W., 1 9 7 9 a. Persistent sets via Liapunov functions. Nonlinear Anal., 3: 7 3 — 8 0 . 
Harrison, G.W., 1 9 7 9 b. Global stability of predator—prey interactions. J . Math. Biol., 
in press. 
Hassell, M.P., 1 9 7 5 . Density dependence in single-species populations. J . Anim. Ecol., 
4 4 : 2 8 3 - 2 9 5 . 
Hassell, M.P., 1 9 7 6 . The Dynamics of Competition and Prédation. Edward Arnold, 
London, 68pp. 
Hassell, M.P., 1 9 7 8 . The Dynamics of Arthropod Predator—Prey System. Princeton 
University Press, Princeton, N.J., 2 3 7 p p . 
Hassell, M.P. and Comins, H.N., 1 9 7 6 . Discrete time models for two species competition. 
Theor. Popul. Biol., 9 : 2 0 2 — 2 2 1 . 
Hassell, M.P. and May, R.M., 1 9 7 3 . Stability in insect host—parasite models. J . Anim. 
Ecol., 4 2 : 6 9 3 - 7 2 6 . 
Hassell, M.P., Lawton, J . H . and Beddington, J . R . , 1 9 7 6 a. The components o f arthropod 
prédation. I. The prey death rate. J . Anim. Ecol., 4 5 : 1 3 5 — 1 6 4 . 
Hassell, M.P., L a w t o n , J . H . and May, R.M., 1 9 7 6 b. Patterns of dynamical behavior in

--- Page 274 ---

273 
single-species populations. J . Anim. Ecol., 4 5 : 4 7 1 — 4 8 6 . 
Hassell, M.P., L a w t o n , J . H . and Beddington, J . R . , 1 9 7 7 . Sigmoid functional responses by 
invertebrate predators and parasitoids. J . Anim. Ecol., 4 6 : 2 4 9 — 2 6 2 . 
Hastings, Α., 1 9 7 7 . Spatial heterogeneity and the stability of predator—prey systems. 
Theor. Popul. Biol., 1 2 : 3 7 — 4 8 . 
Hastings, Α., 1 9 7 8 . Global stability in Lotka—Volterra systems with diffusion. J . Math. 
Biol., 6 : 1 6 3 - 1 6 8 . 
Holling, C.S., 1 9 5 9 . The components of prédation as revealed by a study of small mammal 
prédation of the European pine sawfly. Can. Entomol., 9 1 : 2 9 3 — 3 2 0 . 
Holling, C S . , 1 9 6 6 . The functional response of predators t o prey density and its role in 
mimicry and population regulation. Mem. Entomol. Soc. Can., 4 8 : 1—86. 
Holling, C S . , 1 9 7 3 . Resilience and stability of ecological systems. Annu. Rev. Ecol. Syst., 
4: 1 - 2 3 . 
Holling, C S . (Editor), 1 9 7 8 . Adaptive Environmental Assessments and Management. 
Wiley, New Y o r k , N . Y . , 3 7 7 p p . 
Horn, H.S. and MacArthur, R.H., 1 9 7 2 . Competitive among fugitive species in a harle­
quin environment. Ecology, 5 3 : 7 4 9 — 7 5 2 . 
Hsu, S.B., 1 9 7 8 a. On global stability of a predator—prey system. Math. Biosci., 3 9 : 
1 - 1 0 . 
Hsu, S.B., 1 9 7 8 b. Limiting behavior for competing species. SIAM J . Appl. Math., 3 4 : 
7 6 0 - 7 6 3 . 
Hsu, S.B., 1 9 7 8 c. The application of the Poincare transform to the Lotka—Volterra 
model. J . Math. Biol., 6: 6 7 — 7 3 . 
Huffaker, C.B., 1 9 5 8 . Experimental studies on prédation: Dispersion factors and p r e d a t o r -
prey oscillations. Hilgardia, 2 7 : 3 4 3 — 3 8 3 . 
Huffaker, C.B. and Messenger, P.S., 1 9 7 6 . Theory and Practice of Biological Control. 
Academic Press, New Y o r k , N . Y . , 7 8 8 p p . 
Hussey, N.W. and Bravenboer, L . , 1 9 7 1 . Control of pests in glasshouse culture by the 
introduction of natural enemies. In: C.B. Huffaker (Editor), Biological Control. 
Plenum Press, New Y o r k , N.Y., pp. 1 9 5 — 2 1 6 . 
Innis, G., 1 9 7 4 a. Dynamics analysis in "soft science" studies: in defence o f difference 
equations. In: P. van den Driessche (Editor), Mathematical Problems in Biology. 
Lecture Notes in Bio math., Vol. 2. Springer-Verlag, Berlin, pp. 1 0 2 — 1 2 2 . 
Innis, G., 1 9 7 4 b. Stability, sensitivity, resilience, persistence. What is o f interest? In: 
S.A. Levin (Editor), Ecosystem Analysis and Prediction. SIAM, Philadelphia, Pa., 
pp. 1 3 1 - 1 4 0 . 
Intrilligator, M.D., 1 9 7 1 . Mathematical Optimization and E c o n o m i c Theory. Prentice-
Hall, Englewood Cliffs, N.J., 5 0 8 p p . 
Jaquette, D.L., 1 9 7 2 . Mathematical models for controlling growing populations: a survey. 
Oper. Res., 2 0 : 1 1 4 2 — 1 1 5 1 . 
Johnson, C R . , 1 9 7 4 . Sufficient conditions for D-stability. J . E c o n . Theory, 9 : 5 3 — 6 2 . 
Jörne, J . and Carmi, S., 1 9 7 7 . Liapunov stability of the diffusive Lotka—Volterra 
equations. Math. Biosci., 3 7 : 5 1 — 6 1 . 
J u r y , E . I . , 1 9 7 4 . Inners and Stability o f Dynamic Systems. Wiley, New Y o r k , N.Y., 
3 0 8 p p . 
Kaiman, R . E . , 1 9 5 6 . Nonlinear aspects of sampled-data control systems. Proc. 2nd Symp. 
on Nonlinear Circuit Theory, Poly. Inst, o f Brooklyn, pp. 2 7 3 — 3 1 3 . 
Kaiman, R . E . and Bertram, J . E . , 1 9 6 0 a. Control system analysis and design via the second 
method o f Liapunov. I. Continuous-time systems. A S M E J . Basic Eng., 8 2 : 3 7 1 — 3 9 3 . 
Kaiman, R . E . and Bertram, J . E . , 1 9 6 0 b. Control system analysis and design via the 
second method o f Liapunov. II. Discrete time systems. A S M E J . Basic Eng., 8 2 : 3 9 4 — 
4 0 0 . 
Karlin, S. and McGregor, J . , 1 9 7 2 . Polymorphism for genetic and ecological systems with

--- Page 275 ---

274 
weak coupling. Theor. Popul. Biol., 3 : 2 1 0 — 2 3 8 . 
Kazarinoff, N.D. and Van den Driessche, P., 1 9 7 8 A model predator—prey system with 
functional response. Math. Biosci., 3 9 : 1 2 5 — 1 3 4 . 
Kelley, H . J . , Kopp, R . E . and Moyer, H.G., 1 9 6 7 . Singular extremals. In: G. Leitmann 
(Editor), Topics in Optimization. Academic Press, New Y o r k , N.Y., pp. 6 3 — 1 0 1 . 
Kilmer, W . L . , 1 9 7 2 . On some realistic constraints in prey—predator systems. J . Theor. 
Biol., 3 6 : 9 - 2 2 . 
Kolmogoroff, A.N., 1 9 3 6 . Sulla teoria di Volterra della lotta per l'esistenza. G. Inst. Ital. 
Attuari, 7: 7 4 — 8 0 . 
Kuester, J . L . and Mize, J . H . , 1 9 7 3 . Optimization Techniques with F O R T R A N . McGraw-
Hill, New Y o r k , N.Y., 5 0 0 p p . 
Kushner, H.J., 1 9 6 7 . Stochastic Stability and Control. Academic Press, New Y o r k , N.Y., 
1 6 1 p p . 
Laing, J . E . and Junji Hamai, 1 9 7 6 . Biological control of insect pests and weeds by imported 
parasites, predators and pathogens. In: C.B. Huffaker and P.S. Messenger (Editors), 
Theory and Practice of Biological Control. Academic Press, New Y o r k , N.Y., pp. 6 8 6 — 
7 4 3 . 
Larkin, P.A., 1 9 6 3 . Interspecific competition and exploitation. J . Fish. Res. Board Can., 
2 0 : 6 4 7 — 6 7 8 . 
Larkin, P.A., 1 9 6 6 . Exploitation on a type o f predator—prey relationship. J . Fish. Res. 
Board Can., 2 3 : 3 4 9 — 3 5 6 . 
Larkin, P.A., 1 9 7 7 . An epitaph for the concept of maximum sustained yield. Trans. A m . 
Fish. S o c , 1 0 6 : 1 - 1 1 . 
LaSalle, J . P . , 1 9 7 6 . The Stability of Dynamical Systems. SIAM, Philadelphia, Pa., 76pp. 
LaSalle, J . P . , 1 9 8 0 . Stability and Control of Discrete Time Systems. Springer-Verlag, 
Berlin, t o appear. 
LaSalle, J . and Lefschetz, S., 1 9 6 1 . Stability by Liapunov's Direct Method. Academic 
Press, New Y o r k , N . Y . , 1 3 4 p p . 
Lashiher, A.M. and Storey, C , 1 9 7 2 . Final stability with some applications. J . Inst. Math. 
Appl., 9: 3 9 7 - 4 1 0 . 
Lawden, D.F., 1 9 6 3 . Optimal Trajectories for Space Navigation. Butterworth, London, 
1 2 6 p p . 
Lee, E . B . and Markus, L . , 1 9 6 7 . Foundations of Optimal Control Theory, J o h n Wiley, 
New Y o r k , N.Y., 5 7 6 p p . 
Lefkovitch, L.P., 1 9 6 5 . The study of population growth in organisms grouped by stages. 
Biometrics., 2 1 : 1—18. 
Leitmann, G., 1 9 6 6 . An Introduction to Optimal Control. McGraw-Hill, New Y o r k , 
N.Y., 1 6 3 p p . 
Leitmann, G. and Marzollo, Α., 1 9 7 5 . Multicriteria Decision Making. Springer-Verlag, 
Wien, 3 8 6 p p . 
Leslie, P.H., 1 9 4 5 . The use of matrices in certain population mathematics. Biometrika, 
3 3 : 1 8 3 - 2 1 2 . 
Leslie, P.H., 1 9 4 8 . Some further notes on the use of matrices in population mathematics. 
Biometrika, 3 5 : 2 1 3 — 2 4 5 . 
Leung, Α., 1 9 7 6 . Limiting behavior for several interacting populations. Math. Biosci., 
2 9 : 8 5 - 9 8 . 
Leung, Α., 1 9 7 8 . Limiting behaviour for a prey—predator model with diffusion and 
crowding effects. J . Math. Biol., 6: 8 7 — 9 3 . 
Levin, S.A., 1 9 7 4 . Dispersion and population interactions. Am. Nat., 1 0 8 : 2 0 7 — 2 2 8 . 
Levin, S.A., 1 9 7 6 a. Population dynamic models in heterogenous environments. Annu. 
Rev. Ecol. Syst., 7: 2 8 7 — 3 1 0 . 
Levin, S.A., 1 9 7 6 b. Spatial patterning and the structure of ecological communities.

--- Page 276 ---

275 
In: S.A. Levin (Editor), Some Mathematical Questions in Biology, Vol. 7. A m . Math. 
S o c , Providence, R.I., pp.1—36. 
Levins, R., 1 9 6 6 . The strategy of model building. A m . Sei., 5 4 : 4 2 1 — 4 3 1 . 
Levins, R., 1 9 6 8 . Ecological engineering: theory and practice. Q. Rev. Biol., 4 3 : 3 0 1 — 3 0 5 . 
Levins, R. and Culver, D., 1 9 7 1 . Regional coexistence of species and competition between 
rare species. Proc. Nat. Acad. Sei. (U.S.A.), 6 8 : 1 2 4 6 — 1 2 4 8 . 
Lewontin, R.C., 1 9 6 9 . The meaning of stability. In: Diversity and Stability in Ecological 
Systems. Brookhaven Symp. Biol., 2 2 : 1 3 — 2 4 . 
Li, T . Y . and Y o r k e , J . A . , 1 9 7 5 . Period three implies chaos. A m . Math. Monthly, 8 2 : 
9 8 5 - 9 9 2 . 
Liapunov, A.M., 1 9 6 6 . Stability of Motion. Academic Press, New Y o r k , N.Y., 2 0 3 p p . 
Lotka, A . J . , 1 9 2 5 . Elements of Physical Biology. Williams and Wilkins, Baltimore, Md., 
4 6 5 p p . 
Ludwig, D., 1 9 7 4 . Stochastic Population Theories. Springer-Verlag, Berlin, 1 0 8 p p . 
Ludwig, D., 1 9 7 5 . Persistence of dynamical systems under random perturbations. SIAM 
Rev., 1 7 : 6 0 5 — 6 4 0 . 
Ludwig, D., Jones, D.D. and Holling, C S . , 1 9 7 8 . Qualitative analysis o f insect outbreak 
systems: the spruce budworm and forest. J . Anim. Ecol., 4 7 : 3 1 5 — 3 3 2 . 
MacArthur, R.H., 1 9 5 5 . Fluctuations of animal populations and a measure of community 
stability. Ecology, 3 6 : 5 3 3 — 5 3 6 . 
MacDonald, N., 1 9 7 6 . Time delay in prey—predator models. Math. Biosci., 2 8 : 3 2 1 — 3 3 0 . 
Mancill, J.D., 1 9 5 0 . Identically non-regular problems in the calculus of variations. Rev. 
Mat. Y . Fis. Teo., Ser. A, 7: 1 3 1 — 1 3 9 . 
Mann, S.H., 1 9 7 1 . Mathematical models for the control of pest populations. Biometrics, 
2 7 : 3 5 7 — 3 6 8 . 
Marotto, F . R . , 1 9 7 8 . Snap-back repellers imply chaos in R
n . J . Math. Anal. Appl., 6 3 : 
1 9 9 - 2 2 3 . 
May, R.M., 1 9 7 2 . Limit cycles in predator—prey communities. Science, 1 7 7 : 9 0 0 — 9 0 2 . 
May, R.M., 1 9 7 4 . Stability and Complexity in Model Ecosystems. Princeton University 
Press, Princeton, N.J., 2nd edn, 2 6 5 p p . 
May, R.M., 1 9 7 6 a. Simple mathematical models with very complicated dynamics. Nature 
2 6 1 : 4 5 9 - 4 6 7 . 
May, R.M., 1 9 7 6 b. Theoretical Ecology: Principles and Applications. Blackwell, Oxford, 
3 1 7 p p . 
May, R.M., 1 9 7 7 . Thresholds and breakpoints in ecosystems with a multiplicity o f stable 
states. Nature, 2 6 9 : 4 7 1 — 4 7 7 . 
May, R.M. and Anderson, R.M., 1 9 7 8 . Regulation and stability of host-parasite population 
interactions. II. Destabilizing processes. J . Anim. Ecol., 4 7 : 2 4 9 — 2 6 7 . 
May, R.M. and Oster, G.F., 1 9 7 6 . Bifurcations and dynamic complexity in simple 
ecological models. Am. Nat., 1 1 0 : 5 7 3 — 5 9 9 . 
Maynard Smith, J . , 1 9 7 4 . Models in Ecology. Cambridge Univ. Press, Cambridge, 1 4 6 pp. 
Mazanov, Α., 1 9 7 8 . Acceptor control in model ecosystems. J . Theor. Biol., 7 1 : 2 1 — 3 8 . 
McNaughton, S.J., 1 9 7 8 . Stability and diversity of ecological communities. Nature, 2 7 4 : 
2 5 1 — 2 5 3 . 
Miele, Α., 1 9 6 2 . Extremization of linear integrals by Green's theorem. In: G. Leitmann 
(Editor), Optimization Techniques. Academic Press, New Y o r k , N.Y., pp. 6 9 — 9 8 . 
Moran, P.A.P., 1 9 5 0 . Some remarks on animal dynamics. Biometrics, 6 : 2 5 1 — 2 5 8 . 
Murdoch, W.W., 1 9 7 3 . The functional response o f predators. J . Appl. Ecol., 1 0 : 3 3 5 — 
3 4 2 . 
Murdoch, W.W., 1 9 7 7 . Stabilizing effects of spatial heterogeneity in predator—prey 
systems. Theor. Popul. Biol., 1 1 : 2 5 2 — 2 7 3 . 
Noy-Meir, I., 1 9 7 5 . Stability of grazing systems: an application o f predator—prey 
graphs. J . Ecology, 6 3 : 4 5 9 — 4 8 1 .

--- Page 277 ---

276 
Noy-Meir, I., 1 9 7 8 . Stability in simple grazing models; effects of explicit functions. 
J . Theor. Biol., 7 1 : 3 4 7 — 3 8 0 . 
Oaten, A. and Murdoch, W.W., 1 9 7 5 . Functional response and stability in p r e d a t o r -
prey systems. A m . Nat., 1 0 9 : 2 8 9 — 2 9 8 . 
Odum, E.P., 1 9 7 1 . Fundamentals of Ecology. W.B. Saunders, Philadelphia, Pa., 3rd 
edn, 5 7 4 p p . 
Or i ans, G.H., 1 9 7 4 . Diversity, stability and maturity in natural ecosystems. Proc. 1st Int. 
Congr. Ecol., The Hague, pp. 6 2 — 6 5 . 
Othmer, H.G. and Scriven, L . E . , 1 9 7 1 . Instability and dynamic pattern in cellular net­
works. J . Theor. Biol., 3 2 : 5 0 7 — 5 3 7 . 
Paine, R.T., 1 9 6 6 . F o o d web complexity and species diversity. Am. Nat., 1 0 0 : 6 5 — 7 5 . 
Palm, W . J . , 1 9 7 5 . Fishery regulation via optimal control theory. Fish. Bull., 7 3 : 8 3 0 — 8 3 7 . 
Palm, W.J., 1 9 7 7 . Stochastic control problems in fishery management. In: E . O . R o x i n , 
P.T. Liu and R . L . Sternberg (Editors), Differential Games and Control Theory II. 
Marcel Dekker, New Y o r k , N.Y., pp. 6 5 — 8 1 . 
Parker, F.D., 1 9 7 1 . Management of pest populations by manipulating densities o f both 
hosts and parasites through periodic releases. In: C.B. Huffaker (Editor), Biological 
Control. Plenum Press, New Y o r k , N . Y . , pp. 3 6 5 — 3 7 6 . 
Patten, B.C. (Editor), 1 9 7 1 . System Analysis and Simulation in Ecology, Vol. 3 . Academic 
Press, New Y o r k , N.Y., 6 0 1 p p . 
Pease, P., 1 9 6 7 . The optimal forest rotation. F o r . Chron., 4 3 ; 1 7 8 — 1 9 5 . 
Pella, J . J . and Tomlinson, P.K., 1 9 6 9 . A generalized stock production model. Bull. Inter-
Am. Trop. Tuna C o m m . , 1 3 : 4 2 1 — 4 9 6 . 
Pianka, E . R . , 1 9 7 2 . r and K-selection or b and d selection? A m . Nat., 1 0 6 : 5 8 1 — 5 8 8 . . 
Pianka, E . R . , 1 9 7 4 . Evolutionary Ecology. Harper and R o w Publ., New Y o r k , N.Y., 
3 5 6 p p . 
Pielou, E . C . , 1 9 7 7 . Mathematical Ecology. Wiley, New Y o r k , N . Y . , 3 8 5 p p . 
Pimm, S.L. and Lawton, J . H . , 1 9 7 7 . Number of trophic levels in ecological communities. 
Nature, 2 6 8 : 3 2 9 - 3 3 1 . 
Pontryagin, L.S., Boltyanskii, V.G., Gamkrelidze, R.V. and Mischenko, E . F . , 1 9 6 2 . T h e 
Mathematical Theory of Optimal Processes. Interscience Publishers, Inc., New Y o r k , 
N.Y., 3 6 0 p p . 
Quirk, J . and Saposnik, R., 1 9 6 8 . Introduction to General Equilibrium Theory and 
Welfare Economics. McGraw-Hill, New Y o r k , N.Y., 2 2 1 p p . 
Reed, W . J . , 1 9 7 4 . A stochastic model for the economic management of renewable 
resources. Math. Biosci., 2 2 : 3 1 3 — 3 3 7 . 
Reed, W.J., 1 9 7 9 . Optimal escapement levels in stochastic and deterministic harvesting 
models. T o appear. 
Reddingius, J . and Den Boer, P . J . , 1 9 7 0 . Simulation experiments illustrating stabilization 
of animal numbers by spreading of risk. Oecologia, 5 : 2 4 0 — 2 4 8 . 
Rescigno, A. and Richardson, I.W., 1 9 7 3 . The deterministic theory of population 
dynamics. In: R. Rosen (Editor), Foundations of Mathematical Biology, Vol. 3. 
Academic Press, New Y o r k , N.Y., pp. 2 8 3 — 3 6 0 . 
Ricker, W.E., 1 9 5 4 . Stock and recruitment. J . Fish. Res. Board Can., 1 1 : 5 5 9 — 6 2 3 . 
Ricker, W.E., 1 9 7 5 . Computation and interpretation of biological statistics of fish popu­
lations. Bull. Fish. Res. Board Can. 1 9 1 : 1—382. 
Roberts, Α., 1 9 7 4 . The stability of feasible random system. Nature, 2 5 0 : 6 0 7 — 6 0 8 . 
Rorres, C. and Fair, W., 1 9 7 5 . Optimal harvesting policy for an age-specific population. 
Math. Biosci., 2 4 : 31—47. 
Rosen, G., 1 9 7 5 . Solutions to systems of nonlinear reaction—diffusion equations. Bull. 
Math. Biol., 3 7 : 2 7 7 - 2 8 9 . 
Rosenzweig, M.L., 1 9 6 9 . Why the prey curve has a hump. A m . Nat., 1 0 3 : 8 1 — 8 7 . 
Rosenzweig, M.L., 1 9 7 1 . Paradox of enrichment: destabilization of exploitation eco-

--- Page 278 ---

277 
systems in ecological time. Science. 1 7 1 : 3 8 5 — 3 8 7 . 
Rosenzweig. M.L. and MacArthur, R . , 1 9 6 3 . Graphical representation and stability con­
ditions of predator—prey interactions. A m . Nat., 9 7 : 2 0 9 — 2 2 3 . 
Ruesink, W.G., 1 9 7 6 . Status of systems approach t o pest management. Annu. Rev. 
Entomol., 2 1 : 2 7 - 4 4 . 
Schaefer, M.B., 1 9 5 4 . Some aspects of the dynamics of populations important to the 
management o f commercial marine fisheries. Bull. Inter-Am. T r o p . Tuna Comm., 1 : 
2 6 - 5 8 . 
Schevill, W . E . (Editor), 1 9 7 4 . The Whale Problem: a Status Report. Harvard University 
Press, Cambridge, Mass., 4 1 9 p p . 
Schnute, J . , 1 9 7 7 . Improved estimates from the Schaefer production model: theoretical 
considerations. J . Fish. Res. Board Can., 3 4 : 5 8 3 — 6 0 3 . 
Schoener, T.W., 1 9 7 3 . Population growth regulated by intraspecific competition for 
energy or time: some simple representations. Theor. Popul. Biol., 4 : 5 6 — 8 4 . 
Schoener, T. W., 1 9 7 4 . Competition and the form of habitat shift. Theor. Popul. Biol., 
6: 2 6 5 - 3 0 7 . 
Schreuder, G.F., 1 9 6 8 . Optimal forest investment decisions through dynamic program­
ming. Yale Univ. School, Forestry Bull., No. 7 2 : 1—70. 
Schultz, D.G., 1 9 6 5 . The generation o f Liapunov functions. In: C T . Leondes (Editor), 
Advances in Control Systems, Vol. 2. Academic Press, New Y o r k , N.Y., pp. 1—64. 
Scudo, F.M., 1 9 7 1 . Vito Volterra and theoretical ecology. Theor. Popul. Biol., 2 : 1—23. 
Shoemaker, C , 1 9 7 3 . Optimization of agricultural pest management III: results and 
extensions o f a model. Math. Biosci., 1 8 : 1—22. 
Shoemaker, C A . , 1 9 7 7 . Pest management models of crop ecosystems. In: C A . S . Hall and 
J.W. Day (Editors), Ecosystem Modelling in Theory and Practice. J o h n Wiley and Sons. 
New Y o r k , N.Y., pp. 5 4 6 - 5 7 4 . 
Siljak, D.D., 1 9 7 8 . Large-Scale Dynamic Systems. North-Holland Publ., Amsterdam, 4 1 6 p p . 
Silliman, R.P., 1 9 7 1 . Advantages and limitations o f simple fishery models in light o f 
laboratory experiments. J . Fish. Res. Board Can., 2 8 : 1 2 1 1 — 1 2 1 4 . 
Silvert, W., 1 9 7 8 . The price o f knowledge: fisheries management as a research tool. J . 
Fish. Res. Board Can. 3 5 : 2 0 8 — 2 1 2 . 
Silvert, W. and Smith, W.R., 1 9 7 7 . Optimal exploitation of a multi-species community. 
Math. Biosci., 3 3 : 1 2 1 — 1 3 4 . 
Simberloff, D., 1 9 7 6 . Experimental zoogeography of islands: effects of island size. Ecology* 
5 7 : 6 2 9 - 6 4 8 . 
Skellam, J . G . , 1 9 5 1 . Random dispersal in theoretical populations. Biometrika, 3 8 : 1 9 6 — 
2 1 8 . 
Slatkin, M., 1 9 7 4 . Competition and regional coexistence. Ecology, 5 5 : 1 2 8 — 1 3 4 . 
Slobodkin, L . B . , 1 9 6 6 . Growth and Regulation of Animal Populations. Holt, Rinehart 
and Winston, New Y o r k , N.Y., 1 8 4 p p . 
Smith, B . J . , 1 9 7 3 . Dynamic programming of the dairy cow replacement problem. Am. J . 
Agric. E c o n . , 5 5 : 1 0 0 — 1 0 4 . 
Smith, V . L . , 1 9 6 9 . On models of commercial fishing. J . Polit. Econ., 7 7 : 1 8 1 — 1 9 8 . 
Starr, A.W. and H o , Y . C , 1 9 6 9 . Nonzero-sum differential games^J. Optimization Theory 
Appl., 3 : 1 8 4 — 2 0 6 . 
Steele, J . H . , 1 9 7 4 . T h e Structure of Marine Ecosystems. Harvard Univ. Press, Cambridge, 
Mass., 1 2 8 p p . 
Strebel, D.E. and Goel, N.S., 1 9 7 3 . On the isocline methods for analyzing prey—predator 
interactions. J . Theor. Biol., 3 9 : 2 1 1 — 2 3 9 . 
Strobeck, C , 1 9 7 3 . Ν species competition. Ecology, 5 4 : 6 5 0 — 6 5 4 . 
Swann, G. and Vincent, T . L . , 1 9 7 7 . Optimal control analysis in the chemotherapy o f IgG 
multiple myeloma. Bull. Math. Biol., 3 9 : 3 1 7 — 3 3 8 .

--- Page 279 ---

278 
Tabak, D. and K u o , B.C., 1 9 7 1 . Optimal Control by Mathematical Programming. Prentice-
I n c , Englewood Cliffs, N.J., 2 3 7 p p . 
Takayama, Α., 1 9 7 4 . Mathematical Economics. The Dryden Press, Hinsdale, 111., 7 4 4 p p . 
Takeuchi, Y . , Adachi, N. and Tokumaru, H., 1 9 7 8 . The stability of generalized Volterra 
equations. J . Math. Anal. Appl., 6 2 : 4 5 3 — 4 7 3 . 
Tanada, Y . , 1 9 6 4 . Epizootiology of insect diseases. In: P. DeBach (Editor), Biological 
Control of Insect Pests and Weeds. Chapman and Hall, L o n d o n , pp. 5 4 8 — 5 7 8 . 
Tuckwell, H.C., 1 9 7 4 . A study of some diffusion models of population growth. Theor. 
Popul. Biol., 5 : 3 4 5 - 3 5 7 . 
Tuljapurkar, S.D. and Semura, J . S . , 1 9 7 9 . Stochastic instability and Liapunov stability. 
J . Math. Biol., 8: in press. 
Tummala, R . L . and Haynes, D.L., 1 9 7 7 . On-line pest management. Environ. Entomol., 
6: 3 3 9 - 3 4 9 . 
Tummala, R . L . , Haynes, D.L. and Croft, B.A. (Editors), 1 9 7 6 . Modeling for Pest Manage­
ment: Concepts, Techniques and Applications. Michigan State University, East Lansing 
Mich., 2 4 7 p p . 
Turelli, M., 1 9 7 7 . R a n d o m environments and stochastic calculus. Theor. Popul. Biol., 
1 2 : 1 4 0 - 1 7 8 . 
Turelli, M., 1 9 7 8 . A reexamination of stability in randomly varying versus deterministic 
environments with comments on the stochastic theory o f limiting similarity. Theor. 
Popul. Biol., 1 3 : 2 4 4 - 2 6 7 . 
Usher, M.B., 1 9 7 6 . Extensions to models used in renewable resource management which 
incorporate an arbitrary structure. J . Environ. Manage., 4: 1 2 3 — 1 4 0 . 
Van der Vaart, H.R., 1 9 7 3 . A comparative investigation o f certain difference equations 
and related differential equations: implications for model building. Bull. Math. Biol., 
3 5 : 1 9 5 - 2 1 1 . 
Vincent, T . L . , 1 9 7 5 . Pest management programs via optimal control theory. Biometrics, 
3 1 : 1 - 1 0 . 
Vincent, T . L . and Anderson, L . R . , 1 9 7 9 . The vulnerability o f long food chains. Theor. 
Popul. Biol., 1 5 : 2 1 3 - 2 3 1 . 
Vincent, T . L . and Goh, B.S., 1 9 7 2 . Terminally, normality and transversality conditions. 
J . Optimization Theory Appl., 9 : 3 2 — 5 0 . 
Vincent, T . L . and Leitmann, G., 1 9 7 0 . Control space properties of cooperative games. 
J . Optimization Theory Appl. 6: 9 1 — 1 1 3 . 
Vincent, T . L . and Skowronski, J.M., 1 9 7 9 . Controllability with capture. J . Optimization 
Theory Appl., in press. 
Vincent, T . L . , Cliff, E.M. and Goh, B.S., 1 9 7 4 . Optimal direct control programs for a 
prey—predator system. A S M E J . Dynamic Systems, Measurement and Control, 9 6 : 
7 1 - 7 6 . 
Vincent, T . L . , Everett, L.G., L e e , C S . and Pulliam, H.R., 1 9 7 5 . Applications o f optimal 
control t o the modelling and management o f ecosystems. Simulation, 2 4 ( 3 ) : 6 5 — 7 2 . 
Vincent, T . L . Lee, C.S. and Goh, B.S., 1 9 7 7 . Control targets for the management of 
biological systems. Ecol. Modelling, 3: 2 8 5 — 3 0 0 . 
Volterra, V., 1 9 3 1 . Leçons sur la Theorie Mathématique de la L u t t e pour la Vie. 
Gauthier-Villars, Paris, 2 1 4 p p . 
Volterra, V., 1 9 3 8 . Population growth, equilibria and extinction under specified breeding 
conditions: a development and extension of the theory o f the logistic equation. Hum. 
Biol., 1 0 : 1 - 1 1 . 
Walters, C.J., 1 9 7 5 . Optimal harvest strategies for salmon in relation to environmental 
variability and uncertain production parameters. J . Fish. Res. Board Can., 3 2 : 1 7 7 7 — 
1 7 8 5 . 
Walters, C.J. and Hilborn, R., 1 9 7 6 . Adaptive control of fishing systems. J . Fish. Res. 
Board Can., 3 3 : 1 4 5 — 1 5 9 .

--- Page 280 ---

279 
Walters, C.J. and Hilborn, R., 1 9 7 8 . Ecological optimization and adaptive management 
Annu. Rev. Ecol. Syst., 9: 1 5 7 — 1 8 8 . 
Waltman, P., 1 9 7 4 . Deterministic threshold models in the theory of epidemics. In: 
S.A. Levin (Editor), Lecture Notes in Biomathematics. Springer-Verlag, Berlin, pp. 1— 
1 0 1 . 
Wangersky, P.J. and Cunningham, W . J . , 1 9 5 7 . Time lag in prey—predator population 
models. Ecology, 3 8 : 1 3 6 — 1 3 9 . 
Watt, K . E . F . , 1 9 6 8 . Ecology and Resource Management: A Quantitative Approach. 
McGraw-Hill, New Y o r k , N.Y., 4 5 0 p p . 
Wickwire, K., 1 9 7 7 . Mathematical models for the control of pests and infectious diseases; 
a survey. Theor. Popul. Biol., 1 1 : 1 8 2 — 2 3 8 . 
Wiegert, R.G., 1 9 7 5 . Simulation models of ecosystems. Annu. Rev. Ecol. Syst., 6 : 3 1 1 — 
3 3 8 . 
Willems, J . L . , 1 9 7 0 . Stability Theory of Dynamical Systems. Nelson, London, 2 0 1 p p . 
Willems, J . L . , 1 9 7 1 . Optimum Lyapunov functions and stability regions for multimachine 
power systems. Proc. I E E , 1 1 8 : 1 6 3 1 — 1 6 3 2 . 
Williamson, M.H., 1 9 7 2 . The Analysis o f Biological Populations. Edward Arnold, 
London, 1 8 0 p p . 
Wörz-Busekros, Α., 1 9 7 8 . Global stability in ecological systems with continuous time 
delay. SIAM J . Appl. Math., 3 5 : 1 2 3 - 1 3 4 . 
Wu, L . S . Y . , 1 9 7 4 . On the stability of ecosystems. In: S.A. Levin (Editor), Ecosystem 
Analysis and Prediction. SIAM, Philadelphia, Pa., pp. 1 5 5 — 1 6 5 . 
Yoshizawa, T., 1 9 6 6 . Stability Theory by Liapunov's Second Method. Math. Soc. Japan, 
Tokyo.

--- Page 281 ---

281 
AUTHOR INDEX 
The number(s) directly after the initial(s) of the author is (are) the page number(s) on 
which the author (or his work) is mentioned in the text. Numbers in italics give the page 
on which the complete reference is listed. 
Adachi, N., see Takeuchi et al. 
Aggarwal, J . K . , 8 5 , 2 6 7 
Agnew, T.T., 6 2 , 1 2 1 , 2 6 7 , see also Goh, 
B.S. and Agnew, T.T. 
Albrecht, F . , Gatzke, R , Haddad, A. and 
W a x , N . , 1 2 1 , 2 6 7 
Allen, K.R., 1 6 3 , 1 7 2 , 1 7 3 , 2 1 2 , 267 
Allen, K . R . and Kirkwood, G.P., 1 7 3 , 267 
Allison, J . R . , see Burt, O.R. and Allison, 
J . R . 
Anderson, L . G . , 1 7 2 , 267 
Anderson, R.M. and May, R.M., 2 2 9 , 2 5 6 , 
2 6 6 , 
267 
Araki, M. and Kondo, B . , 1 9 0 , 1 9 3 , 1 9 7 , 
2 0 7 , 2 6 7 
Arrow, K . J . , Block, H.D. and Hurwicz, L . , 
9, 2 6 7 
Arrow, K . J . and Hahn, F . H . , 9 , 2 6 7 
Ashby, W.R., see Gardner, M.K. and 
Ashby, W.R. 
Ashkenazi, M. and Othmer, H.G., 2 2 5 , 
2 6 7 
Astrom, K . J . , 1 2 2 , 2 6 7 
Auslander, D., Oster, G. and Huffaker, 
C.B., 1 7 3 , 2 6 7 
Ayala, F . J . , see Gilpin, M.E. and Ayala, 
F . J . 
Bailey, N.T.J., 2 5 6 , 2 6 7 
Banks, H.T., 1 3 , 2 6 7 
Barbashin, E . A . and Krasovskii, N.N., 2 6 7 
Barnett, S., 1 8 1 , 2 6 7 
Becker, N.G., 1 6 , 2 6 5 , 2 6 6 , 2 6 7 
Beddington, J . R . , 1 7 3 , 2 6 7 , see also 
Hassell, M.P. et al. 
Beddington, J . R . , Free, C.A. and Lawton, 
J . H . , 9 3 , 1 1 2 , 1 2 2 , 2 2 9 , 2 6 5 , 268 
Beddington, J . R . and May, R.M., 1 7 2 , 268 
Beddington, J . R . and Taylor, D.B., 1 7 3 , 
268 
Bell, D.J. and Jacobson, D.H., 1 6 , 4 3 , 268 
Bellman, R., 1 6 , 268 
Berkovitz, L.A., 1 6 , 4 3 , 268 
Bertram, J . E . , see Kaiman, R . E . and 
Bertram, J . E . 
Beverton, R . J . H . and Holt, S.J., 1 2 3 , 1 4 7 , 
1 5 0 , 1 5 3 , 1 6 3 , 1 7 2 , 268 
Blatt, W.E., see Comins, H.N. and Blatt, 
W.E. 
Bliss, G.A., 1 6 , 2 0 , 4 3 , 268 
Block, H.D., see Arrow, K . J . et al. 
Boltyanskii, V.G., see Pontryagin, L.S. 
et al. 
Booth, D.E., 1 7 3 , 268 
Botkin, D.B. and Sobel, M.J., 1 3 , 1 2 2 , 
268 
Brauer, F . , 2 1 0 , 2 1 2 , 2 2 5 , 268 
Brauer, F . and Sanchez, D.A., 1 2 1 , 268 
Brauer, F . , Soudack, A.C. and Jarosch, 
H.S., 1 7 3 , 268 
Bryson, A . E . and Ho, Y . C . , 1 5 , 4 3 , 268 
Bulmer, M.G., 1 2 1 , 2 6 8 
Burges, H.D. and Hussey, N.W., 2 5 6 , 268 
Burt, O.R. and Allison, J . R . , 2 6 2 , 268 
Canon, M.D., Cullum, C D . and Polak, E . , 
3 6 , 4 3 , 268 
Carmi, S., see Jörne, J . and Carmi, S. 
Case, T . J . and Casten, R., 1 3 , 2 0 3 , 2 2 4 , 
268 
Case, T . J . , see Gilpin, M.E. and Case, T . J . 
Caswell, H., 2 1 6 , 268 
Christiansen, F . B . and Fenchel, T.M., 1 3 , 
2 1 6 , 2 1 8 , 2 2 5 , 268 
Clark, C.W., 1 3 , 1 6 , 2 8 , 3 3 , 4 1 , 9 9 , 1 0 7 , 
1 2 1 , 1 2 2 , 1 2 4 , 1 2 5 , 1 2 9 , 1 4 6 , 1 5 3 , 
1 5 9 , 1 6 6 , 1 7 2 , 1 7 3 , 2 6 2 , 2 6 3 , 
268,269 
Clark, C.W., Clarke, F . H . and Munro, G.R., 
269 
Clark, C.W. and Mangel, M., 1 7 2 , 269

--- Page 282 ---

282 
Clark, C.W. and Munro, G.R., 1 7 2 , 2 6 9 
Clark, L . R . , Geier, P.W., Hughes, R.D. and 
Morris, R . F . , 2 5 6 , 2 6 9 
Clarke, F.H., see Clark, C.W. et al. 
Cliff, Ε . and Vincent, T . L . , 2 8 , 1 2 5 , 1 2 9 , 
1 7 2 , 2 6 9 
Cohen, J . E . , 2 6 5 , 269 
Comins, H.N. and Blatt, W.E., 2 1 6 , 2 2 5 , 
269 
Comins, H.N., see Hassell, M.P. and 
Comins, H.N. 
Conway, G.R., 1 3 , 2 2 8 , 2 6 5 , 2 6 6 , 269 
Corbet, P. S. and Smith, R . F . , 2 2 8 , 2 6 5 , 
269 
Croft, B.A., see Tummala, R . L . et al. 
Cross, G.W., 1 7 8 , 1 8 9 , 269 
Cullum, C D . , see Canon et al. 
Culver, D., see Levins, R. and Culver, D. 
Cunningham, W . J . , 2 3 5 , 2 6 6 , 269, see also 
Wangersky, P . J . and Cunningham, W . J . 
Cushing, D.H., 1 7 2 , 2 1 0 , 2 2 5 , 269 
Cushing, D.H. and Harris, J . G . K . , 1 4 7 , 
1 7 2 , 2 6 9 
Cushing, J . M . , 2 1 0 , 269 
Dahlsten, D.L., see Hagen, K.S. et al. 
Dantzig, G., 1 5 , 2 0 , 4 3 , 269 
Davis, P . E . , Myers, K. and Hoy, J . B . , 2 2 8 , 
2 5 6 , 269 
DeAngelis, D.L., 1 7 8 , 2 2 4 , 269 
DeBach, P., 2 2 7 , 2 6 5 , 2 6 9 
Den Boer, P . J . , see Reddingius, J . and 
Den Boer, P . J . 
Diamond, P., 1 0 1 , 1 2 2 , 2 2 9 , 2 6 5 , 269 
Dietz,K., 2 5 6 , 2 6 9 
Dillon, J . L . , 2 6 2 , 2 6 3 , 269 
Dixon, L.C.W. and Szego, G.P., 9 1 , 1 9 2 , 
1 9 9 , 
270 
Doutt, R . L . and Nakata, J . , 7 2 , 2 3 3 , 270 
Elton, C S . , 1 7 5 , 1 7 7 , 2 2 4 , 270 
Fair, W., see Rorres, C. and Fair, W. 
Falcon, L.A., 2 5 6 , 270 
Faris, J . E . , 2 6 2 , 270 
Feldman, M.W. and Roughgarden, J . , 1 2 2 , 
270 
Fenchel, T.M., see Christiansen, F . B . and 
Fenchel, T.M. 
Fenner, F . and Ratcliffe, F.N., 2 2 8 , 2 5 6 , 
270 
Fiacco, A.V. and McCormick, G.P., 4 3 , 
270 
Fisher, M.E. and Goh, B.S., 1 0 1 , 1 1 2 , 1 1 8 , 
1 2 2 , 2 7 0 
Fisher, M.E., Goh, B.S. and Vincent, T . L . , 
1 2 2 , 1 3 8 , 1 7 2 , 2 7 0 
Fisher, M.E. and Kloeden, P . E . , 1 2 2 
Flemming, W.H. and Rishel, R.W., 5, 4 3 , 
2 7 0 
Fletcher, R., 1 9 , 4 3 , 5 2 , 9 3 , 1 1 3 , 2 7 0 
Frazer, B.D., see Gilbert, N. et al. 
Free, C A . , see Beddington, J . R . et al. 
Freedman, H.I., 2 2 9 , 2 3 6 , 2 6 6 , 2 7 0 
Freedman, H.I. and Waltman, P . E . , 2 2 4 , 
2 7 0 
Gaffney, M.M., 2 6 2 , 2 6 3 , 2 7 0 
Gambell, R., 1 7 3 , 2 7 0 
Gamkrelidze, R.V., see Pontryagin, L.S. 
et al. 
Gard, T . C and Hallam, T.G., 2 2 4 , 2 7 0 
Gardner, M.R. and Ashby, W.R., 1 7 5 , 
1 7 8 , 1 7 9 , 2 2 4 , 2 7 0 
Gatto, M. and Rinaldi, S., 9, 1 3 , 2 7 0 
Gatzke, H., see Alb recht, F . et al. 
Gause, G.P., 1 1 , 1 2 1 , 2 7 0 
Geier, P.W., 2 2 8 , 2 6 5 , 2 7 0 , see also 
Clark, L . R . et al. 
Getz, W.M., 1 7 3 , 2 7 0 
Giese, R . L . , Peart, R.M. and Huber, R.T., 
2 6 5 , 2 7 0 
Gilbert, Ν., Gutierrez, A.P., Frazer, B.D. 
and Jones, R . E . , 2 5 6 , 271 
Gilpin, M.E., 9, 1 3 , 1 2 1 , 1 7 3 , 1 7 5 , 1 7 9 , 
2 0 3 , 2 2 4 , 271 
Gilpin, M.E. and Ayala, F . J . , 5 8 , 6 0 , 7 3 , 
1 2 1 , 271 
Gilpin, M.E. and Case, T . J . , 1 7 9 , 2 0 9 , 
2 2 4 , 2 7 1 
Goel, N.S., see Strebel, D.E. and Goel, N.S. 
Goh, B.S., 2, 9, 1 3 , 1 6 , 2 6 , 2 8 , 2 9 , 3 3 , 4 3 , 
5 1 , 6 0 , 7 0 , 7 8 , 8 9 , 9 4 , 1 0 1 , 1 2 1 , 1 2 2 , 
1 2 3 , 1 2 4 , 1 2 5 , 1 2 6 , 1 3 7 , 1 3 8 , 1 7 2 , 
1 7 5 , 1 7 6 , 1 7 8 , 1 8 0 , 1 9 4 , 1 9 7 , 1 9 9 , 
2 0 3 , 2 2 4 , 2 6 6 , 2 7 2 , see also 
Fisher, M.E. and Goh, B.S.; Vincent, 
T . L . and Goh, B.S.; Vincent, T . L . et al. 
Goh, B.S. and Agnew, T.T., 1 1 2 , 1 2 1 , 
1 2 2 , 1 3 6 , 1 7 2 , 1 7 3 , 2 1 2 , 2 2 9 , 271, 
272 
Goh, B.S. and Jennings, J . L . , 6 5 , 1 7 5 , 
1 7 9 , 1 9 6 , 2 0 3 , 2 0 9 , 2 2 4 , 2 7 2 
Goh, B.S., Leitmann, G. and Vincent, T . L . , 
1 3 , 2 8 , 2 2 8 , 2 4 5 , 2 6 5 , 2 6 6 , 2 7 2 
Goh, B.S., Peng, W . Y . , Vincent, T . L . and 
Riley, J . J . , 2 7 2

--- Page 283 ---

283 
Goh, B.S., Vincent, T . L . and Leitmann, G., 
2 5 6 , 2 7 2 
Goh, B.S., Wilson, D.J. and Vincent, T . L . , 
2 4 2 , 2 6 6 , 272 
Goodman, D., 2 2 4 , 272 
Gopalsamy, K., 2 1 6 , 2 2 5 , 272 
Gordon, H.S., 1 7 2 , 272 
Guckenheimer, J . , Oster, G. and Ipaktchi, 
Α., 1 1 2 , 1 2 2 , 2 7 2 
Gulland, J . A . , 1 2 3 , 1 7 2 , 272 
Gurel, O. and Lapidus, L . , 9, 1 3 , 4 5 , 2 7 2 
Gutierrez, A.P., see Gilbert et al. 
Haddad, Α., see Albrecht, F . et al. 
Hadeler, K.P., Van der Heiden, U. and 
Rothe, F . , 2 1 6 , 2 2 5 , 2 7 2 
Hagen, K.S., Van den Bosch, R. and 
Dahlsten, D.L., 2 3 3 , 2 7 2 
Hahn, F.H., see Arrow, K . J . and Hahn, 
F H 
Hahn, W., 6, 9, 1 3 , 4 5 , 1 2 1 , 2 7 2 
Hallam, T.G., see Gard, T.C. and Hallam, 
T.G. 
Harris, J . G . K . , see Cushing, D.H. and 
Harris, J . G . K . 
Harrison, G.W., 9, 1 0 , 1 1 , 8 9 , 1 2 1 , 1 2 2 , 
2 7 2 
Hassell, M.P., 1 3 , 7 7 , 9 7 , 9 8 , 1 2 2 , 1 3 6 , 
1 7 2 , 2 7 2 
Hassell, M.P. and Comins, H.N., 9 4 , 9 8 , 
2 7 2 
Hassell, M.P., Lawton, J . H . and Beddington, 
J . R . , 1 7 2 , 2 3 1 , 2 6 6 , 2 7 2 , 273 
Hassell, M.P. and May, R.M., 2 2 9 , 2 3 1 , 
2 6 5 , 2 7 2 
Hastings, Α., 1 3 , 2 1 6 , 2 1 7 , 2 1 8 , 2 2 4 , 2 2 5 , 
273 
Haynes, D.L., see Tummala, R . L . and 
Haynes, D.L., see also Tummala et al. 
Ho, Y . C . , see Bryson, A . E . and Ho, Y . C . , 
see also Starr, A.W. and Ho, Y . C . 
Holling, C S . , 2, 1 3 , 6 2 , 7 7 , 8 9 , 1 2 2 , 2 3 1 , 
2 7 2 , see also Ludwig, D. et al. 
Holt, S.J., see Beverton, R . J . H . and Holt, 
S.J. 
Horn, H.S. and MacArthur, R.H., 2 1 6 , 
2 2 5 , 2 7 3 
Hoy, J . B . , see Davis, P . E . et al. 
Hsu, S.B., 9, 1 1 , 1 3 , 1 2 1 , 1 8 5 , 1 8 6 , 1 9 0 , 
1 9 1 , 2 0 3 , 2 2 4 , 2 4 1 , 2 7 3 
Huber, R.T., see Giese, R . L . et al. 
Hughes, R.D., see Clark et al. 
Huffaker, C.B., 2 1 6 , 2 2 5 , 273 
Huffaker, C.B. and Messenger, P.S., 2 2 7 , 
2 6 5 , 2 7 3 
Hurwicz, L . , see Arrow, K . J . et al. 
Hussey, N.W. and Bravenboer, L . , 2 2 7 , 
2 6 5 , 2 7 3 , see also Burges, H.D. and 
Hussey, N.W. 
Innis, G., 1 1 , 1 3 , 9 3 , 1 2 2 , 2 7 3 
Intrilligator, M.D., 4 3 , 2 7 3 
Ipaktchi, Α., see Guckenheimer, J . et al. 
Jacobson, D.H., see Bell, D.J. and Jacobson, 
D.H. 
Jacquette, D.L., 2 6 5 , 2 6 6 , 2 7 3 
Jarosch, H.S., see Brauer, F . et al. 
Jennings, J . L . , see Goh, B.S. and Jennings, 
J . L . 
Johnson, C R . , 7 6 , 2 7 3 
Jones, D.D., see Ludwig, D. et al. 
Jones, R . E . , see Gilbert, N. et al. 
Jörne, J . and Carmi, S., 2 1 6 , 2 2 4 , 2 2 5 , 
2 7 3 
Junji Hamai, see Laing, J . E . and Jungi 
Hamai 
J u r y , E . I . , 9 8 , 1 2 2 , 2 7 3 
Kaiman, R . E . , 1 3 , 1 2 2 , 2 7 3 
Kaiman, R . E . and Bertram, J . E . , 2, 1 3 , 
1 0 1 , 1 2 2 , 1 4 2 , 2 7 3 
Karlin, S. and McGregor, J . , 2 1 6 , 2 2 5 , 2 7 3 
Kazarinoff, N.D. and Van den Driessche, 
P., 1 2 1 , 274 
Kelley, H.J., Kopp, R . E . and Moyer, H.G., 
1 6 , 
274 
Kloeden, P . E . , see Fisher, M.E. and 
Kloeden, P . E . 
Kilmer, W . L . , 1 3 , 1 2 1 , 2 7 4 
Kirkwood, G.P., see Allen, K . R . and 
Kirkwood, G.P. 
Kloeden, P., see Diamond, P. and 
Kloeden, P. 
Kolmogoroff, A.N., 7 7 , 1 2 1 , 274 
Kondo, B . , see Araki, M. and Kondo, B . 
Kopp, R . E . , see Kelley, H . J . et al. 
Krasovskii, N.N., see Barbashin, E.A. and 
Krasovskii, N.N. 
Kuester, J . L . and Mize, J . H . , 4 3 , 274 
Kuo, B.C., see Tabak, D. and K u o , B.C. 
Kushner, H.J., 1 2 2 , 2 7 4 
Laing, J . E . and Jungi Hamai, 2 2 9 , 274 
Lapidus, L . , see Gurel, O. and Lapidus, L . 
Larkin, P.A., 1 2 3 , 1 7 2 , 1 7 3 , 274

--- Page 284 ---

284 
LaSalle, J . P . , 
Wl, 
1 0 4 , 1 2 2 , 1 4 2 , 1 8 5 , 
2 1 5 , 
274 
LaSalle, J . P . and Lefschetz, S., 4 5 , 5 0 , 5 6 , 
8 9 , 1 2 1 , 1 2 2 , 2 7 4 
Lashiher, A.M. and Storey, C , 8 9 , 1 2 2 , 
274 
Lawden, D.F., 1 5 , 1 6 , 2 8 , 4 3 , 274 
Lawton, J . H . , see Beddington et al., see 
also Hassell, M.P. et al.; Pimm, S.L. and 
Lawton, J . H . 
Lee, E . B . and Markus, L . , 4 3 , 1 7 5 , 1 8 1 , 
274 
Lefkovitch, L.P., 1 7 3 , 274 
Lefschetz, S., see LaSalle, J . P . and 
Lefschetz, S. 
Leitmann, G., 1 5 , 1 6 , 4 3 , 274, 
see also 
Goh, B.S. et al.; Vincent, T . L . and 
Leitmann, G. 
Leitmann, G. and Marzollo, Α., 4 3 , 274 
Leslie, P.H., 1 7 3 , 2 7 4 
Leung, Α., 2 0 3 , 2 2 4 , 274 
Levin, S.A., 2 0 3 , 2 1 6 , 2 1 8 , 2 1 9 , 2 2 0 , 2 2 4 , 
2 2 5 , 2 7 4 
Levins, R., 1 3 , 2 7 5 
Levins, R. and Culver, D., 2 1 6 , 2 2 5 , 275 
Lewontin, R.C., 2, 1 3 , 1 2 2 , 2 7 5 
Li, T . Y . and Yorke, J . A . , 1 1 2 , 1 2 2 , 2 7 5 
Liapunov, A.M., 3, 5, 6, 7, 1 3 , 1 7 6 , 2 7 5 
Lotka, A . J . , 1 3 , 1 2 1 , 2 7 5 
Ludwig, D., 1 3 , 1 2 2 , 2 5 6 , 2 7 5 
Ludwig, D., Jones, D.D. and Holling, C S . , 
2 6 5 , 2 7 5 
MacArthur, R.H., 2 2 4 , 2 7 5 , see also Horn, 
H.S. and MacArthur, R.H.; Rosenzweig, 
M.L. and MacArthur, R.H. 
MacDonald, N., 2 1 0 , 2 2 5 , 2 7 5 
McCormick, G.P., see Fiacco, A.V. and 
McCormick, G.P. 
McGregor, J . , see Karlin, S. and McGregor, J . 
Mancill, J . D . , 1 3 3 , 2 7 5 
Mangel, M., see Clark, C.W. and Mangel, M. 
Mann, S.H., 2 6 6 , 2 7 5 
Markus, L . , see Lee, E . B . and Markus, L . 
Marotto, F . R . , 1 2 2 , 2 7 5 
May, R.M., 2, 1 3 , 7 0 , 7 8 , 7 9 , 8 5 , 9 4 , 1 1 1 , 
1 1 2 , 1 1 4 , 1 2 1 , 1 2 2 , 1 4 5 , 1 7 5 , 1 7 7 , 
1 7 8 , 1 7 9 , 1 9 7 , 2 1 0 , 2 2 4 , 2 2 5 , 2 7 5 , see 
also Anderson, R.M. and May, R.M.; 
Beddington, J . R . and May, R.M.; 
Hassell, M.R. and May, R.M. 
May, R.M. and Anderson, R.M., 2 2 9 , 2 6 6 , 
2 7 5 
May, R.M. and Oster, G.F., 1 2 2 , 2 7 5 
Maynard Smith, J . , 2, 1 3 , 2 7 5 
Mazanov, Α., 2 2 4 , 2 7 5 
McNaughton, S.J., 2 2 4 , 2 7 5 
Messenger, P.S., see Huffaker, C.B. and 
Messenger, P.S. 
Miele, Α., 1 3 3 , 2 7 5 
Mischenko, E . F . , see Pontryagin, L.S. et 
al. 
> 
Mize, J . H . , see Kuester, J . L . and Mize, J . H . 
Morris, R . F . , see Clark, L . R . et al. 
Moran, P.A.P., 1 3 6 , 1 4 5 , 1 7 2 , 2 7 5 
Moyer, H.G., see Kelley, H.J. et al. 
Munro, G.R., see Clark, C.W. and Munro, 
G.R., see also Clark, C.W. et al. 
Murdoch, W.W., 6 2 , 2 3 3 , 2 6 6 , 2 7 5 , see 
also Vater, A. and Murdoch, W.W. 
Myers, K., see Davis, P . E . et al. 
Nakata, J . , see Doutt, R . L . and Nakata, J . 
Noy-Meier, I., 2 6 6 , 2 7 5 , 276 
Oaten, A. and Murdoch, W.W., 2 3 1 , 2 6 5 , 
276 
Odum, E.P., 5 8 , 6 6 , 7 0 , 7 9 , 8 5 , 1 0 9 , 
276 
Oster, G., see Auslander, D. et al., see also 
Guckenheimer, J . et al.; May, R.M. and 
Oster, G.F. 
Orians, G.H., 1 3 , 2 7 6 
Othmer, H.G. and Scriven, L . E . , 2 1 6 , 2 2 5 , 
2 7 6 , see also Ashkenazi, M. and 
Othmer, H.G. 
Paine, R.T., 2 0 2 , 2 7 6 
Palm, W . J . , 1 7 2 , 2 7 6 
Parker, F.D., 2 2 7 , 2 7 6 
Patten, B.C., 1 3 , 2 7 6 
Peart, R.M., see Giese, R . L . et al. 
Pease, P., 2 6 2 , 2 7 6 
Pella, J . J . and Tomlinson, P.K., 1 7 2 , 2 7 6 
Peng, W . Y . , see Goh, B.S. et al. 
Pianka, E . R . , 1 3 , 5 8 , 1 2 1 , 2 7 6 
Pielou, E . C , 1 3 , 2 7 6 
Pimm, S.L. and Lawton, J . H . , 2 2 4 , 2 7 6 
Polak, E . , see Canon et al. 
Pontryagin, L.S., Boltyanskii, V.G., 
Gamkrelidze, R . V . and Mischenko, E . E . , 
1 6 , 4 3 , 2 7 6 
Quirk, J . and Saposnik, R., 9, 2 7 6 
Ratcliffe, F.N., see Fenner, F . and 
Ratcliffe, F.N.

--- Page 285 ---

285 
Reddingius, J . and Den Boer, P . J . , 2 2 5 , 
2 7 6 
Reed, W . J . , 5, 1 3 , 1 7 3 , 2 7 6 
Rescigno, A. and Richardson, I.W., 7 8 , 
1 2 1 , 2 7 6 
Richardson, I.W., see Rescigno, A. and 
Richardson, I.W. 
Ricker, W . E . , 9 7 , 1 1 1 , 1 2 3 , 1 3 6 , 1 4 5 , 1 6 3 , 
1 7 2 , 2 7 6 
Riley, J . J . , see Goh, B.S. et al. 
Rinaldi, S., see Gatto, M. and Rinaldi, S. 
Rishel, R.W., see Fleming, W.H. and 
Rishel, R.W. 
Roberts, Α., 1 7 5 , 1 7 9 , 2 0 3 , 2 2 4 , 2 7 6 
Rorres, C. and Fair, W., 1 7 3 , 2 7 6 
Rosen, G., 2 1 6 , 2 2 4 , 2 2 5 , 2 7 6 
Rosenzweig, M.L., 1 2 1 , 1 7 3 , 1 9 4 , 2 7 6 
Rosenzweig, M.L. and Mac Arthur, R., 8 1 , 
1 2 1 , 2 3 5 , 2 3 6 , 2 4 1 , 2 6 6 , 2 7 7 
Rothe, F . , see Hadeler, K.P. et al. 
Roughgarden, J . , see Feldman, M.W. and 
Roughgarden, J . 
Ruesink, W.G., 2 6 5 , 277 
Sanchez, D.A., see Brauer, F . and Sanchez, 
D.A. 
Saposnik, S., see Quirk, J . and Saposnik, 
S. 
Schaefer, M.B., 1 2 1 , 1 7 2 , 2 7 7 
Schevill, W.E., 1 7 3 , 2 7 7 
Schnute, J . , 1 7 2 , 2 7 7 
Schoener, T.W., 5 8 , 6 0 , 8 4 , 1 2 1 , 2 7 7 
Schreuder, G.F., 2 6 2 , 2 7 6 
Schultz, D.G., 9, 1 3 , 4 5 , 2 7 7 
Scriven, L . E . , see Othmer, H.G. and 
Scriven, L . E . 
Scudo, F.M., 2 2 5 , 2 7 7 
Semura, J . S . , see Tuljapurkar, S.D. and 
Semura, J . S . 
Shoemaker, C.A., 1 3 , 2 2 8 , 2 6 5 , 2 6 6 , 2 7 7 
Siljak, D.D., 1 7 6 , 1 9 5 , 2 2 4 , 2 7 7 
Silliman, R.P., 1 2 1 , 1 7 2 , 2 7 7 
Silvert, W., 1 7 2 , 2 7 7 
Silvert, W. and Smith, W.R., 1 6 6 , 1 7 2 , 
1 7 3 , 2 7 7 
Simberloff, D., 2 0 2 , 2 7 7 
Skellam, J . G . , 2 1 6 , 2 2 5 , 2 7 7 
Slatkin, M., 2 1 6 , 2 2 5 , 277 
Slobodkin, L . B . , 1 2 1 , 2 7 7 
Smith, B . J . , 2 6 2 , 2 7 7 
Smith, R . F . , see Corbet, P.S. and Smith, 
R . F . 
Smith, V . L . , 1 7 2 , 2 6 2 , 2 7 7 
Smith, W.R., see Silvert, W. and Smith, 
W.R. 
Starr, A.W. and Ho, Y . C . , 4 3 , 2 7 7 
Steele, J . H . , 2 1 6 , 2 2 5 , 2 7 7 
Storey, C , see Lashiher, A.M. and Storey, 
C. 
Strebel, D.E. and Goel, N.S., 2 3 6 , 2 6 6 , 2 7 7 
Strobeck, C , 2 2 4 , 2 7 7 
Swann, G. and Vincent, T . L . , 5 8 , 1 2 1 , 
2 7 7 
Szego, G.P., see Dixon, L.C.W. and 
Szego, G.P. 
Tabak, D. and Kuo, B.C., 3 6 , 4 3 , 278 
Takayama, Α., 9, 278 
Takeuchi, Y . , Adachi, N. and Tokumaru, 
H., 1 3 , 2 2 4 , 2 7 8 
Tanada, Y . , 2 5 6 , 2 7 8 
Taylor, D.B., see Beddington, J . R . and 
Taylor, D.B. 
Tokumaru, H., see Takeuchi, Y . et al. 
Tomlinson, P.K., see Pella, J . J . and 
Tomlinson, P.K. 
Tuckwell, H.C., 1 2 2 , 2 7 8 
Tuljapurkar, S.D. and Semura, J . S . , 1 2 2 , 
2 7 8 
Tummala, R . L . and Haynes, D.L., 2 6 5 , 2 7 8 
Tummala, R . L . , Haynes, D.L. and Croft, 
B.A., 2 6 5 , 2 7 8 
Turelli, M., 1 2 2 , 2 7 8 
Usher, M.B., 1 7 3 , 2 7 8 
Van den Bosch, R., see Hagen, K.S. et al. 
Van den Driessche, P., see Kazarinoff, 
N.D. and Van den Driessche, P. 
Van der Heiden, U., see Hadeler, K.P. et 
al. 
Van der Vaart, H.R., 1 1 , 1 3 , 9 3 , 2 7 8 
Vincent, T . L . , 2 6 5 , 2 7 8 , see also Cliff, 
E.M. and Vincent, T . L . ; Fisher, M.E. 
et al.; Goh, B.S. et al.; Swann, G. and 
Vincent, T . L . 
Vincent, T . L . and Anderson, L . R . , 8 9 , 
1 8 0 , 1 2 2 , 2 2 4 , 2 7 8 
Vincent, T . L . , Cliff, E.M. and Goh, B.S., 
2 4 2 , 2 4 5 , 2 7 8 
Vincent, T . L . , Everett, L.G., Lee, C S . and 
Pulliam, H.R., 1 3 , 2 7 8 
Vincent, T . L . and Goh, B.S., 1 9 , 2 0 , 2 7 , 
4 3 , 278 
Vincent, T . L . , Lee, C S . and Goh, B.S., 
1 3 , 3 3 , 4 3 , 2 4 2 , 2 5 3 , 2 7 8

--- Page 286 ---

286 
Vincent, T . L . and Leitmann, G., 4 3 , 2 7 8 
Vincent, T . L . and Skowronski, J . M . , 8 9 , 
1 2 2 , 2 5 3 , 2 7 8 
Volterra, V., 1 3 , 5 8 , 1 2 1 , 2 1 0 , 2 2 5 , 
278 
Walters, C.J., 5, 
278 
Walters, C.J. and Hilborn, R., 4, 5, 1 3 , 
2 7 8 , 
279 
Waltman, P.E., 2 5 6 , 2 7 9 , see also 
Freedman, H.I. and Waltman, P.E. 
Wangersky, P . J . and Cunningham, W . J . , 
2 1 0 , 2 2 5 , 2 7 9 
Watt, K . F . F . , 1 3 , 1 6 , 2 7 9 
Wax, N., see Albrecht, F . et al. 
Wickwire, Κ., 2 8 , 2 5 6 , 2 7 9 
Wiegert, R.G., 1 3 , 2 7 9 
Willems, J . L . , 2, 9 , 1 3 , 4 5 , 5 0 , 1 2 1 , 1 2 2 , 
1 9 4 , 2 1 3 , 2 7 9 
Williamson, M.H., 1 3 , 2 7 9 
Wilson, D.J., see Goh, B.S. et al. 
Wörz-Busekros, Α., 2 1 0 , 2 1 3 , 2 2 5 , 2 7 9 
Wu, L . S . Y . , 1 3 , 1 2 2 , 2 7 9 
Yorke, J . A . , see Li, T . Y . and Y o r k e , J . A . 
Yoshizawa, T., 1 2 2 , 2 7 9

--- Page 287 ---

287 
SUBJECT INDEX 
Abnormality, 1 9 — 2 0 , 4 2 
Age structured population, 9 9 — 1 0 0 , 1 5 8 — 
1 6 5 
Allee effect, 5 9 
Asymptotic stability, see Local stability 
Beverton—Holt model, 1 4 7 — 1 5 8 
Biological control, 2 2 7 — 2 6 1 
Bionomic equilibrium, 1 3 4 — 1 3 5 
Competition model, 6 6 — 7 0 , 7 3 — 7 7 , 8 1 — 
8 5 , 1 1 8 - 1 2 1 
Complexity versus stability, 1 7 5 — 1 8 3 
Connective stability, 1 9 4 — 1 9 7 
Constant effort, 6 0 
Costate variables, 27 
Control problems, 3—4, 2 6 — 2 9 , 2 3 9 — 
2 6 1 
Delayed recruitment, 1 5 8 — 1 6 5 
Design problem, 3—4, 2 2 8 — 2 3 5 
Difference equation, 1 1 — 1 3 , 3 5 — 4 3 , 9 3 — 
1 2 1 , 1 3 5 - 1 4 7 , 
1 5 8 - 1 6 5 
Differential equation versus difference 
equation, 1 1 
Diffusion, 2 1 8 — 2 2 4 
Discount rate, 1 3 0 , 1 6 0 — 1 7 0 
Discrete time model, see 
Difference 
equation 
Disturbance, 2 
Dynamic programming, 1 6 
Ecological engineering, 3—5 
Ecosystem models, see 
Multispecies 
models, see also Time delay, Spatial 
heterogeneity 
Energy principle, 3, 51 
Epidemic, 2 5 6 — 2 6 2 
Equilibrium, 4 7 , 9 5 
Escapement, 1 3 6 , 1 6 0 
Exploited population, see Harvested 
population 
Extremal, 2 8 
Feasible equilibrium, see Positive 
equilibrium 
Feedback control, 4, 1 2 7 — 1 2 9 , 1 3 3 , 
2 4 2 — 2 4 5 
Finite stability, 4 9 — 5 3 , 1 0 1 — 1 0 5 , 1 6 1 — 
1 6 2 , 1 6 5 
Fokker—Planck equation, 8 9 
F o o d chain, 1 8 8 
Generalized Legendre condition, 2 8 — 2 9 
Gilpin and Ayala's model, 7 3 — 7 7 
Global attractor, 1 4 4 — 1 4 5 
Global minimum, 17 
Global stability, 3, 6 - 1 0 , 5 3 — 5 7 , 7 8 — 8 5 , 
1 0 5 - 1 1 1 , 1 3 9 - 1 4 7 , 1 6 2 - 1 6 4 , 1 9 2 -
1 9 4 , 2 1 1 - 2 2 4 
Graphical analysis, 2 3 5 — 2 4 5 
Hamiltonian, 2 6 , 3 3 , 3 6 
Harvested population, 5 9 — 6 4 , 1 3 7 — 1 3 8 , 
1 6 5 — 1 7 2 , 1 9 4 
Immigration, 1 9 4 , 2 1 8 
Inequality constraint 2 0 , 2 6 , 3 0 
Insecticide, 2 4 0 , 2 4 7 — 2 5 1 
Isocline, 2 3 5 
Kolmogoroff equation, 8 9 
Lagrange multipliers, 1 9 
Level surface, 5 1 
Liapunov function, 5—11, 7 8 — 8 1 , 1 0 1 — 
1 1 1 , 1 3 4 - 1 3 5 , 1 3 9 — 1 4 5 , 1 6 1 - 1 6 5 , 
1 8 4 - 1 8 5 , 2 0 5 , 2 1 4 , 2 2 3 , 2 3 4 
Liapunov-like function, 8 6 
Limit cycle, 8 7 — 8 8

--- Page 288 ---

288 
Limited fishing season. 1 5 3 — 1 5 8 
Local minimum. 1 8 
Local stability, 2, 4 5 — 4 9 , 9 5 — 1 0 1 , 237— 
2 4 2 
Logistic model, 5 7 , 1 2 4 — 1 3 3 
Long-term optimality, 1 6 , 3 2 — 3 5 
L o t k a - V o l t e r r a model, 6 6 — 7 2 , 1 8 7 — 1 9 1 , 
1 9 6 - 1 9 7 
Maximum principle, 1 6 
Maximum sustainable yield ( M S Y ) 6 2 , 
1 2 4 , 1 2 8 , 1 3 7 , 1 6 0 
Mesh size, see Optimal size limit 
Multiple objectives, 2 3 — 2 5 , 1 2 3 
Multispecies models, 1 6 5 — 1 7 2 , 1 8 4 — 2 0 9 , 
2 1 3 - 2 2 4 
Mutualism, 6 7 — 7 0 , 1 9 0 
Neutral stability, 6 6 
Noninferior solution, 2 4 — 2 5 
Nonlinear programming, 2 0 — 2 1 
Nonvulnerability, 3, 8 9 — 9 3 , 1 1 6 — 1 1 8 , 
1 8 1 - 1 8 3 , 1 9 7 - 2 0 2 
Objective function, 2 6 , 3 6 
Optimal control theory 
—, continuous time, 2 6 — 3 5 
—, discrete time, 35—43 
Optimal size limit, 1 4 7 — 1 5 8 
Pareto optimal, 2 4 
Pest control, 2 2 9 — 2 6 1 
Poincare transform, 1 8 6 — 1 8 7 , 1 9 0 — 1 9 1 
Positive equilibrium, 4 7 , 9 5 , 1 7 9 , 2 0 9 
Post-harvest density, 3 8 , 1 3 6 , 1 6 0 
Practical stability, 8 9 
Prey—predator system, 1 0 , 6 6 — 7 2 , 77— 
8 3 , 2 2 9 — 2 5 5 
Recruitment, 1 4 7 
Region of attraction, see Finite stability, 
see also Global stability 
Region of ultimate confinement, 8 5 — 8 9 , 
1 1 1 - 1 1 8 
Replacement problem, 2 6 2 — 2 6 5 
Resilience, 8 9 
Routh—Hurwitz stability criterion, 4 8 
Schoener's model, 8 4 
Schur—Cohn criterion, 9 8 
Sector stability, 2 0 2 — 2 0 9 , 2 1 9 — 2 2 2 
Short term optimality, 3 2 
Single-species model, 5 7 — 6 4 
Singular control, 2 7 — 2 9 , 4 2 , 1 2 7 , 1 6 7 — 
1 7 2 
Spatial heterogeneity, 2 1 6 — 2 2 4 , 2 3 3 — 
2 3 5 
Stability concepts, 2, 3, see also Connec­
tive stability, Finite stability, Global 
attractor, Global stability, Local 
stability, Nonvulnerability, Region of 
ultimate confinement, Sector stability 
Stochastic model, 8 9 
Stochastic optimal control, 4 
Stock recruitment model, 1 3 5 — 1 4 7 
State vector, 2 6 
Suboptimal solution, 2 2 
Symbiosis, see Mutualism 
Terminal constraint, 3 0 
Time delay, 3 9 — 4 1 , 9 9 - 1 0 0 , 1 5 8 - 1 6 5 , 
2 0 9 - 2 1 6 
Total stability, 8 9 
Transversality condition, 3 1 
Two-species model, 6 6 — 8 5 , 1 8 9 — 1 9 1 , 
2 2 9 - 2 5 5 
Unspecified parameters, 6 4 — 6 5 
Volterra, see Lotka—Volterra model 
Quota policy, 5 2 , 6 0 
Whale model, 9 9 - 1 0 0 , 1 5 8 - 1 6 5
