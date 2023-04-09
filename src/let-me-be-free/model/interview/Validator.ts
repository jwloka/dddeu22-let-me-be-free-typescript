import { Verifier } from "../../../shared-kernel";

export abstract class Validator<T> {
    protected verifier = new Verifier();

    abstract check(t: T): void;
}
