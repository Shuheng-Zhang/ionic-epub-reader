import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EbookReadingPage } from './ebook-reading.page';

const routes: Routes = [
  {
    path: '',
    component: EbookReadingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EbookReadingPageRoutingModule {}
