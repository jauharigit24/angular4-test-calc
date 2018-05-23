import { ActivatedRoute } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { transition, state,style, trigger, animate } from '@angular/animations';
@Component({
  selector: '[app-products]',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  styles: [`
    div{
      color:red,
      width:100px,
      margin:0 auto
    }
  `],
  animations: [
    trigger('myfirstanimation',[
      state('theme1',style({
        background : '#222'
      })),
      state('theme2',style({
        background : 'red'
      })),
      transition('theme1 <=> theme2',animate('300ms ease-in'))
    ])
  ]
})
export class ProductsComponent implements OnInit {
  state:string = 'theme1';

  animate(){
    this.state= this.state==='theme1' ? 'theme2': 'theme1';
  }
  productsList  = ["Websites","App","Responsive website"];
  constructor(private route: ActivatedRoute) { }
   
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log(params.get('username'));
    });
  }

}
