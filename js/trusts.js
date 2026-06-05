```javascript id="trusts01"
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

id: generateId(),

name,

amount,

type,

date: new Date().toISOString()

});

saveData(data);

updateDashboard();

renderTrusts();

}

function renderTrusts(){

const container =
document.getElementById("trustList");

if(!container) return;

const data = getData();

container.innerHTML = "";

data.trusts.forEach(item=>{

container.innerHTML += `

<div class="person-card">

<h3>${item.name}</h3>

<p>المبلغ: ${item.amount} ر.س</p>

<p>النوع: ${item.type === "deposit" ? "إيداع" : "استرجاع"}</p>

<p>${new Date(item.date).toLocaleDateString()}</p>

<button class="delete-btn"
onclick="moveToTrash('trust',${item.id})">
حذف
</button>

</div>

`;

});

}
```
