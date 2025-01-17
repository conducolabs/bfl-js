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
const FluxPro1_1 = __importDefault(require("../endpoints/FluxPro1"));
const FluxPro1Canny_1 = __importDefault(require("../endpoints/FluxPro1Canny"));
const FluxPro1Depth_1 = __importDefault(require("../endpoints/FluxPro1Depth"));
const FluxPro1Fill_1 = __importDefault(require("../endpoints/FluxPro1Fill"));
class FluxPro1Interface {
    constructor(base) {
        this.apiKey = base.apiKey;
        this.region = base.region;
        this.version = base.version;
    }
    generateImage(prompt, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const connector = new FluxPro1_1.default(this.apiKey, this.region, this.version);
            return connector.generateImage(prompt, options);
        });
    }
    generateImageWithMask(prompt, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const connector = new FluxPro1Fill_1.default(this.apiKey, this.region, this.version);
            return connector.generateImage(prompt, options);
        });
    }
    generateDepthImageWithControlImage(prompt, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const connector = new FluxPro1Depth_1.default(this.apiKey, this.region, this.version);
            return connector.generateImage(prompt, options);
        });
    }
    generateCannyImageWithControlImage(prompt, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const connector = new FluxPro1Canny_1.default(this.apiKey, this.region, this.version);
            return connector.generateImage(prompt, options);
        });
    }
}
exports.default = FluxPro1Interface;
