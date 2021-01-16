import { Injectable, Inject} from '@nestjs/common';
import Friend, { FriendInterface } from "../database/models/friend.model";



@Injectable()
export class FriendDao {

  constructor(@Inject("FRIENDS") private friend: typeof Friend){}
  
  // 가장 마지막 메세지와 함께
  public getListByUser() {
    
  }

  public create(username: string, id: string): Promise<FriendInterface>{
    return this.friend.create({username: username, friend: id});
  }

  public update() {

  }

  public delete() {

  }


}

