import { EbookBaseInfoDto, EbookBaseDto } from './../../../../models/ebook.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ebook-list-item-view',
  templateUrl: './list-item-view.component.html',
  styleUrls: ['./list-item-view.component.scss'],
})
export class ListItemViewComponent implements OnInit {

  @Input() ebookList: EbookBaseInfoDto[];

  constructor() { }

  ngOnInit() {}

  loadBook(bookId: string) {
    console.log(`[loadBook] ${bookId}`);
  }

  showBookInfo(bookInfo: EbookBaseDto) {
    console.log(`[showBookInfo] ${JSON.stringify(bookInfo)}`);
  }

  deleteBook(bookId: string) {
    console.log(`[deleteBook] ${bookId}`);
  }
}
