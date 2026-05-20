export function scrollToForm() {
  document.getElementById("evaluation")?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}
