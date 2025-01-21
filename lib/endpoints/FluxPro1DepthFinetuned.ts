import bflApiBaseConnector from "./bflApiBaseConnector";

class FluxPro1DepthFinetuned extends bflApiBaseConnector {
    constructor(apiKey:string, region:string, version:string) {
        super(apiKey, region, version);
    }

    private defaultConfig = {
        image: "",
        mask: "",
        steps: 50,
        finetune_strength: 1.1,
        prompt_upsampling: false,
        guidance: 60,
        safety_tolerance: 2,
        output_format: "jpeg"
    }

    public async generateImage(prompt:string, finetuneId:string, options:FluxPro1DepthFinetunedInputType, onDownloadProgress:(progressEvent:{ loaded: number, total: number; percentage: number }) => void=((progressEvent) => {}), onUploadProgress:(progressEvent:{ loaded: number, total: number; percentage: number }) => void=((progressEvent) => {})):Promise<FluxPro1DepthFinetunedOutputType> {
        const data = {
            ...this.defaultConfig,
            ...options,
            prompt,
            finetune_id: finetuneId
        }
        return await this.post("flux-pro-1.0-depth", data, onDownloadProgress, onUploadProgress);
    }
}

export default FluxPro1DepthFinetuned;