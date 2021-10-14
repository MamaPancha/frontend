<template>
    <v-form class="mx-15"
        ref="form"
        v-model="valid"
        lazy-validation
    >
    <v-row class="mx-15 my-5 d-flex justify-center mb-6">
        <v-col cols="12" sm="12" md="4">
            <v-text-field
                v-model="nombreUsuario"
                :counter="10"
                :rules="nombreUsuarioRules"
                label="Nombre"
                required
            ></v-text-field>
        </v-col>
        <v-col cols="12" sm="12" md="4">
            <v-text-field
                v-model="apellidoUsuario"
                :counter="10"
                :rules="apellidoRules"
                label="Apellido"
                required
            ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="4">
            <v-text-field
            v-model="cedulaUsuario"
            :counter="10"
            :rules="cedulaRules"
            label="Cedula"
            required
        ></v-text-field>
        </v-col>
    </v-row>
        <v-row class="mx-15 my-5 d-flex justify-center mb-6">
        <v-col cols="12" sm="6" md="4">
            <v-text-field
                v-model="emailUsuario"
                :rules="emailRules"
                label="E-mail"
                required
            ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="4">
            <v-text-field
                v-model="contrasenaUsuario"
                :counter="10"
                :rules="contrasenaRules"
                label="Contraseña"
                required
            ></v-text-field>
        </v-col>
    </v-row>
    <v-row class="my-2 d-flex justify-center justify-md-center justify-sm-center justify-lg-center justify-xl-center">
        <v-col class="my-1 mx-1 d-flex justify-center justify-md-center justify-sm-center justify-lg-center justify-xl-center">
            <v-btn class="my-1 mx-1 d-flex justify-center justify-md-center justify-sm-center justify-lg-center justify-xl-center" dark 
                :disabled="!valid"
                color="#00BFA5"
                @click="validate"
            >
            Validar
            </v-btn>
            <v-btn class="my-1 mx-1 d-flex justify-center justify-md-center justify-sm-center justify-lg-center justify-xl-center" color="#EF9A9A" dark  @click="reset"
            >
            Reset
            </v-btn>
            <v-btn class="my-1 mx-1 d-flex justify-center justify-md-center justify-sm-center justify-lg-center justify-xl-center" color="#EF9A9A"  dark @click="cancelar">
                Salir
            </v-btn>
        </v-col>
    </v-row>



    </v-form>
</template>

<script>
import store from '../store/index.js'

    export default {
        data: () => ({
            valid: true,
            nombreUsuario: '',
            nombreUsuarioRules: [
                v => !!v || 'Nombre es requerido',
                v => (v && v.length <= 10) || 'Nombre debe ser hasta 10 caracteres',
            ],
            apellidoUsuario:'',
            apellidoRules: [
                v => !!v || 'Apellido es requerido',
                v => (v && v.length <= 10) || 'Apellido debe ser hasta 10 caracteres',
            ],
            cedulaUsuario:'',
            cedulaRules: [
                v => !!v || 'Cedula es requerido',
                v => (v && v.length <= 10) || 'ID debe ser hasta 10 caracteres',
            ],
            emailUsuario: '',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
            contrasenaUsuario:'',
            contrasenaRules: [
                v => !!v || 'Contraseña es requerido',
                v => (v && v.length <= 15) || 'Contraseña debe ser hasta 15 caracteres',
            ],
        }),

        methods: {
            validate () {
                if(this.$refs.form.validate()){
                    console.log("Añadido usuario");

                    let objUsuario = {
                        nombre: this.nombreUsuario,
                        apellido: this.apellidoUsuario,
                        cedula: this.cedulaUsuario,
                        email: this.emailUsuario,
                        contrasena: this.contrasenaUsuario
                    }
                    //llamo acciones el store
                    store.dispatch('registrarUsuario', objUsuario)
                    //this.$router.push('/')
                }
                this.$refs.form.reset()
            },
            reset () {
                this.$refs.form.reset()
            },
            resetValidation () {
                this.$refs.form.resetValidation()
            },
            cancelar(){
                console.log("Retornando Home");
                this.$router.push('/login')
            },
        },

    }
</script>

<style>

</style>