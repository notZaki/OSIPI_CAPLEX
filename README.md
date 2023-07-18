# The contrast-agent based perfusion lexicon (CAPLEX)  [![DOI](https://zenodo.org/badge/498446550.svg)](https://zenodo.org/badge/latestdoi/498446550)

## Overview 

The ISMRM Open Science Initiative for Perfusion Imaging (OSIPI) aims to promote the sharing of perfusion imaging software in order to reduce duplication, improve reproducibility and speed up translation. This repository contains the github pages content for the lastest version of the contrast agent based perfusion lexicon. 

The lexicon was developed and maintained by Taskforce 4.2 of OSIPI and aims to define standadised terminology and definitions for commonly used quantities, models, and processes used in DCE-MRI and DSC-MRI analyses. 

The lexicon is hosted as a github page website (osipi.github.io/OSIPI_CAPLEX/). 

## Repository contents
The repo is in development but currently contains:

1. the "editable" markdown (.md) files that define the webpage content (in the **/docs** directory).
2. the "non-editable" backend for the CAPLEX webpage generated when .md files on main are deployed (found on the **gh-pages** branch)
3. XML schema files (under development!!!) and examples for lexicon-linked algorithmic encoding (in the **/Algorithmic-encoding** directory)

## Contributing to the lexicon
The lexicon is designed to the extensible and we actively engage researchers in the DCE/DSC MRI field to engage with its usage and development. If you would like to add or edit content (new entries etc.) of the lexicon, please either:
1. contact the task force leads (currently Ben Dickie (ben.dickie@manchester.ac.uk) or Rianne Van der Heijden (rvanderheijd@wisc.edu) with your proposed changes. These will be reviewed at the next Task Force meeting (usually monthly).
2. OR create a development branch of main and edit the .md files directly. Once done, submit a pull request (do not merge with main!), which will then be reviewed by the Task Force.     

## Deploying changes
After careful review, proposed changes to markdown files made on a development branch will be merged into the *main* branch. After the merge is approved, this will trigger a CI workflow to automatically generate the new docs and publish to the *gh-pages* branch, **which should not be edited manually**.

