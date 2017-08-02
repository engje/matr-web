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
                                <div class="col-lg-6 col-md-3 vertical-middle">
                                    <div class="product-header product-padding">
                                        <p>A Powerful Approach to Measuring Credit Risk.</p>
                                        <h2>CreditEdge</h2>
                                        <div class="btn" routerLink="/ce-perspective">Perspectives</div>
                                        <div class="btn btn-inverted" onclick="window.open('https://www.creditedge.com/')">Check It Out</div>
                                    </div>
                                </div>
                                <div class="col-lg-6 vertical-middle">
                                    <div class="product-content product-padding">
                                        <p>CreditEdge gives users the ability to leverage the industry’s most accurate PD model through cutting-edge analytics. Users can now access our innovative model through fast and reliable platforms.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                            </div>
                        </div>
                    </div>
                    <div id="creditview" class="product">
                        <div class="circular product-circular align-mid">CV2</div>
                        <div class="product-container">
                            <div class="row row-product-info">
                                <div class="col-lg-6 col-md-3">
                                    <div class="product-header-title">
                                        <h2>CreditView 2</h2>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                </div>
                            </div>
                            <div class="row">
                                <div class="container-fluid">
                                    <div class="row">
                                        <div class="col-lg-6 sub-product">
                                            <h4 class="sub-product-header">Capital Structure</h4>
                                            <div> 
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet lacinia purus. Nulla facilisi. Aliquam id semper quam.
                                                <div class="row horizontal-middle">
                                                    <div class="btn" routerLink="/capital-structure-perspective">Perspectives</div>
                                                    <div class="btn btn-inverted" onclick="location.href='http://ci2.moodys.com:8080/credit-ratings/Tullow-Oil-plc-credit-rating-820489619';">Check It Out</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 sub-product">
                                            <h4 class="sub-product-header">Issuer View</h4>
                                            <div> 
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet lacinia purus. Nulla facilisi. Aliquam id semper quam.   
                                                <div class="row horizontal-middle">
                                                    <div class="btn btn-inverted" onclick="location.href='http://ci2.moodys.com:8080/credit-ratings/Tullow-Oil-plc-credit-rating-820489619';">Learn More</div>
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
                                <div class="col-lg-6 col-md-3 vertical-middle">
                                    <div class="product-header product-padding">
                                        <h4>Structured Analytics & Valuation</h4>
                                        <h2>SAV</h2>
                                        <div class="btn" routerLink="/sav-perspective">Perspectives</div>
                                        <div class="btn  btn-inverted" onclick="window.open('http://www.moodysanalytics.com/Products-and-Solutions/Structured-Analytics-and-Valuation')">Learn More</div>
                                    </div>
                                </div>
                                <div class="col-lg-6 vertical-middle">
                                    <div class="product-content product-padding">
                                        <p>Solutions allow users to monitor, price and stress all structured assets including agency and non-agency RMBS, ABS, CMBS and CDO's. Data is available at the loan and pool level and includes historical performance metrics.</p>
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
        .btn {
            width: 160px;
            margin-bottom:5px;
            margin-top:20px;
        }
    `]
})
export class CesaComponent {
}