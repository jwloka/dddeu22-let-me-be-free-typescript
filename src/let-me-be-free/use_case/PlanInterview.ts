import { HRCandidate, Interview, InterviewDate, RecruiterRepository, Room, RoomRepository } from "../model";

export class PlanInterview {
    public readonly _recruiters: RecruiterRepository;
    public readonly _rooms: RoomRepository;

    constructor(recruiters: RecruiterRepository, rooms: RoomRepository) {
        this._recruiters = recruiters;
        this._rooms = rooms;
    }

    public scheduleInterview(interviewDate: InterviewDate, candidate: HRCandidate): Interview | undefined {
        candidate.checkCandidate();
        interviewDate.checkDate();

        const hrRecruiters = this._recruiters.findAll();
        const recruiter = candidate.findRecruiter(interviewDate, hrRecruiters);

        if (recruiter) {
            recruiter.book(interviewDate);
            const bookedRoom = new Room(this._rooms.book(interviewDate));
            bookedRoom.checkRoom();

            return new Interview(recruiter, candidate, interviewDate, bookedRoom);
        }
    }
}
