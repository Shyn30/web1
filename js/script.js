// toggle class active humbergure menu
// document query itu artinya carikan saya doc yg idnya
const navbarNav = document.querySelector(".navbar-nav");

// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// toggle class active Searchform
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  // menambahkan kelas active ketika blm ada, ketika ada di klik maka hilang
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};


// klik diluar side Bar untuk menuutup navbar dihamburger
const hamburger = document.querySelector("#hamburger-menu");
const searchbutton = document.querySelector('#search-button');

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!searchbutton.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});
