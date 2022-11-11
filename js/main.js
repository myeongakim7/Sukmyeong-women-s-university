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
  // PC 사이트맵, 모바일 메뉴 버튼
  $("#btn-toggle").on("click", function () {
    $("#site-map-menu").toggleClass("show");
  });

  $("#close").on("click", function () {
    $("#site-map-menu").removeClass("show");
  });
});
// ** 자바스크립트도 PC랑 모바일 구분해서 함수쓰기!!!!** 같이 쓰면 섞여서 구분도 안되고 적용이 잘 안됨....
$(function () {
  // GNB 1단계 a 기본 이벤트 제거
  $("#site-map-menu #site-menu .depth1 > li > a").on("click", function (event) {
    // 여기다 toggle 기능 추가
    // 사이트맵 1번 a 태그의 형제 관계에 있는 depth2 ul 태그를 선택하여 클릭할 경우 show 클래스를 추가하여 display:block 으로 보이게 한다!  (당연히 기본적으로 모바일 style 시트에서 depth2 는 display:none 상태여야 한다.)
    $(this).next().toggleClass("show");
    event.preventDefault();
  });
});
