const fs = require("fs");

function readIdxFile(filepath) {
    const data = fs.readFileSync(filepath);
    let offes = 0;
    const magicNumber = data.readUInt32BE(offes);
}

readIdxFile("./datasets/mnist/train-images.idx3-ubyte");