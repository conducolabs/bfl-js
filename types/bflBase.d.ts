interface bflBaseInterface {
    apiKey:string;
    region:string;
    version:string;
    constructor(configuration: bflBaseConfigurationType): void;
    generateImage(model: bflModelType, prompt: string, options: any): Promise<any>;
}