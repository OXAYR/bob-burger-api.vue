<template>
    <div>
        <!-- <div v-if="item.length < 2">
         <ul  class="grid gap-4 grid-cols-6 grid-rows-3">  
            <li class=" p-4 shadow-lg">
                <img class="w-auto aspect-square"  :src="item.image" :alt="item.name + 'image'"  />
                <div class="py-4 font-serif">
                    <p> Name: {{ item.name }}</p>
                    <p> Gender: {{ item.gender }}</p>
                </div>
            </li> 
        </ul>
    </div> -->
<!-- <div v-else>> -->
    <ul  class="grid gap-4 grid-cols-6 grid-rows-3">  
       <li  v-for="(itm,id) in item" :key="id" class=" p-4 shadow-lg">
          <img class="w-auto aspect-square"  :src="itm.image" :alt="itm.name + 'image'"  />
          <div class="py-4 font-serif">
            <p> Name: {{ itm.name }}</p>
            <p> Gender: {{ itm.gender }}</p>
          </div>
      </li> 
    </ul>
<!-- </div> -->
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