<template>
  <div>
    <button @click="openFileDialog">打开文件对话框</button>
  </div>
</template>

<script setup lang="ts">

let { ipcRenderer,clipboard } = window;

if (!ipcRenderer) {
  ipcRenderer = {} as any;
  ipcRenderer.on =
    ipcRenderer.invoke =
      ipcRenderer.removeAllListeners =
        (...args: any): any => {
    console.log("not electron");
  };
}

const arg = {
  name:'Images',
  extensions: ['jpg', 'png', 'gif']
}
function openFileDialog() {
  clipboard.writeText('hello i am a bit of text!!!')
  ipcRenderer
    .invoke('dialog-openFile', arg)
    .then((res) => {
      console.log(res)
    })
}
</script>
