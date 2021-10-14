import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //arreglo donde estan los datos
    productos: [],
    usuarios: []
  },
  mutations: {
    //mutations llaman al estado para llenarlo
    setProducto(state, payload){
      state.productos = payload;
    },
    setUsuario(state, payload){
      state.usuarios = payload;
    },
    //para que sea reactiva, que la info entre de una
    pushProducto(state, payload){
      state.productos.push(payload);
    },
    pushUsuario(state, payload){
      state.usuarios.push(payload);
    }


  },
  actions: {
    //para acceder mutations uso las acciones con commit
    async cargarProducto({commit}){
      const peticion = await fetch('http://localhost:3000/producto');
      const data = await peticion.json();
      commit('setProducto', data);
      console.log(data);

    },

    async registrarProducto({commit}, objProducto){
      const peticion = await fetch('http://localhost:3000/producto', {
        method: 'POST', //'PUT' 'DELETE
        headers: {
          //para que la info sea tipo JSON
          'Content-Type': 'application/json'
        }, 
        //convierte un objeto javascript a JSON y lo asigna al cuerpo de la petición
        body: JSON.stringify(objProducto)
      });
      const data = await peticion.json();
      console.log(peticion);
      console.log(data);
      commit('pushProducto', data)
    },

    async borrarProducto({commit}, objProdBorrar){
      const peticion = await fetch('http://localhost:3000/producto',{
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(objProdBorrar)
      });
    },

    async editarProducto({commit}, objProdEditar){
      const peticion = await fetch('http://localhost:3000/producto',{
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(objProdEditar)
      });
    },

    async cargarUsuario({commit}){
      const peticion = await fetch('http://localhost:3000/administrador');
      const data = await peticion.json();
      commit('setUsuario', data);
      console.log(data);

    },

    async registrarUsuario({commit}, objUsuario){
      const peticion = await fetch('http://localhost:3000/administrador', {
        method: 'POST', //'PUT' 'DELETE
        headers: {
          //para que la info sea tipo JSON
          'Content-Type': 'application/json'
        }, 
        //convierte un objeto javascript a JSON y lo asigna al cuerpo de la petición
        body: JSON.stringify(objUsuario)
      });
      const data = await peticion.json();
      console.log(peticion);
      console.log(data);
      commit('pushUsuario', data)
    },

    async borrarUsuario({commit}, objUsuBorrar){
      const peticion = await fetch('http://localhost:3000/administrador',{
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(objUsuBorrar)
      });
    },
    
    async loginUsuario({commit}, objUsuBorrar){
      const peticion = await fetch('http://localhost:3000/administrador',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(objUsuBorrar)
      });
    },

  },
  modules: {
  }
})
