import { Component, OnInit } from '@angular/core';
import { IUser } from '../interfaces/user/user.interface';
import {UsersList} from '../data/users-list'
import { IFilterOptions } from '../interfaces/filter-options-interface';
import { isWithinInterval } from 'date-fns';

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
      filteredList = this.filtedUsersListByDate(filterOptions.startDate, filterOptions.endDate, filteredList)
    return filteredList;
  }
  filtedUsersListByDate(startDate: Date | undefined, endDate: Date | undefined, userList: IUser[]): IUser[] {
    const DATES_NOT_SELECTED = startDate === undefined || endDate === undefined;

    if(DATES_NOT_SELECTED) {
      return userList;
    }

    const filtredDateList = userList.filter((user) => isWithinInterval(new Date(user.dataCadastro), {
      start: startDate,
      end: endDate
    }));

    return filtredDateList;


  }
  filtedUsersListByStatus(status: boolean | undefined, userList: IUser[]): IUser[] {
    const STATUS_NOT_SELECTED = status === undefined;
    
    if(STATUS_NOT_SELECTED) {
      return userList;
    }

    const filtredStatusList = userList.filter((user) => user.ativo === status);

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
