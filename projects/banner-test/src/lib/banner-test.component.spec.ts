import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerTestComponent } from './banner-test.component';

describe('BannerTestComponent', () => {
  let component: BannerTestComponent;
  let fixture: ComponentFixture<BannerTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
