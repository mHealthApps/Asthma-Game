import { Container } from 'pixi.js';

// Base scene class which is the core for all scenes in multiple
export class BaseScene {
    constructor(app) {
        this.app = app;
        this.container = new Container();
        this.build();
    }

    build() {
        // stub, override in children
        throw new Error("build() not implemented");
    }

    update() {
        // stub does nothing, to override in child for dynamic scenes
    }

    destroy() {
        this.container.destroy({ children: true });
    }
}
