<template>
    <div class="px-10 py-10 flex justify-between flex-wrap">
        <h2 class="basis-full">메인화면</h2>
        <div class="basis-1/4 px-5 py-10 rounded-3xl border-4 border-cyan-600">
            <PieChart />
        </div>
        <div class="basis-1/4 px-5 py-10 rounded-3xl border-4 border-cyan-600">
            어쩌구저쩌구
        </div>
    </div>
</template>
<script>
import PieChart from '@/components/PieChart.vue'
export default {
    name:'HomeView',
    components:{
        PieChart
    }
}
</script>
<style lang="css">
    
</style>