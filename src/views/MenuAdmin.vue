<template>
    <div>
        <v-row class="mx-3 my-5">
            <!--MENU ADMIN-->
            <v-col cols="3" sm="12" md="3"> 
                <v-card class="mx-3 my-10" max-width="500" max-height= "230" text-center elevation="11">
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
                                    <v-card-title><span class="text-h5">Agregar producto</span>
                                    </v-card-title>
                                    <v-card-text>
                                    <v-form ref="form" v-model="valid" lazy-validation >
                                        <v-container>
                                        <v-row>
                                            <v-col>
                                                <v-text-field v-model="nombre" :counter="20" :rules="nombreRules" label="Nombre " required >
                                                </v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="4">
                                                <v-text-field v-model="precio" :counter="6" :rules="precioRules" label="Precio " prefix="$" required >
                                                </v-text-field>
                                            </v-col>
                                        </v-row>
                                        <v-row>
                                            <v-file-input
                                                :rules="foto"
                                                accept="image/png, image/jpeg,"
                                                placeholder="Elije una imagen"
                                                prepend-icon="mdi-camera"
                                                label="Imagen"> 
                                            </v-file-input>
                                        </v-row>
                                        <v-row class="mt-0">
                                            <v-text-field v-model="descripcion" :counter="80" :rules="descripcionRules" label="Descripción" required>
                                            </v-text-field>
                                        </v-row>
                                        </v-container>
                                        <small>*Todos los campos son requeridos</small>
                                    </v-form>
                                    </v-card-text>
                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn color="#00BFA5" text :disabled="!valid" @click="validate">Guardar</v-btn>
                                        <v-btn class="text-subtitle-2 font-weight-bold my-3" color="#EF9A9A" text @click="dialog=false">Cerrar</v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>
                        </v-row>

            <!--BOTÓN BUSCAR PRODUCTO-->
                    <v-row justify="center">
                        <v-dialog v-model="dialog2" persistent max-width="600px">
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn class="my-3" color="#00BFA5"  dark v-bind="attrs" v-on="on">
                                BUSCAR PRODUCTO
                                </v-btn>
                            </template>
                            <v-card>
                                <v-card-title><span class="text-h5">Agregar producto</span>
                                </v-card-title>
                                <v-card-text>
                                <v-form ref="form" v-model="valid" lazy-validation>
                                    <v-container>
                                    <v-row>
                                        <v-col>
                                            <v-autocomplete :items="['Obleas', 'Solteritas', 'Arequipe con mora', 'Conservas de fruta']" label="Tipo de Producto" v-model="select" 
                                            :rules="[v => !!v || 'Item is required']" multiple  ></v-autocomplete>
                                        </v-col>
                                    </v-row>
                                    </v-container>
                                </v-form>
                                </v-card-text>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="#00BFA5" text @click="dialog2=false">Guardar</v-btn>
                                    <v-btn class="text-subtitle-2 font-weight-bold my-3" color="#EF9A9A" text @click="dialog2=false">Cerrar</v-btn>
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
            </v-col>

<!--PRODUCTOS EN EXISTENCIA-->
            <v-col cols="9" sm="12" md="9">
                <v-simple-table>
                    <template v-slot:default>
                    <thead>
                        <tr>
                        <th class="text-center text-body-1 font-weight-medium">
                            Acciones
                        </th>
                        <th class="text-center text-body-1 font-weight-medium">
                            Nombre
                        </th>
                        <th class="text-center text-body-1 font-weight-medium">
                            Precio
                        </th>
                        <th class="text-center text-body-1 font-weight-medium">
                            Imagen
                        </th>
                        <th class="text-center text-body-1 font-weight-medium">
                            Descripción
                        </th>
                        </tr>
                    </thead>
                    <tbody class="text-center text-body-2 font-weight-medium">
                        <tr
                        v-for="item in productos"
                        :key="item._id"
                        >
                        <td cols="3" class="mx-0 px-0">
                            <div>
                                <v-btn class="caption my-3 mx-2" x-small color="#00BFA5"  dark @click="editar(item._id)" v-bind="attrs" v-on="on">
                                    <v-icon left>mdi-pencil</v-icon>
                                    Editar
                                </v-btn>
                                <v-btn class="caption my-3 mx-2" x-small color="#EF9A9A" dark @click="borrar(item._id)">
                                    <v-icon left>mdi-eraser</v-icon>
                                    Borrar
                                </v-btn>
                            </div>

                        </td>
                        <td>{{ item.nombre }}</td>
                        <td>{{ item.precio }}</td>
                        <td>{{ item.imgURL }}</td>
                        <td>{{ item.descripcion }}</td>
                        </tr>
                    </tbody>
                    </template>
                </v-simple-table>
            </v-col>       
        </v-row>
    </div>
</template>


<script>
import store from '../store/index.js'

export default {
    data: () => {
        return {
            valid: true,
            nombre: '',
            nombreRules: [
                v => !!v || 'Ingresa el nombre del producto',
                v => (v && v.length <= 20) || '',
            ],
            precio: '',
            precioRules: [
                v => !!v || 'Ingresa el precio',
                v => (v && v.length <= 6) || '',
            ],
            imgURL: [
                value => !value || value.size < 2000000 || 'La foto debe ser menor a 2 MB!',
            ],            
            descripcion: '',
            descripcionRules: [
                v => !!v || 'Ingresa la descripción',
                v => (v && v.length <= 80) || '',
            ],

            dialog: false,
            dialog2: false,
        }
    },

    methods: {
        salir(){
            console.log("Retornando Home");
            this.$router.push('/')
        },
        validate () {
            if(this.$refs.form.validate()){
                console.log("Añadido producto");

                let objProducto = {
                    nombre: this.nombre,
                    precio: this.precio,
                    imgUrl: this.imgUrl,
                    descripcion: this.descripcion
                }
                //llamo acciones el store
                store.dispatch('registrarProducto', objProducto)
                //this.$router.push('/')
            }
        },
        editar(id){
            //se toma como id:id
            let objProducto = {id};
            store.dispatch('editarProducto', objProducto).then(()=>{
                store.dispatch("cargarProducto");
            }).catch((error)=>{
                console.log(error)
            });
        },
        borrar(id){
            //se toma como id:id
            let objProducto = {id};
            store.dispatch('borrarProducto', objProducto).then(()=>{
                store.dispatch("cargarProducto");
            }).catch((error)=>{
                console.log(error)
            });
        }
    },

    created: ()=>{
        store.dispatch('cargarProducto');
    },

    computed: {
        productos: ()=>{
            store.dispatch("cargarProductos");
            return store.state.productos;
        }
    }
}
</script>

<style>

</style>