import HasFormatter from "../interfaces/HasFormatter.js";
export default class ListFinance{
    constructor(
        private ul:HTMLUListElement
    ){}
    render(item:HasFormatter, header:string){
        const li = document.createElement("li");
        const h4 = document.createElement("h4");
        h4.innerHTML = header;
        const p = document.createElement("p");
        p.innerHTML = item.format();
        li.append(h4);
        li.append(p);
        this.ul.appendChild(li);
    }
}