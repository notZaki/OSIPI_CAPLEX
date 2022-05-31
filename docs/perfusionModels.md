
# <a name="Sections M"></a> Section M: Perfusion Models 

## General forward model


| Code | OSIPI name| Alternative names|Notation|Description|Reference|
| -- | -- | -- | -- | -- | -- |
| M.G.001 | <a name="Forward model"></a> Forward model | -- | -- | A forward model to be inverted. Selected from [Section M](#section M). | -- |

## MR signal models (EP -> S or C -> S) 
This section covers models that describe how the measured MR signal *S* depends on electromagnetic properties, such as the relaxation rates *R<sub>1</sub>*, *R<sub>1</sub>* and *R<sub>2</sub><sup>*</sup>* or the magnetic susceptibility <img src="https://latex.codecogs.com/svg.image?\chi" title="https://latex.codecogs.com/svg.image?\chi" />, and on MR sequence parameters such as TR and TE. </br>
The exception is section “Magnitude models: DCE - R1 in the fast water exchange limit, direct relationship with indicator concentration”, in which the model describes how the MR signal depends directly on the indicator concentration.


### <a name="Magnitude models: DSC"></a> Magnitude models: DSC

| Code | OSIPI name| Alternative names|Notation|Description|Reference|
| -- | -- | -- | -- | -- | -- |
| M.S.001 | Gradient echo model | -- | GE model | This forward model is given by the following equation: </br> <img src="https://latex.codecogs.com/svg.image?S&space;=&space;S_0\cdot&space;e^{-TE\cdot&space;R_2^*}&space;" title="https://latex.codecogs.com/svg.image?S = S_0\cdot e^{-TE\cdot R_2^*} " />  </br> with </br> [*TE* (Q.S.005)](quantities.md#TE), </br> *S<sub>0</sub>* (Q.S.010), </br> *R<sub>2</sub><sup>*</sup>* (Q.E.007), </br> *S* (Q.S.001). | Jackson et al. 2005|
| M.S.002 | Spin echo model | -- | SE model | This forward model is given by the following equation: </br> <img src="https://latex.codecogs.com/svg.image?S&space;=&space;S_0\cdot&space;e^{-TE\cdot&space;R_2}&space;" title="https://latex.codecogs.com/svg.image?S = S_0\cdot e^{-TE\cdot R_2} " /> </br>  with </br> [*TE* (Q.S.005)](quantities.md#TE), </br> *S<sub>0</sub>* (Q.S.010), </br> *R<sub>2</sub>* (Q.E.004),</br>*S* (Q.S.001). | Jackson et al. 2005 |

### <a name="Magnitude models: DCE - R1 in the fast water exchange limit"></a> Magnitude models: DCE - R1 in the fast water exchange limit

| Code | OSIPI name| Alternative names|Notation|Description|Reference|
| -- | -- | -- | -- | -- | -- |
| M.S.003 | Linear model | -- | Linear | This forward model is given by the following equation: </br> <img src="https://latex.codecogs.com/svg.image?S=k\cdot&space;R_1" title="https://latex.codecogs.com/svg.image?S=k\cdot R_1" /> </br> with </br> *k* (Q.G.009), </br> *R<sub>1</sub>* (Q.E.001),</br> *S* (Q.S.001). | -- |
| M.S.004 | Spoiled gradient recalled echo model | FLASH model | SPGR model | This forward model is given by the following equation: <img src="https://latex.codecogs.com/svg.image?S=S_0\cdot&space;\frac{sin(\alpha)[1-e^{-TR\cdot&space;R_1}]}{1-cos(\alpha)\cdot&space;e^{-TR\cdot&space;R_1}}" title="https://latex.codecogs.com/svg.image?S=S_0\cdot \frac{sin(\alpha)[1-e^{-TR\cdot R_1}]}{1-cos(\alpha)\cdot e^{-TR\cdot R_1}}" /> </br> with </br> *S<sub>0</sub>* (Q.S.010), </br> *R<sub>1</sub>* (Q.E.001), </br> *TR* (Q.S.006), </br><img src="https://latex.codecogs.com/svg.image?\alpha&space;" title="https://latex.codecogs.com/svg.image?\alpha " /> (Q.S.007), </br> *S* (Q.S.001) | -- |
| M.S.005 | Single-shot saturation recovery SPGR with centric encoding model | SS-SR-FLASH-c model | SS-SR-SPGR-c model | This forward model is given by the following equation: <img src="https://latex.codecogs.com/svg.image?S=&space;S_0\cdot(1-e^{-PD\cdot&space;R_1})" title="https://latex.codecogs.com/svg.image?S= S_0\cdot(1-e^{-PD\cdot R_1})" /> </br> with </br> *S<sub>0</sub>* (Q.S.010), </br> *R<sub>1</sub>* (Q.E.001), </br> PD (Q.S.008), </br> *S* (Q.S.001) | -- |
| M.S.006 | Saturation-recovery SPGR with linear encoding model | SR-turboFLASH-lin model | SR-turboSPGR-lin model | This forward model is given by the following equation: <img src="https://latex.codecogs.com/svg.image?S=&space;S_0\cdot&space;sin(\alpha&space;)[(1-e^{-PD\cdot&space;R_1})a^{n-1}&plus;b\frac{(1-a^{n-1})}{(1-a)}]" title="https://latex.codecogs.com/svg.image?S= S_0\cdot sin(\alpha )[(1-e^{-PD\cdot R_1})a^{n-1}+b\frac{(1-a^{n-1})}{(1-a)}]" /> </br> with </br> <img src="https://latex.codecogs.com/svg.image?a=cos(\alpha&space;)\cdot&space;e^{-TR\cdot&space;R_1}" title="https://latex.codecogs.com/svg.image?a=cos(\alpha )\cdot e^{-TR\cdot R_1}" />, </br> <img src="https://latex.codecogs.com/svg.image?b=1-e^{-TR\cdot&space;R_1}" title="https://latex.codecogs.com/svg.image?b=1-e^{-TR\cdot R_1}" />, </br> *S<sub>0</sub>* (Q.S.010), </br> *R<sub>1</sub>* (Q.E.001), </br> PD (Q.S.008), </br> *TR* (Q.S.006), </br> <img src="https://latex.codecogs.com/svg.image?\alpha&space;" title="https://latex.codecogs.com/svg.image?\alpha " /> (Q.S.006)= 90°, </br> n (Q.S.001), </br> *S* (Q.S.001) | Larson 2001 |
| M.S.007 | Single-shot inversion recovery SPGR with centric encoding model | SS-IR-FLASH-c model | SS-IR-SPGR-c model | This forward model is given by the following equation: <img src="https://latex.codecogs.com/svg.image?S&space;=&space;S_0\cdot(1-2e^{-PD\cdot&space;R_1})" title="https://latex.codecogs.com/svg.image?S = S_0\cdot(1-2e^{-PD\cdot R_1})" />  </br> with </br> *S<sub>0</sub>* (Q.S.010), </br> *R<sub>1</sub>* (Q.E.001), </br> PD (Q.S.008), </br> *S* (Q.S.001) | Ordidge et al. 1990 |
| M.S.008 | Inversion-recovery spoiled gradient recalled echo with linear encoding model | IR-turboFLASH-lin model | IR-turboSPGR-lin model| This forward model is given by the following equation: <img src="https://latex.codecogs.com/svg.image?\inline&space;S=&space;S_0\cdot&space;sin(\alpha&space;)[\frac{C&plus;bA-\frac{1}{cos(\alpha&space;)}D&plus;1}{1&plus;BD}e^{-PD\cdot&space;R_1}&space;a^{n-1}&plus;...\\...(1-e^{-PD\cdot&space;R_1})a^{n-1}&plus;b\frac{1-a^{n-1}}{1-a}]" title="https://latex.codecogs.com/svg.image?\inline S= S_0\cdot sin(\alpha )[\frac{C+bA-\frac{1}{cos(\alpha )}D+1}{1+BD}e^{-PD\cdot R_1} a^{n-1}+...\\...(1-e^{-PD\cdot R_1})a^{n-1}+b\frac{1-a^{n-1}}{1-a}]" /> </br> with </br> <img src="https://latex.codecogs.com/svg.image?\inline&space;a=cos(\alpha&space;)e^{-TR\cdot&space;R_1}" title="https://latex.codecogs.com/svg.image?\inline a=cos(\alpha )e^{-TR\cdot R_1}" />, </br> <img src="https://latex.codecogs.com/svg.image?\inline&space;b=1-e^{-TR\cdot&space;R_1}" title="https://latex.codecogs.com/svg.image?\inline b=1-e^{-TR\cdot R_1}" />, </br> <img src="https://latex.codecogs.com/svg.image?\inline&space;C=a^{N-1}(1-e^{-PD\cdot&space;R_1})" title="https://latex.codecogs.com/svg.image?\inline C=a^{N-1}(1-e^{-PD\cdot R_1})" />, </br> <img src="https://latex.codecogs.com/svg.image?\inline&space;A&space;=&space;\frac{1-a^{N-1}}{1-a}" title="https://latex.codecogs.com/svg.image?\inline A = \frac{1-a^{N-1}}{1-a}" />, </br> <img src="https://latex.codecogs.com/svg.image?\inline&space;D&space;=&space;cos(\alpha&space;)e^{-PD\cdot&space;R_1}" title="https://latex.codecogs.com/svg.image?\inline D = cos(\alpha )e^{-PD\cdot R_1}" />, </br> <img src="https://latex.codecogs.com/svg.image?\inline&space;B&space;=&space;a^{N-1}e^{-PD\cdot&space;R_1}" title="https://latex.codecogs.com/svg.image?\inline B = a^{N-1}e^{-PD\cdot R_1}" />, </br>  *S<sub>0</sub>*  (Q.S.010),</br> *R<sub>1</sub>* (Q.E.001), </br> *PD* (Q.S.008), </br>  <img src="https://latex.codecogs.com/svg.image?\inline&space;\alpha&space;" title="https://latex.codecogs.com/svg.image?\inline \alpha " /> (Q.S.007) , </br> *TR* (Q.S.006), </br> *n* (Q.S.001), </br> *N* (Q.S.012), </br> *S* (Q.S.001) | Larson 2001 |


### <a name="Magnitude models: DCE - R1 in the fast water exchange limit, direct relationship with indicator concentration"></a> Magnitude models: DCE - R1 in the fast water exchange limit, direct relationship with indicator concentration
| Code | OSIPI name| Alternative names|Notation|Description|Reference|
| -- | -- | -- | -- | -- | -- |
| M.S.009 | Linear model | -- | Linear | This forward model is given by the following equation: </br> <img src="https://latex.codecogs.com/svg.image?\inline&space;S&space;=&space;k\cdot&space;C" title="https://latex.codecogs.com/svg.image?\inline S = k\cdot C" /> </br> with </br> *C* (Q.I.001), </br> *k* (Q.G.009), </br> *S* (Q.S.001 | -- |
| M.S.010 | Absolute signal enhancement model | -- | ASE | This forward model is given by the following equation: <img src="https://latex.codecogs.com/svg.image?\left|&space;S-S_{BL}\right|&space;=&space;k\cdot&space;C" title="https://latex.codecogs.com/svg.image?\left| S-S_{BL}\right| = k\cdot C" /> , with  *C* (Q.I.001), *S<sub>BL</sub>* (Q.S.002), *k* (Q.G.009) and *S* (Q.S.001)| Ingrisch and Sourbron 2013 |
| M.S.011 | Relative signal enhancement model | -- | RSE |  This forward model is given by the following equation: | Ingrisch and Sourbron 2013 |

### <a name="Magnitude models: DCE - R1 in the presence of restricted water exchange"></a> Magnitude models: DCE - R1 in the presence of restricted water exchange

### <a name="Magnitude models: DCE - R1 in the presence of restricted water exchange"></a> Magnitude models: Combined DCE/DSC - *R<sub>1</sub>*/ *R<sub>2</sub>*/ *R<sub>1</sub><sup>*</sup>*


## Electromagnetic property models (C -> EP)

## Indicator concentration models (P -> C)

### <a name="Indicator kinetic models"></a> Indicator kinetic models

### <a name="Arterial input function models"></a> Arterial input function models

## Descriptive models (P -> S)


## Heuristic models

## Perfusion identity models