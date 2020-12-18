const NeuralNetwork = require('./NeuralNetwork/NN')

// Data
// const dataSet = [[113, 6.8], [122, 4.7], [107, 5.2], [98, 3.6], [115, 2.9], [120, 4.2]]
// const testSet = [[113, 6.8], [122, 4.7], [107, 5.2], [98, 3.6], [115, 2.9], [120, 4.2]]
// const rightAnswers = [-1, 1, -1, -1, 1, 1]

const dataSet = [[0, 0], [0, 1], [1, 1]]
const testSet = [[0, 0], [0, 1], [1, 1]]
const rightAnswers = [0, 0, 1]

// Config
const epochs = 70000
const bias = 1
const learningRate = 0.1

// You can implement more activation functions, there are 3: bipolarStep, sigmoid, binaryStep
const nameOfActivationFunc = 'binaryStep'

// Simple Perceptron
const NN = new NeuralNetwork(
    dataSet, 
    rightAnswers, 
    epochs, 
    learningRate, 
    bias, 
    nameOfActivationFunc
)

NN.train()
NN.showErrorList()
NN.test(testSet, rightAnswers)
NN.showWeights()
NN.plotErrors()