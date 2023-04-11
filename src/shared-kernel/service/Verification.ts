import { Candidate } from "../model";

export interface Verification {
    checkCandidate: (candidate: Candidate) => void | never;
    checkInterviewDate: (interviewDate: Date) => void | never;
}
