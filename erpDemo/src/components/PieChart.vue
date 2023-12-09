<template>
    <div>
        <Pie :data="chartData" :options="chartOptions" />
    </div>
</template>
<script>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'vue-chartjs'

ChartJS.register(ArcElement, Tooltip, Legend)

export default {
    name:'PieChart',
    data() {
        return {
            chartOptions: {
                responsive: true
            }
        }
    },
    components:{
        Pie
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