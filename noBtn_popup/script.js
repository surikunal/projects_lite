const open = document.getElementById("open");
const close = document.getElementById("close");
const container = document.getElementById("container");
const popupContainer = document.querySelector(".popupContainer");

open.addEventListener("click", () => {
  container.classList.add("active");
});

close.addEventListener("click", () => {
  container.classList.remove("active");
});

popupContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("popupContainer")) {
    popupContainer.classList.remove("active");
  }
});
