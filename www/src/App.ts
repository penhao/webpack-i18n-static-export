import * as _ from "lodash";
import { Page } from "./pages/AbstractPage";
import { IndexPage } from "./pages/IndexPage";
import { AboutPage } from "./pages/AboutPage";

document.addEventListener("DOMContentLoaded", (event) => {
    setBaseHref();
    initPage();
});

const setBaseHref = () => {
    let base = document.createElement("base");
    base.href =
        window.location.protocol +
        "//" +
        window.location.hostname +
        (window.location.port ? ":" + window.location.port : "");
    document.getElementsByTagName("head")[0].appendChild(base);
};

const initPage = () => {
    const pageName = window.location.pathname
        .split("/")
        .pop()
        .replace(".html", "");
    let currentPage: Page;
    switch (pageName) {
        case "index":
            currentPage = new IndexPage(pageName);
        case "about":
            currentPage = new AboutPage(pageName);
    }
    currentPage.init();
};
