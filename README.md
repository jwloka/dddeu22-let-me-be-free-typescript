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

## Step 0

1. Take your time to learn the Domain with your group.
2. Note problems that you recognize in code and share them to each other.
3. What would you like this code to look like?
