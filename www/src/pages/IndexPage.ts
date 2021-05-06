import { greeting } from "./../components/Foo";
import { Page } from "./AbstractPage";
export class IndexPage extends Page {
    constructor(name: string) {
        super(name);
    }
    init() {
        super.init();
        greeting("Foo");
    }
}
