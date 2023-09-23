<template>
    <div class=" col-span-full flex justify-between px-3 py-3 bg-cyan-600 text-white">
        <h1><router-link to="/">기업로고</router-link></h1>
        <ul class="flex gap-x-3 items-stretch">
            <li>검색</li>
            <li v-for="(e, i) in gnb" :key="i"><router-link to="">{{e.name}}</router-link></li>
            <li>아이콘 프로필</li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'GnbComp',
    data() {
        return {
            gnb: [{name:'알림'},{name:'메세지'}]
        }
    },
}
</script>
<style lang="css">
    
</style>