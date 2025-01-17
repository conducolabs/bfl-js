import baseClass, { FluxDev1 } from "../index.js";

const apiClient = new baseClass({ apiKey: process.env.BFL_API_KEY });

let imageId = "";

test("Initialize FluxDev1 class with base class", () => {
    const fluxDev1 = new FluxDev1(apiClient);
    expect(fluxDev1).toBeDefined();
});

test("Initialize FluxDev1 class without base class", () => {
    expect(() => new FluxDev1()).toThrow(Error);
});

test("Generate image with flux-dev", async() => {
    const fluxDev1 = new FluxDev1(apiClient);
    const image = await fluxDev1.generateImage("A happy rabbit sitting on a field of grass smiling.");
    expect(image.id).toBeDefined();
    imageId = image.id;
});

test("Check image status", async() => {
    const result = await apiClient.getStatus(imageId);
    expect(result).toBeDefined();
});