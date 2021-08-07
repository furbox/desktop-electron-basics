console.log('hello world from renderer');
const fs = require('fs');
const files = fs.readdirSync('.');
console.log(files);
const ui = document.querySelector('#files');

let html = '';
files.forEach(file => {
    html += `<li>${file}</li>`;
})
ui.innerHTML = html;