<template>
    <div class="bg-gray-800 pt-10">
        <ul>
            <li v-for="(e, i) in menulist" :key="i">
                <p class="px-3 py-3 border-y-[1px] border-gray-700 text-gray-300 hover:text-white hover:font-bold cursor-pointer flex justify-between" @click="openSubMethod(i)">
                    <router-link :to="e.link">{{ e.name }}</router-link>
                    <img :class="openMenu === i? 'rotate-90':''" class="w-4 transition-all duration-300" :src="require(`../assets/icon-small-down.svg`)" alt="펼침 아이콘">
                </p>
                <!-- 서브메뉴 -->
                <ul>
                    <li :class="openMenu === i ? '' : 'hidden'" v-for="(el, index) in submenulist[i]" :key="index" class="px-3 py-2 bg-gray-500 hover:bg-gray-300 cursor-pointer">
                        <router-link :to="el.link">{{ el.name }}</router-link>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'LnbComp',
    data() {
        return {
            menulist:[{name:"메인메뉴1",link:""},{name:"메인메뉴2",link:""},{name:"메인메뉴3",link:""}],
            submenulist:[[{name:"서브메뉴1",link:""},{name:"서브메뉴2",link:""},{name:"서브메뉴3",link:""}],
            [{name:"서브메뉴1",link:""},{name:"서브메뉴2",link:""},{name:"서브메뉴3",link:""}],
            [{name:"서브메뉴1",link:""},{name:"서브메뉴2",link:""},{name:"서브메뉴3",link:""}]],
            openSub:false,
            openMenu:''
        }
    },
    methods: {
        openSubMethod(e){
            if(this.openSub === false){
                this.openSub = true;
                this.openMenu = e;
            }else if(this.openSub === true && this.openMenu === e){
                this.openSub = false;
                this.openMenu = '';
            }else{
                this.openMenu = e;
            }

        }
    },
}
</script>
<style lang="css">
    
</style>