import bflApiBaseConnector from "./bflApiBaseConnector";

class FluxPro1FillFinetuned extends bflApiBaseConnector {
    constructor(apiKey:string, region:string, version:string) {
        super(apiKey, region, version);
    }

    private defaultConfig = {
        image: "",
        mask: "",
        finetune_strength: 1.1,
        steps: 50,
        prompt_upsampling: false,
        guidance: 60,
        safety_tolerance: 2,
        output_format: "jpeg"
    }

    public async generateImage(prompt:string, finetuneId:string, options:FluxPro1FillFinetunedInputType):Promise<FluxPro1FillFinetunedOutputType> {
        const data = {
            ...this.defaultConfig,
            ...options,
            prompt,
            finetune_id: finetuneId
        }
        return await this.post("flux-pro-1.0-fill-finetuned", data);
    }
}

export default FluxPro1FillFinetuned;