// This is a JavaScript file that contains the functionality for
// the hamburger menu
// the modal

/* Hamburger Menu */

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const menuItems = document.querySelectorAll(".nav-links a");

  // Toggle menu on hamburger click
  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }

  // Close menu when clicking a menu item
  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });
});

/* Modal */

document.addEventListener("DOMContentLoaded", function () {
  fetch("../modals/modal.html")
    .then((response) => response.text())
    .then((data) => {
      // Fetch the modal container
      const modalContainer = document.getElementById("modal-container");

      // Insert modal HTML
      modalContainer.innerHTML = data;

      // Find modal and trigger elements
      const modal = document.querySelector("#modal-container .modal");
      const btn = document.getElementById("myBtn");

      // Add click event listener directly to the button
      btn.addEventListener("click", function (event) {
        // Make sure the modal is displayed
        modal.style.display = "block";
        modal.style.position = "fixed";
        modal.style.top = "50%";
        modal.style.left = "50%";
        modal.style.transform = "translate(-50%, -50%)";
        modal.style.zIndex = "1000";
      });

      // Close button functionality
      const closeBtn = modal.querySelector(".close");
      if (closeBtn) {
        closeBtn.addEventListener("click", function () {
          modal.style.display = "none";
        });
      }

      // Close modal when clicking outside
      window.addEventListener("click", function (event) {
        if (event.target === modal) {
          modal.style.display = "none";
        }
      });
    })
    .catch((error) => console.error("Error loading modal:", error));
});

/* Contact Form */

const form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission
  let isValid = true;

  // Name validation: Only letters
  const name = document.getElementById("name").value.trim();
  const nameError = document.getElementById("nameError");
  if (!/^[a-zA-Z\s]+$/.test(name)) {
    nameError.textContent =
      "Der Name darf nur Buchstaben und Leerzeichen enthalten.";
    isValid = false;
  } else {
    nameError.textContent = "";
  }

  // Email validation: Basic email format
  const email = document.getElementById("email").value.trim();
  const emailError = document.getElementById("emailError");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    emailError.textContent = "Bitte geben Sie eine gültige E-Mail-Adresse ein.";
    isValid = false;
  } else {
    emailError.textContent = "";
  }

  // Message validation: No code injections and max 500 characters
  const message = document.getElementById("message").value.trim();
  const messageError = document.getElementById("messageError");
  if (message.length > 500) {
    messageError.textContent =
      "Die Nachricht darf maximal 500 Zeichen lang sein.";
    isValid = false;
  } else if (/<\/?[a-z][\s\S]*>/i.test(message)) {
    messageError.textContent = "Die Nachricht darf keinen HTML-Code enthalten.";
    isValid = false;
  } else {
    messageError.textContent = "";
  }

  // If all validations pass, submit the form or display success
  if (isValid) {
    alert("Formular erfolgreich abgeschickt!");
    form.reset(); // Optionally reset the form
  }
});
