import { routes } from "./routes";

export function     router() {
    const ruta = window.location.pathname;
    const view = routes[ruta];
 
    if (view){
        document.getElementById("contenedor").innerHTML = view.render;
            
    if (ruta === '/register'){
        if(typeof view.setup === "function"){
            setTimeout(() => {view.setup },50)
        } 
    }


    } else {
        document.getElementById("contenedor").innerHTML = notFoundView();



   }

   const contenedor = document.getElementById("contenedor");
    contenedor.style.animation = "none";
    void contenedor.offsetWidth;
    contenedor.style.animation = "fade-in 0.5s ease";
}



document.addEventListener("click", (event) => {
    
    const link = event.target.closest("a");
    if (link) {
        event.preventDefault();
        const href = link.getAttribute("href");
    
      window.history.pushState({}, '', href);   
      router();  
    }
});

router();

window.addEventListener("popstate", router);


