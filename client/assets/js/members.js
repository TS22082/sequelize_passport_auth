$(document).ready(function () {
  $.ajax({
    type: "GET",
    url: "api/user_data",
  }).then((userData) => $(".member-id").text(userData.id));
});
