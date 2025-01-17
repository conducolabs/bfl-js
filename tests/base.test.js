import baseClass from "../index.js";

test("Initialize base class with API key", () => {
    const base = new baseClass({ apiKey: process.env.BFL_API_KEY });
    expect(base).toBeDefined();
});

test("Initialize base class with wrong configuration",() => {
    expect(() => new baseClass({ wrongConfiguration: "wrongValue" })).toThrow(Error);
})