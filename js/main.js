// Efeito Scroll navbar
$(window).on("scroll", function() {
  if ($(window).scrollTop()) {
    $(".navbar").addClass("black");
  } else {
    $(".navbar").removeClass("black");
  }
});

// Contadores
$(".counter").counterUp({
  delay: 10,
  time: 1000
});
