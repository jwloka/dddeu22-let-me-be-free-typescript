import { Candidate } from "../../../shared-kernel";
import { Consultant } from "./Consultant";
import { InterviewDate } from "./InterviewDate";

export class Profile {
    private readonly _candidate: Candidate;

    constructor(candidate: Candidate) {
        this._candidate = candidate;
    }

    public getId(): string {
        return this._candidate._id;
    }

    public getSkills(): string[] {
        return this._candidate._skills;
    }

    public findConsultant(interviewDate: InterviewDate, consultants: Consultant[]): Consultant | never {
        const foundConsultant = consultants
            .filter(consultant => consultant.isAvailable(interviewDate))
            .filter(consultant => consultant.canTest(this));

        if (foundConsultant.length <= 0) {
            throw "no consultant is available";
        } else {
            return foundConsultant[0];
        }
    }

    public toCandidate(): Candidate {
        return this._candidate;
    }
}
