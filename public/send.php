<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name    = htmlspecialchars($_POST["name"]);
    $email   = htmlspecialchars($_POST["email"]);
    $message = htmlspecialchars($_POST["message"]);

    $to = "florian.huguet78@orange.fr";
    $subject = "Nouveau message depuis le portfolio";
    $body = "Nom : $name\nEmail : $email\n\nMessage:\n$message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        http_response_code(200);
        echo "Message envoyé avec succès.";
    } else {
        http_response_code(500);
        echo "Erreur lors de l'envoi.";
    }
} else {
    http_response_code(403);
    echo "Requête non autorisée.";
}
?>
