import bflApiBaseConnector from "./bflApiBaseConnector";

class FluxPro11Ultra extends bflApiBaseConnector {
    constructor(apiKey:string, region:string, version:string) {
        super(apiKey, region, version);
    }

    private defaultConfig = {
        aspect_ratio: "16:9",
        safety_tolerance: 2,
        raw: false,
        output_format: "jpeg",
        image_prompt_strength: 0.1
    }

    public async generateImage(prompt:string, options:FluxPro11UltraInputType, onDownloadProgress:(progressEvent:{ loaded: number, total: number; percentage: number }) => void=((progressEvent) => {}), onUploadProgress:(progressEvent:{ loaded: number, total: number; percentage: number }) => void=((progressEvent) => {})):Promise<FluxPro11UltraOutputType> {
        const data = {
            ...this.defaultConfig,
            ...options,
            prompt
        }
        return await this.post("flux-pro-1.1-ultra", data, onDownloadProgress, onUploadProgress);
    }
}

export default FluxPro11Ultra;