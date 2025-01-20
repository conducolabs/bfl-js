import bflApiBaseConnector from "./bflApiBaseConnector";
declare class FluxPro11Ultra extends bflApiBaseConnector {
    constructor(apiKey: string, region: string, version: string);
    private defaultConfig;
    generateImage(prompt: string, options: FluxPro11UltraInputType): Promise<FluxPro11UltraOutputType>;
}
export default FluxPro11Ultra;
