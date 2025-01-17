import bflApiBaseConnector from "./bflApiBaseConnector";

class Finetune extends bflApiBaseConnector {
    constructor(base:bflBaseInterface) {
        super(base.apiKey, base.region, base.version);
    }

    private defaultConfig = {
        trigger_word: "TOK",
        mode: "general",
        iterations: 300,
        learning_rate: 0.00001,
        captioning: true,
        priority: "quality",
        finetune_type: "full",
        lora_rank: 32
    }

    public async create(archive:string, name:string, options:FinetuneCreateInputType):Promise<FinetuneCreateOutputType> {
        const data = {
            ...this.defaultConfig,
            ...options,
            file_data: archive,
            finetune_comment: name
        };
        return await this.post("finetune", data);
    }

    public async getDetails(finetuneId:string):Promise<FinetuneDetailsOutputType> {
        return await this.get("finetune_details", { finetune_id: finetuneId });
    }

    public async getList():Promise<FinetuneListOutputType> {
        return await this.get("my_finetunes");
    }

    public async deleteFinetune(finetuneId:string):Promise<boolean> {
        await this.post("delete_finetune", { finetune_id: finetuneId });
        return true;
    }
}

export default Finetune;