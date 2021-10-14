<template>
    <div>
        <v-row class="mx-2 my-1">
            <v-col cols="12" sm="12" md="12">
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
                            Apellido
                        </th>
                        <th class="text-center text-body-1 font-weight-medium">
                            Cedula
                        </th>
                        <th class="text-center text-body-1 font-weight-medium">
                            Email
                        </th>
                        </tr>
                    </thead>
                    <tbody class="text-center text-body-2 font-weight-medium">
                        <tr v-for="item2 in usuarios" :key="item2._id">
                        <td cols="3" class="mx-0 px-0">
                            <v-btn class="caption my-3 mx-2" x-small color="#EF9A9A" dark @click="borrarUsuario(item2._id)">
                                <v-icon left>mdi-eraser</v-icon>
                                Borrar
                            </v-btn>
                        </td>
                        <td>{{ item2.nombre }}</td>
                        <td>{{ item2.apellido }}</td>
                        <td>{{ item2.cedula}}</td>
                        <td>{{ item2.email }}</td>
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
    data: ()=>{
        return{

        }
    },

    methods: {
        salir(){
            console.log("Retornando Home");
            this.$router.push('/')
        },
        borrarUsuario(id){
            //se toma como id:id
            let objUsuBorrar = {id};
            store.dispatch('borrarUsuario', objUsuBorrar).then(()=>{
                store.dispatch("cargarUsuario");
            }).catch((error)=>{
                console.log(error)
            });
        }
    },

    created: ()=>{
        store.dispatch('cargarUsuario')
    },

    computed: {
        usuarios: ()=>{
            store.dispatch("cargarUsuario");
            return store.state.usuarios;
        }
    }
}
</script>

<style>

</style>