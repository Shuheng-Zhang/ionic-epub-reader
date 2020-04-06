import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SysProfilePageRoutingModule } from './sys-profile-routing.module';

import { SysProfilePage } from './sys-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SysProfilePageRoutingModule
  ],
  declarations: [SysProfilePage]
})
export class SysProfilePageModule {}
