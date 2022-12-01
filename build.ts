(() => {
	const fs = require("fs");
	const path = require("path");
	const ts = require("typescript");
	
	const getFolders = (): string[] => {
		const folders = fs.readdirSync(__dirname);
		return folders.filter((folder: string) => folder.match(/^2\d{3}$/));
	};

	const transpileFile = (folder: string, file: string): void => {
		const output = ts.transpile(
			fs.readFileSync(path.join(folder, file), "utf8")
		);
		fs.writeFileSync(
			path.join(folder, "js", file.replace(".ts", ".js")),
			output
		);
	};

	getFolders().forEach((folder: string) => {
		fs.rmSync(path.join(__dirname, folder, "js"), {
			recursive: true,
			force: true,
		});
		fs.mkdirSync(path.join(__dirname, folder, "js"));
		fs.readdirSync(folder).forEach((file: string) => {
			if (file.match(/\.ts$/)) {
				transpileFile(path.join(__dirname, folder), file);
			} else {
				try {
					fs.unlinkSync(path.join(__dirname, folder, file));
				} catch (e) {}
			}
		});
	});
})();
