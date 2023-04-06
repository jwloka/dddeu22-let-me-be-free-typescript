import { Candidate, Recruiter } from "../../../shared-kernel";
import { HRRecruiter } from "./HRRecruiter";
import { RecruiterRepository } from "./RecruiterRepository";

export class FakeRecruiterRepository implements RecruiterRepository {
    public readonly _recruiters: Recruiter[];

    constructor() {
        this._recruiters = [
            new Recruiter(
                "123",
                "Doe",
                "John",
                new Date(1987, 5, 11),
                5,
                ["Java"],
                "",
                [new Date(2022, 12, 22), new Date(2022, 12, 20)],
                [
                    new Candidate(
                        "951",
                        "Lucas",
                        "Lilly",
                        new Date(1990, 7, 4),
                        <number>{},
                        [".Net", "Python", "JS"],
                        "Speaker",
                        "C:\\Users\\sepeh\\Dropbox\\RIB",
                        <Recruiter>{},
                        "LinkedIn",
                        true,
                        "Nicolas Moreno",
                        new Map<string, object>()
                    ),
                    new Candidate(
                        "753",
                        "Francois",
                        "Tanguy",
                        new Date(1956, 8, 29),
                        <number>{},
                        ["Java"],
                        "Social",
                        "C:\\Users\\CV\\all\\Cv",
                        <Recruiter>{},
                        "Indeed",
                        false,
                        "",
                        new Map<string, object>()
                    ),
                ],
                "AL47 2121 1009 0000 0002 3569 87411",
                47,
                "4 av. London, London",
                new Date(2012, 11, 10),
                "",
                56,
                new Map<string, object>()
            ),
            new Recruiter(
                "456",
                "Martin",
                "Bob",
                new Date(1995, 3, 3),
                <number>{},
                ["Java", "PHP"],
                "",
                [new Date(2022, 12, 21), new Date(2022, 12, 22)],
                [],
                "",
                <number>{},
                "Chapman 711-2880 Nulla St. Mankato Mississippi 96522",
                <Date>{},
                "",
                <number>{},
                new Map<string, object>()
            ),
            new Recruiter(
                "789",
                "Jones",
                "Sara",
                new Date(1987, 5, 11),
                2,
                ["PHP"],
                "",
                [new Date(2022, 12, 19)],
                [
                    new Candidate(
                        "654",
                        "Sandro",
                        "Paul",
                        new Date(1963, 5, 28),
                        <number>{},
                        ["JS"],
                        "Singer",
                        "C:\\Users\\CV\\Recruiter\\myCV",
                        <Recruiter>{},
                        "",
                        true,
                        "Fabrice Vu",
                        new Map<string, object>()
                    ),
                    new Candidate(
                        "963",
                        "Jim",
                        "Jones",
                        new Date(1980, 2, 29),
                        <number>{},
                        [".Net"],
                        "",
                        "",
                        <Recruiter>{},
                        "",
                        false,
                        "",
                        new Map<string, object>()
                    ),
                ],
                "AD1400080001001234567890",
                80,
                "4 av. London, London",
                new Date(2015, 12, 26),
                "",
                1,
                new Map<string, object>()
            ),
            new Recruiter(
                "101",
                "Steve",
                "Emma",
                <Date>{},
                <number>{},
                ["PHP", "Java"],
                "",
                [new Date(2022, 12, 19), new Date(2022, 12, 22)],
                [],
                "",
                <number>{},
                "",
                <Date>{},
                "",
                <number>{},
                new Map<string, object>()
            ),
        ];
    }

    findAll(): HRRecruiter[] {
        return this._recruiters.map(recruiter => new HRRecruiter(recruiter));
    }
}
