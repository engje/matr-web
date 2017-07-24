import {Component, OnInit, ElementRef, Output, EventEmitter, HostListener, Input } from '@angular/core';
import { Router, NavigationEnd, Event } from '@angular/router';

@Component({
    selector: 'sub-nav',
    template: `
        <div class="navbar-submenu">
            <ul class="navbar-submenu">
                <li class="zoomimg navbar-submenu" *ngFor="let item of subNavItems" >
                    <a href="#" class="navbar-submenu" pageScroll [pageScrollDuration]="500" href="{{item.id}}">{{item.name}}</a>
                </li>
            </ul>
        </div>
    `,
    styles: [`
        div.navbar-submenu {
            width: inherit;
            min-width: inherit;
            background-color:white;
            //-webkit-box-shadow: 0px 4px 7px -3px rgba(0,0,0,0.7);
            //-moz-box-shadow: 0px 4px 7px -3px rgba(0,0,0,0.7);
            //box-shadow: 0px 4px 7px -3px rgba(0,0,0,0.7);
        }
        ul.navbar-submenu {
            margin: 0;
            padding: 0;
            text-align:center;
            background: white;
            white-space:nowrap;
            overflow-x: auto;
            overflow-y: hidden;
        }
        li.navbar-submenu {
            display: inline-block;
            padding:20px;
        }
        a.navbar-submenu {
            text-decoration: none;
            font-size: 15px;
        }
    `]
})
export class SubNavComponent implements OnInit {

    @Output() sectionPosition = new EventEmitter();
    
    subNavItems: { id: string, name: string }[] = [{ "id": '#creditedge', "name": 'CreditEdge' },
                    { "id": '#creditview', "name": 'CreditView 2' },
                    { "id": '#sav', "name": 'SAV' }
    ];
    
    currentRoute: string = '/home';
    
    constructor(private router: Router, private element: ElementRef) {
        this.router.events.subscribe((event: Event) => {
        
            if(event instanceof NavigationEnd ) {
                this.currentRoute = event.url;
            }
            
            if (this.currentRoute === '/cesa')
            {
                this.subNavItems = [
                    { "id": '#creditedge', "name": 'CreditEdge' },
                    { "id": '#creditview', "name": 'CreditView 2' },
                    { "id": '#sav', "name": 'SAV' }
                ];
            }
            else if (this.currentRoute === '/ers')
            {
                this.subNavItems = [
                    { "id": '#creditedge', "name": 'Ers 1' },
                    { "id": '#creditview', "name": 'Ers 2' },
                    { "id": '#sav', "name": 'Ers 3' }
                ];
            }
            else if (this.currentRoute === '/sav-perspective')
            {
                this.subNavItems = [
                    { "id": '#twenty-sixteen', "name": '2016' }
                ];
            }
            else
            {
                this.subNavItems = [];
            }
        });
    }
    
    ngOnInit() {
        this.sectionPosition.emit({ name: 'subNav', position: this.element.nativeElement.offsetTop });
    }


    @HostListener('window:resize', ['$event'])
    onResize(event) {
        this.sectionPosition.emit({ name: 'subNav', position: this.element.nativeElement.offsetTop });
    }

}