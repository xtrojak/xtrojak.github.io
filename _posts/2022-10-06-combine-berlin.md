---
layout: page
permalink: /travelling/berlin-germany-2022
title: COMBINE 2022, Berlin, Germany
---

After 5 years break, I participated again a [COMBINE workshop](https://combine-org.github.io/author/combine-2022/) held by [Computational Modeling in Biology Network](http://co.mbine.org/) in [Humboldt University of Berlin](https://www.hu-berlin.de/en). I had a [poster presentation](/files/posters/combine2022.pdf) about _Representing Biochemical Space Language in SBML-multi standard_. The general goal was to learn more about SBML-multi standard and issues related to relating our language to this standard.

![logo](/images/germany-2022/COMBINE2022_logo.png)

The workshop (6. - 8.10.2022)
-----------------------------

COMBINE workshop had two days of breakouts and tutorials, followed by half day of Forum. During the first part, there were usually several sessions running in parallel. In the following, I describe the most significant sessions for me. Where needed, I also provide more background.

#### SED-ML

SED-ML encodes in a computer-readable exchange format the information required by MIASE (Minimum Information About a Simulation Experiment) to enable the reproduction of simulation experiments. It has been developed as a community project, and it is defined in a detailed technical specification and additionally provides an XML schema.

SED-ML covers the description of the most frequent type of simulation experiments in the area, namely time course simulations. SED-ML documents specify

*   which experimental data to use in an experiment,
*   which models to use in an experiment,
*   modifications to apply on the models before using them,
*   which simulation procedures to run on each model,
*   what analysis results to output,
*   and how the results should be presented.

Now there is a new version (level 2) in development, and Lucian Smith presented his proposal on how it could look like. He started with requirements collected over there years by the community and issues with the current version. His solution is based on the "script" concept, opposing the current declarative approach. Along with standard simulation experiments, it would be possible to write custom functions and scripts specifying particular analysis steps. A very important fact is that this extends SED-ML beyond simulation and can also be employed for other types of analysis. A significant drawback is that it can lead to fewer uniform specifications where scripts are misused.

Relevance to Sybila - a few years back, we were considering employing SED-ML for the specification of analysis setup for the CMP platform. However, it wasn't suitable due to insufficient universality. With level 2, it might be reconsidered in the case of further development.

![university](/images/germany-2022/university.jpg)

#### BioSimulations

David Nickerson described the platform [BioSimulations](https://biosimulations.org/). Its purpose is to store and easily share reproducible simulations and plots of biological models. This is definitely related work for CMP and can be used for inspiration.

#### Antimony in VSCode

Antimony is designed to interconvert between the SBML standard as a shorthand form that allows editing without the structure and overhead of working with XML directly. To attract more users, an extension to VSCode was developed. The developers presented this extension in a demo. They also implemented a semi-automatic annotation recommeder that can search biological databases and recommend the biological meaning to species and reactions in the model. A life preview of the respective SBML can be displayed, so the user can immediately see the SBML counterpart of the Antimony model.

#### Similarity search

A session led by Lukrécia Mertová on Similarity Computation of Small Molecule Names was in a small room with just several participants.. Lukrécia was a student in Sybila, and her master's thesis was on this topic. Now she continues with it in Heidelberg for her PhD, so it was particularly interesting for me to see the progress she made.

#### SBGN

SBGN (Systems Biology Graphical Notation) is a project trying to standardise the graphical notation used in maps of biological processes. The dedicated session was quite general, discussing updates and future steps of the project. There is no current development of the standard itself (for now, they are not planning to go beyond SBML-core). The developers are more focused on applying SBGN in practice and bringing it to the attention of potential users (one of the most relevant projects in recent years in [COVID map](https://covid19map.elixir-luxembourg.org/minerva/)). While SBGN dictates how glyphs should look and SBGN-ML specifies components of a whole network, an interpreter engine is still needed to render the picture. For that, [syblars](http://syblars.herokuapp.com/) and [newt](http://newteditor.org/) are examples of existing web-based solutions.

![lecture_hall](/images/germany-2022/lecture_hall.jpg)

#### Forum

Highlights from the Forum (the last half day) are an effort to escape the high publication fees by a journal in a community-driven project [Peer Community In](https://peercommunityin.org/). Nicole Radde, in her invited talk, presented her work "Bayesian hypothesis testing reveals that reproducible models in Systems Biology get more citations" (preprint available [here](https://www.researchsquare.com/article/rs-2132474/v1)). They analysed citations of papers containing reproducible (i.e. they actually contain a working file) vs. non-reproducible models. Based on their analysis, a properly reproducible work is more likely to be cited, and this has significantly increased in the last decade.

#### Rule-based modelling

Last but not least, here is a short summary of the news from the rule-based world. These were collected from talks, poster presentations and random discussions with authors of other rule-based languages, especially of SBML-multi package, an extension of SBML to support rule-based features.

In Sybila, we develop BioChemical Space language (BCSL) with rule-based features. To comply with SBML-multi, we decided to implement support for exporting models in this standard. The problem appeared when we weren't able to find any tool that could import an SBML file with multi package. At COMBINE, I learned that [Simmune](https://www.niaid.nih.gov/research/simmune-project) should be theoretically able to do it, but in practice, it doesn't really work. So there is no way forward for us for now. Talking about Simmune, Fengkai Zhang presented recent work on the analysis of parameter space using a statistical approach (based on simulations).

Finally, in BioNetGen, developers currently focus on usability by users. In particular, similarly to Antimony, they also implemented a VSCode extension and created a [Python wrapper](https://bionetgen.readthedocs.io/en/latest/pybng.html).