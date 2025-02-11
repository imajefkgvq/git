const openAny = document.querySelectorAll("#tog");
const hid = document.querySelectorAll(".hide");

for (let i = 0; i < openAny.length; i++) {
  openAny[i].addEventListener("click", () => {
    hid[i].classList.toggle("hide");
  });
}
