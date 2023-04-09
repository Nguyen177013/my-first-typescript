import Invoice from "./classes/Invoice.js";
import Payment from "./classes/Payment.js";
import ListFinance from "./classes/ListFinance";
import HasFormatter from "./interfaces/HasFormatter";
const form = document.querySelector('form')!;
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details")as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit",(e:SubmitEvent)=>{
    e.preventDefault();
    let doc:HasFormatter;
    if(type.value === "invoice"){
        doc = new Invoice(tofrom.value,details.value, amount.valueAsNumber);
    }
    else{
        doc = new Payment(tofrom.value,details.value, amount.valueAsNumber); 
    }
    console.log(doc);
    
})