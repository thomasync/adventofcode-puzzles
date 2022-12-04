const day2 = require("../2.ts");

describe("2022 - Day 2", () => {
	beforeEach(() => {
		const fs = require("fs");
		this.input_sample = fs.readFileSync("2022/inputs/2_sample.txt", "utf8").split("\n");
		this.input = fs.readFileSync("2022/inputs/2.txt", "utf8").split("\n");
	});

	test("Part 1", () => {
		expect(day2.part1(this.input_sample)).toBe(15);
		expect(day2.part1(this.input)).toBe(13446);
	});

	test("Part 2", () => {
		expect(day2.part2(this.input_sample, day2.part1(this.input_sample))).toBe(12);
		expect(day2.part2(this.input, day2.part1(this.input))).toBe(13509);
	});
});
