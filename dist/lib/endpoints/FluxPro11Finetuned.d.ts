import bflApiBaseConnector from "./bflApiBaseConnector";
declare class FluxPro11Finetuned extends bflApiBaseConnector {
    constructor(apiKey: string, region: string, version: string);
    private defaultConfig;
    generateImage(prompt: string, finetuneId: string, options: FluxPro11FinetunedInputType): Promise<FluxPro11FinetunedOutputType>;
}
export default FluxPro11Finetuned;
