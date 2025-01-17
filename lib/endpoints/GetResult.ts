import bflApiBaseConnector from "./bflApiBaseConnector";

class GetResult extends bflApiBaseConnector {
    constructor(apiKey:string, region:string, version:string) {
        super(apiKey, region, version);
    }

    public async getResult(id:string):Promise<bflStatusType> {
        return await this.get("flux-dev", { id });
    }
}

export default GetResult;