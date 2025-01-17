import FluxPro1Endpoint from '../endpoints/FluxPro1';
import FluxPro1Canny from '../endpoints/FluxPro1Canny';
import FluxPro1Depth from '../endpoints/FluxPro1Depth';
import FluxPro1Fill from '../endpoints/FluxPro1Fill';

class FluxPro1Interface {
    private apiKey:string;
    private region:string;
    private version:string;

    constructor(base:bflBaseInterface) {
        this.apiKey = base.apiKey;
        this.region = base.region;
        this.version = base.version;
    }

    public async generateImage(prompt:string, options:FluxPro1InputType):Promise<FluxPro1OutputType> {
        const connector = new FluxPro1Endpoint(this.apiKey, this.region, this.version);
        return connector.generateImage(prompt, options);
    }

    public async generateImageWithMask(prompt:string, options:FluxPro1FillInputType):Promise<FluxPro1FillOutputType> {
        const connector = new FluxPro1Fill(this.apiKey, this.region, this.version);
        return connector.generateImage(prompt, options);
    }

    public async generateDepthImageWithControlImage(prompt:string, options:FluxPro1DepthInputType):Promise<FluxPro1DepthOutputType> {
        const connector = new FluxPro1Depth(this.apiKey, this.region, this.version);
        return connector.generateImage(prompt, options);
    }

    public async generateCannyImageWithControlImage(prompt:string, options:FluxPro1CannyInputType):Promise<FluxPro1CannyOutputType> {
        const connector = new FluxPro1Canny(this.apiKey, this.region, this.version);
        return connector.generateImage(prompt, options);
    }
}

export default FluxPro1Interface;