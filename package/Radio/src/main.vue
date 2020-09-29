<template>
  <label
    class="v-radio"
    role="radio"
    :class="[
      { 'is-disabled': disabled },
      { 'is-checked': model === label },
    ]"
    :tabIndex="0"
    @keydown.space.stop.prevent="model = disabled ? model : label"
  >
    <span class="v-radio__input">
      <span class="v-radio__inner"></span>
      <input
        ref="radio"
        type="radio"
        class="v-radio__original"
        :value="label"
        v-model="model"
        :name="name"
        :disabled="disabled"
        @change="handleChange"
        :tabindex="-1"
      >
    </span>
    <span class="v-radio__label" @keydown.stop>
      <slot></slot>
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>

<script>
import { computed } from 'vue'
export default {
  name: 'VRadio',
  props: {
    modelValue: {},
    label: {},
    disabled: Boolean,
    name: {
      type: String
    }
  },
  setup(props, { emit }) {
    // let { modelValue, label } = props

    let model = computed({
      get() {
        return props.modelValue
      },
      set() {
        emit('update:modelValue', props.label)
      }
    })

    const handleChange = () => {
      emit('update', props.label)
    }

    return {
      model,
      handleChange
    }
  }
}
</script>

<style scoped>

</style>
