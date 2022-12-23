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

// $(function () {
//   $(".header").on("click", function () {
//     $("#first_section").focus();
//   });
// });
