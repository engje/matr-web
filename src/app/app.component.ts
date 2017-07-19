import { 
    Component,
    state,
    keyframes
} from '@angular/core';

import {trigger, transition, query, style, animate} from "@angular/animations";

@Component({
  selector: 'my-app',
  template: `
      <main-nav></main-nav>
      <div [@routeAnimation]="prepRouteState(routerOutlet)">
        <router-outlet #routerOutlet="outlet"></router-outlet>
      </div>
      <main-footer></main-footer>
  `,
  styles: [`
    div.main-content {
        padding-top:50px;
    }
    h1.main-content {
        margin: 10px;
        margin-bottom: 50px;
    }
  `],
  animations: [
    trigger('routeAnimation', [
      transition(':enter', []),

      transition('homePage => cesaPage', [
        style({ transform: 'translate(0, 400px)' }),
        animate('500ms', style({ transform: 'translate(0px)' }))
      ]),
      
      transition('homePage => ersPage', [
        style({ transform: 'translate(0, 400px)' }),
        animate('500ms', style({ transform: 'translate(0px)' }))
      ]),
    
      transition('cesaPage => homePage', [
        style({ transform: 'translate(-400px, 0px)' }),
        animate('500ms', style({ transform: 'translate(0px)' }))
      ]),
      
      transition('ersPage => homePage', [
        style({ transform: 'translate(-400px, 0px)' }),
        animate('500ms', style({ transform: 'translate(0px)' }))
      ]),
      
      transition('cesaPage => ersPage', [
        style({ transform: 'translate(0, 400px)' }),
        animate('500ms', style({ transform: 'translate(0px)' }))
      ]),
      
      transition('ersPage => cesaPage', [
        style({ transform: 'translate(0, 400px)' }),
        animate('500ms', style({ transform: 'translate(0px)' }))
      ])
    ])
    ]
})
export class AppComponent  { 
  prepRouteState(outlet: any) {
    return outlet.activatedRouteData['animation'] || 'homePage'; 
  }
}
