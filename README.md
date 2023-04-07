# dddeu22-let-me-be-free-typescript

This Kata is initially made for a Workshop of Domain-Driven Design Europe (DDD Europe)
to explain Context Mapping Patterns used in Strategic Design of DDD.

These Patterns are :

- Shared Kernel
- Anti-Corruption Layer (ACL)
- Open-Host Service (OHS)
- Separate Ways
- Conformist
- Customer/Supplier

In this Kata we will focus on the first 3 patterns which are Shared Kernel, ACL and OHS.

## Pre-requisites

To do this Kata you need following tools :

- Your favorite IDE (mine is IntelliJ Idea)
- node, npm and yarn
- git

## How to run this Kata

- Clone this project somewhere in your machine `git clone git@github.com:ksouf/dddeu22-let-me-be-free-typescript.git`
- Build the project (`yarn install` then `yarn dist`): You should obtain PASS with successful tests
- Run tests `yarn watch:test` to ensure that you have green ones

## How to do this Kata

This Kata is split in 4 steps (branches `step-1`, `step-2`, `step-3` and `step-4`).
Most steps contain a solution on a branch named `step-x_solution` where x is the number of step.
You can read the `README.md` of each step starting with `step-0` and you can check the solution branch if needed.
If you don't have time to finish a step in appropriated time, don't worry, you can checkout the next step which
contains a possible solution.

## Domain

As a Human Resource
I want to find an available Recruiter
According to my Candidate Availabilities
“Who can test”* my Candidate.

Who can test: The Recruiter should cover all Candidate’s skills.

## Ubiquitous Language

- **Consultant**: A technical member of the company that should match the Profile of a Candidate
- **Profile**: Resume of the Candidate
- **Interview Date**: The day where Consultant & Candidate meet each other to do the evaluation
- **Candidate**: Someone who applied to passe the interview process
- **Interview**: A structured conversation where one participant asks questions, and the other provides answers
- **Room**: A place where the Interview will take place
- **Human Resource**: A member of HR department who will be in charged to organize the Interview
