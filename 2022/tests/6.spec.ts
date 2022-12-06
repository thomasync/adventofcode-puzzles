const day6 = require("../6.ts");

describe.only("2022 - Day 6", () => {
	beforeEach(() => {
		const fs = require("fs");
		this.input_sample = fs.readFileSync("2022/inputs/6_sample.txt", "utf8").split("\n");
		this.input = fs.readFileSync("2022/inputs/6.txt", "utf8").split("\n");
    });

	test("Part 1", () => {
		expect(day6.part1(this.input_sample)).toBe(11);
		expect(day6.part1(this.input)).toBe(1582);
	});

	test("Part 2", () => {
		expect(day6.part2(this.input_sample)).toBe(26);
        expect(day6.part2(this.input)).toBe(3588);
	});
});
