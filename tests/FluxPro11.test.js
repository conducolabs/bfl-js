import baseClass, { FluxPro11 } from "../index.js";

const apiClient = new baseClass({ apiKey: process.env.BFL_API_KEY });

let imageId = "";

test("Initialize FluxPro11 class with base class", () => {
    const fluxDev1 = new FluxPro11(apiClient);
    expect(fluxDev1).toBeDefined();
});

test("Initialize FluxPro11 class without base class", () => {
    expect(() => new FluxPro11()).toThrow(Error);
});

test("Generate image with flux-pro 1.1", async() => {
    const fluxPro11 = new FluxPro11(apiClient);
    const image = await fluxPro11.generateImage("A happy rabbit sitting on a field of grass smiling.");
    expect(image.id).toBeDefined();
    imageId = image.id;
});

test("Check image status", async() => {
    const result = await apiClient.getStatus(imageId);
    expect(result).toBeDefined();
});

test("Generate ultra realistic image with flux-pro 1.1", async() => {
    const fluxPro11 = new FluxPro11(apiClient);
    const image = await fluxPro11.generateUltraImage("A happy rabbit sitting on a field of grass smiling.");
    expect(image.id).toBeDefined();
    imageId = image.id;
});