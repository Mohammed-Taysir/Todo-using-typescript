import ListItem from "./ListItem";

interface IFullList {
    items: ListItem[],
    save(): void,
    load(): void,
    clear(): void,
    addItem(item: ListItem): void,
    removeItem(id: number): void
}

export default class FullList implements IFullList {
    static instance: FullList = new FullList();
    private constructor(
        private _items: ListItem[] = []
    ) {
       
    }

    get items() {
        return this._items;
    }

    set items(items: ListItem[]) {
        this._items = items;
    }

    save(): void {
        localStorage.setItem("items", JSON.stringify(this._items))
    }

    load(): void {
        const loadedItems = localStorage.getItem("items");
        if(typeof loadedItems != 'string')
            return;
        const parsedList: {_id: number, _item:string, _checked: boolean}[] = JSON.parse(loadedItems)
        parsedList.forEach(item => {
            const listItem: ListItem = new ListItem(item._id, item._item, item._checked);
            this.addItem(listItem)
        });  
    }

    clear(): void {
        this._items = [];
        this.save();
    }

    addItem(item: ListItem): void {
        this._items.push(item);
        this.save();
    }

    removeItem(id: number): void {
        this._items = this._items.filter(item => item.id != id);
        this.save();
    }

}

