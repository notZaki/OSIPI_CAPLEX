
# Sections P: Perfusion Processes

Go to [section M](perfusionModels.md#Section M).



## Group R: Native R1 estimation
The processes in this section describe commonly used methods to estimate the native relaxation rate
 <img src="https://latex.codecogs.com/svg.image?R_{10}" title="https://latex.codecogs.com/svg.image?R_{10}" /> from a given MR signal data set.
The resulting native relaxation rate can be used e.g. as input for the conversion from an electromagnetic property to indicator concentration.

| Code | OSIPI name| Alternative names|Notation|Description|Reference|
| -- | -- | -- | -- | -- | -- |
| P.R.001 | Estimate native  *R<sub>1</sub>*  | -- | Estimate *R<sub>10</sub>* | This process returns the native *R<sub>1</sub>* relaxation rate *R<sub>10</sub>* derived using a given native *R<sub>1</sub>*  estimation method (P.R.002). <br /> **Input**: <br /> Native *R<sub>1</sub>* estimation method (P.R.002) <br /> **Output:** <br /> *R<sub>10</sub>* (Q.E.002)| -- |
| P.R.002 | Native  estimation method | -- | -- |The method used to derive the native *R<sub>1</sub>*  relaxation rate *R<sub>10</sub>*. Select from [Native *R<sub>1</sub>*-estimation methods](#Native R1 estimation methods) | -- |

### <a name="Native R1 estimation methods"></a> Native *R<sub>1</sub>*-estimation methods

| Code | OSIPI name| Alternative names|Notation|Description|Reference|
| -- | -- | -- | -- | -- | -- |
| P.R.003 | Fixed Value | -- | -- | A fixed value of *R<sub>10</sub>*, e.g. a literature value, rather than a measured value is assumed. <br /> **Input:** <br /> Fixed *R<sub>10</sub>*-value (Q.R.001) <br /> **Output**: <br />  *R<sub>10</sub>* (Q.E.002) | Haacke et al. 2007 |
| P.R.004 | Variable Flip Angle | -- | VFA| This process estimates the native longitudinal relaxation rate *R<sub>10</sub>* (and signal scaling factor *S<sub>0</sub>*) from the MR signal measured at multiple flip angles by inverting the SPGR model (M.S.004) according to a specified inversion method. <br /> **Input**: <br /> Inversion method (G.I.002), <br />  [Data (Q.G.002), Data grid (Q.G.001)] = [Signal (Q.S.001), Flip angle (Q.S.007)],  <br />  Forward model (M.G.001) = SPGR model (M.S.004) <br /> **Output:** <br /> *R<sub>10</sub>* (Q.E.002), <br/> Signal scaling factor (Q.S.010))| Wang et al. 1987|
| P.R.005 | Multi-delay Saturation Recovery | -- | SR | This process estimates the native longitudinal relaxation rate *R<sub>10</sub>* (and signal scaling factor *S<sub>0</sub>*) from the MR signal measured at multiple prepulse delays by inverting the saturation recovery GRE signal model according to a specified inversion method. <br /> **Input:** <br /> Inversion method (G.I.002),  <br /> [Data (Q.G.002), Data grid (Q.G.001)] = [Signal (Q.S.001), Prepulse delay (Q.S.008)], <br/> Forward model (M.G.001)  = an SR model from MR signal models <br/> **Output:** <br /> *R<sub>10</sub>* (Q.E.002), <br/> Signal scaling factor (Q.S.010)) | Parker et al. 2000 |
| P.R.006 | Multi-delay Inversion Recovery | -- | IR | This process estimates the native longitudinal relaxation rate *R<sub>10</sub>* (and signal scaling factor *S<sub>0</sub>*) from the MR signal measured at multiple prepulse delays assuming an inversion recovery GRE signal model. <br /> **Input:** <br /> Inversion method (G.I.002),  <br /> [Data (Q.G.002), Data grid (Q.G.001)] = [Signal (Q.S.001), Prepulse delay (Q.S.008)], <br/> Forward model (M.G.001)  = an IR model from MR signal models. <br/> **Output:** <br /> *R<sub>10</sub>* (Q.E.002), <br/> Signal scaling factor (Q.S.010))  | Ordidge et al. 1990|


## Group B: Bolus arrival time estimation

| Code | OSIPI name| Alternative names|Notation|Description|Reference|
| -- | -- | -- | -- | -- | -- |
| P.B.001 | Estimate Bolus Arrival Time | -- | EstimateBAT | This process returns the bolus arrival time (BAT) of a data set according to a specified bolus arrival time estimation method. <br /> **Input:** <br /> Bolus arrival time estimation method (P.B.002) <br /> **Output**: <br />  Bolus arrival time (Q.B.001) | -- |
| P.B.002 | Bolus arrival time estimation method | -- | BAT estimation method | Method to determine the bolus arrival time of a data set. Select from [Bolus arrival time estimation methods](#Bolus arrival time estimation methods). |

### <a name="Bolus arrival time estimation methods"></a> Bolus arrival time estimation methods

| Code | OSIPI name| Alternative names|Notation|Description|Reference|
| -- | -- | -- | -- | -- | -- |
| P.B.003 | Manually | -- | Manually | The BAT is manually determined by visual inspection.<br />  **Input:** <br /> [Data (Q.G.002), Data grid (Q.G.001)]  <br /> **Output**: <br />  Bolus arrival time (Q.B.001) | -- |
| P.B.004 | Data value exceeds threshold | -- | Exceeds threshold | The BAT is estimated as the minimal data grid point at which the data value exceeds a certain threshold.<br /> **Input:** <br /> [Data (Q.G.002), Data grid (Q.G.001)], <br /> Lower threshold (Q.G.010) <br /> **Output**: <br /> Bolus arrival time (Q.B.001) | -- |
| P.B.005 | Derivative of data values exceeds threshold | -- | Derivative exceeds threshold | The BAT is estimated as the minimal data grid point at which the derivative of the data values exceeds a certain threshold. <br /> **Input:** <br /> [Data (Q.G.002), Data grid (Q.G.001)], <br /> Lower threshold (Q.G.010) <br /> **Output**: <br /> Bolus arrival time (Q.B.001) | -- |
| P.B.006 | Intersection-based | -- | Intersection-based | The BAT is determined from calculating the intersection points of the data grid axis and straight lines joining the first N pairs of adjacent points. The BAT is estimated as the maximum of the intersection points. <br /> **Input:** <br /> [Data (Q.G.002), Data grid (Q.G.001)], <br /> Intersection- based BAT estimation parameters (Q.B.002) <br /> **Output**: <br /> Bolus arrival time (Q.B.001) | Galbraith et al. 2002 |
| P.B.007 | Model-based | -- | Model-based | A specified model is fitted to the data, yielding the BAT as one of the estimated model parameters. <br /> **Input:** <br /> Optimization method (G.I.005) <br /> **Output**: <br /> Bolus arrival time (Q.B.001) | Singh et al. 2009 |

## Group BL: Baseline estimation
| Code | OSIPI name| Alternative names|Notation|Description|Reference|
| -- | -- | -- | -- | -- | -- |
| P.BL.001 | Estimate Baseline | -- | EstimateBaseline | This process returns the value of the baseline of a data set according to a specified baseline estimation method.  <br /> **Input:** <br /> Baseline estimation method (P.BA.002) <br /> **Output**: <br /> Baseline (Q.BL.001) | -- |
| P.BL.002 | Baseline estimation method | -- | -- |  Method to estimate the baseline of a given data set. Select from [Baseline estimation methods](#Baseline estimation methods). | -- |

### <a name="Baseline estimation methods"></a> Baseline estimation methods

| Code | OSIPI name| Alternative names|Notation|Description|Reference|
| -- | -- | -- | -- | -- | -- |
| P.BL.003 | Manually | -- | -- | The baseline is manually determined by visual inspection.  <br /> **Input:** <br /> [Data (Q.G.002), Data grid (Q.G.001)] <br /> **Output**: <br /> Baseline (Q.BL.001) | -- |
| P.BL.004 | nth data value | -- | -- | The baseline is determined as the data value of thenth data grid point.  <br /> **Input:** <br /> [Data (Q.G.002), Data grid (Q.G.001)], <br /> Index n (Q.G.003) <br /> **Output**: <br /> Baseline (Q.BL.001) | -- |
| P.BL.005 | Mean baseline of range | -- | Mean baseline | The baseline is determined as the mean of data values in the data grid range (Start, End).  <br /> **Input:** <br /> [Data (Q.G.002), Data grid (Q.G.001)], <br /> Start of range (Q.G.013),  <br /> End of range(Q.G.014) <br /> **Output**: <br /> Baseline (Q.BL.001) | -- |
| P.BL.006 | Minimum value | -- | Minimum | The baseline is determined as the minimum of all data values.  <br /> **Input:** <br /> [Data (Q.G.002), Data grid (Q.G.001)] <br /> **Output**: <br /> Baseline (Q.BL.001) | -- |
| P.BL.007 | Model-based | -- | -- | A specified model is fitted to the data, yielding the baseline value as one of the estimated model parameters.  <br /> **Input:** <br /> Optimization method (G.I.005) <br /> **Output**: <br /> Baseline (Q.BL.001) | Singh et al. 2009 |

## Group S: Signal calibration
The processes listed in this section describe commonly used methods to estimate the signal calibration factor *S<sub>0</sub>* from a given MR signal data set. 

| Code | OSIPI name| Alternative names|Notation|Description|Reference|
| -- | -- | -- | -- | -- | -- |
| P.S.001 | Estimate signal scaling factor | -- | Estimate *S<sub>0</sub>* | In this process the signal scaling factor is determined according to a specified *S<sub>0</sub>* -estimation method.  <br /> **Input:** <br /> Signal scaling factor estimation method (P.S.0012) <br /> **Output**: <br /> *S<sub>0</sub>* (Q.S.010) | -- |
| P.S.002 |Signal scaling factor estimation method | -- | *S<sub>0</sub>* estimation method | Method to estimate the signal scaling factor *S<sub>0</sub>*  of a given data set. Select from [Signal scaling factor estimation methods](#Signal scaling factor estimation methods). | -- |

### <a name="Signal scaling factor estimation methods"></a> Signal scaling factor estimation methods
| Code | OSIPI name| Alternative names|Notation|Description|Reference|
| -- | -- | -- | -- | -- | -- |
| P.S.003 | *S<sub>0</sub>* from native *R<sub>1</sub>* estimation | -- | -- | In this method *S<sub>0</sub>*  is estimated as described in the native *R<sub>1</sub>* -estimation methods which have *S<sub>0</sub>*  as output.  <br /> **Input:** <br />  Native R1 estimation method (P.R.002)  with with *S<sub>0</sub>* as output  <br /> **Output**: <br /> *S<sub>0</sub>* (Q.S.010) | -- |
| P.S.004 | *S<sub>0</sub>* from baseline signal of dynamic data | -- | -- | In this method *S<sub>0</sub>*  is estimated by inverting a specified MR signal model according to a specified inversion method for the baseline signal and baseline relaxation rate. <br /> **Input:** <br /> Inversion method (G.I.002) with Forward model (M.G.001) = select from MR signal models with <br /> *R<sub>1</sub>* (Q.E.001) =  *R<sub>10</sub>* (Q.E.002) or *R<sub>2</sub>* (Q.E.004) = *R<sub>20</sub>* (Q.E.005) or *R<sub>2</sub><sup>*</sup>* (Q.E.007) = *R<sub>20</sub><sup>*</sup>* (Q.E.008), S (Q.S.001) = *S<sub>BL</sub>*(Q.S.002) **Output**: <br /> *S<sub>0</sub>* (Q.S.010) | -- |

## Group AIF: Arterial input function estimation
| Code | OSIPI name| Alternative names|Notation|Description|Reference|
| -- | -- | -- | -- | -- | -- |
| P.A.001 | Estimate arterial input function | -- | Estimate AIF | This process returns the AIF from a given data set, derived using a specified AIF estimation method. Furthermore, it can be optionally specified if an AIF correction method (.e.g. Partial volume correction) will be applied or if a measurement preparation (e.g. dual bolus) has been done for data acquisition.  <br /> **Input:** <br /> AIF estimation method (P.A.002), <br /> *optional*: <br /> AIF correction or measurement preparation (P.A.003).  <br /> **Output**: <br />  [Plasma AIF (Q.I.003), t (Q.G.004)] or <br /> [Whole blood AIF (Q.I.004), t (Q.G.004)] | -- |
| P.A.002 | Arterial input function estimation method | -- | AIF estimation method | Method used to estimate the arterial input function. Select from [AIF estimation methods](#AIF estimation methods). | -- |
| P.A.003 | Arterial input function correction or measurement preparation | -- | AIF correction or measurement preparation|Method for AIF correction (e.g. partial volume correction)  or measurement preparation (e.g. dual bolus) . Select from [AIF correction and measurement preparation](#AIF correction and measurement preparation). | -- |

### <a name="AIF estimation methods"></a> AIF estimation methods
| Code | OSIPI name| Alternative names|Notation|Description|Reference|
| -- | -- | -- | -- | -- | -- |
| P.A.004 | Literature-based AIF | Population-based AIF | -- | The AIF is taken from a published reference or from the average of a population.  <br /> **Input:** <br /> --  <br /> **Output**: <br />  [Plasma AIF (Q.I.003), t (Q.G.004)] or <br /> [Whole blood AIF (Q.I.004), t (Q.G.004)] | -- |
| P.A.005 | Mean ROI AIF | -- | -- | In this process the AIF is determined by specifying the mask of a user-defined region of interest (within an artery). This process returns the mean concentration time curve within this masked ROI. <br /> **Input:** <br /> [Indicator concentration (Q.I.001),  t (Q.G.004)], <br /> Binary AIF mask (Q.SE.002) <br />  **Output**: <br /> [Whole blood AIF (Q.I.004), t (Q.G.004)] | -- |
| P.A.006 | Model-based AIF | -- | -- | The AIF is derived from fitting a model to the dynamic concentration data. <br /> **Input:** <br /> Optimization method (G.I.005) with <br /> [Data (Q.G.002), Data grid (Q.G.001)] =  [Indicator concentration (Q.I.001), t (Q.G.004)] and <br /> Forward model (M.G.001) = select from AIF models or descriptive models] <br />  **Output**: <br />  [Plasma AIF (Q.I.003), t (Q.G.004)] or <br /> [Whole blood AIF (Q.I.004), t (Q.G.004)] | -- |
| P.A.007 | Automatic *k*-means-cluster-based  | -- | *k*-means | For automatic AIF selection, a k-means cluster algorithm to identify k clusters. The cluster with the lowest first moment represents the AIF. <br /> **Input:** <br /> [Indicator concentration (Q.I.001), t (Q.G.004)], <br />  Binary AIF mask (Q.SE.002), <br />  *k*-means-cluster-algorithm-parameters (Q.A.001) <br /> **Output**: <br /> [Whole blood AIF (Q.I.004), t (Q.G.004)] | -- |
| P.A.008 | Automatic fuzzy-c-means-cluster-based | -- | FCM | For automatic AIF selection, a fuzzy-c-means-cluster algorithm with the “fuzziness” parameter *m*, the iterative tolerance level <img src="https://latex.codecogs.com/svg.image?\epsilon" title="https://latex.codecogs.com/svg.image?\epsilon" />, the number of clusters *c*, the cluster probability threshold value *P<sub>c</sub>* and the initial cluster centroids *v<sub>i</sub>*  are applied. The cluster with maximal <img src="https://latex.codecogs.com/svg.image?M&space;=&space;\frac{f_{max}}{TTP\cdot&space;FWHM}" title="https://latex.codecogs.com/svg.image?M = \frac{f_{max}}{TTP\cdot FWHM}" /> represents the AIF.  <br /> **Input:** <br /> [Indicator concentration (Q.I.001), t (Q.G.004)], <br />  Binary AIF mask (Q.SE.002), <br />  Fuzzy-c-means-cluster-algorithm parameters (Q.A.002) <br />  **Output**: <br /> [Whole blood AIF (Q.I.004), t (Q.G.004)] | -- |
|

### <a name="AIF correction and measurement preparation"></a> AIF correction and measurement preparation
| Code | OSIPI name| Alternative names|Notation|Description|Reference|
| -- | -- | -- | -- | -- | -- |
| P.A.009 | Partial-volume effect corrected | -- | PVE |  If this item is set in the Estimate AIF (P.A.001) method, partial volume effects are accounted for. Otherwise, or if not specified, no partial volume effect correction was performed. | -- |
| P.A.010 | Dual Bolus | -- | DB | If this item is set in the Estimate AIF (P.A.001) method, the full-dose AIF was reconstructed from a pre-bolus injection with a smaller dose. Otherwise, or if not specified, no dual bolus approach was used. | Risse et al. 2006 |


## Group C: Conversion from signal to concentration

| Code | OSIPI name| Alternative names|Notation|Description|Reference|
| -- | -- | -- | -- | -- | -- |
| P.C.001 | Convert signal to concentration | -- | ConvertSToC | In this process the MR signal is converted to the indicator concentration according to a specified conversion method. <br /> **Input:** <br /> Signal to concentration conversion method (P.C.002) <br />  **Output**: <br /> Indicator concentration (Q.I.001) <br />  | -- |
| P.C.002 | Signal to concentration conversion method | -- | ConvertSToC | Method used to convert the given MR signal to indicator concentration. Select from [Signal to concentration conversion methods](#Signal to concentration conversion methods).  | -- |

### <a name="Signal to concentration conversion methods"></a> Signal to concentration conversion methods
| Code | OSIPI name| Alternative names|Notation|Description|Reference|
| -- | -- | -- | -- | -- | -- |
| P.C.003 | Direct conversion from signal concentration | -- | ConvertDirectSToC | In this process the MR signal is directly converted to the indicator concentration by inverting a specified forward model which describes a direct relationship between signal and indicator concentration.  <br /> **Input:** <br /> Inversion method (G.I.002) with <br /> Data (Q.G.002) = Signal (Q.S.001), <br /> Forward model (M.G.001) = select from MR signal model with direct relationship between signal and indicator concentration <br />   **Output**: <br /> Indicator concentration (Q.I.001) <br />  | -- |
| P.C.004 | Conversion via electromagnetic property| -- | ConvertSToCViaEP | In this process the MR signal is first converted to an electromagnetic property, which is in a second step converted to indicator concentration.  <br /> **Input:** <br /> Signal to electromagnetic property conversion method (P.C.005), <br /> Electromagnetic property to concentration conversion method (P.C.006) <br />   **Output**: <br /> Indicator concentration (Q.I.001) <br />  | -- |
| P.C.005 | Signal to electromagnetic property conversion method | -- | -- | Method used to convert the given MR signal to an electromagnetic property (e.g. R1). Select from [Signal to electromagnetic property conversion methods](#Signal to electromagnetic property conversion methods).  | -- |
| P.C.006 | Electromagnetic property to concentration conversion method | -- | -- |  Method used to convert the given electromagnetic property (e.g. R1) to indicator concentration. Select from [Electromagnetic property to concentration conversion methods](#Electromagnetic property to concentration conversion methods).  | -- |

### <a name="Signal to electromagnetic property conversion methods"></a> Signal to electromagnetic property conversion methods
| Code | OSIPI name| Alternative names|Notation|Description|Reference|
| -- | -- | -- | -- | -- | -- |
| P.C.007 | Model-based | -- | -- | In this process the MR signal is converted to an electromagnetic property (e.g. R1) via inversion of a specified model.  <br /> **Input:** <br /> Inversion method (G.I.002) with Data (Q.G.002) = Signal (Q.S.001), <br /> Forward model (M.G.001) = select from MR signal models <br />  **Output**: <br /> Quantity from Electromagnetic quantities ( e.g. *R<sub>1</sub>*, *R<sub>2</sub>*, *R<sub>2</sub><sup>*</sup>* or <img src="https://latex.codecogs.com/svg.image?\chi" title="https://latex.codecogs.com/svg.image?\chi" /> ) <br />  | -- |



### <a name="Electromagnetic property to concentration conversion methods"></a> Electromagnetic property to concentration conversion methods
| Code | OSIPI name| Alternative names|Notation|Description|Reference|
| -- | -- | -- | -- | -- | -- |
| P.C.008 | Model-based| -- | -- | In this process an electromagnetic property (e.g. R1) is converted to the indicator concentration via inversion of a specified model. <br /> **Input:** <br /> Inversion method (G.I.002) with Data (Q.G.002) = Quantity from Electromagnetic quantities, <br /> Forward model (M.G.001) = select from electromagnetic property models  <br />  **Output**: <br /> Indicator concentration (Q.I.001) <br />  | -- |




## Group E: Extraction of parameters