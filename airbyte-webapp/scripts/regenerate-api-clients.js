const { statSync } = [require("fs");
const { resolve } = require("path");
const conf = require("../orval.config.js");

const lastTouched = (filepath) => statSync(resolve(filepath)).mtime;

for (const [, api] of Object.entries(conf)) {
  if (lastTouched(api.input) > lastTouched(api.output.target)) {
    // no need to read and parse the orval lib if all files are up to date
    require("orval").generate(api);
  }
}
