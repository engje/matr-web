import { 
    Component,
    trigger,
    state,
    style,
    transition,
    animate,
    keyframes
} from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
      <main-nav></main-nav>
      <router-outlet></router-outlet>
      <main-footer></main-footer>
  `,
  styles: [`
    div.main-content {
        padding-top:50px;
    }
    h1.main-content {
        margin: 10px;
        margin-bottom: 50px;
    }
  `],
})
export class AppComponent  { 
}
