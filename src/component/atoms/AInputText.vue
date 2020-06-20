<template>
<span>
<span class="px-1 text-sm text-gray-600">{{placeholder}}</span>
<input :rules="rules" :placeholder="exemple" v-model="model" type="text" class="block w-full px-3 py-2 placeholder-gray-600 bg-white border-2 border-gray-300 rounded-lg shadow-md text-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"> </div>
</span>
</template>

<script>
export default {
  name: 'AInput',
  data() {
    return {
      model: '',
    };
  },
  props: {
    exemple: String,
    rules: {
      type: String,
      default: '',
    },
  },
  mounted() {
  },
  watch: {
    model(oldVal, newVal) {
      this.$emit('input', newVal);
    },
  },
  computed: {
    placeholder() {
      return this.$slots.default && this.$slots.default[0] && this.$slots.default[0].text;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
