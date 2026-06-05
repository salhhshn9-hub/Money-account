```javascript id="lang01"
const LANG_KEY = "money_lang";

const translations = {

ar:{

dashboard:"لوحة التحكم",

income:"الدخل",

expenses:"المصروفات",

savings:"الادخار",

people:"الأشخاص",

trusts:"الأمانات",

goals:"الأهداف",

backup:"النسخ الاحتياطي",

add:"إضافة",

delete:"حذف",

edit:"تعديل",

save:"حفظ",

amount:"المبلغ",

description:"الوصف"

},

en:{

dashboard:"Dashboard",

income:"Income",

expenses:"Expenses",

savings:"Savings",

people:"People",

trusts:"Trusts",

goals:"Goals",

backup:"Backup",

add:"Add",

delete:"Delete",

edit:"Edit",

save:"Save",

amount:"Amount",

description:"Description"

}

};

function getLang(){

const data = getData();

return data.settings.language || "ar";

}

function setLang(lang){

const data = getData();

data.settings.language = lang;

saveData(data);

applyLang();

}

function toggleLang(){

const lang =
getLang() === "ar" ? "en" : "ar";

setLang(lang);

}

function applyLang(){

const lang = getLang();

document.documentElement.lang = lang;

document.documentElement.dir =
lang === "ar" ? "rtl" : "ltr";

const btn =
document.getElementById("langBtn");

if(btn){

btn.textContent =
lang === "ar" ? "EN" : "AR";

}

}

document.addEventListener("DOMContentLoaded",()=>{

applyLang();

const btn =
document.getElementById("langBtn");

if(btn){

btn.onclick = toggleLang;

}

});
```
