<template>
    <div class="w-full px-[2%] sticky top-0 bg-white py-2.5 z-50 darkMode">
        <div class="max-w-7xl mx-auto flex justify-between items-center">
            <nuxt-link to="/">
                <img src="https://via.placeholder.com/120x50" alt="logo">
            </nuxt-link>
            <div class="basis-3/4 hidden md:block">
                <ul class="flex justify-around">
                    <li v-for="e in NaviList" :key="e">
                        <nuxt-link :to="e.link">{{e.name}}</nuxt-link>
                    </li>
                </ul>
            </div>
            <div class="basis-1/12 hidden md:block">
                <ul class="flex justify-between">
                    <li class="basis-2/4 text-center cursor-pointer text-2xl"><font-awesome-icon :icon="['fas', isDark ? 'sun' : 'moon']" @click="toggleTheme"/></li>
                    <li class="basis-2/4 text-center cursor-pointer text-2xl"><font-awesome-icon :icon="['fas','globe']"/></li>
                </ul>
            </div>
            <div>
                <font-awesome-icon :icon="['fas','bars']" class="!text-3xl cursor-pointer md:!hidden" @click="isOpen = true"/>
            </div>
            <div :class="isOpen && '!right-0'" class="w-72 h-full fixed darkMode bg-gray-100 z-50 p-12 box-border transition-all duration-500 top-0 -right-80 md:hidden">
                <font-awesome-icon :icon="['fas','times']" class="!text-3xl cursor-pointer md:hidden absolute right-5 top-5" @click="isOpen=false"/>
                <div class="text-center mt-6">
                    <img src="https://via.placeholder.com/100" alt="image" class="mx-auto rounded-full mb-4">
                    <p>프론트엔드 개발자 조영민</p>
                    <ul class="mt-12">
                        <li v-for="e in NaviList" :key="e" class="py-5 border-b">
                            <font-awesome-icon :icon="e.icon" class="mr-2"/>
                            <nuxt-link :to="e.link" @click="isOpen=false">{{e.name}}</nuxt-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    data() {
        return {
            isDark:this.$colorMode.preference === 'dark',
            isOpen: false,
            NaviList: [
                {
                    name:"프로필",
                    link: "/about",
                    icon: "user"
                },
                {
                    name:"스킬",
                    link: "/skill",
                    icon: "code"
                },
                {
                    name:"포트폴리오",
                    link: "/portfolio",
                    icon: "folder-open"
                }
            ]
        }
    },
    methods: {
        toggleTheme(){
            this.$colorMode.preference = this.isDark ? 'light': 'dark'
            this.isDark = !this.isDark
        }
    },
}
</script>
<style>
.dark-mode body{
    animation: infinite 9s background alternate-reverse;
    color:#d9d9d9;
}
@keyframes background{
    0% { background-color: #091a28;}
    50% { background-color: darkslateblue;}
    100% { background-color: darkslategray;}
}
</style>