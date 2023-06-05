import { shallowMount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Comp from '../src/index.vue'

describe('MTestTitle.vue', () => {
    test('type', () => {
        const wrapper = shallowMount(Comp, {
            propsData: {
                type: 'success'
            }
        })
        const vm = wrapper.vm
        expect(vm.$el.classList.contains('el-text--success')).toEqual(true)
    })

    test('size', () => {
        const wrapper = shallowMount(Comp, {
            propsData: {
                size: 'large'
            }
        })
        const vm = wrapper.vm
        expect(vm.$el.className.includes('el-text--large')).toEqual(true)
        expect(vm.$el.className.includes('el-text--default')).toEqual(false)
        expect(vm.$el.className.includes('el-text--small')).toEqual(false)
    })
})
            