import bflApiBaseConnector from "./bflApiBaseConnector";
declare class FluxPro11UltraFinetuned extends bflApiBaseConnector {
    constructor(apiKey: string, region: string, version: string);
    private defaultConfig;
    generateImage(prompt: string, finetuneId: string, options: FluxPro11UltraFinetunedInputType): Promise<FluxPro11UltraFinetunedOutputType>;
}
export default FluxPro11UltraFinetuned;
