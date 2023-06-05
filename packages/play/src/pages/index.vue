<template>
    <m-button type="danger" @click="showDrawer">显示抽屉</m-button>
    <m-button type="primary" @click="showDialog">显示弹框</m-button>
    <br />
    <m-dialog v-model="dialogVisible" title="m-dialog" width="30%" draggable>
      <span>组件m-dialog</span>
      <template #footer>
        <span class="dialog-footer">
          <m-button @click="dialogVisible = false">Cancel</m-button>
          <m-button type="primary" @click="dialogVisible = false">
            Confirm
          </m-button>
        </span>
      </template>
    </m-dialog>
    <m-drawer title="m-drawer" v-model="drawerVisible">组件m-drawer</m-drawer>
    <br />
    <m-test-card :shadow="'hover'" :width="840" :height="630">
      <template #header>
         <m-test-title :type="'success'" :size="'small'">自定义组件m-test-title</m-test-title>
      </template>
      <img src="https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg" alt="">
    </m-test-card>
  </template>
  
  <script setup lang="ts">
  import { ref } from "vue";
//   import { MTestTitle } from '@packages/components'
  
  const dialogVisible = ref(false);
  const drawerVisible = ref(false);
  
  let showDialog = () => {
    dialogVisible.value = true;
  };
  let showDrawer = () => {
    drawerVisible.value = true;
  };
  </script>
  <style lang="scss">
  .notification-popper-class {
    padding: 0 !important;
  }
  </style>