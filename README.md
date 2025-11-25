# Neural Network Perceptron Implementation


This project is a simple implementation of a perceptron neural network in JavaScript. The perceptron is trained on a small dataset and tested for accuracy. Additionally, functionality to read MNIST dataset files is provided for advanced usage.






## Features
- **Perceptron Class**:
  - Implements a single-layer perceptron for binary classification.
  - Supports training, prediction, and accuracy evaluation.
  
- **MNIST Reader**:
  - Reads MNIST dataset files in IDX format.
  - Supports loading training and testing data labels.


## Code Overview

### Perceptron
The `Perceptron` class:
- Initializes with random weights and bias.
- Trains using a step activation function.
- Adjusts weights and bias via a learning rate.
- Calculates accuracy on training and test datasets.

### MNIST Reader
The `readIdxFile` function:
- Reads IDX formatted files from the MNIST dataset.
- Parses both labels and image dimensions.


## Dataset
- **Training Inputs**: A small dataset of 2D inputs.
- **Training Labels**: Binary labels for training data.
- **Testing Inputs**: Separate dataset for testing.
- **Testing Labels**: Binary labels for testing data.


## Usage

### Running the Perceptron
1. Clone the repository and navigate to the project folder.
2. Install dependencies:

`npm install`

### Run the code
`node perceptron.js`

### Example Output
Epoch 1:
  Training Accuracy: 80%
  Testing Accuracy: 60%
Epoch 2:
  Training Accuracy: 90%
  Testing Accuracy: 70%
...

This README gives an overview of the project, explains its components, and provides basic instructions for usage. Let me know if you'd like to customize it further!
