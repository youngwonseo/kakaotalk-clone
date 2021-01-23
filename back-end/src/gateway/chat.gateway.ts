import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
} from "@nestjs/websockets";
import io, { Socket } from "socket.io";
import { ChatService } from "../services/chat.service";
import { UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { MessageService } from "../services/message.service";
import { isObject } from "util";




@WebSocketGateway()
export class ChatGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: any;
  users: number = 0;


  constructor(private readonly chatService: ChatService,
    private readonly messageService: MessageService) {

  }

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
  @SubscribeMessage("message")
  async onChat(client: Socket, data: any) {
    console.log("~~~");

    // 메세지 생성
    const message = await this.messageService.create({
      user: data.user,
      contents: data.message,
      count: 1,
    });
    

    // 해당 채팅방에 메시지 입력
    // console.log(data.chat, data.user, data.message);
    this.chatService.addMessage(data.chat, message)

    // 채팅방에 참여하고 있는 사람들에게 emit
    // client.broadcast.emit("message", message);
    // 나자신에게
    client.emit("message", { chat: data.chat, message: message });

    // 나머지 모든 사람들
    client.broadcast.emit("message", { chat: data.chat, message: message });
    
    // client.
    // 노티 ?
    // 채팅방id
    // 글쓴사람id
    // 
    
  }

  // 카운트
}