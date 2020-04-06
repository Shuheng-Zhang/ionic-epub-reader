import { EbookSystemPage } from './ebook-system.page';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: 'tabs',
        component: EbookSystemPage,
        children: [
            {
                path: 'reading',
                children: [
                    {
                        path: '',
                        // loadChildren: () => import('./ebook-reading/ebook-reading.module').then( m => m.EbookReadingPageModule)
                        loadChildren: './ebook-reading/ebook-reading.module#EbookReadingPageModule'
                    }
                ]
            },
            {
                path: 'library',
                children: [
                    {
                        path: '',
                        // loadChildren: () => import('./ebook-library/ebook-library.module').then( m => m.EbookLibraryPageModule)
                        loadChildren: './ebook-library/ebook-library.module#EbookLibraryPageModule'
                    }
                ]
            },
            {
                path: 'bookmarks',
                children: [
                    {
                        path: '',
                        // loadChildren: () => import('./ebook-bookmarks/ebook-bookmarks.module').then(m => m.EbookBookmarksPageModule)
                        loadChildren: './ebook-bookmarks/ebook-bookmarks.module#EbookBookmarksPageModule'
                    }
                ]
            },
            {
                path: 'profile',
                children: [
                    {
                        path: '',
                        // loadChildren: () => import('./sys-profile/sys-profile.module').then(m => m.SysProfilePageModule)
                        loadChildren: './sys-profile/sys-profile.module#SysProfilePageModule'
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/ebook-system/tabs/library',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/ebook-system/tabs/library',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EbookSystemRoutingModule {}
