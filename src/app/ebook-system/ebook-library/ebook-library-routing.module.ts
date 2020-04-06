import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EbookLibraryPage } from './ebook-library.page';

const routes: Routes = [
  {
    path: '',
    component: EbookLibraryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EbookLibraryPageRoutingModule {}
