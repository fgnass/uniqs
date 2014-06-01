### Tiny utility to de-duplicate lists.

Example:

```js
var uniqs = require('uniqs');

var foo = { foo: 23 };
var list = [ 3, 2, 2, 1, foo, foo ];

console.log(uniqs(list));
```

Output:

```js
[ 3, 2, 1, { foo: 23 } ]

```

* Uniqueness is defined based on strict object equality.
* The list does not need to be sorted.
* The original list is not modified.
* If the given argument is not _array-like_, an empty array is returned.

### About

This package has been written to accompany utilities like
[flatten](https://npmjs.org/package/flatten) as alternative to full-blown
libraries like underscore or lodash.

The implementation is optimized for simplicity rather than performance and
looks like this:

```js
var filter = Array.prototype.filter;
var indexOf = Array.prototype.indexOf;

module.exports = function uniqs(list) {
  if (!list) return [];
  return filter.call(list, function(item, i) {
    return i == indexOf.call(list, item);
  });
};
```

### License
MIT
