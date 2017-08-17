import { LoggerService } from '../utils/logger.service';
import { Item } from "./item";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { NgRedux } from '@angular-redux/store';

@Injectable()
export class TodolistService {
    
    static ADD_ITEM = 'ADD_ITEM';
    static REMOVE_ITEM = 'REMOVE_ITEM';

    constructor(private store: NgRedux<any>){
        
    }

    public addItem (title: string): void {
        this.store.dispatch({
            type: TodolistService.ADD_ITEM,
            payload: new Item(title)
        });
    }

    public removeItem (item: Item) {
        this.store.dispatch({
            type: TodolistService.REMOVE_ITEM,
            payload: item
        });
    }
}