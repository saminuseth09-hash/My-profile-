function sayHello() {
  alert("Hello! Thanks for visiting my profile 😊\nEmail: saminuseth09@gmail.com");
}

// Function to toggle skills visibility
function toggleSkills() {
  const skills = document.getElementById("skills-list");
  if (skills.style.display === "none") {
    skills.style.display = "block";
  } else {
    skills.style.display = "none";
  }
}