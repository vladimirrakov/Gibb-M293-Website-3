// This is a JavaScript file that contains the functionality for
// the hamburger menu
// the modal

/* Hamburger Menu */

document.querySelector(".hamburger").addEventListener("click", function () {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("active"); // Toggle the active class to show/hide the menu
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
        console.log("Modal button clicked"); // Debug log

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
