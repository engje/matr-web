import { Component } from '@angular/core';

// import fade in animation
import { fadeInAnimation } from '../_animations/route-animation';

@Component({
    selector: 'home',
    template: `
        <div class="home-content container-fluid">
            <div class="circular">MATR</div>
            <div class="home-content-container">
                <h1 class="home-content" align="center">Moody's Analytics Technology Rotation Program</h1>
                <h4 class="home-content" align="center">Work on real-world challenges and apply your knowledge to help us deliver the best solutions for our clients. Deepen and expand your expertise in current technologies and financial markets. </h4>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-6 col-md-12">
                            <div class="btn" routerLink="/cesa">CESA</div>
                        </div>
                        <div class="col-lg-6 col-md-12">
                            <div class="btn" routerLink="/ers">ERS</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    animations: [fadeInAnimation],
    host: { '[@fadeInAnimation]': '' },
    styles: [`
        div.home-content {
            margin-top:50px;
            text-align:center;
            background-color:#dedede;
            border-radius:10px;
            color:black;
            margin-bottom:20px;
            padding: 30px;
        }
        div.home-content-container {
            width:65%;
            margin: 0 auto;
        }
        .btn {
            width: 160px;
            margin-bottom:5px;
            margin-top:10px;
        }
    `]
})
export class HomeComponent {
    
}