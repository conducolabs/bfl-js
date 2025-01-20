import bflApiBaseConnector from "./bflApiBaseConnector";
declare class FluxPro1Canny extends bflApiBaseConnector {
    constructor(apiKey: string, region: string, version: string);
    private defaultConfig;
    generateImage(prompt: string, options: FluxPro1CannyInputType): Promise<FluxPro1CannyOutputType>;
}
export default FluxPro1Canny;
