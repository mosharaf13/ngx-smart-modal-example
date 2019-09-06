import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import {ShoppingRoutingModule} from './shopping-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ShoppingRoutingModule
  ],
  declarations: [ShoppingCartComponent]
})
export class ShoppingModule { }