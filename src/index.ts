import config from "./config";
import { serverInit } from "./services/server";
import { ConnectToDB } from "./services/db";

ConnectToDB(config.URL_MONGOATLAS || "");
serverInit();
