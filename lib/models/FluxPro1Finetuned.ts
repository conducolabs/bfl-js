import FluxPro1FinetunedEndpoint from "../endpoints/FluxPro1Finetuned";
import FluxPro1FillFinetuned from "../endpoints/FluxPro1FillFinetuned";
import FluxPro1DepthFinetuned from "../endpoints/FluxPro1DepthFinetuned";
import FluxPro1CannyFinetuned from "../endpoints/FluxPro1CannyFinetuned";

class FluxPro1FinetunedInterface {
    private apiKey:string;
    private region:string;
    private version:string;

    constructor(base:bflBaseInterface) {
        this.apiKey = base.apiKey;
        this.region = base.region;
        this.version = base.version;
    }

    public async generateImage(prompt:string, finetuneId:string, options:FluxPro1FinetunedInputType):Promise<FluxPro1FinetunedOutputType> {
        const connector = new FluxPro1FinetunedEndpoint(this.apiKey, this.region, this.version);
        return connector.generateImage(prompt, finetuneId, options);
    }

    public async generateImageWithMask(prompt:string, finetuneId:string, options:FluxPro1FillFinetunedInputType):Promise<FluxPro1FillFinetunedOutputType> {
        const connector = new FluxPro1FillFinetuned(this.apiKey, this.region, this.version);
        return connector.generateImage(prompt, finetuneId, options);
    }

    public async generateDepthImageWithControlImage(prompt:string, finetuneId:string, options:FluxPro1DepthFinetunedInputType):Promise<FluxPro1DepthFinetunedOutputType> {
        const connector = new FluxPro1DepthFinetuned(this.apiKey, this.region, this.version);
        return connector.generateImage(prompt, finetuneId, options);
    }

    public async generateCannyImageWithControlImage(prompt:string, finetuneId:string, options:FluxPro1CannyFinetunedInputType):Promise<FluxPro1CannyFinetunedOutputType> {
        const connector = new FluxPro1CannyFinetuned(this.apiKey, this.region, this.version);
        return connector.generateImage(prompt, finetuneId, options);
    }
}

export default FluxPro1FinetunedInterface;