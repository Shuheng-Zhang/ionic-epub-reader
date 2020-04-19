import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'public-searching',
  templateUrl: './searching.component.html',
  styleUrls: ['./searching.component.scss'],
})
export class SearchingComponent implements OnInit {

  // 搜索目标源位置
  @Input() src: string;

  searchText: string;

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {}


  onCloseModal() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  onSearching() {
    if (!this.searchText || this.searchText === '') {
      return;
    }

    console.log(`Searching: ${this.searchText}`);
  }
}
