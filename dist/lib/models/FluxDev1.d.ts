declare class FluxDev1Interface {
    private apiKey;
    private region;
    private version;
    constructor(base: bflBaseInterface);
    generateImage(prompt: string, options: FluxDev1InputType): Promise<FluxDev1OutputType>;
}
export default FluxDev1Interface;
