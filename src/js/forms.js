$(function() {
  $(".modal-form").submit(function(e) {
    var $form = $(this);
    $.ajax({
      type: $form.attr("method"),
      url: $form.attr("action"),
      data: $form.serialize()
    })
      .done(function() {
        $(".modal-form").css({
          display: "none"
        });
        createModal();
      })
      .fail(function() {
        $(".modal-form").css({
          display: "none"
        });
        createModal("error");
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
        createModal();
      })
      .fail(function() {
        createModal("error");
      });
    e.preventDefault();
  });
});

