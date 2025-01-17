import { AVAILABLE_API_VERSIONS, AVAILABLE_API_REGIONS } from "../config";
import GetResult from "./endpoints/GetResult";


class bflBase {
    public apiKey:string = "";
    public version:string = "v1";
    public region:string = "us1";

    constructor(configuration:bflBaseConfigurationType) {

        if (configuration === null || configuration === undefined) {
            throw new Error("Configuration object is required");
        }

        if (typeof configuration.apiKey !== "string") {
            throw new Error("API key is required");
        }

        this.apiKey = configuration.apiKey;

        if (typeof configuration.version === "string" && AVAILABLE_API_VERSIONS.includes(configuration.version)) {
            this.version = configuration.version;
        }

        if (typeof configuration.region === "string" && AVAILABLE_API_REGIONS.includes(configuration.region)) {
            this.region = configuration.region;
        }
    }

    async getStatus(id:string):Promise<bflStatusType> {
        const connector = new GetResult(this.apiKey, this.region, this.version);
        return connector.getResult(id);
    }

}

export default bflBase;