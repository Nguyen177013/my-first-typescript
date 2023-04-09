export default class Invoice {
    client;
    detail;
    amount;
    constructor(client, detail, amount) {
        this.client = client;
        this.detail = detail;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes $${this.amount} for ${this.detail}`;
    }
}
