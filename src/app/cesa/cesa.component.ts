import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

// import fade in animation
import { fadeInAnimation } from '../_animations/route-animation';



declare var jquery:any;
declare var $ :any;

@Component({
    selector: 'cesa',
    template: `
        <div class="container-fluid">
            <div class="row">
                <div class="container section-header">
                    <div>
                        <div class="circular">CESA</div>
                        <h2 class="cesa-content" align="center">Content, Economics & Structured Analytics Division</h2>
                        <h4 class="cesa-content" align="center">Reliable delivery of our top in class economic research and valuations to serve the evolving finance industry.</h4>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-1 hidden-md hidden-sm hidden-xs">
                    <div class="left-nav-menu">
                        <ul class="left-nav-menu">
                            <li class="zoomimg active"><a class="left-nav-menu" [routerLink]="['/cesa']" routerLinkActive="active"  [routerLinkActiveOptions]= "{exact: true}" fragment="main-nav" href="#main-nav">Top</a></li>
                            <li class="zoomimg"><a class="left-nav-menu" [routerLink]="['/cesa']" routerLinkActive="active"  [routerLinkActiveOptions]= "{exact: true}" fragment="creditedge" href="#creditedge">CreditEdge</a></li>
                            <li class="zoomimg"><a class="left-nav-menu" [routerLink]="['/cesa']" routerLinkActive="active"  [routerLinkActiveOptions]= "{exact: true}" fragment="creditview" href="#creditview">CreditView 2</a></li>
                            <li class="zoomimg"><a class="left-nav-menu" [routerLink]="['/cesa']" routerLinkActive="active"  [routerLinkActiveOptions]= "{exact: true}" fragment="sav" href="#sav">SAV</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-10">
                    <div class="cesa-content container-fluid">
                        <div id="creditedge" class="product">
                            <div class="circular product-circular align-mid">CE</div>
                            <div class="product-container">
                                <div class="row row-product-info">
                                    <div class="col-lg-6 col-md-3">
                                        <div class="product-header">
                                            <h4 class="product-header">A Powerful Approach to Measuring Credit Risk.</h4>
                                            <h2 class="product-header">CreditEdge</h2>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <h4 class="product-header">CreditEdge gives users the ability to leverage the industry’s most accurate PD model through cutting-edge analytics. Users can now access our innovative model through fast and reliable platforms.</h4>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-2 col-md-12 col-sm-4 col-sm-12 col-sm-12">
                                        <div class="btn" routerLink="/cesa">Perspectives</div>
                                    </div>
                                    <div class="col-lg-2 col-md-12 col-sm-4 col-sm-12 col-sm-12">
                                        <div class="btn" routerLink="/cesa">Learn More</div>
                                    </div>
                                    <div class="col-lg-2 col-md-12 col-sm-4 col-sm-12 col-sm-12">
                                        <div class="btn" routerLink="/cesa">Download Brochure</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="creditview" class="product">
                            <div class="circular product-circular align-mid">CV2</div>
                            <div class="product-container">
                                <div class="row row-product-info">
                                    <div class="col-lg-6 col-md-3">
                                        <div class="product-header">
                                            <h4 class="product-header">A Powerful Approach to Measuring Credit Risk.</h4>
                                            <h2 class="product-header">CreditView 2</h2>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <h4 class="product-header">CreditEdge gives users the ability to leverage the industry’s most accurate PD model through cutting-edge analytics. Users can now access our innovative model through fast and reliable platforms.</h4>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="sub-product">
                                            <div class="sub-product-header">
                                                <h4 class="sub-product-header" align="center">CapitalStructure</h4>
                                            </div>
                                            <div class="sub-product-content"> 
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet lacinia purus. Nulla facilisi. Aliquam id semper quam.                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet lacinia purus. Nulla facilisi. Aliquam id semper quam.
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet lacinia purus. Nulla facilisi. Aliquam id semper quam.
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet lacinia purus. Nulla facilisi. Aliquam id semper quam.
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet lacinia purus. Nulla facilisi. Aliquam id semper quam.
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet lacinia purus. Nulla facilisi. Aliquam id semper quam.
                                                <div class="row">
                                                    <div class="col-lg-4"></div>
                                                    <div class="col-lg-4">
                                                        <div class="btn" onclick="location.href='http://ci2.moodys.com:8080/credit-ratings/Tullow-Oil-plc-credit-rating-820489619';">Learn More</div>
                                                        </div>
                                                    <div class="col-lg-4"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="sub-product">
                                            <div class="sub-product-header">
                                                <h4 class="sub-product-header" align="center">IssuerView</h4>
                                            </div>
                                            <div class="sub-product-content"> 
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet lacinia purus. Nulla facilisi. Aliquam id semper quam.                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet lacinia purus. Nulla facilisi. Aliquam id semper quam.
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet lacinia purus. Nulla facilisi. Aliquam id semper quam.
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet lacinia purus. Nulla facilisi. Aliquam id semper quam.
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet lacinia purus. Nulla facilisi. Aliquam id semper quam.
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet lacinia purus. Nulla facilisi. Aliquam id semper quam.
                                                <div class="row">
                                                    <div class="col-lg-4"></div>
                                                    <div class="col-lg-4">
                                                        <div class="btn" onclick="location.href='http://ci2.moodys.com:8080/credit-ratings/Tullow-Oil-plc-credit-rating-820489619';">Learn More</div>
                                                        </div>
                                                    <div class="col-lg-4"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="sav" class="product">
                            <div class="circular product-circular align-mid">SAV</div>
                            <div class="product-container">
                                <div class="row row-product-info">
                                    <div class="col-lg-6 col-md-3">
                                        <div class="product-header">
                                            <h4 class="product-header">Structured Analytics & Valuation</h4>
                                            <h2 class="product-header">SAV</h2>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <h4 class="product-header">CreditEdge gives users the ability to leverage the industry’s most accurate PD model through cutting-edge analytics. Users can now access our innovative model through fast and reliable platforms.</h4>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-2 col-md-12 col-sm-4 col-sm-12 col-sm-12">
                                        <div class="btn" routerLink="/cesa">Perspectives</div>
                                    </div>
                                    <div class="col-lg-2 col-md-12 col-sm-4 col-sm-12 col-sm-12">
                                        <div class="btn" routerLink="/cesa">Learn More</div>
                                    </div>
                                    <div class="col-lg-2 col-md-12 col-sm-4 col-sm-12 col-sm-12">
                                        <div class="btn" routerLink="/cesa">Download Brochure</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-1">
                </div>
            </div>
        </div>
    `,
    animations: [fadeInAnimation],
    host: { '[@fadeInAnimation]': '' },
    styles: [`
        div.cesa-content {
            padding-top:50px;
        }
        h2.cesa-content {
            max-width:600px;
            margin:0 auto;
            font-family: "Open Sans";
            margin-bottom:20px;
            font-weight:300;
            -webkit-font-smoothing: antialiased;
        }
        h4.cesa-content {
            font-family: "Open Sans";
            margin:0 auto;
            max-width:600px;
            font-weight:300;
            -webkit-font-smoothing: antialiased;
        }
        div.left-nav-menu {
            position: fixed;
            top:50%;
            transform: translateY(-50%);
        }
        ul.left-nav-menu {
            font-size: 16px;
            line-height: 50px;
            padding: 0;
            list-style-type: none;
        }
        .zoomimg {
            transition: all .2s ease;
        }
        .zoomimg:hover {
            -webkit-transform: scale(1.2);
        }
        a.left-nav-menu {
            text-decoration: none; 
            font-family = "Open Sans";
        }
        div.product {
            background-color:white;
            margin-bottom:50px;
            border-radius: 10px;
            position: relative;
        }
        div.product-container {
            padding: 75px;
        }
        h2.product-header {
            font-family: "Open Sans";
        }
        h4.product-header {
            font-family: "Open Sans";
        }
        a.active {
            color: black !important;
        }
        .btn {
            width: 160px;
            margin-bottom:5px;
            margin-top:10px;
        }
        div.sub-product {
            border:solid #0066B3 1px;
            border-radius: 5px;
            margin-top:10px;
            margin-bottom:20px;
        }
        div.sub-product-header {
            background-color:#0066B3;
            min-height:50px;
            width:100%;
            display:table;
        }
        h4.sub-product-header {
            margin: 0 auto;
            color:white;
            display:table-cell;
            vertical-align:middle;
        }
        div.sub-product-content {
            word-wrap: break-word;
            padding:10px;
        }
        div.row-product-info {
            margin-bottom:20px;
        }
    `]
})
export class CesaComponent {
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