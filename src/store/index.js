import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //arreglo donde estan los datos
    productos: []
  },
  mutations: {
    //mutations llaman al estado para llenarlo
    setProducto(state, payload){
      state.productos = payload;
    },
    //para que sea reactiva, que la info entre de una
    pushProducto(state, payload){
      state.productos.push(payload);
    }

  },
  actions: {
    //para acceder mutations uso las acciones con commit
    async cargarProducto({commit}){
      const peticion = await fetch('http://localhost:3000/producto');
      //const peticion = await fetch('mongodb+srv://prueba9876:9876@misiontic.b1dgb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority/producto');
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

    async editarProducto({commit}, objProdBorrar){
      const peticion = await fetch('http://localhost:3000/producto',{
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(objProdBorrar)
      });
    }
    
  },
  modules: {
  }
})
