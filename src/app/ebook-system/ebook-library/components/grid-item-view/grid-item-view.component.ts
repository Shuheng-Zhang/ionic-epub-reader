import { Component, OnInit, Input } from '@angular/core';
import { EbookBaseInfoDto } from '../../../../models/ebook.model';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'ebook-grid-item-view',
  templateUrl: './grid-item-view.component.html',
  styleUrls: ['./grid-item-view.component.scss'],
})
export class GridItemViewComponent implements OnInit {

  @Input() ebookList: EbookBaseInfoDto[];

  private timer: any;

  constructor(
    private actionSheetCtrl: ActionSheetController
  ) { }

  ngOnInit() {}

  onLoadBook(bookId: string) {
    console.log(`[onLoadBook]: ${bookId}`);
  }

  onPress(bookId: string) {
    this.startInterval(bookId);
  }

  onPressUp(event: MouseEvent) {
    this.stopInterval();
    event.preventDefault();
  }

  private startInterval(bookId: string) {
    let t = 0;
    this.timer = setInterval(() => {
      t += 1;
      if (t === 1) {
        this.actionSheetCtrl.create({
          header: 'Options',
          buttons: [
            {
              text: 'Info',
              icon: 'information-circle-outline'
            },
            {
              text: 'Delete',
              icon: 'trash-outline',
              role: 'destructive',
              handler: () => {
                console.log(`[deleteBook]: ${bookId}`);
              }
            },
            {
              text: 'Cancel',
              icon: 'close-outline',
              role: 'cancel'
            }
          ]
        }).then(e => {
          e.present();
          // console.log('Opened Config View.');
          this.stopInterval();
        });
      }
    }, 100);
  }

  private stopInterval() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
}
