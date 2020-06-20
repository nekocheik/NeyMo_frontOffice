<template>
  <span>
    <input  type="radio" id="huey" name="drone" value="huey" checked>
    <label for="huey">{{placeholder}}</label>
  </span>
</template>

<script>
export default {
  name: 'Aradio',
  data() {
    return {
      model: this.$attrs.value || '',
    };
  },
  props: {
    exemple: String,
    rules: {
      type: String,
      default: '',
    },
    errors: {
      default: [],
    },
    name: {
      type: String,
      default: '',
    },
    maxlength: {
      type: String,
      default: '20',
    },
    type: {
      type: String,
      default: 'text',
    },
  },
  watch: {
    model(oldVal, newVal) {
      this.$emit('input', newVal);
    },
  },
  computed: {
    placeholder() {
      console.warn();
      return this.$slots.default && this.$slots.default[0] && this.$slots.default[0].text;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
