import { InterviewDate } from "./InterviewDate";
import { Validator } from "./Validator";

export class InterviewDateValidator extends Validator<InterviewDate> {
    check(interviewDate: InterviewDate): void {
        this.verifier.checkInterviewDate(interviewDate.getDate());
    }
}
