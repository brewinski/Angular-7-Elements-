import { ElementDef } from '../interfaces';
import { createCustomElement } from '@angular/elements';
import { Injector } from '@angular/core';

const RegisterWebComponents = (angularElements: ElementDef[], injector: Injector) => {
  angularElements.forEach((element) => {
    const newElement = createCustomElement(element.component, { injector });
    if ('options' in element) {
      customElements.define(element.key, newElement, element.options);
    } else {
      customElements.define(element.key, newElement);
    }
  });
};

export {
  RegisterWebComponents
};
