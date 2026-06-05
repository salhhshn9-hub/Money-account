```javascript id="backup01"
function exportData(){

const data = getData();

const blob = new Blob(

[JSON.stringify(data,null,2)],

{type:"application/json"}

);

const url = URL.createObjectURL(blob);

const a = document.createElement("a");

a.href = url;

a.download = "money-account-backup.json";

a.click();

URL.revokeObjectURL(url);

alert("تم تصدير البيانات");

}

function importData(event){

const file = event.target.files[0];

if(!file) return;

const reader = new FileReader();

reader.onload = function(e){

try{

const data = JSON.parse(e.target.result);

localStorage.setItem(
"money_account_pro",
JSON.stringify(data)
);

alert("تم استيراد البيانات");

location.reload();

}catch{

alert("ملف غير صالح");

}

};

reader.readAsText(file);

}

function resetApp(){

if(!confirm("هل تريد إعادة ضبط التطبيق؟")) return;

localStorage.clear();

location.reload();

}
```
