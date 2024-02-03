<template>
  <el-row :gutter="20">
    <el-col :span="8">
      <el-button :icon="DocumentAdd" size="large" type="primary" @click="openFileDialog">源数据</el-button>
    </el-col>
    <el-col :span="8">
      <el-button :icon="DocumentAdd" size="large" type="success" @click="exportReport">月报</el-button>
    </el-col>
    <el-col :span="8">
      <el-button :icon="DocumentAdd" size="large" type="warning" @click="exportWorkHours">工时</el-button>
    </el-col>
  </el-row>
  <el-row style="padding-top: 36px">
    <el-text class="mx-1" size="large">{{ mes }}</el-text>
  </el-row>
</template>

<script setup lang="ts">
import { DocumentAdd } from '@element-plus/icons-vue'
import {ref} from "vue";

let { ipcRenderer } = window;

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
  name:'excel',
  extensions: ['xls', 'xlsx']
}

const mes = ref('请选择源数据文件');

function openFileDialog() {
  ipcRenderer
    .invoke('dialog-openFile', arg)
    .then((res) => {
      if (res) {
        mes.value = '已加载' + res;
        
      }
    })
}

function exportReport() {
  console.log('')
}

function exportWorkHours() {
  console.log('')
}
</script>



<style scoped lang="scss">

</style>
