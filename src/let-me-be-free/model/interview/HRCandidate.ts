import { Candidate } from "../../../shared-kernel";
import { HRRecruiter } from "./HRRecruiter";
import { InterviewDate } from "./InterviewDate";

export class HRCandidate {
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

    public checkCandidate(): void | never {
        const candidateId = this._candidate._id;
        if (!candidateId) {
            throw "candidate id is missing";
        }
    }

    public findRecruiter(interviewDate: InterviewDate, hrRecruiters: HRRecruiter[]): HRRecruiter | never {
        const foundRecruiter = hrRecruiters.filter(cur => cur.isAvailable(interviewDate) && cur.canTest(this));

        if (foundRecruiter.length <= 0) {
            throw "no recruiter is available";
        } else {
            return foundRecruiter[0];
        }
    }
}
