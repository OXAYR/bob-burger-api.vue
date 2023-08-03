import axios from 'axios'
import { createStore } from 'vuex'
export default createStore({
  state: {
    user:[],
    character: {}
  },
  mutations: {
    setUser(state, payload) {
      state.user=payload
    },
    SET_CHARACTER(state, payload) {
      state.character = payload
    }
  },
  actions: {
   async registerUser({ commit }) {
      const response = await axios.get("https://bobsburgers-api.herokuapp.com/v2/characters")
      commit('setUser',response.data)
    },

    async getCharacterById({ commit }, id) {
      console.log('id from component', id);
      const response = await axios.get(`https://bobsburgers-api.herokuapp.com/v2/characters/${id}`)
      commit('SET_CHARACTER', response.data)
    } 
  },
  getters: {
    getUser(state) {
      return state.user
    },
    getCharacter(state) {
      return state.character
    }
  }
})






