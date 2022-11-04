"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = __importDefault(require("./config"));
var server_1 = require("./services/server");
var db_1 = require("./services/db");
(0, db_1.ConnectToDB)(config_1.default.URL_MONGOATLAS || "");
(0, server_1.serverInit)();
