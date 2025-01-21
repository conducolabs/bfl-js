declare class bflApiBaseConnector {
    private apiKey;
    private region;
    private version;
    constructor(apiKey: string, region: string, version: string);
    post(endpoint: bflApiEndpointsType, data?: any, onDownloadProgress?: (progressEvent: {
        loaded: number;
        total: number;
        percentage: number;
    }) => void, onUploadProgress?: (progressEvent: {
        loaded: number;
        total: number;
        percentage: number;
    }) => void): Promise<any>;
    get(endpoint: bflApiEndpointsType, params?: bflApiRequestParamsType, onDownloadProgress?: (progressEvent: {
        loaded: number;
        total: number;
        percentage: number;
    }) => void, onUploadProgress?: (progressEvent: {
        loaded: number;
        total: number;
        percentage: number;
    }) => void): Promise<any>;
}
export default bflApiBaseConnector;
