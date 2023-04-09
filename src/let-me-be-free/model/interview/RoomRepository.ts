import { Space } from "../../../shared-kernel";
import { InterviewDate } from "./InterviewDate";

export interface RoomRepository {
    book: (date: InterviewDate) => Space;
    cancel: (spaceId: string) => void;
}
