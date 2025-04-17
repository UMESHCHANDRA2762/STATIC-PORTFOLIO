function toggleSkills() {
  const skillsList = document.getElementById("skills-list");
  skillsList.classList.toggle("hidden");
}

  
function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const contact = document.getElementById("contact").value.trim();
  const status = document.getElementById("form-status");

  // Empty field check
  if (name === "" || email === "" || message === "" || contact === "") {
    status.style.color = "red";
    status.textContent = "Please fill in all fields.";
    return false;
  }

  // Email format check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    status.style.color = "red";
    status.textContent = "Please enter a valid email.";
    return false;
  }

  // Contact number must be 10 digits
  const contactRegex = /^\d{10}$/;
  if (!contactRegex.test(contact)) {
    status.style.color = "red";
    status.textContent = "Please enter a valid 10-digit numeric contact number.";
    return false;
  }

  // All good!
  status.style.color = "green";
  status.textContent = "Form submitted successfully!";
  return true;
}
