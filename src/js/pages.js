$(function() {
  $('a[href^="#"]').on("click", function(event) {
    event.preventDefault();
    var sc = $(this).attr("href"),
      dn = $(sc).offset().top;
    $("html, body").animate({ scrollTop: dn }, 500);
  });
});
$(".cart__item").each((ndx, item) => {
  $(item)
    .children(".cart__close")
    .on("click", () => {
      $(item).animate({ height: 0 }, 500, function() {
        $(item).remove();
      });
    });
});
$(".calculator__vars").each((ndx, item) => {
  let calculatorQuantity = 4;
  $(item)
    .children(".calculator__plus")
    .on("click", () => {
      calculatorQuantity = calculatorQuantity + 4;
      $(item)
        .children(".calculator__quantity")
        .html(`${calculatorQuantity}шт`);
    });
  $(item)
    .children(".calculator__minus")
    .on("click", () => {
      if (calculatorQuantity > 4) {
        calculatorQuantity = calculatorQuantity - 4;
        $(item)
          .children(".calculator__quantity")
          .html(`${calculatorQuantity}шт`);
      }
    });
});
$(".personal-orders__content")
  .hide()
  .css({
    height: "0"
  });
$(".personal-orders__item").each((ndx, item) => {
  $(item)
    .children(".personal-orders__header")
    .children(".personal-orders__details")
    .on("click", e => {
      console.log("ggg");
      e.preventDefault;
      if (
        $(item)
          .children(".personal-orders__content")
          .height() > 0
      ) {
        $(item)
          .children(".personal-orders__content")
          .hide(500, function() {
            $(item)
              .children(".personal-orders__content")
              .css({
                height: "0"
              });
          });
        $(item)
          .children(".personal-orders__header")
          .children(".personal-orders__details")
          .css({
            transform: "rotate(0deg)"
          });
      }
      if (
        $(item)
          .children(".personal-orders__content")
          .height() === 0
      ) {
        $(item)
          .children(".personal-orders__content")
          .css({
            height: "auto"
          });
        $(item)
          .children(".personal-orders__content")
          .show(500);
        $(item)
          .children(".personal-orders__header")
          .children(".personal-orders__details")
          .css({
            transform: "rotate(-90deg)"
          });
      }
    });
});
$(".filter__item").each((ndx, item) => {
  $(item).on("click", () => {
    $(".filter__item").removeClass("active");
    $(item).addClass("active");
  });
});
const btns = $(".btn");
btns.each((ndx, item) => {
  $(item).on("click", e => {
    $(item).append("<div class='pulse'></div>");
    var pulseWidth = $(item).width();
    var pulseHeight = $(item).height();
    let offset = $(item).offset();
    const pulse = $(".pulse");
    let relativeX = e.pageX - offset.left;
    let relativeY = e.pageY - offset.top;
    if (pulseWidth >= pulseHeight) {
      pulse.css({
        width: `${pulseWidth}px`,
        height: `${pulseWidth}px`,
        left: `${relativeX - pulseWidth / 2}px`,
        top: `${relativeY - pulseWidth / 2}px`
      });
    } else {
      pulse.css({
        width: `${pulseHeight}px`,
        height: `${pulseHeight}px`,
        left: `${relativeX - pulseHeight / 2}px`,
        top: `${relativeY - pulseHeight / 2}px`
      });
    }
  });
});
