import { Component, OnInit } from '@angular/core';
import {NgxSmartModalService} from 'ngx-smart-modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'Lazy loading feature modules';

  constructor(
     public modal: NgxSmartModalService
  ){}


  ngOnInit() {
  }

  openModal(modal) {
      console.log(modal, this);
      console.log(this.modal.getModal(modal));
        this.modal.getModal(modal).open();
    }
}