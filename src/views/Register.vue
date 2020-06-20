<template>
  <LRegitster>
    <template v-slot:header>
      <div class="flex flex-row-reverse">
        <a-button @click.native="$router.push({ path: 'inscription/step-one' })">S’inscrire</a-button>
      </div>
      <p class="pt-4 text-4xl font-semibold">Connectez-vous</p>
    </template>
    <div class="mt-10">
      <ValidationProvider name="mail" rules="email" v-slot="{ errors }">
        <a-input :errors="errors" v-model="mail" exemple="marie.jane@mail.com">
          Email
        </a-input>
      </ValidationProvider>
      <ValidationProvider name="mot de passe" rules="required|min:4" v-slot="{ errors }">
        <a-input v-model="password" :errors="errors" exemple="*********" class="mt-4">
          Mot de passe
        </a-input>
      </ValidationProvider>
    </div>
    <div>
      <a-link class="block mx-auto mt-10 text-center">
        Mot de passe oublié ?
      </a-link>
    </div>
    <template v-slot:bottom>
      <div class="flex flex-row-reverse">
        <a-button>Valider</a-button>
      </div>
    </template>
  </LRegitster>
</template>

<script>
export default {
  data() {
    return {
      mail: '',
      password: '',
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
