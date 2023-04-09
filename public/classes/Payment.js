export default class Payment {
    recipient;
    detail;
    amount;
    constructor(recipient, detail, amount) {
        this.recipient = recipient;
        this.detail = detail;
        this.amount = amount;
    }
    format() {
        return `${this.recipient} is owed $${this.amount} for ${this.detail}`;
    }
}
