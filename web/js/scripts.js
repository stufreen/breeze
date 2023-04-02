const okayButton = document.getElementById("eol-notice__button");

okayButton.addEventListener("click", () => {
  document.getElementsByClassName("eol-notice")[0].style.display = "none";
});
