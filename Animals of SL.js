document.addEventListener("DOMContentLoaded", function () {
  
  fetch('Animals of SL.json')
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .then(content => {
        if (!localStorage.getItem("Animals")) { localStorage.setItem("Animals", JSON.stringify(content)); }

          const data = JSON.parse(localStorage.getItem("Animals"));
          console.log(data);

          document.getElementById('indAnimalsHead').innerHTML = data.main.indanimals.title;
          document.getElementById('indaboutDescrip').innerHTML = data.main.indanimals.indabout.description;


          data.main.indanimals.section2.list1.items.forEach((test) => {
            const animalList1 = document.getElementById("ind-animalsList");
            const listItem1 = document.createElement("li");
    
            listItem1.textContent = test;
            animalList1.appendChild(listItem1);
          });
          document.getElementById('paradescrip1').innerHTML = data.main.indanimals.paragraph.description;





      })
      .catch(error => {
          console.error('There was a problem with the fetch operation:', error);
      });
 });