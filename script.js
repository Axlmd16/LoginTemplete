document.addEventListener("DOMContentLoaded", function () {
    const showForgotPasswordLink =
        document.getElementById("showForgotPassword");
    const showLoginFormLink = document.getElementById("showLoginForm");
    const showSignupFormLink = document.getElementById("showSignupForm");
    const showLoginFormFromSignup = document.getElementById(
        "showLoginFormFromSignup"
    );
    const loginForm = document.getElementById("loginForm");
    const forgotPasswordForm = document.getElementById("forgotPasswordForm");
    const signupForm = document.getElementById("signupForm");

    function hideAllForms() {
        loginForm.classList.remove("active");
        forgotPasswordForm.classList.remove("active");
        signupForm.classList.remove("active");
    }

    showForgotPasswordLink.addEventListener("click", function (e) {
        e.preventDefault();
        hideAllForms();
        forgotPasswordForm.classList.add("active");
    });

    showLoginFormLink.addEventListener("click", function (e) {
        e.preventDefault();
        hideAllForms();
        loginForm.classList.add("active");
    });

    showSignupFormLink.addEventListener("click", function (e) {
        e.preventDefault();
        hideAllForms();
        signupForm.classList.add("active");
    });

    showLoginFormFromSignup.addEventListener("click", function (e) {
        e.preventDefault();
        hideAllForms();
        loginForm.classList.add("active");
    });

    // Mostrar el formulario de login por defecto
    hideAllForms();
    loginForm.classList.add("active");
});
