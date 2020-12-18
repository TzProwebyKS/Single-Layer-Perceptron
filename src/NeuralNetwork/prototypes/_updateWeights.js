module.exports = function(indexOfDataToBeTrained) {
    this._errorList.push(this._rightAnswers[indexOfDataToBeTrained] - this._output)

    if ((this._errorList.length % this._inputs.length) == 0) {
        const indexOfError = this._errorList.length - this._inputs.length

        for (let i = 0; i < this._inputs.length; i++) {
            this._keepGoing = false

            if (this._errorList[i + indexOfError] != 0) {
                this._keepGoing = true
                break
            }
        }
    }

    for (let i = 0; i < this._weights.length; i++) {
        this._weights[i] += this._learningRate * this._errorList[this._errorList.length - 1] * this._inputs[indexOfDataToBeTrained][i]
    }
}