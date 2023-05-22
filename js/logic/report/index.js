import logicInstance from "../base.js"
import drawRangeChart from "../../apex_graphics/index.js"


const fetchReport = async () => {
    let response = await logicInstance.fillTemplateData('http://127.0.0.1:5000/report/', "#report-item-template", "#reports div")
    const drawData = generateChartData(response.top_3_clients)
    drawRangeChart(drawData, 'Top 3 clients', 'top_clients', 'Clients names')
    const monthName = getMonthName(response.month_with_more_revenue)
    const $month_text = $('#mont_revenue')
    $month_text[0].innerText = `The month with more revenue is ${monthName}`
}

const generateChartData = (data) =>{
    const newData = []
    let position = 1
    for(let i=2;i>-1;i--){
        newData.push({x: data[i], y: `${position}`})
        position+=1
    }
  return newData  
} 

function getMonthName(monthNumber) {
    const date = new Date();
    date.setMonth(monthNumber - 1);
  
    return date.toLocaleString('en-US', {
      month: 'short',
    });
  }


window.onload = fetchReport;

export default getMonthName
