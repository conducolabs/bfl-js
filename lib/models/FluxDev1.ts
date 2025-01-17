import FluxDev1 from '../endpoints/FluxDev1';

class FluxDev1Interface {
    private apiKey:string;
    private region:string;
    private version:string;

    constructor(base:bflBaseInterface) {
        this.apiKey = base.apiKey;
        this.region = base.region;
        this.version = base.version;
    }

    public async generateImage(prompt:string, options:FluxDev1InputType):Promise<FluxDev1OutputType> {
        const connector = new FluxDev1(this.apiKey, this.region, this.version);
        return connector.generateImage(prompt, options);
    }
}

export default FluxDev1Interface;