import fs  from "fs/promises";
import fetch  from "node-fetch"

async function downloadJsonlFile(url, destination) {
    const response = await fetch(url);
    const fileData = await response.text();
    await fs.writeFile(destination, fileData, 'utf-8');
}

export default downloadJsonlFile