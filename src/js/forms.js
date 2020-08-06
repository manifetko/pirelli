$(function() {
  $(".overlay-form").submit(function(e) {
    var $form = $(this);
    $.ajax({
      type: $form.attr("method"),
      url: $form.attr("action"),
      data: $form.serialize()
    })
      .done(function() {
        $(".overlay-form").css({
          display: "none"
        });
        createOverlay();
      })
      .fail(function() {
        $(".overlay-form").css({
          display: "none"
        });
        createOverlay("error");
      });
    e.preventDefault();
  });
});

$(function() {
  $(".checkout__form").submit(function(e) {
    var $form = $(this);
    $.ajax({
      type: $form.attr("method"),
      url: $form.attr("action"),
      data: $form.serialize()
    })
      .done(function() {
        createOverlay();
      })
      .fail(function() {
        createOverlay("error");
      });
    e.preventDefault();
  });
});

