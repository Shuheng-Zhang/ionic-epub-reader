import { BookmarkDetailInfoDto } from './../../../../models/bookmark.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bookmarks-list-view',
  templateUrl: './bookmarks-list-view.component.html',
  styleUrls: ['./bookmarks-list-view.component.scss'],
})
export class BookmarksListViewComponent implements OnInit {

  @Input() bookmarksList: BookmarkDetailInfoDto[];

  constructor() { }

  ngOnInit() {}

}
