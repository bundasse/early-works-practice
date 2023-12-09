<template>
    <div class="w-full pt-12 mt-16 px-[2%] pb-8">
        <TitleText title="포트폴리오" />
        <div class="max-w-7xl mx-auto mt-8">
            <ul class="flex m-4">
                <li class="mr-4 border darkMode bg-white py-2 px-5 rounded-md">
                    <button @click="CateName = '전체'" :class="CateName === '전체' && 'font-bold text-lime-500'">전체</button>
                </li>
                <li class="mr-4 border darkMode bg-white py-2 px-5 rounded-md" v-for="e in CateList" :key="e">
                    <button @click="CateName = e.type" :class="CateName === e.type && 'font-bold text-lime-500'">{{ e.type }}</button>
                </li>
            </ul>
        </div>
        <div class="max-w-7xl mx-auto mt-8">
            <div v-for="e in CateItem" :key="e" class="bg-white mb-8 pt-12 group px-8 pb-16 rounded-md flex border darkMode flex-wrap">
                <div class="basis-[48%] relative mokup-img group-even:order-1 xl:group-even:order-2">
                    <div v-for="e in 3" :key="e">
                        <img class="w-full" :src="`/images/mokup-${e}.png`" alt="mokup">
                    </div>
                </div>
                <div class="basis-full md:basis-[52%] pt-10 group-even:order-2 xl:group-even:order-1">
                    <h3 class="text-2xl font-bold pt-[10px] pb-[10px] lg:pl-[50px]">
                        {{ e.descTitle }}
                    </h3>
                    <p class="text-base pt-[10px] pb-[10px] lg:pl-[50px]">{{ e.desc }}</p>
                    <p class="text-base pt-[10px] pb-[10px] lg:pl-[50px]">
                        <span v-for="el in e.keyword" :key="el" class="mr-2">{{ el }}</span>
                    </p>
                    <p class="text-base pt-[10px] pb-[10px] lg:pl-[50px]">
                        색상
                        <span v-for="el in e.color" :key="el" class="w-20 h-5 inline-block align-middle text-center mr-2" :style="{backgroundColor:`${el}`}">{{ el }}</span>
                    </p>
                    <p class="text-base pt-[10px] pb-[10px] lg:pl-[50px]">
                        폰트: {{ e.font }}
                    </p>
                    <p class="text-base pt-[10px] pb-[10px] lg:pl-[50px]">
                        사용툴: 
                        <span v-for="el in e.tools" :key="el" class="mr-2 align-middle">{{ el }}</span>
                    </p>
                    <p class="text-base pt-[10px] pb-[10px] lg:pl-[50px]">
                        작업기간: {{ e.date }}
                    </p>
                    <p class="text-base pt-[10px] pb-[10px] lg:pl-[50px]">
                        기여도: {{ e.contribution }}
                    </p>
                    <ul class=" flex justify-center mt-6 gap-2">
                        <li v-if="e.progress"><a :href="e.progress" class="px-8 py-1 border rounded-md darkMode text-sm">Progress</a></li>
                        <li v-if="e.original"><a :href="e.original" target="_blank" class="px-8 py-1 border rounded-md darkMode text-sm">Original</a></li>
                        <li v-if="e.redesign"><a :href="e.redesign" target="_blank" class="px-8 py-1 border rounded-md darkMode text-sm">{{e.type ==='Publishing'? 'Clone':'Redesign'}}</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    computed:{
        CateList(){
            return this.WorkList.filter((item,i)=>{
                return(
                    this.WorkList.findIndex((item2)=>{
                        return item.type === item2.type
                    }) === i
                )
            });
        },
        CateItem(){
            return this.WorkList.filter((data)=>{
                if (this. CateName !== '전체'){
                    return data.type === this.CateName
                }else{
                    return data.type
                }
            })
        }
    },
    data() {
        return {
            CateName:"전체",
            WorkList: [
                {
                    "img":"https://via.placeholder.com/500",
                    "descTitle":"뭐시기저시기 웹앱",
                    "desc":"API를 활용한 웹 앱 개발",
                    "keyword": ["반응형","Vue.js","tailwind CSS"],
                    "color": ["Red","Blue","Orange"],
                    "font": "Noto Sans KR",
                    "tools":["PS","AI","VS CODE"],
                    "date":"10일",
                    "contribution":"100%",
                    "type":"Webapp",
                    "progress":"https://via.placeholder.com/1200x5000",
                    "original":"http://www.naver.com",
                    "redesign":"http://www.kakao.com"
                },
                {
                    "img":"https://via.placeholder.com/500",
                    "descTitle":"뭐시기저시기 클론코딩",
                    "desc":"API를 활용한 웹 앱 개발",
                    "keyword": ["반응형","HTML","CSS"],
                    "color": ["Peacock","indigoBlue","Orange"],
                    "font": "Noto Sans KR",
                    "tools":["PS","AI","VS CODE"],
                    "date":"10일",
                    "contribution":"100%",
                    "type":"Publishing",
                    "progress":"",
                    "original":"",
                    "redesign":""
                },
                {
                    "img":"https://via.placeholder.com/500",
                    "descTitle":"뭐시기저시기 웹앱2",
                    "desc":"API를 활용한 웹 앱 개발",
                    "keyword": ["반응형","Vue.js","tailwind CSS"],
                    "color": ["Peacock","indigoBlue","Orange"],
                    "font": "Noto Sans KR",
                    "tools":["PS","AI","VS CODE"],
                    "date":"10일",
                    "contribution":"100%",
                    "type":"Webapp",
                    "progress":"https://via.placeholder.com/1200x5000",
                    "original":"",
                    "redesign":""
                },
                {
                    "img":"https://via.placeholder.com/500",
                    "descTitle":"뭐시기저시기 클론코딩2",
                    "desc":"API를 활용한 웹 앱 개발",
                    "keyword": ["반응형","Vue.js","tailwind CSS"],
                    "color": ["Peacock","indigoBlue","Orange"],
                    "font": "Noto Sans KR",
                    "tools":["PS","AI","VS CODE"],
                    "date":"10일",
                    "contribution":"100%",
                    "type":"Webapp",
                    "progress":"https://via.placeholder.com/1200x5000",
                    "original":"http://www.naver.com",
                    "redesign":"http://www.kakao.com"
                },
                {
                    "img":"https://via.placeholder.com/500",
                    "descTitle":"뭐시기저시기 클론코딩3",
                    "desc":"API를 활용한 웹 앱 개발",
                    "keyword": ["반응형","Vue.js","tailwind CSS"],
                    "color": ["Peacock","indigoBlue","Orange"],
                    "font": "Noto Sans KR",
                    "tools":["PS","AI","VS CODE"],
                    "date":"10일",
                    "contribution":"100%",
                    "type":"Publishing",
                    "progress":"",
                    "original":"http://www.naver.com",
                    "redesign":"http://www.kakao.com"
                },
            ]
        }
    },
}
</script>
<style>
    .mokup-img > div{
        position:absolute;
        overflow: hidden;
        bottom:0;
    }
    .mokup-img > div:nth-child(1){width: 85%; left: 50%; transform: translateX(-50%);}
    .mokup-img > div:nth-child(1)::after{content: ''; position: absolute; width: 92%; height: 62%; background: url('/images/preview.jpg') center top no-repeat; left: 19px; top: 22px; background-size: cover; transition: 5s;}
    .mokup-img > div:nth-child(2){width: 35%; right: 0;}
    .mokup-img > div:nth-child(2)::after{content: ''; position: absolute; width: 86%; height: 81%; background: url('/images/preview.jpg') center top no-repeat; left: 16px; top: 25px; background-size: cover; transition: 5s;}
    .mokup-img > div:nth-child(3){width: 23%; left: 0;}
    .mokup-img > div:nth-child(3)::after{content: ''; position: absolute; width: 90%; height: 95%; background: url('/images/preview.jpg') center top no-repeat; left: 7px; top: 7px; background-size: cover; border-radius: 5px; transition: 5s;}

    @media screen and (max-width:1200px) {
        .mokup-img{flex-basis: 100%; height: 500px;}
        .mokup-img > div:nth-child(1){width: 550px;}
        .mokup-img > div:nth-child(1)::after{top:23px; width: 87%; height: 62%; left: 21px;}
        .mokup-img > div:nth-child(2){width: 184px; right: 0;}
        .mokup-img > div:nth-child(2)::after{width: 85%; top: 24px;}
        .mokup-img > div:nth-child(3){width: 126px; left: 0;}
    }
    @media screen and (max-width:640px) {
        .mokup-img{height: 70.3125vh;}
        .mokup-img > div:nth-child(1){width: 100%;}
        .mokup-img > div:nth-child(1)::after{top:4.7%; width: 92.5%; left: 3.8%;}
        .mokup-img > div:nth-child(2){width: 35%;}
        .mokup-img > div:nth-child(2)::after{height: 82%; top: 10%; left:8%;}
        .mokup-img > div:nth-child(3){width: 20%;}
    }
</style>