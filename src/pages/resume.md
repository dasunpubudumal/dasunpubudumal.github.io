---
layout: ../layouts/MarkdownPage.astro
title: Résumé
eyebrow: Résumé
heading: Dasun Pubudumal
description: "Résumé — Dasun Pubudumal, software engineer."
# Link to a downloadable file in /public. Delete this line to hide the button.
pdf: /resume.pdf
# Shown under the button; keep it current when you edit this file.
updated: "December 2024"
---

Software Engineer with 4 years of expertise in Java back-ends, looking to
contribute to team growth and expand my server-side backend knowledge in an
agile environment. A UK visa holder with full-time working rights.

- **Location:** Saffron Walden, UK
- **Email:** <pubudumald@gmail.com>
- **Links:** [LinkedIn](https://linkedin.com/in/dasun-pubudumal) · [GitHub](https://github.com/dasunpubudumal) · [Medium](https://medium.com/@dasunpubudumal)

## Technical skills

- **Languages:** Java, Python, JavaScript, SQL
- **Frameworks:** Spring Framework, Quarkus (with Jersey), Node.js, Angular, React
- **Databases:** DynamoDB, MySQL, MongoDB
- **Tools:** Maven, Docker, Git, Kubernetes, Elasticsearch, Kafka, IntelliJ IDEA, Postman
- **Platforms:** AWS, Linux, Web
- **Soft skills:** Writing, Reading, Leadership

## Experience

### Senior Software Developer — Wellcome Genome Campus

Part of the LIMS (Library Information Management System) team that develops and
maintains systems supporting supplementary library tasks by recording and
reporting the processes within sequencing pipelines.

- **Actively adding features to the existing LIMS system:** implemented
  stakeholder-requested use cases, including modifying existing sequencing
  pipelines. Most features were built with Ruby on Rails, with Python supporting
  some operations (e.g. barcode generation) and message passing. The system is
  fully open source.
- **Integrated an asynchronous workflow for data warehousing:** used message
  queues to publish data to a highly available data warehouse, so client threads
  don't block on sequencing pipelines and so we could lean on an externally
  managed message broker.
- **Engaged in large, complex sequence-processing research:** participated in the
  initiative to bring Rust into the ecosystem for sequencing operations, where
  the sequences are large strings that benefit from safe, lean memory use.
- **Assisted in producing open-source documentation for LIMS systems:**
  understood the core processes and produced fundamental documentation for
  stakeholder use.

### Senior Software Engineer — Unibench

Server-side development for an Australian payments organisation (a payment
gateway), following agile practices.

- **Designed and implemented REST web services on a serverless architecture:**
  built synchronous and asynchronous services with Spring, Quarkus and AWS,
  giving convenient, standardised, low-latency interfaces.
- **Strict test-driven development:** JUnit and Mockito as the primary tools;
  integrated Testcontainers with a `localstack` image for production-ready,
  integration-tested code. This cut the team's integration pipeline from ~3 days
  to 2.
- **Participated in decision-making:** helped design the integration of
  terminal-based merchants into the acquiring platform, increasing client scale
  by 10%.
- **Technical debugging and troubleshooting:** resolved issues reported by the
  support team and did the refactoring needed to refine the overall architecture.
- **Standardised documentation and cross-functional work:** used Confluence as a
  central documentation hub, formally recording design decisions made over Slack
  and elsewhere.

### Software Engineer → Senior Software Engineer — CodeGen International

Designed, implemented and maintained solutions for real-world problems in the
travel domain, and ran performance investigations for better throughput.

- **Used machine learning for B2B travel solutions:** applied record linkage to
  de-duplicate inventory for an API aggregator platform, cutting manual
  intervention by 50% and speeding up inventory mapping by ~80%.
- **Led maintenance and new features on the personalisation/recommendation
  engine:** introduced asynchronous jobs such as content processing, exposed an
  API for querying personalisation scores, and worked with other teams to
  integrate the engine into live systems.
- **Added caching layers:** used Elasticsearch as an integrated cache to speed up
  recommendations by 30%.
- **Established CI/CD practices:** built pipelines with Docker, GitLab and
  Kubernetes, improving build and development pipeline time by 10%.
- **Led a team of junior developers:** groomed backlogs, prioritised sprint
  milestones, ran feasibility studies and code reviews, and integrated the
  result into existing CodeGen systems to improve customer search.
- **Integrated new technologies through R&D:** proposed Fluentd for log
  aggregation and Consul for configuration management, and used aspect-oriented
  programming to improve code modularity and quality.
- **Performance testing:** used heap dumps and tools such as YourKit to study JVM
  heap behaviour; tracked down a troublesome `OutOfMemoryError` that was failing
  live systems and fixed the underlying configuration mismatch.
- **Outreach:** ran workshops for undergraduates on CI/CD and industry best
  practices.
- **Recruitment:** interviewed interns for the recommendation-platform team.
- **Publications:** published findings and abstract-level solutions in
  Travolution and Medium.

### Software Engineering Intern — DirectFN

- Worked with experienced senior engineers and established agile practices to
  help build a monitoring platform for the primary system.
- Built a system to persist incoming requests and outgoing responses in the OMS
  (Order Management System), with a UI to display them.

## Projects

### Multimodal Sensor Fusion for Mixed Reality Environments

- Developed an algorithm to fuse data from different sensory modalities.
- Experimented with text-recognition algorithms and their client libraries to
  integrate them with the fusion system.
- Used a Support Vector Machine (SVM) for text classification from phrases to
  labels.
- Published in IEEE MASS 2020.

### Project DevStats

- Profile analyser for HR management that displays statistics from the
  StackExchange, GitHub and Twitter APIs.
- Ran a cross-analysis (Node.js vs Spring) as a feasibility study; chose Spring
  for its richer tooling.
- Visualised each statistic with Chart.js, using a cloud-hosted MongoDB (mLab) as
  a cache database.

## Publications

- **Jointly Optimizing Sensing Pipelines for Multimodal Mixed Reality
  Interaction** — DOI: [10.1109/MASS50613.2020.00046](https://doi.org/10.1109/MASS50613.2020.00046)

## Education

- **University of Moratuwa** — B.Sc. in Engineering, Department of Computer
  Science and Engineering
- **Ananda College** — GCE Advanced Levels

## Leadership & extracurricular

### Director of IT — Rotaract Club of University of Moratuwa

- Project chair for Project Inspico, exposing undergraduates to industry through
  field visits; it has helped provide internships for 30+ undergraduates.
- Participated in community-service projects such as Hand in Hand (HiH), which
  raises and donates funds for 30+ cancer patients.
- Led the PR team for "Are You Ready?", providing career guidance for
  undergraduates.

### Director of IT — Rotaract Club of Alumni of University of Moratuwa

- Led the IT team managing the club website.
- Revamped the "Are You Ready?" career application platform for a more scalable
  approach to uploading résumés without UX issues.

## Hobbies & activities

- **Reading** — Science, History, Business (non-fiction)
- **Writing** — Science, Personal Experience (published on Medium)
