document.addEventListener("DOMContentLoaded", function () {
  
  fetch('index.json')
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .then(content => {
        if (!localStorage.getItem("index")) { localStorage.setItem("index", JSON.stringify(data)); }

          const data = JSON.parse(localStorage.getItem("index"));
          console.log(data);

              document.getElementById('hero-title').innerHTML = data.main.section1.intro.title;
              document.getElementById('descrip').innerHTML = data.main.section1.intro.description;
              document.getElementById('list-title').innerHTML = data.main.section2[0].list1.title;

              document.getElementById('B1').innerHTML = `<img src="${data.main.section2[0].container.box.images[0].src}" height=${data.main.section2[0].container.box.images[0].height} />`;
              document.getElementById('B2').innerHTML = `<img src="${data.main.section2[0].container.box.images[1].src}" height=${data.main.section2[1].container.box.images[1].height} />`;

              data.main.section2[0].list1.items.forEach((parkName) => {
                const parkList = document.getElementById("parks");
                const listItem = document.createElement("li");
        
                listItem.textContent = parkName;
                parkList.appendChild(listItem);
              });

              document.getElementById('descrip1').innerHTML = data.main.section2[0].paragraph.description;

              document.getElementById('animalsListHead').innerHTML = data.main.section2[1].list1.title;

              data.main.section2[1].list1.items.forEach((iconicAnimals) => {
                const animalList = document.getElementById("iconic-animals");
                const listItem = document.createElement("li");
        
                listItem.textContent = iconicAnimals;
                animalList.appendChild(listItem);
              });

              document.getElementById('descrip2').innerHTML = data.main.section2[1].paragraph.description;

              document.getElementById('88').innerHTML = `<img src="${data.main.section2[1].container.box.images[0].src}" height=${data.main.section2[1].container.box.images[0].height} />`;
              document.getElementById('89').innerHTML = `<img src="${data.main.section2[1].container.box.images[1].src}" height=${data.main.section2[1].container.box.images[1].height} />`;
              document.getElementById('90').innerHTML = `<img src="${data.main.section2[1].container.box.images[2].src}" height=${data.main.section2[1].container.box.images[2].height} />`;
      })
      .catch(error => {
          console.error('There was a problem with the fetch operation:', error);
      });
 });