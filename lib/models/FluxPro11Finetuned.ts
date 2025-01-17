import FluxPro11FinetunedEndpoint from "../endpoints/FluxPro11Finetuned";
import FluxPro11UltraFinetunedEndpoint from "../endpoints/FluxPro11UltraFinetuned";

class FluxPro11FinetunedInterface {
    private apiKey:string;
    private region:string;
    private version:string;

    constructor(base:bflBaseInterface) {
        this.apiKey = base.apiKey;
        this.region = base.region;
        this.version = base.version;
    }

    public async generateImage(prompt:string, finetuneId:string, options:FluxPro11InputType):Promise<FluxPro11OutputType> {
        const connector = new FluxPro11FinetunedEndpoint(this.apiKey, this.region, this.version);
        return connector.generateImage(prompt, finetuneId, options);
    }

    public async generateUltraImage(prompt:string, finetuneId:string, options:FluxPro11UltraInputType):Promise<FluxPro11UltraOutputType> {
        const connector = new FluxPro11UltraFinetunedEndpoint(this.apiKey, this.region, this.version);
        return connector.generateImage(prompt, finetuneId, options);
    }
}

export default FluxPro11FinetunedInterface;