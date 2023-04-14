import { Profile } from "./Profile";
import { Validator } from "./Validator";

export class ProfileValidator extends Validator<Profile> {
    check(profile: Profile): void {
        try {
            this.verifier.checkCandidate(profile.toCandidate());
        } catch (err) {
            throw "profile id is missing";
        }
    }
}
