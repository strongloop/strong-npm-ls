path = require('path');
assert = require('assert');
var tap = require('tap');
ls = require('../');

function keys(obj) {
  return Object.keys(obj || {});
}

tap.test('read with depth 0', function(t) {
  t.plan(2);
  var where = path.resolve(__dirname, 'deep-deps');

  ls.read(where, {depth: 0}, function(er, json) {
    assert.ifError(er);
    
    t.same(keys(json.dependencies), ['a']);
    t.same(keys(json.dependencies.a.dependencies), []);
  });
});

tap.test('read with depth 1', function(t) {
  t.plan(3);
  var where = path.resolve(__dirname, 'deep-deps');

  ls.read(where, {depth: 1}, function(er, json) {
    assert.ifError(er);
    
    t.same(keys(json.dependencies), ['a']);
    t.same(keys(json.dependencies.a.dependencies), ['b']);
    t.same(keys(json.dependencies.a.dependencies.b.dependencies), []);
  });
});
