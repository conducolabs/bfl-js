import baseClass, { FluxPro11Finetuned } from "../index.js";

const apiClient = new baseClass({ apiKey: process.env.BFL_API_KEY });

let imageId = "";

test("Initialize FluxPro11Finetuned class with base class", () => {
    const fluxPro1Finetuned = new FluxPro11Finetuned(apiClient);
    expect(fluxPro1Finetuned).toBeDefined();
});

test("Initialize FluxPro11Finetuned class without base class", () => {
    expect(() => new FluxPro11Finetuned()).toThrow(Error);
});

test("Generate image with flux-pro 1.1 with finetune model", async() => {
    const fluxPro1Finetuned = new FluxPro11Finetuned(apiClient);
    const image = await fluxPro1Finetuned.generateImage("Realistic picture of Commander Con flying in space waving with one hand.", process.env.BFL_FINETUNE_MODEL_ID);
    expect(image.id).toBeDefined();
    imageId = image.id;
    console.log(imageId);
});

test("Check image status", async() => {
    const result = await apiClient.getStatus(imageId);
    expect(result).toBeDefined();
});

test("Generate ultra realistic image with flux-pro 1.1 with finetune model", async() => {
    const fluxPro1Finetuned = new FluxPro11Finetuned(apiClient);
    const image = await fluxPro1Finetuned.generateUltraImage("Realistic picture of Commander Con flying in space waving with one hand.", process.env.BFL_FINETUNE_MODEL_ID);
    expect(image.id).toBeDefined();
    imageId = image.id;
    console.log(imageId);
});