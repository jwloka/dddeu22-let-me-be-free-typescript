import { Candidate } from "../model";

export interface Verification {
    checkCandidate: (candidate: Candidate) => void;
    checkInterviewDate: (interviewDate: Date) => void;
}
