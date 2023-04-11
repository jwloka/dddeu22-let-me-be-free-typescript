export class InterviewDate {
    private readonly _date: Date;

    constructor(date: Date) {
        this._date = date;
    }

    public getDate(): Date {
        return this._date;
    }

    public equals(other: InterviewDate): boolean {
        return other._date.getTime() == this._date.getTime();
    }
}
