import User from "../models/user.model";
// import { Providers } from "../../constants";
import { Provider } from "@nestjs/common";

export const usersProviders: Provider[] = [
  {
    provide: "USERS",
    useValue: User
  }
];