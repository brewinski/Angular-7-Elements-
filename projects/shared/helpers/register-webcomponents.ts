import { ElementDef } from '../interfaces';
import { createCustomElement } from '@angular/elements';

const RegisterWebComponents = (angularElements: ElementDef[], injector) => {
  angularElements.forEach((element) => {
    const newElement = createCustomElement(element.component, { injector });
    customElements.define(element.key, newElement);
  });
};

export {
  RegisterWebComponents
};
