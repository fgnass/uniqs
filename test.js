var uniqs = require('./');
var util = require('util');
var assert = require('assert');

var foo = { foo: 23 };

[
  [ [2, 2, 3, "a", 3, 1, foo, foo, "a" ], [ 2, 3, "a", 1, foo ] ],
  [ [], [] ],
  [ undefined, [] ],
  [ 23, [] ]
]
.forEach(function(t) {
  assert.deepEqual(uniqs(t[0]), t[1],
    util.format('✘  uniqs(%j) !== %j', t[0], t[1])
  );
  console.log('✔  uniqs(%j) == %j', t[0], t[1]);
});
