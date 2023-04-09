import { Consultant } from "./Consultant";
import { InterviewDate } from "./InterviewDate";
import { Profile } from "./Profile";
import { Room } from "./Room";

export class Interview {
    private readonly _consultant: Consultant;
    private readonly _profile: Profile;
    private readonly _interviewDate: InterviewDate;
    private readonly _room: Room;

    constructor(recruiter: Consultant, candidate: Profile, interviewDate: InterviewDate, room: Room) {
        this._consultant = recruiter;
        this._profile = candidate;
        this._interviewDate = interviewDate;
        this._room = room;
    }

    public getConsultant(): Consultant {
        return this._consultant;
    }

    public getProfile(): Profile {
        return this._profile;
    }

    public getInterviewDate(): InterviewDate {
        return this._interviewDate;
    }

    public getRoom(): Room {
        return this._room;
    }
}
