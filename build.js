const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');
// Remove BOM (﻿), espaços e quebras de linha que o env var pode carregar
const key = (process.env.GEMINI_KEY || '').replace(/^﻿/, '').trim();
html = html.replace('__GEMINI_KEY__', key);
fs.writeFileSync('index.html', html);
console.log('Build: GEMINI_KEY injetado. Prefixo:', key.substring(0, 10) + '...');
