
import { Item } from "./item";

export class Todolist {
    private _items: Item[];

    constructor(){
        this._items = [];
    }

    get items(): Item[]{
        return this._items;
    }

    public addItem (title: string) {
        this.items.push(new Item(title));
    }
}