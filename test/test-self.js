// Copyright IBM Corp. 2014. All Rights Reserved.
// Node module: strong-npm-ls
// This file is licensed under the Artistic License 2.0.
// License text available at https://opensource.org/licenses/Artistic-2.0

require('./helpers');

var info = require('../package.json');
var root = path.dirname(require.resolve('../'));

console.log('root: %s', root);

ls.read(root, function(er, json) {
  assert.ifError(er);

  assert.equal(info.version, json.version);
  assert.equal(info.name, json.name);
  assert.equal('read-installed', json.dependencies['read-installed'].name);
  assert(json.dependencies['read-installed']._id);
  assert(json.dependencies['read-installed']._shasum);
  assert(json.dependencies['read-installed']._from);
});
