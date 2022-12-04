const day1 = require("../1.ts");

describe("2022 - Day 1", () => {
	beforeEach(() => {
		const fs = require("fs");
		this.input_sample = fs.readFileSync("2022/inputs/1_sample.txt", "utf8").split("\n");
		this.input = fs.readFileSync("2022/inputs/1.txt", "utf8").split("\n");
	});

	test("Part 1", () => {
		expect(day1.part1(this.input_sample)[0]).toBe(24000);
		expect(day1.part1(this.input)[0]).toBe(69177);
	});

	test("Part 2", () => {
		expect(day1.part2(day1.part1(this.input_sample)[1])).toBe(45000);
		expect(day1.part2(day1.part1(this.input)[1])).toBe(207456);
	});
});
