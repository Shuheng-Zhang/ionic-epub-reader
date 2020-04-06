import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SysProfilePage } from './sys-profile.page';

describe('SysProfilePage', () => {
  let component: SysProfilePage;
  let fixture: ComponentFixture<SysProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SysProfilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SysProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
