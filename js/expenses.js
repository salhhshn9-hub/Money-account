```javascript id="expjs01"
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

id: generateId(),

title,

amount,

category,

date: new Date().toISOString()

});

saveData(data);

updateDashboard();

renderExpenses();

}

function renderExpenses(){

const container =
document.getElementById("expenseList");

if(!container) return;

const data = getData();

container.innerHTML = "";

data.expenses.forEach(item=>{

container.innerHTML += `

<div class="person-card">

<h3>${item.title}</h3>

<p>${item.amount} ر.س</p>

<p>${item.category}</p>

<button class="delete-btn"
onclick="moveToTrash('expense',${item.id})">
حذف
</button>

</div>

`;

});

}
```
