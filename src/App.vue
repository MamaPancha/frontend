<template>
  <v-app>
    <v-app-bar app color="grey lighten-4" absolute elevate-on-scroll scroll-target="#scrolling-techniques-7">
      <div class="d-flex align-center">
        <v-toolbar-title>
          <h1 class="my-3">Mama<span class="font-weight-bold text-h3">Pancha</span></h1>
        </v-toolbar-title>
      </div>
      <v-spacer></v-spacer>

      <router-link class="text-decoration-none" to="/">
        <v-btn class="mx-4 mt-2 text-center text-button" depressed plain> Productos </v-btn></router-link>
      <router-link plain class="text-decoration-none" to="/contacto">
        <v-btn class="mx-4 mt-2 text-center text-button" depressed  plain> Contacto </v-btn></router-link>
      <router-link class="text-decoration-none" to="/login">
        <v-btn class="mx-4 mt-2 text-center text-button" depressed plain> Login </v-btn></router-link>    
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    //
  }),
};
</script>
<style>
  h1 {
    font-family: 'Brush Script MT', cursiva;
    font-size: 3rem;
  }
</style>
