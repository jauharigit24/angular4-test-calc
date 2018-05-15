import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListComponents } from './list.component';

import { HttpModule } from  '@angular/http';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { MembersComponent } from './members/members.component';
import { CalculatorComponent } from './calculator/calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponents,
    ProductsComponent,
    MembersComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,  
    RouterModule.forRoot([
      {
        path:'members',
        component: MembersComponent
      },
      {
        path:'products/:id',
        component: ProductsComponent
      },
      {
        path:'calculator',
        component: CalculatorComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
