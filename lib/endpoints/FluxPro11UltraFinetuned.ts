import bflApiBaseConnector from "./bflApiBaseConnector";

class FluxPro11UltraFinetuned extends bflApiBaseConnector {
    constructor(apiKey:string, region:string, version:string) {
        super(apiKey, region, version);
    }

    private defaultConfig = {
        aspect_ratio: "16:9",
        finetune_strengh: 1.2,
        safety_tolerance: 2,
        raw: false,
        output_format: "jpeg",
        image_prompt_strength: 0.1
    }

    public async generateImage(prompt:string, finetuneId:string, options:FluxPro11UltraFinetunedInputType, onDownloadProgress:(progressEvent:{ loaded: number, total: number; percentage: number }) => void=((progressEvent) => {}), onUploadProgress:(progressEvent:{ loaded: number, total: number; percentage: number }) => void=((progressEvent) => {})):Promise<FluxPro11UltraFinetunedOutputType> {
        const data = {
            ...this.defaultConfig,
            ...options,
            prompt,
            finetune_id: finetuneId
        }
        return await this.post("flux-pro-1.1-ultra-finetuned", data, onDownloadProgress, onUploadProgress);
    }
}

export default FluxPro11UltraFinetuned;