import {cloudFirestore, initializeFirebase} from '../Firebase';

import User from '../../../Model/User';

//import Utilities from '../../../Utilities/Utilities';

export default class UserDB{
    private static usersRef(){
        return cloudFirestore().collection('users');
	}

	public static createAndUpdateUser(user: User): Promise<void> {
		initializeFirebase();

        return new Promise<void>((resolve, reject) => {
            this.usersRef().doc(user.uid).set(user.getObjectFromClass()).then((document) => {
                resolve();
            }).catch((error) => {
                reject(error);
            });
        });
	}

	public static getUserByEmail(email: string): Promise<User> {
		initializeFirebase();
		
		return new Promise<User>((resolve, reject) => {
            // Constrói a query para buscar o usuário no BD
            let userQuery: firebase.firestore.Query = this.usersRef();
            userQuery = userQuery.where('email', '==', email);

            userQuery.get().then((document) => {
                const documents = document.docs;

                // Retorna a questão buscada
                if (documents.length === 1)
                    resolve(User.getClassFromObject(documents[0].data()));
                else{
                    // Não existe uma questão com os parâmetros solicitados
                    throw new Error('Nenhum registro encontrado');
                }
            }).catch((error) => {
                reject(error);
            });
		});
    }
    
	public static getUserById(userID: string): Promise<User> {
		initializeFirebase();
		
		return new Promise<User>((resolve, reject) => {
            // Constrói a query para buscar o usuário no BD
            let userQuery: firebase.firestore.Query = this.usersRef();
            userQuery = userQuery.where('uid', '==', userID);

            userQuery.get().then((document) => {
                const documents = document.docs;

                // Retorna a questão buscada
                if (documents.length === 1)
                    resolve(User.getClassFromObject(documents[0].data()));
                else{
                    // Não existe uma questão com os parâmetros solicitados
                    throw new Error('Nenhum registro encontrado');
                }
            }).catch((error) => {
                reject(error);
            });
		});
	}

    public static async getAllUsers(): Promise<Array<User>> {
        initializeFirebase();
        
        const usersPromises: Array<Promise<User>> = new Array<Promise<User>>();
        await this.usersRef().get().then((document) => {
            document.docs.forEach((childDocument) => {
                usersPromises.push(new Promise<User>((resolve, reject) => {
                    resolve(User.getClassFromObject(childDocument.data()));
                }));
            });
        });

        return new Promise<Array<User>>((resolve, reject) => {
            Promise.all(usersPromises).then((values) => {
                resolve(values);
            }).catch((error) => {
                reject(error);
            });
        });
    }

	public static deleteUser(user: User): Promise<void> {
		initializeFirebase();
		
		return new Promise<void>((resolve, reject) => {
			reject('Not yet implemented');
		});
	}
}