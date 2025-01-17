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
class Finetune extends bflApiBaseConnector_1.default {
    constructor(base) {
        super(base.apiKey, base.region, base.version);
        this.defaultConfig = {
            trigger_word: "TOK",
            mode: "general",
            iterations: 300,
            learning_rate: 0.00001,
            captioning: true,
            priority: "quality",
            finetune_type: "full",
            lora_rank: 32
        };
    }
    create(archive, name, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = Object.assign(Object.assign(Object.assign({}, this.defaultConfig), options), { file_data: archive, finetune_comment: name });
            return yield this.post("finetune", data);
        });
    }
    getDetails(finetuneId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.get("finetune_details", { finetune_id: finetuneId });
        });
    }
    getList() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.get("my_finetunes");
        });
    }
    deleteFinetune(finetuneId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.post("delete_finetune", { finetune_id: finetuneId });
            return true;
        });
    }
}
exports.default = Finetune;
