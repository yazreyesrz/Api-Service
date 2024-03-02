import { PedidoRepository } from "../domain/pedido.repository";
import { PedidoValue } from "../domain/pedido.value";
import { Broker } from "../infraestructure/services/rabbitqm";
import { EmitNewPedidoUseCase } from "./services/emitNewPedido";

export class RegisterPedidoUseCase {
  constructor(
    private readonly pedidoRepository: PedidoRepository,
    private readonly broker: Broker,
    private readonly emitService: EmitNewPedidoUseCase
  ) {}

  public async execute({ message }: { message: string }) {
    console.log("Received message:", message);
    const pedidoValue = new PedidoValue({ message });
    const pedidoCreated = await this.pedidoRepository.registerPedido(
      pedidoValue
    );
    const ID = pedidoCreated?.uuid || "5555";
    const ActualDate = pedidoCreated?.date || new Date();
    this.broker.sendNotificacion(message, ActualDate, ID);
    this.emitService.run(message, ActualDate, ID);
    return pedidoCreated;
  }
}
