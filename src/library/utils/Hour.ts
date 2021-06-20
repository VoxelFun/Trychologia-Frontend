
export class Hour {

    constructor(private minutes: number) {

    }

    static fromText(text: string) {
        const values = text.split(':').map(value => parseInt(value));
        return new Hour(values[0] * 60 + values[1]);
    }

    toMinutes() {
        return this.minutes;
    }

    toText() {
        const hour = Math.floor(this.minutes / 60);
        const minutes = this.minutes - hour * 60;
        return `${hour < 10 ? "0" + hour : hour}:${minutes < 10 ? minutes + "0" : minutes}`;
    }

}