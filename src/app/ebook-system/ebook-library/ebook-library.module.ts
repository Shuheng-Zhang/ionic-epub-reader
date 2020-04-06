import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EbookLibraryPageRoutingModule } from './ebook-library-routing.module';

import { EbookLibraryPage } from './ebook-library.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EbookLibraryPageRoutingModule
  ],
  declarations: [EbookLibraryPage]
})
export class EbookLibraryPageModule {}
