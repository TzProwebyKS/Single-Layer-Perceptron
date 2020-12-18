module.exports = function() {
    for (let col = 0; col < this._inputs.length; col++) {
        this._inputs[col].unshift(this._bias)
    }
}