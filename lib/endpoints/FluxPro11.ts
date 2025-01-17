import bflApiBaseConnector from "./bflApiBaseConnector";

class FluxPro11 extends bflApiBaseConnector {
    constructor(apiKey:string, region:string, version:string) {
        super(apiKey, region, version);
    }

    private defaultConfig = {
        width: 1024,
        height: 768,
        prompt_upsampling: false,
        safety_tolerance: 2,
        output_format: "jpeg"
    }

    public async generateImage(prompt:string, options:FluxPro11InputType):Promise<FluxPro11OutputType> {
        const data = {
            ...this.defaultConfig,
            ...options,
            prompt
        }
        return await this.post("flux-pro-1.1", data);
    }
}

export default FluxPro11;