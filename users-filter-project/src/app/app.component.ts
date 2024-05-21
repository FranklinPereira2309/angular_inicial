import { Component, OnInit } from '@angular/core';
import { IUser } from '../interfaces/user/user.interface';
import {UsersList} from '../data/users-list'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  userList: IUser[] = []
  userSelected: IUser = {} as IUser;
  showUserDetails: boolean = false;
  
  ngOnInit(){
    setTimeout(()=> {
      this.userList = UsersList;
    }, 10);
  }

  onUserSelected(user: IUser) {
    this.showUserDetails = true;
    this.userSelected = user;
  }
}
