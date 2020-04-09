import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EbookLibraryPageRoutingModule } from './ebook-library-routing.module';

import { EbookLibraryPage } from './ebook-library.page';
import { GridItemViewComponent } from './components/grid-item-view/grid-item-view.component';
import { ListItemViewComponent } from './components/list-item-view/list-item-view.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EbookLibraryPageRoutingModule,
  ],
  declarations: [EbookLibraryPage, GridItemViewComponent, ListItemViewComponent]
})
export class EbookLibraryPageModule {}
