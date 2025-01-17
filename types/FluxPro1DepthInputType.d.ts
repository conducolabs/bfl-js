type FluxPro1DepthInputType = {
    control_image:string,
    preprocessed_image:string,
    prompt:string,
    prompt_upsampling?:boolean,
    seed?:number,
    steps?:number,
    guidance?:number,
    safety_tolerance?:number,
    output_format?: "jpeg"|"png"
}