import { Injectable } from "@angular/core";
import { Users } from "./userModel";
import { HttpClient } from "@angular/common/http";
//import { from } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class UserService {
  baseUrl = "http://localhost:3000/api/";
  constructor(private _HttpClient: HttpClient) {}

  getuser() {
    return this._HttpClient.get<Users[]>(this.baseUrl + "books");
  }
  getuser1(id) {
    return this._HttpClient.get<Users>(this.baseUrl + "books/" + id);
  }
  adduser(user: Users) {
    return this._HttpClient
      .post(this.baseUrl + "books", user)
      .subscribe(res => {});
  }
  deletuser(id: string) {
    return this._HttpClient.delete(this.baseUrl + "books/" + id);
  }
  updateuser(id: string, user: any) {
    return this._HttpClient.patch(this.baseUrl + "books/" + id, user);
  }
}
