import bflApiBaseConnector from "./bflApiBaseConnector";
declare class FluxPro11Ultra extends bflApiBaseConnector {
    constructor(apiKey: string, region: string, version: string);
    private defaultConfig;
    generateImage(prompt: string, options: FluxPro11UltraInputType, onDownloadProgress?: (progressEvent: {
        loaded: number;
        total: number;
        percentage: number;
    }) => void, onUploadProgress?: (progressEvent: {
        loaded: number;
        total: number;
        percentage: number;
    }) => void): Promise<FluxPro11UltraOutputType>;
}
export default FluxPro11Ultra;
