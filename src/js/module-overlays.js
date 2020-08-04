var mouseOutside = true;
function createOverlay(status) {
  $("body").append($("#overlayTemplate").html());
  if ($(".overlay")) {
    $(".overlay__btn").on("click", () => {
      $(".overlay").fadeOut(500, function() {
        $(".overlay").remove();
      });
      $("body").css({
        overflow: "unset",
        position: "relative",
        width: "auto"
      });
    });
    $(".overlay__window").on("mouseleave", e => {
      mouseOutside = true;
    });
    $(".overlay__window").on("mouseenter", e => {
      mouseOutside = false;
    });
    $(".overlay").on("click", e => {
      e.preventDefault;
      if (mouseOutside === true) {
        $(".overlay").fadeOut(500, function() {
          $(".overlay").remove();
        });
        $("body").css({
          overflow: "unset",
          position: "relative",
          width: "auto"
        });
      }
    });
    if (status === "error") {
      $(".overlay__message-text").html("Данный товар временно недоступен");
      $(".overlay").addClass("error");
    }
  }
}
$(".overlay-form__window").on("mouseleave", e => {
  mouseOutside = true;
});
$(".overlay-form__window").on("mouseenter", e => {
  mouseOutside = false;
});
$(".overlay-form").on("click", () => {
  if (mouseOutside === true) {
    $(".overlay-form").fadeOut(500, function() {
      $(".overlay-form__window").fadeOut(500);
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
  $(".overlay-form").css({
    display: "flex"
  });
  $(".overlay-form__window").fadeIn(1000);
});
$(".overlay-entrance__window").on("mouseleave", e => {
  mouseOutside = true;
});
$(".overlay-entrance__window").on("mouseenter", e => {
  mouseOutside = false;
});
$(".overlay-form__window").hide();
$(".overlay-entrance").on("click", () => {
  if (mouseOutside === true) {
    $(".overlay-entrance").fadeOut(500, function() {
      $(".overlay-form__window").fadeOut(500);
    });
    $("body").css({
      overflow: "unset",
      position: "relative",
      width: "auto"
    });
  }
});
$(".entrance").on("click", () => {
  $(".overlay-entrance").css({
    display: "flex"
  });
  $(".overlay-form__window").fadeIn(1000);
  $("body").css({
    overflow: "hidden",
    position: "fixed",
    width: "100%"
  });
});
