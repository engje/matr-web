import { 
    Component,
    state,
    keyframes,
    OnInit,
    NgModule,
    Input,
    OnChanges,
    SimpleChanges,
    ElementRef,
    HostListener
} from '@angular/core';

import {trigger, transition, query, style, animate} from "@angular/animations";

import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'my-app',
  template: `
  <main-nav></main-nav>
  <div [@routeSubNavAnimation]="prepRouteState(routerOutlet)" >
  <sub-nav class="subnav" (sectionPosition)="sectionPosition($event)"></sub-nav>
  </div>
  <div class="subnav">
    <sub-nav class="subnav header" [hidden]="currentSectionName==null"></sub-nav>
  </div>
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
    .header{
        position: fixed;
        width: inherit;
        top: 0px;
        z-index: 2;
        -webkit-box-shadow: 0px 4px 7px -3px rgba(0,0,0,0.7);
        -moz-box-shadow: 0px 4px 7px -3px rgba(0,0,0,0.7);
        box-shadow: 0px 4px 7px -3px rgba(0,0,0,0.7);
    }
    div.subnav {
        width: 100%;
        border-color:#e7e7e7;
    }
  `],
  animations: [
        trigger('routeAnimation', [
          transition(':enter', [
          ]),

          transition('* => *', [
            style({ transform: 'translate(-400px, 0px)', opacity: 0 }),
            animate('200ms', style({ transform: 'translate(0px)', opacity: 1 }))
          ])
        ]),
        trigger('routeSubNavAnimation', [
          transition(':enter', [
          ]),

          transition('* => *', [
            style({ transform: 'translate(0px, -200px)'}),
            animate('300ms', style({ transform: 'translate(0px)'}))
          ])
        ])
    ]
})
export class AppComponent implements OnInit  {

    public currentSectionName: string = null;
    public sections: any[] = [];
    
    constructor(private router: Router, private el: ElementRef) { 
    }
    
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
    
    sectionPosition($event) {
        //filter out the old position if it has been set
        this.sections = this.sections.filter(item => item.name != $event.name);
        //set the new position
        this.sections.push($event);
        //sort the section based on their apperance order 
        this.sections.sort((a: any, b: any) => {
            return b.position - a.position;
        });

        //if the page has already been scrolled find the current name
        if (document.body.scrollTop > 0) {
            this.currentSectionName = this.getCurrentSectionName();
        }
    }
    
    @HostListener("window:scroll", [])
    onWindowScroll() {
        this.currentSectionName = this.getCurrentSectionName();
    }
    
    private getCurrentSectionName(): string {
        let offset: number = this.el.nativeElement.parentElement.offsetTop - this.el.nativeElement.offsetTop;
        for (let section of this.sections) {
            if ((section.position + offset - document.body.scrollTop) < 0) {
                return section.name;
            }
        }
        return null;
    }
}
