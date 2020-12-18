module.exports = function(inputs, rightAnswers) {
    for (let i = 0; i < inputs.length; i++) {
        this._inputs = [inputs[i]]
        this._rightAnswers = [rightAnswers[i]]
    
        this._addBiasToInputs()
        this._verifyPossibleErrors()
        this._feedForward(0)
    
        console.log('TEST:')
        console.log(`Inputs are: ${this._inputs}`)
        console.log(`Output: ${this._output}`)

        const err = this._rightAnswers[0] - this._output

        if (err !== 0) {
            console.log(`Error: ${err}`)
            console.log('')
        }
        else {
            console.log("There's no error ;D")
            console.log('')
        }
    }
}