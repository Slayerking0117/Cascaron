
 
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
    "/admin" : adminView,
    "/dashboard" : dashboardView,
    "/" : homeView,
    "/login" : loginView,
    "/profile" : profileView,
    "/register" : registerView,
    "/tasks" : taskView,
    "/taskform" : taskFormView,
    "/notfound" : notFoundView

}