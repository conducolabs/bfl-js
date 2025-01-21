import bflApiBaseConnector from "./bflApiBaseConnector";
declare class FluxPro1Depth extends bflApiBaseConnector {
    constructor(apiKey: string, region: string, version: string);
    private defaultConfig;
    generateImage(prompt: string, options: FluxPro1DepthInputType, onDownloadProgress?: (progressEvent: {
        loaded: number;
        total: number;
        percentage: number;
    }) => void, onUploadProgress?: (progressEvent: {
        loaded: number;
        total: number;
        percentage: number;
    }) => void): Promise<FluxPro1DepthOutputType>;
}
export default FluxPro1Depth;
