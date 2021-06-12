"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onmyjs = void 0;
/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-var-requires, @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call */
const fs = require('fs');
const path = require('path');
const callerPath = require('caller-path');
function onmyjs(data, outputPath, pretty = true) {
    const caller = callerPath();
    const callerDirectory = path.dirname(caller);
    const _outputFilebase = path.basename(caller);
    const _outputFilename = path.parse(_outputFilebase).name;
    const outPath = path.resolve(callerDirectory, outputPath ?? `${_outputFilename}.json`);
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    fs.writeFileSync(`${outPath}`, JSON.stringify(data, null, pretty ? 2 : 0));
}
exports.onmyjs = onmyjs;
