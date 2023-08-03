<template>
    <div class="flex flex-col justify-center items-center">
        <input type="text" class="w-full m-auto outline-none mt-20 mx-8 border border-black" v-model="characterHair">
        <button class="bg-green-400 w-48 mt-4 mx-20" @click="getCharByHair(characterHair)">Filter</button>
        
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'FilterById',
    data () {
        return {
            characterHair: null
        }
    },
    methods: {
        ...mapActions({ getCharByHair: 'getCharacterByHair' })
    },
    computed: {
        ...mapGetters({ character: 'getCharacter' })
    }
}
</script>