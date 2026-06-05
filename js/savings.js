```javascript id="savings01"
function addSaving(){

const amount =
Number(document.getElementById("savingAmount").value);

if(!amount) return;

const data = getData();

data.savings.push({

id: generateId(),

amount,

date: new Date().toISOString()

});

saveData(data);

updateDashboard();

renderSavings();

}

function renderSavings(){

const container =
document.getElementById("savingList");

if(!container) return;

const data = getData();

container.innerHTML = "";

data.savings.forEach(item=>{

container.innerHTML += `

<div class="person-card">

<h3>ادخار</h3>

<p>${item.amount} ر.س</p>

<p>${new Date(item.date).toLocaleDateString()}</p>

<button class="delete-btn"
onclick="moveToTrash('saving',${item.id})">
حذف
</button>

</div>

`;

});

}
```
