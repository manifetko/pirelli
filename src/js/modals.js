var mouseOutside = true;
function createModal(status) {
  $("body").append($("#modalTemplate").html());
  if ($(".modal")) {
    $(".modal__btn").on("click", () => {
      $(".modal").fadeOut(500, function() {
        $(".modal").remove();
      });
      $("body").css({
        overflow: "unset",
        position: "relative",
        width: "auto"
      });
    });
    $(".modal__window").on("mouseleave", e => {
      mouseOutside = true;
    });
    $(".modal__window").on("mouseenter", e => {
      mouseOutside = false;
    });
    $(".modal").on("click", e => {
      e.preventDefault;
      if (mouseOutside === true) {
        $(".modal").fadeOut(500, function() {
          $(".modal").remove();
        });
        $("body").css({
          overflow: "unset",
          position: "relative",
          width: "auto"
        });
      }
    });
    if (status === "error") {
      $(".modal__message-text").html("Данный товар временно недоступен");
      $(".modal").addClass("error");
    }
  }
}
$(".modal-form__window").on("mouseleave", e => {
  mouseOutside = true;
});
$(".modal-form__window").on("mouseenter", e => {
  mouseOutside = false;
});
$(".modal-form").on("click", () => {
  if (mouseOutside === true) {
    $(".modal-form").fadeOut(500, function() {
      $(".modal-form__window").fadeOut(500);
    });
    $("body").css({
      overflow: "unset",
      position: "relative",
      width: "auto"
    });
  }
});
$(".btn__fast-bay").on("click", () => {
  $("body").css({
    overflow: "hidden",
    position: "fixed",
    width: "100%"
  });
  $(".modal-form").css({
    display: "flex"
  });
  $(".modal-form__window").fadeIn(1000);
});
$(".modal-login__window").on("mouseleave", e => {
  mouseOutside = true;
});
$(".modal-login__window").on("mouseenter", e => {
  mouseOutside = false;
});
$(".modal-form__window").hide();
$(".modal-login").on("click", () => {
  if (mouseOutside === true) {
    $(".modal-login").fadeOut(500, function() {
      $(".modal-form__window").fadeOut(500);
    });
    $("body").css({
      overflow: "unset",
      position: "relative",
      width: "auto"
    });
  }
});
$(".login").on("click", () => {
  $(".modal-login").css({
    display: "flex"
  });
  $(".modal-form__window").fadeIn(1000);
  $("body").css({
    overflow: "hidden",
    position: "fixed",
    width: "100%"
  });
});
