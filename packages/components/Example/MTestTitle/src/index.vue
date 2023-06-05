<template>
    <span :class="classNames">
        <slot />
    </span>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { componentProps } from './props'

defineOptions({
    name: 'ElTestTitle',
})
defineExpose({

})

const props = defineProps(componentProps)
const typeMap = new Map([
    ['', ''],
    ['primary', 'el-text--primary'],
    ['success', 'el-text--success'],
    ['info', 'el-text--info'],
    ['warning', 'el-text--warning'],
    ['danger', 'el-text--danger']
])
const sizeMap = new Map([
    ['', ''],
    ['default', 'el-text--default'],
    ['small', 'el-text--small'],
    ['large', 'el-text--large'],
])

const classNames = computed(() => [
    'el-text',
    typeMap.get(props.type),
    sizeMap.get(props.size)
])
</script>

<style lang="scss" scoped>
@use "element-plus/theme-chalk/src/index" as *;
</style>
        