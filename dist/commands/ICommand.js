"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ICommand = void 0;
class ICommand {
    name;
    description;
    type;
    run;
    constructor(name, description, type, run) {
        this.name = name;
        this.description = description;
        this.type = type;
        this.run = run;
    }
    getName() {
        return this.name;
    }
    getDescription() {
        return this.description;
    }
    getType() {
        return this.type;
    }
    getRun() {
        return this.run;
    }
}
exports.ICommand = ICommand;
