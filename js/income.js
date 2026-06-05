```javascript
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

id: generateId(),

title,

amount,

category,

date: new Date().toISOString()

});

saveData(data);

updateDashboard();

renderIncome();

}

function renderIncome(){

const container =
document.getElementById("incomeList");

if(!container) return;

const data = getData();

container.innerHTML = "";

data.income.forEach(item=>{

container.innerHTML += `

<div class="person-card">

<h3>${item.title}</h3>

<p>${item.amount} ر.س</p>

<p>${item.category}</p>

<button class="delete-btn"
onclick="moveToTrash('income',${item.id})">
حذف
</button>

</div>

`;

});

}
```

