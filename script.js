function checkPassword() {
    const password = document.getElementById("password").value;
    const feedback = document.getElementById("feedback");
    const recommendations = document.getElementById("recommendations");
    let strength = 0;
    let feedbackMessage = "";
    let recommendationsMessage = "";

    // Evaluación de la contraseña
    if (password.length >= 12) strength++; // Longitud mínima
    if (/[A-Z]/.test(password)) strength++; // Contiene mayúsculas
    if (/[a-z]/.test(password)) strength++; // Contiene minúsculas
    if (/[0-9]/.test(password)) strength++; // Contiene números
    if (/[\W_]/.test(password)) strength++; // Contiene caracteres especiales

    // Mensaje según la seguridad de la contraseña
    switch (strength) {
        case 5:
            feedbackMessage = "Contraseña muy segura";
            feedback.style.color = "green";
            break;
        case 4:
            feedbackMessage = "Contraseña segura";
            feedback.style.color = "orange";
            break;
        case 3:
            feedbackMessage = "Contraseña moderada";
            feedback.style.color = "yellow";
            break;
        default:
            feedbackMessage = "Contraseña débil";
            feedback.style.color = "red";
            break;
    }

    // Recomendaciones
    recommendationsMessage = "<strong>Recomendaciones:</strong><br>";
    if (password.length < 12) recommendationsMessage += "- Aumenta la longitud de la contraseña a al menos 12 caracteres.<br>";
    if (!/[A-Z]/.test(password)) recommendationsMessage += "- Incluye al menos una letra mayúscula.<br>";
    if (!/[a-z]/.test(password)) recommendationsMessage += "- Incluye al menos una letra minúscula.<br>";
    if (!/[0-9]/.test(password)) recommendationsMessage += "- Incluye al menos un número.<br>";
    if (!/[\W_]/.test(password)) recommendationsMessage += "- Incluye al menos un carácter especial (como @, #, $, %, etc.).<br>";

    // Mensaje sobre la dificultad de recordar la contraseña
    if (password.length > 20 && strength === 5) {
        recommendationsMessage += "<strong>Nota:</strong> La contraseña es muy segura, pero puede ser difícil de recordar. Considera usar un administrador de contraseñas.<br>";
    }

    feedback.innerHTML = feedbackMessage;
    recommendations.innerHTML = recommendationsMessage;
}
