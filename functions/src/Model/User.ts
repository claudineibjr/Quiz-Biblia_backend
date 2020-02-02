import UserBonus from "./UserBonus";
import UserPreferences from "./UserPreferences";

export default class User {
    uid: string;
    static uidDefault(): string { return '';}

    email: string;
    
    name: string;

    answered: Array<number>;
    static answeredDefault(): Array<number> {return new Array<number>();}

    score: number;
    static scoreDefault(): number { return 0; }

    lastPlay: Date;
    static lastPlayDefault(): Date {return new Date();}

    firstAccess: Date;
    static firstAccessDefault(): Date {return new Date();}

    bonus: UserBonus;
    static bonusDefault(): UserBonus { return new UserBonus(); }

    preferences: UserPreferences;
    static preferencesDefault(): UserPreferences { return new UserPreferences(); }

    constructor(email: string, name: string) {
        this.email = email;
        this.name = name;

        this.answered = User.answeredDefault();
        this.score = User.scoreDefault();
        this.lastPlay = User.lastPlayDefault();
        this.firstAccess = User.firstAccessDefault();
        this.bonus = User.bonusDefault();
        this.preferences = User.preferencesDefault();
        this.uid = User.uidDefault();
    }

    addAnswered(questionNumber: number): void {
        this.answered.push(questionNumber);
    }

    static getClassFromObject(newUser: any): User {
        const uid = newUser.uid !== undefined ? newUser.uid : this.uidDefault();
        const email = newUser.email;
        const name = newUser.name;
        const answered: Array<number> = newUser.answered !== undefined ? Object.keys(newUser.answered).map(iCount => newUser.answered[iCount]) : this.answeredDefault();
        const score = newUser.score !== undefined ? newUser.score : this.scoreDefault();
        const lastPlay = newUser.lastPlay !== undefined ? newUser.lastPlay : this.lastPlayDefault();
        const firstAccess = newUser.firstAccess !== undefined ? newUser.firstAccess : this.firstAccessDefault();
        const bonus = newUser.bonus !== undefined ? UserBonus.getClassFromObject(newUser.bonus) : this.bonusDefault();
        const preferences = newUser.preferences !== undefined ? UserPreferences.getClassFromObject(newUser.preferences) : this.preferencesDefault();

        let user = new User(email, name);
        user.uid = uid;
        user.answered = answered;
        user.score = score;
        user.lastPlay = lastPlay;
        user.firstAccess = firstAccess;
        user.bonus = bonus;
        user.preferences = preferences;

        return user;
    }

    getObjectFromClass(): object {
        return {
            'uid': this.uid,
            'email': this.email,
            'name': this.name,
            'answered': this.answered,
            'score': this.score,
            'lastPlay': this.lastPlay,
            'firstAccess': this.firstAccess,
            'bonus': this.bonus.getObjectFromClass(),
            'preferences': this.preferences.getObjectFromClass()
        }
    }

}