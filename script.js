const showMenu = () => {
  document.querySelector(".nav__lists").classList.toggle("show__menu");
  document.querySelector("#col_1").classList.toggle("times1");
  document.querySelector("#col_2").classList.toggle("hidden");
  document.querySelector("#col_3").classList.toggle("times2");
};
const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab--content");
//console.log(tabs[0].dataset.tabTarget);
tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    const targetTabContent = document.querySelector(
      `#${tab.dataset.tabTarget}`
    );
    //remove active class
    tabs.forEach((tab) => tab.classList.remove("active"));
    tabContents.forEach((tabContent) => tabContent.classList.remove("active"));

    // add active class
    tab.classList.add("active")
    targetTabContent.classList.add("active")
  });
});
