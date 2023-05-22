const drawRangeChart = (data, title, idElement, yAxisName) => {
    const options = {
      chart: {
        type: 'bar',
        height: 500
      },
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      series: [
        {
          data: data
        }
      ],
      title: {
        text: title,
        align: 'left'
      },
      yaxis: {
        title: {
          text: yAxisName
        }
      }
    }
    var chart = new ApexCharts(document.getElementById(idElement), options)
    chart.render()
}

export default drawRangeChart