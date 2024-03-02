import { PedidoEntity } from "../../domain/pedido.entity";
import { PedidoRepository } from "../../domain/pedido.repository";
import pedidoModel from "../models/pedido.schema";
export class MongoRepository implements PedidoRepository {
  async registerPedido(pedidoIn: PedidoEntity): Promise<any | null> {
    const pedido = await pedidoModel.create(pedidoIn);
    return pedido;
  }
}
