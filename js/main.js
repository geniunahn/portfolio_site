// 풀 페이지 실행
$(document).ready(function () {
  // fullpage customization
  $("#fullpage").fullpage({
    sectionSelector: ".section",
    navigation: false,
    slidesNavigation: true,
    css3: true,
    controlArrows: false,
  });
});

// 화면 이동

// home
$(function () {
  $(".home").on("click", function () {
    $("#fullpage").css("transform", "translate3d(0px, 0px, 0px");
    $("body").removeClass(
      "fp-viewing-0 fp-viewing-1 fp-viewing-2 fp-viewing-3 fp-viewing-4"
    );
    $("body").addClass("fp-viewing-0");
    $("#fullpage .section").removeClass("active");
    $("#fullpage .first_section").addClass("active");
  });
});

// skills, works, contact, blog
$(function () {
  // skills
  $("#skills").on("click", function () {
    let firstOffset = $(".first_section").offset().top;
    let secondOffset = $(".second_section").offset().top;
    $("#fullpage").css(
      "transform",
      `translate3d(0px, ${firstOffset - secondOffset}px, 0px`
    );
    $("body").removeClass(
      "fp-viewing-0 fp-viewing-1 fp-viewing-2 fp-viewing-3 fp-viewing-4"
    );
    $("body").addClass("fp-viewing-1");
    $("#fullpage .section").removeClass("active");
    $("#fullpage .second_section").addClass("active");
  });
  // workds
  $("#works").on("click", function () {
    let firstOffset = $(".first_section").offset().top;
    let thirdOffset = $(".third_section").offset().top;
    $("#fullpage").css(
      "transform",
      `translate3d(0px, ${firstOffset - thirdOffset}px, 0px`
    );
    $("body").removeClass(
      "fp-viewing-0 fp-viewing-1 fp-viewing-2 fp-viewing-3 fp-viewing-4"
    );
    $("body").addClass("fp-viewing-2");
    $("#fullpage .section").removeClass("active");
    $("#fullpage .third_section").addClass("active");
  });
  // contact
  $("#contact").on("click", function () {
    let firstOffset = $(".first_section").offset().top;
    let fourthOffset = $(".fourth_section").offset().top;
    $("#fullpage").css(
      "transform",
      `translate3d(0px, ${firstOffset - fourthOffset}px, 0px`
    );
    $("body").removeClass(
      "fp-viewing-0 fp-viewing-1 fp-viewing-2 fp-viewing-3 fp-viewing-4"
    );
    $("body").addClass("fp-viewing-3");
    $("#fullpage .section").removeClass("active");
    $("#fullpage .fourth_section").addClass("active");
  });
  // blog
  $("#blog").on("click", function () {
    let firstOffset = $(".first_section").offset().top;
    let fifthOffset = $(".fifth_section").offset().top;
    $("#fullpage").css(
      "transform",
      `translate3d(0px, ${firstOffset - fifthOffset}px, 0px`
    );
    $("body").removeClass(
      "fp-viewing-0 fp-viewing-1 fp-viewing-2 fp-viewing-3 fp-viewing-4"
    );
    $("body").addClass("fp-viewing-4");
    $("#fullpage .section").removeClass("active");
    $("#fullpage .fifth_section").addClass("active");
  });
});
