import bflApiBaseConnector from "./bflApiBaseConnector";
declare class Finetune extends bflApiBaseConnector {
    constructor(base: bflBaseInterface);
    private defaultConfig;
    create(archive: string, name: string, options: FinetuneCreateInputType, onDownloadProgress?: (progressEvent: {
        loaded: number;
        total: number;
        percentage: number;
    }) => void, onUploadProgress?: (progressEvent: {
        loaded: number;
        total: number;
        percentage: number;
    }) => void): Promise<FinetuneCreateOutputType>;
    getDetails(finetuneId: string): Promise<FinetuneDetailsOutputType>;
    getList(): Promise<FinetuneListOutputType>;
    deleteFinetune(finetuneId: string): Promise<boolean>;
}
export default Finetune;
