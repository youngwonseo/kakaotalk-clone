import Chat from "../models/chat.model";
// import { Providers } from "../../constants";
import { Provider } from "@nestjs/common";

export const chatProviders: Provider[] = [
  {
    provide: "CHATS",
    useValue: Chat
  }
];