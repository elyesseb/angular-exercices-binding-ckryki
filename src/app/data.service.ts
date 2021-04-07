import { Injectable } from "@angular/core";
import { users } from "../users-data";

@Injectable({
  providedIn: 'root',
})
export class DataService {
  users = users;
  constructor() {}

  getUsersData() {
    return this.users;
  }
}
