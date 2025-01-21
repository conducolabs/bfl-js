import bflApiBaseConnector from "./bflApiBaseConnector";

class FluxPro1Fill extends bflApiBaseConnector {
    constructor(apiKey:string, region:string, version:string) {
        super(apiKey, region, version);
    }

    private defaultConfig = {
        image: "",
        mask: "",
        steps: 50,
        prompt_upsampling: false,
        guidance: 60,
        safety_tolerance: 2,
        output_format: "jpeg"
    }

    public async generateImage(prompt:string, options:FluxPro1FillInputType, onDownloadProgress:(progressEvent:{ loaded: number, total: number; percentage: number }) => void=((progressEvent) => {}), onUploadProgress:(progressEvent:{ loaded: number, total: number; percentage: number }) => void=((progressEvent) => {})):Promise<FluxPro1FillOutputType> {
        const data = {
            ...this.defaultConfig,
            ...options,
            prompt
        }
        return await this.post("flux-pro-1.0-fill", data, onDownloadProgress, onUploadProgress);
    }
}

export default FluxPro1Fill;