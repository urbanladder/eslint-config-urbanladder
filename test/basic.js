const config = require('../index')
const test = require('tape')
const tapSpec = require('tap-spec');

test.createStream()
  .pipe(tapSpec())
  .pipe(process.stdout)

test('test basic properties of config', (t) => {
  t.ok(Array.isArray(config.extends))
  t.ok(Array.isArray(config.plugins))
  t.ok(isObject(config.rules))
  t.end()
})

function isObject (obj) {
  return typeof obj === 'object' && obj !== null
}
