import { LoadingController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

import { EbookBaseInfoDto } from './../../models/ebook.model';
import { ebookListDto } from '../../mocks/ebooks.mock';

@Component({
  selector: 'app-ebook-library',
  templateUrl: './ebook-library.page.html',
  styleUrls: ['./ebook-library.page.scss'],
})
export class EbookLibraryPage implements OnInit {

  isListViewed = false;
  isSearchBarShowed = false;

  ebookList: EbookBaseInfoDto[];

  constructor(
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {}

  ionViewDidEnter() {
    this.loading();
  }

  onToggleLibrarySearch() {
    this.isSearchBarShowed = !this.isSearchBarShowed;
    console.log(`[onToggleLibrarySearch]: ${this.isSearchBarShowed}`);
  }

  onToggleLibraryItemViewMode() {
    this.isListViewed = !this.isListViewed;
    console.log(`[onToggleLibraryItemViewMode]: ${this.isListViewed}`);
  }

  onRefreshing(event: any) {
    console.log(`[Sync]`, event);
    setTimeout(() => {
      event.target.complete();
    }, 1500);
  }

  private async loading() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading Books...',
      spinner: 'bubbles',
      duration: 1500
    });
    await loading.present();

    this.ebookList = ebookListDto;

    // await loading.onDidDismiss()

  }
}
