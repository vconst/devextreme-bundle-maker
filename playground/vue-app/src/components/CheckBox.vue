<template>
  <div>
    <h1>checkbox {{type}}</h1>
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
        <dx-check-box-basic
          v-for="key in keys"
          :key="key"
          ref="check_box"
          v-bind="options"
        >
        </dx-check-box-basic>
      </template>
      <template v-if="type == 'renovated' && options">
        <dx-check-box-renovated
          v-for="key in keys"
          :key="key"
          ref="check_box"
          v-bind="options"
        >
        </dx-check-box-renovated>
      </template>
      <template v-if="type == 'renovatedwrapper' && options">
        <dx-check-box-renovated-wrapper
          v-for="key in keys"
          :key="key"
          ref="button"
          v-bind="options"
        >
        </dx-check-box-renovated-wrapper>
      </template>
    </div>
  </div>
</template>

<script>
import DxCheckBoxBasic from './check_box-wrapper';
import DxCheckBoxRenovated from './check_box-native';
import DxCheckBoxRenovatedWrapper from './check_box-renovated-wrapper';

export default {
  name: 'CheckBox',
  props: ['type'],
  components: {
    DxCheckBoxBasic,
    DxCheckBoxRenovated,
    DxCheckBoxRenovatedWrapper
  },
  data() {
    const testButtons = [];

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
      this.options = { value: true };
      this.template = false;
    });
    addPerformanceTest('Minimum options', () => {
      this.options = { value: true };
      this.template = false;
    });
    addPerformanceTest('Option value change', () => {
      this.options.value = false;
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
