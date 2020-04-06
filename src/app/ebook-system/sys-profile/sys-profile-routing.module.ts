import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SysProfilePage } from './sys-profile.page';

const routes: Routes = [
  {
    path: '',
    component: SysProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SysProfilePageRoutingModule {}
