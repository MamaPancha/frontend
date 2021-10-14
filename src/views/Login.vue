<template>

    <div id="contLogin">
        <v-card class="mx-auto my-15" max-width="400" text-center elevation="11">
            <v-card-subtitle class="pb-5"><h3>Ingreso de Admin</h3></v-card-subtitle>
            <v-card-text class="text--primary mb-0">
                <v-form class="mx-15"
                    ref="form"
                    v-model="valid"
                    lazy-validation
                >
                    <v-row class="d-flex justify-center mb-6">
                        <v-col cols="12" sm="12" md="12">
                            <v-text-field
                                v-model="emailUsuario"
                                :rules="emailRules"
                                label="E-mail"
                                required
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row class="d-flex justify-center mb-6">
                        <v-col cols="12" sm="12" md="12">
                            <v-text-field
                                v-model="contrasenaUsuario"
                                :counter="10"
                                :rules="contrasenaRules"
                                label="Contraseña"
                                required
                            ></v-text-field>
                        </v-col>
                    </v-row>
                </v-form>
            </v-card-text>
            <v-card-actions class="d-flex justify-center">
                    <v-btn class="text-subtitle-1 font-weight-bold" color="#00BFA5" text @click="login">Ingresar</v-btn>
                    <v-btn class="text-subtitle-2 font-weight-bold" color="#EF9A9A" text @click="cancelar">Cancelar</v-btn>
                    <v-btn class="text-subtitle-1 font-weight-bold" color="#9575CD" text @click="registrarse">Registrarse</v-btn>
            </v-card-actions>
        </v-card>
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
        cancelar(){
            console.log("Retornando Home");
            this.$router.push('/')
        },
        registrarse(){
            console.log("Ingresando registro");
            this.$router.push('/RegistroUsuario')
        },
        login(){
            if(this.$refs.form.validate()){
                console.log("Añadido producto");

                let objProducto = {
                    nombre: this.emailUsuario,
                    precio: this.contrasenaUsuario
                }
                store.dispatch('loginUsuario', objProducto).then(()=>{
                    this.$router.push('/MenuAdmin')
                }).catch((error)=>{
                    console.log(error)
                });
            }else{
                this.$router.push('/login')
            }
        }
    }
}
</script>

<style>

</style>