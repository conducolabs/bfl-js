import bflApiBaseConnector from "./bflApiBaseConnector";

class FluxPro1CannyFinetuned extends bflApiBaseConnector {
    constructor(apiKey:string, region:string, version:string) {
        super(apiKey, region, version);
    }

    private defaultConfig = {
        control_image: "",
        finetune_strength: 1.1,
        steps: 50,
        canny_low_threshold: 50,
        canny_high_threshold: 200,
        prompt_upsampling: false,
        guidance: 30,
        safety_tolerance: 2,
        output_format: "jpeg"
    }

    public async generateImage(prompt:string, finetuneId:string, options:FluxPro1CannyFinetunedInputType, onDownloadProgress:(progressEvent:{ loaded: number, total: number; percentage: number }) => void=((progressEvent) => {}), onUploadProgress:(progressEvent:{ loaded: number, total: number; percentage: number }) => void=((progressEvent) => {})):Promise<FluxPro1CannyFinetunedOutputType> {
        const data = {
            ...this.defaultConfig,
            ...options,
            prompt,
            finetune_id: finetuneId
        }
        return await this.post("flux-pro-1.0-canny-finetuned", data, onDownloadProgress, onUploadProgress);
    }
}

export default FluxPro1CannyFinetuned;