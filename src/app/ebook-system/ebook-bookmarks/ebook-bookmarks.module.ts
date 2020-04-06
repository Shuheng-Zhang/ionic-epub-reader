import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EbookBookmarksPageRoutingModule } from './ebook-bookmarks-routing.module';

import { EbookBookmarksPage } from './ebook-bookmarks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EbookBookmarksPageRoutingModule
  ],
  declarations: [EbookBookmarksPage]
})
export class EbookBookmarksPageModule {}
