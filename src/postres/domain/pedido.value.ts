import { PedidoEntity } from "./pedido.entity";
import { v4 as uuid } from "uuid";
export class PedidoValue implements PedidoEntity {
  message: string;
  date: Date;
  uuid: string;

  constructor({ message }: { message: string }) {
    this.message = message;
    this.date = new Date();
    this.uuid = uuid();
  }
}
