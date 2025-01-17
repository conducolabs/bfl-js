type FluxPro1CannyInputType = {
    control_image:string,
    preprocessed_image?:string,
    prompt:string,
    prompt_upsampling?:boolean,
    canny_low_thrshold?:number,
    canny_high_thrshold?:number,
    seed?:number,
    steps?:number,
    guidance?:number,
    safety_tolerance?:number,
    output_format?: "jpeg"|"png"
}