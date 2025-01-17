import bflApiBaseConnector from "./bflApiBaseConnector";

class FluxDev1 extends bflApiBaseConnector {
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

    public async generateImage(prompt:string, options:FluxDev1InputType):Promise<FluxDev1OutputType> {
        const data = {
            ...this.defaultConfig,
            ...options,
            prompt
        }
        return await this.post("flux-dev", data);
    }
}

export default FluxDev1;