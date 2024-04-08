document.addEventListener("DOMContentLoaded", function () {
  
  fetch('SL Wild Life Intro.json')
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .then(content => {
        if (!localStorage.getItem("SL Wild Life Intro")) { localStorage.setItem("SL Wild Life Intro", JSON.stringify(content)); }

          const data = JSON.parse(localStorage.getItem("SL Wild Life Intro"));
          console.log(data);

          document.getElementById('introHead').innerHTML = data.main.Locations.intro.h1;
          document.getElementById('locHead1').innerHTML = data.main.Locations.location[0].h2;
          document.getElementById('sinharajaDescrip').innerHTML = data.main.Locations.location[0].p;
          function renderIframeFromJSONsinharaja(data) {
            const iframeURL = data.main.Locations.location[0].iframe.src;
            const iframeWidth = data.main.Locations.location[0].iframe.width;
            const iframeHeight = data.main.Locations.location[0].iframe.height;
            const iframeLoading = data.main.Locations.location[0].iframe.loading;
    
            const iframe = document.createElement("iframe");
    
            iframe.src = iframeURL;
            iframe.width = iframeWidth;
            iframe.height = iframeHeight;
            iframe.loading = iframeLoading;
    
            document.getElementById("map1sinharaja").appendChild(iframe);
          }
          renderIframeFromJSONsinharaja(data);

          document.getElementById('97').innerHTML = `<img src="${data.main.Locations.location[0].img.src}" height=${data.main.Locations.location[0].img.height} />`;

          document.getElementById('locHead2').innerHTML = data.main.Locations.location[1].h2;
          document.getElementById('udawalawaDescrip').innerHTML = data.main.Locations.location[1].p;
          function renderIframeFromJSONudawalawa(data) {
            const iframeURL = data.main.Locations.location[1].iframe.src;
            const iframeWidth = data.main.Locations.location[1].iframe.width;
            const iframeHeight = data.main.Locations.location[1].iframe.height;
            const iframeLoading = data.main.Locations.location[1].iframe.loading;
    
            const iframe = document.createElement("iframe");
    
            iframe.src = iframeURL;
            iframe.width = iframeWidth;
            iframe.height = iframeHeight;
            iframe.loading = iframeLoading;
    
            document.getElementById("map2udawalawa").appendChild(iframe);
          }
          renderIframeFromJSONudawalawa(data);
          document.getElementById('98').innerHTML = `<img src="${data.main.Locations.location[1].img.src}" height=${data.main.Locations.location[1].img.height} />`;

          document.getElementById('locHead3').innerHTML = data.main.Locations.location[2].h2;
          document.getElementById('hpDescrip').innerHTML = data.main.Locations.location[2].p;
          function renderIframeFromJSONhp(data) {
            const iframeURL = data.main.Locations.location[2].iframe.src;
            const iframeWidth = data.main.Locations.location[2].iframe.width;
            const iframeHeight = data.main.Locations.location[2].iframe.height;
            const iframeLoading = data.main.Locations.location[2].iframe.loading;
    
            const iframe = document.createElement("iframe");
    
            iframe.src = iframeURL;
            iframe.width = iframeWidth;
            iframe.height = iframeHeight;
            iframe.loading = iframeLoading;
    
            document.getElementById("map3hp").appendChild(iframe);
          }
          renderIframeFromJSONhp(data);
          document.getElementById('99').innerHTML = `<img src="${data.main.Locations.location[2].img.src}" height=${data.main.Locations.location[2].img.height} />`;

          document.getElementById('locHead4').innerHTML = data.main.Locations.location[3].h2;
          document.getElementById('minneriyaDescrip').innerHTML = data.main.Locations.location[3].p;
          function renderIframeFromJSONminneriya(data) {
            const iframeURL = data.main.Locations.location[3].iframe.src;
            const iframeWidth = data.main.Locations.location[3].iframe.width;
            const iframeHeight = data.main.Locations.location[3].iframe.height;
            const iframeLoading = data.main.Locations.location[3].iframe.loading;
    
            const iframe = document.createElement("iframe");
    
            iframe.src = iframeURL;
            iframe.width = iframeWidth;
            iframe.height = iframeHeight;
            iframe.loading = iframeLoading;
    
            document.getElementById("map4minneriya").appendChild(iframe);
          }
          renderIframeFromJSONminneriya(data);
          document.getElementById('100').innerHTML = `<img src="${data.main.Locations.location[3].img.src}" height=${data.main.Locations.location[3].img.height} />`;




      })
      .catch(error => {
          console.error('There was a problem with the fetch operation:', error);
      });
 })