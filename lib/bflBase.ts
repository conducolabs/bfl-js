import { AVAILABLE_API_VERSIONS, AVAILABLE_API_REGIONS } from "../config";
import GetResult from "./endpoints/GetResult";


class bflBase {
    public apiKey:string = "";
    public apiVersion:string = "v1";
    public region:string = "us1";

    constructor(configuration:bflBaseConfigurationType) {

        if (configuration === null || configuration === undefined) {
            throw new Error("Configuration object is required");
        }

        if (typeof configuration.apiKey !== "string") {
            throw new Error("API key is required");
        }

        this.apiKey = configuration.apiKey;

        if (typeof configuration.apiVersion === "string" && AVAILABLE_API_VERSIONS.includes(configuration.apiVersion)) {
            this.apiVersion = configuration.apiVersion;
        }

        if (typeof configuration.apiRegion === "string" && AVAILABLE_API_REGIONS.includes(configuration.apiRegion)) {
            this.region = configuration.apiRegion;
        }
    }

    async getStatus(id:string):Promise<bflStatusType> {
        const connector = new GetResult(this.apiKey, this.region, this.apiVersion);
        return connector.getResult(id);
    }

}

export default bflBase;