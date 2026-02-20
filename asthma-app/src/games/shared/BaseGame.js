// Base class which contains each Pixi games basic structure that React will interact with
export class BaseGame {
    constructor({ container, events }) {
        this.container = container;
        this.events = events;
    }

    start() {
        throw new Error("start() not implemented");
    }

    destroy() {
        throw new Error("destroy() not implemented");
    }
}