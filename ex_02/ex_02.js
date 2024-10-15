const fs = require('fs').promises;
 
async function checkCSV(filePath) {
    const text = await fs.readFile(filePath, 'utf8');
    console.log(text);
}
 
checkCSV('temp.csv');