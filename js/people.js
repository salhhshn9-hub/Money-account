```javascript id="people01"
function addPerson(){

const name =
document.getElementById("personName").value;

const balance =
Number(document.getElementById("personBalance").value || 0);

if(!name) return;

const data = getData();

data.people.push({

id: generateId(),

name,

balance,

savings:0,

trusts:0

});

saveData(data);

updateDashboard();

renderPeople();

}

function renderPeople(){

const container =
document.getElementById("peopleList");

if(!container) return;

const data = getData();

container.innerHTML = "";

data.people.forEach(person=>{

container.innerHTML += `

<div class="person-card">

<h3>${person.name}</h3>

<p>الرصيد: ${person.balance} ر.س</p>

<p>الادخار: ${person.savings} ر.س</p>

<p>الأمانات: ${person.trusts} ر.س</p>

<button class="delete-btn"
onclick="moveToTrash('person',${person.id})">
حذف
</button>

</div>

`;

});

}
```
