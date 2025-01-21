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
const bflApiBaseConnector_1 = __importDefault(require("./bflApiBaseConnector"));
class FluxPro11Ultra extends bflApiBaseConnector_1.default {
    constructor(apiKey, region, version) {
        super(apiKey, region, version);
        this.defaultConfig = {
            aspect_ratio: "16:9",
            safety_tolerance: 2,
            raw: false,
            output_format: "jpeg",
            image_prompt_strength: 0.1
        };
    }
    generateImage(prompt_1, options_1) {
        return __awaiter(this, arguments, void 0, function* (prompt, options, onDownloadProgress = ((progressEvent) => { }), onUploadProgress = ((progressEvent) => { })) {
            const data = Object.assign(Object.assign(Object.assign({}, this.defaultConfig), options), { prompt });
            return yield this.post("flux-pro-1.1-ultra", data, onDownloadProgress, onUploadProgress);
        });
    }
}
exports.default = FluxPro11Ultra;
