import { InterviewDate } from "./InterviewDate";
import { Room } from "./Room";

export interface RoomRepository {
    book: (date: InterviewDate) => Room;
    cancel: (spaceId: string) => void;
}
