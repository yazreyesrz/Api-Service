import { PedidoRepository } from "../domain/pedido.repository";
import { RegisterPedidoUseCase } from "./registerPedidoUseCase";
import { EmitNewPedidoUseCase } from "./services/emitNewPedido";
import { Broker } from "../infraestructure/services/rabbitqm";

export class PedidoUseCase {
  public registerPedidos: RegisterPedidoUseCase;

  constructor(
    private readonly pedidoRepository: PedidoRepository,
    private readonly broker: Broker,
    private readonly emitService: EmitNewPedidoUseCase
  ) {
    this.registerPedidos = new RegisterPedidoUseCase(
      pedidoRepository,
      broker,
      emitService
    );
  }
}
