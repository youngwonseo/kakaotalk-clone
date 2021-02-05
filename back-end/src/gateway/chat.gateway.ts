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


  constructor(private readonly chatService: ChatService,
    private readonly userService: UserService,
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


    //     chat: chat,
    //     user: profile._id, // 내아이디
    //     message: message,

    // 
    // data.chat.users

    // 방에 참여중인 사람들
    



    // 메세지 생성
    const message = await this.messageService.create({
      user: data.user, // 작성자
      contents: data.message, //내용
      count: 1,
    });


    
    // // data.chat이 널이면 채팅망이 존재하지 않음
    let isNew = false;
    if(!data.chat) {
      // 채팅방 생성(채팅방에 참여하고 있는 사람목록)
      isNew = true;
      const chat = await this.chatService.create({users: data.users});

      // console.log(chat);
      data.chat = chat._id;
      console.log('chatid', chat._id);
      // 유저에 채팅방 추가
      for(let i=0,n=data.users.length;i<n;i++){
        //chat.users로 대채
        console.log(i, data.users[i]);
        const user = await this.userService.addChat(data.users[i], chat);
        // console.log(user.chats);
        
      }
    }

    // 해당 채팅방에 메시지 입력
    const chat = await this.chatService.addMessage(data.chat, message);
    console.log('users', chat.users);

    // // 채팅방에 참여하고 있는 사람들에게 emit
    // // client.broadcast.emit("message", message);
    // // 나자신에게
    const result = {
      isNew,
      message,
      chatid: !isNew ? chat._id: false,
      chat: isNew ? chat: false,
    }
    
    client.emit("message", result);

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