import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root',
})

export class ListService{
    constructor(private listService: ListService){

    }
    getProjects(){
        return ["Weroes","Zoya","Nexgen","Sobeloved"];
    }
}