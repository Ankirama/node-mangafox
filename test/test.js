var mf = require('../main.js')

var id = "15975"; // Tensei Shitara Slime Datta Ken
var manga = "Tensei Shitara Slime Datta Ken";
var mangaSearch = "tensei";

function testDetails(id) {
    mf.getDetails(id)
        .then(console.log)
        .catch(console.log);
}

function testSearch(mangaSearch) {
    mf.search(mangaSearch, function(a, b, c) {
        console.log(a)
    });
}

testDetails(id);