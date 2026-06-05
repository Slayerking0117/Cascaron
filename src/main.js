import "@/style.css";
import { router, navigateTo } from "@/router/router";

document.addEventListener("DOMContentLoaded", () => {
  router();
});

document.addEventListener("click", (e) => {
  const link = e.target.closest("[data-link]");

  if (!link) return;

  e.preventDefault();

  navigateTo(link.getAttribute("href"));
});