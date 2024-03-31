import { BaseSupportHandler } from "./base-support-handler.js";
import { PriorityEnum } from "./priority-enum.js";

class LevelThreeSupportHandler extends BaseSupportHandler {
  constructor() {
    super();
  }

  handler(customerRequest) {
    if (customerRequest.getPriority() == PriorityEnum.CRITICAL) {
      console.log("A requisição do cliente foi resolvida no nível TRÊS.");
      return customerRequest;
    } else {
      console.log("Não é possível resolver a requisição do cliente.");
      return customerRequest;
    }
  }
}

export { LevelThreeSupportHandler };
