const fs = require("fs");
const Builder = require("webpage-builder");

if (process.argv.length !== 4) {
    console.log("Usage: <script> <dstDir>");
    process.exit(1);
}

const args = process.argv.slice(2);

const dataFilepath = args[0];
const dstDir = args[1];

const data = JSON.parse(fs.readFileSync(dataFilepath).toString());
Builder.Homepage.generate(dstDir, data);
