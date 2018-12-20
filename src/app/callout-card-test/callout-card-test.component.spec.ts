import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalloutCardTestComponent } from './callout-card-test.component';

describe('CalloutCardTestComponent', () => {
  let component: CalloutCardTestComponent;
  let fixture: ComponentFixture<CalloutCardTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalloutCardTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalloutCardTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
