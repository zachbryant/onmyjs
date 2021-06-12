# onmyjs

turn your js config file into json

**onmyjs(data: object, outputPath?: string, pretty = true): void**

- data: the data to write
- outputPath?: the relative file path/name to write to (`.json` ending if empty)
- pretty: whether to pretty-print or not

## Sample Usage

```javascript
const { onmyjs } = require('onmyjs');
module.exports = {
  compilerOptions: {
    ...
  }
}
onmyjs(module.exports, undefined, true); // export to samename.json
onmyjs(module.exports, '../config/stuff.json', true); // export to relative path
```
