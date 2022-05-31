
# Sections G: General purpose processes

## Group D: Curve descriptive processes
General processes applied to a given data set, e.g. processes to derive descriptive quantities are defined in this group.

| Code | OSIPI name| Alternative names|Notation|Description|Reference|
| -- | -- | -- | -- | -- | -- |
| G.D.001 | Calculate value at data grid point | -- | *Calcf(x<sub>i</sub>)* | This process returns the data value *f(x<sub>i*</sub>) at the data grid point *x<sub>i</sub>*. <br /> **Input:** <br /> [Data (Q.G.002), Data grid (Q.G.001)], <br /> *i* (Q.G.003) <br /> **Output**: <br /> *f(x<sub>i</sub>)* (Q.D.001) | -- |
| G.D.002 | Calculate maximum of data | -- | *Calcf<sub>max</sub>*  | This process returns the maximum data value *f<sub>max</sub>* . <br /> **Input:** <br /> Data (Q.G.002) <br /> **Output**: <br /> *f<sub>max</sub>* (Q.D.002) | --|
| G.D.003 | Calculate data grid point of maximum data value | -- | *Calcx<sub>max</sub>* | This process returns the data grid point at which the maximum of a given data set occurs. <br /> **Input:** <br /> [Data (Q.G.002), Data grid (Q.G.001)] <br /> **Output**: <br /> x<sub>max</sub> (Q.D.003) | -- |
| G.D.004 | Calculate minimum of data | -- | *Calcf<sub>min</sub>*  | This process returns the minimum data value *f<sub>min</sub>* . <br /> **Input:** <br /> Data (Q.G.002) <br /> **Output**: <br /> *f<sub>min</sub>* (Q.D.004) | --|
| G.D.005 | Calculate data grid point of minimum data value | -- | *Calcx<sub>min</sub>* | This process returns the data grid point at which the minimum of a given data set occurs. <br /> **Input:** <br /> [Data (Q.G.002), Data grid (Q.G.001)] <br /> **Output**: <br /> x<sub>min</sub> (Q.D.005) | -- |
| G.D.006 | Calculate value of final data point | -- | *Calcf<sub>fin</sub>* | This process returns the value of the data at the final data grid point. <br /> **Input:** <br /> [Data (Q.G.002), Data grid (Q.G.001)] <br /> **Output**: <br /> *f<sub>fin</sub>* (Q.D.006) | -- ||
| G.D.007 | Calculate final data grid point | -- | *Calcx<sub>fin</sub>* | This process returns the last data grid point of a given data grid. <br /> **Input:** <br /> Data grid (Q.G.001) <br /> **Output**: <br /> *x<sub>fin</sub>* (Q.D.007) | -- |
| G.D.008 | Calculate maximum deviation from baseline | --| <img src="https://latex.codecogs.com/svg.image?Calc\Delta&space;f_{BL,max}" title="https://latex.codecogs.com/svg.image?Calc\Delta f_{BL,max}" />| This process returns the maximum absolute deviation of a given data set and baseline.  <br /> **Input:** <br /> Data (Q.G.002), <br /> Baseline (Q.BL.001)<br /> **Output**: <br /> <img src="https://latex.codecogs.com/svg.image?\Delta&space;f_{BL,max}" title="https://latex.codecogs.com/svg.image?\Delta f_{BL,max}" /> (Q.D.008) | -- |
| G.D.009 | Derivative at data grid point | -- | <img src="https://latex.codecogs.com/svg.image?Calc\frac{df(x_i)}{dx}" title="https://latex.codecogs.com/svg.image?Calc\frac{df(x_i)}{dx}" /> | This process returns the value of the derivative of a given data set at the data grid point x<sub>i</sub>. <br /> | -- |
| G.D.010 | Calculate time to peak | -- | CalcTTP | This process returns the time to peak for a given bolus arrival time and data grid point of maximum value. <br /> **Input:** <br /> *x<sub>max</sub>* (Q.D.003),<br /> *BAT* (Q.B.001) <br /> **Output**:<br />  *TTP* (Q.D.010) | -- |
| G.D.011 | Calculate wash-in slope | -- | CalcWIS | This process returns the wash-in-slope for a given baseline, maximum value and time to peak of a data set. <br /> **Input:** <br /> *f<sub>max</sub>* (Q.D.002), <br /> *f<sub>BL</sub>* (Q.BL.001), <br /> *TTP* (Q.D.010)  <br /> **Output**:<br /> *WIS* (Q.D.011)  | -- |
| G.D.012 | Calculate wash-out slope | -- | CalcWOS | This process returns the wash-out-slope for a given maximum value, final data value and the data grid points of the maximum and final data value of a data set. <br /> **Input:** <br /> *f<sub>max</sub>* (Q.D.002), <br /> *f<sub>fin</sub>*(Q.D.006), <br /> *x<sub>max</sub>* (Q.D.003), <br /> *x<sub>fin</sub>* (Q.D.007)  <br /> **Output**:<br/> *WOS (Q.D.012)*| -- |
| G.D.013 | Calculate area under curve  | -- | <img src="https://latex.codecogs.com/svg.image?CalcAUC_{x_{start},x_{end}}" title="https://latex.codecogs.com/svg.image?CalcAUC_{x_{start},x_{end}}" /> | This process returns the integral of data on a data grid in between a range of data grid points *x<sub>start</sub>* and *x<sub>end</sub>*. <br /> **Input:** <br /> [*Data* (Q.G.002), *Data grid* (Q.G.001)],<br/> [*x<sub>start</sub>* (Q.G.013), *x<sub>end</sub>*(Q.G.014)] <br /> **Output**:<br /> *AUC<sub>x<sub>start</sub>,x<sub>end</sub></sub>* (Q.D.013) | -- |

## Group SE: Segmentation
Processes related to segmentation are listed in this section.

| Code | OSIPI name| Alternative names|Notation|Description|Reference|
| -- | -- | -- | -- | -- | -- |
| G.SE.001 | Create binary mask | -- | -- | This process creates a binary segmentation mask on a given data set using a specified segmentation method. <br /> **Input:** <br /> Data (Q.G.002), <br /> Segmentation method (G.SE.003) <br /> **Output**: <br /> Binary mask (Q.SE.001) | -- |
| G.SE.002 | Apply binary mask | -- | -- | This process masks a given data set with a given mask. <br/> **Input:** <br /> Data (Q.G.002), Binary mask (Q.SE.001) <br /> **Output**: <br /> Data (Q.G.002)  | --|
| G.SE.003 | Segmentation method | -- | -- | Method to create a segmentation mask. Select from [Segmentation methods](#Segmentation methods) | -- |

### <a name="Segmentation methods"></a> Segmentation methods
| Code | OSIPI name| Alternative names|Notation|Description|Reference|
| -- | -- | -- | -- | -- | -- |
| G.SE.004 | Freehand | -- | -- | Manual freehand drawing of contours. <br/> **Input:** <br />  Data (Q.G.002) <br /> **Output**: <br /> Binary mask (Q.SE.001) | --|
| G.SE.005 | Threshold | -- | -- | This method selects all input data with values in a specified range between lower and upper threshold. <br/> **Input:** <br /> Data (Q.G.002), <br /> Lower threshold (Q.G.010), <br /> Upper threshold (Q.G.011) <br /> **Output**: Binary mask (Q.SE.001) | -- |
| G.SE.006 | Region growing | -- | -- | This method grows a region from selected seeds with values between the lower and upper value threshold in the neighborhood of the seeds.  <br/> **Input:** <br /> Data (Q.G.002), <br /> Seeds (Q.SE.004), <br /> Lower threshold (Q.G.010), <br /> Upper threshold (Q.G.011) <br /> **Output**: Binary mask (Q.SE.001) | -- |
| G.SE.007 | *K*-means clustering | -- | -- | This method partitions the input data in a number of clusters using the *K*-means clustering algorithm and selects the cluster with the ith index as binary mask. <br/> **Input:** <br /> Data (Q.G.002), <br /> Number of *K*-Means clusters (Q.SE.005), <br /> *i* (Q.G.003)<br /> **Output**: <br /> Binary mask (Q.SE.001) | -- |

## Group I: Forward model inversion

| Code | OSIPI name| Alternative names|Notation|Description|Reference|
| -- | -- | -- | -- | -- | -- |
| G.I.001 | Inversion method | -- | -- | Method to invert a given forward model. Select from [Inversion methods](#Inversion methods). | -- |

### <a name="Inversion methods"></a> Inversion methods

| Code | OSIPI name| Alternative names|Notation|Description|Reference|
| -- | -- | -- | -- | -- | -- |
| G.I.002 | Analytical inversion | -- |  -- | This method is used when the solution of the model inversion is well-defined and the model parameters of interest can be calculated analytically. <br/> **Input:** <br /> Forward model (M.G.001), <br /> Static model parameters (Q.AI.001), <br /> [Data (Q.G.002), Data grid (Q.G.001)] <br />**Output**: <br /> Model parameters (Q.AI.002) | -- |
| G.I.003 | Optimization | -- | -- |  Inversion of a forward model by iteratively adjusting the set of model parameters in order to minimize a similarity measure between the data and the model. <br/> **Input:** <br /> Optimizer (G.O.001) <br /> **Output**: <br /> Estimated model parameters (Q.O.003) | -- |
| G.I.004 | Deconvolution | -- | -- | Method which can be used when a model is given as a convolution <img src="https://latex.codecogs.com/svg.image?h(x)=f(x)\ast&space;g(x)" title="https://latex.codecogs.com/svg.image?h(x)=f(x)\ast g(x)" /> with known *h(x)* and *f(x)* to determine *g(x)*. <br/> **Input:** <br /> Deconvolution method (G.D.001) <br /> **Output**: <br />  [Data (Q.G.002), Data grid (Q.G.001)] = [g(x), x] | -- |

## Group O: Optimization

| Code | OSIPI name| Alternative names|Notation|Description|Reference|
| -- | -- | -- | -- | -- | -- |
| G.O.001 | Optimizer | -- | -- | The optimization strategy used to estimate the model parameters. Select from [Optimizers](#Optimizers). | -- |
| G.O.002 | Cost function | -- | -- | The similarity measure between the measured data and the model function. Select from [Cost functions](#Cost functions). | -- |


### <a name="Optimizers"></a> Optimizers

| Code | OSIPI name| Alternative names|Notation|Description|Reference|
| -- | -- | -- | -- | -- | -- |
| G.O.003 | Levenberg-Marquardt | -- | LM | An algorithm that interpolates between the Gauss-Newton algorithm and the method of gradient descent.  <br/> **Input:** <br /> Cost function (Q.O.006), <br /> Initial parameters (Q.O.001) <br /> *Optional:* <br />  Parameter lower bounds (Q.O.002), <br /> Parameter upper bounds (Q.O.003),<br /> Data weights (Q.O.004),<br /> Maximum number of iterations (Q.O.010),<br /> Convergence threshold (Q.O.014)<br /> **Output**: <br />  Estimated model parameters (Q.O.003),<br /> Cost value minimum (Q.O.005)| -- |


### <a name="Cost functions"></a> Cost functions

| Code | OSIPI name| Alternative names|Notation|Description|Reference|
| -- | -- | -- | -- | -- | -- |
| G.O.004 | Non-linear least squares  | -- | NLLS | <img src="https://latex.codecogs.com/svg.image?\left\|&space;f(\phi&space;,\theta;&space;x)-y(x)&space;\right\|_{2}^{2}&space;" title="https://latex.codecogs.com/svg.image?\left\| f(\phi ,\theta; x)-y(x) \right\|_{2}^{2} " /> , where *f* is a forward model describing the data, *x* is the data grid, *y(x)* is the measured data and <img src="https://latex.codecogs.com/svg.image?\left\|\&space;&space;\right\|_{2}&space;" title="https://latex.codecogs.com/svg.image?\left\|\ \right\|_{2} " />  is the L2-norm. The forward model is non-linear in the model parameters. <br/> **Input:** <br /> [Data (Q.G.002), Data grid (Q.G.001)], <br /> Forward model (M.G.001), <br /> <img src="https://latex.codecogs.com/svg.image?\phi&space;&space;" title="https://latex.codecogs.com/svg.image?\phi " /> (Q.O.001), <br /> <img src="https://latex.codecogs.com/svg.image?\theta&space;" title="https://latex.codecogs.com/svg.image?\theta " /> (Q.O.002) <br /> **Output**: <br /> Cost value (Q.O.004) <br />  | -- |
| G.O.005 | Linear least squares | -- | LLS | <img src="https://latex.codecogs.com/svg.image?\left\|A\phi&space;-y(x)&space;\right\|_{2}^{2}" title="https://latex.codecogs.com/svg.image?\left\|A\phi -y(x) \right\|_{2}^{2}" /> , where *x* is the data grid, *y(x)* is the measured data and <img src="https://latex.codecogs.com/svg.image?\left\|\&space;&space;\right\|_{2}&space;" title="https://latex.codecogs.com/svg.image?\left\|\ \right\|_{2} " />  is the L2-norm. <br/> **Input:** <br /> [Data (Q.G.002), Data grid (Q.G.001)], <br /> <img src="https://latex.codecogs.com/svg.image?\phi&space;&space;" title="https://latex.codecogs.com/svg.image?\phi " /> (Q.O.001), <br /> *A* (Q.O.013) <br /> **Output**: <br /> Cost value (Q.O.004) <br /> | -- |
| G.O.006 | Standard-Form Tikhonov | -- | SFT | <img src="https://latex.codecogs.com/svg.image?\left\|&space;A\phi&space;-y(x)&space;\right\|_{2}^{2}&plus;\lambda^{2}\left\|Lx&space;\right\|_{2}^{2}&space;" title="https://latex.codecogs.com/svg.image?\left\| A\phi -y(x) \right\|_{2}^{2}+\lambda^{2}\left\|Lx \right\|_{2}^{2} " /> , where *x* is the data grid, *y(x)* is the measured data , <img src="https://latex.codecogs.com/svg.image?\left\|\&space;&space;\right\|_{2}&space;" title="https://latex.codecogs.com/svg.image?\left\|\ \right\|_{2} " /> is the L2-norm and *L* is the identity matrix (same dimensions as *A*).  <br/> **Input:** <br /> [Data (Q.G.002), Data grid (Q.G.001)], <br /> <img src="https://latex.codecogs.com/svg.image?\phi&space;&space;" title="https://latex.codecogs.com/svg.image?\phi " /> (Q.O.001), <br /> *A* (Q.O.013), <br /> <img src="https://latex.codecogs.com/svg.image?\lambda&space;" title="https://latex.codecogs.com/svg.image?\lambda " /> (Q.O.011) <br /> **Output**: <br /> Cost value (Q.O.004) <br />| -- |



### <a name="Regularization parameter"></a> Regularization parameter

| Code | OSIPI name| Alternative names|Notation|Description|Reference|
| -- | -- | -- | -- | -- | -- |
| -- | -- | -- | -- | -- | -- |

## Group DE: Deconvolution

| Code | OSIPI name| Alternative names|Notation|Description|Reference|
| -- | -- | -- | -- | -- | -- |
| G.D.001 | Deconvolution method | --| -- | Method to determine [g(x), x] from a  convolution model of the shape <img src="https://latex.codecogs.com/svg.image?h(x)=f(x)\ast&space;g(x)" title="https://latex.codecogs.com/svg.image?h(x)=f(x)\ast g(x)" /> with given and [f(x),x] and [h(x),x]. Select from [Deconvolution methods](#Deconvolution methods). | -- |
| G.D.002 | Discretization method | -- | -- | Method to transfer continuous models, functions and equations into discrete counterparts. Select from [Discretization methods](#Discretization methods).| -- |
| G.D.003 | Regularization method | -- | -- | Method to control an excessively fluctuating function such that the coefficients do not take extreme values. This is done by adding an additional penalty term in the cost function. Select a regularized cost function from [Cost functions](#Cost functions).| -- |


### <a name="Deconvolution methods"></a> Deconvolution methods

| Code | OSIPI name| Alternative names|Notation|Description|Reference|
| -- | -- | -- | -- | -- | -- |
| -- |Singular Value Decomposition | -- | SVD | Algebraic deconvolution of <img src="https://latex.codecogs.com/svg.image?h(x)=f(x)\ast&space;g(x)" title="https://latex.codecogs.com/svg.image?h(x)=f(x)\ast g(x)" /> with *f(x)* and *h(x)* sampled at discrete points *[f(x), x]* and *[g(x), x]*. The convolution equation is discretized according to a given discretization method and the resulting matrix equation is solved as a regularized least-squares problem with a given regularization method. <br/> **Input:** <br /> [Data (Q.G.002), Data grid (Q.G.001)] =  [f(x), x], <br /> [Data (Q.G.002), Data grid (Q.G.001)] = [g(x), x], <br /> Discretization method (G.D.002), <br /> Regularization method (G.D.003) <br /> **Output**: <br />[Data (Q.G.002), Data grid (Q.G.001)] = [g(x), x] <br />  | -- |

### <a name="Discretization methods"></a> Discretization methods
In this group, the following notation is assumed for all functions *f*: *f<sub>n</sub>*= *f(x<sub>n</sub>)*.

| Code | OSIPI name| Alternative names|Notation|Description|Reference|
| -- | -- | -- | -- | -- | -- |
| G.DI.001 | Numerical convolution (first order)| -- | -- | Convolutions <img src="https://latex.codecogs.com/svg.image?f(x)=g(x)\ast&space;h(x)" title="https://latex.codecogs.com/svg.image?f(x)=g(x)\ast h(x)" /> are calculated as </br> <img src="https://latex.codecogs.com/svg.image?f_n&space;=&space;\Delta&space;x\cdot&space;\sum_{i=0}^{n}g_i\cdot&space;h_{n-i}" title="https://latex.codecogs.com/svg.image?f_n = \Delta x\cdot \sum_{i=0}^{n}g_i\cdot h_{n-i}" />  | -- |
| G.DI.002 | Block-circulant | -- | -- | Convolutions <img src="https://latex.codecogs.com/svg.image?f(x)=g(x)\ast&space;h(x)" title="https://latex.codecogs.com/svg.image?f(x)=g(x)\ast h(x)" /> are calculated as <img src="https://latex.codecogs.com/svg.image?f_n&space;=&space;\Delta&space;x\cdot(g_0h_n&plus;g_1h_{n-1}&plus;...&plus;g_Nh_{n-N})" title="https://latex.codecogs.com/svg.image?f_n = \Delta x\cdot(g_0h_n+g_1h_{n-1}+...+g_Nh_{n-N})" /> . </br> This requires *h<sub>i</sub>* to be pre-padded with *N* zeros such that *h<sub>i</sub> < 0 = 0*.| Wu 2004 |
| G.DI.003 | Volterra linear | -- | -- | Convolutions <img src="https://latex.codecogs.com/svg.image?f(x)=g(x)\ast&space;h(x)" title="https://latex.codecogs.com/svg.image?f(x)=g(x)\ast h(x)" /> are calculated as  </br> <img src="https://latex.codecogs.com/svg.image?f_n&space;=&space;\Delta&space;x\cdot&space;(h_0g_n^&plus;&space;&plus;\sum_{i=1}^{n-1}h_{n-i}g_i^{\pm}&plus;h_ng_0^&plus;)" title="https://latex.codecogs.com/svg.image?f_n = \Delta x\cdot (h_0g_n^+ +\sum_{i=1}^{n-1}h_{n-i}g_i^{\pm}+h_ng_0^+)" />| Sourbron 2003 |
| G.DI.004 | Singular | -- | -- | Convolutions <img src="https://latex.codecogs.com/svg.image?f(x)=g(x)\ast&space;h(x)" title="https://latex.codecogs.com/svg.image?f(x)=g(x)\ast h(x)" /> are calculated as </br> <img src="https://latex.codecogs.com/svg.image?f_n&space;=&space;\Delta&space;x\cdot(\sum_{i=-\infty&space;}^{&plus;\infty&space;}h_{n-i}g_i^\pm&space;)" title="https://latex.codecogs.com/svg.image?f_n = \Delta x\cdot(\sum_{i=-\infty }^{+\infty }h_{n-i}g_i^\pm )" /> . </br> It is assumed that *g<sub>i</sub> = 0* for *i < 0* and there is an index *k* such that h<sub>n</sub> = 0* for *n <- k*. | Ostergaard 1996 |
| G.DI.005 | Hybrid | -- | -- | Convolutions <img src="https://latex.codecogs.com/svg.image?f(x)=g(x)\ast&space;h(x)" title="https://latex.codecogs.com/svg.image?f(x)=g(x)\ast h(x)" /> are calculated as </br> <img src="https://latex.codecogs.com/svg.image?f_n&space;=&space;\frac{\Delta&space;x}{2}\cdot(\sum_{i=-\infty&space;}^{&plus;\infty}h_{n-i}(g_{i-1}&plus;g_i))" title="https://latex.codecogs.com/svg.image?f_n = \frac{\Delta x}{2}\cdot(\sum_{i=-\infty }^{+\infty}h_{n-i}(g_{i-1}+g_i))" /> .| Willats 2006 |
| G.DI.006 | Exponential convolution | --| --| Convolutions <img src="https://latex.codecogs.com/svg.image?f(x)&space;=&space;g(x)\ast&space;\frac{e^{-\frac{x}{T}}}{T}" title="https://latex.codecogs.com/svg.image?f(x) = g(x)\ast \frac{e^{-\frac{x}{T}}}{T}" /> are calculated as </br> <img src="https://latex.codecogs.com/svg.image?f_{i&plus;1}=e^{-x_i}f_i&plus;g_iE_0(x_i)&plus;a'TE_1(x_i)" title="https://latex.codecogs.com/svg.image?f_{i+1}=e^{-x_i}f_i+g_iE_0(x_i)+a'TE_1(x_i)" /> with </br> <img src="https://latex.codecogs.com/svg.image?x_i=\frac{t_{i&plus;1}-t_i}{T};&space;a'_i=\frac{a_{i&plus;1}-a}{t_{i&plus;1}-t_i};\&space;E_0&space;=&space;1-e^{-x};\&space;E_1(x)=x-E_0(x)" title="https://latex.codecogs.com/svg.image?x_i=\frac{t_{i+1}-t_i}{T}; a'_i=\frac{a_{i+1}-a}{t_{i+1}-t_i};\ E_0 = 1-e^{-x};\ E_1(x)=x-E_0(x)" /> . | Flouri 2016 |


## Group U: Uncertainty estimation

| Code | OSIPI name| Alternative names|Notation|Description|Reference|
| -- | -- | -- | -- | -- | -- |
| -- | -- | -- | -- | -- | -- |

## Group A: Averaging

| Code | OSIPI name| Alternative names|Notation|Description|Reference|
| -- | -- | -- | -- | -- | -- |
| -- | -- | -- | -- | -- | -- |












