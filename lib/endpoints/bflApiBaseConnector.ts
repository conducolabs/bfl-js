import axios from "axios";
import { AVAILABLE_API_ENDPOINTS } from "../../config";

class bflApiBaseConnector {
    private apiKey:string;
    private region:string;
    private version:string;

    constructor(apiKey:string, region:string, version:string) {
        this.apiKey = apiKey;
        this.region = region;
        this.version = version;
    }

    public async post(endpoint:bflApiEndpointsType, data:any={}):Promise<any> {
        if (!AVAILABLE_API_ENDPOINTS.includes(endpoint)) {
            throw new Error("Invalid endpoint.");
        }

        if (this.apiKey === "") {
            throw new Error("API key is required");
        }

        try {
            const request = await axios.post(`https://api.${ this.region }.bfl.ai/${ this.version }/${ endpoint }`, data, {
                headers: {
                    "X-Key": this.apiKey,
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
            });
            return request.data;
        } catch(error:any) {
            throw new Error(error);
        }
    }

    public async get(endpoint:bflApiEndpointsType, params:bflApiRequestParamsType={}):Promise<any> {
        if (!AVAILABLE_API_ENDPOINTS.includes(endpoint)) {
            throw new Error("Invalid endpoint.");
        }

        if (this.apiKey === "") {
            throw new Error("API key is required");
        }

        try {
            const request = await axios.get(`https://api.${ this.region }.bfl.ai/${ this.version }/${ endpoint }`, {
                params,
                headers: {
                    "X-Key": this.apiKey,
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
            });
            return request.data;
        } catch(error:any) {
            throw new Error(error);
        }
    }
}

export default bflApiBaseConnector;