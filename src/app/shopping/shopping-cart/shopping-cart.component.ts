import { Component, OnInit } from '@angular/core';
import {NgxSmartModalService} from 'ngx-smart-modal';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor(public modal: NgxSmartModalService) { }

  ngOnInit() {
  }

    openModal(modal) {
      console.log(modal, this);
      console.log(this.modal.getModal(modal));
        this.modal.getModal(modal).open();
    }

}