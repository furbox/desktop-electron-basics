const loader = require('monaco-loader');
const { ipcRenderer } = require('electron');
 
loader().then((monaco) => {
  let editor = monaco.editor.create(document.getElementById('container'), {
    language: 'javascript',
    theme: 'vs-dark',
    automaticLayout: true
  })
})

ipcRenderer.on('showAlert', (ev, data) => {
    console.log(data)
    alert(data);
})