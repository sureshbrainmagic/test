import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListemployeePageRoutingModule } from './listemployee-routing.module';

import { ListemployeePage } from './listemployee.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListemployeePageRoutingModule
  ],
  declarations: [ListemployeePage]
})
export class ListemployeePageModule {}
