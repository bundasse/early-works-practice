<template>
    <div class="w-full pt-12 mt-16 px-[2%] pb-8">
        <TitleText title="프로필"/>
        <div class="max-w-7xl mx-auto">
            <div class="h-auto flex overflow-hidden mt-8 flex-wrap justify-between">
                <div class="basis-full md:basis-[30%] py-12 px-4 bg-white rounded-md darkMode text-center">
                    <img src="https://via.placeholder.com/300" alt="프로필 사진" class="rounded-full block mx-auto">
                    <ul>
                        <li class="pl-5 box-border pt-6">조영민 / Young-min Cho</li>
                        <li class="pl-5 box-border pt-6">1990. 4. 28</li>
                        <li class="pl-5 box-border pt-6"><a href="mailto:ymtotolove@gmail.com">ymtotolove@gmail.com</a></li>
                    </ul>
                    <span class="darkMode inline-block h-8 mt-2 mr-1 text-sm border bg-white rounded-2xl align-top leading-[19px] box-border tracking-tighter pt-1.5 px-3 pb-2 shadow-md">#성실함</span>
                    <span class="darkMode inline-block h-8 mt-2 mr-1 text-sm border bg-white rounded-2xl align-top leading-[19px] box-border tracking-tighter pt-1.5 px-3 pb-2 shadow-md">#설명을_잘하는</span>
                    <span class="darkMode inline-block h-8 mt-2 mr-1 text-sm border bg-white rounded-2xl align-top leading-[19px] box-border tracking-tighter pt-1.5 px-3 pb-2 shadow-md">#편안한</span>
                    <span class="darkMode inline-block h-8 mt-2 mr-1 text-sm border bg-white rounded-2xl align-top leading-[19px] box-border tracking-tighter pt-1.5 px-3 pb-2 shadow-md">#어쩌구저쩌구</span>
                </div>
                <div class="basis-full md:basis-[67.5%] mt-8 md:mt-0">
                    <div class="bg-white rounded-md border darkMode p-5 mb-8 last:mb-0" v-for="e in Content" :key="e">
                        <h3 class="text-base md:text-xl mb-4">◆ {{ e.title }}</h3>
                        <p class="mb-2 last:mb-0 text-sm md:text-base" v-if="e.desc">
                            <span class="font-bold">{{ e.desc }}</span>{{ e.desc2 }}
                        </p>
                        <p class="mb-2 last:mb-0 text-sm md:text-base" v-for="(el, index) in e.date" :key="el">
                            {{ el }} : {{ e.datedesc[index] }}
                        </p>
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
            Content:[
                {
                    title: "MIND",
                    desc: '"혼자 부딪혀봐야 온전히 내것이 된다"',
                    desc2: "는 마인드를 가지고 있어, 혼자 찾아보고 고민하여 문제를 해결하는 것을 좋아합니다."
                },
                {
                    title: "EDUCATION",
                    date:[
                        "2022.11.29~2023.6.12",
                        "2023.01.01~2023.01.01"
                    ],
                    datedesc:[
                        "(디지털컨버젼스) 스마트혼합-뷰(Vue) 활용 프론트엔드 개발자 양성과정 B",
                        "XX학교 졸업"
                    ]
                },
                {
                    title: "LICENSE",
                    date:[
                        "2022.08",
                        "2022.07",
                        "2022.06"
                    ],
                    datedesc:[
                        "정보처리산업기사","운전면허1종보통", "컴퓨터활용능력1급"
                    ]
                }
            ]
        }
    },
}
</script>
<style>
    
</style>