import bflApiBaseConnector from "./bflApiBaseConnector";
declare class FluxPro1Fill extends bflApiBaseConnector {
    constructor(apiKey: string, region: string, version: string);
    private defaultConfig;
    generateImage(prompt: string, options: FluxPro1FillInputType, onDownloadProgress?: (progressEvent: {
        loaded: number;
        total: number;
        percentage: number;
    }) => void, onUploadProgress?: (progressEvent: {
        loaded: number;
        total: number;
        percentage: number;
    }) => void): Promise<FluxPro1FillOutputType>;
}
export default FluxPro1Fill;
