import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
    selector: 'sav',
    template: `
        <div class="container-fluid">
            <div class="hidden-md hidden-sm hidden-xs">
                <div class="left-nav-menu">
                    <ul class="left-nav-menu">
                        <li class="zoomimg"><a class="left-nav-menu" pageScroll [pageScrollDuration]="500" href="#twenty-sixteen">2016</a></li>
                        <li><a class="left-nav-menu left-nav-menu-disabled" pageScroll [pageScrollDuration]="500">2017</a></li>
                    </ul>
                </div>
            </div>  
            <div class="row">
                <div class="container section-header">
                    <div>
                        <div class="circular">SAV</div>
                        <h2 class="sav-content" align="center">Structured Analytics & Valuation</h2>
                        <div class="tech-icon">
                            <i class="{{techIcon}} tech-icon" *ngFor="let techIcon of mainTechIcons"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="container section-content">
                    <div id="twenty-sixteen" class="product">
                        <div class="circular product-circular align-mid">2016</div>
                        <div class="product-container">
                            <div class="row row-product-info">
                                <div class="product-header">
                                    <h4 class="product-header">August - January 2016</h4>
                                    <h2 class="product-header">Sujay Bandarpalle</h2>
                                </div>
                            </div>
                            <div class="row">
                                <div class="sub-tech-icon">
                                    <h4>Technologies Used</h4>
                                    <i class="{{techIcon}} sub-tech-icon" *ngFor="let techIcon of augTwentySixteenTechIcons"></i>
                                </div>
                            </div>
                            <div class="row">
                                <div class="sub-tech-icon">
                                    <h4>Products</h4>
                                    <h5 class="product-header">LoanDQ</h5>
                                    <p class="product-info">Internal program used by employees who use financial data as well as software engineers. Created a new feature which combined various functionalities to be used by financial engineers, utilizing a clean and modern UI.</p>
                                    <p class="product-info">Implemented using WinForms, C#, and MS Sql Server.</p>
                                    
                                    <h5 class="product-header">Edgar Loan and Lease XML Parser</h5>
                                    <p class="product-info">Internal program which runs on a task schedule and retrieves data from the Edgar (SEC) Api. The program accepts a text file and isolates the XML portion to parse it and push the data to the database.</p>
                                    <p class="product-info">Implemented using WPF, C#, and MS Sql Server</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="sub-tech-icon">
                                    <h4>Other Tasks</h4>
                                    <h5 class="product-header">Database Maintenance</h5>
                                    <p class="product-info">Deleted duplicate entries in table, and worked on efficiency of stored procedures.</p>
                                    <h5 class="product-header">Bug Fixing</h5>
                                    <p class="product-info">Fixed issues with internal programs such as LoanDQ and DealDQ.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    styles: [`
    `]
})
export class SavPerspectiveComponent {
    mainTechIcons: string[] = ['icon-database-alt2', 'icon-csharp', 'icon-javascript', 'icon-angular', 'icon-nodejs', 'icon-mssql', 'icon-oracle'];
    augTwentySixteenTechIcons: string[] =  ['icon-database-alt2', 'icon-csharp', 'icon-javascript', 'icon-angular', 'icon-nodejs', 'icon-mssql', 'icon-oracle'];
}