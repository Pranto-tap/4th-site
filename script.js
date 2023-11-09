var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

function myFunction() {
  var x = document.getElementById("DropDownMenu");
  if (x.style.display === "block") {
      x.style.display = "none";
  } else {
      x.style.display = "block";
  }
} 


// make buttons active class
// let sideMenuButtons = document.querySelectorAll("#sideMenuButtons li button");
// let ulList = document.querySelectorAll("#sideMenuButtons ul");
// let allHeights = [];
// ulList.forEach((ul) => {
//   allHeights.push(ul.offsetHeight);
// });

// for (let i = 0; i < sideMenuButtons.length; i++) {
//   if (sideMenuButtons[i].classList.contains("")) {
//     ulList.forEach((ul) => {
//       if (ul !== sideMenuButtons[i].parentNode.nextElementSibling) {
//         ul.style.height = 0;
//       } else {
//         ul.style.height = `${allHeights[i]}px`;
//       }
//     });
//   }
//   sideMenuButtons[i].addEventListener("click", (_) => {
//     sideMenuButtons.forEach((sideMenuButton) => {
//       sideMenuButton.classList.remove("active");
//     });
//     ulList.forEach((ul) => {
//       if (ul !== sideMenuButtons[i].parentNode.nextElementSibling) {
//         ul.style.height = 0;
//       } else {
//         ul.style.height = `${allHeights[i]}px`;
//       }
//     });
//     sideMenuButtons[i].classList.add("active");
//   });
// }



   
