"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverInit = void 0;
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("../routes"));
var cors_1 = __importDefault(require("cors"));
var app = (0, express_1.default)();
var PORT = process.env.PORT || 8080;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/character", routes_1.default);
app.use(function (req, res) {
    res.status(404).json({
        msg: "Error",
        data: "UndefinedPath",
    });
});
var serverInit = function () {
    app.listen(PORT, function () {
        return console.log("Server up! ... Listening at port ", PORT);
    });
};
exports.serverInit = serverInit;
