import { InterviewDate } from "./InterviewDate";
import { Validator } from "./Validator";

export class InterviewDateValidator extends Validator<InterviewDate> {
    // @ts-ignore
    check(interviewDate: InterviewDate): void {
        this.verifier.checkInterviewDate(interviewDate.getInterviewDate());
    }
}
