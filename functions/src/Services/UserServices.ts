import User from "../Model/User";

import UserDB from './Firebase/CloudFirestore/UserDB';
import FirebaseAuth from "./Firebase/FirebaseAuth";

export default class UserServices{

	public static getAllUsers(): Promise<Array<User>>{
		return new Promise<Array<User>>((resolve, reject) => {
			resolve(UserDB.getAllUsers());
		});
	}

	public static getUserByEmail(email: string): Promise<User> {
		return new Promise<User>((resolve, reject) => {
			resolve(UserDB.getUserByEmail(email));
		});
	}

	public static getUserByID(uid: string): Promise<User>{
		return new Promise<User>((resolve, reject) => {
			resolve(UserDB.getUserById(uid));
		});
	}

	public static createUser(email: string, password: string, user?: User): Promise<User> {
		return new Promise<User>(async (resolve, reject) => {
			try {
				const userID = await FirebaseAuth.createUser(email, password);

				let newUser = user;
				if (newUser === undefined)
					newUser = new User(email, '');

				newUser.uid = userID;
				await UserDB.createAndUpdateUser(newUser);
				resolve(user);
			} catch (error) {
				reject(error);
			}
		});
	}

	public static updateUser(user: User): Promise<void> {
		return new Promise<void>((resolve, reject) => {
			resolve(UserDB.createAndUpdateUser(user));
		});
	}

	public static loginUser(email: string, password: string): Promise<User>{
		return new Promise<User>(async (resolve, reject) => {
			try {
				await FirebaseAuth.loginUser(email, password);

				const user = await UserDB.getUserByEmail(email);
				resolve(user);
			} catch (error) {
				reject(error);
			}
		});
	}

	public static deleteUser(user: User): Promise<void> {
		return new Promise<void>((resolve, reject) => {
			resolve(UserDB.deleteUser(user));
		});
	}

	public static forgetPassword(email: string): Promise<void> {
		return new Promise<void>(async (resolve, reject) => {
			try{
				await FirebaseAuth.forgetPassword(email);
				resolve();
			} catch (error) {
				reject(error);
			}
		});
	}

}