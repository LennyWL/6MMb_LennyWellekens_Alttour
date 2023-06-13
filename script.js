document.addEventListener('DOMContentLoaded', function() {
  var photoItems = document.getElementsByClassName('photo-item');
  var isDragging = false;

  for (var i = 0; i < photoItems.length; i++) {
    photoItems[i].addEventListener('click', function(event) {
      if (isDragging) {
        return; // Negeer de klikgebeurtenis als de foto wordt versleept
      }

      var clickedPhoto = event.currentTarget;
      clickedPhoto.classList.toggle('open');

      if (clickedPhoto.classList.contains('open')) {
        // Voeg een kader toe rond de geopende foto
        clickedPhoto.classList.add('enlarged');
      } else {
        // Verwijder het kader van de foto
        clickedPhoto.classList.remove('enlarged');
      }
    });
  }
});

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Voorkom standaardgedrag van het formulier

    // Verkrijg de ingevulde gegevens
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Stuur de gegevens naar een e-mailadres via een AJAX-verzoek
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "mail-handler.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Het verzoek is succesvol voltooid
            alert("Bedankt voor je bericht, " + name + "! We nemen zo snel mogelijk contact met je op.");
            document.getElementById("contact-form").reset(); // Wis de ingevulde gegevens
        }
    };
    xhr.send("name=" + name + "&email=" + email + "&message=" + message);
});
