const toggleButton = document.getElementById("darkToggle");

if (localStorage.getItem("darkMode") === "enabled") {
  document.body.classList.add("dark-mode");
  toggleButton.textContent = "☀️";
} else {
  toggleButton.textContent = "🌙";
}

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("darkMode", "enabled");
    toggleButton.textContent = "☀️";
  } else {
    localStorage.setItem("darkMode", "disabled");
    toggleButton.textContent = "🌙";
  }
});

function toggleMenu() {
    const nav = document.getElementById("navLinks");
    nav.classList.toggle("show");
  }
