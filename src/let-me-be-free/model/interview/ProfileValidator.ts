import { Validator } from "./Validator";
import { Profile } from "./Profile";

export class ProfileValidator extends Validator<Profile> {
    check(profile: Profile): void {
        try {
            this.verifier.checkCandidate(profile.toCandidate());
        } catch (err) {
            throw "profile id is missing";
        }
    }
}
