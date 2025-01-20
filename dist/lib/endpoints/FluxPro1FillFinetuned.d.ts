import bflApiBaseConnector from "./bflApiBaseConnector";
declare class FluxPro1FillFinetuned extends bflApiBaseConnector {
    constructor(apiKey: string, region: string, version: string);
    private defaultConfig;
    generateImage(prompt: string, finetuneId: string, options: FluxPro1FillFinetunedInputType): Promise<FluxPro1FillFinetunedOutputType>;
}
export default FluxPro1FillFinetuned;
