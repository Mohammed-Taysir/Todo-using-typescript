import type ListItem from "./ListItem";

interface IFullList {
    items: ListItem[],
    save(): void,
    load(): void,
    clear(): void,
    addItem(): void,
    removeItem(): void
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

    save() {

    }

    load() {

    }

    clear() {

    }

    addItem() {

    }

    removeItem() {

    }

}

