$(document).ready(function () {
  const $signupForm = $(".signup");
  const $emailInput = $("#email-input");
  const $passwordInput = $("#password-input");

  $signupForm.on("submit", (e) => {
    e.preventDefault();

    const userData = {
      email: $emailInput.val().trim(),
      password: $passwordInput.val().trim(),
    };

    if (!userData.email || !userData.password) {
      return;
    }

    $.ajax({
      type: "POST",
      url: "/api/signup",
      data: userData,
    }).then(() => {
      location.replace("/members");
    });
  });
});
