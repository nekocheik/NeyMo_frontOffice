<template>
  <LRegitster>
    <template v-slot:header>
      <div class="flex flex-row-reverse">
        <a-button @click.native="$router.push({ name: 'register' })" >Se connecter</a-button>
      </div>
      <p class="pt-4 text-4xl font-semibold">Inscrivez-vous</p>
    </template>
      <router-view @updateFormValid="(val) => {formValid = val}" />
    <template v-slot:bottom>
      <div class="flex flex-row justify-between">
        <a-button @click.native="toPreviousPage()" >Précédent</a-button>
        <a-button v-show="formValid" @click.native="toNextPage()" >Suviant</a-button>
      </div>
    </template>
  </LRegitster>
</template>

<script>
export default {
  name: 'inscription',
  data() {
    return {
      formValid: false,
    };
  },
  methods: {
    toNextPage() {
      this.$router.push({ path: this.nextPath });
      this.formValid = false;
    },
    toPreviousPage() {
      this.$router.push({ path: this.previousPath });
    },
  },
  computed: {
    nextPath() {
      return this.$route.meta.nextPath;
    },
    previousPath() {
      return this.$route.meta.previousPath;
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
