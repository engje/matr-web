import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

declare var jquery:any;
declare var $ :any;

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
                            <i class="icon-database-alt2 tech-icon"></i>
                            <i class="icon-csharp tech-icon"></i>
                            <i class="icon-javascript tech-icon"></i>
                            <i class="icon-angular tech-icon"></i>
                            <i class="icon-nodejs tech-icon"></i>
                            <i class="icon-mssql tech-icon"></i>
                            <i class="icon-oracle tech-icon"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="container cesa-content">
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
                                    <i class="icon-database-alt2 sub-tech-icon"></i>
                                    <i class="icon-csharp sub-tech-icon"></i>
                                    <i class="icon-javascript sub-tech-icon"></i>
                                    <i class="icon-angular sub-tech-icon"></i>
                                    <i class="icon-nodejs sub-tech-icon"></i>
                                    <i class="icon-mssql sub-tech-icon"></i>
                                    <i class="icon-oracle sub-tech-icon"></i>
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
        div.tech-icon {
            margin-top: 10px;
            text-align: center;
        }
        i.tech-icon {
            font-size: 40px;
            color: #0066B3;
            margin: 10px;
        }
        div.sub-tech-icon {
            margin-top: 10px;
        }
        i.sub-tech-icon {
            font-size: 35px;
            color: #0066B3;
            margin: 0px 10px 0px 0px;
        }
        div.cesa-content {
            margin-top: 70px;
            padding: 0px;
        }
    `]
})
export class SavPerspectiveComponent {
    constructor(router: Router) {
        router.events.subscribe(s => {
          if (s instanceof NavigationEnd) {
            const tree = router.parseUrl(router.url);
            if (tree.fragment) {
              const element = document.querySelector("#" + tree.fragment);
              if (element) { element.scrollIntoView(element); }
            }
          }
        });
    }
}