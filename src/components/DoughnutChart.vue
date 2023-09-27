<template>
    <div class="relative">
        <Doughnut :data="chartData" :options="chartOptions"/>
        <p class="absolute translate-x-28 -translate-y-44 text-6xl font-bold">{{ chartData.datasets[0].data[0] }}</p>
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