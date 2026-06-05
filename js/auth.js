```javascript
let isUnlocked = false;

function getPIN(){
const data = getData();
return data.settings.pin || "1234";
}

function unlock(){
const input = document.getElementById("pinInput");

if(!input) return;

if(input.value === getPIN()){

document.body.classList.add("unlocked");

const lock = document.getElementById("lockScreen");
if(lock) lock.style.display = "none";

isUnlocked = true;

updateDashboard();

renderAll();

}else{

alert("PIN خطأ ❌");

input.value = "";

}

}

function initLock(){

const lock = document.getElementById("lockScreen");

if(lock){

document.body.classList.remove("unlocked");

lock.style.display = "flex";

}

}

function renderAll(){

// تشغيل كل الريندرز بعد فتح التطبيق

if(typeof renderIncome === "function") renderIncome();
if(typeof renderExpenses === "function") renderExpenses();
if(typeof renderPeople === "function") renderPeople();
if(typeof renderSavings === "function") renderSavings();
if(typeof renderTrusts === "function") renderTrusts();
if(typeof renderGoals === "function") renderGoals();
if(typeof renderTrash === "function") renderTrash();

if(typeof updateCharts === "function") updateCharts();

updateDashboard();

}

document.addEventListener("DOMContentLoaded",()=>{

const btn = document.getElementById("unlockBtn");

if(btn){
btn.onclick = unlock;
}

initLock();

});
```
