let users = [
    {id: '1', name: 'Claudinei Brito Junior', email: 'claudineibjr@hotmail.com'},
    {id: '2', name: 'Bill Gates', email: 'billgates@hotmail.com'},
    {id: '3', name: 'Steve Jobs', email: 'steve@hotmail.com'}
];

function createUser(user){
    users.push(user);
    return user;
}

module.exports = {
    Query: {
        users: () => users,
        user: (_, { id }) => users.find(x => x.id === id)
    },

    Mutation: {
        createUser: (_, {user}) => createUser(user),
    }
}