<template>
    <div id="chart-container">
        <fusioncharts :type="type" width="100%" height="100%" :dataformat="dataFormat" :dataSource="dataSource">
        </fusioncharts>
    </div>
</template>
  
<script>
export default {
    name: "Charts",
    data() {
        return {
            type: "column2d",
            renderAt: "chart-container",
            width: "500",
            height: "100%",
            dataFormat: "json",
            dataSource: {
                chart: {
                    caption: "Recommended Portfolio Split",
                    subCaption: "For a net-worth of $1M",
                    showValues: "1",
                    showPercentInTooltip: "0",
                    numberPrefix: "$",
                    enableMultiSlicing: "1",
                    theme: "fusion",
                },
                data: [
                    {
                        label: "Equity",
                        value: "300000",
                    },
                    {
                        label: "Debt",
                        value: "230000",
                    },
                    {
                        label: "Bullion",
                        value: "180000",
                    },
                    {
                        label: "Real-estate",
                        value: "270000",
                    },
                    {
                        label: "Insurance",
                        value: "20000",
                    },
                ],
            },
        };
    },
};
</script>
  
<style>
html {
    height: 100%;
}

body {
    height: 100%;
}

#chart-container {
    height: 100%;
}
</style>