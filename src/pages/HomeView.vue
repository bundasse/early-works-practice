<template>
    <div class="px-10 py-10 flex justify-between flex-wrap bg-gray-100 gap-y-5">
        <h2 class="basis-full">메인화면</h2>
        <!-- 파이 차트 -->
        <div v-for="(e, i) in PieData" :key="i" class="basis-[32.5%] py-5 rounded-2xl bg-white">
            <PieChart :chartData="e" />
        </div>
        <!-- 프로그레스 서클 -->
        <div v-for="(e, i) in DoughnutData" :key="i" class="basis-[22.5%] py-5 rounded-2xl bg-white">
            <DoughnutChart :chartData="e" />
        </div>
        <!--  -->
        <div class="basis-[25%] px-5 py-5 rounded-2xl bg-white">

        </div>
        <!-- 라인 차트 -->
        <div class="basis-[65%] px-5 py-5 rounded-2xl bg-white">
            <LineChart :chartData="LineData"/>
        </div>
    </div>
</template>
<script>
import PieChart from '@/components/PieChart.vue'
import LineChart from '@/components/LineChart.vue'
import DoughnutChart from '@/components/DoughnutChart.vue'
export default {
    name:'HomeView',
    data() {
        return {
            PieData:[
                {
                    labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
                    datasets: [
                        {
                        backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
                        data: [40, 20, 80, 10]
                        }
                    ]
                },
                {
                    labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
                    datasets: [
                        {
                        backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
                        data: [30, 30, 30, 60]
                        }
                    ]
                },
                {
                    labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
                    datasets: [
                        {
                        backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
                        data: [20, 40, 80, 10]
                        }
                    ]
                }
            ],
            DoughnutData:[
                {
                    labels: ['VueJs', ''],
                    datasets: [
                        {
                        backgroundColor: ['#41B883', '#EEEEEE'],
                        data: [40, 60]
                        }
                    ]
                },
                {
                    labels: ['VueJs', ''],
                    datasets: [
                        {
                        backgroundColor: ['#41B883', '#EEEEEE'],
                        data: [69, 31]
                        }
                    ]
                },
                {
                    labels: ['VueJs', ''],
                    datasets: [
                        {
                        backgroundColor: ['#41B883', '#EEEEEE'],
                        data: [30, 70]
                        }
                    ]
                },
                {
                    labels: ['VueJs', ''],
                    datasets: [
                        {
                        backgroundColor: ['#41B883', '#EEEEEE'],
                        data: [80, 20]
                        }
                    ]
                },
            ],
            LineData:{
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                    label: 'Data One',
                    backgroundColor: '#f87979',
                    data: [40, 39, 10, 40, 39, 80, 40]
                    }
                ]}
        }
    },
    computed:{
        PercentNull(e){
            return (100-e);
        }
    },
    components:{
        PieChart,
        LineChart,
        DoughnutChart
    }
}
</script>
<style lang="css">
    
</style>