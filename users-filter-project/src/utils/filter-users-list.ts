import { isWithinInterval } from "date-fns";
import { IUser } from "../interfaces/user/user.interface";
import { IFilterOptions } from "../interfaces/filter-options-interface";

const filtedUsersListByDate = (startDate: Date | undefined, endDate: Date | undefined, userList: IUser[]): IUser[] => {
    const DATES_NOT_SELECTED = startDate === undefined || endDate === undefined;

    if (DATES_NOT_SELECTED) {
        return userList;
    }

    const filtredDateList = userList.filter((user) => isWithinInterval(new Date(user.dataCadastro), {
        start: startDate,
        end: endDate
    }));

    return filtredDateList;


}
const filtedUsersListByStatus = (status: boolean | undefined, userList: IUser[]): IUser[] => {
    const STATUS_NOT_SELECTED = status === undefined;

    if (STATUS_NOT_SELECTED) {
        return userList;
    }

    const filtredStatusList = userList.filter((user) => user.ativo === status);

    return filtredStatusList;
}

const filtedUsersListByName = (name: string | undefined, userList: IUser[]): IUser[] => {
    const NAME_NOT_TYPPED = name === undefined;

    if (NAME_NOT_TYPPED) {
        return userList;
    }

    const filteredList = userList.filter((user) => user.nome.toLocaleLowerCase().includes(name.toLocaleLowerCase()));

    return filteredList;
}

const filterUsersList = (filterOptions: IFilterOptions, userList: IUser[]): IUser[] => {
    let filteredList: IUser[] = [];
    filteredList = filtedUsersListByName(filterOptions.name, userList);
    filteredList = filtedUsersListByStatus(filterOptions.status, filteredList);
    filteredList = filtedUsersListByDate(filterOptions.startDate, filterOptions.endDate, filteredList);
    return filteredList;
}

export {filterUsersList};