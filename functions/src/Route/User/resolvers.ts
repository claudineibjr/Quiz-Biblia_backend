import User from "../../Model/User";
import UserServices from "../../Services/UserServices";

async function getUserByEmail (email: string): Promise<User | undefined> {
    const user = await UserServices.getUserByEmail(email);
    return user;
}

async function getUserById (id: string): Promise<User | undefined> {
    const user = await UserServices.getUserByID(id);
    return user;
}

async function createUser (user: {email: string, name: string, password: string}): Promise<User | undefined> {
    let newUser = new User(user.email, user.name);
    newUser = await UserServices.createUser(user.email, user.password, newUser);
    return newUser;
}

async function loginUser (email: string, password: string): Promise<User | undefined> {
    const user = await UserServices.loginUser(email, password);
    return user;
}

async function getAllUsers(): Promise<Array<User>> {
    const users = await UserServices.getAllUsers();
    return users;
}

export const resolvers = {
    Query: {
        getUserByEmail: (_context: any, {email}: any) => getUserByEmail(email),
        getUserById: (_context: any, {id}: any) => getUserById(id),
        getAllUsers: () => getAllUsers()
    },

    Mutation: {
        createUser: (_context: any, {user}: any) => createUser(user),
        loginUser: (_context: any, {email, password}: any) => loginUser(email, password)
    }
}