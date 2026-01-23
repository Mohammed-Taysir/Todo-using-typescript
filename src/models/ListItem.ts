
 interface Item {
    id: number,
    item: string,
    checked: boolean
}

export default class ListItem implements Item {
    constructor(
        private _id: number = 0,
        private _item: string = "",
        private _checked: boolean = false
    )
    {

    }
    
    get id(): number {
        return this._id;
    }

    set id(id: number) {
        this._id = id
    }

    get item(): string {
        return this._item
    }

    set item(item: string) {
        this._item = item
    }

    get checked(): boolean {
        return this._checked
    }

    set checked(checked: boolean) {
        this._checked = checked
    }
}