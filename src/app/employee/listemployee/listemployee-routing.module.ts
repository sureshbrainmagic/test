import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListemployeePage } from './listemployee.page';

const routes: Routes = [
  {
    path: '',
    component: ListemployeePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListemployeePageRoutingModule {}
