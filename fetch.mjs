import { writeFileSync } from 'fs';
import { join } from 'path';
import fetch from 'node-fetch';

const __dirname = new URL('.', import.meta.url).pathname;


async function fetchSchedule() {
    let pretalxUrl = 'https://sessionize.com/api/v2/7bnltk7b/view/GridSmart';
    let response = await fetch(pretalxUrl);
    let data = await response.json();

    writeFileSync(join(__dirname, 'src/content/schedule/all.json'), JSON.stringify(data, null, 2));
}

fetchSchedule();
