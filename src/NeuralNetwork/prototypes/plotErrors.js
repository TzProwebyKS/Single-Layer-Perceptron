const { plot } = require('nodeplotlib')

module.exports = function() {
    const data = [{x: [], y: [], type: 'line'}]

    for (let i = 0; i < this._errorList.length; i++) {
        data[0].x.push(i)
        data[0].y.push(this._errorList[i])
    }

    plot(data)
}