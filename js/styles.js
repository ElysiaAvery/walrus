$(document).ready(function() {
  $(".clickable").click(function() {
    var slide = $("#data").is(":hidden");

    $("img").slideToggle();
    if(":visible")
      $("#data-spaz").slideToggle("slow") && $("#data-poker").slideToggle("slow");
  });
});
$(document).ready(function() {
  $(".open").click(function() {
    var go = $("#data-spaz").is(":hidden");

    $("img").slideToggle();
    if(":visible")
      $("#data").slideToggle("slow") && $("#data-poker").slideToggle("slow");
  });
});
$(document).ready(function() {
  $(".sesame").click(function() {
    var away = $("#data-poker").is(":hidden");

    $("img").slideToggle();
    if(":visible")
      $("#data").slideToggle() && $("#data-spaz").slideToggle("slow");
  });
});
