<template>
    <div class="col-span-full flex justify-between px-3 py-3 bg-cyan-600 text-white">
        <h1><router-link to="/">기업로고</router-link></h1>
        <ul class="flex gap-x-3 items-stretch">
            <li class="relative after:absolute after:w-3 after:h-3 after:-right-1 after:-top-1 after:bg-red-600 after:rounded-full">검색</li>
            <li class="relative after:absolute after:w-3 after:h-3 after:-right-1 after:-top-1 after:bg-red-600 after:rounded-full">알림</li>
            <li class="relative after:absolute after:w-3 after:h-3 after:-right-1 after:-top-1 after:bg-red-600 after:rounded-full">메세지</li>
            <li>아이콘 프로필</li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'GnbComp',
    data() {
        return {
        }
    },
}
</script>
<style lang="css">
    
</style>