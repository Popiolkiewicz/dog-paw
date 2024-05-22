import HomeView from "./views/home-view.js";
import ReportView from "./views/report-view.js";
import ContactView from "./views/contact-view.js";

const router = () => {
    const routes = [
        { path: "/", view: HomeView },
        { path: "/report", view: ReportView },
        { path: "/contact", view: ContactView }
    ];

    const routeFound = routes.find(r => location.pathname.endsWith(r.path));

    let view;
    if (!routeFound) {
        console.warn('Route link was not found, redirecting to home...');
        view = new HomeView();
    } else {
        view = new routeFound.view();
    }

    document.querySelector("#app").innerHTML = view.getView();
    view.initController();
}

window.addEventListener("popstate", router);

document.addEventListener('DOMContentLoaded', () => {

    document.body.addEventListener("click", e => {
        if (e.target.matches("[router-link]")) {
            e.preventDefault();
            history.pushState(null, null, e.target.href);
            router();
        }
    });

    router();
});
