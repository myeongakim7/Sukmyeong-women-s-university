// main.js

console.log("main.js");

// 메인 이미지 슬라이더
$(function () {
  // 배너 이미지 배열
  let bgArr = [
    "../images/contents/main-banner2.jpg",
    "../images/contents/main-banner3.jpg",
    "../images/contents/main-banner4.jpg",
  ];

  let bg_img_num = 0; // 이미지 번호

  // 배경이미지 변경
  // $("#main-banner .container").css({
  //   "background-image": `url(${bgArr[bg_img_num]})`,
  // }); 두 번 입력하면 안됨!

  // 배경 재생
  setInterval(function () {
    bg_img_num++; // 이미지 번호 카운트 증가
    if (bg_img_num >= 3) {
      bg_img_num = 0;
    }
    $("#main-banner .container").css({
      "background-image": `url(${bgArr[bg_img_num]})`,
    });
  }, 5000);
});
// 1초가 1000이구나
// ``< 백틱 <  `편하게 쓸 때 텍스트 ${함수}`

// 사이트맵 버튼
$(function () {
  $(".btn-toggle").on("click", function () {
    $("#site-map-menu").toggleClass("show");
  });

  $("#close").on("click", function () {
    $("#site-map-menu").removeClass("show");
  });
});
