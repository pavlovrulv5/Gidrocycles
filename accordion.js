const accordionEls = document.querySelectorAll(".accordion");

accordionEls.forEach((acc) => {
  const accordionContent = acc.querySelector(".accordion-content");
  const accordionHeader = acc.querySelector(".accordion-header");
  accordionHeader.addEventListener("click", () => {
    debugger;
    if (acc.classList.contains("active")) {
      acc.classList.remove("active");
      accordionContent.style.maxHeight = 0 + "px";
    } else {
      acc.classList.add("active");
      accordionContent.style.maxHeight =
        accordionContent.scrollHeight + 100 + "px";
    }
  });
});
