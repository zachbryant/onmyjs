# onmyjs

turn your js config file into json

**onmyjs(data: object, outputFilename?: string, pretty = true): void**

- data: the data to write
- outputFilename: the relative file path/name to write to (forced `.json` ending)
- pretty: whether to pretty-print or not

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
