export default class UserPreferences{
    sounds: boolean;
    vibration: boolean;

    constructor (sounds?: boolean, vibration?: boolean){
        this.sounds = sounds === undefined ? true : sounds;
        this.vibration = vibration === undefined ? true : vibration;
    }

    static getClassFromObject(newUserBonus: any): UserPreferences {
        const sounds = newUserBonus.sounds;
        const vibration = newUserBonus.vibration;

        const userPreferences = new UserPreferences(sounds, vibration);

        return userPreferences;
    }

    getObjectFromClass(): object {
        return {
            'sounds': this.sounds,
            'vibration': this.vibration
        }
    }
}