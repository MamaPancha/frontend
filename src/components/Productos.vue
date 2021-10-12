<template>
  <v-container>
    <v-row>
      <v-col v-for="item in productos" :key="item.id" cols="sm">
        <v-card class="pa-2 mx-auto" outlined tile max-width="500">
          <v-img height="250" contain src="@/assets/Obleas.jpg"></v-img>
          <v-card-title class="d-flex justify-center text-h5 font-weight-medium">{{ item.nombre }}</v-card-title>
            <v-card-text>
              <v-row>
                <v-col class="d-flex justify-start font-weight-medium my-4 text-subtitle-1">
                  Precio: <span class="font-weight-medium">$ {{item.precio}}mil </span> 
                </v-col>      
                <v-col>
                  <div class="d-flex justify-end grey--text ms-4">4.5 (413)</div>
                  <v-rating class="d-flex justify-end" :value="4.5" color="amber" dense half-increments readonly size="14"></v-rating>
                </v-col>            
              </v-row>
              <v-row class="d-flex justify-start font-weight-medium my-4 text-subtitle-1 mx-0">
                Descripción: <span> {{ item.descripcion }}</span>
              </v-row>
              <v-row class="d-flex justify-center text-h6">
                Disponibilidad
              </v-row>
                <v-card-text class="d-flex justify-center">
                  <v-chip-group>
                    <v-chip>1</v-chip>
                    <v-chip>2</v-chip>
                    <v-chip>3</v-chip>
                    <v-chip>Paquete</v-chip>
                  </v-chip-group>
                </v-card-text>
                <div class="d-flex justify-center">
                    • MamaPancha• productos artesanales
                </div>

              
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import store from '../store/index.js'

export default {
  name: "Productos",
  data: () => ({

  }),
  created: ()=>{
    store.dispatch('cargarProducto');
  },

  computed: {
    productos: ()=>{
      return store.state.productos;
    }
}
};
</script>

<style>
#contenedor {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
</style>