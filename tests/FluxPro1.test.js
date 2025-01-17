import baseClass, { FluxPro1 } from "../index.js";
import fs from "fs/promises";
import path from "path";

const apiClient = new baseClass({ apiKey: process.env.BFL_API_KEY });

let imageId = "";

test("Initialize FluxPro1 class with base class", () => {
    const fluxDev1 = new FluxPro1(apiClient);
    expect(fluxDev1).toBeDefined();
});

test("Initialize FluxPro1 class without base class", () => {
    expect(() => new FluxPro1()).toThrow(Error);
});

test("Generate image with flux-pro", async() => {
    const fluxPro1 = new FluxPro1(apiClient);
    const image = await fluxPro1.generateImage("A happy rabbit sitting on a field of grass smiling.");
    expect(image.id).toBeDefined();
    imageId = image.id;
});

test("Check image status", async() => {
    const result = await apiClient.getStatus(imageId);
    expect(result).toBeDefined();
});

test("Fill in mask with flux-pro", async() => {
    const mask = await fs.readFile(path.resolve("tests/testfiles/mask.jpeg"), { encoding: "base64" });
    const baseImage = await fs.readFile(path.resolve("tests/testfiles/rabbit.jpeg"), { encoding: "base64" });
    const fluxPro1 = new FluxPro1(apiClient);
    const image = await fluxPro1.generateImageWithMask("A happy rabbit wearing glasses sitting on a field of grass smiling.", { image: baseImage , mask });
    expect(image.id).toBeDefined();
});

test("Use canny mask with flux-pro", async() => {
    const mask = await fs.readFile(path.resolve("tests/testfiles/canny-mask.jpeg"), { encoding: "base64" });
    const fluxPro1 = new FluxPro1(apiClient);
    const image = await fluxPro1.generateCannyImageWithControlImage("Editiorial picture of a happy black rabbit sitting on a field of grass smiling.", { preprocessed_image: mask });
    expect(image.id).toBeDefined();
});

test("Use depth mask with flux-pro", async() => {
    const mask = await fs.readFile(path.resolve("tests/testfiles/depth-mask.jpeg"), { encoding: "base64" });
    const fluxPro1 = new FluxPro1(apiClient);
    const image = await fluxPro1.generateCannyImageWithControlImage("Editiorial picture of a happy black rabbit sitting on a field of grass smiling.", { preprocessed_image: mask });
    expect(image.id).toBeDefined();
});