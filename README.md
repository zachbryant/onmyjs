# onmyjs

turn your js config file into json

## Sample Usage

```javascript
const onmyjs = require('onmyjs').default;
module.exports = {
  compilerOptions: {
    ...
  }
}
onmyjs(module.exports, undefined, true); // export to json
```
