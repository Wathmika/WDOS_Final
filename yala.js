document.addEventListener("DOMContentLoaded", function () {
  
  fetch('yala.json')
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .then(content => {
        if (!localStorage.getItem("yala")) { localStorage.setItem("yala", JSON.stringify(data)); }

          const data = JSON.parse(localStorage.getItem("yala"));
          console.log(data);

          document.getElementById('yalaHead').innerHTML = data.main.yalamain.yalamainhead.h1;
          document.getElementById('yalaHead1').innerHTML = data.main.yalamain1.h1;

          document.getElementById('historyDescrip').innerHTML = data.main.yalamain1.p;
          document.getElementById('57').innerHTML = `<img src="${data.main.yalamain1.img.src}" height=${data.main.yalamain1.img.height} />`;

          document.getElementById('aboutHead').innerHTML = data.main.yalamainabout.aboutyalamain.h1;
          document.getElementById('aboutDescrip').innerHTML = data.main.yalamainabout.aboutyalamain.p;

          function renderIframeFromJSONyala(data) {
            const iframeURL = data.main.yalamainabout.aboutyalamain.yalamap1.iframe.src;
            const iframeWidth = data.main.yalamainabout.aboutyalamain.yalamap1.iframe.width;
            const iframeHeight = data.main.yalamainabout.aboutyalamain.yalamap1.iframe.height;
            const iframeLoading = data.main.yalamainabout.aboutyalamain.yalamap1.iframe.loading;
    
            const iframe = document.createElement("iframe");
    
            iframe.src = iframeURL;
            iframe.width = iframeWidth;
            iframe.height = iframeHeight;
            iframe.loading = iframeLoading;
            iframe.style.padding = "0";
    
            document.getElementById("yalaMap").appendChild(iframe);
          }
          renderIframeFromJSONyala(data);

          document.getElementById('yalaAnimals').innerHTML = data.main.yalaanimals.h1;

          document.getElementById('elephantHead').innerHTML = data.main.yalaanimals.h2[0].Title;
          document.getElementById('elephantDescrip').innerHTML = data.main.yalaanimals.h2[0].description;

          document.getElementById('58').innerHTML = `<img src="${data.main.yalaanimals.img[0].src}" height=${data.main.yalaanimals.img[0].height} />`;

          document.getElementById('crocHead').innerHTML = data.main.yalaanimals.h2[1].Title;
          document.getElementById('crocDescrip').innerHTML = data.main.yalaanimals.h2[1].description;

          document.getElementById('59').innerHTML = `<img src="${data.main.yalaanimals.img[1].src}" height=${data.main.yalaanimals.img[1].height} />`;

          document.getElementById('safariHead').innerHTML = data.main.yalasafari.h1;
          document.getElementById('safariDescrip').innerHTML = data.main.yalasafari.yalasafaribody.p;






      })
      .catch(error => {
          console.error('There was a problem with the fetch operation:', error);
      });
 });