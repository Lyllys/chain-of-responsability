// esta é uma classe asbtrata;
class BaseSupportHandler {
  constructor() {
    // como não é possível criar uma classe abstrata usando apenas js essa é uma maneira de evitar que essa classe seja instanciada.
    if (this.constructor == BaseSupportHandler) {
      throw new Error("Esta classe é abstrata e não pode ser instanciada.");
    }

    this.nextHandler = null;
  }

  setNextHandler(handler) {
    this.nextHandler = handler;
    return handler;
  }

  handler(customerRequest) {
    if (this.nextHandler) return this.nextHandler.handler(customerRequest);
    return customerRequest;
  }
}

export { BaseSupportHandler };
