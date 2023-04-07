import { ConsultantRepository, Interview, InterviewDate, InterviewDateValidator, Profile, ProfileValidator, RoomRepository } from "../model";

export class PlanInterview {
    public readonly _consultants: ConsultantRepository;
    public readonly _rooms: RoomRepository;

    constructor(recruiters: ConsultantRepository, rooms: RoomRepository) {
        this._consultants = recruiters;
        this._rooms = rooms;
    }

    public scheduleInterview(interviewDate: InterviewDate, profile: Profile) {
        const profileValidator = new ProfileValidator();
        profileValidator.check(profile);
        const interviewDateValidator = new InterviewDateValidator();
        interviewDateValidator.check(interviewDate);

        const consultants = this._consultants.findAll();
        const consultant = profile.findConsultant(interviewDate, consultants);
        // @ts-ignore
        consultant.book(interviewDate);
        const bookedRoom = this._rooms.book(interviewDate);

        bookedRoom.checkRoom();

        // @ts-ignore
        return new Interview(consultant, profile, interviewDate, bookedRoom);
    }
}
