function toggleSkills() {
  const skillsList = document.getElementById("skills-list");
  skillsList.classList.toggle("hidden");
}

  
  function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const status = document.getElementById("form-status");
  
    if (name === "" || email === "" || message === "") {
      status.style.color = "red";
      status.textContent = "Please fill in all fields.";
      return false;
    }
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      status.style.color = "red";
      status.textContent = "Please enter a valid email.";
      return false;
    }
  
    status.style.color = "green";
    status.textContent = "Message sent successfully!";
    return false; // Prevents actual submission for demo
  }
  