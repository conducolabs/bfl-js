import bflApiBaseConnector from "./bflApiBaseConnector";
declare class FluxPro1CannyFinetuned extends bflApiBaseConnector {
    constructor(apiKey: string, region: string, version: string);
    private defaultConfig;
    generateImage(prompt: string, finetuneId: string, options: FluxPro1CannyFinetunedInputType, onDownloadProgress?: (progressEvent: {
        loaded: number;
        total: number;
        percentage: number;
    }) => void, onUploadProgress?: (progressEvent: {
        loaded: number;
        total: number;
        percentage: number;
    }) => void): Promise<FluxPro1CannyFinetunedOutputType>;
}
export default FluxPro1CannyFinetuned;
