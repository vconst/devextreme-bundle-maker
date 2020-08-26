import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'custombundleangular8';
  items = Array(500);

  constructor() {
    console.time('First render');
    console.profile('First render1');
  }

  ngAfterViewInit() {
    console.timeEnd('First render');
    console.profileEnd('First render1');
  }
}
