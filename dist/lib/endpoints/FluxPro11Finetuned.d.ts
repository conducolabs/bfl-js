import bflApiBaseConnector from "./bflApiBaseConnector";
declare class FluxPro11Finetuned extends bflApiBaseConnector {
    constructor(apiKey: string, region: string, version: string);
    private defaultConfig;
    generateImage(prompt: string, finetuneId: string, options: FluxPro11FinetunedInputType, onDownloadProgress?: (progressEvent: {
        loaded: number;
        total: number;
        percentage: number;
    }) => void, onUploadProgress?: (progressEvent: {
        loaded: number;
        total: number;
        percentage: number;
    }) => void): Promise<FluxPro11FinetunedOutputType>;
}
export default FluxPro11Finetuned;
