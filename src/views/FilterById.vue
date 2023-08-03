<template>
    <h1 class="text-semibold font-serif text-xl">Filter By Id</h1>
    <div >
        <div class="flex">
        <input type="text" class="my-4 p-2 border border-gray-300 rounded-md max-w-40" v-model="characterId">
        <button class="m-4 px-7   bg-yellow-200 hover:bg-yellow-400 rounded-full" @click="getCharById(characterId)">Filter</button>
        </div>
       <div>
            <ul  class="grid gap-4 grid-cols-6 grid-rows-3">  
                <li class=" p-4 shadow-lg">
                    <img class="w-auto aspect-square"  :src="character.image" :alt="character.name + 'image'"  />
                    <div class="py-4 font-serif">
                        <p> Name: {{ character.id }}</p>
                        <p> Name: {{ character.name }}</p>
                        <p> Gender: {{ character.gender }}</p>
                        <p> Hair: {{ character.Hair }}</p>
                    </div>
                </li> 
            </ul>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
//import CardComp from '../components/Card.vue'
export default {
    name: 'FilterById',
    data () {
        return {
            characterId: 1
        }
    },
    components:{
    //    CardComp
    },
    methods: {
        ...mapActions({ getCharById: 'getCharacterById' })
    },
    computed: {
        ...mapGetters({ character: 'getCharacter' })
    }
}
</script>