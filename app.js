const expandCards = document.querySelectorAll(".expanding-card");
const expandCardChild = document.querySelectorAll(".expanding-card-child");

const expandCardArray = Array.from(expandCards);
const expandCardChildArray = Array.from(expandCardChild);

expandCardArray.forEach((expanded) => {
  expanded.addEventListener("mouseover", () => {
    expanded.classList.toggle("expanding-card-hover");
    expanded.classList.toggle("big-bold-text");
  });

  expanded.addEventListener("mouseout", () => {
    expanded.classList.toggle("expanding-card-hover");
    expanded.classList.toggle("big-bold-text");
  });
});
