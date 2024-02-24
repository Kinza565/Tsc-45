// lower case
var personName = "Kinza";
console.log("lowercase:", personName.toLowerCase());
// upper case
console.log("uppercase:", personName.toLocaleUpperCase());
// Tittle case
console.log("titlecase:", personName.replace(/\kw/g, function (c) { return c.toUpperCase(); }));
