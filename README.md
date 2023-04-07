# TODOs

## Domain

The key use case of the domain can be described as follows:

> As a Human Resource
> I want to find an available Recruiter
> According to my Candidate Availabilities
> “Who can test”* my Candidate.

Who can test: The Recruiter should cover all Candidate’s skills.

## Ubiquitous Language

- **Consultant**: A technical member of the company that should match the Profile of a Candidate
- **Profile**: Resume of the Candidate
- **Interview Date**: The day where Consultant & Candidate meet each other to do the evaluation
- **Candidate**: Someone who applied to passe the interview process
- **Interview**: A structured conversation where one participant asks questions, and the other provides answers
- **Room**: A place where the Interview will take place
- **Human Resource**: A member of HR department who will be in charged to organize the Interview

## Requirements

The business application helps HR to manage interviews. Interviews are scheduled for candidates.
For every scheduled interview HR needs to find a matching recruiter and to book an available room.

Our key use case, we're going to work on is to schedule an interview for a candidate.

The initial set of requirements for this use case are:

1. the application should find a Consultant who is available for the Interview Date
2. the Consultant should be more experienced than the Profile for which we need to schedule an interview
3. the Consultant should cover all skills mentioned in the Profile
4. if many Consultants can test with the Profile, the System will choose the first one
5. the application should also find an available Room for the Interview Date

## Resume of Step 3

We learned how we can create an **Open-Host Service (OHS)** in an Upstream system.
We also talked about the **Published Language**, and we recognized how it can impact our system.

## Step 4

Now let's look at `checkRoom()` method in class `Room`.

1. What strategy do you propose to resolve the problems we mention in the comments?
2. Discuss them with your colleagues and share your solutions with other groups...
