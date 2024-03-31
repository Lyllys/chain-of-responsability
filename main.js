import { CustomerRequest } from "./customer-resquest.js";
import { LevelOneSupportHandler } from "./level-one-support-handler.js";
import { LevelTwoSupportHandler } from "./level-two-support-handler.js";
import { LevelThreeSupportHandler } from "./level-three-support-handler.js";
import { BaseSupportHandler } from "./base-support-handler.js";
import { PriorityEnum } from "./priority-enum.js";

//const baseSupportHandler = new BaseSupportHandler(PriorityEnum.BASIC);

/* 
    setar os próximos handler em uma classe externa garante uma maior flexibidade do código visto que cada handler não precisa conhecer os outros
    handlers. As alterações podem ser feitas sem alterar o código interno. Além disso, torna mais fácil a alteração caso em alguma outra rotina seja 
    necessário ajustar a ordem dos handlers.
*/

const levelOneHandler = new LevelOneSupportHandler();
const levelTwoHandler = new LevelTwoSupportHandler();
const levelThreeHandler = new LevelThreeSupportHandler();

levelOneHandler.setNextHandler(levelTwoHandler);
levelTwoHandler.setNextHandler(levelThreeHandler);

// const customerRequest = new CustomerRequest(PriorityEnum.BASIC);

// levelOneHandler.handler(customerRequest);

const customerRequest1 = new CustomerRequest(PriorityEnum.BASIC);
const customerRequest2 = new CustomerRequest(PriorityEnum.INTERMEDIATE);
const customerRequest3 = new CustomerRequest(PriorityEnum.CRITICAL);

console.log(customerRequest1);
levelOneHandler.handler(customerRequest1);

console.log("\n", customerRequest2);
levelOneHandler.handler(customerRequest2);

console.log("\n", customerRequest3);
levelOneHandler.handler(customerRequest3);
