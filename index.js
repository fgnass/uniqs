var filter = Array.prototype.filter;
var indexOf = Array.prototype.indexOf;

/**
 * Returns a de-duplicated version of the given list.
 */
module.exports = function uniqs(list) {
  if (!list) return [];
  return filter.call(list, function(item, i) {
    return i == indexOf.call(list, item);
  });
};
