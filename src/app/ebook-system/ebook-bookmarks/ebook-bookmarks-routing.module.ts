import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EbookBookmarksPage } from './ebook-bookmarks.page';

const routes: Routes = [
  {
    path: '',
    component: EbookBookmarksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EbookBookmarksPageRoutingModule {}
