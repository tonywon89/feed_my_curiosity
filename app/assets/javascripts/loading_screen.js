$(document).ready(function(){
  setTimeout(function() {
    $("#loading-word").addClass("appear");
  }, 0);

  setTimeout(function () {
    $("#curious-feeds-word").addClass("appear");
  }, 1000);

  setTimeout(function () {
    $("#loading-word").toggleClass("appear");
    $("#curious-feeds-word").toggleClass("appear");
  }, 2000);

  setTimeout(function () {
    $(".loading-app h2").html("<span id='thank-words'>Thank you for waiting :)</span>");
    $('#thank-words').animate({
      opacity: 1
    }, 500);
  }, 3000);

});
