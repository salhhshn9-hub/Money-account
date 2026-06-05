```javascript id="auth01"
const PIN_KEY = "money_pin";

let appLocked = true;

function getPIN(){

const data =
getData();

return data.settings.pin || "1234";

}

function savePIN(pin){

const data =
getData();

data.settings.pin = pin;

saveData(data);

}

function showLock(){

const lock =
document.getElementById("lockScreen");

const app =
document.getElementById("app");

if(lock) lock.style.display = "flex";

if(app) app.style.display = "none";

appLocked = true;

}

function unlock(){

const input =
document.getElementById("pinInput");

if(input.value === getPIN()){

const lock =
document.getElementById("lockScreen");

const app =
document.getElementById("app");

lock.style.display = "none";

app.style.display = "block";

appLocked = false;

}else{

alert("PIN خطأ");

}

}

function initAuth(){

const lock =
document.getElementById("lockScreen");

const app =
document.getElementById("app");

if(lock && app){

showLock();

}

}

function changePIN(newPin){

if(newPin.length < 4) return;

savePIN(newPin);

alert("تم تغيير PIN بنجاح");

}

document.addEventListener("DOMContentLoaded",()=>{

const btn =
document.getElementById("unlockBtn");

if(btn){

btn.onclick = unlock;

}

initAuth();

});
```
```javascript id="auth01"
const PIN_KEY = "money_pin";

let appLocked = true;

function getPIN(){

const data =
getData();

return data.settings.pin || "1234";

}

function savePIN(pin){

const data =
getData();

data.settings.pin = pin;

saveData(data);

}

function showLock(){

const lock =
document.getElementById("lockScreen");

const app =
document.getElementById("app");

if(lock) lock.style.display = "flex";

if(app) app.style.display = "none";

appLocked = true;

}

function unlock(){

const input =
document.getElementById("pinInput");

if(input.value === getPIN()){

const lock =
document.getElementById("lockScreen");

const app =
document.getElementById("app");

lock.style.display = "none";

app.style.display = "block";

appLocked = false;

}else{

alert("PIN خطأ");

}

}

function initAuth(){

const lock =
document.getElementById("lockScreen");

const app =
document.getElementById("app");

if(lock && app){

showLock();

}

}

function changePIN(newPin){

if(newPin.length < 4) return;

savePIN(newPin);

alert("تم تغيير PIN بنجاح");

}

document.addEventListener("DOMContentLoaded",()=>{

const btn =
document.getElementById("unlockBtn");

if(btn){

btn.onclick = unlock;

}

initAuth();

});
```
