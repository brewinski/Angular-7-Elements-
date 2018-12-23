import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent } from './button.component';
import { By } from '@angular/platform-browser';
import { Component, DebugElement } from '@angular/core';


@Component({
  template: `<cns-button
                [name]="name"
                [type]="type"
                [disabled]="false">
             </cns-button>`
})
class TestButtonComponent {
  name: string;
  type: string;
  disabled: boolean;
}


describe('ButtonComponent', () => {
  let component: TestButtonComponent;
  let fixture: ComponentFixture<TestButtonComponent>;
  let el: DebugElement;
  let comp: ButtonComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ButtonComponent,
        TestButtonComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestButtonComponent);
    el = fixture.debugElement.query(By.directive(ButtonComponent));
    comp = el.injector.get(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    console.log(fixture);
    console.log(el);
    console.log(comp);
    console.log(component);
    expect(component).toBeTruthy();
  });
});
