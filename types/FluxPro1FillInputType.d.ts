type FluxPro1FillInputType = {
    image:string;
    mask?:string;
    prompt?:string;
    prompt_upsampling?:boolean;
    seed?:number;
    steps?:number;
    guidance?:number;
    safety_tolerance?:number;
    output_format?:"jpeg"|"png";
}