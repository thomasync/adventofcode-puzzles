const day3 = require("../3.ts");

describe.only("2022 - Day 3", () => {
	beforeEach(() => {
        const fs = require("fs");
		this.input_sample = fs.readFileSync("2022/inputs/3_sample.txt", "utf8").split("\n");
		this.input = fs.readFileSync("2022/inputs/3.txt", "utf8").split("\n");
	});

	test("Part 1", () => {
		expect(day3.part1(this.input_sample)).toBe(157);
		expect(day3.part1(this.input)).toBe(8515);
	});

	test("Part 2", () => {
		expect(day3.part2(this.input_sample)).toBe(70);
		expect(day3.part2(this.input)).toBe(2434);
	});
});