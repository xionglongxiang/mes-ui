<template>
    <article :style="cardStyle">
        <el-card :shadow="props.shadow" class="box-card">
            <div v-if="$slots.header || props.header" :class="'header'">
                <slot name="header">{{ header }}</slot>
            </div>
            <div :class="'body'">
                <slot />
            </div>
        </el-card>
    </article>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { CSSProperties } from 'vue'
import { ElCard } from 'element-plus'
import { componentProps } from './props'

defineOptions({
    name: 'ElTestCard',
})
defineExpose({

})

const props = defineProps(componentProps)

const cardStyle = computed<CSSProperties>(() => ({
  width: props.width + 'px',
  height: props.height + 'px',
}))

</script>

<style lang="scss" scoped>
@use "element-plus/theme-chalk/src/index" as *;
@mixin f12 {
    font-size: 12px;
}
.box-card {
    width: 100%;
    height: 100%;
}
.header {
    height: 40px;
    display: grid;
    place-content: center;
    background-color: rgb(236, 239, 239);
    margin-bottom: 20px;
}
.body {
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    @include f12
}
</style>
        