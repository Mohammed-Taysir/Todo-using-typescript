
import ListItem from "../models/ListItem";
import FullList from "../models/FullList";

interface IListTemplate {
    ul: HTMLUListElement,
    clear(): void
    render(fullList: FullList): void
}

export default class ListTemplate implements IListTemplate {
    ul: HTMLUListElement
 
    static template: ListTemplate = new ListTemplate();
    private constructor() {
        this.ul = document.getElementById("listItems") as HTMLUListElement;
    }

    clear(): void {
        this.ul.textContent = "";
    }

    render(fullList: FullList): void {
        this.clear();
        
        fullList.items.forEach(item => {
            const li: HTMLLIElement = document.createElement("li");
            li.classList.add("item");

            const checkBox: HTMLInputElement = document.createElement("input");
            checkBox.setAttribute("type", "checkbox");
            checkBox.checked = item.checked;
            checkBox.setAttribute("id", item.id.toString())

            checkBox.addEventListener("change", () => {
                item.checked = !item.checked;
                fullList.save();
            })

            li.append(checkBox)

            const label = document.createElement("label");
            label.textContent = item.item;
            label.htmlFor = item.id.toString();
            li.append(label);

            const button = document.createElement("button");
            button.textContent = "X";
            button.className = 'button';
            
            button.addEventListener("click", () => {
                console.log("Remove Item")
                fullList.removeItem(item.id);
                this.render(fullList);
            });

            li.append(button);

            this.ul.append(li)

        });
    }
}