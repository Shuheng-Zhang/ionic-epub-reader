import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EbookLibraryPageRoutingModule } from './ebook-library-routing.module';

import { EbookLibraryPage } from './ebook-library.page';
import { GridItemViewComponent } from './components/grid-item-view/grid-item-view.component';
import { ListItemViewComponent } from './components/list-item-view/list-item-view.component';
import { ImportEbooksComponent } from './components/import-ebooks/import-ebooks.component';
import { SearchingComponent } from 'src/app/public-shared/components/searching/searching.component';
import { PublicSharedModule } from 'src/app/public-shared/public-shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EbookLibraryPageRoutingModule,
    PublicSharedModule
  ],
  declarations: [EbookLibraryPage, GridItemViewComponent, ListItemViewComponent, ImportEbooksComponent],
  entryComponents: [ImportEbooksComponent, SearchingComponent]
})
export class EbookLibraryPageModule {}
