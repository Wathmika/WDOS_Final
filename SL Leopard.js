document.addEventListener("DOMContentLoaded", function () {
  
  fetch('SL Leopard.json')
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .then(content => {
        if (!localStorage.getItem("SL Leopard")) { localStorage.setItem("SL Leopard", JSON.stringify(content)); }

          const data = JSON.parse(localStorage.getItem("SL Leopard"));
          console.log(data);

          document.getElementById('leopardHead').innerHTML = data.main.leopardh1.h1;
          document.getElementById('77').innerHTML = `<img src="${data.main.leopardh1.leopard.img.src}" height=${data.main.leopardh1.leopard.img.height} />`;

          document.getElementById('leopardLoc').innerHTML = data.main.leopardlocations.h2;     
          document.getElementById('yalaNPHead').innerHTML = data.main.leopardlocations.h3[0].title;

          data.main.leopardlocations.h3[0].list2.ul.forEach((yalaLIST) => {
            const yalaLIST1 = document.getElementById("yalaList");
            const listItem2 = document.createElement("li");
    
            listItem2.textContent = yalaLIST;
            yalaLIST1.appendChild(listItem2);
          });

          document.getElementById('wilpattuNPHead').innerHTML = data.main.leopardlocations.h3[1].title;


          data.main.leopardlocations.h3[0].list2.ul.forEach((wilpattuLIST) => {
            const yalaLIST2 = document.getElementById("wilpattuList");
            const listItem3 = document.createElement("li");
    
            listItem3.textContent = wilpattuLIST;
            yalaLIST2.appendChild(listItem3);
          });

          document.getElementById('UdawalaweNPHead').innerHTML = data.main.leopardlocations.h3[2].title;

          data.main.leopardlocations.h3[0].list2.ul.forEach((udawalaweLIST) => {
            const yalaLIST3 = document.getElementById("UdawalaweList");
            const listItem4 = document.createElement("li");
    
            listItem4.textContent = udawalaweLIST;
            yalaLIST3.appendChild(listItem4);
          });

          document.getElementById('threatList').innerHTML = data.main.section2.list2.h2;

          document.getElementById('threat1Head').innerHTML = data.main.section2.list2.threat1[0].h3;
          document.getElementById('p1').innerHTML = data.main.section2.list2.threat1[0].p[0];
          document.getElementById('p2').innerHTML = data.main.section2.list2.threat1[0].p[1];
          document.getElementById('p3').innerHTML = data.main.section2.list2.threat1[0].p[2];

          document.getElementById('threat2Head').innerHTML = data.main.section2.list2.threat1[1].h3;
          document.getElementById('p4').innerHTML = data.main.section2.list2.threat1[1].p[0];
          document.getElementById('p5').innerHTML = data.main.section2.list2.threat1[1].p[1];
          document.getElementById('p6').innerHTML = data.main.section2.list2.threat1[1].p[2];

          document.getElementById('78').innerHTML = `<img src="${data.main.section2.list2.lepthreat1.img.src}" height=${data.main.section2.list2.lepthreat1.img.height} />`;
          document.getElementById('79').innerHTML = `<img src="${data.main.section2.list2.lepthreat2.img.src}" height=${data.main.section2.list2.lepthreat2.img.height} />`;

      })
      .catch(error => {
          console.error('There was a problem with the fetch operation:', error);
      });
 });