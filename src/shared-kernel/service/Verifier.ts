import { Candidate } from "../model";

export const checkCandidate = (candidate: Candidate) => {
    if (!candidate._id) {
        throw "Candidate is missing";
    }
};

export const checkInterviewDate = (interviewDate: Date) => {
    if (!interviewDate || interviewDate < new Date()) {
        throw "interview date os missing";
    }
};
