import { Component, OnInit } from '@angular/core';
import { BookmarkDetailInfoDto } from '../../models/bookmark.model';
import { bookmarksListDto } from '../../mocks/bookmaarks.mock';
import { LoadingController, IonRefresher, ModalController } from '@ionic/angular';
import { SearchingComponent } from '../../public-shared/components/searching/searching.component';

@Component({
  selector: 'app-ebook-bookmarks',
  templateUrl: './ebook-bookmarks.page.html',
  styleUrls: ['./ebook-bookmarks.page.scss'],
})
export class EbookBookmarksPage implements OnInit {

  isSearchBarShowed = false;

  bookmarksList: BookmarkDetailInfoDto[];

  constructor(
    private loadingCtrl: LoadingController,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {}


  ionViewDidEnter() {
    this.loadingBookmarks();
  }

  async onShowBookmarkSearch() {
    // this.isSearchBarShowed = !this.isSearchBarShowed;
    const searchingModal = await this.modalCtrl.create({
      component: SearchingComponent,
      animated: true,
      id: 'bookmarks-seraching-modal',
      componentProps: {
        src: 'bookmarks'
      }
    });
    await searchingModal.present();

  }


  onRefreshing(event: any) {
    console.log(`[Sync]`, event);
    setTimeout(() => {
      event.target.complete();
    }, 1500);
  }

  private async loadingBookmarks() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading Bookmarks...',
      spinner: 'bubbles',
      duration: 500
    });
    await loading.present();

    this.bookmarksList = bookmarksListDto;

    // await loading.onDidDismiss()

  }
}
