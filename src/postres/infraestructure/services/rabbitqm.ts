import { BrokerService } from "../../domain/broker/Ibroker";
import * as amqp from "amqplib";
export class Broker implements BrokerService {
  async sendNotificacion(
    message: string,
    date: Date,
    uuid: string
  ): Promise<void> {
    try {
      const notificacion = `pedido registrado en ${date} con identificacion ${uuid} datos del pedido ${message}`;
      const connection = await amqp.connect(
        process.env.RABBIT_URL || "amqp://localhost:5672"
      );
      const channel = await connection.createChannel();
      const ex = "pedidos.direct";
      const publish = channel.publish(ex, "", Buffer.from(notificacion));
      if (publish) {
        console.log("Notificacion publicada:" + notificacion);
      } else {
        console.log("Notificacion No enviada");
      }
      await channel.close();
      await connection.close();
    } catch (error) {
      console.log("err0r--en  elcatch", error);
    }
  }
}
