$(function () {
  $("#slider-3").slider({
    range: true,
    min: 0,
    max: 4000000,
    values: [400000, 800000],
    slide: function (event, ui) {
      $("#price").val("$" + ui.values[0] + " - $" + ui.values[1]);
      $(".min").text(ui.values[0].toLocaleString());
      $(".max").text(ui.values[1].toLocaleString());
    },
  });
});
