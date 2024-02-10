---
to: apps/<%= h.inflection.dasherize(name) %>/.eslintrc.json
---
{
  "extends": ["@repo/eslint-config"],
  "root": true
}
