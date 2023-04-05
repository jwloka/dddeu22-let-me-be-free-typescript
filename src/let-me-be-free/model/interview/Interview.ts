import { Candidate, Recruiter, Space } from "../../../shared-kernel";

export class Interview {
    public readonly _recruiter: Recruiter;
    public readonly _candidate: Candidate;
    public readonly _interviewDate: Date;
    public readonly _room: Space;

    constructor(recruiter: Recruiter, candidate: Candidate, interviewDate: Date, room: Space) {
        this._recruiter = recruiter;
        this._candidate = candidate;
        this._interviewDate = interviewDate;
        this._room = room;
    }
}
