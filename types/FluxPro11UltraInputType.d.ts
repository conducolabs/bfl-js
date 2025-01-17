type FluxPro11UltraInputType = {
    image_prompt?:string,
    image_prompt_strength?:number,
    aspect_ratio?:number,
    seed?:number,
    safety_tolerance?:number,
    output_format?: "jpeg"|"png",
    raw?:boolean
}