import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WikiframeComponent } from './wikiframe.component';

describe('WikiframeComponent', () => {
  let component: WikiframeComponent;
  let fixture: ComponentFixture<WikiframeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WikiframeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WikiframeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
