import { Component, OnInit } from '@angular/core';
import { IUser } from '../interfaces/user/user.interface';
import {UsersList} from '../data/users-list'
import { IFilterOptions } from '../interfaces/filter-options-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  userList: IUser[] = [];
  usersListFiltered: IUser[] = [];
  userSelected: IUser = {} as IUser;
  showUserDetails: boolean = false;
  
  ngOnInit(){
    setTimeout(()=> {
      this.userList = UsersList;
      this.usersListFiltered = this.userList;
    }, 10);
  }

  onUserSelected(user: IUser) {
    this.showUserDetails = true;
    this.userSelected = user;
  }

  onFilter(filterOptions: IFilterOptions) {
    
    this.usersListFiltered = this.filtedUsersList(filterOptions, this.userList);
    
    
  }

  filtedUsersList(filterOptions: IFilterOptions, userList: IUser[]): IUser[] {
    let filteredList: IUser[] = [];
      filteredList = this.filtedUsersListByName(filterOptions.name, userList);
      filteredList = this.filtedUsersListByStatus(filterOptions.status, filteredList);
      
    return filteredList;
  }
  filtedUsersListByStatus(status: boolean | undefined, filteredList: IUser[]): IUser[] {
    const STATUS_NOT_SELECTED = status === undefined;
    
    if(STATUS_NOT_SELECTED) {
      return filteredList;
    }

    const filtredStatusList = filteredList.filter((user) => user.ativo === status);

    return filtredStatusList;
  }

  filtedUsersListByName(name: string | undefined, userList: IUser[]): IUser[] {
    const NAME_NOT_TYPPED = name === undefined;

    if(NAME_NOT_TYPPED) {
      return userList;
    }

    const filteredList = userList.filter((user) => user.nome.toLocaleLowerCase().includes(name.toLocaleLowerCase()));

    return filteredList;
  }

 
}
