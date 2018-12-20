import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalloutCardComponent } from './callout-card.component';

describe('CalloutCardComponent', () => {
  let component: CalloutCardComponent;
  let fixture: ComponentFixture<CalloutCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalloutCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalloutCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
