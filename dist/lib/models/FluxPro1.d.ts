declare class FluxPro1Interface {
    private apiKey;
    private region;
    private version;
    constructor(base: bflBaseInterface);
    generateImage(prompt: string, options: FluxPro1InputType): Promise<FluxPro1OutputType>;
    generateImageWithMask(prompt: string, options: FluxPro1FillInputType): Promise<FluxPro1FillOutputType>;
    generateDepthImageWithControlImage(prompt: string, options: FluxPro1DepthInputType): Promise<FluxPro1DepthOutputType>;
    generateCannyImageWithControlImage(prompt: string, options: FluxPro1CannyInputType): Promise<FluxPro1CannyOutputType>;
}
export default FluxPro1Interface;
