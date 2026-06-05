import loginView from "@/views/loginView";
import homeView from "@/views/homeView";
import adminView from "@/views/adminView";
import unauthorized from "@/views/unauthorized";
import notFound from "@/views/notFound";

import {
  isAuthenticated,
  isAdmin,
} from "@/utils";

const routes = {
  "/": loginView,
  "/home": homeView,
  "/admin": adminView,
  "/unauthorized": unauthorized,
  "/not-found": notFound,
};

export const navigateTo = (path) => {
  history.pushState({}, "", path);
  router();
};

export const router = () => {
  const app = document.querySelector("#app");

  let path = window.location.pathname;

  // Protección de autenticación
  if (
    path !== "/" &&
    !isAuthenticated()
  ) {
    path = "/";
    history.replaceState({}, "", "/");
  }

  // Protección de rol admin
  if (
    path === "/admin" &&
    !isAdmin()
  ) {
    path = "/unauthorized";
    history.replaceState(
      {},
      "",
      "/unauthorized"
    );
  }

  // Evitar volver al login autenticado
  if (
    path === "/" &&
    isAuthenticated()
  ) {
    path = "/home";
    history.replaceState(
      {},
      "",
      "/home"
    );
  }

  const view =
    routes[path] || notFound;

  app.innerHTML = view();
};

window.addEventListener(
  "popstate",
  router
);