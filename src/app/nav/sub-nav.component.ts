import {Component, OnInit, ElementRef, Output, EventEmitter, HostListener, Input } from '@angular/core';
import { Router, NavigationEnd, Event } from '@angular/router';

@Component({
    selector: 'sub-nav',
    template: `
        <div class="navbar-submenu">
            <ul class="navbar-submenu">
                <li class="{{item.classes}}" *ngFor="let item of subNavItems" >
                    <div class="zoomimg">
                        <a href="#" class="navbar-submenu" pageScroll [pageScrollDuration]="500" href="{{item.id}}">{{item.name}}</a>
                    </div>
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
            margin: 0 auto;
            padding: 0;
            text-align:center;
            background: white;
            white-space:nowrap;
            overflow-x: auto;
            overflow-y: hidden;
        }
        li.navbar-submenu {
            display: inline-block;
            width: 150px;
            padding:15px 10px 15px 10px;
            border-style: solid;
            border-color: #dddddd;
            border-width: 0px 1px 0px 0px;
        }        
        li.navbar-submenu-last {
            display: inline-block;
            border: none;
        }
        a.navbar-submenu {
            text-decoration: none;
            font-size: 15px;
        }
    `]
})
export class SubNavComponent implements OnInit {

    @Output() sectionPosition = new EventEmitter();
    
    subNavItems: { id: string, name: string, classes: string }[] = [{ "id": '#creditedge', "name": 'CreditEdge', "classes": 'navbar-submenu' },
                    { "id": '#creditview', "name": 'CreditView 2', "classes": 'navbar-submenu' },
                    { "id": '#sav', "name": 'SAV', "classes": 'navbar-submenu navbar-submenu-last' }
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
                    { "id": '#creditedge', "name": 'CreditEdge', "classes": 'navbar-submenu' },
                    { "id": '#creditview', "name": 'CreditView 2', "classes": 'navbar-submenu' },
                    { "id": '#sav', "name": 'SAV', "classes": 'navbar-submenu navbar-submenu-last' }
                ];
            }
            else if (this.currentRoute === '/ers')
            {
                this.subNavItems = [
                    { "id": '#creditedge', "name": 'CMM', "classes": 'navbar-submenu' },
                    { "id": '#sav', "name": 'Scenario Analyzer', "classes": 'navbar-submenu navbar-submenu-last' }
                ];
            }
            else if (this.currentRoute === '/sav-perspective')// || this.currentRoute === '/ce-perspective' || this.currentRoute === '/capital-structure-perspective')
            {
                this.subNavItems = [
                    { "id": '#twenty-sixteen', "name": '2016', "classes": 'navbar-submenu navbar-submenu-last' }
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