type FluxPro1CannyFinetunedInputType = {
    control_image:string;
    finetune_strength?:number;
    preprocessed_image?:string;
    prompt_upsampling?:boolean;
    canny_low_thrshold?:number;
    canny_high_thrshold?:number;
    seed?:number;
    steps?:number;
    guidance?:number;
    safety_tolerance?:number;
    output_format?:"jpeg"|"png";
}