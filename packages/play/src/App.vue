<template>
  <m-tag>ssasasa</m-tag>
  <m-button text="111100" @click="showDrawer">显示抽屉</m-button>
  <m-button type="primary" @click="showDialog">显示弹框</m-button>
  <m-dialog v-model="dialogVisible" title="Tips" width="30%" draggable>
    <span>It's a draggable Dialog</span>
    <template #footer>
      <span class="dialog-footer">
        <m-button @click="dialogVisible = false">Cancel</m-button>
        <m-button type="primary" @click="dialogVisible = false">
          Confirm
        </m-button>
      </span>
    </template>
  </m-dialog>
  <m-drawer v-model="drawerVisible">sdf</m-drawer>
  <m-demo1 :type="'success'" :size="'small'">test</m-demo1>
  <el-text :type="'success'" :size="'small'">sasaa</el-text>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { ElText } from "element-plus";
// import { MDemo1 } from '@packages/components'

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
