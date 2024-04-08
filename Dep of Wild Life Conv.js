document.addEventListener("DOMContentLoaded", function () {
  
  fetch('Dep of Wild Life Conv.json')
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .then(content => {
        if (!localStorage.getItem("Dep of Wild Life Conv")) { localStorage.setItem("Dep of Wild Life Conv", JSON.stringify(data)); }

          const data = JSON.parse(localStorage.getItem("Dep of Wild Life Conv"));
          console.log(data);

          document.getElementById('depHead').innerHTML = data.main.department.departmentofconv.title;

          document.getElementById('aboutdepHead').innerHTML = data.main.aboutdepartment.aboutdep.title;
          document.getElementById('abtp').innerHTML = data.main.aboutdepartment.aboutdep.description;

          function renderIframeFromJSONdep(data) {
            const iframeURL = data.main.aboutdepartment.departmentmap.src;
            const iframeWidth = data.main.aboutdepartment.departmentmap.width;
            const iframeHeight = data.main.aboutdepartment.departmentmap.height;
            const iframeLoading = data.main.aboutdepartment.departmentmap.loading;
    
            const iframe = document.createElement("iframe");
    
            iframe.src = iframeURL;
            iframe.width = iframeWidth;
            iframe.height = iframeHeight;
            iframe.loading = iframeLoading;
            iframe.style.padding = "0";
    
            document.getElementById("depMap").appendChild(iframe);
          }
          renderIframeFromJSONdep(data);

          document.getElementById('galleryHead').innerHTML = data.main.gallery.title;

          document.getElementById('G1').innerHTML = `<img src="${data.main.gallery.images[0].src}" height=${data.main.gallery.images[0].height} />`;
          document.getElementById('G2').innerHTML = `<img src="${data.main.gallery.images[1].src}" height=${data.main.gallery.images[1].height} />`;
          document.getElementById('G3').innerHTML = `<img src="${data.main.gallery.images[2].src}" height=${data.main.gallery.images[2].height} />`;


      })
      .catch(error => {
          console.error('There was a problem with the fetch operation:', error);
      });
 });