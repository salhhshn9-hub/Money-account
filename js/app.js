```javascript id="app01"
document.addEventListener("DOMContentLoaded",()=>{

updateDashboard();

setupEvents();

});

function setupEvents(){

// الدخل
document.getElementById("addIncomeBtn")
.onclick = addIncome;

// المصروفات
document.getElementById("addExpenseBtn")
.onclick = addExpense;

// الأشخاص
document.getElementById("addPersonBtn")
.onclick = addPerson;

// الادخار
document.getElementById("addSavingBtn")
.onclick = addSaving;

// الأمانات
document.getElementById("addTrustBtn")
.onclick = addTrust;

// الأهداف
document.getElementById("addGoalBtn")
.onclick = addGoal;

// النسخ الاحتياطي
document.getElementById("exportJson")
.onclick = backupData;

// استيراد
document.getElementById("importJson")
.onchange = function(e){
restoreData(e.target.files[0]);
};

}

function addIncome(){

const title =
document.getElementById("incomeTitle").value;

const amount =
Number(document.getElementById("incomeAmount").value);

const category =
document.getElementById("incomeCategory").value;

if(!title || !amount) return;

const data = getData();

data.income.push({

id:generateId(),

title,

amount,

category,

date:new Date().toISOString()

});

saveData(data);

updateDashboard();

alert("تم إضافة دخل");

}

function addExpense(){

const title =
document.getElementById("expenseTitle").value;

const amount =
Number(document.getElementById("expenseAmount").value);

const category =
document.getElementById("expenseCategory").value;

if(!title || !amount) return;

const data = getData();

data.expenses.push({

id:generateId(),

title,

amount,

category,

date:new Date().toISOString()

});

saveData(data);

updateDashboard();

alert("تم إضافة مصروف");

}

function addPerson(){

const name =
document.getElementById("personName").value;

const balance =
Number(document.getElementById("personBalance").value || 0);

if(!name) return;

const data = getData();

data.people.push({

id:generateId(),

name,

balance,

savings:0,

trusts:0

});

saveData(data);

updateDashboard();

alert("تم إضافة شخص");

}

function addSaving(){

const amount =
Number(document.getElementById("savingAmount").value);

if(!amount) return;

const data = getData();

data.savings.push({

id:generateId(),

amount,

date:new Date().toISOString()

});

saveData(data);

updateDashboard();

alert("تم إضافة ادخار");

}

function addTrust(){

const name =
document.getElementById("trustName").value;

const amount =
Number(document.getElementById("trustAmount").value);

const type =
document.getElementById("trustType").value;

if(!name || !amount) return;

const data = getData();

data.trusts.push({

id:generateId(),

name,

amount,

type,

date:new Date().toISOString()

});

saveData(data);

updateDashboard();

alert("تم حفظ الأمانة");

}

function addGoal(){

const name =
document.getElementById("goalName").value;

const target =
Number(document.getElementById("goalTarget").value);

if(!name || !target) return;

const data = getData();

data.goals.push({

id:generateId(),

name,

target,

current:0

});

saveData(data);

updateDashboard();

alert("تم إضافة هدف");

}
```
