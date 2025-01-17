"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../config");
const GetResult_1 = __importDefault(require("./endpoints/GetResult"));
class bflBase {
    constructor(configuration) {
        this.apiKey = "";
        this.apiVersion = "v1";
        this.region = "us1";
        if (configuration === null || configuration === undefined) {
            throw new Error("Configuration object is required");
        }
        if (typeof configuration.apiKey !== "string") {
            throw new Error("API key is required");
        }
        this.apiKey = configuration.apiKey;
        if (typeof configuration.apiVersion === "string" && config_1.AVAILABLE_API_VERSIONS.includes(configuration.apiVersion)) {
            this.apiVersion = configuration.apiVersion;
        }
        if (typeof configuration.apiRegion === "string" && config_1.AVAILABLE_API_REGIONS.includes(configuration.apiRegion)) {
            this.region = configuration.apiRegion;
        }
    }
    getStatus(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const connector = new GetResult_1.default(this.apiKey, this.region, this.apiVersion);
            return connector.getResult(id);
        });
    }
}
exports.default = bflBase;
