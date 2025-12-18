// 플러그인 등록
gsap.registerPlugin(ScrollTrigger);

gsap.to(".scroll-image", {
    scale: 3,       // 이미지를 3배로 확대 (축소하고 싶으면 0.5 등으로 설정)
    ease: "none",   // 스크롤과 1:1로 반응하도록 가속도 제거
    scrollTrigger: {
        trigger: ".section-wrapper", // 애니메이션이 시작될 요소
        start: "top top",            // 요소의 맨 위가 화면 맨 위에 닿을 때 시작
        end: "+=2000",               // 2000px 만큼 스크롤하는 동안 애니메이션 진행
        scrub: true,                 // 스크롤 바를 움직일 때마다 애니메이션 재생/역재생 (핵심!)
        pin: true,                   // 애니메이션 동안 화면 고정 (Sticky 효과)
    }
});