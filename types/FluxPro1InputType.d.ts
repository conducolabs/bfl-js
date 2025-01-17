type FluxPro1InputType = {
    image_prompt?:string,
    width?:number,
    height?:number,
    steps?:number,
    prompt_upsampling?:boolean,
    seed?:number,
    guidance?:number,
    safety_tolerance?:number,
    interval?:number,
    output_format?: "jpeg"|"png"
}