import bflApiBaseConnector from "./bflApiBaseConnector";

class GetResult extends bflApiBaseConnector {
    constructor(apiKey:string, region:string, version:string) {
        super(apiKey, region, version);
    }

    public async getResult(id:string):Promise<bflStatusType> {
        return await this.get("get_result", { id });
    }
}

export default GetResult;