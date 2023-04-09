import { Verification } from "./Verification";
import { Candidate } from "../model";

export class Verifier implements Verification {
    checkCandidate(candidate: Candidate): void | never {
        const id = candidate._id;
        if (!id) {
            throw "candidate id is missing";
        }
    }

    checkInterviewDate(interviewDate: Date): void | never {
        if (!interviewDate || interviewDate <= new Date()) {
            throw "interview date is missing";
        }
    }
}
