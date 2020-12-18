module.exports = function(y) {
    this._output = 0

    for (let i = 0; i < this._inputs[0].length; i++) {
        this._output += this._inputs[y][i] * this._weights[i]
    }

    this._output = this[`_${this._nameOfActivationFunc}`](this._output)
}