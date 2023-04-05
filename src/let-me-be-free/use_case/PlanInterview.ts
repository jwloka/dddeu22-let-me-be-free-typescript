import { Candidate, Recruiter, Space } from "../../shared-kernel";
import { Interview, RecruiterRepository, RoomRepository } from "../model";

export class PlanInterview {
    public readonly _recruiters: RecruiterRepository;
    public readonly _rooms: RoomRepository;

    constructor(recruiters: RecruiterRepository, rooms: RoomRepository) {
        this._recruiters = recruiters;
        this._rooms = rooms;
    }

    public scheduleInterview(interviewDate: Date, candidate: Candidate) {
        this.checkCandidate(candidate);
        this.checkInterviewDate(interviewDate);

        const appropriateRecruiter = this.findAnAppropriateRecruiter(interviewDate, candidate);
        this.bookRecruiter(interviewDate, appropriateRecruiter);
        const bookedRoom = this._rooms.book(interviewDate);
        this.checkRoom(bookedRoom);

        return new Interview(appropriateRecruiter, candidate, interviewDate, bookedRoom);
    }

    private checkRoom(bookedRoom: Space) {
        if (!(bookedRoom._capacity >= 2) || !bookedRoom._equipments.every(equipment => ["PC", "Monitor"].indexOf(equipment) != -1)) {
            // it's too complicated ...
            // cancel the room and find another room ? What if the new room is not appropriate again ?
            // cancel the room and raise an exception ?
            // cancel the room and generate an online interview link ?
            // many questions to ask and all depends on a system on which we don't have a control
        }
    }

    private bookRecruiter(interviewDate: Date, appropriateRecruiter: Recruiter) {
        this._recruiters
            .findAll()
            .filter(recruiter => recruiter._id === appropriateRecruiter._id)
            .forEach(recruiter => recruiter._availabilities.splice(recruiter._availabilities.indexOf(interviewDate), 1));
    }

    private findAnAppropriateRecruiter(interviewDate: Date, candidate: Candidate): Recruiter {
        const appropriateRecruiters = this._recruiters
            .findAll()
            .filter(recruiter =>
                recruiter._availabilities.find(date => {
                    return date.getTime() == interviewDate.getTime();
                })
            )
            .filter(recruiter => candidate._skills.every(skill => recruiter._skills.indexOf(skill) != -1));

        if (appropriateRecruiters.length === 0) {
            throw "no recruiter is available";
        } else {
            return appropriateRecruiters[0];
        }
    }

    private checkInterviewDate(interviewDate: Date) {
        if (!interviewDate || interviewDate <= new Date()) {
            throw "interview date is missing";
        }
    }

    private checkCandidate(candidate: Candidate) {
        const candidateId = candidate._id;
        if (!candidateId) {
            throw "candidate id is missing";
        }
    }
}
