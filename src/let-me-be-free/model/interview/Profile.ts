import { Candidate } from "../../../shared-kernel";
import { Consultant } from "./Consultant";
import { InterviewDate } from "./InterviewDate";

export class Profile {
    private readonly _profile: Candidate;

    constructor(candidate: Candidate) {
        this._profile = candidate;
    }

    public getId(): string {
        return this._profile._id;
    }

    public getSkills(): string[] {
        return this._profile._skills;
    }

    public findConsultant(interviewDate: InterviewDate, consultants: Array<Consultant>): Consultant | never {
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
        return this._profile;
    }
}
