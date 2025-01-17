import baseClass, { Finetune } from "../index.js";
import fs from "fs/promises";
import path from "path";

const apiClient = new baseClass({ apiKey: process.env.BFL_API_KEY });

let finetuningId = "";

test("Initialize Finetuning class with base class", () => {
    const finetune = new Finetune(apiClient);
    expect(finetune).toBeDefined();
});

if (process.env.DISABLE_TRAINING === "true") {
    test.skip("Create finetuning model", () => {});
    test.skip("Delete finetuning model", () => {});
} else {
    test("Create finetuning model", async() => {
        const trainingdata = await fs.readFile(path.resolve("tests/testfiles/trainingdata.zip"), { encoding: "base64" });
        const finetune = new Finetune(apiClient);

        const model = await finetune.create(trainingdata, "Commander Con", {
            trigger_word: "Commander Con",
            mode: "character"
        });

        expect(model.finetune_id).toBeDefined();
        finetuningId = model.finetune_id;
    }, 60000);
}

test("Check finetuning details", async () => {
    const finetune = new Finetune(apiClient);
    const finetuningDetail = await finetune.getDetails(process.env.BFL_FINETUNE_MODEL_ID);
    expect(finetuningDetail.finetune_details.mode).toBeDefined();
});