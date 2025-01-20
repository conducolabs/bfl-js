import bflApiBaseConnector from "./bflApiBaseConnector";
declare class FluxPro1Depth extends bflApiBaseConnector {
    constructor(apiKey: string, region: string, version: string);
    private defaultConfig;
    generateImage(prompt: string, options: FluxPro1DepthInputType): Promise<FluxPro1DepthOutputType>;
}
export default FluxPro1Depth;
