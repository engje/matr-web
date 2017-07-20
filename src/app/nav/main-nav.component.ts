import { Component } from '@angular/core';

@Component({
    selector: 'main-nav',
    template: `
        <nav id="main-nav" class="navbar-default">
            <div class="container">
                <div class="row">
                    <div class="col-lg-2 col-md-3 col-sm-3 col-xs-12">
                        <div class="navbar-logo">
                            <a class="navbar-logo" href="#" [routerLink]=" ['./home'] " routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
                                <div>
                                    <img src="./images/branding/ma-logo.svg" alt="moodys-matr-logo" class="navbar-logo"><span class="navbar-logo"> | MATR</span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-10 col-md-9 col-sm-9 col-xs-12">
                        <div class="navbar-menu">
                            <ul class="nav navbar-nav navbar-menu">
                                <li class="navbar-menu">
                                    <a href="#" class="navbar-menu btn-main-custom" [routerLink]=" ['./cesa'] " routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">CESA</a>
                                </li>
                                <li class="navbar-menu">
                                    <a href="#" class="navbar-menu btn-main-custom" [routerLink]=" ['./ers'] " routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">ERS</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    `,
    styles: [`
        h1 {
            margin: 0;
        }
        nav {
            background-color:white;
            -webkit-box-shadow: 0px 4px 7px -3px rgba(0,0,0,0.7);
            -moz-box-shadow: 0px 4px 7px -3px rgba(0,0,0,0.7);
            box-shadow: 0px 4px 7px -3px rgba(0,0,0,0.7);
            position: relative;
            z-index: 1;
            //border-style: solid;
            //border-color: black;
            //border-width: 0px 0px 1px 0px;
            border-radius: 0px;
        }
        div.navbar-menu {
            text-align:center;
        }
        ul.navbar-menu {
            list-style-type: none;
            margin: 0;
            padding: 0;
            overflow: hidden;
        }
        li.navbar-menu {
            display: block;
            text-align: center;
            text-decoration: none;
            color:black;
        }
        .btn-main-custom {
            text-align: center;
            cursor: pointer;
            line-height: 60px;
            text-decoration: none;
            padding: 0px 5px 0px 5px;
            border: 0px solid #0066B3;
            display: block;
            color: #0066B3;
            font-size: 14px;
            font-weight: 400;
            border-radius: 2px;
            margin-right:10px;
            min-width:50px;
        }
        .btn-main-custom:after {
            content: '';
            width: 0;
            position: absolute;
            -webkit-transition: .2s;
            transition: .2s;
            background: #0066B3;
            left: 50%;
            bottom: 0;
            height: 5px;
        }
        .btn-main-custom:hover:after {
            width: 100%;
            left: 0;
        }
        a.navbar-logo {
            text-decoration: none;
        }
        img.navbar-logo {
            width:80px;
            height:60px;
            vertical-align:middle;
        }
        span.navbar-logo {
            font-size:18px;
            color:#0066B3;
        }
        a.navbar-menu:hover, a.navbar-menu:visited {
            background-color:transparent;
        }
        a.active {
            color:black !important;
            font-weight: bold;
        }
    `]
})
export class MainNavComponent {
}