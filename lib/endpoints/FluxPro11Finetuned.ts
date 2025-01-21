import bflApiBaseConnector from "./bflApiBaseConnector";

class FluxPro11Finetuned extends bflApiBaseConnector {
    constructor(apiKey:string, region:string, version:string) {
        super(apiKey, region, version);
    }

    private defaultConfig = {
        width: 1024,
        height: 768,
        finetune_strength: 1.1,
        prompt_upsampling: false,
        safety_tolerance: 2,
        output_format: "jpeg"
    }

    public async generateImage(prompt:string, finetuneId:string, options:FluxPro11FinetunedInputType, onDownloadProgress:(progressEvent:{ loaded: number, total: number; percentage: number }) => void=((progressEvent) => {}), onUploadProgress:(progressEvent:{ loaded: number, total: number; percentage: number }) => void=((progressEvent) => {})):Promise<FluxPro11FinetunedOutputType> {
        const data = {
            ...this.defaultConfig,
            ...options,
            prompt,
            finetune_id: finetuneId
        };
        return await this.post("flux-pro-finetuned", data, onDownloadProgress, onUploadProgress);
    }
}

export default FluxPro11Finetuned;