---
to: apps/<%= h.inflection.dasherize(name) %>/package.json
---
{
  "name": "<%= h.inflection.dasherize(name) %>",
  "version": "0.0.1",
  "scripts": {
    "lint": "eslint --fix ./ --ext .ts",
    "type": "tsc --noEmit"
  },
  "module": "src/index.ts",
  "type": "module",
  "dependencies": {
    "bun-types": "latest"
  },
  "devDependencies": {
    "@repo/eslint-config": "workspace:*",
    "@repo/typescript-config": "workspace:*"
  }
}
