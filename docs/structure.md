## CAPLEX structure

CAPLEX is organized into 4 sections which group together similar quantities, models or processes. 

# Quantities (Section Q; https://osipi.github.io/OSIPI_CAPLEX/quantities/) 
Items in this section represent variables that usually act as input or output to an analysis process, for example the longitudinal relaxation rate is a quantity. 

# Models (Section M; https://osipi.github.io/OSIPI_CAPLEX/perfusionModels/) 
Items in this section are mathematical formulae that relate quantities to one another, and are typically used to describe the functional behaviour of measured data. It is common fit these models to data using an optimiser, with parameters either free or fixed. Since the choice of parameters to fix or keep free during optimisation may vary, we specify only the model formula and quantities involved, leaving the user to specify which are free or fixed using the Model Parameters and Static Model Parameters quantities respectively. Since models often have multiple possible parameterisations (particularly true for kinetic models) and are sometimes nested, models are defined using a harmonised parameterisation such that models can be easily compared, and to improve consistency of reporting.

# Processes and Derived Process (Section P; https://osipi.github.io/OSIPI_CAPLEX/perfusionProcesses/ and section G; https://osipi.github.io/OSIPI_CAPLEX/generalPurposeProcesses/) 
Items in this section are operators that generate output quantities from given input quantities. They define semantically what is done, in a similar way to a function or routine name within a programming environment, but provide only high-level detail of the implementation. For example, Variable Flip Angle is a process that maps variable flip angle signal intensities to the longitudinal relaxation rate and equilibrium magnetisation. All the required inputs to this process (quantities, models, and other processes) are defined by the lexicon entry. This approach minimises the risk the user will fail to report all the relevant information. 

