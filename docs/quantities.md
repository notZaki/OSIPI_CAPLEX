
# Sections Q: Quantities

## Group S: MR signal quantities
The items in this group are related to the MR signal and quantities of the MR sequence used to acquire the signal.

| Code | OSIPI name| Alternative names|Notation|Description|OSIPI units|Reference|
| -- | -- | -- | -- | -- | -- | -- |
| Q.S.001 | <a name="Signal"></a> Signal | -- | *S* | The MR signal (magnitude, phase or complex depending on context). | a.u. | -- |
| Q.S.002 | <a name="Baseline signal"></a> Baseline signal | --| *S<sub>BL</sub>* | Pre-contrast MR signal (magnitude, phase or complex depending on context) before the arrival of indicator at the tissue of interest. | a.u. | -- |
| Q.S.003 | <a name="AE"></a> Absolute enhancement | -- | AE | The absolute signal change from baseline <img src="https://latex.codecogs.com/svg.image?&#124 S-S_{BL} &#124" title="https://latex.codecogs.com/svg.image?&#124 S-S_{BL} &#124" /> induced by an indicator. In DCE, the enhancement is positive and in DSC, the enhancement is negative.| a.u. | -- |
| Q.S.004 | Relative enhancement | -- | RE | The relative signal change from baseline <img src="https://latex.codecogs.com/svg.image? &#124\frac{S}{S_{BL}}-1 &#124 &space;" title="https://latex.codecogs.com/svg.image?&#124\frac{S}{S_{BL}}-1&#124" />  induced by the indicator. In DCE, the enhancement is positive and in DSC, the enhancement is negative. | -- | -- |
| Q.S.005 | <a name="TE"></a> Echo time | -- | TE | The time between the application of the radiofrequency excitation pulse and the center of the echo. | ms |-- |
| Q.S.006 | Repetition time | -- | TR | The time between the beginning of a pulse sequence and the beginning of a succeeding (essentially identical) pulse sequence. | ms | -- |
| Q.S.007 | Flip angle | -- | <img src="https://latex.codecogs.com/svg.image?\alpha&space;" title="https://latex.codecogs.com/svg.image?\alpha " />| The nutation angle of the net magnetization immediately following an excitation RF pulse. | deg | -- |
| Q.S.008 | Prepulse delay | Inversion time TI (in case of an inversion recovery sequence) | PD | The time between the middle of a prepulse (e.g. inversion pulse) and the middle of the pulse that reads out the center of k-space. | ms | -- |
| Q.S.009 | Prepulse flip angle | -- |<img src="https://latex.codecogs.com/svg.image?\alpha_{p}" title="https://latex.codecogs.com/svg.image?\alpha_{p}" /> | The nutation angle of the net magnetization immediately following a prepulse. | deg | -- |
| Q.S.010 | Signal scaling factor | -- | *S<sub>0</sub>*  | A constant scaling factor in a signal model. <img src="https://latex.codecogs.com/svg.image?S_0" title="https://latex.codecogs.com/svg.image?S_0" /> typically includes contributions from the receiver gain, the proton density and the coil sensitivities. | -- | -- |
| Q.S.011 | Number of lines to k-space center | --| *n* | The number of lines to *k*-space center in the phase encoding direction. | -- | -- |
| Q.S.012 | Total number of k-space lines | -- | *N* | The total number of phase encoding lines for acquiring an image. | -- | -- |

## Group E: Electromagnetic quantities
The items in this group are related to electromagnetic tissue properties and electromagnetic properties of contrast agents. The abbreviations SE and GE denote spin and gradient echo.

| Code | OSIPI name| Alternative names|Notation|Description|OSIPI units|Reference|
| -- | -- | -- | -- | -- | -- | -- |
| Q.E.001 | Longitudinal relaxation rate | *R<sub>1</sub>* -relaxation rate | <img src="https://latex.codecogs.com/svg.image?R_1" title="https://latex.codecogs.com/svg.image?R_1" /> | Longitudinal relaxation rate | 1/ms | -- |
| Q.E.002 | Native longitudinal relaxation rate |Baseline <img src="https://latex.codecogs.com/svg.image?R_1" title="https://latex.codecogs.com/svg.image?R_{1}0" />-relaxation rate | <img src="https://latex.codecogs.com/svg.image?R_{10}" title="https://latex.codecogs.com/svg.image?R_10" /> | Longitudinal relaxation rate | 1/ms | -- |
| Q.E.003 | Change in longitudinal relaxation rate  | -- | <img src="https://latex.codecogs.com/svg.image?\Delta&space;R_1" title="https://latex.codecogs.com/svg.image?\Delta R_1" /> | Change in longitudinal relaxation rate with respect to <img src="https://latex.codecogs.com/svg.image?R_{10}" title="https://latex.codecogs.com/svg.image?R_10" /> | 1/ms | -- |
| Q.E.004 | Transverse relaxation rate (SE) | <img src="https://latex.codecogs.com/svg.image?R_2" title="https://latex.codecogs.com/svg.image?R_2" />-relaxation rate | <img src="https://latex.codecogs.com/svg.image?R_2" title="https://latex.codecogs.com/svg.image?R_1" /> | Natural transverse relaxation rate (observed using a SE). | 1/ms | -- |
| Q.E.005 | Native transverse relaxation rate (SE) |Baseline <img src="https://latex.codecogs.com/svg.image?R_2" title="https://latex.codecogs.com/svg.image?R_{20}" />-relaxation rate | <img src="https://latex.codecogs.com/svg.image?R_{20}" title="https://latex.codecogs.com/svg.image?R_20" /> | Pre-contrast natural transverse relaxation rate (observed using a SE). | 1/ms | -- |
| Q.E.006 | Change in transverse relaxation rate (SE)  | -- | <img src="https://latex.codecogs.com/svg.image?\Delta&space;R_2" title="https://latex.codecogs.com/svg.image?\Delta R_2" /> | Change in natural transverse relaxation rate (observed using a SE) with respect to <img src="https://latex.codecogs.com/svg.image?R_{20}" title="https://latex.codecogs.com/svg.image?R_20" /> | 1/ms | -- |
| Q.E.007 | Transverse relaxation rate (GE) | <img src="https://latex.codecogs.com/svg.image?R_2^*" title="https://latex.codecogs.com/svg.image?R_2^*" />-relaxation rate | <img src="https://latex.codecogs.com/svg.image?R_2^*" title="https://latex.codecogs.com/svg.image?R_2^*" /> | Effective transverse relaxation rate (observed using a GE). | 1/ms | -- |
| Q.E.008 | Native transverse relaxation rate (GE) | Baseline <img src="https://latex.codecogs.com/svg.image?R_2^*" title="https://latex.codecogs.com/svg.image?R_2^*" /> |<img src="https://latex.codecogs.com/svg.image?R_{20}^*" title="https://latex.codecogs.com/svg.image?R_{20}^*" /> | Pre-contrast effective transverse relaxation rate (observed using a GE). | 1/ms | -- |
| Q.E.009 | Change in transverse relaxation rate (GE) | -- | <img src="https://latex.codecogs.com/svg.image?\Delta&space;R_2^*" title="https://latex.codecogs.com/svg.image?\Delta&space;R_2^*" /> | Change in effective transverse relaxation rate (observed using a GE) with respect to <img src="https://latex.codecogs.com/svg.image?R_{20}^*" title="https://latex.codecogs.com/svg.image?R_{20}^*" /> | 1/ms | -- |
| Q.E.010 | Change in a reference transverse relaxation rate  | -- | <img src="https://latex.codecogs.com/svg.image?\overline{\Delta&space;R_{2,ref}^*}" title="https://latex.codecogs.com/svg.image?\overline{\Delta R_{2,ref}^*}" /> | Average change in effective transverse relaxation rate in a reference area of the brain with no indicator extravasation. | 1/ms | -- |
| Q.E.011 | Whole blood longitudinal relaxation rate | -- | <img src="https://latex.codecogs.com/svg.image?R_{1,b}" title="https://latex.codecogs.com/svg.image?R_{1,b}" /> | Intrinsic longitudinal relaxation rate in the whole blood space. | 1/ms | -- |
| Q.E.012 | Extravascular, extracellular longitudinal relaxation rate | -- | <img src="https://latex.codecogs.com/svg.image?R_{1,e}" title="https://latex.codecogs.com/svg.image?R_{1,e}" /> | Intrinsic longitudinal relaxation rate in the extravascular, extracellular space. | 1/ms | -- |
| Q.E.013 | Intracellular longitudinal relaxation rate | -- | <img src="https://latex.codecogs.com/svg.image?R_{1,i}" title="https://latex.codecogs.com/svg.image?R_{1,i}" /> | Intrinsic longitudinal relaxation rate in the intracellular space. | 1/ms | -- |
| Q.E.014 | Blood and EES longitudinal relaxation rate in fast exchange limit  | -- |<img src="https://latex.codecogs.com/svg.image?R_{1,be}" title="https://latex.codecogs.com/svg.image?R_{1,be}" /> | Volume fraction-weighted average of the longitudinal relaxation rate in the combined blood and extravascular, extracellular space, e.g.<img src="https://latex.codecogs.com/svg.image?R_{1,be}=\frac{V_b}{V_b&plus;V_e}R_{1,b}&plus;\frac{V_e}{V_b&plus;V_e}R_{1,e}" title="https://latex.codecogs.com/svg.image?R_{1,be}=\frac{V_b}{V_b+V_e}R_{1,b}+\frac{V_e}{V_b+V_e}R_{1,e}" /> where <img src="https://latex.codecogs.com/svg.image?V_b" title="https://latex.codecogs.com/svg.image?V_b" /> and <img src="https://latex.codecogs.com/svg.image?V_e" title="https://latex.codecogs.com/svg.image?V_e" /> are the absolute volumes of the blood and extravascular extracellular space respectively. | 1/ms | -- |
| Q.E.015 | EES and intracellular longitudinal relaxation rate in fast exchange limit | -- | <img src="https://latex.codecogs.com/svg.image?R_{1,ei}" title="https://latex.codecogs.com/svg.image?R_{1,ei}" />  | Volume fraction-weighted average of the longitudinal relaxation rate in the combined extravascular, extracellular and intracellular space. | 1/ms | -- |
| Q.E.016 | Molar magnetic susceptibility | -- | <img src="https://latex.codecogs.com/svg.image?\chi&space;" title="https://latex.codecogs.com/svg.image?\chi " />| Molar magnetic susceptibility | mL/mol | -- |
| Q.E.017 | Native molar magnetic susceptibility | Baseline <img src="https://latex.codecogs.com/svg.image?\chi&space;" title="https://latex.codecogs.com/svg.image?space;\chi " /> | <img src="https://latex.codecogs.com/svg.image?\chi_0&space;" title="https://latex.codecogs.com/svg.image?\chi_0 " /> | Pre-contrast molar magnetic susceptibility | mL/mol | -- |
| Q.E.018 | Change in molar magnetic susceptibility | -- | <img src="https://latex.codecogs.com/svg.image?\Delta \chi&space;" title="https://latex.codecogs.com/svg.image?\Delta \chi " /> | Change in molar magnetic susceptibility with respect to <img src="https://latex.codecogs.com/svg.image?\chi_0&space;" title="https://latex.codecogs.com/svg.image?\chi_0 " />. | mL/mol | -- |
| Q.E.019 | Molar magnetic susceptibility change per unit concentration of indicator | -- | <img src="https://latex.codecogs.com/svg.image?\delta&space;\chi&space;" title="https://latex.codecogs.com/svg.image?\delta \chi " /> | Molar magnetic susceptibility change per unit concentration of indicator. | mL/mol/mM| -- |
| Q.E.020 | Longitudinal relaxivity | <img src="https://latex.codecogs.com/svg.image?r_1" title="https://latex.codecogs.com/svg.image?r_1" /> -relaxivity|<img src="https://latex.codecogs.com/svg.image?r_1" title="https://latex.codecogs.com/svg.image?r_1" /> | Longitudinal relaxivity | 1/s/mM | -- |
| Q.E.021 | Transverse relaxivity (SE) | -- |<img src="https://latex.codecogs.com/svg.image?r_2" title="https://latex.codecogs.com/svg.image?r_2" /> | Transverse relaxivity (observed using a SE) | 1/s/mM | -- |
| Q.E.022 | Transverse relaxivity (GE) | -- |<img src="https://latex.codecogs.com/svg.image?r_2^*" title="https://latex.codecogs.com/svg.image?r_2^*" /> | Transverse relaxivity (observed using a GE) | 1/s/mM | -- |
| Q.E.023 | Transverse relaxivity (GE) in the capillary plasma | -- |<img src="https://latex.codecogs.com/svg.image?r_{2v}^*" title="https://latex.codecogs.com/svg.image?r_{2v}^*" />  | Transverse relaxivity (observed using GE) in the capillary plasma| 1/s/mM | -- |
| Q.E.024 | Transverse relaxivity (GE) in the EES | -- | <img src="https://latex.codecogs.com/svg.image?r_{2e}^*" title="https://latex.codecogs.com/svg.image?r_{2e}^*" /> | Transverse relaxivity (observed using GE) in the extravascular extracellular space.| 1/s/mM | -- |
| Q.E.025 | Longitudinal relaxivity of free indicator | -- |  <img src="https://latex.codecogs.com/svg.image?r_{1f}" title="https://latex.codecogs.com/svg.image?r_{1f}" /> | Longitudinal relaxivity of free (unbound) indicator. | 1/s/mM | -- |
| Q.E.026 | Longitudinal relaxivity of bound indicator | -- | <img src="https://latex.codecogs.com/svg.image?r_{1b}" title="https://latex.codecogs.com/svg.image?r_{1b}" /> | Longitudinal relaxivity of bound indicator. | 1/s/mM | -- |
| Q.E.027 | Transverse relaxivities of the quadratic model (GE) | -- | <img src="https://latex.codecogs.com/svg.image?[k_1,&space;k_2]" title="https://latex.codecogs.com/svg.image?[k_1, k_2]" /> | Longitudinal relaxation rate | [1/s/mM,1/s/mM]| -- |


## Group I: Indicator concentration quantities
The items of this group of quantities are either measured or modeled quantities used when pharmacokinetic modeling is applied. This section is split into the subsections indicator kinetic model quantities and AIF model quantities. The latter contains only quantities specific to often used AIF models.

### Indicator kinetic model quantities
The items of this group of quantities are either measured or modeled quantities used when pharmacokinetic modeling is applied.

| Code | OSIPI name| Alternative names|Notation|Description|OSIPI units|Reference|
| -- | -- | -- | -- | -- | -- | -- |
| Q.I.001 | Indicator concentration | -- | <img src="https://latex.codecogs.com/svg.image?C" title="https://latex.codecogs.com/svg.image?C" /> | Concentration of indicator molecules in a volume of interest (volume of interest not specified). | mM | -- |
| Q.I.002 | Tissue indicator concentration | -- | <img src="https://latex.codecogs.com/svg.image?C_t&space;" title="https://latex.codecogs.com/svg.image?C_t " />| Concentration of indicator molecules in a tissue of interest. | mM | -- |
| Q.I.003 | Plasma Arterial input function | Vascular Input Function, Input Function, AIF | <img src="https://latex.codecogs.com/svg.image?C_{a,p}&space;" title="https://latex.codecogs.com/svg.image?C_{a,p} " /> | Concentration of indicator molecules in the plasma of a feeding artery. | mM | -- |
| Q.I.004 | Whole blood arterial input function| Vascular Input Function, Input Function, AIF | <img src="https://latex.codecogs.com/svg.image?C_{a,b}&space;" title="https://latex.codecogs.com/svg.image?C_{a,b} " /> | Concentration of indicator molecules in the blood of a feeding artery. | mM  | -- |
| Q.I.005 | Capillary plasma indicator concentration | -- | <img src="https://latex.codecogs.com/svg.image?C_{p}&space;" title="https://latex.codecogs.com/svg.image?C_{p} " /> | Concentration of indicator molecules in the capillary plasma. | mM | -- |
| Q.I.006 | EES indicator concentration | Interstitial indicator concentration | <img src="https://latex.codecogs.com/svg.image?C_{e}&space;" title="https://latex.codecogs.com/svg.image?C_{e} " /> | Concentration of indicator molecules in the extravascular extracellular space. | mM | -- |
| Q.I.007 | Tissue residue function| -- | <img src="https://latex.codecogs.com/svg.image?R" title="https://latex.codecogs.com/svg.image?R" /> | Fraction of indicator molecules entering a volume of distribution at time t=0 that are still present at time t. | -- | -- |
| Q.I.008 | Tissue transit time distribution| -- | <img src="https://latex.codecogs.com/svg.image?h" title="https://latex.codecogs.com/svg.image?h" /> | Probability distribution of transit times through volume of interest.  | 1/s | -- |
| Q.I.009 | Arterial transit time distribution | -- | <img src="https://latex.codecogs.com/svg.image?h_a" title="https://latex.codecogs.com/svg.image?h_a" /> |Probability distribution of transit times through the arterial tree (between AIF location and tissue of interest). | 1/s | -- |
| Q.I.010 | Tissue impulse response function | -- | <img src="https://latex.codecogs.com/svg.image?I" title="https://latex.codecogs.com/svg.image?I" /> |Defined by the relationship <img src="https://latex.codecogs.com/svg.image?C=I\otimes&space;C_{a,p}" title="https://latex.codecogs.com/svg.image?C=I\otimes C_{a,p}" /> . | 1/s | -- |

## Group P: Physiological quantities
In this group commonly used quantities with a physiological meaning are listed.

| Code | OSIPI name| Alternative names|Notation|Description|OSIPI units|Reference|
| -- | -- | -- | -- | -- | -- | -- |
| Q.P.001 | Volume of distribution fraction | -- | <img src="https://latex.codecogs.com/svg.image?v&space;" title="https://latex.codecogs.com/svg.image?v " /> | The relative volume of tissue that is accessible to an indicator.  | mL/100mL | -- |
| Q.P.002 |Blood plasma volume fraction| -- | <img src="https://latex.codecogs.com/svg.image?v_p&space;" title="https://latex.codecogs.com/svg.image?v_p " /> | The volume of the intravascular blood plasma per unit tissue volume. | mL/100mL |-- |
| Q.P.003 |Blood volume fraction| Cerebral blood volume (CBV) | <img src="https://latex.codecogs.com/svg.image?v_b&space;" title="https://latex.codecogs.com/svg.image?v_b " /> | The volume of blood per unit tissue volume. | mL/100mL | -- |
| Q.P.004 | Extravascular, extracellular  volume fraction | Interstitial volume fraction | <img src="https://latex.codecogs.com/svg.image?v_e&space;" title="https://latex.codecogs.com/svg.image?v_e " />  | The volume of extravascular, extracellular tissue per unit tissue volume. | mL/100mL | -- |
| Q.P.005 | Intracellular volume fraction | -- | <img src="https://latex.codecogs.com/svg.image?v_i&space;" title="https://latex.codecogs.com/svg.image?v_i " /> | The volume of intracellular space per unit tissue volume.  | mL/100mL |-- |
| Q.P.006 | Blood plasma flow| -- | <img src="https://latex.codecogs.com/svg.image?F_p&space;" title="https://latex.codecogs.com/svg.image?F_p " /> | The volume of blood plasma flowing into a unit tissue volume per unit time. | mL/s/100mL | -- |
| Q.P.007 | Blood flow | Cerebral blood flow (CBF) | <img src="https://latex.codecogs.com/svg.image?F_b&space;" title="https://latex.codecogs.com/svg.image?F_b " /> | The volume of blood flowing into a unit tissue volume per unit time. | mL/s/100mL | -- |
| Q.P.008 | Permeability surface area product | -- | <img src="https://latex.codecogs.com/svg.image?PS&space;" title="https://latex.codecogs.com/svg.image?PS " />| The volume of tissue plasma that is fully cleared of indicator in a unit of time by a unit tissue volume. | mL/s/100mL | -- |
| Q.P.009 | Extraction fraction | -- | <img src="https://latex.codecogs.com/svg.image?E&space;" title="https://latex.codecogs.com/svg.image?E " />  | The fraction of indicator particles that is extracted from plasma in one pass through the vasculature. | -- | -- |
| Q.P.010 | Mean transit time| -- | <img src="https://latex.codecogs.com/svg.image?MTT&space;" title="https://latex.codecogs.com/svg.image?MTT " /> | The average time the indicator spends in a distribution volume.  | s | -- |
| Q.P.011 | Intravascular mean transit time |  -- | <img src="https://latex.codecogs.com/svg.image?MTT_p&space;" title="https://latex.codecogs.com/svg.image?MTT_p " /> | The average time the indicator spends in the blood plasma volume. | s | -- |
| Q.P.012 | Extravascular extracellular mean transit time  | -- | <img src="https://latex.codecogs.com/svg.image?MTT_e&space;" title="https://latex.codecogs.com/svg.image?MTT_e " /> | The average time the indicator spends in the extravascular, extracellular tissue volume. | s | -- |
| Q.P.013 | Total tissue mean transit time | -- | <img src="https://latex.codecogs.com/svg.image?MTT_t&space;" title="https://latex.codecogs.com/svg.image?MTT_t " /> | The average time the indicator spends in the total tissue distribution volume. | s | -- |
| Q.P.014 | Arterial delay time | Arterial Transit Time  | <img src="https://latex.codecogs.com/svg.image?T_a&space;" title="https://latex.codecogs.com/svg.image?T_a " />  | Delay between indicator arrival at the arterial input function location and the voxel or tissue region of interest. | s | -- |
| Q.P.015 | Volume transfer constant | Transfer constant | <img src="https://latex.codecogs.com/svg.image?K^{trans}&space;" title="https://latex.codecogs.com/svg.image?K^{trans} " /> | The rate of indicator particle delivery from the blood plasma to the extravascular, extracellular volume per unit of tissue volume, per unit arterial plasma concentration. | 1/s | -- |
| Q.P.016 | Efflux rate constant | -- | <img src="https://latex.codecogs.com/svg.image?k_{ep}&space;" title="https://latex.codecogs.com/svg.image?k_{ep} " />  | Interstitium-to-plasma efflux rate constant | 1/s | -- |
| Q.P.017 | Intravascular to EES water exchange rate  | <img src="https://latex.codecogs.com/svg.image?k_{in}&space;" title="https://latex.codecogs.com/svg.image?k_{in} " /> | <img src="https://latex.codecogs.com/svg.image?k_{be}&space;" title="https://latex.codecogs.com/svg.image?k_{be} " /> | Equilibrium water exchange rate across the endothelial membrane from the intravascular space to the EES. | 1/s | -- |
| Q.P.018 | Intravascular to extravascular water exchange rate | -- | <img src="https://latex.codecogs.com/svg.image?k_{b(e+i)}&space;" title="https://latex.codecogs.com/svg.image?k_{b(e+i)} " /> | Equilibrium water exchange rate across the endothelial membrane from the intravascular space to the total extravascular space (EES and intracellular). | 1/s | -- |
| Q.P.019 | Extravascular extracellular to intravascular water exchange rate  | <img src="https://latex.codecogs.com/svg.image?k_{out}&space;" title="https://latex.codecogs.com/svg.image?k_{out} " />  | <img src="https://latex.codecogs.com/svg.image?k_{eb}&space;" title="https://latex.codecogs.com/svg.image?k_{eb} " />  | Equilibrium water exchange rate across the endothelial membrane from EES to the intravascular space. | 1/s | -- |
| Q.P.020 | Extravascular to intravascular water exchange rate  | -- | <img src="https://latex.codecogs.com/svg.image?k_{(e+i)b}&space;" title="https://latex.codecogs.com/svg.image?k_{(e+i)b} " /> | Equilibrium water exchange rate across the endothelial membrane from extravascular to the intravascular space. | 1/s | -- |
| Q.P.021 | Extravascular extracellular to intracellular water exchange rate  | Transcytolemmal water exchange rate | <img src="https://latex.codecogs.com/svg.image?k_{ei}&space;" title="https://latex.codecogs.com/svg.image?k_{ei} " /> | Equilibrium water exchange rate across cellular membranes  from EES to the intracellular space. | 1/s | -- |
| Q.P.022 | Extracellular to intracellular water exchange rate | -- | <img src="https://latex.codecogs.com/svg.image?k_{(b+e)i}&space;" title="https://latex.codecogs.com/svg.image?k_{(b+e)i} " />| Equilibrium water exchange rate across cellular membranes from extracellular (intravascular and EES) to the intracellular space. | 1/s | -- |
| Q.P.023 | Intracellular to extravascular extracellular  water exchange rate  | -- | <img src="https://latex.codecogs.com/svg.image?k_{ie}&space;" title="https://latex.codecogs.com/svg.image?k_{ie} " /> | Equilibrium water exchange rate across cellular membranes from intracellular space to EES. | 1/s | -- |
| Q.P.024 | Intracellular to extracellular  water exchange rate | -- | <img src="https://latex.codecogs.com/svg.image?k_{i(b+e)}&space;" title="https://latex.codecogs.com/svg.image?k_{i(b+e)} " />| Equilibrium water exchange rate across cellular membranes from intracellular space to extracellular space (EES and intravascular). | 1/s | -- |
| Q.P.025 | Density | -- | <img src="https://latex.codecogs.com/svg.image?\rho&space;&space;" title="https://latex.codecogs.com/svg.image?\rho " />| The density of the tissue of interest. | g/mL | -- |
| Q.P.026 | Capillary hematocrit | -- | <img src="https://latex.codecogs.com/svg.image?Hct_t&space;" title="https://latex.codecogs.com/svg.image?Hct_t " />  | The volume percentage of red blood cells in capillary blood. | -- | -- |
| Q.P.027 | Arterial hematocrit | -- | <img src="https://latex.codecogs.com/svg.image?Hct_a&space;" title="https://latex.codecogs.com/svg.image?Hct_a " /> | The volume percentage of red blood cells in arterial blood. | -- | -- |
| Q.P.028 | Hematocrit factor|-- | <img src="https://latex.codecogs.com/svg.image?H_f&space;" title="https://latex.codecogs.com/svg.image?H_f " /> | Blood flow correction factor accounting for the difference in arterial hematocrit and capillary hematocrit| -- | -- |
| Q.P.029 | Capillary transit time heterogeneity | -- | <img src="https://latex.codecogs.com/svg.image?CTTH&space;" title="https://latex.codecogs.com/svg.image?CTTH " /> | Standard deviation of the capillary transit time distribution.| s | -- |
| Q.P.030 | Maximum oxygen extraction fraction| -- | <img src="https://latex.codecogs.com/svg.image?OEF^{max}" title="https://latex.codecogs.com/svg.image?OEF^{max}" /> | Upper biophysical limit of the proportion of oxygen that can be extracted by tissue. | -- | --|
| Q.P.031 | Arterial mean transit time | -- | <img src="https://latex.codecogs.com/svg.image?MTT_a&space;" title="https://latex.codecogs.com/svg.image?MTT_a " /> | The average time the indicator spends in the arterial blood plasma. | s | -- |


## Group G: General physical and mathematical quantities
This section contains general physical and mathematical quantities which are used in the context of perfusion image analysis.

| Code | Data grid| Alternative names|Notation|Description|OSIPI units|Reference|
| -- | -- | -- | -- | -- | -- | -- |
| Q.G.001 | Data grid | -- | <img src="https://latex.codecogs.com/svg.image?[x_1,...x_n]" title="https://latex.codecogs.com/svg.image?[x_1,...x_n]" /> | Sampling points of a data set (typically time or frequency). | variable | -- |
| Q.G.002 | Data | -- | <img src="https://latex.codecogs.com/svg.image?[f_1,...fn]" title="https://latex.codecogs.com/svg.image?[f_1,...f_n]" /> | Values of a data set with respect to a data grid. The data set has the value <img src="https://latex.codecogs.com/svg.image?f_i" title="https://latex.codecogs.com/svg.image?f_i" /> at data grid point <img src="https://latex.codecogs.com/svg.image?x_i" title="https://latex.codecogs.com/svg.image?x_i" /> . | variable | -- |
| Q.G.003 | Index | -- | <img src="https://latex.codecogs.com/svg.image?i" title="https://latex.codecogs.com/svg.image?i" /> | The number of the index of a data or data grid point. | -- | -- |
| Q.G.004 | Time | -- | <img src="https://latex.codecogs.com/svg.image?t" title="https://latex.codecogs.com/svg.image?t" /> | Time | s | -- |
| Q.G.005 | Time step | -- | <img src="https://latex.codecogs.com/svg.image?\Delta t" title="https://latex.codecogs.com/svg.image?\Delta t" />  | Time between two successive data points, e.g. two images (for fixed temporal resolution). | s | -- |
| Q.G.006 | Frequency | -- | <img src="https://latex.codecogs.com/svg.image?\nu&space;" title="https://latex.codecogs.com/svg.image?\nu " /> |Frequency | 1/s | -- |
| Q.G.007 | Axial length | -- | <img src="https://latex.codecogs.com/svg.image?L_{ax}" title="https://latex.codecogs.com/svg.image?L_{ax}" /> | The axial length of a cylindrical object, e.g. a capillary. | <img src="https://latex.codecogs.com/svg.image?\mu&space;m" title="https://latex.codecogs.com/svg.image?\mu m" /> | -- |
| Q.G.008 | Axial position | -- | <img src="https://latex.codecogs.com/svg.image?x_{ax}" title="https://latex.codecogs.com/svg.image?x_{ax}" /> | The spatial position within a cylindrical object, e.g. a capillary. In the case of a capillary x=0 denotes the arterial inlet position and <img src="https://latex.codecogs.com/svg.image?x=L_{ax}" title="https://latex.codecogs.com/svg.image?x=L_{ax}" />  the venous outlet position. | variable | -- |
| Q.G.009 | Constant value | -- | <img src="https://latex.codecogs.com/svg.image?k" title="https://latex.codecogs.com/svg.image?k" /> | A constant value which can be used e.g. for scaling. | variable | -- |
| Q.G.010 | Lower threshold | -- | <img src="https://latex.codecogs.com/svg.image?L" title="https://latex.codecogs.com/svg.image?L" /> | The lower value at which the behavior of a function or algorithm changes. | variable | -- |
| Q.G.011 | Upper threshold | -- | <img src="https://latex.codecogs.com/svg.image?U" title="https://latex.codecogs.com/svg.image?U" />| The upper value at which the behavior of a function or algorithm changes.   | variable | -- |
| Q.G.012 | Dynamic function | -- | <img src="https://latex.codecogs.com/svg.image?f(x)" title="https://latex.codecogs.com/svg.image?f(x)" /> | A function of an independent variable <img src="https://latex.codecogs.com/svg.image?x&space;" title="https://latex.codecogs.com/svg.image?x " /> (typically time or frequency) with value <img src="https://latex.codecogs.com/svg.image?f(x_i)" title="https://latex.codecogs.com/svg.image?f(x_i)" /> at data grid point <img src="https://latex.codecogs.com/svg.image?x_i" title="https://latex.codecogs.com/svg.image?x_i" />. | variable | -- |
| Q.G.013 | Start of range | -- | <img src="https://latex.codecogs.com/svg.image?x_{start}" title="https://latex.codecogs.com/svg.image?x_{start}" /> | The start point of the range <img src="https://latex.codecogs.com/svg.image?(x_{start},x_{end})" title="https://latex.codecogs.com/svg.image?(x_{start},x_{end})" /> .  | variable | -- |
| Q.G.014 | End of range | -- | <img src="https://latex.codecogs.com/svg.image?x_{end}" title="https://latex.codecogs.com/svg.image?x_{end}" />  | The end point of the range <img src="https://latex.codecogs.com/svg.image?(x_{start},x_{end})" title="https://latex.codecogs.com/svg.image?(x_{start},x_{end})" /> . | variable | -- |


## Group D: Curve descriptive quantities
Descriptive parameters describe the shape of a data set sampled at a data grid, but do not offer a direct physiological interpretation. <br />
The data set is often the measured MR signal sampled at specified time points, but it can also be some normalized version of it, or a derived signal such as dynamic concentration time curve or dynamic relaxation rate curve derived from an MR signal.
 To keep the inputs of these processes flexible, they are all defined for general data <img src="https://latex.codecogs.com/svg.image?f(x_i)" title="https://latex.codecogs.com/svg.image?f(x_i)" /> on a data grid of points <img src="https://latex.codecogs.com/svg.image?x_i" title="https://latex.codecogs.com/svg.image?x_i" /> and it is left to the user to specify the data and data grid these processes are applied to (e.g. [Tissue indicator concentration (Q.I.002) , Time (Q.G.004)]).

| Code | Data grid| Alternative names|Notation|Description|OSIPI units|Reference|
| -- | -- | -- | -- | -- | -- | -- |
| Q.D.001| Data value at data grid point | -- | <img src="https://latex.codecogs.com/svg.image?f(x_i)" title="https://latex.codecogs.com/svg.image?f(x_i)" /> | The data value at the data grid point <img src="https://latex.codecogs.com/svg.image?x_i" title="https://latex.codecogs.com/svg.image?x_i" />. | variable | -- |
| Q.D.002 | Maximum value | -- | <img src="https://latex.codecogs.com/svg.image?f_{max}" title="https://latex.codecogs.com/svg.image?f_{max}" /> | The maximum value of given data. | variable | -- |
| Q.D.003 | Data grid point of maximum value| -- | <img src="https://latex.codecogs.com/svg.image?x_{max}" title="https://latex.codecogs.com/svg.image?x_{max}" /> | The data grid point at which the maximum value of a given data set occurs. | variable | -- |
| Q.D.004 | Minimum value | -- | <img src="https://latex.codecogs.com/svg.image?f_{min}" title="https://latex.codecogs.com/svg.image?f_{min}" /> | The minimum value of given data. | variable | -- |
| Q.D.005 | Data grid point of minimum value | -- | <img src="https://latex.codecogs.com/svg.image?x_{min}" title="https://latex.codecogs.com/svg.image?x_{min}" /> |The data grid point at which the minimum value of a given data set occurs. | variable | -- |
| Q.D.006 | Final data grid point | -- | <img src="https://latex.codecogs.com/svg.image?x_{fin}" title="https://latex.codecogs.com/svg.image?x_{fin}" /> | The last point of a given data grid. | variable | -- |
| Q.D.007 | Final data value | -- | <img src="https://latex.codecogs.com/svg.image?f_{fin}" title="https://latex.codecogs.com/svg.image?f_{fin}" /> | The value of the data at the last data grid point. | variable | --|
| Q.D.008 | Maximum deviation from baseline | -- | <img src="https://latex.codecogs.com/svg.image?f_{max-dev}" title="https://latex.codecogs.com/svg.image?f_{max-dev}" /> | The maximum absolute deviation of a given data set from the baseline. | variable | -- |
| Q.D.009 | Derivative at data grid point <img src="https://latex.codecogs.com/svg.image?x_i" title="https://latex.codecogs.com/svg.image?x_i" /> | -- | <img src="https://latex.codecogs.com/svg.image?\frac{df(x_i)}{dx}" title="https://latex.codecogs.com/svg.image?\frac{df(x_i)}{dx}" /> | Derivative of a function f with respect to the independent variable x at the data grid point <img src="https://latex.codecogs.com/svg.image?x_i" title="https://latex.codecogs.com/svg.image?x_i" />. | variable | -- |
| Q.D.010 | Time to peak | -- | <img src="https://latex.codecogs.com/svg.image?TTP" title="https://latex.codecogs.com/svg.image?TTP" /> | The time between the bolus arrival time (BAT) and the maximum time point <img src="https://latex.codecogs.com/svg.image?x_{max}" title="https://latex.codecogs.com/svg.image?x_{max}" />. (Remark: this is expressed for time rather than a general data grid, because TTP is an often used parameter in perfusion analysis). | variable | -- |
| Q.D.011 | Wash-in-slope | -- | <img src="https://latex.codecogs.com/svg.image?WIS" title="https://latex.codecogs.com/svg.image?WIS" /> | The ratio of the difference of the maximum data value <img src="https://latex.codecogs.com/svg.image?f_{max}" title="https://latex.codecogs.com/svg.image?f_{max}" /> and the baseline signal  The ratio of the difference of the maximum data value <img src="https://latex.codecogs.com/svg.image?f_{BL}" title="https://latex.codecogs.com/svg.image?f_{BL}" /> , and the time to peak: <img src="https://latex.codecogs.com/svg.image?\frac{f_{max}-f_{BL}}{TTP}" title="https://latex.codecogs.com/svg.image?\frac{f_{max}-f_{BL}}{TTP}" />  | variable_1/variable_2 | -- |
| Q.D.012 | Wash-out-slope | -- | <img src="https://latex.codecogs.com/svg.image?WOS" title="https://latex.codecogs.com/svg.image?WOS" /> | The ratio of the difference of the maximum data value <img src="https://latex.codecogs.com/svg.image?f_{max}" title="https://latex.codecogs.com/svg.image?f_{max}" /> and the data value at the last data grid point <img src="https://latex.codecogs.com/svg.image?f_{fin}" title="https://latex.codecogs.com/svg.image?f_{fin}" /> and difference between the last time point and the time at which the maximum occurs: <img src="https://latex.codecogs.com/svg.image?\frac{f_{max}-f_{fin}}{x_{max}-x_{fin}}" title="https://latex.codecogs.com/svg.image?\frac{f_{max}-f_{fin}}{x_{max}-x_{fin}}" /> | variable_1/variable_2 | -- |
| Q.D.013 | Area under curve | --| <img src="https://latex.codecogs.com/svg.image?AUC_{x_{start},x_{end}}" title="https://latex.codecogs.com/svg.image?AUC_{x_{start},x_{end}}" /> | The integral value of a given dynamic function f (or the numeric approximation for discrete data <img src="https://latex.codecogs.com/svg.image?[f_1,...f_n]" title="https://latex.codecogs.com/svg.image?[f_1,...f_n]" /> ) between the data grid points <img src="https://latex.codecogs.com/svg.image?x_1" title="https://latex.codecogs.com/svg.image?x_1" /> and <img src="https://latex.codecogs.com/svg.image?x_2" title="https://latex.codecogs.com/svg.image?x_2" />.  | <img src="https://latex.codecogs.com/svg.image?variable_1&space;\cdot&space;variable_2" title="https://latex.codecogs.com/svg.image?variable_1 \cdot variable_2" /> | --|


## Group B: Bolus arrival time estimation quantities
This section lists all quantities related to the estimation process of the bolus arrival time of a data curve.

| Code | Data grid| Alternative names|Notation|Description|OSIPI units|Reference|
| -- | -- | -- | -- | -- | -- | -- |
| Q.B.001 | Bolus arrival time | Onset Time, Lag Time| <img src="https://latex.codecogs.com/svg.image?BAT" title="https://latex.codecogs.com/svg.image?BAT" /> | The time between the first data grid point and the onset obtained by applying a specified BAT estimation method. | variable| -- |
| Q.B.002 | Intersection- based BAT estimation parameters| --| <img src="https://latex.codecogs.com/svg.image?[N]" title="https://latex.codecogs.com/svg.image?[N]" />| Vector of ordered inputs to the intersection-based BAT estimation process. | -- | --|


## Group BL: Baseline estimation quantities
This section lists all quantities related to the estimation process of the baseline of a data curve.

| Code | Data grid| Alternative names|Notation|Description|OSIPI units|Reference|
| -- | -- | -- | -- | -- | -- | -- |
| Q.BL.001 | Baseline value  | -- | <img src="https://latex.codecogs.com/svg.image?f_{BL}" title="https://latex.codecogs.com/svg.image?f_{BL}" /> | The baseline value of given data obtained by applying the process EstimateBaseline. | variable | -- |


## Group H: Heuristic model quantities
Heuristic parameters are typically ad-hoc correction factors for physical models that are not purely descriptive but are not derived from rigorous physical models. They can also be relative measures related physiological quantities rather than the physiological quantity. They are often parameters used for the heuristic models listed in section M: Heuristic models.

| Code | Data grid| Alternative names|Notation|Description|OSIPI units|Reference|
| -- | -- | -- | -- | -- | -- | -- |
| Q.H.001 | Uncontaminated <img src="https://latex.codecogs.com/svg.image?R_2^*" title="https://latex.codecogs.com/svg.image?R_2^*" /> scaling term  |--| <img src="https://latex.codecogs.com/svg.image?K_1" title="https://latex.codecogs.com/svg.image?K_1" /> | Scaling constant for the uncontaminated effective transverse relaxation rate in the BSW leakage correction model and Bidirectional leakage correction model. | -- | -- |
| Q.H.002 | Leakage scaling term | -- | <img src="https://latex.codecogs.com/svg.image?K_2" title="https://latex.codecogs.com/svg.image?K_2" /> | Scaling constant which reflects the effects of leakage in the BSW leakage correction model  and Bidirectional leakage correction model. | 1/s | -- |


## Group U: Uncertainty quantities
In this group commonly used quantities to describe uncertainties of the extracted parameters and other statistical properties in the context of perfusion image analysis.

| Code | Data grid| Alternative names|Notation|Description|OSIPI units|Reference|
| -- | -- | -- | -- | -- | -- | -- |


## Group F: Forward model inversion quantities

## Group O: Optimization quantities

## Group R: Native R1 estimation quantities
This group lists quantities required in the context of native R1 estimation.

| Code | Data grid| Alternative names|Notation|Description|OSIPI units|Reference|
| -- | -- | -- | -- | -- | -- | -- |
| Q.R.001 | Fixed R10 value | -- | <img src="https://latex.codecogs.com/svg.image?R_{10,fixed}" title="https://latex.codecogs.com/svg.image?R_{10,fixed}" /> | A fixed value, e.g. a literature value, assumed as native <img src="https://latex.codecogs.com/svg.image?R_{1}" title="https://latex.codecogs.com/svg.image?R_{1}" /> relaxation rate value.| 1/ms | -- |

## Group A: Arterial input fucntion estimation quantities
The items of this group are quantities which are required to describe AIF estimation methods.

| Code | Data grid| Alternative names|Notation|Description|OSIPI units|Reference|
| -- | -- | -- | -- | -- | -- | -- |
| Q.A.001 | *k*-means-cluster-algorithm-parameters | -- | -- | -- | -- | -- |
| Q.A.002 | Fuzzy-c-means-cluster-algorithm-parameters | -- | -- | -- | -- | -- |
| Q.A.003 | Partial-volume corrected | -- | -- | -- | -- | -- |
| Q.A.004 | Dual Bolus | -- | -- | -- | -- | -- |



## Group SE: Segmentation quantities