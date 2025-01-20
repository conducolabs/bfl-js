import bflApiBaseConnector from "./bflApiBaseConnector";
declare class GetResult extends bflApiBaseConnector {
    constructor(apiKey: string, region: string, version: string);
    getResult(id: string): Promise<bflStatusType>;
}
export default GetResult;
