import { Recruiter } from "../../../shared-kernel";
import { InterviewDate } from "./InterviewDate";
import { Profile } from "./Profile";

export class Consultant {
    private readonly _recruiter: Recruiter;

    constructor(recruiter: Recruiter) {
        this._recruiter = recruiter;
    }

    public isAvailable(interviewDate: InterviewDate): boolean {
        return this._recruiter._availabilities.filter(date => new InterviewDate(date).equals(interviewDate)).length > 0;
    }

    public canTest(profile: Profile): boolean {
        return profile.getSkills().every(skill => this._recruiter._skills.indexOf(skill) != -1);
    }

    public book(interviewDate: InterviewDate): void {
        const index = this._recruiter._availabilities.indexOf(interviewDate.getDate(), 0);
        if (index > -1) {
            this._recruiter._availabilities.splice(index, 1);
        }
    }

    public getAvailabilities(): InterviewDate[] {
        return this._recruiter._availabilities.map(date => new InterviewDate(date));
    }

    public getSkills(): string[] {
        return this._recruiter._skills;
    }

    public getId(): string {
        return this._recruiter._id;
    }

    public getName(): string {
        return this._recruiter._name;
    }

    public getFirstName(): string {
        return this._recruiter._firstName;
    }
}
