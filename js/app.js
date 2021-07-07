const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });

// function posFade(fade, position) {
//   const winHeight = window.innerHeight / 1.2;
//   const posUp = fade.getBoundingClientRect().top;
//   if (posUp < winHeight) {
//     fade.classList.add(position);
//   } else {
//     fade.classList.remove(position);
//   }
// }
// function scrollFade() {
//   const about = document.querySelector(".about");
//   const portofolio = document.querySelector(".portofolio");
//   const skills = document.querySelector(".skills");
//   posFade(about, "aktif");
//   posFade(portofolio, "aktif");
//   posFade(skills, "aktif");
// }
// scrollFade();
// const about = document.querySelector(".about");
// const portofolio = document.querySelector(".portofolio");
// const skills = document.querySelector(".skills");
// window.addEventListener("scroll", function () {
//   const posAbout = about.getBoundingClientRect().top;
//   const posPortofolio = portofolio.getBoundingClientRect().top;
//   const posSkills = skills.getBoundingClientRect().top;
//
//   console.log(posAbout, posPortofolio, posSkills);
// });
