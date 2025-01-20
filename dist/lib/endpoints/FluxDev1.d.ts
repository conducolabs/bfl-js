import bflApiBaseConnector from "./bflApiBaseConnector";
declare class FluxDev1 extends bflApiBaseConnector {
    constructor(apiKey: string, region: string, version: string);
    private defaultConfig;
    generateImage(prompt: string, options: FluxDev1InputType): Promise<FluxDev1OutputType>;
}
export default FluxDev1;
