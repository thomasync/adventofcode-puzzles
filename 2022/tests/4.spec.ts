const day4 = require("../4.ts");

describe.only("2022 - Day 4", () => {
	beforeEach(() => {
		const fs = require("fs");
		this.input_sample = fs.readFileSync("2022/inputs/4_sample.txt", "utf8").split("\n");
		this.input = fs.readFileSync("2022/inputs/4.txt", "utf8").split("\n");
	});

	test("Part 1", () => {
		expect(day4.part1(this.input_sample)).toBe(2);
		expect(day4.part1(this.input)).toBe(580);
	});

	test("Part 2", () => {
        expect(day4.part2(this.input_sample)).toBe(4);
        expect(day4.part2(this.input)).toBe(895);
    });
});