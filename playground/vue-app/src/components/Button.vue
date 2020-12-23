<template>
  <div>
    <h1>button {{type}}</h1>
    <div class="test-buttons">
      <input
        v-for="test in testButtons"
        :key="test.name"
        type="button"
        :value="test.name"
        v-on:click="test.func()"
      />
    </div>
    <div class="workspace">
      <template v-if="type == 'basic' && options">
        <dx-button-basic
          v-for="key in keys"
          :key="key"
          ref="button"
          v-bind="options"
        >
          <template v-if="template">
            <div>Button Template</div>
          </template>
        </dx-button-basic>
      </template>
      <template v-if="type == 'renovated' && options">
        <dx-button-renovated
          v-for="key in keys"
          :key="key"
          ref="button"
          v-bind="options"
        >
          <template v-if="template">
            <div>Button Template</div>
          </template>
        </dx-button-renovated>
      </template>
      <template v-if="type == 'renovatedwrapper' && options">
        <dx-button-renovated-wrapper
          v-for="key in keys"
          :key="key"
          ref="button"
          v-bind="options"
        >
          <template v-if="template">
            <div>Button Template</div>
          </template>
        </dx-button-renovated-wrapper>
      </template>
    </div>
  </div>
</template>

<script>
import DxButtonBasic from './button-wrapper';
import DxButtonRenovated from './button-native';
import DxButtonRenovatedWrapper from './button-renovated-wrapper';

export default {
  name: 'Button',
  props: ['type'],
  components: {
    DxButtonBasic,
    DxButtonRenovated,
    DxButtonRenovatedWrapper
  },
  data() {
    const testButtons = [];

    function addPerformanceTest(name, func) {
      testButtons.push({ name, func: () => {
        performance.mark("start");
        console.time(name);
        func();
        window['requestIdleCallback'](() => {
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
      this.options = { text: 'button', icon: undefined, useInkRipple: undefined };
      this.template = false;
    });
    addPerformanceTest('Minimum options', () => {
      this.options = { text: 'button', icon: undefined, useInkRipple: undefined };
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
      this.$refs.button.forEach((widget) => {
        const instance = widget.instance || widget;
        instance.focus();
      });
    });

    const keys = [];

    for(let i = 0; i < 200; i++) {
      keys.push(i);
    }

    return {
      testButtons,
      keys,
      template: false,
      options: null,
    };
  },
}
</script>
