<template>
    <div class="px-10 py-10 flex justify-between flex-wrap">
        <h2 class="basis-full">메인화면</h2>
        <div class="basis-[23%] px-5 py-5 rounded-3xl shadow-md shadow-slate-400">
            <PieChart />
        </div>
        <div class="basis-[65%] px-5 py-5 rounded-3xl shadow-md shadow-slate-400">
            <LineChart />
        </div>
    </div>
</template>
<script>
import PieChart from '@/components/PieChart.vue'
import LineChart from '@/components/LineChart.vue'
export default {
    name:'HomeView',
    components:{
        PieChart,
        LineChart
    }
}
</script>
<style lang="css">
    
</style>