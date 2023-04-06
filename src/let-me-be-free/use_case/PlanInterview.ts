import { HRCandidate, Interview, InterviewDate, RecruiterRepository, Room, RoomRepository } from "../model";

export class PlanInterview {
    public readonly _recruiters: RecruiterRepository;
    public readonly _rooms: RoomRepository;

    constructor(recruiters: RecruiterRepository, rooms: RoomRepository) {
        this._recruiters = recruiters;
        this._rooms = rooms;
    }

    public scheduleInterview(interviewDate: InterviewDate, candidate: HRCandidate) {
        candidate.checkCandidate();
        interviewDate.checkInterviewDate();

        const hrRecruiters = this._recruiters.findAll();
        const recruiter = candidate.findRecruiter(interviewDate, hrRecruiters);
        // @ts-ignore
        recruiter.book(interviewDate);
        const bookedRoom = new Room(this._rooms.book(interviewDate));
        bookedRoom.checkRoom();

        // @ts-ignore
        return new Interview(recruiter, candidate, interviewDate, bookedRoom);
    }
}
