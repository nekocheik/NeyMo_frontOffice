<template>
  <LRegitster>
    <template v-slot:header>
      <div class="flex flex-row-reverse">
        <AButton @click.native="$router.push({ name: 'inscription' })">S’inscrire</AButton>
      </div>
      <p class="pt-4 text-4xl font-semibold">Connectez-vous</p>
    </template>
    <div class="mt-10">
      <AInput>Téléphone, Email</AInput>
      <AInput class="mt-4">Mot de passe</AInput>
    </div>
    <div>
      <Alink class="block mx-auto mt-10 text-center">
        Mot de passe oublié ?
      </Alink>
    </div>
    <template v-slot:bottom>
      <div class="flex flex-row-reverse">
        <AButton>Valider</AButton>
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
