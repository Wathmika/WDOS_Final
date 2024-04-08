document.addEventListener("DOMContentLoaded", function () {
  
  fetch('wilpattu.json')
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .then(content => {
        if (!localStorage.getItem("wilpattu")) { localStorage.setItem("wilpattu", JSON.stringify(content)); }

          const data = JSON.parse(localStorage.getItem("wilpattu"));
          console.log(data);

              document.getElementById('wilpattuHead').innerHTML = data.main.wilpattumain.wilpattumainhead.h1;
              document.getElementById('aboutHead').innerHTML = data.main.wilpattumainabout.aboutwilpattumain.h1;
              document.getElementById('aboutDescrip1').innerHTML = data.main.wilpattumainabout.aboutwilpattumain.p;

              function renderIframeFromJSONwilpattu(data) {
                const iframeURL = data.main.wilpattumainabout.wilpattumap.iframe.src;
                const iframeWidth = data.main.wilpattumainabout.wilpattumap.iframe.width;
                const iframeHeight = data.main.wilpattumainabout.wilpattumap.iframe.height;
                const iframeLoading = data.main.wilpattumainabout.wilpattumap.iframe.loading;
        
                const iframe = document.createElement("iframe");
        
                iframe.src = iframeURL;
                iframe.width = iframeWidth;
                iframe.height = iframeHeight;
                iframe.loading = iframeLoading;
                iframe.style.padding = "0";
        
                document.getElementById("wilpattuMap").appendChild(iframe);
              }
              renderIframeFromJSONwilpattu(data);

              document.getElementById('wildlifeHead').innerHTML = data.main.wilpattuwild.wilpattuwildlife.h1;
              document.getElementById('wildlifeDescrip').innerHTML = data.main.wilpattuwild.wilpattuwildlife.p;

              document.getElementById('20').innerHTML = `<img src="${data.main.wilpattuwild.wilpatturow.wilpattucolumn[0].img.src}" />`;
              document.getElementById('30').innerHTML = `<img src="${data.main.wilpattuwild.wilpatturow.wilpattucolumn[1].img.src}" />`;

              document.getElementById('timeHead').innerHTML = data.main.time.timehead.h1;
              document.getElementById('timeDescrip').innerHTML = data.main.time.p;

              document.getElementById('10').innerHTML = `<img src="${data.main.time.timeimg.img.src}" />`;
              document.getElementById('wilpattuEnd').innerHTML = data.main.time.content;
            
              




      })
      .catch(error => {
          console.error('There was a problem with the fetch operation:', error);
      });
 });