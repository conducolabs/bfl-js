declare class FluxPro11FinetunedInterface {
    private apiKey;
    private region;
    private version;
    constructor(base: bflBaseInterface);
    generateImage(prompt: string, finetuneId: string, options: FluxPro11InputType): Promise<FluxPro11OutputType>;
    generateUltraImage(prompt: string, finetuneId: string, options: FluxPro11UltraInputType): Promise<FluxPro11UltraOutputType>;
}
export default FluxPro11FinetunedInterface;
