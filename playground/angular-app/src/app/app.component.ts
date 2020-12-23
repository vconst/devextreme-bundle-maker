import { Component, ViewChildren } from '@angular/core';
// import { DxButtonComponent } from './button-native';
// import { DxButtonComponent } from './button-wrapper';
// import { DxButtonComponent } from './button-renovated-wrapper';



const startTime = () => {

};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // @ViewChildren(DxButtonComponent) widgets;

  title = 'custombundleangular8';
  items = Array(500);
  icon = undefined;
  text = 'button text';
  accessKey = "a";
  disabled = false;
  hint = 'hint';
  rtlEnabled = false;
  tabIndex = 0;
  width = 100;
  height = '40';

  constructor() {
    startTime();
    console.time('First render');
  }

  ngAfterViewInit() {
    console.timeEnd('First render');
  }

  clickHandler() {
    return undefined;
  }

  changeIcon() {
    startTime();
    this.icon = 'download';
  }

  changeText() {
    startTime();
    this.text = 'new button text';
  }

  changeOptions() {
    startTime();
    this.icon = 'download';
    this.text = 'new button text';
    this.accessKey = "c";
    this.disabled = false;
    this.hint = 'new hint';
    this.rtlEnabled = true;
    this.tabIndex = 10;
    this.width = 110;
    this.height = '30';
  }

  // focus() {
  //   startTime();
  //   debugger
  //   this.widgets.forEach(widget => {
  //     if (widget.instance !== undefined) {
  //       widget.instance.focus();
  //     } else {
  //       widget.focus();
  //     }
  //   });
  // }

  create() {
    this.items = Array(500);
  }

  remove() {
    this.items = Array(0);
  }
}
