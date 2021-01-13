import { WebSocketGateway, WebSocketServer, SubscribeMessage, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';


@WebSocketGateway()
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {

  @WebSocketServer() server: any;
  users: number = 0;


  async handleDisconnect(client: any) {
    throw new Error("Method not implemented.");
  }

  async handleConnection(client: any, ...args: any[]) {
    throw new Error("Method not implemented.");
  }

  // 메세지
  @SubscribeMessage('chat')
  async onChat(client: any, message: any){
    console.log(message);
    client.broadcast.emit('chat', message);
  }


  // 카운트

}