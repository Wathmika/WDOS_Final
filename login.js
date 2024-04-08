document.addEventListener("DOMContentLoaded", function () {
  
  fetch("login.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((content) => {
      localStorage.setItem("login", JSON.stringify(content));

      const data = JSON.parse(localStorage.getItem("login"));
      console.log(data);

      document
        .getElementById("loginForm")
        .addEventListener("submit", function (event) {
          event.preventDefault(); 

          
          const username = document.getElementById("username").value;
          const password = document.getElementById("password").value;

          
          const user = data.users.find(
            (user) => user.username === username && user.password === password
          );

          if (user) {
            alert("Login successful! Welcome, " + user.username);
            
            localStorage.setItem('Current_User', user.username)
            window.location.href = "dashboard.html";
          } else {
            alert("Invalid username or password. Please try again.");
          }
        });
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
});