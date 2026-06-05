```javascript
const STORAGE_KEY = "money_account_pro";

const defaultData = {

settings:{
language:"ar",
theme:"dark",
pin:"1234"
},

people:[],

income:[],

expenses:[],

savings:[],

trusts:[],

goals:[],

trash:[]

};

function getData(){

const data =
localStorage.getItem(STORAGE_KEY);

if(!data){

localStorage.setItem(
STORAGE_KEY,
JSON.stringify(defaultData)
);

return defaultData;

}

return JSON.parse(data);

}

function saveData(data){

localStorage.setItem(
STORAGE_KEY,
JSON.stringify(data)
);

}

function resetData(){

localStorage.setItem(
STORAGE_KEY,
JSON.stringify(defaultData)
);

location.reload();

}

function backupData(){

const data = getData();

const blob = new Blob(
[
JSON.stringify(data,null,2)
],
{
type:"application/json"
}
);

const url =
URL.createObjectURL(blob);

const a =
document.createElement("a");

a.href = url;

a.download =
"money-backup.json";

a.click();

URL.revokeObjectURL(url);

}

function restoreData(file){

const reader =
new FileReader();

reader.onload = e=>{

try{

const imported =
JSON.parse(
e.target.result
);

saveData(imported);

alert(
"تم استيراد النسخة الاحتياطية"
);

location.reload();

}catch{

alert(
"ملف غير صالح"
);

}

};

reader.readAsText(file);

}

function addToTrash(item,type){

const data = getData();

data.trash.push({

id:Date.now(),

type:type,

data:item,

deletedAt:
new Date().toISOString()

});

saveData(data);

}

function restoreFromTrash(id){

const data = getData();

const item =
data.trash.find(
x=>x.id===id
);

if(!item) return;

if(item.type==="person")
data.people.push(item.data);

if(item.type==="income")
data.income.push(item.data);

if(item.type==="expense")
data.expenses.push(item.data);

if(item.type==="saving")
data.savings.push(item.data);

if(item.type==="trust")
data.trusts.push(item.data);

if(item.type==="goal")
data.goals.push(item.data);

data.trash =
data.trash.filter(
x=>x.id!==id
);

saveData(data);

}

function emptyTrash(){

const data = getData();

data.trash = [];

saveData(data);

}

function generateId(){

return Date.now() +
Math.floor(
Math.random()*9999
);

}

function formatCurrency(amount){

return new Intl.NumberFormat(
"ar-SA",
{
style:"currency",
currency:"SAR"
}
).format(amount);

}

function getTotals(){

const data = getData();

const totalIncome =
data.income.reduce(
(a,b)=>a+b.amount,
0
);

const totalExpenses =
data.expenses.reduce(
(a,b)=>a+b.amount,
0
);

const totalSavings =
data.savings.reduce(
(a,b)=>a+b.amount,
0
);

const totalTrusts =
data.trusts.reduce(
(a,b)=>a+b.amount,
0
);

const balance =
totalIncome -
totalExpenses;
return{totalDebts};
return{

totalIncome,
totalExpenses,
totalSavings,
totalTrusts,
balance

};

}

function updateDashboard(){

const totals =
getTotals(```javascript
const totalDebts =
data.debts.reduce((a,b)=>a+b.remaining,0);
```
);

const income =
document.getElementById(
"totalIncome"
);

const expenses =
document.getElementById(
"totalExpenses"
);

const savings =
document.getElementById(
"totalSavings"
);

const trusts =
document.getElementById(
"totalTrusts"
);

const balance =
document.getElementById(
"remainingBalance"
);

const money =
document.getElementById(
"totalMoney"
);

if(income)
income.textContent =
formatCurrency(
totals.totalIncome
);

if(expenses)
expenses.textContent =
formatCurrency(
totals.totalExpenses
);

if(savings)
savings.textContent =
formatCurrency(
totals.totalSavings
);

if(trusts)
trusts.textContent =
formatCurrency(
totals.totalTrusts
);

if(balance)
balance.textContent =
formatCurrency(
totals.balance
);

if(money)
money.textContent =
formatCurrency(
totals.balance
);

}
```
```javascript
debts:[]
```

