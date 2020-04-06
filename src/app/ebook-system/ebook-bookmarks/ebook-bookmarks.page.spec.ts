import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EbookBookmarksPage } from './ebook-bookmarks.page';

describe('EbookBookmarksPage', () => {
  let component: EbookBookmarksPage;
  let fixture: ComponentFixture<EbookBookmarksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EbookBookmarksPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EbookBookmarksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
