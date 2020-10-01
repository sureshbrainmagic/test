import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListemployeePage } from './listemployee.page';

describe('ListemployeePage', () => {
  let component: ListemployeePage;
  let fixture: ComponentFixture<ListemployeePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListemployeePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListemployeePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
