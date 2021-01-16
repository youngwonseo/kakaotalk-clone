import { WebSocketGateway, WebSocketServer, SubscribeMessage, OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit } from '@nestjs/websockets';


@WebSocketGateway()
export class ChatGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: any;
  users: number = 0;

  afterInit(server: any) {
    // console.log(server);
    // throw new Error("Method not implemented.");
  }

  handleDisconnect(client: any) {
    // throw new Error("Method not implemented.");
    this.users--;
    console.log("dis connection!!", this.users);
  }

  handleConnection(client: any, ...args: any[]) {
    // throw new Error("Method not implemented.");
    this.users++;
    console.log("connection!!", this.users);
  }


  // 메세지
  @SubscribeMessage("msgToServer")
  async onChat(client: any, message: any) {
    console.log("~~~");
    console.log(message);
    // 노티 ?
    // 채팅방id
    // 글쓴사람id
    // 
    // client.broadcast.emit('data', "hi");
  }

  // 카운트
}