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
			const userID = await FirebaseAuth.createUser(email, password);

			if (user === undefined)
				user = new User(email, '');

			user.uid = userID;
			await UserDB.createAndUpdateUser(user);
			resolve(user);
		});
	}

	public static updateUser(user: User): Promise<void> {
		return new Promise<void>((resolve, reject) => {
			resolve(UserDB.createAndUpdateUser(user));
		});
	}

	public static deleteUser(user: User): Promise<void> {
		return new Promise<void>((resolve, reject) => {
			resolve(UserDB.deleteUser(user));
		});
	}

}