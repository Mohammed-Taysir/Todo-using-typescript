import './css/style.css'
import FullList from './models/FullList';
import ListItem from './models/ListItem';
import ListTemplate from './template/ListTemplate'

function initApp(): void {
    const template: ListTemplate = ListTemplate.template;
    const fullList: FullList = FullList.instance;

    const form = document.getElementById("itemEntryForm") as HTMLFormElement;
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const newItem = document.getElementById("newItem") as HTMLInputElement;
            const newItemValue: string = newItem.value.trim();
            if(newItemValue.length)
            {
                const item = new ListItem();
                item.item = newItemValue;
                item.id = fullList.items.length? fullList.items[fullList.items.length - 1].id + 1: 1;
                fullList.addItem(item);
                template.render(fullList)
            }
        });

        const clearButton = document.getElementById("clearItemsButton") as HTMLButtonElement;
        clearButton.addEventListener("click", () =>{
            fullList.clear();
            template.clear();
        })

    fullList.load();
    template.render(fullList);
}


document.addEventListener("DOMContentLoaded", initApp);
