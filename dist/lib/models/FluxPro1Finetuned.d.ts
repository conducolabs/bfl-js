declare class FluxPro1FinetunedInterface {
    private apiKey;
    private region;
    private version;
    constructor(base: bflBaseInterface);
    generateImage(prompt: string, finetuneId: string, options: FluxPro1FinetunedInputType): Promise<FluxPro1FinetunedOutputType>;
    generateImageWithMask(prompt: string, finetuneId: string, options: FluxPro1FillFinetunedInputType): Promise<FluxPro1FillFinetunedOutputType>;
    generateDepthImageWithControlImage(prompt: string, finetuneId: string, options: FluxPro1DepthFinetunedInputType): Promise<FluxPro1DepthFinetunedOutputType>;
    generateCannyImageWithControlImage(prompt: string, finetuneId: string, options: FluxPro1CannyFinetunedInputType): Promise<FluxPro1CannyFinetunedOutputType>;
}
export default FluxPro1FinetunedInterface;
