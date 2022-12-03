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
				if (file.match(/\.ts$/)) {
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
	eval(ts.transpile(fs.readFileSync(lastModified.name, "utf8")));
})();
