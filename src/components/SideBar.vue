<template>
    <div class="fixed bg-emerald-50 h-screen w-48">
        <ul>
          <router-link to="/home/allView">
            <li class="list flex items-center justify-center hover:bg-emerald-100 h-20">
              All
            </li>
            </router-link>
          <router-link to="/home/filterById">
            <li class="list flex items-center justify-center hover:bg-emerald-100 h-20">
              By Id
            </li>
            </router-link>
            
            <router-link to="/home/filterByGender">
            <li class="list flex items-center justify-center hover:bg-emerald-100 h-20">
              By Gender
            </li>
            </router-link>
            
            <router-link to="/home/filterByHair">
            <li class="list flex items-center justify-center hover:bg-emerald-100 h-20">
              By Hair
            </li>
            </router-link>
            
        </ul>
    </div>
</template>
<script>
export default{
    name: 'SideBar'

}
</script>

<style scoped>


.style{
    list-style-type: none;
}

</style>