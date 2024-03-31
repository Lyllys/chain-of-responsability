import { BaseSupportHandler } from "./base-support-handler.js";
import { PriorityEnum } from "./priority-enum.js";

class LevelOneSupportHandler extends BaseSupportHandler {
  constructor() {
    super();
  }

  handler(customerRequest) {
    if (customerRequest.getPriority() == PriorityEnum.BASIC) {
      console.log("A requisição do cliente foi resolvida no nível UM.");
      return customerRequest;
    } else if (this.nextHandler) {
      return this.nextHandler.handler(customerRequest);
    }
  }
}

export { LevelOneSupportHandler };
