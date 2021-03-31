/**
 * @file
 * JS.
 */

var varkert_fix_date_format = function(date) {
  var regex = /([0-9]+)[^0-9]+([0-9]+)[^0-9]+([0-9]+)([^0-9]+([0-9]+)[^0-9]+([0-9]+)[^0-9]+([0-9]+))?/;
  var match = regex.exec(date);

  if (!match) {
    return '';
  }

  jQuery.each(match, function (index, value) {
    if (!value) {
      match[index] = 0;
    }
  });


  var d = new Date(
    parseInt(match[1]),
    parseInt(match[2]) - 1,
    parseInt(match[3]),
    parseInt(match[5]),
    parseInt(match[6]),
    parseInt(match[7])
  );

  return d.toString();
};
