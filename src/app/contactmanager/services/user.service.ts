import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable(//{
  //providedIn: 'root'
  //}
)
export class UserService {

  usersUrl: string = "https://angular-material-api.azurewebsites.net/users";
  private _users: BehaviorSubject<User[]>;

  private dataSource: {
    users: User[];
  }

  constructor(private http: HttpClient) {
    this.dataSource = { users: [] };
    this._users = new BehaviorSubject<User[]>([]);
  }

  get users(): Observable<User[]> {
    return this._users.asObservable();
  }

  loadAll() {
    return this.http.get<User[]>(this.usersUrl)
      .subscribe(data => {
        this.dataSource.users = data;
        this._users.next(Object.assign({}, this.dataSource).users);
      }, error => {
        console.log("Failed to fetch users");
      });
  }

  userById(id: number) {
    return this.dataSource.users.find(x => x.id == id);

  }

  addUser(user: User): Promise<User> {
    return new Promise((resolver, reject) => {
      user.id = this.dataSource.users.length + 1;
      this.dataSource.users.push(user);
      this._users.next(Object.assign({}, this.dataSource).users);
      resolver(user);
    })
  }
}
