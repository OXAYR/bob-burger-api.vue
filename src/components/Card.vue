<template>
    <div>
    <ul  class="grid gap-4 grid-cols-6 grid-rows-3">
      
       <li v-for="itm in item" :key="itm.id" class=" p-4 shadow-lg">
          <img class="w-auto aspect-square"  :src="itm.image" :alt="itm.name + 'image'"  />
          <div class="py-4 font-serif">
            <p> Name: {{ itm.name }}</p>
            <p> Gender: {{ itm.gender }}</p>
          </div>
      </li> 
    </ul>
  </div>
  </template>

<script> 
export default{
    name: 'CardComp',
    props:{
        item:{}
    }
}

</script>