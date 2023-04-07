import { Verifier } from "../../../shared-kernel";

export abstract class Validator<T> {
    abstract check: (t: T) => void;

    protected verifier = new Verifier();
}
