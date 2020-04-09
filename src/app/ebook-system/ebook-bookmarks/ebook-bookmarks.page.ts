import { Component, OnInit } from '@angular/core';
import { BookmarkDetailInfoDto } from '../../models/bookmark.model';
import { bookmarksListDto } from '../../mocks/bookmaarks.mock';
import { LoadingController, IonRefresher } from '@ionic/angular';

@Component({
  selector: 'app-ebook-bookmarks',
  templateUrl: './ebook-bookmarks.page.html',
  styleUrls: ['./ebook-bookmarks.page.scss'],
})
export class EbookBookmarksPage implements OnInit {

  isSearchBarShowed = false;

  bookmarksList: BookmarkDetailInfoDto[];

  constructor(
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {}


  ionViewDidEnter() {
    this.loadingBookmarks();
  }

  onToggleLibrarySearch() {
    this.isSearchBarShowed = !this.isSearchBarShowed;
  }


  onRefreshing(event: any) {
    console.log(`[Sync]`, event);
    setTimeout(() => {
      event.target.complete();
    }, 1500);
  }

  private async loadingBookmarks() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading Books...',
      spinner: 'bubbles',
      duration: 500
    });
    await loading.present();

    this.bookmarksList = bookmarksListDto;

    // await loading.onDidDismiss()

  }
}
