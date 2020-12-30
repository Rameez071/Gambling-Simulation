class Gambling {

    // To check random value
    randomCheck = () => {
        let rand = Math.floor(Math.random() * 10) % 2 + 1;
        return rand;
    }

    // To check win or loose
    checkResult = () => {

        //local variables
        let STAKE = 100;
        let BET = 1;
        let lossLimit = STAKE / 2;
        let GainLimit = STAKE + lossLimit;
        while (STAKE > lossLimit && STAKE < GainLimit) {
            if (this.randomCheck() === 1) {
                STAKE = STAKE + BET;
            }
            else {
                STAKE = STAKE - BET;
            }
        }
        return STAKE;
    }
}
module.exports = new Gambling();
