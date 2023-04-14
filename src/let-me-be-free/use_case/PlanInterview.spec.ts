import { Candidate, Recruiter } from "../../shared-kernel";
import { ConsultantRepository, FakeConsultantRepository, FakeRoomRepository, InterviewDate, Profile } from "../model";
import { PlanInterview } from "./PlanInterview";

const FUTURE_DATE_3 = new Date(new Date().setHours(0, 0, 0, 0) + 3 * (3600 * 1000 * 24));

describe("PlanInterview", () => {
    const PROFILE_ID = "fake_id";
    let testObj: PlanInterview;
    let consultants: ConsultantRepository;
    beforeEach(() => {
        consultants = new FakeConsultantRepository();
        const rooms = new FakeRoomRepository();
        testObj = new PlanInterview(consultants, rooms);
    });

    it("should not schedule an interview for a candidate without identifier", () => {
        const interviewDate = new InterviewDate(FUTURE_DATE_3);
        const candidateWithoutId = new Profile(
            new Candidate("", "", "", <Date>{}, <number>{}, [], "", "", <Recruiter>{}, "", false, "", new Map<string, object>())
        );

        expect(() => {
            testObj.scheduleInterview(interviewDate, candidateWithoutId);
        }).toThrow("profile id is missing");
    });

    it("should not schedule an interview when interview date is passed", () => {
        expect(() => {
            const passedDate = new InterviewDate(new Date(2000, 12, 19));

            testObj.scheduleInterview(passedDate, getJavaCandidate());
        }).toThrow("interview date is missing");
    });

    it("should not schedule an interview with no consultant is available for the interview", () => {
        expect(() => {
            const interviewDate = new InterviewDate(new Date(2030, 1, 1));

            testObj.scheduleInterview(interviewDate, getJavaCandidate());
        }).toThrow("no consultant is available");
    });

    it("should plan interview with the first consultant who is available for the interview and can test the candidate", () => {
        const interviewDate = new InterviewDate(FUTURE_DATE_3);

        const interview = testObj.scheduleInterview(interviewDate, getJavaCandidate());

        expect(interview!.getConsultant().getId()).toBe("101");
        expect(interview!.getConsultant().getName()).toBe("Steve");
        expect(interview!.getConsultant().getFirstName()).toBe("Emma");
        expect(interview!.getProfile().getId()).toBe(PROFILE_ID);
        expect(interview!.getInterviewDate()).toBe(interviewDate);
        expect(interview!.getRoom().getAddress()).toBe("Room 2.1");
        expect(isRecruiterBookedFor(interviewDate)).toBeTruthy();
    });

    const isRecruiterBookedFor = (interviewDate: InterviewDate): boolean =>
        consultants
            .findAll()
            .filter(r => r.getId() === "101")
            .flatMap(r => r.getAvailabilities())
            .filter(availableDate => availableDate.equals(interviewDate)).length > 0;

    const getJavaCandidate = (): Profile =>
        new Profile(
            new Candidate(PROFILE_ID, "", "", <Date>{}, <number>{}, ["Java"], "", "", <Recruiter>{}, "", false, "", new Map<string, object>())
        );
});
