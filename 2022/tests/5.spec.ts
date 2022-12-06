const day5 = require("../5.ts");

describe.only("2022 - Day 5", () => {
	beforeEach(() => {
		const fs = require("fs");
		this.input_sample = fs.readFileSync("2022/inputs/5_sample.txt", "utf8").split("\n");
		this.input = fs.readFileSync("2022/inputs/5.txt", "utf8").split("\n");
	});

	test("Part 1", () => {
		expect(day5.part1(this.input_sample)).toBe("CMZ");
		expect(day5.part1(this.input)).toBe("QPJPLMNNR");
	});

	test("Part 2", () => {
		expect(day5.part2(this.input_sample)).toBe("MCD");
		expect(day5.part2(this.input)).toBe("BQDNWJPVJ");
	});
});
