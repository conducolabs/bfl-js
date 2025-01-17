type FinetuneCreateInputType = {
    trigger_word?:string;
    mode?:"general"|"character"|"style"|"product",
    iterations?:number;
    learning_rate?:number;
    captioning?:boolean;
    priority?:"speed"|"quality";
    finetune_type?:"lora"|"full";
    lora_rank?:16|32;
}