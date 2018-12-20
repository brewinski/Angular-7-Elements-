import { Provider, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';


const getAccessValidatorProvider = (Component: Object): Provider => {
  return {
    provide: NG_VALUE_ACCESSOR,
    useExisting:  forwardRef(() => Component),
    multi: true
  };
};

export {
  getAccessValidatorProvider
};
