import { Candidate, Recruiter } from "../../shared-kernel";
import { FakeRecruiterRepository, FakeRoomRepository, RecruiterRepository } from "../model";
import { PlanInterview } from "./PlanInterview";

const FUTURE_DATE_3 = new Date(new Date().setHours(0, 0, 0, 0) + 3 * (3600 * 1000 * 24));

describe("PlanInterview", () => {
    const CANDIDATE_ID = "fake_id";
    let humanResource: PlanInterview;
    let recruiters: RecruiterRepository;

    beforeEach(() => {
        recruiters = new FakeRecruiterRepository();
        const rooms = new FakeRoomRepository();
        humanResource = new PlanInterview(recruiters, rooms);
    });

    it("should not schedule an interview for a candidate without identifier", () => {
        const interviewDate = FUTURE_DATE_3;
        const candidateWithoutId = new Candidate(
            "",
            "",
            "",
            <Date>{},
            <number>{},
            [],
            "",
            "",
            <Recruiter>{},
            "",
            false,
            "",
            new Map<string, object>()
        );

        expect(() => {
            humanResource.scheduleInterview(interviewDate, candidateWithoutId);
        }).toThrow("candidate id is missing");
    });

    it("should not schedule an interview when interview date is missing", () => {
        expect(() => {
            // @ts-expect-error null is an invalid input
            humanResource.scheduleInterview(null, getJavaCandidate());
        }).toThrow("interview date is missing");
    });

    it("should not schedule an interview when interview date is passed", () => {
        expect(() => {
            const passedDate = new Date(2000, 12, 19);

            humanResource.scheduleInterview(passedDate, getJavaCandidate());
        }).toThrow("interview date is missing");
    });

    it("should not schedule an interview with no recruiter is available for the interview", () => {
        expect(() => {
            const interviewDate = new Date(2030, 1, 1);

            humanResource.scheduleInterview(interviewDate, getJavaCandidate());
        }).toThrow("no recruiter is available");
    });

    it("should plan an interview with the first recruiter who is available for the interview and can test the candidate", () => {
        const interviewDate = FUTURE_DATE_3;

        const interview = humanResource.scheduleInterview(interviewDate, getJavaCandidate());

        expect(interview._recruiter._id).toBe("101");
        expect(interview._recruiter._name).toBe("Steve");
        expect(interview._recruiter._firstName).toBe("Emma");
        expect(interview._candidate._id).toBe(CANDIDATE_ID);
        expect(interview._interviewDate).toBe(interviewDate);
        expect(interview._room._address).toBe("Room 2.1");
        expect(isRecruiterBookedFor(interviewDate)).toBeTruthy();
    });

    const isRecruiterBookedFor = (interviewDate: Date): boolean =>
        recruiters
            .findAll()
            .filter(r => r._id === "101")
            .flatMap(r => r._availabilities)
            .indexOf(interviewDate) == -1;

    const getJavaCandidate = (): Candidate =>
        new Candidate(CANDIDATE_ID, "", "", <Date>{}, <number>{}, ["Java"], "", "", <Recruiter>{}, "", false, "", new Map<string, object>());
});
