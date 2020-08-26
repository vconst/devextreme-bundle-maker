<template>
  <div>
    <dx-button-native
      text="Click Me!"
      @click="click"
      icon="download"
    >
    </dx-button-native>
  </div>  
</template>

<script>
import DxButtonNative from './button-native';
import DxButtonNative2 from '../../../bundles/vue/button-native';

export default {
  name: 'Playground',
  components: {
    DxButtonNative
  },
  methods: {
      click(){
          alert("Clicked")
      }
  }
}
</script>
