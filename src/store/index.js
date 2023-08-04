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
        try {
          const response = await axios.get("https://bobsburgers-api.herokuapp.com/v2/characters")
          commit('setUser', response.data)
        } catch (error) {
          console.log(error)
        }
      },
    
      async getCharacterById({ commit }, id) {
        try {
          const response = await axios.get(`https://bobsburgers-api.herokuapp.com/v2/characters/${id}`)
          commit('SET_CHARACTER', response.data)
        } catch (error) {
          console.log(error)
        }
      },
    
      async getCharacterByHair({ commit }, hair) {
        try {
          const response = await axios.get(`https://bobsburgers-api.herokuapp.com/v2/characters?hair=${hair}`)
          commit('SET_CHARACTER', response.data)
          console.log(response.data)
        } catch (error) {
          console.log(error)
        }
      },
    
      async getCharacterByGender({ commit }, gender) {
        try {
          const response = await axios.get(`https://bobsburgers-api.herokuapp.com/v2/characters?gender=${gender}`)
          commit('SET_CHARACTER', response.data)
        } catch (error) {
          console.log(error)
        }
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






