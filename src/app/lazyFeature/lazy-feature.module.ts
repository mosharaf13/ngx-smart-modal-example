import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './lazy-feature-routing.module';
import { LazyFeatureComponent } from './lazy-feature.component';
import { NgxSmartModalModule } from 'ngx-smart-modal';

@NgModule({
  imports: [
    CommonModule,
    OrdersRoutingModule,
    NgxSmartModalModule
  ],
  declarations: [LazyFeatureComponent]
})
export class LazyFeatureModule { }


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/