import { Component, OnInit } from '@angular/core';
import {NgxSmartModalService} from 'ngx-smart-modal';

@Component({
  selector: 'app-lazy-feature',
  templateUrl: './lazy-feature.component.html',
  styleUrls: ['./lazy-feature.component.css']
})
export class LazyFeatureComponent implements OnInit {

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