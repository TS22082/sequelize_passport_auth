$(document).ready(function () {
  const $loginForm = $(".login");
  const $emailInput = $(".email-input");
  const $passwordInput = $(".password-input");

  $loginForm.on("submit", (e) => {
    e.preventDefault();

    const userData = {
      email: $emailInput.val().trim(),
      password: $passwordInput.val().trim(),
    };

    $.ajax({
      type: "POST",
      url: "api/login",
      data: userData,
    }).then(() => {
      location.replace("/members");
    });
  });
});
