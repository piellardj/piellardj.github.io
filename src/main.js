const fs = require("fs");
const Builder = require("webpage-templates");

if (process.argv.length !== 4) {
    console.log("Usage: <script> <dstDir>");
    process.exit(1);
}

const args = process.argv.slice(2);

const dataFilepath = args[0];
const dstDir = args[1];

Builder.Homepage.build(dstDir, dataFilepath);
