declare class bflApiBaseConnector {
    private apiKey;
    private region;
    private version;
    constructor(apiKey: string, region: string, version: string);
    post(endpoint: bflApiEndpointsType, data?: any): Promise<any>;
    get(endpoint: bflApiEndpointsType, params?: bflApiRequestParamsType): Promise<any>;
}
export default bflApiBaseConnector;
