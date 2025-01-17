import BaseClass from "./bflBase";

import FluxDev1Interface from "./models/FluxDev1";
import FluxPro1Interface from "./models/FluxPro1";
import FluxPro11Interface from "./models/FluxPro11";
import FluxPro1FinetunedInterface from "./models/FluxPro1Finetuned";
import FluxPro11FinetunedInterface from "./models/FluxPro11Finetuned";

import FinetuneInterface from "./endpoints/Finetune";

export default BaseClass;

export const FluxDev1 = FluxDev1Interface;
export const FluxPro1 = FluxPro1Interface;
export const FluxPro11 = FluxPro11Interface;
export const FluxPro1Finetuned = FluxPro1FinetunedInterface;
export const FluxPro11Finetuned = FluxPro11FinetunedInterface;

export const Finetune = FinetuneInterface;