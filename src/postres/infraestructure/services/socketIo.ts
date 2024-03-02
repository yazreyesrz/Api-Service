import ioClient from "socket.io-client";
import { IEmitingMessage } from "../../domain/service/IemitWs";

const socket = ioClient("http://44.214.240.239:4003");

export class EmitingNewPedido implements IEmitingMessage {
  emitMessage(message: string, date: Date, uuid: string): boolean {
    try {
      const data = `Datos del pedido: fecha ${date}, identificador ${uuid}, datos del pedido ${message}`;
      socket.emit("newPedido", data);
      console.log("El pedido se completo correctamente:", data);
      console.log("Message sent status: OK");
      console.log(
        "El pedido fue emitido correctamente :",
        JSON.stringify(data)
      );
      return true;
    } catch (error) {
      console.error("Error mandando el pedido:", error);
      return false;
    }
  }
}
