/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-var-requires, @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call */
const fs = require('fs');
const path = require('path');
const callerPath = require('caller-path');

export default function onmyjs(
	data: Record<string, any>,
	outputFilename?: string,
	pretty = true
): void {
	const caller = callerPath();
	const directory = path.dirname(caller);
	const _outputFilebase = outputFilename ?? path.basename(caller);
	const _outputFilename = path.parse(_outputFilebase).name;

	const outPath = path.resolve(directory, `${_outputFilename}.json`);

	// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
	fs.writeFileSync(`${outPath}`, JSON.stringify(data, null, pretty ? 2 : 0));
}
