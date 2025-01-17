import bflApiBaseConnector from "./bflApiBaseConnector";

class FluxPro1Depth extends bflApiBaseConnector {
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

    public async generateImage(prompt:string, options:FluxPro1DepthInputType):Promise<FluxPro1DepthOutputType> {
        const data = {
            ...this.defaultConfig,
            ...options,
            prompt
        }
        return await this.post("flux-pro-1.0-depth", data);
    }
}

export default FluxPro1Depth;