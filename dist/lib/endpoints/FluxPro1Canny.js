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
class FluxPro1Canny extends bflApiBaseConnector_1.default {
    constructor(apiKey, region, version) {
        super(apiKey, region, version);
        this.defaultConfig = {
            control_image: "",
            steps: 50,
            canny_low_threshold: 50,
            canny_high_threshold: 200,
            prompt_upsampling: false,
            guidance: 30,
            safety_tolerance: 2,
            output_format: "jpeg"
        };
    }
    generateImage(prompt, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = Object.assign(Object.assign(Object.assign({}, this.defaultConfig), options), { prompt });
            return yield this.post("flux-pro-1.0-canny", data);
        });
    }
}
exports.default = FluxPro1Canny;
