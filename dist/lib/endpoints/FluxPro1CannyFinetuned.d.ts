import bflApiBaseConnector from "./bflApiBaseConnector";
declare class FluxPro1CannyFinetuned extends bflApiBaseConnector {
    constructor(apiKey: string, region: string, version: string);
    private defaultConfig;
    generateImage(prompt: string, finetuneId: string, options: FluxPro1CannyFinetunedInputType): Promise<FluxPro1CannyFinetunedOutputType>;
}
export default FluxPro1CannyFinetuned;
