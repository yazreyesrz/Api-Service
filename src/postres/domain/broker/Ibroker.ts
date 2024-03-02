export interface BrokerService {
  sendNotificacion(message: string, date: Date, uuid: string): void;
}
