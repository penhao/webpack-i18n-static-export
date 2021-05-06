export abstract class Page {
    constructor(public name: string) {}
    init(): void {
        console.log("Hello", `${this.name.toUpperCase()} Page!!!`);
    }
}
