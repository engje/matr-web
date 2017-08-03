import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
    selector: 'sav',
    template: `
        <div class="container-fluid">
            <div class="row">
                <div class="container section-header">
                    <div>
                        <div class="circular">CESA</div>
                        <h2 class="sav-content" align="center">Credit Edge</h2>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="container section-content">
                    <div id="twenty-sixteen" class="product">
                        <div class="circular product-circular align-mid ma-blue-bg">2016</div>
                        <div class="product-container">
                            <div class="row row-product-info">
                                <div class="product-header">
                                    <h4 class="product-header">August - February 2017</h4>
                                    <h2 class="product-header">Jessica Eng</h2>
                                </div>
                            </div>
                            <div class="row">
                                <div class="m-t-20">
                                    <div class="overall-summary overall-summary-bottomless">
                                        <div class="stats-switcher-viewport js-stats-switcher-viewport is-revealing-lang-stats">
                                            <div class="stats-switcher-wrapper">
                                                <div class="repository-lang-stats">
                                                <ol class="repository-lang-stats-numbers">
                                                    <li *ngFor="let lang of langList">
                                                        <span class="color-block language-color {{lang.class}}"></span>
                                                        <span class="lang">{{lang.title}}</span>
                                                        <span class="percent">{{lang.amount}}</span>
                                                    </li>
                                                </ol>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="repository-lang-stats-graph js-toggle-lang-stats">
                                        <span *ngFor="let lang of langList" class="language-color {{lang.class}}">{{lang.title}}</span>
                                    </div>

                                    <div class="logos">
                                        <div class="grid">
                                        <div class="grid-col" *ngFor="let tech of techList">
                                            <div class="logo">
                                                <div class="logo-wrapper">
                                                    <div class="logo-container">
                                                    <img class="logo-img" src="{{tech.img}}">
                                                    </div>
                                                    <span class="logo-name">{{tech.title}}</span>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Help Portal -->
                                <div class="m-t-30 m-b-100">
                                    <div class="type-task text-uppercase">Front-end development</div>
                                    <h2 class="small-header m-t-5 m-b-20">Help Portal.</h2>
                                    <div class="row">
                                        <div class="col-xs-12 col-sm-6 col-md-4 m-t-40">
                                            <figure class="m-b-40"> 
                                                <a href="https://www.creditedge.com/">
                                                    <img src="images/perspective-images/CreditEdge/helppage.png" class="img-responsive ce-img shadow">
                                                </a>
                                            </figure>
                                        </div>
                                    
                                        <div class="col-xs-12 col-sm-6 col-md-4 m-t-40">
                                            <figure class="m-b-40"> 
                                                <a href="https://www.creditedge.com/">
                                                    <img src="images/perspective-images/CreditEdge/helppage2.png" class="img-responsive ce-img shadow">
                                                </a>
                                            </figure>
                                        </div>
                                    
                                        <div class="col-xs-12 col-sm-6 col-md-4 m-t-40">
                                            <figure class="m-b-40"> 
                                                <a href="https://www.creditedge.com/">
                                                    <img src="images/perspective-images/CreditEdge/helppage3.png" class="img-responsive ce-img shadow">
                                                </a>
                                            </figure>
                                        </div>
                                    </div>
                                    <p class="m-t-15">My first project was implementing the new help portal using ZenDesk. Most of the work involved creating multiple html/css templates. I did it in a way so that strategists could update content directly through the admin portal, without having to ask developers to change the code.</p>
                                </div>

                                <div class="container-mp m-t-70">
                                    <!-- EDF Calculator API -->
                                    <div class="row-m m-b-100 two-col-wrap">
                                        <div class="col-xs-12 col-sm-6 col-md-6 hidden-xs">
                                            <figure>
                                                <a href="https://www.creditedge.com/help/api">
                                                    <img src="images/perspective-images/CreditEdge/api.png" class="img-responsive center-block shadow">
                                                </a>
                                            </figure>
                                        </div>
                                        <div class="col-xs-12 col-sm-6 col-md-6">
                                            <div class="type-task text-uppercase">API</div>
                                            <h2 class="small-header m-t-5 m-b-20">EDF Calculator and Subscription.</h2>
                                            <figure class="hidden-sm hidden-md hidden-lg m-t-30 m-b-30">
                                                <a href="https://www.creditedge.com/help/api">
                                                    <img src="images/perspective-images/CreditEdge/api.png" class="img-responsive center-block shadow">
                                                </a>
                                            </figure>
                                            <p>
                                                Added subscription check to all components so users can only access data they paid for. Added more calculation modes, returned datapoints, the ability to do batch calculations by PIDs and/or Portfolio ID in the EDF Calculator. This was mostly C# and SQL work.
                                            </p>
                                        </div>
                                    </div>

                                    <!-- Full stack CE.com -->
                                    <div class="row-m m-b-100 two-col-wrap">
                                        <div class="col-xs-12 col-sm-6 col-md-6">
                                            <div class="type-task text-uppercase">Full stack</div>
                                            <h2 class="small-header m-t-5 m-b-20">CreditEdge Website.</h2>
                                            <figure class="hidden-sm hidden-md hidden-lg m-t-30 m-b-30">
                                                <a href="https://www.creditedge.com/">
                                                    <img src="images/perspective-images/CreditEdge/screener.png" class="img-responsive center-block shadow">
                                                </a>
                                            </figure>
                                            <p>
                                                Contributed to Portfolios, Chart Builder, Screener, Report Builder, and Movers pages. One big project was changing the logic for EDF Implied Rating. This involved touching almost all of the pages/stored procedure logic in the CreditEdge platform. This work mostly involved C# ASP.net and Angular/Backbone. I also created tables, stored procedures, and functions in SQL Server as needed.
                                            </p>
                                        </div>
                                        <div class="col-xs-12 col-sm-6 col-md-6 hidden-xs">
                                            <figure>
                                                <a href="https://www.creditedge.com/">
                                                    <img src="images/perspective-images/CreditEdge/screener.png" class="img-responsive center-block shadow">
                                                </a>
                                            </figure>
                                        </div>
                                    </div>

                                    <!-- DEFECTS -->
                                    <div class="row-m m-b-100 two-col-wrap">
                                        <div class="col-xs-12 col-sm-6 col-md-6 hidden-xs">
                                            <figure>
                                                <span *ngFor="let i of arr(numDefects)">
                                                    <img src="images/perspective-images/ic_bug_report_black_48px.svg">
                                                </span>
                                            </figure>
                                        </div>
                                        <div class="col-xs-12 col-sm-6 col-md-6">
                                            <div class="type-task text-uppercase">DEFECTS</div>
                                            <h2 class="small-header m-t-5 m-b-20">Fix All The Bugs.<br>Or At Least 73 Of Them.</h2>
                                            <figure class="hidden-sm hidden-md hidden-lg m-t-30 m-b-30">
                                                <span *ngFor="let i of arr(numDefects)">
                                                    <img src="images/perspective-images/ic_bug_report_black_48px.svg">
                                                </span>
                                            </figure>
                                            <p>
                                                The defects ranged from <b>API logic</b> to <b>cosmetic</b> to <b>functionality</b> to <b> SQL stored procedures </b>errors. I also helped with daily T2 CreditEdge Support Cases, which usually involved hotfix pushes.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    styles: [`
        div.regular-image {
            text-align: center;
        }
        img.regular-image {
            margin: 0 auto;
        }
    `]
})
export class CePerspectiveComponent {
    public asp = '../../../images/tech/asplogo-square.png';
    public sqlserver = '../../../images/tech/microsoft-sql-server.svg';
    public angular = '../../../images/tech/angular-icon.svg';
    public backbone = '../../../images/tech/backbone-icon.svg';

    public techList =  [
        {title: "ASP.net MVC", img: this.asp},
        {title: "SQL Server", img: this.sqlserver}, 
        {title: "Angular", img: this.angular},
        {title: "Backbone.js", img: this.backbone}
    ];

    public langList = [
        {title: "C#", amount: "a whole lot", class: "js-color percent50"},
        {title: "SQL", amount: "a good dose", class: "css-color percent25"},
        {title: "Javascript", amount: "a smidge", class: "csharp-color percent10"},
        {title: "HTML", amount: "a tad", class: "html-color percent10"},
    ];

    arr = Array; //Array type captured in a variable
    numDefects:number = 73;
}