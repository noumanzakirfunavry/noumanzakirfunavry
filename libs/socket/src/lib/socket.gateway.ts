import
{
 SubscribeMessage,
 WebSocketGateway,
 OnGatewayInit,
 WebSocketServer,
 OnGatewayConnection,
 OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { Socket, Server } from 'socket.io';

@WebSocketGateway({
  cors: {
    // origin: '*',
  },
})
export class SocketGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {

 @WebSocketServer() server: Server;
 private logger: Logger = new Logger('SocketGateway');

 @SubscribeMessage('msgToServer')
 handleMessage(client: Socket, payload: string): void {
  this.server.emit('msgToClient', payload);
 }

 afterInit(server: Server) {
  this.logger.log('Socket Gateway Initialized');
 }
 
 handleConnection(client: Socket, ...args: any[]) {
	this.logger.log(`Socket client connected: ${client.id}`);
 }

 handleDisconnect(client: Socket) {
  this.logger.log(`Socket client disconnected: ${client.id}`);
 }

}
