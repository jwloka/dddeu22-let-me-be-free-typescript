import { Recruiter, Space } from "../../../shared-kernel";
import { InterviewDate } from "./InterviewDate";
import { Room } from "./Room";
import { RoomRepository } from "./RoomRepository";

export class FakeRoomRepository implements RoomRepository {
    private readonly FUTURE_DATE_1 = new Date(new Date().setHours(0, 0, 0, 0) + 3600 * 1000 * 24);
    private readonly FUTURE_DATE_2 = new Date(new Date().setHours(0, 0, 0, 0) + 2 * (3600 * 1000 * 24));

    book(date: InterviewDate): Room {
        return new Room(
            new Space(
                "",
                "",
                "Paris",
                5,
                "Room 2.1",
                ["PC", "Monitor"],
                "John Doe & HR",
                [this.FUTURE_DATE_1, this.FUTURE_DATE_2],
                <Recruiter>{},
                new Map<string, object>([["Recruiter", new Map<Date, string>([[this.FUTURE_DATE_1, "Steve Jones"]])]])
            )
        );
    }

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    cancel(spaceId: string): void {}
}
