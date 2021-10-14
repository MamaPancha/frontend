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

    <v-footer color="grey darken-3 mt-1" padless>
      <v-row justify="center" class="mt-2 mb-1" no-gutters>
        <router-link class="text-decoration-none" to="/">
          <v-btn class="mx-4 mt-1 text-center text-button white--text" depressed plain>Home</v-btn>
        </router-link>
        <v-btn class="mx-4 mt-1 text-center text-button white--text" depressed plain @click="overlay = !overlay">Acerca de nosotros
        </v-btn>
        <router-link class="text-decoration-none" to="/contacto">
          <v-btn class="mx-4 mt-1 text-center text-button white--text" depressed plain>Contáctanos</v-btn>
        </router-link>        
        <v-col color="grey darken-3" class="mt-1 mb-0 text-center white--text" cols="12">
          <strong>• MamaPancha •  productos artesanales • {{ new Date().getFullYear() }}</strong>
        </v-col>
      </v-row>
      <v-overlay :z-index="zIndex" :value="overlay" :opacity="opacity" class="d-flex justify-center">
        <div class="d-flex justify-center text-h5 font-weight-medium">¿QUIÉNES SOMOS?
        </div>
          <p class="d-flex justify-start text-body-1 font-weight-medium mx-15 mt-5 mb-15">Somos una organización fundada en 1990, que brinda servicios y productos a toda la región. Estamos capacitados para ofrecerle la atención que necesita de forma oportuna y profesional. Contamos con los recursos necesarios para brindarle un servicio de calidad.
          </p>
        <div class="d-flex justify-center text-h5 font-weight-medium mt-15">Nuestro Compromiso
        </div>
          <p class="d-flex justify-start text-body-1 font-weight-medium mx-15 mt-5">
            Nos dedicamos a prestar servicios especializados para atenderle en sus requerimientos. Nuestros procesos y productos son de la mejor calidad, y nuestra trayectoria es la mejor garantía de nuestra excelencia y confiabilidad.
          </p>
        <v-row justify="center" class="my-10">
          <v-btn class="white--text" color="teal"  @click="overlay = false">
            VOLVER
          </v-btn>
        </v-row>
      </v-overlay>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    overlay: false,
    zIndex: 0,
    opacity: 0.8,
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
