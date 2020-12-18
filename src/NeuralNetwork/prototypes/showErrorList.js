module.exports = function() {
    const errToBeShown = []

    for (let c = 1; c < this._inputs.length; c++) {
        errToBeShown.unshift(this._errorList[this._errorList.length - c])
    }

    console.log(`The last ${this._inputs.length} error(s): ${errToBeShown}`)
    console.log('')
}