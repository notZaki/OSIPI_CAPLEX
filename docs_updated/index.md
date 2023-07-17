# Introduction

## Motivation
Dynamic contrast-enhanced (DCE) and dynamic-susceptibility contrast MRI (DSC-MRI) have emerged as the two primary contrast-agent based MRI modalities for imaging tissue 
perfusion. 
Perfusion quantities derived from DCE-MRI and DSC-MRI have enormous potential as quantitative imaging biomarkers (QIBs) in applications such as oncology, neurology, 
cardiology, liver, renal, and musculoskeletal disorders [[1]](#ref1), however translation of these QIBs to the clinic is hindered by lack of standardization in both acquisition and 
analysis procedures. Despite the best efforts of the research and clinical communities, there is substantial variability in DCE/DSC MRI QIBs between studies, 
with data analysis being a major contributor to this variation [[2]](#ref2), [[3]](#ref3).
 
DCE and DSC-MRI data is typically analyzed using a sequence of computational processes which define an image analysis pipeline. 
The specific steps included within these pipelines, and the software used, can be highly variable from study to study and between research groups. 
Clinically-oriented studies often rely on commercial software. 
Several studies have found substantial differences and inconsistencies between these tools [[4]](#ref4), [[5]](#ref5), [[6]](#ref6), [[7]](#ref7) the details of which are rarely fully documented by the vendor. 
When commercial solutions are not available, or do not have the desired functionality,  in-house software is commonly developed, which can result in very different 
implementations of the same basic analysis pipeline, varying in factors such as the coding language used (Python, Matlab, C++), curve fitting algorithm and tuning parameters, 
output data type and units, and the overall choice and number of analysis steps. 
There have been many efforts to set standards in medical imaging including initiatives to improve data standards such as the Digital Imaging and Communications in Medicine 
(DICOM) standard [[8]](#ref8) and the Brain Imaging Data Structure (BIDS) [[9]](#ref9) [[10]](#ref10), and there are a number of more specific initiatives focused around metrology standards 
for QIBs [[11]](#ref11) and standardized methods and results reporting for neuroimaging (COBIDAS [[12]](#ref12), NIDMTerms [[13]](#ref13)). Guidance on the acquisition of perfusion MRI for multi-centre studies 
has been established for many years through the RSNA Quantitative Imaging Biomarkers Initiative (QIBA), which have published a number of recommended protocols focussed on 
acquisition and analysis of DCE\DSC data. Similar efforts have been made for arterial spin-labeling MRI (ASL-MRI) in brain [[14]](#ref14) and kidney [[15]](#ref15), [[16]](#ref16)
However, very little guidance is given on reporting of methods and results, or recommended terminology for quantities, models, or processes. 
To address the lack of standards for perfusion MRI, particularly in the domain of image analysis and processing, the Open Source Initiative for Perfusion Imaging (OSIPI) [[17]](#ref17) 
was established in 2020 following a call-to-action survey of the Perfusion Study group of the International Society for Magnetic Resonance in Medicine (ISMRM). 
OSIPI’s mission is to promote the sharing of perfusion imaging software, improve the reproducibility of perfusion imaging research, and speed up the translation of perfusion 
software into tools for discovery science, drug development, and clinical practice. 

OSIPI Taskforce 4.2 [[18]](#ref18) was established to develop standards for terminology and reporting of DCE/DSC analyses. 
This lexicon describes the main deliverable from the first 2-year cycle of OSIPI Task Force 4.2: the development of a consensus-based DCE/DSC lexicon of standard quantities,
models and processes (OSIPI-CAPLEX) and reporting guidelines. 



## Citing OSIPI CAPLEX

### Original publication

### References
<a name="ref1"></a> 1. 	O’Connor JPB, Aboagye EO, Adams JE, et al. Imaging biomarker roadmap for cancer studies. Nat Rev Clin Oncol. 2017;14(3):169-186. doi:10.1038/nrclinonc.2016.162<br>
<a name="ref2"></a> 2. 	Heye T, Davenport MS, Horvath JJ, et al. Reproducibility of dynamic contrast-enhanced MR imaging. Part I. Perfusion characteristics in the female pelvis by using multiple computer-aided diagnosis perfusion analysis solutions. Radiology. 2013;266(3):801-811. doi:10.1148/radiol.12120278<br>
<a name="ref3"></a> 3. 	Kudo K, Christensen S, Sasaki M, et al. Accuracy and Reliability Assessment of CT and MR Perfusion Analysis Software Using a Digital Phantom. Radiology. 2013;267(1):201-211. doi:10.1148/radiol.12112618<br>
<a name="ref4"></a> 4. 	Huang W, Li X, Chen Y, et al. Variations of dynamic contrast-enhanced magnetic resonance imaging in evaluation of breast cancer therapy response: a multicenter data analysis challenge. Transl Oncol. 2014;7(1):153-166. doi:10.1593/tlo.13838<br>
<a name="ref5"></a> 5. 	Beuzit L, Eliat PA, Brun V, et al. Dynamic contrast-enhanced MRI: Study of inter-software accuracy and reproducibility using simulated and clinical data. J Magn Reson Imaging. 2016;43(6):1288-1300. doi:10.1002/jmri.25101<br>
<a name="ref6"></a> 6. 	Joint Head and Neck Radiotherapy-MRI Development Cooperative. A Multi-Institutional Comparison of Dynamic Contrast-Enhanced Magnetic Resonance Imaging Parameter Calculations. Sci Rep. 2017;7(1):11185. doi:10.1038/s41598-017-11554-w<br>
<a name="ref7"></a> 7. 	Bell LC, Semmineh N, An H, et al. Evaluating Multisite rCBV Consistency from DSC-MRI Imaging Protocols and Postprocessing Software Across the NCI Quantitative Imaging Network Sites Using a Digital Reference Object (DRO). Tomography. 2019;5(1):110-117. doi:10.18383/j.tom.2018.00041<br>
<a name="ref8"></a> 8. 	Fedorov A, Clunie D, Ulrich E, et al. DICOM for quantitative imaging biomarker development: a standards based approach to sharing clinical data and structured PET/CT analysis results in head and neck cancer research. PeerJ. 2016;4:e2057. doi:10.7717/peerj.2057<br>
<a name="ref9"></a> 9. 	Website. OSIPI Task Force 2.3: DCE/DSC contributions. Open Science Initiative for Perfusion Imaging. Accessed March 29, 2022. http://www.osipi.org/task-force-2-3/.<br>
<a name="ref10"></a> 10. 	Gorgolewski KJ, Auer T, Calhoun VD, et al. The brain imaging data structure, a format for organizing and describing outputs of neuroimaging experiments. Sci Data. 2016;3:160044. doi:10.1038/sdata.2016.44<br>
<a name="ref11"></a> 11. 	Sullivan DC, Obuchowski NA, Kessler LG, et al. Metrology Standards for Quantitative Imaging Biomarkers. Radiology. 2015;277(3):813-825. doi:10.1148/radiol.2015142202<br>
<a name="ref12"></a> 12. 	Nichols TE, Das S, Eickhoff SB, et al. Best practices in data analysis and sharing in neuroimaging using MRI. Nat Neurosci. 2017;20(3):299-303. doi:10.1038/nn.4500<br>
<a name="ref13"></a> 13. 	nidm-terms. https://scicrunch.org/nidm-terms. Accessed March 29, 2022.<br>
<a name="ref14"></a> 14. 	Alsop DC, Detre JA, Golay X, et al. Recommended implementation of arterial spin-labeled perfusion MRI for clinical applications: A consensus of the ISMRM perfusion study group and the European consortium for ASL in dementia. Magnetic Resonance in Medicine. 2015;73(1):spcone - spcone. doi:10.1002/mrm.25607<br>
<a name="ref15"></a> 15. 	Nery F, Buchanan CE, Harteveld AA, et al. Consensus-based technical recommendations for clinical translation of renal ASL MRI. MAGMA. 2020;33(1):141-161. doi:10.1007/s10334-019-00800-z<br>
<a name="ref16"></a> 16. 	Mendichovszky I, Pullens P, Dekkers I, et al. Technical recommendations for clinical translation of renal MRI: a consensus project of the Cooperation in Science and Technology Action PARENCHIMA. MAGMA. 2020;33(1):131-140. doi:10.1007/s10334-019-00784-w<br>
<a name="ref17"></a> 17. 	Website. Open Science Initiative for Perfusion Imaging. Open Science Initiative for Perfusion Imaging. Accessed March 29, 2022. http://www.osipi.org.<br>
<a name="ref18"></a> 18. 	Website. OSIPI Task Force 4.2: DCE/DSC lexicon. Open Science Initiative for Perfusion Imaging. Accessed March 29, 2022. https://www.osipi.org/task-force-4-2/.<br>



