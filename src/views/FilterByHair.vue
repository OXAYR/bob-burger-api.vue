<template>
  <h1 class="text-semibold font-serif text-xl">Filter By Hair</h1>
  <div class="flex">
    <input
      type="text"
      class="my-4 p-2 border border-gray-300 rounded-md max-w-40"
      v-model="characterHair"
    />
    <button
      class="m-4 px-7 bg-yellow-200 hover:bg-yellow-400 rounded-full"
      @click="getCharByHair(characterHair)"
    >
      Filter
    </button>
  </div>

  <CardComp :item="character" />
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import CardComp from "../components/Card.vue";
export default {
  name: "FilterById",
  data() {
    return {
      characterHair: "",
    };
  },
  components: {
    CardComp,
  },
  methods: {
    ...mapActions({ getCharByHair: "getCharacterByHair" }),
  },
  computed: {
    ...mapGetters({ character: "getCharacter" }),
  },
};
</script>
