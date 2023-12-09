<template>
    <div class="relative">
        <Doughnut :data="chartData" :options="chartOptions" width="90%" height="90%"/>
        <p class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-7xl font-bold text-cyan-800">{{ chartData.datasets[0].data[0] }}</p>
    </div>
</template>
<script>
import { Chart as ChartJS, ArcElement } from 'chart.js'
import { Doughnut } from 'vue-chartjs'

ChartJS.register(ArcElement)

export default {
    name:'PieChart',
    data() {
        return {
            chartOptions: {
                responsive: true,
                cutoutPercentage: 90
            }
        }
    },
    computed:{
    },
    components:{
        Doughnut
    },
    props:{
        chartData:{
            type:Object,
            required:true
        }
    }
}
</script>
<style lang="css">
    
</style>