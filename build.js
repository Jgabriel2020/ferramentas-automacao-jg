const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');
html = html.replace('__GEMINI_KEY__', process.env.GEMINI_KEY || '');
fs.writeFileSync('index.html', html);
console.log('Build: GEMINI_KEY injetado com sucesso.');
