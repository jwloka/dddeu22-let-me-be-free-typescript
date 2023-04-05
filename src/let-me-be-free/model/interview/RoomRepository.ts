import { Space } from "../../../shared-kernel";

export interface RoomRepository {
    book: (interviewDate: Date) => Space;
    cancel: (spaceId: string) => void;
}
