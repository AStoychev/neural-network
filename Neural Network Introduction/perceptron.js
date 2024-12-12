const trainInputs = [
    [2, 7],
    [3, 6],
    [1, 1],
    [1, 2],
    [2, 1],
];

const trainLabels = [1, 1, 0, 0, 0];
// const weights = [0.1, 0.3];
// const b = 0.5; //bias
// const n = 0.1; //learning


class Perceptron {
    constructor(learningRate = 0.1) {
        this.weights = [0.1, -0.3];
        this.bias = 0.5;
        this.learningRate = learningRate
    }

    activationFunction(x) {
        return x >= 0 ? 1 : 0;
    };

    predict (inputs) {
        let sum = this.bias;

        for(let j = 0; j < inputs.length; j++) {
            sum += inputs[j] * this.weights[j];
        }

        return this.activationFunction(sum);
    }

    train(trainData, trainLabels) {
        for (let i = 0; i < trainData.length; i++) {
            let inputs = trainData[i];

            const yp = this.predict(inputs)
            const yt = trainLabels[i];

            if(yt != yp) {
                for(let k = 0; k < this.weights.length; k++) {
                    this.weights[k] += this.learningRate * (yt - yp) * inputs[k]
                }
                
                this.bias += this.learningRate * (yt - yp);
            }
        }
    }
}

const perceptron = new Perceptron();
perceptron.train(trainInputs, trainLabels);