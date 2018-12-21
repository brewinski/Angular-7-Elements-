import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HugPageComponent } from './hug-page.component';

describe('HugPageComponent', () => {
  let component: HugPageComponent;
  let fixture: ComponentFixture<HugPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HugPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HugPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
