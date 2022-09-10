console.log(process.argv);
console.log(process.argv.length);
const pretty = require("pretty");

var myUrl="";
var screenshot="N";
if (process.argv.length < 3) {
    console.log('Need url in commandline');
    process.exit(1);
}
else
{
    myUrl=process.argv[2];
    screenshot=process.argv[3];
}

const { webkit } = require('playwright');

(async () => {
        const browser = await webkit.launch();
        const page = await browser.newPage();
        await page.goto(myUrl, { waitUntil: 'networkidle' });
	if (screenshot == "Y") {
        	await page.screenshot({ path: `screenshots/example.png` });
	}
        const content = await page.content();
        console.log(pretty(content));
        await browser.close();
})();

