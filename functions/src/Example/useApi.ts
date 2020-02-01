import fetch from 'cross-fetch';

// tslint:disable-next-line: no-shadowed-variable
const consumirGraphQLAPI = async (graphQLEndPoint: string, query: string) => {
    const response = await fetch(graphQLEndPoint, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({query})
    });

    return response.json();
}

const main = async () => {
    const graphQLEndPoint = 'https://us-central1-quizbiblico-b3eec.cloudfunctions.net/exampleApi';

    const queryUsers = `
    query{
        users{
            name
            email
        }
    }
    `;
    await consumirGraphQLAPI(graphQLEndPoint, queryUsers)
        .then((value) => {
            console.log('\n\nQuerying #1');
            console.log(value);
        }).catch((error) => {
            console.log(error);
        });
    
    const queryUser = `
    query{
        user(id: "${1}"){
            name
            email
        }
    }
    `;
    await consumirGraphQLAPI(graphQLEndPoint, queryUser)
        .then((value) => {
            console.log('\n\nQuerying #2');
            console.log(value);
        }).catch((error) => {
            console.log(error);
        });
}

// tslint:disable-next-line: no-floating-promises
main();