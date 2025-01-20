declare class bflBase {
    apiKey: string;
    version: string;
    region: string;
    constructor(configuration: bflBaseConfigurationType);
    getStatus(id: string): Promise<bflStatusType>;
}
export default bflBase;
