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
import { UserService } from "../services/user.service";




@WebSocketGateway()
export class ChatGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: any;
  users: number = 0;

  constructor(
    private readonly chatService: ChatService,
    private readonly userService: UserService,
    private readonly messageService: MessageService
  ) {}

  afterInit(server: any) {}

  handleDisconnect(client: any) {
    this.users--;
    console.log("dis connection!!", this.users);
  }

  handleConnection(client: any, ...args: any[]) {
    this.users++;
    console.log("connection!!", this.users);
  }



  // 서버가 메세지 수신
  @SubscribeMessage("message")
  async onChat(client: Socket, data: any) {
    

    // 메세지 생성
    const message = await this.messageService.create({
      user: data.user, // 작성자
      contents: data.message, //내용
      count: 1,
    });

    // data.chat이 널이면 채팅망이 존재하지 않음
    let isNew = false;
    if (!data.chat) {
      isNew = true;

      // 채팅방 생성, 참여하고 있는 유저정보
      const chat = await this.chatService.saveOne();

      // 사용자 추가
      for(let i=0,n=data.users.lengthh;i<n;i++){
        await this.userService.joinChat(data.user, chat._id);
      }
      
      // 생성된 채팅방 아이디
      data.chat = chat._id;
    }


    // 해당 채팅방에 메시지 입력
    const chat = await this.chatService.saveMessage(data.chat, message);
    
    // 새로운 채팅방 여부
    const result = {
      isNew,
      message,
      chatid: chat._id,
      chat: chat,
    };

    // 내 채팅방?
    client.emit("message", {
      ...result,
      // message: {
      //   user: result.message.user,
      //   contents: result.message.contents,
      //   count: result.message.count,
      //   isMine: true,
      // },
    });

    // // 나머지 모든 사람들
    client.broadcast.emit("message", result);

    // // 채팅방이 생성된경우

    // client.
    // 노티 ?
    // 채팅방id
    // 글쓴사람id
    //
  }

  // 카운트
}