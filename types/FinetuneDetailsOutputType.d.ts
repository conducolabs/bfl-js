type FinetuneDetailsOutputType = {
    finetune_details: {
        learning_rate:number;
        iterations:number;
        lora_rank:number;
        mode:"general"|"character"|"style"|"product";
        trigger_word:string;
        priority:"speed"|"quality";
        finetune_type:"lora"|"full";
        finetune_comment:string;
        timestamp:string;
    }
}