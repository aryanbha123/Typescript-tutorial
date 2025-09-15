"use strict";
// // let number : number = 1
// // let name : string = "Aryan"
// // let blocked : boolean = false;
// // let hero : any;
Object.defineProperty(exports, "__esModule", { value: true });
// // // UNIONS
// // let firstname : string
// // let surname : string | number
// // firstname = "aryan"
// // surname = 1
// // const func =  (n: number,m : number) : number=> {
// //     return n * m;
// // }
// // // var temp: number= func("ar" , "bh");
// // // console.log(temp)
// // type user = {
// //     name : String,
// // }
// // let user1: user;
// // user1 = {
// //     name :"Aryan"
// // }
// const arr : number[] = [1,2,3,4];
// console.log(arr)
// const array : Array<string> = ["aryan" ]
// interface
// interface User {
//   username: string
//   password: string
//   login?: (username: string, password: string) => boolean
// }
// interface Admin extends User {
//   privilage: Array<String>
// }
// const user: User = {
//   username: 'Aryanbhandari',
//   password: 'Aryan123#',
//   login: (username, password) => {
//     if (username == 'Aryanbhandari' && password == 'Aryan123#') return true
//     else return false
//   }
// }
// const admin: Admin = {
//   username: 'admin',
//   password: 'admin123',
//   privilage: ['update', 'insert', 'delete', 'read']
// }
// console.log(user.login?.(user.username, user.password))
// console.log(admin.login?.(user.username , user.password));
// type func = (a : number, b : number) => number
// const method:func = (a,b) => {
//     return a + b;
// }
// console.log(method(1,2));
// const destructureMethod = (...args : number[]) : number[] => {
//     return args;
// }
// console.log(destructureMethod(1,2,3,4));
// const getUser = (U : {name :string , pass : string}) : void => {
//     console.log(U.name);
// }
// type User = {
//     readonly id: number
// }
// const user : User = { 
//     id : 1
// }
// // never type
// const err = new  Error();
// let theme : "light" | "dark";
// const errHandler = () : never => {
//     throw new Error();
// }
// class User { 
//     private name : string 
//     age : number
//     constructor(name : string, age : number) {
//         this.name = name;
//         this.age = age;
//     }
//     // getter
//     getName = () : string => {
//         return this.name
//     }
// }
// class Admin extends User {
// }
// // const user = new User("Aryan" , 20);
// console.log(user.age)
// console.log(user.getName());
// // @param TYPE ASSERTIION
//# sourceMappingURL=index.js.map