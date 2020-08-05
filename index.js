const menu = document.querySelector(".test-toggle");
const toggle = document.querySelector(".toggle");

const doTog = () => {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
  } else {
    menu.classList.add("active");
  }
};
const printPage = () => {
  window.print();
};
