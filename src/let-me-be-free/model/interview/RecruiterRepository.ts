import { Recruiter } from "../../../shared-kernel";

export interface RecruiterRepository {
    findAll: () => Recruiter[];
}
