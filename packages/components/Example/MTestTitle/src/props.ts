import type { ExtractPropTypes } from 'vue'
export const componentProps = {
    /**
     * @description text type
     */
    type: {
        type: String,
        values: ['primary', 'success', 'info', 'warning', 'danger', ''],
        default: '',
    },
    /**
     * @description text size
     */
    size: {
        type: String,
        values: ['default', 'small', 'large'],
        default: '',
    }
}
export type ComponentProps = ExtractPropTypes<typeof componentProps>
        