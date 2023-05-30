import {
  buttonProps,
  ElButton,
} from 'element-plus';

import withInstall from '../../withInstall';

const Button = withInstall(ElButton);
export default Button;

console.log("el", buttonProps);
console.log("ElButton", ElButton);
