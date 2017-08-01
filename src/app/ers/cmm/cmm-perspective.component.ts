import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
    selector: 'cmm',
    templateUrl: './cmm-perspective.component.html',
    styles: [`
        div.regular-image {
            text-align: center;
        }

        img.regular-image {
            margin: 0 auto;
        }

        div.work-description {
            margin-top:25px;
            margin-bottom: 25px;
        }
    `]
})
export class CmmPerspectiveComponent {
    mainTechIcons: string[] = ['icon-database-alt2', 'icon-csharp', 'icon-javascript', 'icon-angular', 'icon-nodejs', 'icon-redis','icon-oracle'];
    augTwentySixteenTechIcons: string[] =  ['icon-database-alt2', 'icon-csharp', 'icon-javascript', 'icon-angular', 'icon-nodejs', 'icon-redis','icon-oracle'];
}