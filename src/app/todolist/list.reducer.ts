import { TodolistService } from './todolist.service';

export function listReducer(list = [], action){
    switch (action.type){
        case TodolistService.ADD_ITEM:
            return [...list, action.payload];
        case TodolistService.REMOVE_ITEM:
            const index = list.indexOf(action.payload);
            return list.slice(0, index).concat(list.slice(index+1));
        default:
            return list;
    }
}