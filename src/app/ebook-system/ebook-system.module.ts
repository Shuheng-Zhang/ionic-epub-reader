import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { EbookSystemPage } from './ebook-system.page';
import { EbookSystemRoutingModule } from './ebook-system-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EbookSystemRoutingModule
  ],
  declarations: [EbookSystemPage]
})
export class EbookSystemPageModule {}
