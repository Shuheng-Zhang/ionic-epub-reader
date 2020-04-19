import { LoadingController, ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

import { EbookBaseInfoDto } from './../../models/ebook.model';
import { ebookListDto } from '../../mocks/ebooks.mock';
import { ImportEbooksComponent } from './components/import-ebooks/import-ebooks.component';
import { SearchingComponent } from '../../public-shared/components/searching/searching.component';

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
    private loadingCtrl: LoadingController,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {}

  ionViewDidEnter() {
    this.loading();
  }

  async onShowLibrarySearch() {
    // this.isSearchBarShowed = !this.isSearchBarShowed;
    // console.log(`[onToggleLibrarySearch]: ${this.isSearchBarShowed}`);

    const searchingModal = await this.modalCtrl.create({
      component: SearchingComponent,
      animated: true,
      id: 'library-seraching-modal',
      componentProps: {
        src: 'library'
      }
    });
    await searchingModal.present();

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


  async onShowImportEbooksModal() {
    const importEbooksmodal = await this.modalCtrl.create({
      component: ImportEbooksComponent,
      animated: true,
      id: 'import-ebooks-modal'
    });
    await importEbooksmodal.present();

    const res = await importEbooksmodal.onDidDismiss();
    console.log(res.data, res.role);
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
