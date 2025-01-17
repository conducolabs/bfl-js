import FluxPro11Endpoint from "../endpoints/FluxPro11";
import FluxPro11UltraEndpoint from "../endpoints/FluxPro11Ultra";

class FluxPro11Interface {
    private apiKey:string;
    private region:string;
    private version:string;

    constructor(base:bflBaseInterface) {
        this.apiKey = base.apiKey;
        this.region = base.region;
        this.version = base.version;
    }

    public async generateImage(prompt:string, options:FluxPro11InputType):Promise<FluxPro11OutputType> {
        const connector = new FluxPro11Endpoint(this.apiKey, this.region, this.version);
        return connector.generateImage(prompt, options);
    }

    public async generateUltraImage(prompt:string, options:FluxPro11UltraInputType):Promise<FluxPro11UltraOutputType> {
        const connector = new FluxPro11UltraEndpoint(this.apiKey, this.region, this.version);
        return connector.generateImage(prompt, options);
    }
}

export default FluxPro11Interface;