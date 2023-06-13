<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    // Instellingen voor het verzenden van e-mail
    $to = "Business.intwl@gmail.com"; // Vervang dit met het e-mailadres waarnaar je de e-mail wilt sturen
    $headers = "From: $name <$email>";
    $mailBody = "Naam: $name\nE-mail: $email\nOnderwerp: $subject\nBericht: $message";

    // Verstuur de e-mail
    if (mail($to, $subject, $mailBody, $headers)) {
        echo "Bedankt voor je bericht, $name! We hebben je e-mail ontvangen en nemen zo snel mogelijk contact met je op.";
    } else {
        echo "Er is een probleem opgetreden bij het verzenden van de e-mail. Probeer het later opnieuw.";
    }
}
?>
