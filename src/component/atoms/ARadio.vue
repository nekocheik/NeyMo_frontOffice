<template>
<span>
    <input
    class="flex-grow w-full px-4 py-2 mb-4 mr-4 text-base bg-gray-100 border border-gray-400 rounded focus:outline-none focus:border-teal-500 sm:mb-0"
    :placeholder="placeholder"
    ty
    type="text"
  />

    <input type="radio" id="huey" name="drone" value="huey"
         checked>
  <label for="huey">Huey</label>
</span>
</template>

<script>
export default {
  name: 'ACheckBox',
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
