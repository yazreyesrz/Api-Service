export interface IEmitingMessage {
  emitMessage(message: string, date: Date, uuid: string): boolean;
}
