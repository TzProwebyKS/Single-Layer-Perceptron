module.exports = function() {
    const quantityOfWeights = this._inputs[0].length

    for (let c = 0; c < quantityOfWeights; c++) {
        this._weights.push(this._newWeight())
    }
}