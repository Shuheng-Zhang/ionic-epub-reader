import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'ebook-system', pathMatch: 'full' },
  {
    path: 'ebook-system',
    loadChildren: () => import('./ebook-system/ebook-system.module').then( m => m.EbookSystemPageModule),
    // children: [
    //   {
    //     path: 'ebook-reading',
    //     loadChildren: () => import('./ebook-system/ebook-reading/ebook-reading.module').then( m => m.EbookReadingPageModule)
    //   },
    //   {
    //     path: 'ebook-library',
    //     loadChildren: () => import('./ebook-system/ebook-library/ebook-library.module').then( m => m.EbookLibraryPageModule)
    //   },
    //   {
    //     path: 'ebook-bookmarks',
    //     loadChildren: () => import('./ebook-system/ebook-bookmarks/ebook-bookmarks.module').then( m => m.EbookBookmarksPageModule)
    //   },
    //   {
    //     path: 'sys-profile',
    //     loadChildren: () => import('./ebook-system/sys-profile/sys-profile.module').then( m => m.SysProfilePageModule)
    //   }
    // ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
