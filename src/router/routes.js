
 
import { registros } from "../services/registros.service";
import { adminView } from "../views/admin";
import { dashboardView } from "../views/dashboard";
import { homeView } from "../views/home";
import { loginView } from "../views/login";
import { notFoundView } from "../views/not-found";
import { profileView } from "../views/profile";
import { registerView } from "../views/register";
import { taskView } from "../views/task";
import { taskFormView } from "../views/task-form";

export const routes = {
    "/": {
        render: homeView(),
        setup: null,
        isPrivate: false
    },
    "/login": {
        render: loginView(),
        setup: null,
        isPrivate: false
    },
    "/register": {
        render: registerView(),
        setup: () => { registros(); },
        isPrivate: false
    },
    "/admin": {
        render: adminView(),
        setup: null,
        isPrivate: true
    },
    "/dashboard": {
        render: dashboardView(),
        setup: null,
        isPrivate: true
    },
    "/profile": {
        render: profileView(),
        setup: null,
        isPrivate: true
    },
    "/tasks": {
        render: taskView(),
        setup: null,
        isPrivate: true
    },
    "/taskform": {
        render: taskFormView(),
        setup: null,
        isPrivate: true
    },
    "/notfound": {
        render: notFoundView(),
        setup: null,
        isPrivate: false
    }

} 