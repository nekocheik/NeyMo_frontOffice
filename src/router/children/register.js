export default [
  {
    // `UserProfile` va être rendu à l'intérieur du `<router-view>` de `User`
    // quand `/utilisateur/:id/profil` concorde
    path: 'profile',
    component: UserProfile,
  },
  {
    // `UserPosts` va être rendu à l'intérieur du `<router-view>` de `User`
    // quand `/utilisateur/:id/billets` concorde
    path: 'posts',
    component: UserPosts,
  },
];
