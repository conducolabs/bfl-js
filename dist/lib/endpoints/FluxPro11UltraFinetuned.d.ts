import bflApiBaseConnector from "./bflApiBaseConnector";
declare class FluxPro11UltraFinetuned extends bflApiBaseConnector {
    constructor(apiKey: string, region: string, version: string);
    private defaultConfig;
    generateImage(prompt: string, finetuneId: string, options: FluxPro11UltraFinetunedInputType, onDownloadProgress?: (progressEvent: {
        loaded: number;
        total: number;
        percentage: number;
    }) => void, onUploadProgress?: (progressEvent: {
        loaded: number;
        total: number;
        percentage: number;
    }) => void): Promise<FluxPro11UltraFinetunedOutputType>;
}
export default FluxPro11UltraFinetuned;
