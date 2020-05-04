// b{}[]``

function runFetch(coronaData) {
  const global = coronaData.Global;
  const countries = coronaData.Countries; 
  
  // console.log(coronaData);
   console.log(global);
  // console.log(countries);
  
let tc =  document.getElementById('todayConfirm');
let tcc = document.getElementById('totalConfirm');

let td = document.getElementById('todayDeaths');
let tdd = document.getElementById('totalDeaths');

let tr = document.getElementById('todayRecovered');
let trr = document.getElementById('totalRecovered');

tc.innerHTML = `Today Confirmed : ${global.NewConfirmed}`
tcc.innerHTML = `Total Confirmed : ${global.TotalConfirmed}`

td.innerHTML = `Today Deaths : ${global.NewDeaths}`
tdd.innerHTML = `Total Deaths : ${global.TotalDeaths}`

tr.innerHTML = `Today Recovered : ${global.NewRecovered}`
trr.innerHTML = `Total Recovered : ${global.TotalRecovered}`
  
}

fetch("https://api.covid19api.com/summary").then((apiData)=>{
  return apiData.json();
}).then((data)=>{
  const coronaData = data;
  runFetch(coronaData);
})
