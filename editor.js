const get_data_button = document.getElementById("selectPage");
if (get_data_button) {
  get_data_button.addEventListener("click", function (e) {
    const selectPage = document.querySelector(".selectPage").value;
    let textarea = document.querySelector(".jsonTextarea");

    if (selectPage == "index") {
      textarea.value = localStorage.getItem("index");
    } else if (selectPage == "SL Wild Life Intro") {
      textarea.value = localStorage.getItem("SL Wild Life Intro");
    } else if (selectPage == "Dep of Wild Life Conv") {
      textarea.value = localStorage.getItem("Dep of Wild Life Conv");
    } else if (selectPage == "Animals") {
      textarea.value = localStorage.getItem("Animals");
    } else if (selectPage == "SL Leopard") {
      textarea.value = localStorage.getItem("SL Leopard");
    } else if (selectPage == "yala") {
      textarea.value = localStorage.getItem("yala");
    } else if (selectPage == "wilpattu") {
      textarea.value = localStorage.getItem("wilpattu");
    } 
  });
}

const editPageButton = document.getElementById("saveChanges");
if (editPageButton) {
  editPageButton.addEventListener("click", function (e) {
    const selectPage = document.querySelector(".selectPage").value;
    const textareaValue = document.querySelector(".jsonTextarea").value;

    if (selectPage && textareaValue) {
      if (selectPage == "index") {
        localStorage.setItem("index", textareaValue);
      } else if (selectPage == "SL Wild Life Intro") {
        localStorage.setItem("SL Wild Life Intro", textareaValue);
      } else if (selectPage == "Dep of Wild Life Conv") {
        localStorage.setItem("Dep of Wild Life Conv", textareaValue);
      } else if (selectPage == "Animals") {
        localStorage.setItem("Animals", textareaValue);
      } else if (selectPage == "SL Leopard") {
        localStorage.setItem("SL Leopard", textareaValue);
      } else if (selectPage == "yala") {
        localStorage.setItem("yala", textareaValue);
      } else if (selectPage == "wilpattu") {
        localStorage.setItem("wilpattu", textareaValue);
      } else {
        console.log("hello world");
      }
    }
  });
}