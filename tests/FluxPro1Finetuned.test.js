import baseClass, { FluxPro1Finetuned } from "../index.js";
import fs from "fs/promises";
import path from "path";

const apiClient = new baseClass({ apiKey: process.env.BFL_API_KEY });

let imageId = "";

test("Initialize FluxPro1Finetuned class with base class", () => {
    const fluxPro1Finetuned = new FluxPro1Finetuned(apiClient);
    expect(fluxPro1Finetuned).toBeDefined();
});

test("Initialize FluxPro1Finetuned class without base class", () => {
    expect(() => new FluxPro1Finetuned()).toThrow(Error);
});

test("Generate image with flux-pro with finetune model", async() => {
    const fluxPro1Finetuned = new FluxPro1Finetuned(apiClient);
    const image = await fluxPro1Finetuned.generateImage("Realistic picture of Commander Con flying in space waving with one hand.", process.env.BFL_FINETUNE_MODEL_ID);
    expect(image.id).toBeDefined();
    imageId = image.id;
});

test("Check image status", async() => {
    const result = await apiClient.getStatus(imageId);
    expect(result).toBeDefined();
});

test("Fill in mask with flux-pro with finetune model", async() => {
    const mask = await fs.readFile(path.resolve("tests/testfiles/astronaut-mask.jpeg"), { encoding: "base64" });
    const baseImage = await fs.readFile(path.resolve("tests/testfiles/astronaut.jpeg"), { encoding: "base64" });
    const fluxPro1Finetuned = new FluxPro1Finetuned(apiClient);
    const image = await fluxPro1Finetuned.generateImageWithMask("Realistic picture of Commander Con flying in space holding a lightsabre in the hand.", process.env.BFL_FINETUNE_MODEL_ID, { image: baseImage , mask });
    expect(image.id).toBeDefined();
});

test("Use canny mask with flux-pro with finetune model", async() => {
    const mask = await fs.readFile(path.resolve("tests/testfiles/astronaut-canny-mask.jpeg"), { encoding: "base64" });
    const fluxPro1Finetuned = new FluxPro1Finetuned(apiClient);
    const image = await fluxPro1Finetuned.generateCannyImageWithControlImage("Realistic picture of Commander Con wearing a red spacesuit flying in space waving with one hand.", process.env.BFL_FINETUNE_MODEL_ID, { control_image: mask });
    expect(image.id).toBeDefined();
});

test("Use depth mask with flux-pro with finetune model", async() => {
    const mask = await fs.readFile(path.resolve("tests/testfiles/astronaut-mask.jpeg"), { encoding: "base64" });
    const fluxPro1Finetuned = new FluxPro1Finetuned(apiClient);
    const image = await fluxPro1Finetuned.generateCannyImageWithControlImage("Realistic picture of Commander Con wearing a red spacesuit flying in space waving with one hand.", process.env.BFL_FINETUNE_MODEL_ID, { control_image: mask });
    expect(image.id).toBeDefined();
});