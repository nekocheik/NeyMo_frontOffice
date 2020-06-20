<template>
  <LRegitster>
    <template v-slot:header>
      <div class="flex flex-row-reverse">
        <a-button @click.native="$router.push({ name: 'register' })" >Se connecter</a-button>
      </div>
      <p class="pt-4 text-4xl font-semibold">Inscrivez-vous</p>
    </template>
      <router-view></router-view>
    <template v-slot:bottom>
      <div class="flex flex-row-reverse">
        <a-button >Suviant</a-button>
      </div>
    </template>
  </LRegitster>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>

</style>
