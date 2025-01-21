import bflApiBaseConnector from "./bflApiBaseConnector";
declare class FluxPro1Finetuned extends bflApiBaseConnector {
    constructor(apiKey: string, region: string, version: string);
    private defaultConfig;
    generateImage(prompt: string, finetuneId: string, options: FluxPro1FinetunedInputType, onDownloadProgress?: (progressEvent: {
        loaded: number;
        total: number;
        percentage: number;
    }) => void, onUploadProgress?: (progressEvent: {
        loaded: number;
        total: number;
        percentage: number;
    }) => void): Promise<FluxPro1FinetunedOutputType>;
}
export default FluxPro1Finetuned;
