import User from "../models/user.model";
// import { Providers } from "../../constants";
import { Provider } from "@nestjs/common";

export const authProviders: Provider[] = [
  {
    provide: "USERS",
    useValue: User
  }
];