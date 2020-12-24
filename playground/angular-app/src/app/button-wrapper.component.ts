import { Component, ViewChildren } from '@angular/core';


@Component({
  selector: 'button-page',
  templateUrl: './button.component.html'
})
export class ButtonComponent {
  @ViewChildren('button') widgets;
  options: any;
  template: boolean = false;
  testButtons: any = [];
  keys = [];

  constructor() {
    const testButtons = this.testButtons;

    function addPerformanceTest(name, func) {
      testButtons.push({ name, func: () => {
        performance.mark("start");
        console.time(name);
        func();
        window['setTimeout'](() => {
          console.timeEnd(name);
          performance.mark("end")
          performance.measure(name, 'start', 'end');
        });
      } });
    }

    addPerformanceTest('clear', () => {
      this.options = null;
      this.template = false;
    });
    addPerformanceTest('create', () => {
      this.options = { text: 'button' };
      this.template = false;
    });
    addPerformanceTest('Minimum options', () => {
      this.options = { text: 'button' };
      this.template = false;
    });
    addPerformanceTest('Maximum options', () => {
      this.options = {
        text: 'button',
        icon: 'download',
        accessKey: 'c',
        activeStateEnabled: true,
        disabled: false,
        elementAttr: { 'data-fake': 123 },
        hint: 'text hint',
        onClick: () => undefined,
        rtlEnabled: true,
        tabIndex: 1,
        width: 100,
        height: '40'
      };
    });
    addPerformanceTest('With template', () => {
      this.template = true;
      this.options = { text: 'button' };
    });
    addPerformanceTest('Option icon change', () => {
      this.options.icon = 'download';
    });
    addPerformanceTest('Option text change', () => {
      this.options.text = 'New Button Text';
    });
    addPerformanceTest('Option useInkRipple change', () => {
      this.options.useInkRipple = true;
    });
    addPerformanceTest('Options full set change', () => {
      this.options = {
        text: 'button2',
        icon: 'download',
        accessKey: 'c',
        activeStateEnabled: true,
        disabled: false,
        elementAttr: { 'data-fake': 123 },
        hint: 'text hint',
        onClick: () => undefined,
        rtlEnabled: true,
        tabIndex: 1,
        width: 100,
        height: '40'
      };
    });
    addPerformanceTest('Method onFocus', () => {
      this.widgets.forEach((widget) => {
        const instance = widget.instance || widget;
        instance.focus();
      });
    });

    for(let i = 0; i < 200; i++) {
      this.keys.push(i);
    }
  }
}
