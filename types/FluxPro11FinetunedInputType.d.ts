type FluxPro11FinetunedInputType = {
    finetune_strength?:number;
    image_prompt?:string;
    width?:number;
    height?:number;
    prompt_upsampling?:boolean;
    seed?:number;
    safety_tolerance?:number;
    output_format?:"jpeg"|"png";
}