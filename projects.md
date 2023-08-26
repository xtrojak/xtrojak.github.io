---
layout: page
title: Projects
---

TREC
----

<div style="display: flex; align-items: center;">
    <p style="margin-right: 20px;"><a href="https://www.embl.org/about/info/trec/">TREC</a> (Traversing European Coastlines) is a project to explore the biodiversity and molecular adaptability of microbial communities along the European coastlines. It is driven by the expertise and infrastructure of EMBL and multiple European partners. The goal is to observe, model, and understand the effects of changing environments on organisms and communities at several levels. This is achieved by sampling in parallel different habitats, such as soil, sediment, and shallow and deep water. Follow the expedition on <a href="https://twitter.com/EMBLtrec">Twitter</a>!</p>
    <img src="https://www.embl.org/about/info/trec/wp-content/uploads/2023/03/20230329_TREC-map-for-web_v2.jpg" alt="Image" style="width: 30%; min-width: 200px; margin-right: 10px;">
</div>

Comprehensive Modelling Platform
--------------------------------

_Comprehensive Modelling Platform_ is a general framework for public sharing, annotation, and visualisation of domain-specific biological models. For a selected system (e.g. an organism), the framework is instantiated as a web-based application which allows capturing several aspects of biological models represented as biochemical reaction networks or ordinary differential equations. The key feature of the instantiation for a given system relies on mapping kinetic models to Biochemical Space. Besides the model repository, the platform includes an experiments repository and relevant numbers, which improve the experimental verification of the models. There are two instances of the platform: [e-photosynthesis.org](http://www.e-photosynthesis.org/), which provides modelling of photosynthetic processes, and [e-cyanobacterium.org](https://www.e-cyanobacterium.org/) which is dedicated to processes related to cyanobacteria.

Biochemical Space
-----------------

_Biochemical Space_ is developed as a part of the Comprehensive Modelling Platform. In the context of the platform, Biochemical Space glues together complicated quantitative models with an easy-to-understand yet formal and compact qualitative description. It allows for specifying formal and well-annotated reaction networks of chemical entities and elemental reactions onto which the mathematical models are projected. Biochemical Space is supported by a _Biochemical Space Language_ that provides a mechanistic rule-based description that is understandable by biologists, compact in size, and executable in terms of allowing basic analysis tasks ensuring consistency of the description.

eBCSgen
-------

[eBCSgen](https://github.com/sybila/eBCSgen) is a tool with the goal of providing an environment suitable for editing and maintenance of the BCSL models and providing functionality to analyse the models. The tool is developed in Python language as open-source desktop software under MIT license. The source code and the tutorial for usage are available on GitHub. The package is deployed in a series of Galaxy tools, with its current stable version is available online on [Biodivine Galaxy instance](https://biodivine-vm.fi.muni.cz/galaxy).

Galaxy project
--------------

[Galaxy project](https://galaxyproject.org/) is a framework to provide user-friendly access to scientific tools and a graphical user interface. The tools can also be provided as packages and containers using Bioconda and Biocontainers. All developments are open-source and open to contributions on GitHub. My contributions are primarily in developing Galaxy tools, namely [Sybila tools](https://github.com/sybila/galaxytools) and [mass spec tools](https://github.com/RECETOX/galaxytools) dedicated to the processing of high-resolution mass spectrometry data, as well as visualisations within Galaxy.

BioArInEO
---------

Artificial Intelligence Enabled Optimizer for BioSystems (BioArInEO) is a semi-automatic software tool for the identification of conditions which optimize the given goal using artificial intelligence. The general idea is to avoid the tedious and resource-consuming manual design of experiments but rather automatize the process and let decision-making to an AI by finding patterns in the space of admissible conditions. To increase the coverability of the approach, the work is distributed to multiple nodes, each assigned particular conditions to be tested. We demonstrate this method using bioreactors, as they provide a stable environment for both monitoring and control of the system. [DeviceControl](https://github.com/SmartBioTech/DeviceControl) tool was developed with the purpose to automate the control and measurement tasks in specific cultivation devices.

![Systems biology](/images/systems-biology.png)

Leisure time projects
=====================

TonesVisual
-----------

[TonesVisual](https://github.com/xtrojak/TonesVisual) is a script for the visualisation of given tones on the guitar and the violin neck. It works by a simple command line interface, which allows the user to specify tones he would like to visualise and then an SVG image is produced depicting the guitar/violin neck.

GuitarTabs
----------

[GuitarTabs](/https://github.com/xtrojak/GuitarTabs) is a web-based tool for guitar tabs visualisation. A simple graphical user interface allows the user to enter the tabs in a simple language (designed for this purpose and formally defined by grammar). This way, the entering of the tabs is independent of any graphical tools, which often leads to many mistakes but is based purely on text input. <a href="/tracks">Library of example tracks</a>