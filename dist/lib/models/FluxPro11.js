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
const FluxPro11_1 = __importDefault(require("../endpoints/FluxPro11"));
const FluxPro11Ultra_1 = __importDefault(require("../endpoints/FluxPro11Ultra"));
class FluxPro11Interface {
    constructor(base) {
        this.apiKey = base.apiKey;
        this.region = base.region;
        this.version = base.version;
    }
    generateImage(prompt, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const connector = new FluxPro11_1.default(this.apiKey, this.region, this.version);
            return connector.generateImage(prompt, options);
        });
    }
    generateUltraImage(prompt, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const connector = new FluxPro11Ultra_1.default(this.apiKey, this.region, this.version);
            return connector.generateImage(prompt, options);
        });
    }
}
exports.default = FluxPro11Interface;
