
import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Routes, Router } from '@angular/router';

import {PipesComponent} from './pipesDemo/pipes.component';
import { APP_PROVIDERS } from './app.providers';
import {AsyncPipeExample} from './pipesDemo/asyncPipe.component';

@Component({
  moduleId: module.id,
  selector: 'app-container',
  template: `<router-outlet></router-outlet>`,
  directives: [ROUTER_DIRECTIVES],
  providers: [ APP_PROVIDERS ]
})
@Routes([
  { path: '/', component: PipesComponent },
  { path: '/pipe', component: PipesComponent },
  { path: '/async', component: AsyncPipeExample }
])
export class AppComponent {

  constructor(private router: Router) {

  }

}
