(() => {
	const fs = require("fs");
	const path = require("path");
	const ts = require("typescript");

	interface file {
		name: string;
		modified: number;
	}

	const getFolders = (): string[] => {
		const folders = fs.readdirSync(__dirname);
		return folders.filter((folder: string) => folder.match(/^2\d{3}$/));
	};

	const getAllFiles = (dirPath: string, arrayOfFiles: file[] = []): file[] => {
		const files = fs.readdirSync(dirPath);
		arrayOfFiles = arrayOfFiles || [];

		files.forEach((file: string) => {
			const stats = fs.statSync(dirPath + "/" + file);
			if (stats.isDirectory()) {
				arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
			} else {
				if (file.match(/\.ts$/) && !file.match(/spec\.ts$/)) {
					arrayOfFiles.push({
						name: path.join(__dirname, dirPath, "/", file),
						modified: stats.mtimeMs,
					});
				}
			}
		});

		return arrayOfFiles;
	};

	const files = getFolders()
		.map((dir: string) => getAllFiles(dir))
		.flat();

	const lastModified = files.reduce((acc: file, file: file): file => {
		if (acc.modified < file.modified) acc = file;
		return acc;
	});

	console.clear();

	const inputFileName = lastModified.name.replace(/([0-9]{1,2})\.ts/, 'inputs/$1.txt');
	if(!fs.existsSync(inputFileName)) {
		console.log(`Waiting for input file ${inputFileName.replace(/.*(2\d{3})/, '$1')}`);
		return;
	}

	const input = JSON.stringify(fs.readFileSync(inputFileName, 'utf8').split("\n"));
	eval(`${ts.transpile(fs.readFileSync(lastModified.name, "utf8"))};exports.default(${input});`);
})();
