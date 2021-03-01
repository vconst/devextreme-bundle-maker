<template>
  <div>
    <h1>bullet {{type}}</h1>
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
        </dx-button-basic>
      </template>
      <template v-if="type == 'renovated' && options">
        <dx-button-renovated
          v-for="key in keys"
          :key="key"
          ref="button"
          v-bind="options"
        >
        </dx-button-renovated>
      </template>
      <template v-if="type == 'renovatedwrapper' && options">
        <dx-button-renovated-wrapper
          v-for="key in keys"
          :key="key"
          ref="button"
          v-bind="options"
        >
        </dx-button-renovated-wrapper>
      </template>
    </div>
  </div>
</template>

<script>
import DxButtonBasic from './bullet-wrapper';
import DxButtonRenovated from './bullet-native';
import DxButtonRenovatedWrapper from './bullet-renovated-wrapper';

export default {
  name: 'Bullet',
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
      this.options = {
        startScaleValue: 0,
        endScaleValue: 35,
        value: 23,
        target: 20,
        color: '#ebdd8f'
      };
      this.template = false;
    });
    addPerformanceTest('Minimum options', () => {
      this.options = {
        startScaleValue: 0,
        endScaleValue: 35,
        value: 23,
        target: 20,
        color: '#ebdd8f'
      };
      this.template = false;
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
