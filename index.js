var fs = require('fs');
var db = {};
var records = fs.readFileSync('log.txt', 'utf8').trim().split('\n\n');
records.forEach(s => {
  var tuple = s.trim().split('\n').slice(-2);
  var time = new Date(tuple[0]);
  var deletes = tuple[1].match(/([0-9]+) deletion/);
  deletes = deletes ? +deletes[1] : 0;
  var inserts = tuple[1].match(/([0-9]+) insertion/);
  inserts = inserts ? +inserts[1] : 0;
  db[time.toISOString().slice(0, 10)] = (db[time.toISOString().slice(0, 10)] || 0) + inserts + deletes;
});
delete db['2005-04-16']; // "Sat Apr 16 15:20:36 2005 -0700", 17291 files changed, 6718755 insertions(+)
delete db['1970-01-01']; // ...
delete db['2030-08-14'];
delete db['2037-04-25'];
var arr = Object.entries(db);
arr.sort((a, b) => b[0] < a[0] ? 1 : -1);
fs.writeFileSync('parsed.json', JSON.stringify(arr));