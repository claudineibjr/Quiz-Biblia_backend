export default class UserBonus{
    moreTime: number;
    lessAlternatives: number;
    showBiblicalReference: number;
    lastBonusReceived: Date;

    constructor(moreTime?: number, lessAlternatives?: number, showBiblicalReference?: number, lastBonusReceived?: Date){
        this.moreTime = moreTime === undefined ? 0 : moreTime;
        this.lessAlternatives = lessAlternatives === undefined ? 0 : lessAlternatives;
        this.showBiblicalReference = showBiblicalReference === undefined ? 0 : showBiblicalReference;
        this.lastBonusReceived = lastBonusReceived === undefined ? new Date() : lastBonusReceived;
    }

    static getClassFromObject(newUserBonus: any): UserBonus {
        const moreTime = newUserBonus.moreTime;
        const lessAlternatives = newUserBonus.lessAlternatives;
        const showBiblicalReference = newUserBonus.showBiblicalReference;
        const lastBonusReceived = newUserBonus.lastBonusReceived;

        const userBonus = new UserBonus(moreTime, lessAlternatives, showBiblicalReference, lastBonusReceived);

        return userBonus;
    }
    
    getObjectFromClass(): object {
        return {
            'moreTime': this.moreTime,
            'lessAlternatives': this.lessAlternatives,
            'showBiblicalReference': this.showBiblicalReference,
            'lastBonusReceived': this.lastBonusReceived
        }
    }

}