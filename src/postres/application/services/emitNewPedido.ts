import { EmitingNewPedido } from "../../infraestructure/services/socketIo";

export class EmitNewPedidoUseCase {
  constructor(readonly EmitService: EmitingNewPedido) {}

  async run(message: string, date: Date, uuid: string) {
    await this.EmitService.emitMessage(message, date, uuid);
  }
}
