<template>
    <div class="w-full">
        <div class="max-w-7xl mx-auto">
            <div class="flex flex-wrap items-center h-[calc(100vh_-_150px)]">
                <div class="basis-full text-center flex items-center flex-wrap">
                    <p class="txt-1 basis-full text-5xl lg:text-7xl font-medium lg:font-semibold mb-5 lg:leading-normal leading-snug">FRONT-END DEV.</p>
                    <p class="txt-2 basis-full text-center text-sm md:text-3xl">HONG GIL DONG PORTFOLIO</p>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.txt-1{animation: top 1s forwards;}
.txt-2{animation: letter 1s 1s backwards;}
/* 앞쪽이 실행시간 뒤가 딜레이 */
@keyframes top{
 0%{margin-top:-50px; opacity: 0;}
 50%{margin-top:0; }
 100%{opacity: 1;}
}
@keyframes letter{
    0%{letter-spacing:1em; opacity: 0;}
 50%{letter-spacing:0.1em; opacity: 0.5;}
 100%{opacity: 1;}

}
</style>