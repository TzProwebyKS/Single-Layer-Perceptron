module.exports = function() {
    if (typeof this._learningRate != 'number') {
        throw new Error('Please, check if learning rate is setted correctyl!')
    }
    else if (!this._inputs || !this._inputs[0]) {
        throw new Error('Please, check if inputs are being setted correctyl!')
    }
    else if (this._weights.length != this._inputs[0].length) {
        throw new Error('Please, check if weights are being initialized correctly!')
    }
    else if (this._rightAnswers.length != this._inputs.length) {
        throw new Error('Please, check if right answers and inputs are the same length!')
    }
    else if (!this[`_${this._nameOfActivationFunc}`]) {
        throw new Error('Please, set valid activation function!')
    }
}