module.exports = function() {
    this._verifyPossibleErrors()

    for (let i = 0; i < this._iterations && this._keepGoing; i++) {
        const indexOfDataToBeTrained = i % this._inputs.length

        this._feedForward(indexOfDataToBeTrained)
        this._updateWeights(indexOfDataToBeTrained)
    }

    console.log('TRAINING COMPLETE!')
}