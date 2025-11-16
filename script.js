
// Mettre à jour l'année automatiquement
const year = document.getElementById("year");
if (year) {
  year.textContent = new Date().getFullYear();
}

// Gestion du formulaire de contact
function handleSubmit(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const status = document.getElementById("formStatus");

  if (name.length < 2) {
    status.textContent = "Nom trop court.";
    return false;
  }

  const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (!emailRegex.test(email)) {
    status.textContent = "Adresse email invalide.";
    return false;
  }

  if (message.length < 10) {
    status.textContent = "Message trop court.";
    return false;
  }

  // Message de validation
  status.textContent = "Message envoyé.";
  return false;
}

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
