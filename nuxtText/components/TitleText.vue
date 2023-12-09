<template>
    <div class="max-w-7xl p-5 mx-auto bg-white rounded-md border darkMode">
        <h3 class="relative after:absolute after:w-10 after:h-[2px] after:bg-black after:-bottom-1 after:left-2/4 after:-translate-x-2/4 tracking-widest text-center text-xl sm:text-2xl lg:text-3xl">{{title}}</h3>
    </div>
</template>
<script>
export default {
    props:{
        title: String
    }    
}
</script>
<style>
    .dark-mode h3::after{
        background-color: #d9d9d9;
    }
</style>