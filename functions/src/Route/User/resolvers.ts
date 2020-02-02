import User from "../../Model/User";

let users: Array<User> = [
    new User('claudineibjr@hotmai.com', 'Claudinei Brito Junior',),
    new User('mavasco_15@outlook.com', 'Marcela Vasco Pereira Brito')
];

function getUserByEmail (email: string): User | undefined {
    return users.find(user => user.email === email);
}

function getUserById (id: string): User | undefined {
    return users.find(user => user.uid === id);
}

function createUser (user: {email: string, name: string, password: string}): User | undefined {
    const newUser: User = new User(user.email, user.name);
    users.push(newUser);
    return newUser;
}

function getAllUsers(): Array<User> {
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
    }
}