fetch('https://api.covid19api.com/summary')
    .then((apidata) => {
        return apidata.json();
        // console.log(apidata);
    })

    .then((actualdata) => {

            console.log(actualdata);
            //confirm


             const mycontry = actualdata.Countries[114].Country;
            document.getElementById('ma').innerHTML = mycontry;

            const mydata = actualdata.Countries[114].TotalConfirmed;
            document.getElementById('conin').innerHTML = mydata;

            const mydatanew = actualdata.Countries[114].NewConfirmed;
            document.getElementById('coninnew').innerHTML = mydatanew;


            //recover
            const recdata = actualdata.Countries[114].TotalRecovered;
            document.getElementById('revin').innerHTML = recdata;

            //deaths
            const detdata = actualdata.Countries[114].TotalDeaths;
            document.getElementById('detin').innerHTML = detdata;

            //global data 

            const globco = actualdata.Global.TotalConfirmed;
            document.getElementById('globco').innerHTML = globco;

            //global recover
            const globro = actualdata.Global.TotalRecovered;
            document.getElementById('globro').innerHTML = globro;
            //global deaths

            const globdo = actualdata.Global.TotalDeaths;
            document.getElementById('globdo').innerHTML = globdo;
        }

    )
    .catch((error) => {
        console.log(`the error: ${error}`);
    });