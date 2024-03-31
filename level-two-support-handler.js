import { BaseSupportHandler } from "./base-support-handler.js";

import { PriorityEnum } from "./priority-enum.js";

class LevelTwoSupportHandler extends BaseSupportHandler {
  constructor() {
    super();
  }

  handler(customerRequest) {
    if (customerRequest.getPriority() == PriorityEnum.INTERMEDIATE) {
      console.log("A requisição do cliente foi resolvida no nível DOIS.");
      return customerRequest;
    } else if (this.nextHandler) {
      return this.nextHandler.handler(customerRequest);
    } else {
      console.log(
        "Nenhum handler disponível para tratar a requisição do cliente."
      );
      return customerRequest;
    }
  }
}

export { LevelTwoSupportHandler };
