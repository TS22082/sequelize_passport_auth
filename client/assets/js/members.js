$(document).ready(function () {
  $.ajax({
    type: "GET",
    url: "api/user_data",
  }).then((userData) => console.log(userData));
});
