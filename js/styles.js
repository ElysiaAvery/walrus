$(document).ready(function() {
  $(".clickable").click(function() {
    $("img").show();
    $("#initially-hidden").fadeToggle();
    $("#initially-showing").fadeToggle();
  });
});
