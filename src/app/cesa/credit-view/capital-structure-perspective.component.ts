import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'

@Component({
    selector: 'sav',
    template: `
        <div class="container-fluid">
            <div class="row">
                <div class="container section-header">
                    <div>
                        <div class="circular">CESA</div>
                        <h2 class="sav-content" align="center">Capital Structure</h2>
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
                                    <h4 class="product-header">February - July 2017</h4>
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

                                <div class="container-mp m-t-70">
                                    <!-- DEFECTS -->
                                    <div class="row-m m-b-70 two-col-wrap">
                                        <div class="col-xs-12 col-sm-6 col-md-6">
                                            <div class="bookmark text-uppercase">DEFECTS</div>
                                            <h2 class="small-header m-t-5 m-b-20">Fix All The Bugs.<br>Or At Least 43 Of Them.</h2>
                                            <figure class="hidden-sm hidden-md hidden-lg m-t-30 m-b-30">
                                                <span *ngFor="let i of arr(numDefects)">
                                                    <img src="images/perspective-images/ic_bug_report_black_48px.svg">
                                                </span>
                                            </figure>
                                            <p>
                                                When I started working in the Stark Team, they were about 60% done the Capital Structure product, which will be part of the new Credit View 2 website. A lot of the work left had to deal with improving the user interface and experience.
                                            </p>
                                            <p>
                                                The defects ranged from <b>API logic</b> to <b>cosmetic</b> to <b>functionality</b> errors. These fixes involved changes to the Neptune framework, Capital Structure repository, Host repository, and Issuer Summary repository.
                                            </p>
                                        </div>
                                        <div class="col-xs-12 col-sm-6 col-md-6 hidden-xs">
                                            <figure>
                                                <!--<img src="https://static-www.elastic.co/assets/blt517c496335500d02/rocket.svg?q=403" alt="SPEED" class="img-responsive hidden-xs center-block">-->
                                                <span *ngFor="let i of arr(numDefects)">
                                                    <img src="images/perspective-images/ic_bug_report_black_48px.svg">
                                                </span>
                                            </figure>
                                        </div>
                                    </div>

                                    <!-- Web Analytics -->
                                    <div class="row-m m-b-70 two-col-wrap">
                                        <div class="col-xs-12 col-sm-6 col-md-6 hidden-xs">
                                            <figure>
                                                <img src="images/perspective-images/CapitalStructure/webtrends.png" class="img-responsive center-block shadow">
                                            </figure>
                                        </div>
                                        <div class="col-xs-12 col-sm-6 col-md-6">
                                            <div class="bookmark text-uppercase">Web Analytics</div>
                                            <h2 class="small-header m-t-5 m-b-20">Integrate WebTrends.</h2>
                                            <figure class="hidden-sm hidden-md hidden-lg m-t-30 m-b-30">
                                                <img src="images/perspective-images/CapitalStructure/webtrends.png" class="img-responsive center-block shadow">
                                            </figure>
                                            <p>
                                                One small project involved implementing WebTrends tagging into all three Capital Structure react pages: Debt Amortization, Debt Details, and Group Structure.
                                            </p>
                                            <p>
                                                Now whenever a user loads the page in a browser or performs any action on the page, the browser sends a request to the server to load a gif image. The server receives the request and logs the parameters included in the query string of the gif image. 
                                            </p>
                                        </div>
                                    </div>

                                    <!-- API -->
                                    <div class="row-m m-b-70 two-col-wrap">
                                        <div class="col-xs-12 col-sm-6 col-md-6">
                                            <div class="bookmark text-uppercase">API</div>
                                            <h2 class="small-header m-t-5 m-b-20">Oh And Add Swagger too.</h2>
                                            <figure class="hidden-sm hidden-md hidden-lg m-t-30 m-b-30">
                                                <img src="images/perspective-images/CapitalStructure/swagger.png" class="img-responsive center-block shadow">
                                            </figure>
                                            <p>
                                                Another quick task I completed was adding swagger to the Capital Structure Service. This serves as a portal for developers and QA to see what API calls are available. The calls can also be ran from here to test the output.
                                            </p>
                                        </div>
                                        <div class="col-xs-12 col-sm-6 col-md-6 hidden-xs">
                                            <figure>
                                                <img src="images/perspective-images/CapitalStructure/swagger.png" class="img-responsive center-block shadow">
                                            </figure>
                                        </div>
                                    </div>

                                    <!-- Tearsheets -->
                                    <div class="row-m m-b-70 two-col-wrap">
                                        <div class="col-xs-12 col-sm-6 col-md-6 hidden-xs">
                                            <figure>
                                                <img src="images/perspective-images/CapitalStructure/tearsheet.png" class="img-responsive center-block shadow">
                                            </figure>
                                        </div>
                                        <div class="col-xs-12 col-sm-6 col-md-6">
                                            <div class="bookmark text-uppercase">Web Services / API</div>
                                            <h2 class="small-header m-t-5 m-b-20">Implement Tearsheets.</h2>
                                            <figure class="hidden-sm hidden-md hidden-lg m-t-30 m-b-30">
                                                <img src="images/perspective-images/CapitalStructure/tearsheet.png" class="img-responsive center-block shadow">
                                            </figure>
                                            <p>
                                                Towards the end of my rotation, I worked on implementing webservices that were required for Tearsheets, which is a two page snapshot of information you can find on CV2 for a specific corporation, sovereign, or bank.
                                            </p>
                                            <p>
                                                This involved getting comfortable with querying in MongoDB, sifting through other streams' code, implementing the API logic (C#), and then adding those services to the React projects. 
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
export class CapitalStructurePerspectiveComponent {
    mainTechIcons: string[] = ['icon-database-alt2', 'icon-csharp', 'icon-javascript', 'icon-angular', 'icon-nodejs', 'icon-mssql', 'icon-oracle'];
    augTwentySixteenTechIcons: string[] =  ['icon-database-alt2', 'icon-csharp', 'icon-javascript', 'icon-angular', 'icon-nodejs', 'icon-mssql', 'icon-oracle'];

    public react = '../../../images/tech/react.svg';
    public redux = '../../../images/tech/redux.svg';
    public nodejs = '../../../images/tech/nodejs.svg';
    public mongodb = '../../../images/tech/mongodb.svg';
    public d3 = '../../../images/tech/d3-2.svg';
    public hapi = '../../../images/tech/hapi.svg';
    public gulp = '../../../images/tech/gulp.svg';

    public techList =  [
        {title: "React", img: this.react}, 
        {title: "Redux", img: this.redux},
        {title: "Node.js", img: this.nodejs},
        {title: "MongoDB", img: this.mongodb},
        {title: "d3", img: this.d3},
        {title: "hapi", img: this.hapi}, 
        {title: "gulp", img: this.gulp}
    ];

    public langList = [
        {title: "JavaScript", amount: "a whole lot", class: "js-color percent50"},
        {title: "CSS", amount: "a good dose", class: "css-color percent25"},
        {title: "C#", amount: "a smidge", class: "csharp-color percent10"},
        {title: "HTML", amount: "a tad", class: "html-color percent5"},
    ];

    arr = Array; //Array type captured in a variable
    numDefects:number = 43;
}