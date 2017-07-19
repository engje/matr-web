import { Component } from '@angular/core';

// import fade in animation
import { fadeInAnimation } from '../_animations/route-animation';

@Component({
    selector: 'ers',
    template: `
        <div class="container-fluid">
            <div class="row">
                <div class="container section-header">
                    <div>
                        <div class="circular">ERS</div>
                        <h2 class="ers-content" align="center">Enterprise Risk Solutions</h2>
                        <h4 class="ers-content" align="center">Reliable delivery of our top in class economic research and valuations to serve the evolving finance industry.</h4>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-1 hidden-md hidden-sm hidden-xs">
                    <div class="left-nav-menu">
                        <ul class="left-nav-menu">
                            <li class="zoomimg active"><a class="left-nav-menu" pageScroll [pageScrollDuration]="500" href="#main-nav">Top</a></li>
                            <li class="zoomimg"><a class="left-nav-menu" pageScroll [pageScrollDuration]="500" href="#creditedge">CreditEdge</a></li>
                            <li class="zoomimg"><a class="left-nav-menu" pageScroll [pageScrollDuration]="500" href="#creditview">CreditView 2</a></li>
                            <li class="zoomimg"><a class="left-nav-menu" pageScroll [pageScrollDuration]="500" href="#sav">SAV</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-10">
                    <div class="ers-content container-fluid">
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
                                        <div class="btn" routerLink="/ers">Perspectives</div>
                                    </div>
                                    <div class="col-lg-2 col-md-12 col-sm-4 col-sm-12 col-sm-12">
                                        <div class="btn" routerLink="/ers">Learn More</div>
                                    </div>
                                    <div class="col-lg-2 col-md-12 col-sm-4 col-sm-12 col-sm-12">
                                        <div class="btn" routerLink="/ers">Download Brochure</div>
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
                                        <div class="btn" routerLink="/ers">Perspectives</div>
                                    </div>
                                    <div class="col-lg-2 col-md-12 col-sm-4 col-sm-12 col-sm-12">
                                        <div class="btn" routerLink="/ers">Learn More</div>
                                    </div>
                                    <div class="col-lg-2 col-md-12 col-sm-4 col-sm-12 col-sm-12">
                                        <div class="btn" routerLink="/ers">Download Brochure</div>
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
        div.ers-content {
            margin-top: 70px;
        }
        h2.ers-content {
            max-width:600px;
            margin:0 auto;
            font-family: "Open Sans";
            margin-bottom:20px;
            font-weight:300;
            -webkit-font-smoothing: antialiased;
        }
        h4.ers-content {
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
        a.active {
            color: black !important;
        }
        .btn {
            width: 160px;
            margin-bottom:5px;
            margin-top:10px;
        }
    `]
})
export class ErsComponent {
    
}