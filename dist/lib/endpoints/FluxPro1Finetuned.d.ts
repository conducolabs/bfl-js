import bflApiBaseConnector from "./bflApiBaseConnector";
declare class FluxPro1Finetuned extends bflApiBaseConnector {
    constructor(apiKey: string, region: string, version: string);
    private defaultConfig;
    generateImage(prompt: string, finetuneId: string, options: FluxPro1FinetunedInputType): Promise<FluxPro1FinetunedOutputType>;
}
export default FluxPro1Finetuned;
