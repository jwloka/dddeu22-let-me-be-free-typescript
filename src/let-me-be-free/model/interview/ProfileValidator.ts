import { Profile } from "./Profile";
import { Validator } from "./Validator";

export class ProfileValidator extends Validator<Profile> {
    // @ts-ignore
    check(profile: Profile): void {
        try {
            this.verifier.checkCandidate(profile.toCandidate());
        } catch (e) {
            throw "profile id is missing";
        }
    }
}
