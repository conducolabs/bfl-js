declare class FluxPro11Interface {
    private apiKey;
    private region;
    private version;
    constructor(base: bflBaseInterface);
    generateImage(prompt: string, options: FluxPro11InputType): Promise<FluxPro11OutputType>;
    generateUltraImage(prompt: string, options: FluxPro11UltraInputType): Promise<FluxPro11UltraOutputType>;
}
export default FluxPro11Interface;
