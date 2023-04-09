import { ConsultantRepository, Interview, InterviewDate, Profile, RoomRepository } from "../model";

export class PlanInterview {
    public readonly _consultants: ConsultantRepository;
    public readonly _rooms: RoomRepository;

    constructor(recruiters: ConsultantRepository, rooms: RoomRepository) {
        this._consultants = recruiters;
        this._rooms = rooms;
    }

    public scheduleInterview(interviewDate: InterviewDate, profile: Profile): Interview | undefined {
        profile.checkProfile();
        interviewDate.checkInterviewDate();

        const consultants = this._consultants.findAll();
        const consultant = profile.findConsultant(interviewDate, consultants);
        if (consultant) {
            consultant.book(interviewDate);
            const bookedRoom = this._rooms.book(interviewDate);

            bookedRoom.checkRoom();

            return new Interview(consultant, profile, interviewDate, bookedRoom);
        }
    }
}
