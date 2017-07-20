import { 
    Component,
    state,
    keyframes,
    OnInit
} from '@angular/core';

import {trigger, transition, query, style, animate} from "@angular/animations";

import { Router, NavigationEnd } from '@angular/router';

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
      transition(':enter', [
      ]),
      
      transition('* => *', [
        style({ transform: 'translate(-400px, 0px)'; opacity: 0 }),
        animate('200ms', style({ transform: 'translate(0px)'; opacity: 1 }))
      ])
    ])
    ]
})
export class AppComponent implements OnInit  { 
  constructor(private router: Router) { }
  prepRouteState(outlet: any) {
    return outlet.activatedRouteData['animation'] || 'homePage'; 
  }
  ngOnInit() {
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0)
        });
    }
}
