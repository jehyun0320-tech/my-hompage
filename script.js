// 연락 버튼
document.getElementById("contactBtn").addEventListener("click", function() {
  alert("연락해주셔서 감사합니다! 📧 이메일로 연결됩니다.");
  window.location.href = "mailto:example@email.com";
});

// 자동 슬라이드
let slideIndex = 0;
const slides = document.querySelectorAll(".slide-img");

function showSlides() {
  slides.forEach(img => img.style.display = "none"); // 모든 이미지 숨기기
  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;
  slides[slideIndex-1].style.display = "block"; // 현재 이미지 보이기
  setTimeout(showSlides, 3000); // 3초마다 다음 이미지
}

if (slides.length > 0) {
  showSlides(); // 슬라이드 실행
}
