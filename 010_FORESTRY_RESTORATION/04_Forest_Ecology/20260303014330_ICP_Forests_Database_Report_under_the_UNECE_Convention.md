---
title: "ICP_Forests_Database_Report_under_the_UNECE_Convention"
source: "ICP_Forests_Database_Report_under_the_UNECE_Convention.pdf"
date: 2026-03-03T01:43:17.557144
type: pdf-extraction
tags:
  - forestry
  - training
  - 04_Forest_Ecology
---

# ICP_Forests_Database_Report_under_the_UNECE_Convention

**Original File:** `ICP_Forests_Database_Report_under_the_UNECE_Convention.pdf`
**Total Pages:** 19
**Processed on:** 2026-03-03T01:43:17.557144

Based on the provided information, here are some key changes implemented in various ICP Forests surveys in 2021:

- **Litterfall (Level II)**: New columns were added for heavy metals like Arsenic, Chromium, Cobalt, Mercury, and Nickel.

- **Air Quality (Level II)**: Plausibility limits for O3, NH3, and NO2 were updated. New limits are shown in green color.

- **Ground Vegetation Biomass and Nutrients Analyses (Level II)**: Merged forms GBM and GBO into one form called "GBM".

- **Crown Condition (Level I and II)**:
  - New dictionary categories introduced like "Upper two-thirds of the crown" and "Other cases".
  - Entries in d_cause and d_cause_sc_name dictionaries were harmonized.
  - Description/definition for some codes was updated or codes deactivated.

- **Foliage (Level I and II)**: 
  - New tests added to check pretreatment methods and determination procedures for elements.
  - Merged forms FOM and FOO into one form called "FOM".

- **Soil Solution (Level II)**:
  - Forms SSM and SSO merged into one form called "SSM".
  
- **Soil (Level I)**:
  - Form SOM: New column for P_ox was added.
  - Dummy lines were created in PRF for profiles without matching existing ones.

- **Overall**: 
  - Tests for plausible ranges added to Foliage and Soil analysis data.
  - New categories and dictionary changes applied across various surveys.

In summary, the major updates included adding new columns and tests, merging forms, harmonizing dictionaries, and making other adjustments to improve data quality and organization.

---
*Note: This is an AI-generated synthesis. The complete original text and its embeddings reside natively in the local PostgreSQL database (Open Brain) for agentic retrieval.*

## Raw Source Text (For Context)


--- Page 1 ---

Database Report 
Technical Changes in 2021 
ICP Forests Database Report under the UNECE Convention 
on Long-range Transboundary Air Pollution (Air Convention)

--- Page 2 ---

United Nations Economic Commission for Europe (UNECE) 
Convention on Long-range Transboundary Air Pollution (Air Convention) 
International Co-operative Programme on Assessment and Monitoring of Air Pollution Effects on Forests (ICP Forests) 
http://icp-forests.net 
 
 
Contact 
Programme Co-ordinating Centre of ICP Forests 
Kai Schwärzel, Head 
Thünen Institute of Forest Ecosystems 
Alfred-Möller-Str. 1, Haus 41/42 
16225 Eberswalde, Germany 
Email: pcc-icpforests@thuenen.de 
Recommended citation 
Kirchner T, Haggenmüller K, editors (2021) Database Report: Technical Changes in 2021.  
ICP Forests Database Report under the UNECE Convention on Long-range Transboundary Air Pollution  
(Air Convention). Eberswalde: Thünen Institute.  
 
Copyright 2021 by Thünen Institute

--- Page 3 ---

ICP FORESTS DATABASE REPORT 
 
Technical Changes in 2021 
3
CONTENTS 
INTRODUCTORY REMARKS ................................................................................................................................................................. 5 
SYSTEM INSTALLATION (LEVEL I and II) ......................................................................................................................................... 6 
Forms PL1 / PLT (Plot description) ...................................................................................................................................................................... 6 
Forms ST1 / STA (Stand description) ................................................................................................................................................................... 6 
Form TCO (Tree coordinates - Level II only) ..................................................................................................................................................... 8 
Form EVE (Forest events - Level II only) ............................................................................................................................................................ 8 
GROWTH AND INCREMENT (LEVEL II) ............................................................................................................................................. 8 
FORM IPM (Periodic measurements) ................................................................................................................................................................... 8 
PHENOLOGY (LEVEL II) ......................................................................................................................................................................... 9 
Overall ............................................................................................................................................................................................................................ 9 
Form PLP (Registration of trees) ......................................................................................................................................................................... 10 
GROUND VEGETATION (LEVEL II) .................................................................................................................................................... 10 
Form PLV (Plot file) ................................................................................................................................................................................................. 10 
OZONE INJURY (LEVEL II) .................................................................................................................................................................. 11 
Form PLL (Plot file) .................................................................................................................................................................................................. 11 
Form LSS (Light exposed sampling site) .......................................................................................................................................................... 11 
Overall .......................................................................................................................................................................................................................... 12 
SOIL (LEVEL I AND II) .......................................................................................................................................................................... 13 
New survey S1 (Level I) .......................................................................................................................................................................................... 13 
Form PRF (Profile description) ............................................................................................................................................................................. 13 
Form SOM (Soil analysis) ....................................................................................................................................................................................... 15 
SOIL SOLUTION (LEVEL II) ................................................................................................................................................................. 15 
Forms SSM and SSO (Measurements)................................................................................................................................................................ 15 
FOLIAGE (LEVEL I AND II) .................................................................................................................................................................. 16 
New survey F1 (Level I) .......................................................................................................................................................................................... 16 
Form LQA (Laboratory information) ................................................................................................................................................................... 16 
Form FOM (Foliar analysis information) ........................................................................................................................................................... 17 
LITTERFALL (LEVEL II) ........................................................................................................................................................................ 17 
Form LFM (Analysis information) ........................................................................................................................................................................ 17 
AIR QUALITY (LEVEL II) ...................................................................................................................................................................... 18 
Overall .......................................................................................................................................................................................................................... 18 
GROUND VEGETATION BIOMASS AND NUTRIENTS ANALYSES (LEVEL II) .......................................................................... 18

--- Page 4 ---

ICP FORESTS DATABASE REPORT 
 
Technical Changes in 2021 
4
Forms GBM and GBO (Measurements) .............................................................................................................................................................. 18 
CROWN CONDITION (LEVEL I AND II) ............................................................................................................................................ 19 
Forms TRE / TRC (Crown condition) https://icp-forests.org/documentation/Surveys/C1/TRE.html ........................................... 19 
Forms TRF / TRD (Damage parameters) ........................................................................................................................................................... 19

--- Page 5 ---

ICP FORESTS DATABASE REPORT 
 
Technical Changes in 2021 
5
INTRODUCTORY REMARKS 
This document is supposed to give a quick overview of relevant database changes in the period 2019 – 2021. Editorial 
changes (e.g. language improvements) are not mentioned here. 
Most of the changes come from the manual revision in 2019.  
In addition, some changes were needed to correct wrong implementations from the past. 
Such changes which do not affect the monitoring itself are marked with “database maintenance” in the document. 
Please take into consideration, that this report can represent just an intermediate status.  
The current specifications are always documented under: https://icp-forests.org/documentation.

--- Page 6 ---

ICP FORESTS DATABASE REPORT 
 
Technical Changes in 2021 
6
SYSTEM INSTALLATION (LEVEL I AND II) 
Forms PL1 / PLT (Plot description) 
https://icp-forests.org/documentation/Surveys/Y1/PL1.html    |   https://icp-forests.org/documentation/Surveys/SI/PLT.html 
New column 
 
relocated_plot: In case a new plot is installed in order to replace another one, the number of the replaced plot is to 
be reported.  
E.g. Plot number 33 has been destroyed by a storm, then a replacement plot was installed with code 100 at a 
different location. The attribute PLT.relocated_plot of the new plot 100 has to be filled with 33. 
Mandatory 
Following attributes have changed from optional to mandatory in accordance to the manual: 
 
plot_size: plot area, at least 0,25 ha, does not include the area of the buffer zone 
 
Forms ST1 / STA (Stand description) 
https://icp-forests.org/documentation/Surveys/Y1/ST1.html   |   https://icp-forests.org/documentation/Surveys/SI/STA.html 
New columns 
 
cutting_year: Unless the stand is managed to keep a permanent cover of adult trees, the year of the final cutting 
must be approximately estimated (while assuming that no unplanned disturbance will destroy the stand earlier). 
 
canopy_gaps: Stand heterogeneity is evaluated with the cumulated area of large gaps in the canopy (gaps larger 
than those caused by thinning operations) due to e.g. storm damages. 
 
stand_rotation: The stand rotation number aims to count the successive tree populations that have been monitored 
in the same plot area. It starts from 1 with the first forest stand monitored since plot installation. 
 
code_notimb_util_buffer: Non-timber utilization in the buffer zone 
 
code_manage_intensity_buffer: Intensity of management in the buffer zone 
Mandatory Level II 
Following attributes have changed from optional to mandatory for Level II plots in accordance to the manual: 
 
top_height: Mean height of the 100 trees with the largest diameter at breast height (dbh) per ha 
 
det_top_height: Determination of top height 
 
cov_layers: Coverage tree layers

--- Page 7 ---

ICP FORESTS DATABASE REPORT 
 
Technical Changes in 2021 
7
Renamed columns 
OLD 
NEW 
code_notimb_util 
code_notimb_util_plot 
code_manage_intensity 
code_manage_intensity_plot 
code_manage_method 
code_silvicult_system 
New dictionary categories 
Changes indicated with green colour in tables 
 
d_prev_landuse: Previous land use 
https://icp-forests.org/documentation/Dictionaries/d_prev_landuse.html 
Code 
Description
From_year
To_year
1  
Farmland, cropland 
1984 
 
2  
Grassland 
1984 
 
3  
Pasture, including silvo-pastural systems 
1984 
2020
3.1  
Shrubland, including heathland / moors 
1984 
 
4  
Drained wetland 
1984 
2020
4.1  
Wetland 
1984 
 
5  
Primary forest 
1984 
 
5.1  
Forest and woodland (other than primary forest) 
1984 
 
6  
Other 
1984 
 
7  
Reclaimed land from mining or industrial activities 
1984 
 
9  
Unknown 
1984 
 
 
Dictionary renamed 
OLD 
NEW 
d_manage_method 
d_silvicult_system

--- Page 8 ---

ICP FORESTS DATABASE REPORT 
 
Technical Changes in 2021 
8
Form TCO (Tree coordinates - Level II only) 
https://icp-forests.org/documentation/Surveys/SI/TCO.html 
The form already existed for many years, but data has not been submitted so far. The form can be used to submit following 
information: 
 
exact coordinates of trees as relative positions to the centre of the plot 
 
numbers used for a specific tree in surveys conducting data on tree level (It is known that a tree might have differing 
numbers in surveys. Having all numbers used for a tree level information can be brought together over different 
surveys.) 
 
information if a tree is inside or outside of the main plot 
 
Form EVE (Forest events - Level II only) 
https://icp-forests.org/documentation/Surveys/SI/EVE.html 
New Form 
 
EVE: Management operations and natural disturbances: All noticeable forest management operations and all natural 
causes of tree losses in Level II plots since plot installation – and even from earlier if the information is available – 
must be listed, dated (as precisely as possible) and documented (as far as known), so that they can be taken into 
account as potential explanatory factors of ecosystem responses. This information must be updated at least every 5 
years. 
 
 
GROWTH AND INCREMENT (LEVEL II) 
FORM IPM (Periodic measurements) 
https://icp-forests.org/documentation/Surveys/GR/IPM.html 
New columns 
 
code_diameter: Exact diameter measurement method, coded in d_diameter  
https://icp-forests.org/documentation/Dictionaries/d_diameter.html 
 
code_volume: Exact volume definition, coded in d_volume 
https://icp-forests.org/documentation/Dictionaries/d_volume.html

--- Page 9 ---

ICP FORESTS DATABASE REPORT 
 
Technical Changes in 2021 
9
PHENOLOGY (LEVEL II) 
Overall 
https://icp-forests.org/documentation/Surveys/PH/index.html 
New dictionary category 
Changes indicated with green colour in tables 
 
d_event: A new phenological phase ‘fruiting’ is introduced as an optional parameter 
https://icp-forests.org/documentation/Dictionaries/d_event.html 
Code 
Description
From_year
To_year
1  
Flushing 
1984 
 
2  
Colour changes 
1984 
 
3  
Leaf/needle fall 
1984 
 
4  
Leaf or crown damage 
1984 
 
5 
Other damage
1984
 
6 
Lammas shoots / 
secondary flushing
1984
 
7 
Flowering
1984
 
8 
Fruiting
1984
 
Dictionary updates 
Changes indicated with green colour in tables 
 
d_event_score: Due to the introduction of the new phenological phase ‘fruiting’ the score descriptions were updated 
as well 
https://icp-forests.org/documentation/Dictionaries/d_event_score.html 
Code
Description
6.0  
Flowering / Fruiting / Damage absent
7.0  
Flowering / Fruiting / Damage present
7.1  
Flowering / Fruiting sparse (optional)
7.2  
Flowering / Fruiting moderate (optional)
7.3  
Flowering / Fruiting abundant or mast 
(optional)

--- Page 10 ---

ICP FORESTS DATABASE REPORT 
 
Technical Changes in 2021 
10
Form PLP (Registration of trees) 
https://icp-forests.org/documentation/Surveys/PH/PLP.html 
New dictionary categories 
Changes indicated with green colour 
 
d_visible_crown: New category ‘Total crown including isolated branches’ was added 
https://icp-forests.org/documentation/Dictionaries/d_visible_crown.html 
Code
Description
1 
Top of the crown
2 
Middle of the crown
3 
Top and middle of the crown
4 
Whole crown
5 
Total crown including isolated branches
 
 
d_direction: New category ‘All sides’ was added 
https://icp-forests.org/documentation/Dictionaries/d_direction.html 
Code 
Description
From_year
To_year
1  
North 
1984 
 
2  
North-east 
1984 
 
3  
East 
1984 
 
4  
South-east 
1984 
 
5  
South 
1984 
 
6  
South-west 
1984 
 
7  
West 
1984 
 
8  
North-west 
1984 
 
9 
All sides
1984
 
 
GROUND VEGETATION (LEVEL II) 
Form PLV (Plot file) 
https://icp-forests.org/documentation/Surveys/GV/PLV.html 
New columns 
 
shrub_low_cover: Shrub low sublayer cover (only ligneous and all climbers) > 0.5 m and ≤ 2 m height. Has to be 
reported in % of total area, e.g. 10,5. 
 
shrub_high_cover: Shrub high sublayer cover (only ligneous and all climbers) > 2 m and ≤ 5 m height. Has to be 
reported in % of total area, e.g. 20,0.

--- Page 11 ---

ICP FORESTS DATABASE REPORT 
 
Technical Changes in 2021 
11
OZONE INJURY (LEVEL II) 
Form PLL (Plot file) 
https://icp-forests.org/documentation/Surveys/OZ/PLL.html 
New columns 
 
code_precision_level (database maintenance): The number of sampled rectangles in LESS sites are determined on 
behalf of a specified error level. Before 2011 experts could choose between the error levels 10% and 20%. The 
higher the error level, the less rectangles are sampled. In 2011 the 20% error (code = 20) was permanently skipped, 
because it led to a too low number of sampled rectangles, thus with lowly reliable results. Consequently since 2011 
only an error level of 10% is valid. In this context the attribute code_precision_level has been removed from the form, 
because it was regarded as needless, for as long as only one value is valid anymore. However, in order to keep up 
comparability with past assessments before 2011, when both error levels were valid, it is necessary to still hold this 
information (harmonization over time). 
Therefore, the column code_precision_level was introduced again in form PLL in year 2021. The existing data gap for 
the years between 2011 and 2020 has been filled with code 10 by PCC (= error level 10%) 
 
length_less: Total length of light exposed edge 
Form LSS (Light exposed sampling site) 
https://icp-forests.org/documentation/Surveys/OZ/LSS.html 
New column 
 
code_aspect: Exposition of each assessed rectangle, based on d_direction 
https://icp-forests.org/documentation/Dictionaries/d_direction.html 
Column moved 
 
code_perenial_annual (database maintenance): The attribute lss.code_perenial_annual was valid from 2002 to 2010 
and finally removed from the data model in 2011. It described if the observed plants had an annual growth (value 'A') 
or were perennial ('P'). In order not to lose the gathered information, it was decided to move it to the dictionary 
d_species_list (https://icp-forests.org/documentation/Dictionaries/d_species_list.html) in the new column 
‘perennial_annual’. In LSS the same plant species may occur several times throughout the countries and years, and 
hereby may show different growth habits (annual and perennial). This has led to following rules for the move of this 
data: 
 
‘A’ for plant species, which have been assigned in LSS as ‘annual’ only 
 
‘P‘ for plant species, which have been assigned in LSS as ‘perennial‘ only 
 
‘PA‘ for plant species, which have been assigned in LSS as both ‘perennial‘ and ‘annual’. 
 
In addition, all plant species which are trees (listed in d_tree_spec) have been marked as perennial.

--- Page 12 ---

ICP FORESTS DATABASE REPORT 
 
Technical Changes in 2021 
12
Overall 
https://icp-forests.org/documentation/Surveys/OZ/index.html 
Redundancy cleanup between species code and species name 
(database maintenance) 
In LTF, OTS and LSS the observed species were described twice: first as a code (using codes from dictionaries d_species_list 
or d_tree_spec) and second using the scientific name (free text). In many cases these two statements did not match 
perfectly. Most of the times this was simply caused by typing errors in the scientific name, but however there are cases 
with different species given in the code and in the name column. Sometimes this was due to synonym names but 
sometimes there were clear contradictions between code and name. 
In order to avoid such contradictions in future, only the species code shall remain and the scientific name column was 
removed from forms used for the data submission.  
In the final database the scientific name columns are kept for the moment. 
In case the code and the name both described the same species, the species name has been deleted. For unsolved cases 
where the code differs from the name both are kept. 
Please download your data to check it for any unsolved cases. 
Please solve those problems and resubmit the corrected survey years. 
As soon as there are no more conflicts in the data, the name columns will be removed. 
New dictionary columns 
 
d_species_list (database maintenance): On the suggestion of ozone chair there was a need to add certain plant 
characteristics for better analysis options. In detail it is about the woodiness of plants (woody or non woody), the 
plant type (broadleaf or conifer) and the type of leave loss (deciduous or evergreen). As a first start the values of the 
plants were already handed over to the PCC by Elena Gottardini.  
Now in d_species_list following three attributes have been added:  
 woody:  
W = Woody, NW = Not woody 
 plant_type:  B = Broadleaf, C = Conifer 
 leaves_loss:  D = Deciduous, E = Evergreen  
 
The attributes have been filled with the values from Elena Gottardini.  
In addition, all plant species which are trees (listed in d_tree_spec) have been marked as woody.  
!!! Please take note that current values are not complete and need to be doublechecked by a botanist. The PCC would 
welcome if experts from the community could give us feedback here and help to complete the list. !!! 
https://icp-forests.org/documentation/Dictionaries/d_species_list.html

--- Page 13 ---

ICP FORESTS DATABASE REPORT 
 
Technical Changes in 2021 
13
SOIL (LEVEL I AND II) 
New survey S1 (Level I) 
https://icp-forests.org/documentation/Surveys/S1/index.html 
The new survey Soil Level I has been implemented. 
It uses the same structure as the Soil Level II survey. 
As decided at the Expert Panel Meeting 2019, Bruno de Vos provided a harmonized dataset of all Level I Soil data available 
at the FSCC. 
All partners are asked now to download and check their data from the ICP Forests data portal. 
Corrections and additions should be resubmitted. 
The survey can be used from now on to submit additional Soil Level I data if available. 
Form PRF (Profile description) 
https://icp-forests.org/documentation/Surveys/SO/PRF.html 
New dictionary columns 
 
d_soil_adjective (database maintenance): Qualifier definitions used in the soil profile description come from the 
WRB (world reference base). Meanwhile the WRB has published several versions and some qualifiers are not valid 
anymore. For better documentation and control of the code’s validity, in d_soil_adjective a column for each WRB 
publication was added, which currently are: FAO_1988, WRB_1998, WRB_2006_2007 and WRB_2014_2015 (see 
screenshot below). 
The new columns have a value of either 0 or 1, meaning the qualifier code is either not valid (= 0) or valid (= 1) in the 
respective WRB-version. As a source we used a list received from the panel chair Nathalie Cools. 
https://icp-forests.org/documentation/Dictionaries/d_soil_adjective.html 
 
 
 
 
d_soil_specifier (database maintenance): Comparable to the qualifiers (previous issue), also the specifiers are 
defined by the WRB (world reference base). Accordingly, also in d_soil_specifier a new column was added for each 
WRB publication, which are at current state: WRB_1998, WRB_2006_2007 and WRB_2014_2015 (see screenshot 
below).

--- Page 14 ---

ICP FORESTS DATABASE REPORT 
 
Technical Changes in 2021 
14
The new columns have a value of either 0 or 1, meaning the specifier code is either not valid (= 0) or valid (= 1) in the 
respective WRB-version. As a source we used a list received from the panel chair Nathalie Cools 
https://icp-forests.org/documentation/Dictionaries/d_soil_specifier.html 
 
 
New column 
 
eff_soil_depth: The effective soil depth replaces 3 attributes: rooting_depth, rock_depth and obstacle_depth. The 
effective soil depth is the depth from top of mineral soil to the continuous rock in cm. Use ‘999’ to report depths 
known to be deeper than 100cm without knowing the exact depth. 
The previous three attributes will stay in the database for documentation, but cannot be resubmitted. 
New tests 
 
Qualifiers and specifiers (database maintenance) will now be tested during a submission, if they match the given 
WRB-publication. In case of a mismatch, the system will respond with an error. 
Columns moved 
 
code_humus, code_water (from PLS to PRF) (database maintenance): The attributes humus type (code_humus) 
and water availability (code_water) were considered as constant variables so far. Consequently, they were stored in 
the plot file (PLS) as a general characteristic for the whole plot. However, both attributes turned out to be variable in 
space and time on some plots. Thus both attributes, code_humus and code_water, have been moved now to the 
profile description (PRF) in order to store them more ‘locally’. This happened in accordance with the following rules: 
Case 1: Code_humus and code_water were copied to all profiles which already existed in PRF at the respective 
plot and survey_year 
Case 2: For the rest of the profiles, having no matching plot and year in PRF, code_humus and code_water were 
copied into ‘dummy lines’. These hold only a minimum of information: code_country, code_plot, survey_year, 
profile_pit_id, date_profile_desc. As a special feature, all these dummy lines have profile_pit_id ‘999’ as a wildcard. 
 
Excerpt from so_prf: The 1st line is a dummy a line. It has been newly added, and all attributes are empty except for the ones 
shown in the screenshot. The 2nd line is regular, here just code_water and code_humus have been added.

--- Page 15 ---

ICP FORESTS DATABASE REPORT 
 
Technical Changes in 2021 
15
Form SOM (Soil analysis) 
https://icp-forests.org/documentation/Surveys/SO/SOM.html 
New column 
 
P_ox: Acid ammonium oxalate extractable P (mg/kg) 
 
 
SOIL SOLUTION (LEVEL II) 
Forms SSM and SSO (Measurements) 
https://icp-forests.org/documentation/Surveys/SS/SSM.html 
Merged forms SSM and SSO (database maintenance) 
The form SSO (optional measurements) has been merged into SSM (mandatory measurements). Both forms have been 
merged in the final dataset anyway in a form called “SSM”. The submission of two separated forms which have to be 
merged caused several problems in the past. Merging optional and mandatory forms into one data form has been done for 
all surveys following this structure (e.g. deposition).

--- Page 16 ---

ICP FORESTS DATABASE REPORT 
 
Technical Changes in 2021 
16
FOLIAGE (LEVEL I AND II) 
New survey F1 (Level I) 
https://icp-forests.org/documentation/Surveys/F1/index.html 
Some countries do conduct the foliage survey on Level I plots regularly. 
So far this data could not be submitted to the official ICP Forests database as there was no survey “Foliage Level I” 
implemented. 
This survey has now been created and can be used also to submit data from the past. 
!!! The PCC would like to encourage all partners to submit this data if available. !!! 
Form LQA (Laboratory information) 
https://icp-forests.org/documentation/Surveys/FO/LQA.html 
New tests 
All tests are documented here: https://icp-forests.org/documentation/Tests/FO.html#LQA 
 
pretreatment methods (database maintenance): The manual recommends certain pretreatment methods for the 
measurement of different elements.  
Now, tests will check if the combination of element and pretreatment method is reasonable. In dependence of the 
combination, the system will give … 
 
a warning, if the combination is possible but not recommended, e.g. pretreat copper with open digestion PB02-
PB06 
 
an error, if the combination makes no sense, e.g. pretreat copper with open digestion PB07-PB08 
As a source, EP chair Alfred Fuerst contributed a table overview of all valid combinations. It is published as 
explanatory item 210 in the online documentation. 
 
determination methods (database maintenance): The same as with the pretreatment methods (previous issue), the 
manual also recommends certain determination procedures for the analysis of elements. Tests are checking now if 
the combination of element and determination method is reasonable. In dependence of the combination, the system 
will give … 
 
a warning, if the combination is possible but not recommended, e.g. determine cadmium with ICP-AES (DB08-
DB09) 
 
an error, if the combination makes no sense at all, e.g. determine cadmium with an element analyser (DA01-
DA05) 
Panel chair Alfred Fuerst contributed a table overview of all valid combinations.  
It is published as explanatory item 211 in the online documentation.

--- Page 17 ---

ICP FORESTS DATABASE REPORT 
 
Technical Changes in 2021 
17
Form FOM (Foliar analysis information) 
https://icp-forests.org/documentation/Surveys/FO/FOM.html 
New tests 
All tests are documented here: https://icp-forests.org/documentation/Tests/FO.html#FOM 
 
Plausible range tests (database maintenance): Foliar analysis information will be tested now for plausible ranges in 
more detail. There are three levels of checking: 
 
General: the element’s measurement has to be >0 or -1 (= below quantification limit) otherwise an error will 
be given 
 
Specific: In dependence of tree species and leaves type, the measurements have to lie in a specific range, 
otherwise the system will give a warning. 
 
Miscellaneous: If the tree species and / or leaves type is not available, then the value will be tested for a more 
general range. 
As data source, EP chair Alfred Fuerst elaborated a new list of plausible ranges based on current data. In accordance, 
the updated ranges are published in manual part XII, Version 2020-2 (annex II).  
Merged forms FOM and FOO (Measurements) (database maintenance) 
In level II, the form FOO (optional measurements) has been merged into FOM (mandatory measurements). Both forms have 
been merged in the final dataset anyway in a form called “FOM”. The submission of two separated forms which have to be 
merged caused several problems in the past. Merging optional and mandatory forms into one data form has been done for 
all surveys following this structure (e.g. deposition). 
 
 
LITTERFALL (LEVEL II) 
Form LFM (Analysis information) 
https://icp-forests.org/documentation/Surveys/LF/LFM.html 
New columns 
 
Heavy metals: Five new columns were added for heavy metals: Arsenic - As (ng/g), Chromium - Cr (μg/g), Cobalt- 
Co (μg/g), Mercury - Hg (ng/g) and Nickel – Ni (μg/g)

--- Page 18 ---

ICP FORESTS DATABASE REPORT 
 
Technical Changes in 2021 
18
AIR QUALITY (LEVEL II) 
Overall 
https://icp-forests.org/documentation/Surveys/AQ/index.html 
Tests updates 
 
Plausiblity limits: The plausibility limits of O3, NH3 AND NO2 (passive monitoring) were updated in AQB, AQP and 
COL.  
New limits are indicated with green colour: 
 
O3: 5 – 200 µg m³ 
 
NH3: 0.1 – 40 µg m³ 
 
NO2: 0.2 – 40 µg m³ 
 
 
 
GROUND VEGETATION BIOMASS AND 
NUTRIENTS ANALYSES (LEVEL II) 
Forms GBM and GBO (Measurements) 
https://icp-forests.org/documentation/Surveys/GB/GBM.html 
Merged forms GBM and GBO (Measurements) (database maintenance) 
The form GBO (optional measurements) has been merged into GBM (mandatory measurements). Both forms have been 
merged in the final dataset anyway in a form called “SSM”. The submission of two separated forms which have to be 
merged caused several problems in the past. Merging optional and mandatory forms into one data form has been done for 
all surveys following this structure (e.g. deposition).

--- Page 19 ---

ICP FORESTS DATABASE REPORT 
 
Technical Changes in 2021 
19
CROWN CONDITION (LEVEL I AND II) 
Forms TRE / TRC (Crown condition) 
https://icp-forests.org/documentation/Surveys/C1/TRE.html    |    https://icp-forests.org/documentation/Surveys/CC/TRC.html 
New dictionary categories  
 
d_crown_assess: A new category 'Upper two thirds of the crown' (code 6) has been introduced. 
 
d_social_class: A new category 'Other cases (trees growing in gaps etc.)' (code 9) has been introduced. 
 
Forms TRF / TRD (Damage parameters) 
https://icp-forests.org/documentation/Surveys/C1/TRF.html    |    https://icp-forests.org/documentation/Surveys/CC/TRD.html 
Dictionary updates  
 
d_cause and d_cause_sc_name: Several damage causes could be defined using both variables in different ways. As a 
result the analysis of the dataset became difficult. 
Entries of both dictionaries have been harmonized so that each species is only available in one of them. 
All changes made to both dictionaries are documented here:  
https://icp-forests.org/documentation/ChangeDictionaries/index.html 
d_cause: https://icp-forests.org/documentation/Dictionaries/d_cause.html 
d_cause_name: https://icp-forests.org/documentation/Dictionaries/d_cause_sc_name.html 
 
d_damage_age: The description / definition (column: “long_desc”) of code 1 and 2 has been updated. 
 
d_removal_mortality_ccgr:  
 
Description of code 3 has been updated. 
 
code 4 has been deactivated for both surveys CC and C1
