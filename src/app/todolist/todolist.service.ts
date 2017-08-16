import { LoggerService } from '../utils/logger.service';
import { Item } from "./item";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class TodolistService {
    private _items: Item[];
    private _logger: LoggerService;
    private _http: HttpClient;

    constructor(logger: LoggerService, http: HttpClient){
        this._items = [];
        this._logger = logger;
        this._http = http;

        const headers = new HttpHeaders();
        headers.set('token','123');
        
        http.get<Item[]>('https://jsonplaceholder.typicode.com/todos', { headers: headers} )
            .subscribe(response => this._items = response);
    }

    get items(): Item[]{
        return this._items
    }

    public addItem (title: string) {
        this.items.push(new Item(title));
        this._logger.log('item added!')
    }
}