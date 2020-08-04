var sliderItems = $(".slider__item");
var sliderList = $(".slider__list");
var sliderWidth = sliderList.width();
$(window).resize(function() {
  sliderWidth = sliderList.width();
});
var sliderBreadcrumbs = $(".slider__breadcrumbs-item");
var currentDisplacement = 0;
var idIntervals = 0;
sliderList.append(
  sliderList
    .children()
    .first()
    .clone()
);
sliderBreadcrumbs.each((ndx, item) => {
  $(item).on("click", () => {
    moveSlide(ndx);
    clearInterval(idIntervals);
    idIntervals = setInterval(function() {
      moveSlide(currentDisplacement + 1);
    }, 5000);
  });
});
function moveSlide(slidesToMove) {
  currentDisplacement = slidesToMove;
  sliderBreadcrumbs.removeClass("active");
  sliderList.animate(
    { left: -currentDisplacement * sliderWidth },
    500,
    function() {
      if (currentDisplacement === sliderItems.length) {
        currentDisplacement = 0;
        sliderList.css({
          left: "0px"
        });
      }
      sliderBreadcrumbs.each((ndx, item) => {
        if (ndx === currentDisplacement) {
          $(item).addClass("active");
        }
      });
    }
  );
}
idIntervals = setInterval(function() {
  moveSlide(currentDisplacement + 1);
}, 5000);
