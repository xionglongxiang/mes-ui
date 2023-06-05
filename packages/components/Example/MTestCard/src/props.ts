import type { ExtractPropTypes } from 'vue'
export const componentProps = {
    /**
     * @description width height
     */
    width: {
        type: Number,
        default: 120,
    },
    height: {
        type: Number,
        default: 120,
    },
    header: {
        type: String,
        default: '',
    },
    shadow: {
        type: undefined,
        values: ['always', 'hover', 'never'],
        default: 'always',
    }
} as const;
export type ComponentProps = ExtractPropTypes<typeof componentProps>
        