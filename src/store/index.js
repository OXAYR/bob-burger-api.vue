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
      const response = await axios.get(`https://bobsburgers-api.herokuapp.com/v2/characters/${id}`)
      commit('SET_CHARACTER', response.data)
    },
    async getCharacterByHair({ commit }, hair) {
      const response = await axios.get(`https://bobsburgers-api.herokuapp.com/v2/characters?hair=${hair}`)
      commit('SET_CHARACTER', response.data)
      console.log(response.data)
    },
    async getCharacterByGender({ commit }, gender) {
      const response = await axios.get(`https://bobsburgers-api.herokuapp.com/v2/characters?gender=${gender}`)
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






