import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import VueFusionCharts from 'vue-fusioncharts';
import FusionCharts from 'fusioncharts';
import Column2D from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
const app = createApp(App);
//app.component('Charts', Charts);
app.use(VueFusionCharts, FusionCharts, Column2D, FusionTheme);
app.mount('#app')
