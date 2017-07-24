import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
    selector: 'cesa',
    template: `
        <div class="container-fluid">
            <div class="row">
                <div class="container section-header">
                    <div>
                        <div class="circular">CESA</div>
                        <h2 class="section-content" align="center">Content, Economics & Structured Analytics</h2>
                        <h4 class="section-content" align="center">Reliable delivery of our top in class economic research and valuations to serve the evolving finance industry.</h4>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="container section-content">
                    <div id="creditedge" class="product">
                        <div class="circular product-circular align-mid">CE</div>
                        <div class="product-container">
                            <div class="row row-product-info">
                                <div class="col-lg-6 col-md-3">
                                    <div class="product-header">
                                        <p class="product-header">A Powerful Approach to Measuring Credit Risk.</p>
                                        <h2 class="product-header">CreditEdge</h2>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="product-content">
                                        <p class="product-content">CreditEdge gives users the ability to leverage the industry’s most accurate PD model through cutting-edge analytics. Users can now access our innovative model through fast and reliable platforms.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-2 col-md-12 col-sm-4 col-sm-12 col-sm-12">
                                    <div class="btn" routerLink="/cesa">Perspectives</div>
                                </div>
                                <div class="col-lg-2 col-md-12 col-sm-4 col-sm-12 col-sm-12">
                                    <div class="btn btn-inverted" routerLink="/cesa">Learn More</div>
                                </div>
                                <div class="col-lg-2 col-md-12 col-sm-4 col-sm-12 col-sm-12">
                                    <div class="btn btn-inverted" routerLink="/cesa">Download Brochure</div>
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
                                </div>
                            </div>
                            <div class="row">
                                <div class="sub-product">
                                    <div class="container-fluid">
                                        <div class="row">
                                            <div class="col-lg-6">
                                                <h4 class="sub-product-header">Capital Structure</h4>
                                            </div>
                                            <div class="col-lg-6">
                                                <h4 class="sub-product-header">Issuer View</h4>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-6">
                                                <div class=""> 
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet lacinia purus. Nulla facilisi. Aliquam id semper quam.
                                                    <div class="row">
                                                        <div class="col-lg-4"></div>
                                                        <div class="col-lg-4">
                                                            <div class="btn btn-inverted" onclick="location.href='http://ci2.moodys.com:8080/credit-ratings/Tullow-Oil-plc-credit-rating-820489619';">Learn More</div>
                                                            </div>
                                                        <div class="col-lg-4"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class=""> 
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet lacinia purus. Nulla facilisi. Aliquam id semper quam.   
                                                    <div class="row">
                                                        <div class="col-lg-4"></div>
                                                        <div class="col-lg-4">
                                                            <div class="btn btn-inverted" onclick="location.href='http://ci2.moodys.com:8080/credit-ratings/Tullow-Oil-plc-credit-rating-820489619';">Learn More</div>
                                                            </div>
                                                        <div class="col-lg-4"></div>
                                                    </div>
                                                </div>
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
                                    <p class="product-content">CreditEdge gives users the ability to leverage the industry’s most accurate PD model through cutting-edge analytics. Users can now access our innovative model through fast and reliable platforms.</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-2 col-md-12 col-sm-4 col-sm-12 col-sm-12">
                                    <div class="btn" routerLink="/sav-perspective">Perspectives</div>
                                </div>
                                <div class="col-lg-2 col-md-12 col-sm-4 col-sm-12 col-sm-12">
                                    <div class="btn  btn-inverted" routerLink="/cesa">Learn More</div>
                                </div>
                                <div class="col-lg-2 col-md-12 col-sm-4 col-sm-12 col-sm-12">
                                    <div class="btn btn-inverted" routerLink="/cesa">Download Brochure</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    styles: [`
        .btn {
            width: 160px;
            margin-bottom:5px;
            margin-top:10px;
        }
    `]
})
export class CesaComponent {
}