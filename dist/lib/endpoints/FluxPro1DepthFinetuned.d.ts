import bflApiBaseConnector from "./bflApiBaseConnector";
declare class FluxPro1DepthFinetuned extends bflApiBaseConnector {
    constructor(apiKey: string, region: string, version: string);
    private defaultConfig;
    generateImage(prompt: string, finetuneId: string, options: FluxPro1DepthFinetunedInputType, onDownloadProgress?: (progressEvent: {
        loaded: number;
        total: number;
        percentage: number;
    }) => void, onUploadProgress?: (progressEvent: {
        loaded: number;
        total: number;
        percentage: number;
    }) => void): Promise<FluxPro1DepthFinetunedOutputType>;
}
export default FluxPro1DepthFinetuned;
