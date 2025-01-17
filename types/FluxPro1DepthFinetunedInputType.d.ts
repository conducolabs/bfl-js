type FluxPro1DepthFinetunedInputType = {
    control_image:string;
    finetune_strength?:string;
    prompt_upsampling?:boolean;
    seed?:number;
    steps?:number;
    guidance?:number;
    safety_tolerance?:number;
    output_format?: "jpeg"|"png";
}