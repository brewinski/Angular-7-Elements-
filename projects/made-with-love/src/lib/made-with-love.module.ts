
import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterWebComponents } from '../../../shared/helpers';
import { MadeWithLoveComponent } from './components/made-with-love/made-with-love.component';
import { MadeWithLoveService } from './services/made-with-love/made-with-love.service';

const angularElements: any[] = [
  { key: 'made-with-love', component: MadeWithLoveComponent }
];

@NgModule({
  providers: [MadeWithLoveService],
  declarations: [MadeWithLoveComponent],
  imports: [CommonModule],
  entryComponents: [MadeWithLoveComponent],
})
export class MadeWithLoveModule {
  constructor(private injector: Injector) {
    RegisterWebComponents(angularElements, injector);
  }
}
