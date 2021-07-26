const header = document.querySelector("header");
console.log(header);
const navHeader = document.getElementById("navHeader");
console.log(navHeader);
const aNavHeader = navHeader.querySelectorAll("a");
console.log(aNavHeader);
//const url = document.location.href;
let activeTab;
aNavHeader.forEach((aNav) => {
  aNav.addEventListener("click", function () {
    if (activeTab) {
      activeTab.classList.remove("active");
    }
    activeTab = aNav;
    activeTab.classList.add("active");
  });
});

// try {
//   let url = document.location.href;
//   for (let i = 0; i < aNavHeader.length; i++) {
//     if (url == aNavHeader[i].href) {
//       aNavHeader[i].classList.add("active");
//     }
//   }
// } catch (e) {}
