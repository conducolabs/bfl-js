import bflApiBaseConnector from "./bflApiBaseConnector";

class FluxPro1 extends bflApiBaseConnector {
    constructor(apiKey:string, region:string, version:string) {
        super(apiKey, region, version);
    }

    private defaultConfig = {
        width: 1024,
        height: 768,
        steps: 40,
        prompt_upsampling: false,
        guidance: 2.5,
        safety_tolerance: 2,
        interval: 2,
        output_format: "jpeg"
    }

    public async generateImage(prompt:string, options:FluxPro1InputType, onDownloadProgress:(progressEvent:{ loaded: number, total: number; percentage: number }) => void=((progressEvent) => {}), onUploadProgress:(progressEvent:{ loaded: number, total: number; percentage: number }) => void=((progressEvent) => {})):Promise<FluxPro1OutputType> {
        const data = {
            ...this.defaultConfig,
            ...options,
            prompt
        }
        return await this.post("flux-pro", data, onDownloadProgress, onUploadProgress);
    }
}

export default FluxPro1;