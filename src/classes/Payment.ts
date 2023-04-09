import HasFormatter from "../interfaces/HasFormatter";

export default class Payment implements HasFormatter {
    constructor(
        readonly recipient:string,
        private detail: string,
        public amount:number
    ){}
    format(): string {
        return `${this.recipient} is owed $${this.amount} for ${this.detail}`;
    }
}