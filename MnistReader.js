const fs = require("fs");

function readIdxFile(filepath) {
    const data = fs.readFileSync(filepath);
}

readIdxFile("./datasets/mnist/train-images.idx3-ubyte");