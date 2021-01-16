import Friend from "../models/friend.model";
// import { Providers } from "../../constants";
import { Provider } from "@nestjs/common";

export const friendProviders: Provider[] = [
  {
    provide: "FRIENDS",
    useValue: Friend
  }
];