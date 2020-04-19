import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EbookBookmarksPageRoutingModule } from './ebook-bookmarks-routing.module';

import { EbookBookmarksPage } from './ebook-bookmarks.page';
import { BookmarksListViewComponent } from './components/bookmarks-list-view/bookmarks-list-view.component';
import { PublicSharedModule } from 'src/app/public-shared/public-shared.module';
import { SearchingComponent } from 'src/app/public-shared/components/searching/searching.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EbookBookmarksPageRoutingModule,
    PublicSharedModule
  ],
  declarations: [EbookBookmarksPage, BookmarksListViewComponent],
  entryComponents: [SearchingComponent]
})
export class EbookBookmarksPageModule {}
