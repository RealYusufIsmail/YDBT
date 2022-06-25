"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandData = void 0;
class CommandData {
    name;
    description;
    type;
    constructor(builder) {
        this.name = builder.getName();
        this.description = builder.getDescription();
        this.type = "CHAT_INPUT";
    }
}
exports.CommandData = CommandData;
