import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
    selector: 'sa',
    templateUrl: './sa-perspective.component.html',
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
export class SaPerspectiveComponent {
    mainTechIcons: string[] = ['icon-javascript', 'icon-angular', 'icon-nodejs','icon-hadoop','icon-java','icon-gradle','icon-apache'];
    augTwentySixteenTechIcons: string[] =  ['icon-javascript', 'icon-angular', 'icon-nodejs','icon-hadoop','icon-java','icon-gradle','icon-apache'];
}