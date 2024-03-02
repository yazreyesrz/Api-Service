import { PedidoEntity } from "./pedido.entity";

export interface PedidoRepository {
  registerPedido({
    message,
  }: {
    message: string;
  }): Promise<PedidoEntity | null>;
}
