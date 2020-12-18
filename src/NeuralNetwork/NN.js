function NeuralNetwork(inputs, rightAnswers, iterations, learningRate, bias, nameOfActivationFunc) {
    this._nameOfActivationFunc = nameOfActivationFunc
    this._inputs = inputs
    this._iterations = iterations * this._inputs.length
    this._learningRate = learningRate
    this._bias = bias
    this._rightAnswers = rightAnswers
    this._weights = []
    this._errorList = []
    this._keepGoing = true
    
    this._addBiasToInputs()
    this._initializeWeights()
}

NeuralNetwork.prototype._newWeight = require('./prototypes/_newWeight')
NeuralNetwork.prototype._addBiasToInputs = require('./prototypes/_addBiasToInputs')
NeuralNetwork.prototype._initializeWeights = require('./prototypes/_initializeWeights')
NeuralNetwork.prototype._verifyPossibleErrors = require('./prototypes/_verifyPossibleErrors')
NeuralNetwork.prototype._feedForward = require('./prototypes/_feedForward')
NeuralNetwork.prototype._binaryStep = require('./prototypes/_binaryStep')
NeuralNetwork.prototype._updateWeights = require('./prototypes/_updateWeights')
NeuralNetwork.prototype._bipolarStep = require('./prototypes/_bipolarStep')
NeuralNetwork.prototype._sigmoid = require('./prototypes/_sigmoid')
NeuralNetwork.prototype.showWeights = require('./prototypes/showWeights')
NeuralNetwork.prototype.test = require('./prototypes/test')
NeuralNetwork.prototype.showErrorList = require('./prototypes/showErrorList')
NeuralNetwork.prototype.train = require('./prototypes/train')
NeuralNetwork.prototype.plotErrors = require('./prototypes/plotErrors')

module.exports = NeuralNetwork