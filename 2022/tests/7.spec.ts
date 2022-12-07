const day7 = require("../7.ts");

describe.only("2022 - Day 7", () => {
	beforeEach(() => {
		const fs = require("fs");
		this.input_sample = fs.readFileSync("2022/inputs/7_sample.txt", "utf8").split("\n");
		this.input = fs.readFileSync("2022/inputs/7.txt", "utf8").split("\n");
    });

	test("Part 1", () => {
		expect(day7.part1(this.input_sample)).toBe(95437);
		expect(day7.part1(this.input)).toBe(1543140);
	});

	test("Part 2", () => {
		expect(day7.part2(this.input_sample)).toBe(24933642);
		expect(day7.part2(this.input)).toBe(1117448);
	});
});
