"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentModel = void 0;
var mongoose_1 = require("mongoose");
var CommentCollectionName = "comment";
var CommentSchema = new mongoose_1.Schema({
    charId: { type: Number, required: true },
    charName: { type: String, required: true },
    author: { type: String, required: true },
    comment: { type: String, required: true },
}, {
    versionKey: false,
});
exports.CommentModel = (0, mongoose_1.model)(CommentCollectionName, CommentSchema);
