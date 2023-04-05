import { Recruiter, Space } from "../../../shared-kernel";
import { RoomRepository } from "./RoomRepository";

export class FakeRoomRepository implements RoomRepository {
    book(interviewDate: Date): Space {
        return new Space(
            "",
            "",
            "Paris",
            5,
            "Room 2.1",
            ["PC", "Monitor"],
            "John Doe & HR",
            [new Date(2022, 12, 22), new Date(2022, 12, 20)],
            <Recruiter>{},
            new Map<string, object>([["Recruiter", new Map<Date, string>([[new Date(2022, 12, 22), "Steve Jones"]])]])
        );
    }

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    cancel(spaceId: string): void {}
}
