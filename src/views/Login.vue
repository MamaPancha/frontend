<template>
    <div id="contLogin">
        <v-card class="mx-auto my-15" max-width="400" text-center elevation="11">
            <v-card-subtitle class="pb-5"><h3>Ingreso de Admin</h3></v-card-subtitle>
            <v-card-text class="text--primary mb-0">
                <v-form>
                    <v-text-field label="Correo" filled>
                    </v-text-field>
                    <v-text-field label="Contaseña" filled>
                    </v-text-field>
                </v-form>
            </v-card-text>
            <v-card-actions class="d-flex justify-center">
                <v-btn class="text-subtitle-1 font-weight-bold" color="#00BFA5" text @click="login">Ingresar</v-btn>
                <v-btn class="text-subtitle-2 font-weight-bold" color="#EF9A9A" text @click="cancelar">Cancelar</v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
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
        login(){
            console.log("Verificando credenciales");
            this.$router.push('/CRUD')
        }
    }
}
</script>

<style>

</style>