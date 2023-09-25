<template>
    <div>
        <Line :data="chartData" :options="chartOptions" />
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
            chartData:{
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                    label: 'Data One',
                    backgroundColor: '#f87979',
                    data: [40, 39, 10, 40, 39, 80, 40]
                    }
                ]},
            chartOptions: {
                responsive: true
            }
        }
    },
    components:{
        Line
    }
}
</script>
<style lang="css">
    
</style>