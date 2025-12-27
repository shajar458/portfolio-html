// FORM VALIDATION
function validateForm(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const msg = document.getElementById("form-msg");

  if (name === "" || email === "" || message === "") {
    msg.innerText = "All fields are required.";
    msg.style.color = "red";
    return false;
  }

  if (!email.includes("@")) {
    msg.innerText = "Please enter a valid email.";
    msg.style.color = "red";
    return false;
  }

  if (message.length < 10) {
    msg.innerText = "Message must be at least 10 characters.";
    msg.style.color = "red";
    return false;
  }

  msg.innerText = "Message sent successfully!";
  msg.style.color = "green";
  return true;
}

// DARK MODE TOGGLE
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("darkMode", "enabled");
  } else {
    localStorage.setItem("darkMode", "disabled");
  }
}

// LOAD DARK MODE STATE
window.onload = function () {
  if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
  }
};

// SHOW / HIDE SKILLS
function toggleSkills() {
  const skills = document.getElementById("skills");
  skills.style.display =
    skills.style.display === "none" ? "block" : "none";
}

