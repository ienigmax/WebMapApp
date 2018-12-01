import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapsItemComponent } from './maps-item.component';

describe('MapItemComponent', () => {
  let component: MapsItemComponent;
  let fixture: ComponentFixture<MapsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
