import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EbookLibraryPage } from './ebook-library.page';

describe('EbookLibraryPage', () => {
  let component: EbookLibraryPage;
  let fixture: ComponentFixture<EbookLibraryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EbookLibraryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EbookLibraryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
