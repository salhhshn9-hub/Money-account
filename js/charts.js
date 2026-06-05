```javascript id="chart01"
let incomeExpenseChart;
let savingsChart;
let expensesChart;

document.addEventListener("DOMContentLoaded",()=>{

setTimeout(updateCharts,500);

});

function updateCharts(){

const data = getData();

const income = data.income.reduce((a,b)=>a+b.amount,0);

const expenses = data.expenses.reduce((a,b)=>a+b.amount,0);

const savings = data.savings.reduce((a,b)=>a+b.amount,0);

const expenseCategories = {};

data.expenses.forEach(e=>{

if(!expenseCategories[e.category]){

expenseCategories[e.category]=0;

}

expenseCategories[e.category]+=e.amount;

});

// ===== الدخل مقابل المصروف =====

const ctx1 =
document.getElementById("incomeExpenseChart");

if(ctx1){

if(incomeExpenseChart)
incomeExpenseChart.destroy();

incomeExpenseChart = new Chart(ctx1,{

type:"doughnut",

data:{

labels:["الدخل","المصروفات"],

datasets:[{

data:[income,expenses],

backgroundColor:["#22c55e","#ef4444"]

}]

}

});

}

// ===== الادخار =====

const ctx2 =
document.getElementById("savingsChart");

if(ctx2){

if(savingsChart)
savingsChart.destroy();

savingsChart = new Chart(ctx2,{

type:"bar",

data:{

labels:["الادخار"],

datasets:[{

data:[savings],

backgroundColor:"#38bdf8"

}]

}

});

}

// ===== المصروفات حسب التصنيف =====

const ctx3 =
document.getElementById("expensesChart");

if(ctx3){

if(expensesChart)
expensesChart.destroy();

expensesChart = new Chart(ctx3,{

type:"pie",

data:{

labels:Object.keys(expenseCategories),

datasets:[{

data:Object.values(expenseCategories),

backgroundColor:[

"#ef4444",
"#f59e0b",
"#22c55e",
"#38bdf8",
"#a855f7",
"#f97316"

]

}

]

}

});

}

}
```
