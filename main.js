// b{}[]``

function getAllData() {
  fetch("https://api.covid19api.com/summary")
    .then((apiData) => {
      return apiData.json();
    })
    .then((data) => {
      const coronaData = data;
      runFetch(coronaData);
    });

  function runFetch(coronaData) {
    const global = coronaData.Global;
    const countries = coronaData.Countries;

    // console.log(coronaData);
    console.log(global);
    console.log(countries);

    let tc = document.getElementById("todayConfirm");
    let tcc = document.getElementById("totalConfirm");

    let td = document.getElementById("todayDeaths");
    let tdd = document.getElementById("totalDeaths");

    let tr = document.getElementById("todayRecovered");
    let trr = document.getElementById("totalRecovered");

    tc.innerHTML = `New Confirmed : ${global.NewConfirmed}`;
    tcc.innerHTML = `Total Confirmed : ${global.TotalConfirmed}`;

    td.innerHTML = `New Deaths : ${global.NewDeaths}`;
    tdd.innerHTML = `Total Deaths : ${global.TotalDeaths}`;

    tr.innerHTML = `New Recovered : ${global.NewRecovered}`;
    trr.innerHTML = `Total Recovered : ${global.TotalRecovered}`;

    let table = document.getElementById("table");

    for (let i = 1; i < 249; i++) {
      let x = table.insertRow();

      x.insertCell(0);
      table.rows[i].cells[0].innerHTML = countries[i - 1].Country;
      table.rows[i].cells[0].style.background = "#0275d8";

      x.insertCell(1);
      table.rows[i].cells[1].innerHTML = countries[i - 1].NewConfirmed;
      table.rows[i].cells[1].style.background = "#f0ad4e";

      x.insertCell(2);
      table.rows[i].cells[2].innerHTML = countries[i - 1].NewDeaths;
      table.rows[i].cells[2].style.background = "#d9534f";

      x.insertCell(3);
      table.rows[i].cells[3].innerHTML = countries[i - 1].NewRecovered;
      table.rows[i].cells[3].style.background = "#5cb85c";

      x.insertCell(4);
      table.rows[i].cells[4].innerHTML = countries[i - 1].TotalConfirmed;
      table.rows[i].cells[4].style.background = "#f0ad4e";

      x.insertCell(5);
      table.rows[i].cells[5].innerHTML = countries[i - 1].TotalDeaths;
      table.rows[i].cells[5].style.background = "#d9534f";

      x.insertCell(6);
      table.rows[i].cells[6].innerHTML = countries[i - 1].TotalRecovered;
      table.rows[i].cells[6].style.background = "#5cb85c";
    }
  }
}

const searchFun = () => {
  let input = document.getElementById("myInput").value.toUpperCase();
  let table = document.getElementById("table");
  let tr = table.getElementsByTagName("tr");

  for (let i = 1; i < tr.length; i++) {
    let td = tr[i].getElementsByTagName("td")[0];

    if (td) {
      let tdValue = td.textContent.toUpperCase();

      if (tdValue.indexOf(input) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
};
