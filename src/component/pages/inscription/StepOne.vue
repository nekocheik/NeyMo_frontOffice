<template>
  <ValidationObserver ref="observer">
    <div>
      <ValidationProvider name="Nom" rules="required" v-slot="{ errors }">
        <m-radio v-model="value" :inputs="mokeData" />
        {{errors[0]}}
      </ValidationProvider>
    </div>
  </ValidationObserver>
</template>

<script>
export default {
  name: 'StepOne',
  data() {
    return {
      value: null,
      mokeData: [
        {
          name: 'Entreprise',
          value: 0,
        },
        {
          name: 'Particulier',
          value: 1,
        },
      ],
    };
  },
  mounted() {
    this.$watch(() => this.$refs.observer.flags.valid, (val) => { this.$emit('updateFormValid', val); });
  },
  watch: {
    model(oldVal, newVal) {
      this.$emit('input', newVal);
    },
  },
};
</script>

<style lang="stylus" scoped>

</style>
