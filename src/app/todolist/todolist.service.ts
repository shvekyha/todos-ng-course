import { LoggerService } from '../utils/logger.service';
import { Item } from "./item";
import { Injectable } from "@angular/core";

@Injectable()
export class TodolistService {
    private _items: Item[];
    private _logger: LoggerService;

    constructor(logger: LoggerService){
        this._items = [];
        this._logger = logger;
    }

    get items(): Item[]{
        return this._items;
    }

    public addItem (title: string) {
        this.items.push(new Item(title));
        this._logger.log('item added!')
    }
}