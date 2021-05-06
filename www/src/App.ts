import * as _ from "lodash";
import { IndexPage } from "./pages/IndexPage";
import { AboutPage } from "./pages/AboutPage";

document.addEventListener("DOMContentLoaded", (event) => {
    //
    const indexPage = new IndexPage("index");
    indexPage.init();
    //
    const aboutPage = new AboutPage("about");
    aboutPage.init();
});
