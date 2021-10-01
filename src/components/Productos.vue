<template>
  <div id="contenedor">
    <v-card :loading="loading" class="mx-auto my-12" max-width="374">
      <template slot="progress">
        <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>

      <v-img height="250" contain src="@/assets/Obleas.jpg"></v-img>

      <v-card-title>Obleas</v-card-title>

      <v-card-text>
        <v-row align="center" class="mx-0">
          <v-rating
            :value="4.5"
            color="amber"
            dense
            half-increments
            readonly
            size="14"
          ></v-rating>

          <div class="grey--text ms-4">4.5 (413)</div>
        </v-row>

        <div class="my-4 text-subtitle-1">
          $5.000 • MamaPancha: productos artesanales
        </div>

        <div>
          Deliciosa oblea rellena de queso, crema y salsa de mora para cualquier
          ocasión
        </div>
      </v-card-text>

      <v-divider class="mx-4"></v-divider>

      <v-card-title>Disponibilidad</v-card-title>

      <v-card-text>
        <v-chip-group
          v-model="selection"
          active-class="deep-purple accent-4 white--text"
          column
        >
          <v-chip>1</v-chip>

          <v-chip>2</v-chip>

          <v-chip>3</v-chip>

          <v-chip>Paquete</v-chip>
        </v-chip-group>
      </v-card-text>

      <v-card-actions>
        <v-btn color="deep-purple lighten-2" text @click="reserve">
          Compra
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-card :loading="loading" class="mx-auto my-12" max-width="374">
      <template slot="progress">
        <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>

      <v-img height="250" contain src="@/assets/ArequipeyMora.jpg"></v-img>

      <v-card-title>Postre</v-card-title>

      <v-card-text>
        <v-row align="center" class="mx-0">
          <v-rating
            :value="4.5"
            color="amber"
            dense
            half-increments
            readonly
            size="14"
          ></v-rating>

          <div class="grey--text ms-4">4.5 (413)</div>
        </v-row>

        <div class="my-4 text-subtitle-1">
          $4.000 • MamaPancha: productos artesanales
        </div>

        <div>
          Postre de arequipe con una rica adición de mora para disfrutar
        </div>
      </v-card-text>

      <v-divider class="mx-4"></v-divider>

      <v-card-title>Disponibilidad</v-card-title>

      <v-card-text>
        <v-chip-group
          v-model="selection"
          active-class="deep-purple accent-4 white--text"
          column
        >
          <v-chip>1</v-chip>

          <v-chip>2</v-chip>

          <v-chip>3</v-chip>

          <v-chip>Paquete</v-chip>
        </v-chip-group>
      </v-card-text>

      <v-card-actions>
        <v-btn color="deep-purple lighten-2" text @click="reserve">
          Compra
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-card :loading="loading" class="mx-auto my-12" max-width="374">
      <template slot="progress">
        <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>

      <v-img height="250" contain src="@/assets/Solterita.jpg"></v-img>

      <v-card-title>Solteritas</v-card-title>

      <v-card-text>
        <v-row align="center" class="mx-0">
          <v-rating
            :value="4.5"
            color="amber"
            dense
            half-increments
            readonly
            size="14"
          ></v-rating>

          <div class="grey--text ms-4">4.5 (413)</div>
        </v-row>

        <div class="my-4 text-subtitle-1">
          $3.000 • MamaPancha: productos artesanales
        </div>

        <div>
          Rica solterita rellena de bocadillo con dulce de mora y queso bañado
          con una leche condensada para mayor sabor
        </div>
      </v-card-text>

      <v-divider class="mx-4"></v-divider>

      <v-card-title>Disponibilidad</v-card-title>

      <v-card-text>
        <v-chip-group
          v-model="selection"
          active-class="deep-purple accent-4 white--text"
          column
        >
          <v-chip>1</v-chip>

          <v-chip>2</v-chip>

          <v-chip>3</v-chip>

          <v-chip>Paquete</v-chip>
        </v-chip-group>
      </v-card-text>

      <v-card-actions>
        <v-btn color="deep-purple lighten-2" text @click="reserve">
          Compra
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-card :loading="loading" class="mx-auto my-12" max-width="374">
      <template slot="progress">
        <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>

      <v-img height="250" contain src="@/assets/Conservas.jpg"></v-img>

      <v-card-title>Conservas de frutas</v-card-title>

      <v-card-text>
        <v-row align="center" class="mx-0">
          <v-rating
            :value="4.5"
            color="amber"
            dense
            half-increments
            readonly
            size="14"
          ></v-rating>

          <div class="grey--text ms-4">4.5 (413)</div>
        </v-row>

        <div class="my-4 text-subtitle-1">
          $6.000 • MamaPancha: productos artesanales
        </div>

        <div>
          Conservas artesanales sin conservantes para un postre delicioso y
          nutritivo
        </div>
      </v-card-text>

      <v-divider class="mx-4"></v-divider>

      <v-card-title>Disponibilidad</v-card-title>

      <v-card-text>
        <v-chip-group
          v-model="selection"
          active-class="deep-purple accent-4 white--text"
          column
        >
          <v-chip>Mora</v-chip>

          <v-chip>Fresa</v-chip>

          <v-chip>Arequipe</v-chip>

          <v-chip>Combo</v-chip>
        </v-chip-group>
      </v-card-text>

      <v-card-actions>
        <v-btn color="deep-purple lighten-2" text @click="reserve">
          Compra
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>


<script>
export default {
  name: "Productos",
  data: () => ({}),
};
</script>

<style>
#contenedor {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
</style>