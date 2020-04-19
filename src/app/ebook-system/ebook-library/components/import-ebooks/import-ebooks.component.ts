import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-import-ebooks',
  templateUrl: './import-ebooks.component.html',
  styleUrls: ['./import-ebooks.component.scss'],
})
export class ImportEbooksComponent implements OnInit {

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {}


  onOptionCancel() {
    this.modalCtrl.dismiss(null, 'cancel', 'import-ebooks-modal');
  }

  onBooksImport() {
    this.modalCtrl.dismiss({message: 'import-ebooks-modal closed'}, 'conform', 'import-ebooks-modal');
  }
}
