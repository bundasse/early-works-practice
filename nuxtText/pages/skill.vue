<template>
    <div class="w-full pt-12 mt-16 px-[2%] pb-8">
        <TitleText title="스킬" />
        <div class="max-w-7xl mx-auto mt-8">
            <div class="bg-white rounded-md border darkMode p-5 mb-8 last:mb-0">
                <div class="w-full h-20" v-for="e in ProgressList" :key="e">
                    <div class="w-full h-5 bg-[#e0e0e0] rounded-[50px]">
                        <div class="h-full bg-slate-700 duration-1000 ease-in-out rounded-[50px] text-right relative mb-3 first:mt-10" :style="{width:`${e.progressBefore}%`}">
                            <p class="absolute -top-6 md:-top-7 left-1 text-sm md:text-lg">{{ e.textList }}</p>
                            <span class="text-sm inline-block pr-2 relative -top-0.5 text-white">{{ e.progressBefore }}%</span>
                        </div>
                        <p class="text-sm md:text-base">{{e.desc}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            ProgressList:[
                {
                    textList:"HTML",
                    progressBefore:0,
                    progressAfter:60,
                    desc:"웹표준에 준수하여 마크업을 할 수 있습니다."
                },
                {
                    textList:"CSS",
                    progressBefore:0,
                    progressAfter:60,
                    desc:"CSS grid, flex를 활용할 수 있으며 SCSS, Tailwind CSS로 페이지를 구현할 수 있습니다."
                },
                {
                    textList:"JS",
                    progressBefore:0,
                    progressAfter:40,
                    desc:"웹표준에 준수하여 마크업을 할 수 있습니다."
                },
                {
                    textList:"JQUERY",
                    progressBefore:0,
                    progressAfter:50,
                    desc:"웹표준에 준수하여 마크업을 할 수 있습니다."
                },
                {
                    textList:"Vue.js",
                    progressBefore:0,
                    progressAfter:70,
                    desc:"웹표준에 준수하여 마크업을 할 수 있습니다."
                },
                {
                    textList:"React",
                    progressBefore:0,
                    progressAfter:20,
                    desc:"웹표준에 준수하여 마크업을 할 수 있습니다."
                },
            ]
        }
    },
    mounted() {
        this.ProgressList.forEach((e)=>{
            setTimeout(()=>{
                e.progressBefore = e.progressAfter
            }, 500);
        })
    },
}
</script>