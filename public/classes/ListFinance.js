export default class ListFinance {
    ul;
    constructor(ul) {
        this.ul = ul;
    }
    render(item, header) {
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
