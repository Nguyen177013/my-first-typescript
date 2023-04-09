import Invoice from "./classes/Invoice.js";
import Payment from "./classes/Payment.js";
import ListFinance from "./classes/ListFinance.js";
const form = document.querySelector('form');
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const ul = document.querySelector("ul");
    const list = new ListFinance(ul);
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value);
});
