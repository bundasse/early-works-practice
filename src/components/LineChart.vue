<template>
    <div>
        <Line :data="chartData" :options="chartOptions"/>
    </div>
</template>
<script>
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'
import { Line } from 'vue-chartjs'

ChartJS.register(  CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

export default {
    name:'LineChart',
    data() {
        return {
            chartOptions: {
                responsive: true
            }
        }
    },
    props:{
        chartData:{
            type:Object,
            required:true
        }
    },
    components:{
        Line
    }
}
</script>
<style lang="css">
    
</style>