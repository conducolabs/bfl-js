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
const FluxPro1Finetuned_1 = __importDefault(require("../endpoints/FluxPro1Finetuned"));
const FluxPro1FillFinetuned_1 = __importDefault(require("../endpoints/FluxPro1FillFinetuned"));
const FluxPro1DepthFinetuned_1 = __importDefault(require("../endpoints/FluxPro1DepthFinetuned"));
const FluxPro1CannyFinetuned_1 = __importDefault(require("../endpoints/FluxPro1CannyFinetuned"));
class FluxPro1FinetunedInterface {
    constructor(base) {
        this.apiKey = base.apiKey;
        this.region = base.region;
        this.version = base.version;
    }
    generateImage(prompt, finetuneId, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const connector = new FluxPro1Finetuned_1.default(this.apiKey, this.region, this.version);
            return connector.generateImage(prompt, finetuneId, options);
        });
    }
    generateImageWithMask(prompt, finetuneId, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const connector = new FluxPro1FillFinetuned_1.default(this.apiKey, this.region, this.version);
            return connector.generateImage(prompt, finetuneId, options);
        });
    }
    generateDepthImageWithControlImage(prompt, finetuneId, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const connector = new FluxPro1DepthFinetuned_1.default(this.apiKey, this.region, this.version);
            return connector.generateImage(prompt, finetuneId, options);
        });
    }
    generateCannyImageWithControlImage(prompt, finetuneId, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const connector = new FluxPro1CannyFinetuned_1.default(this.apiKey, this.region, this.version);
            return connector.generateImage(prompt, finetuneId, options);
        });
    }
}
exports.default = FluxPro1FinetunedInterface;
