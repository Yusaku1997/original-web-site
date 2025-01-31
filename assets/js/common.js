const scrollTop = () => {
  const arrow = document.querySelector(".footer-arrow");

  arrow.addEventListener("click", () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  });
};

scrollTop();
