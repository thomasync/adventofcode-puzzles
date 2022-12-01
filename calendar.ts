(async () => {
    const puppeteer = require("puppeteer");
    const fs = require("fs");
    const path = require("path");

	const browser = await puppeteer.launch({
		headless: true,
		defaultViewport: {
			width: 840,
			height: 840,
		},
	});
	const page = (await browser.pages())[0];

	let content = `<!DOCTYPE html><html><head><style>html,body{margin: 0; padding: 0; height: 100%; width: 100%; background-color: #0d1117; } #calendar { display: grid; grid-template-columns: repeat(5, 1fr); gap: 20px 20px; width: 800px; height: 800px; background-color: #0d1117; padding: 20px; } .day { position: relative; width: 100%; height: 100%; background-color: #ECC11B; display: flex; align-items: center; justify-content: center; border-radius: 5px; } .day.not-resolved { background-color: transparent; } .day .gift { position: absolute; top: 0; left: 0; right: 0; bottom: 0; display: flex; align-items: center; justify-content: center; } .day .gift-image { width: 140px; height: 140px; } .day h1 { margin: 0; padding: 0; font-family: Arial, Helvetica, sans-serif; color: black; font-size: 15px; } </style> </head> <body> <div id="calendar"> </div> <script> const resolveds = {{resolveds}}; for(let i = 1; i <= 25; i++) { let day = document.createElement("div"); day.classList.add("day"); let gift = document.createElement("div"); gift.classList.add("gift"); let h1 = document.createElement("h1"); h1.innerText = i; let image = document.createElement("img"); image.src = "{{gift_image}}"; image.classList.add("gift-image"); day.appendChild(image); const resolved = resolveds.find(resolved => resolved.day == i); if (resolved) { image.src = resolved.image; } else { day.classList.add('not-resolved'); gift.appendChild(h1); } day.appendChild(gift); document.getElementById("calendar").appendChild(day); } </script> </body></html>`;
	content = content.replace(
		"{{gift_image}}",
		"data:image/svg+xml;base64," + fs.readFileSync(path.join(__dirname, "imgs/gift.svg")).toString("base64")
	);

	const resolveds: {
		day: number;
		image: string;
	}[] = [];

	fs.readdirSync("imgs").forEach((file: string) => {
		if (file.match(/\d{1,2}\./)) {
			resolveds.push({
				day: parseInt(file.split(".")[0]),
				image:"data:image/png;base64," + fs.readFileSync(path.join(__dirname, "imgs/", file)).toString("base64"),
			});
		}
	});

	content = content.replace("{{resolveds}}", JSON.stringify(resolveds));


	await page.setContent(content);
	
    // Version Dark
    await page.screenshot({ path: path.join(__dirname, "imgs/calendar.png") });

    // Version Light
    await page.$eval('#calendar', (el: any) => el.style.backgroundColor = 'white');
    await page.screenshot({ path: path.join(__dirname, "imgs/calendar_light.png") });

	await browser.close();
})();
