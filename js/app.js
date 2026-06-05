```javascript id="core01"
document.addEventListener("DOMContentLoaded",()=>{

bootApp();

});

function bootApp(){

// تشغيل كل شيء بالترتيب الصحيح

initLock();

updateDashboard();

renderAll();

setupNavigation();

}

function renderAll(){

if(typeof renderIncome==="function") renderIncome();
if(typeof renderExpenses==="function") renderExpenses();
if(typeof renderPeople==="function") renderPeople();
if(typeof renderSavings==="function") renderSavings();
if(typeof renderTrusts==="function") renderTrusts();
if(typeof renderGoals==="function") renderGoals();
if(typeof renderTrash==="function") renderTrash();

if(typeof updateCharts==="function") updateCharts();

}

function setupNavigation(){

const tabs =
document.querySelectorAll(".tab");

window.showTab = function(tabId){

tabs.forEach(t=>{

t.style.display =
(t.id === tabId) ? "block" : "none";

});

};

}
```
