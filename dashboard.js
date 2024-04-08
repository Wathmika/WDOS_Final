let currentUser = localStorage.getItem("Current_User");

if (currentUser == null) {
  document.getElementById("dash").style.display = "none";
} else {
  document.getElementById("dash").style.display = "block";
  document.getElementById("loginMessage").style.display = "none";

  if (currentUser == "user") {
    document.getElementById("subscriptions").style.display = "none";
  } else {
    function table_generator(json_path) {
      
      let code = ``;
      for (let i = 0; i < json_path.length; i++) {
        code += `<li>${json_path[i]}</li>`;
      }
      return code;
    }
    
    const subscriptions = JSON.parse(localStorage.getItem("subscriptions"));

    
    if (subscriptions && Array.isArray(subscriptions)) {
      document.getElementById("emialLists").innerHTML =
        table_generator(subscriptions);
    } else {
      
      console.error("Subscriptions data is missing or invalid.");
    }
  }
}


document.getElementById("logoutBtn").addEventListener("click", function () {

  localStorage.removeItem("Current_User");
  
  window.location.href = "login.html";
});


document.getElementById("logoutBtn").addEventListener("click", logout);


function editPage(pageName) {
 
  alert("Editing " + pageName);
 
  window.location.href = "editPage.html?page=" + pageName;
}

if (currentUser == "admin") {
  alert("Welcome Admin");
}


const editBtns = document.querySelectorAll(".editBtn");
editBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const pageName = btn.getAttribute("data-page");
    editPage(pageName);
    if (user) {
      alert("Login successful! Welcome, " + user.username);
      
      window.location.href = "dashboard.html";
    } else {
      alert("Invalid username or password. Please try again.");
    }
  });
});



function openPopup() {
  window.open("editor.html", "", "width = 800px, height = 410px");
}

function handleViewClick(url) {
  window.location.href = url;
}

