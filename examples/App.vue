<template>
  <div class="p20">
    <h3>VRadio</h3>
    <v-radio v-model="radioVaule" label="1">哎呀</v-radio>
    <!-- <v-radio v-model="radioVaule" label="2" :disabled="true"></v-radio> -->
    <v-radio v-model="radioVaule" label="2">妈呀</v-radio>
    <div>{{ radioVaule }}</div>
  </div>
</template>
<script>
import { ref, watch } from 'vue'

let useRadio = () => {
  let radioVaule = ref('1')

  watch(radioVaule, (val, oldVal) => {
    console.log(val, oldVal)
  })
  return {
    radioVaule
  }
}

export default {
  name: 'App',
  setup() {
    return {
      ...useRadio()
    }
  }
}
</script>
<style>
.p20 {
  padding: 20px;
}
</style>
