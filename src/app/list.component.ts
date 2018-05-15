import { Component } from '@angular/core';

@Component({
    selector:'[list]',
    templateUrl: 'list.component.html'
})
export class ListComponents{
    title ='I am testing components';
    projects =  ["Weroes","Zoya","Nexgen","Sobeloved"];
}