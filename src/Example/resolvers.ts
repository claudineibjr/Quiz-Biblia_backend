let users = [
    {id: '1', name: 'Claudinei Brito Junior', email: 'claudineibjr@hotmail.com'},
    {id: '2', name: 'Bill Gates', email: 'billgates@hotmail.com'},
    {id: '3', name: 'Steve Jobs', email: 'steve@hotmail.com'}
];

function createUser(user: any){
    users.push(user);
    return user;
}

export const resolvers = {
    Query: {
        users: () => users,
        user: (_context: any, { id }: any) => users.find(x => x.id === id)
    },

    Mutation: {
        createUser: (_context: any, {user}: any) => createUser(user),
    }
}