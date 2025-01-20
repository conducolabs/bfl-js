import bflApiBaseConnector from "./bflApiBaseConnector";
declare class FluxPro1 extends bflApiBaseConnector {
    constructor(apiKey: string, region: string, version: string);
    private defaultConfig;
    generateImage(prompt: string, options: FluxPro1InputType): Promise<FluxPro1OutputType>;
}
export default FluxPro1;
