import {initializeFirebase, authentication} from './Firebase';

export default class FirebaseAuth {

    public static createUser(email: string, password: string): Promise<string> {
        initializeFirebase();
        
        return new Promise<string>((resolve, reject) => {
            authentication().createUserWithEmailAndPassword(email, password).then((value) => {
                resolve(value.user!.uid);
            }).catch((error) => {
                reject(error);
            });
        });
    }

    public static loginUser(email: string, password: string): Promise<void> {
        initializeFirebase();

        return new Promise<void>((resolve, reject) => {
            authentication().signInWithEmailAndPassword(email, password).then((value) => {
                resolve()
            }).catch((error) => {
                reject(error);
            });
        });
    }
    
}