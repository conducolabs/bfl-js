import bflApiBaseConnector from "./bflApiBaseConnector";
declare class FluxPro11 extends bflApiBaseConnector {
    constructor(apiKey: string, region: string, version: string);
    private defaultConfig;
    generateImage(prompt: string, options: FluxPro11InputType): Promise<FluxPro11OutputType>;
}
export default FluxPro11;
