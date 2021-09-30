const arrow = document.querySelector("#arrow-down");

arrow.addEventListener("click", () => {
  document.querySelector("header").classList.add("move-header");
  arrow.remove();
})
