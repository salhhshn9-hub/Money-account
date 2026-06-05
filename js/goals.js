```javascript id="goals01"
function addGoal(){

const name =
document.getElementById("goalName").value;

const target =
Number(document.getElementById("goalTarget").value);

if(!name || !target) return;

const data = getData();

data.goals.push({

id: generateId(),

name,

target,

current: 0,

date: new Date().toISOString()

});

saveData(data);

updateDashboard();

renderGoals();

}

function addToGoal(goalId, amount){

const data = getData();

const goal = data.goals.find(g=>g.id===goalId);

if(!goal) return;

goal.current += amount;

if(goal.current > goal.target){

goal.current = goal.target;

}

saveData(data);

updateDashboard();

renderGoals();

}

function renderGoals(){

const container =
document.getElementById("goalsList");

if(!container) return;

const data = getData();

container.innerHTML = "";

data.goals.forEach(goal=>{

const percent =
Math.floor((goal.current / goal.target) * 100);

container.innerHTML += `

<div class="person-card">

<h3>${goal.name}</h3>

<p>المستهدف: ${goal.target} ر.س</p>

<p>المحصل: ${goal.current} ر.س</p>

<p>النسبة: ${percent}%</p>

<div class="goal-progress">

<div class="goal-fill" style="width:${percent}%"></div>

</div>

<button class="edit-btn"
onclick="addToGoal(${goal.id},100)">
+100 ر.س</button>

<button class="delete-btn"
onclick="moveToTrash('goal',${goal.id})">
حذف</button>

</div>

`;

});

}
```
