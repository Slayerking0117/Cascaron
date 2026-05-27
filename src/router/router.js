import { routes } from "./routes";

export function router() {
    const ruta = window.location.pathname;
    const view = routes[ruta];
 
    if (view){
        document.getElementById("contenedor").innerHTML = view();
    } else {
        document.getElementById("contenedor").innerHTML = notFoundView();



   }

   



document.addEventListener("click", (event) => {
    event.preventDefault();
    const link = event.target.closest("a");
    if (link) {
        const href = link.getAttribute("href");
    
      window.history.pushState({}, '', href);   
      router();  
    }
});

router();

window.addEventListener("popstate", router);

