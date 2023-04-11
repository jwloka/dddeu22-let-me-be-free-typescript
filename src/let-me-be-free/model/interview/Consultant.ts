import { Recruiter } from "../../../shared-kernel";
import { InterviewDate } from "./InterviewDate";
import { Profile } from "./Profile";

export class Consultant {
    private readonly _consultant: Recruiter;

    constructor(recruiter: Recruiter) {
        this._consultant = recruiter;
    }

    public isAvailable(interviewDate: InterviewDate): boolean {
        return this._consultant._availabilities.filter(date => new InterviewDate(date).equals(interviewDate)).length > 0;
    }

    public canTest(profile: Profile): boolean {
        return profile.getSkills().every(skill => this._consultant._skills.indexOf(skill) != -1);
    }

    public book(interviewDate: InterviewDate): void {
        const index = this._consultant._availabilities.indexOf(interviewDate.getDate(), 0);
        if (index > -1) {
            this._consultant._availabilities.splice(index, 1);
        }
    }

    public getAvailabilities(): InterviewDate[] {
        return this._consultant._availabilities.map(date => new InterviewDate(date));
    }

    public getSkills(): string[] {
        return this._consultant._skills;
    }

    public getId(): string {
        return this._consultant._id;
    }

    public getName(): string {
        return this._consultant._name;
    }

    public getFirstName(): string {
        return this._consultant._firstName;
    }
}
