<template>
  <div id="root">
    <input type="button" value="Render" v-on:click="shouldRender = !shouldRender" />
    <div v-if="shouldRender">
    
    <!-- First Render (Minimum  options) -->
      <dx-button
        v-for="button in buttons" 
        :key="button.key"
        text="Click Me!"
      >
      </dx-button>

    <!-- First Render (Maximum  options)
      <dx-button
        v-for="button in buttons" 
        :key="button.key"
        @click="click"
        text="Click Me!"
        icon="download"
        accessKey="c"
        :activeStateEnabled="true"
        :disabled="false"
        :elementAttr="{ 'data-fake': 123 }"
        hint="text hint"
        :rtlEnabled="true"
        :tabIndex="1"
        width="100"
        height="40"
      >
    </dx-button>
    -->

    <!-- First Render (Template)
    <dx-button
      v-for="button in buttons" 
      :key="button.key"
    >
      <template>
        <div>Button Template</div>
      </template>
    </dx-button>
    -->
    </div>

     <!-- Option change (Text) 
     <input type="button" value="Change text" v-on:click="globalText = 'new text'" />
     <dx-button
        v-for="button in buttons" 
        :key="button.key"
        :text="globalText"
      >
      </dx-button>
     -->

    <!-- Option change (Icon) 
     <input type="button" value="Set icon" v-on:click="globalIcon = 'download'" />
     <dx-button
        v-for="button in buttons" 
        :key="button.key"
        text="text"
        :icon="globalIcon"
      >
      </dx-button>
    -->

    <!-- Option change (Max options)
     <input type="button" value="Set new options" v-on:click="globalOptions = newOptions" />
     <dx-button
        v-for="button in buttons" 
        :key="button.key"
        @click="globalOptions.click"
        :text="globalOptions.text"
        :icon="globalOptions.icon"
        :accessKey="globalOptions.accessKey"
        :activeStateEnabled="globalOptions.activeStateEnabled"
        :disabled="globalOptions.disabled"
        :elementAttr="globalOptions.elementAttr"
        :hint="globalOptions.hint"
        :rtlEnabled="globalOptions.rtlEnabled"
        :tabIndex="globalOptions.tabIndex"
        :width="globalOptions.width"
        :height="globalOptions.height"
      >
      </dx-button>
    -->

  </div>  
</template>

<script>
import DxButton from './button-wrapper';
//import DxButton from './button-native';

const newOptions = {
  click: () => void 0,
  text: "new text",
  icon: "back",
  accessKey: 'c',
  activeStateEnabled: true,
  elementAttr: { 'data-fake1': 12343 },
  hint: 'new text hint',
  rtlEnabled: true,
  useInkRipple: true,
  tabIndex: 6,
  width: 210,
  height: 210
};

export default {
  name: 'Playground',
  components: {
    DxButton
  },
  mounted: () => {
    let observer = new MutationObserver(mutationRecords => {
      console.log(mutationRecords);
    });

    observer.observe(document.getElementById('root'), {
        childList: true,
        subtree: true, 
        characterDataOldValue: true,
        attributes: true
    });
  },
  data: () => {
   const buttons = [];

   for(let i = 0; i < 2000; i++) {
     buttons.push({ key: i });
   }

   return { buttons, shouldRender: false, globalText: 'init text', globalIcon: void 0, newOptions, globalOptions: {
      click: () => null,
      text: 'text',
      icon: 'download',
      useInkRipple: false,
      accessKey: 'b',
      activeStateEnabled: false,
      elementAttr: { 'data-fake2': 1234 },
      hint: 'text hint',
      rtlEnabled: false,
      tabIndex: 4,
      width: 200,
      height: 200
   } };
  },
  methods: {
    click() {
      alert('Clicked')
    }
  }
}
</script>
