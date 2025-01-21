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
const axios_1 = __importDefault(require("axios"));
const config_1 = require("../../config");
class bflApiBaseConnector {
    constructor(apiKey, region, version) {
        this.apiKey = apiKey;
        this.region = region;
        this.version = version;
    }
    post(endpoint_1) {
        return __awaiter(this, arguments, void 0, function* (endpoint, data = {}, onDownloadProgress = ((progressEvent) => { }), onUploadProgress = ((progressEvent) => { })) {
            if (!config_1.AVAILABLE_API_ENDPOINTS.includes(endpoint)) {
                throw new Error("Invalid endpoint.");
            }
            if (this.apiKey === "") {
                throw new Error("API key is required");
            }
            try {
                const request = yield axios_1.default.post(`https://api.${this.region}.bfl.ai/${this.version}/${endpoint}`, data, {
                    headers: {
                        "X-Key": this.apiKey,
                        "Accept": "application/json",
                        "Content-Type": "application/json"
                    },
                    onDownloadProgress: (progressEvent) => {
                        onDownloadProgress({
                            total: progressEvent.total,
                            loaded: progressEvent.loaded,
                            percentage: progressEvent.loaded / progressEvent.total
                        });
                    },
                    onUploadProgress: (progressEvent) => {
                        onUploadProgress({
                            total: progressEvent.total,
                            loaded: progressEvent.loaded,
                            percentage: progressEvent.loaded / progressEvent.total
                        });
                    }
                });
                return request.data;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    get(endpoint_1) {
        return __awaiter(this, arguments, void 0, function* (endpoint, params = {}, onDownloadProgress = ((progressEvent) => { }), onUploadProgress = ((progressEvent) => { })) {
            if (!config_1.AVAILABLE_API_ENDPOINTS.includes(endpoint)) {
                throw new Error("Invalid endpoint.");
            }
            if (this.apiKey === "") {
                throw new Error("API key is required");
            }
            try {
                const request = yield axios_1.default.get(`https://api.${this.region}.bfl.ai/${this.version}/${endpoint}`, {
                    params,
                    headers: {
                        "X-Key": this.apiKey,
                        "Accept": "application/json",
                        "Content-Type": "application/json"
                    },
                    onDownloadProgress: (progressEvent) => {
                        onDownloadProgress({
                            total: progressEvent.total,
                            loaded: progressEvent.loaded,
                            percentage: progressEvent.loaded / progressEvent.total
                        });
                    },
                    onUploadProgress: (progressEvent) => {
                        onUploadProgress({
                            total: progressEvent.total,
                            loaded: progressEvent.loaded,
                            percentage: progressEvent.loaded / progressEvent.total
                        });
                    }
                });
                return request.data;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
}
exports.default = bflApiBaseConnector;
