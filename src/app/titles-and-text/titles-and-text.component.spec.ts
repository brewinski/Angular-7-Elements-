import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitlesAndTextComponent } from './titles-and-text.component';

describe('TitlesAndTextComponent', () => {
  let component: TitlesAndTextComponent;
  let fixture: ComponentFixture<TitlesAndTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitlesAndTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitlesAndTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
