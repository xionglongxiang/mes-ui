<template>
  <m-select filterable v-model="curomponent" >
    <m-option
      v-for="item in components"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </m-select>
  <Component :is="compsMap.get(curomponent)" >111</Component>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import { useState } from '@packages/hooks'
import { app } from '../main'

const compsMap = ref(new Map([]))

const getComponents = () => {
  const comps = Object.entries(app._context.components)
    .filter(([, comp]: any) => comp.name.charAt(0) === 'M');
  // map
  comps.forEach(([key, comp]) => compsMap.value.set(key, comp))
  console.log(compsMap.value);
  
  return computed(() => 
    comps.map(([key, comp]: any)=> ({
      label: key,
      value: comp.__file
    }))
  )
}
console.log(getComponents());

const [components, setComponents] = useState(getComponents());
const [curomponent, setCuromponent] = useState(components.value[0])

</script>
