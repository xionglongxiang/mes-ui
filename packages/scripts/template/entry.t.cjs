// template.js 
module.exports = { 
    entryTemplate1: compoenntName => { 
        return `import withInstall from '../../withInstall';
import Component from './src/index.vue'

export const ${compoenntName} = withInstall(Component)
export default ${compoenntName}
        ` 
    } 
}