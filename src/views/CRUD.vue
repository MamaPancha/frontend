<template>
    <div>
        <v-card class="d-flex justify-space-around" flat tile>
            <v-card class="mx-15 my-15" max-width="500" max-height= "230" text-center elevation="11">
                <v-card-subtitle class="pb-5 text-h6 font-weight-medium">Menú Admin</v-card-subtitle>
                <v-card-text class="text--primary mb-0">
                    <v-form>
<!--BOTÓN AÑADIR PRODUCTO-->
                    <v-row justify="center">
                        <v-dialog v-model="dialog" persistent max-width="600px">
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn class="my-3" color="#00BFA5"  dark v-bind="attrs" v-on="on">
                            AÑADIR PRODUCTO
                            </v-btn>
                        </template>
                        <v-card>
                        <v-card-title><span class="text-h5">Agregar producto</span></v-card-title>
                        <v-card-text>
                            <v-container>
                                <v-row>
                                    <v-col>
                                        <v-autocomplete :items="['Obleas', 'Solteritas', 'Arequipe con mora', 'Conservas de fruta']" label="Tipo de Producto" multiple></v-autocomplete>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field label="Precio*" prefix="$" required></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row class="mt-0">
                                    <v-card-text>
                                    <v-text-field label="Descripción*" required></v-text-field>
                                    </v-card-text>
                                </v-row>
                                <v-row>
                                    <v-file-input
                                        :rules="rules"
                                        accept="image/png, image/jpeg,"
                                        placeholder="Elije una imagen"
                                        prepend-icon="mdi-camera"
                                        label="Imagen">
                                    </v-file-input>
                                </v-row>
                            </v-container>
                            <small>*Todos los campos son requeridos</small>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="#00BFA5" text @click="guardar">Guardar</v-btn>
                            <v-btn class="text-subtitle-2 font-weight-bold my-3" color="#EF9A9A" text @click="cerrar">Cerrar</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-row>
<!--BOTÓN BUSCAR PRODUCTO-->
                <v-row justify="center">
                    <v-dialog v-model="dialog" persistent max-width="600px">
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn class="my-3" color="#00BFA5"  dark v-bind="attrs" v-on="on">
                            BUSCAR PRODUCTO
                            </v-btn>
                        </template>
                        <v-card>
                            <v-card-title><span class="text-h5">Información del producto</span>
                            </v-card-title>
                            <v-card-text>
                                <v-container>
                                    <v-row>
                                        <v-autocomplete :items="['Obleas', 'Solteritas', 'Arequipe con mora', 'Conservas de fruta']" label="Tipo de Producto" multiple></v-autocomplete>
                                    </v-row>
                                </v-container>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="#00BFA5" text @click="guardar">Guardar</v-btn>
                                <v-btn class="text-subtitle-2 font-weight-bold my-3" color="#EF9A9A" text @click="cerrar">Cerrar</v-btn>        
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </v-row>
                </v-form>
            </v-card-text>
            <v-card-actions class="d-flex justify-end">
                <v-btn class="text-subtitle-2 font-weight-bold" color="#EF9A9A" text @click="salir">SALIR</v-btn>
            </v-card-actions>
        </v-card>
<!--Pordutos ya disponibles-->
        <div id="contenedor">
            <v-card :loading="loading" class="my-12 mx-3" max-width="374">
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

            <v-card-actions class="d-flex justify-space-between">
                <v-btn class="caption my-3" color="#00BFA5"  dark v-bind="attrs" v-on="on">ACTUALIZAR PRODUCTO
                </v-btn>
                <v-btn class="caption my-3" color="#EF9A9A" dark @click="cerrar">ELIMINAR PRODUCTO
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
                <v-btn class="caption my-3" color="#00BFA5"  dark v-bind="attrs" v-on="on">ACTUALIZAR PRODUCTO
                </v-btn>
                <v-btn class="caption my-3" color="#EF9A9A" dark @click="cerrar">ELIMINAR PRODUCTO
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
                <v-btn class="caption my-3" color="#00BFA5"  dark v-bind="attrs" v-on="on">ACTUALIZAR PRODUCTO
                </v-btn>
                <v-btn class="caption my-3" color="#EF9A9A" dark @click="cerrar">ELIMINAR PRODUCTO
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
                <v-btn class="caption my-3" color="#00BFA5"  dark v-bind="attrs" v-on="on">ACTUALIZAR PRODUCTO
                </v-btn>
                <v-btn class="caption my-3" color="#EF9A9A" dark @click="cerrar">ELIMINAR PRODUCTO
                </v-btn>
            </v-card-actions>
            </v-card>
        </div>

        </v-card>
    </div>
</template>







<!--<template>
    <div id="CRUD">
        <v-card class="mx-0 my-15" max-width="400" text-center elevation="11">
            <v-card-subtitle class="pb-5 text-h5 font-weight-medium">Menú Admin</v-card-subtitle>
            <v-card-text class="text--primary mb-0">
                <v-form>
//BOTÓN AÑADIR PRODUCTO
                    <v-row justify="center">
                        <v-dialog v-model="dialog" persistent max-width="600px">
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn class="my-3" color="#00BFA5"  dark v-bind="attrs" v-on="on">
                                AÑADIR PRODUCTO
                                </v-btn>
                            </template>
                            <v-card>
                                <v-card-title><span class="text-h5">Agregar producto</span>
                                </v-card-title>
                                <v-card-text>
                                    <v-container>
                                        <v-row>
                                            <v-col cols="12" sm="6">
                                                <v-autocomplete :items="['Obleas', 'Solteritas', 'Arequipe con mora', 'Conservas de fruta']" label="Tipo de Producto" multiple></v-autocomplete>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="4">
                                                <v-text-field label="Precio*" prefix="$" required></v-text-field>
                                            </v-col>
                                            <v-card-text>
                                                <v-text-field label="Descripción*" required></v-text-field>
                                            </v-card-text>
                                        </v-row>
                                        <v-row>
                                            <v-file-input
                                                :rules="rules"
                                                accept="image/png, image/jpeg,"
                                                placeholder="Elije una imagen"
                                                prepend-icon="mdi-camera"
                                                label="Imagen">
                                            </v-file-input>
                                        </v-row>
                                    </v-container>
                                    <small>*Todos los campos son requeridos</small>
                                </v-card-text>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="#00BFA5" text @click="cerrar">Cerrar</v-btn>
                                    <v-btn color="#00BFA5" text @click="guardar">Guardar</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </v-row>
//BOTÓN BUSCAR PRODUCTO
                    <v-row justify="center">
                        <v-dialog v-model="dialog" persistent max-width="600px">
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn class="my-3" color="#00BFA5"  dark v-bind="attrs" v-on="on">
                                BUSCAR PRODUCTO
                                </v-btn>
                            </template>
                            <v-card>
                                <v-card-title><span class="text-h5">Información del producto</span>
                                </v-card-title>
                                <v-card-text>
                                    <v-container>
                                        <v-row>
                                            <v-autocomplete :items="['Obleas', 'Solteritas', 'Arequipe con mora', 'Conservas de fruta']" label="Tipo de Producto" multiple></v-autocomplete>
                                        </v-row>
                                        <v-row>
                                            <v-col cols="12" sm="6">
                                                <v-dialog v-model="dialog" persistent max-width="600px">
                                                    <template v-slot:activator="{ on, attrs }">
                                                        <v-btn class="my-3" color="#00BFA5"  dark v-bind="attrs" v-on="on">
                                                        ACTUALIZAR PRODUCTO
                                                        </v-btn>
                                                    </template>
                                                    <v-card>
                                                        <v-card-title><span class="text-h5">Agregar producto</span>
                                                        </v-card-title>
                                                        <v-card-text>
                                                            <v-container>
                                                                <v-row>
                                                                    <v-col cols="12" sm="6">
                                                                        <v-autocomplete :items="['Obleas', 'Solteritas', 'Arequipe con mora', 'Conservas de fruta']" label="Tipo de Producto" multiple></v-autocomplete>
                                                                    </v-col>
                                                                    <v-col cols="12" sm="6" md="4">
                                                                        <v-text-field label="Precio*" prefix="$" required></v-text-field>
                                                                    </v-col>
                                                                    <v-card-text>
                                                                        <v-text-field label="Descripción*" required></v-text-field>
                                                                    </v-card-text>
                                                                </v-row>
                                                                <v-row>
                                                                    <v-file-input
                                                                        :rules="rules"
                                                                        accept="image/png, image/jpeg,"
                                                                        placeholder="Elije una imagen"
                                                                        prepend-icon="mdi-camera"
                                                                        label="Imagen">
                                                                    </v-file-input>
                                                                </v-row>
                                                            </v-container>
                                                            <small>*Todos los campos son requeridos</small>
                                                        </v-card-text>
                                                        <v-card-actions>
                                                            <v-spacer></v-spacer>
                                                            <v-btn color="#00BFA5" text @click="cerrar">Cerrar</v-btn>
                                                            <v-btn color="#00BFA5" text @click="guardar">Guardar</v-btn>
                                                        </v-card-actions>
                                                    </v-card>
                                                </v-dialog>
                                            </v-col>
                                            <v-col cols="12" sm="6">
                                                <v-btn class="my-3" color="#00BFA5" dark @click="cerrar">ELIMINAR PRODUCTO
                                                </v-btn>
                                            </v-col>
                                        </v-row> 
                                    </v-container>
                                </v-card-text>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="#00BFA5" text @click="cerrar">Cerrar</v-btn>
                                    <v-btn color="#00BFA5" text @click="guardar">Guardar</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </v-row>
                </v-form>
            </v-card-text>
            <v-card-actions class="d-flex justify-end">
                <v-btn class="subtitle-1 font-weight-bold" text @click="salir">SALIR</v-btn>
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

    </div>
</template>-->

<script>
export default {
    data: () => ({
        rules: [
            value => !value || value.size < 2000000 || 'Avatar size should be less than 2 MB!',
        ],
    }),
    methods: {
        salir(){
            console.log("Retornando Home");
            this.$router.push('/')
        },
        cerrar(){
            console.log("Retornando Home");
            this.$router.push('/Login')
        },
        guardar(){
            console.log("Retornando Home");
            this.$router.push('/Login')
        },
    }
}
</script>

<style>

</style>