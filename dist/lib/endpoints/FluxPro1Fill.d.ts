import bflApiBaseConnector from "./bflApiBaseConnector";
declare class FluxPro1Fill extends bflApiBaseConnector {
    constructor(apiKey: string, region: string, version: string);
    private defaultConfig;
    generateImage(prompt: string, options: FluxPro1FillInputType): Promise<FluxPro1FillOutputType>;
}
export default FluxPro1Fill;
