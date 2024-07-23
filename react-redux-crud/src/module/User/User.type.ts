export interface IUser {
    id: number;
    name: string;
    email: string;
}


export interface IUserState {
    list: IUser[],
    listStatus: ApiStatus
}
export enum ApiStatus {
    "loading",
    "ideal",
    "success",
    "error"
}
export const defaultList: IUser[]=[
    {
        id:1,
        name:"Akash",
        email:"akash@gmail.com"
    },
    {
        id:2,
        name:"Arvind",
        email:"arvind@gmail.com"
    },
    {
        id:3,
        name:"Suraj",
        email:"suraj@gmail.com"
    },
    {
        id:4,
        name:"Tejpal",
        email:"Tejpal@gmail.com"
    },
    {
        id:4,
        name:"Sainath Lonekar",
        email:"sai@gmail.com"
    }
]