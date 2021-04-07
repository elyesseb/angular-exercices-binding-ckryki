import { Injectable } from "@angular/core";
import { users } from "../users-data";

@Injectable()
export class DataService {
  users = users;
  constructor() {}

  getUsersData() {
    return this.users;
  }
}
