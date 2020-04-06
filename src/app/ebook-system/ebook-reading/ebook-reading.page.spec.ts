import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EbookReadingPage } from './ebook-reading.page';

describe('EbookReadingPage', () => {
  let component: EbookReadingPage;
  let fixture: ComponentFixture<EbookReadingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EbookReadingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EbookReadingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
