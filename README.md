# belly-button-challenge
The Belly Button Biodiversity Collection, a fascinating database cataloging the microorganisms that fill human navels, is the focus of this study. Notably, this dataset revealed that a limited number of microbial species (known as operational taxonomic units, or OTUs) inhabit more than 70% of individuals, whereas the rest are uncommon.

This repository, labeled "belly-button-challenge," was specifically designed for this purpose. The repository's contents were cloned from the Module 14 Challenge's StarterCode folder, which contains the files index.html, samples.json, and a static directory. While the samples.json file is given for reference, the real data for the project is read from a remote URL.

To read in samples, the project makes use of the D3 library.json data from https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json.

This project's dashboard offers numerous interactive visualizations:

A horizontal bar chart with a dropdown menu displaying the top ten OTUs detected in a specific individual. The sample_values serve as the chart's values, the otu_ids act as labels, and the otu_labels serve as the chart's hovertext.

Each sample is represented by a bubble chart. The x-values are represented by otu_ids, the y-values and the marker size by sample_values, the marker colors by otu_ids, and the text values by otu_labels.

A example metadata display, essentially an individual's demographic information. The page displays each key-value pair from the metadata JSON object.

When a new sample is selected from the dropdown menu, all visualizations on the dashboard are dynamically updated.

The finished application is published on GitHub Pages. The repository has frequent commits that track the project's development and contains this detailed README.md file. Please refer to the provided project files for complete instructions, dataset details, and individual code implementations.
