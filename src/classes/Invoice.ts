import HasFormatter from "../interfaces/HasFormatter";

export default class Invoice implements HasFormatter {
    constructor(
        readonly client:string,
        private detail: string,
        public amount:number
    ){}
    format(): string {
        return `${this.client} owes $${this.amount} for ${this.detail}`;
    }
}