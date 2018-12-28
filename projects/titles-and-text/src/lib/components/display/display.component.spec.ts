import { Component, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DisplayComponent } from './display.component';
import { DisplaySize, Element, FontWeight, Variation } from '../../../../../shared/interfaces/types.type';

@Component({
  template: `<cns-display>Display XLarge</cns-display>`
})
class TestDisplayComponent {
  size: string;
  element: string;
  variation: string;
  weight: string;
}

describe('DisplayComponent', () => {
  let testHostComponent: TestDisplayComponent;
  let testHostFixture: ComponentFixture<TestDisplayComponent>;
  let debugElement: DebugElement;
  let component: DisplayComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DisplayComponent,
        TestDisplayComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    testHostFixture = TestBed.createComponent(TestDisplayComponent);
    debugElement = testHostFixture.debugElement.query(By.directive(DisplayComponent));
    component = debugElement.injector.get(DisplayComponent);
    testHostComponent = testHostFixture.componentInstance;

    testHostFixture.detectChanges();
  });

  it('should create', () => {
    expect(testHostComponent).toBeTruthy();
    expect(component).toBeTruthy();
  });

  it('should set defaults', () => {
    expect(component.size).toBe(defaultValues.size);
    expect(component.element).toBe(defaultValues.element);
    expect(component.variation).toBe(defaultValues.variation);
    expect(component.weight).toBe(defaultValues.weight);
  });

  it('should set @Inputs correctly', () => {
    component.size = modifiedValues.size;
    component.element = modifiedValues.element;
    component.variation = modifiedValues.variation;
    component.weight = modifiedValues.weight;

    testHostFixture.detectChanges();

    expect(component.size).toBe(modifiedValues.size);
    expect(component.element).toBe(modifiedValues.element);
    expect(component.variation).toBe(modifiedValues.variation);
    expect(component.weight).toBe(modifiedValues.weight);
  });
});

interface DisplayProperties {
  size: DisplaySize;
  element: Element;
  variation: Variation;
  weight: FontWeight;
}

const defaultValues: DisplayProperties = {
  size: 'large',
  element: 'p',
  variation: 'normal',
  weight: 'bold'
};

const modifiedValues: DisplayProperties = {
  size: 'small',
  element: 'h1',
  variation: 'subdued',
  weight: 'normal'
};
