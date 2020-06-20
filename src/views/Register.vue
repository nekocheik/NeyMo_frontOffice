<template>
  <LRegitster>
    <template v-slot:header>
      <div class="flex flex-row-reverse">
        <a-button @click.native="$router.push({ name: 'inscription',  params: { id: 'step-one' } })">S’inscrire</a-button>
      </div>
      <p class="pt-4 text-4xl font-semibold">Connectez-vous</p>
    </template>
    <div class="mt-10">
      <a-input v-model="mail" exemple="marie.jane@mail.com">Téléphone, Email</a-input>
      <a-input v-model="password" exemple="*********" class="mt-4">Mot de passe</a-input>
    </div>
    <div>
      <Alink class="block mx-auto mt-10 text-center">
        Mot de passe oublié ?
      </Alink>
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
