import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EbookReadingPageRoutingModule } from './ebook-reading-routing.module';

import { EbookReadingPage } from './ebook-reading.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EbookReadingPageRoutingModule
  ],
  declarations: [EbookReadingPage]
})
export class EbookReadingPageModule {}
