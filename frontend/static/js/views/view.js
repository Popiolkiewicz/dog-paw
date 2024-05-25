export default class View {

    constructor() {
        if (this.constructor.name === View.name) {
            throw new Error("View class can't be instantiated.");
        }
    }

    initController() {
        console.warn(`Method not overriden for ${this.constructor.name}`);
    }

    getView() {
        console.warn(`Method not overriden for ${this.constructor.name}`);
    }
}