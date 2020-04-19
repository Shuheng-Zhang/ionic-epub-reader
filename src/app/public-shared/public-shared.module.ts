import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchingComponent } from './components/searching/searching.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [SearchingComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports: [
    SearchingComponent
  ]
})
export class PublicSharedModule { }
