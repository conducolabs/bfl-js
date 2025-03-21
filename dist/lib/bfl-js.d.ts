import BaseClass from "./bflBase";
import FluxDev1Interface from "./models/FluxDev1";
import FluxPro1Interface from "./models/FluxPro1";
import FluxPro11Interface from "./models/FluxPro11";
import FluxPro1FinetunedInterface from "./models/FluxPro1Finetuned";
import FluxPro11FinetunedInterface from "./models/FluxPro11Finetuned";
import FinetuneInterface from "./endpoints/Finetune";
export default BaseClass;
export declare const FluxDev1: typeof FluxDev1Interface;
export declare const FluxPro1: typeof FluxPro1Interface;
export declare const FluxPro11: typeof FluxPro11Interface;
export declare const FluxPro1Finetuned: typeof FluxPro1FinetunedInterface;
export declare const FluxPro11Finetuned: typeof FluxPro11FinetunedInterface;
export declare const Finetune: typeof FinetuneInterface;
