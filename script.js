//your JS code here. If required.
const user = document.getElementById("username");
const pass = document.getElementById("password");
const checkBox = document.getElementById("checkbox");
const submitBtn = document.getElementById("submit");
const existingBtn = document.getElementById("existing");

if (localStorage.getItem("username") && localStorage.getItem("password")) {
  existingBtn.style.display = "block";
}

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (checkBox.checked) {
    localStorage.setItem("username", user.value);
    localStorage.setItem("password", pass.value);
    alert(`Logged in as ${user.value}`);
  } else {
    localStorage.clear();
    alert(`Logged in as ${user.value}`);
  }
});

existingBtn.addEventListener("click", (e) => {
  e.preventDefault();
  alert(`Logged in as ${localStorage.getItem("username")}`);
});
